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
      map: atlas.texture, vertexColors: true, transparent: true, opacity: 0.62, depthWrite: false,
    })
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
            const { u0, v0, u1, v1 } = this.atlas.uvRect(def.tiles[face.side])
            const faceUV = [[u0, v0], [u1, v0], [u1, v1], [u0, v1]]
            const s = face.shade * dim
            for (let i = 0; i < 4; i++) {
              const [ox, oy, oz] = face.c[i]
              pass.positions.push(x + ox, y + oy, z + oz)
              pass.normals.push(face.n[0], face.n[1], face.n[2])
              pass.colors.push(s, s, s)
              pass.uvs.push(faceUV[i][0], faceUV[i][1])
            }
            pass.indices.push(base, base + 1, base + 2, base, base + 2, base + 3)
          }
        }
      }
    }

    // 替换旧 mesh
    const old = this.meshes.get(key)
    if (old) {
      for (const m of Object.values(old)) {
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
    else this.meshes.set(key, entry)
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
