// chunk 网格生成 v2：三 pass —— 不透明 / 水(半透明) / 火(半透明)
// 不透明面输出条件：邻居非不透明（isOpaque=false），这样水下海床、火后墙面可见
import * as THREE from 'three'
import { CFG } from './config.js'
import { B, BLOCKS, isOpaque } from './blocks.js'

const FACES = [
  { n: [1, 0, 0],  c: [[1, 0, 1], [1, 0, 0], [1, 1, 0], [1, 1, 1]], shade: 0.8,  side: 'side' },
  { n: [-1, 0, 0], c: [[0, 0, 0], [0, 0, 1], [0, 1, 1], [0, 1, 0]], shade: 0.8,  side: 'side' },
  { n: [0, 1, 0],  c: [[0, 1, 1], [1, 1, 1], [1, 1, 0], [0, 1, 0]], shade: 1.0,  side: 'top' },
  { n: [0, -1, 0], c: [[0, 0, 0], [1, 0, 0], [1, 0, 1], [0, 0, 1]], shade: 0.55, side: 'bottom' },
  { n: [0, 0, 1],  c: [[0, 0, 1], [1, 0, 1], [1, 1, 1], [0, 1, 1]], shade: 0.7,  side: 'side' },
  { n: [0, 0, -1], c: [[1, 0, 0], [0, 0, 0], [0, 1, 0], [1, 1, 0]], shade: 0.7,  side: 'side' },
]

// 经典体素顶点 AO：0（最暗，两侧被挡）~ 3（全亮）
const AO_LEVELS = [0.5, 0.68, 0.84, 1.0]
function vertexAO(world, bx, by, bz, n, corner) {
  // 面外一层的基准格
  const px = bx + n[0], py = by + n[1], pz = bz + n[2]
  // 该角点在面平面内的两个切向（法线为 0 的两个轴，方向由角点坐标决定）
  let t1 = null, t2 = null
  for (let a = 0; a < 3; a++) {
    if (n[a] !== 0) continue
    const dir = corner[a] === 1 ? 1 : -1
    const v = [0, 0, 0]; v[a] = dir
    if (!t1) t1 = v; else t2 = v
  }
  const solid = (dx, dy, dz) => isOpaque(world.get(px + dx, py + dy, pz + dz)) ? 1 : 0
  const s1 = solid(t1[0], t1[1], t1[2])
  const s2 = solid(t2[0], t2[1], t2[2])
  if (s1 && s2) return 0
  const c = solid(t1[0] + t2[0], t1[1] + t2[1], t1[2] + t2[2])
  return 3 - (s1 + s2 + c)
}

function makeGeo(positions, normals, colors, uvs, indices) {
  const geo = new THREE.BufferGeometry()
  geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
  geo.setAttribute('normal', new THREE.Float32BufferAttribute(normals, 3))
  geo.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3))
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uvs, 2))
  geo.setIndex(indices)
  return geo
}

export class ChunkManager {
  // opts: { surfaceY: 深度变暗基准（null=不变暗） }
  constructor(world, group, atlas, opts = {}) {
    this.world = world
    this.group = group          // 该维度的场景 Group
    this.atlas = atlas
    this.surfaceY = opts.surfaceY ?? null
    this.material = new THREE.MeshLambertMaterial({ map: atlas.texture, vertexColors: true })
    this.waterMaterial = new THREE.MeshLambertMaterial({
      map: atlas.waterTexture, vertexColors: true, transparent: true, opacity: 0.62, depthWrite: false,
    })
    atlas.waterMaterials && atlas.waterMaterials.push(this.waterMaterial)
    this.fireMaterial = new THREE.MeshBasicMaterial({
      map: atlas.texture, vertexColors: true, transparent: true, opacity: 0.85, depthWrite: false, side: THREE.DoubleSide,
    })
    this.meshes = new Map()       // key -> { solid, water, fire }
  }

  buildChunk(cx, cz) {
    const key = `${cx},${cz}`
    const world = this.world
    const C = CFG.CHUNK
    const S = { positions: [], normals: [], colors: [], uvs: [], indices: [] }
    const W = { positions: [], normals: [], colors: [], uvs: [], indices: [] }
    const F = { positions: [], normals: [], colors: [], uvs: [], indices: [] }
    const x0 = cx * C, z0 = cz * C

    for (let y = 0; y < world.sy; y++) {
      for (let z = z0; z < Math.min(z0 + C, world.sz); z++) {
        for (let x = x0; x < Math.min(x0 + C, world.sx); x++) {
          const id = world.get(x, y, z)
          if (id === B.AIR) continue
          const def = BLOCKS[id]
          const pass = id === B.WATER ? W : (id === B.FIRE ? F : S)
          const dim = this.surfaceY === null ? 1 :
            Math.max(0.45, Math.min(1, 1 - (this.surfaceY - y) / 160))
          for (const face of FACES) {
            const nx = x + face.n[0], ny = y + face.n[1], nz = z + face.n[2]
            const nid = world.get(nx, ny, nz)
            if (pass === S) {
              if (isOpaque(nid)) continue
            } else {
              // 水/火：只对空气出面（水面、贴岸侧、火焰体）
              if (nid !== B.AIR) continue
            }
            const base = pass.positions.length / 3
            const s = face.shade * dim
            if (pass === W) {
              // 水：世界坐标平面 UV（配合 offset 滚动产生流动感）
              for (let i = 0; i < 4; i++) {
                const [ox, oy, oz] = face.c[i]
                const wx = x + ox, wy = y + oy, wz = z + oz
                pass.positions.push(wx, wy, wz)
                pass.normals.push(face.n[0], face.n[1], face.n[2])
                pass.colors.push(s, s, s)
                if (face.n[1] !== 0) pass.uvs.push(wx * 0.22, wz * 0.22)
                else pass.uvs.push((wx + wz) * 0.22, wy * 0.22)
              }
              pass.indices.push(base, base + 1, base + 2, base, base + 2, base + 3)
            } else {
              const { u0, v0, u1, v1 } = this.atlas.uvRect(def.tiles[face.side])
              const faceUV = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]
              const ao = []
              for (let i = 0; i < 4; i++) {
                const [ox, oy, oz] = face.c[i]
                ao[i] = vertexAO(world, x, y, z, face.n, face.c[i])
                const v = s * AO_LEVELS[ao[i]]
                pass.positions.push(x + ox, y + oy, z + oz)
                pass.normals.push(face.n[0], face.n[1], face.n[2])
                pass.colors.push(v, v, v)
                pass.uvs.push(faceUV[i][0], faceUV[i][1])
              }
              // AO 各向异性：按明暗选择四边形对角线方向
              if (ao[0] + ao[2] > ao[1] + ao[3]) pass.indices.push(base, base + 1, base + 2, base, base + 2, base + 3)
              else pass.indices.push(base + 1, base + 2, base + 3, base + 1, base + 3, base)
            }
          }
        }
      }
    }

    // 替换旧 mesh
    const old = this.meshes.get(key)
    if (old) {
      for (const k of ['solid', 'water', 'fire']) {
        const m = old[k]
        if (m) { this.group.remove(m); m.geometry.dispose() }
      }
    }
    const entry = { solid: null, water: null, fire: null }
    if (S.positions.length) {
      entry.solid = new THREE.Mesh(makeGeo(S.positions, S.normals, S.colors, S.uvs, S.indices), this.material)
      entry.solid.matrixAutoUpdate = false
      this.group.add(entry.solid)
    }
    if (W.positions.length) {
      entry.water = new THREE.Mesh(makeGeo(W.positions, W.normals, W.colors, W.uvs, W.indices), this.waterMaterial)
      entry.water.matrixAutoUpdate = false
      entry.water.renderOrder = 1
      this.group.add(entry.water)
    }
    if (F.positions.length) {
      entry.fire = new THREE.Mesh(makeGeo(F.positions, F.normals, F.colors, F.uvs, F.indices), this.fireMaterial)
      entry.fire.matrixAutoUpdate = false
      entry.fire.renderOrder = 2
      this.group.add(entry.fire)
    }
    if (!entry.solid && !entry.water && !entry.fire) this.meshes.delete(key)
    else { entry.cx = cx; entry.cz = cz; this.meshes.set(key, entry) }
  }

  // 渲染距离：超过 maxDist 的 chunk 整体隐藏（大地图控 draw call）
  updateVisibility(px, pz, maxDist) {
    const C = CFG.CHUNK
    for (const e of this.meshes.values()) {
      const dx = (e.cx + 0.5) * C - px
      const dz = (e.cz + 0.5) * C - pz
      const vis = dx * dx + dz * dz < maxDist * maxDist
      if (e.solid) e.solid.visible = vis
      if (e.water) e.water.visible = vis
      if (e.fire) e.fire.visible = vis
    }
  }

  *buildAllIterator() {
    for (let cz = 0; cz < this.world.chunksZ; cz++) {
      for (let cx = 0; cx < this.world.chunksX; cx++) {
        this.buildChunk(cx, cz)
        yield
      }
    }
  }

  totalChunks() { return this.world.chunksX * this.world.chunksZ }

  update() {
    let budget = CFG.MESH_BUDGET_PER_FRAME
    for (const key of this.world.dirty) {
      if (budget-- <= 0) break
      this.world.dirty.delete(key)
      const [cx, cz] = key.split(',').map(Number)
      this.buildChunk(cx, cz)
    }
  }
}
