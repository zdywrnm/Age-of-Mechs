// 体素射线（DDA）+ 挖掘/放置/攻击/交互
import * as THREE from 'three'
import { CFG } from '../config.js'
import { B, BLOCKS, isBreakable } from '../blocks.js'
import { blockIntersectsEntity } from './physics.js'
import { createCrackTextures } from '../textures.js'

// Amanatides & Woo 体素步进。origin: Vector3, dir: 归一化 Vector3
// 返回 { x, y, z, face: [nx,ny,nz], dist } 或 null
export function raycastVoxel(world, origin, dir, maxDist) {
  let x = Math.floor(origin.x), y = Math.floor(origin.y), z = Math.floor(origin.z)
  const stepX = dir.x > 0 ? 1 : -1, stepY = dir.y > 0 ? 1 : -1, stepZ = dir.z > 0 ? 1 : -1
  const tDeltaX = dir.x !== 0 ? Math.abs(1 / dir.x) : Infinity
  const tDeltaY = dir.y !== 0 ? Math.abs(1 / dir.y) : Infinity
  const tDeltaZ = dir.z !== 0 ? Math.abs(1 / dir.z) : Infinity
  const distTo = (o, i, step) => step > 0 ? (i + 1 - o) : (o - i)
  let tMaxX = dir.x !== 0 ? distTo(origin.x, x, stepX) * tDeltaX : Infinity
  let tMaxY = dir.y !== 0 ? distTo(origin.y, y, stepY) * tDeltaY : Infinity
  let tMaxZ = dir.z !== 0 ? distTo(origin.z, z, stepZ) * tDeltaZ : Infinity
  let face = [0, 0, 0]
  let t = 0
  for (let i = 0; i < 256; i++) {
    if (t > maxDist) return null
    if (world.get(x, y, z) !== B.AIR && t > 0) {
      return { x, y, z, face, dist: t }
    }
    if (tMaxX < tMaxY && tMaxX < tMaxZ) {
      x += stepX; t = tMaxX; tMaxX += tDeltaX; face = [-stepX, 0, 0]
    } else if (tMaxY < tMaxZ) {
      y += stepY; t = tMaxY; tMaxY += tDeltaY; face = [0, -stepY, 0]
    } else {
      z += stepZ; t = tMaxZ; tMaxZ += tDeltaZ; face = [0, 0, -stepZ]
    }
  }
  return null
}

// 射线 vs AABB（怪物点击判定），返回距离或 null
export function rayAABB(origin, dir, min, max) {
  let tmin = 0, tmax = Infinity
  for (const axis of ['x', 'y', 'z']) {
    const o = origin[axis], d = dir[axis]
    if (Math.abs(d) < 1e-8) {
      if (o < min[axis] || o > max[axis]) return null
    } else {
      let t1 = (min[axis] - o) / d, t2 = (max[axis] - o) / d
      if (t1 > t2) [t1, t2] = [t2, t1]
      tmin = Math.max(tmin, t1); tmax = Math.min(tmax, t2)
      if (tmin > tmax) return null
    }
  }
  return tmin
}

// ctx: { world, player, controls, camera, monsters, hud, onChestOpen, onNpcTalk, onBlockMined, onBlockPlaced }
export class Interaction {
  constructor(ctx) {
    this.ctx = ctx
    this.mineTarget = null    // {x,y,z}
    this.mineProgress = 0
    this.attackCooldown = 0
    this.highlight = this.makeHighlight()
    ctx.scene.add(this.highlight)
    // 挖掘破碎覆盖层：四阶段裂纹逐渐蔓延
    this.crackTexs = createCrackTextures()
    this.crack = new THREE.Mesh(
      new THREE.BoxGeometry(1.004, 1.004, 1.004),
      new THREE.MeshBasicMaterial({
        map: this.crackTexs[0], transparent: true, depthWrite: false,
        polygonOffset: true, polygonOffsetFactor: -2,
      })
    )
    this.crack.visible = false
    ctx.scene.add(this.crack)

    ctx.controls.onLeftDown = () => this.onLeftDown()
    ctx.controls.onRightDown = () => this.onRightDown()
  }

  makeHighlight() {
    const geo = new THREE.BoxGeometry(1.002, 1.002, 1.002)
    const edges = new THREE.EdgesGeometry(geo)
    const line = new THREE.LineSegments(edges, new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 }))
    line.visible = false
    return line
  }

  eyeRay() {
    const { camera, controls } = this.ctx
    // 从相机沿视线；命中距离以玩家为准校验
    const dir = controls.forward(new THREE.Vector3())
    return { origin: camera.position.clone(), dir }
  }

  // 当前准星指向的方块（考虑玩家距离限制）
  targetBlock() {
    const { world, player } = this.ctx
    const { origin, dir } = this.eyeRay()
    const hit = raycastVoxel(world, origin, dir, CFG.CAM_DIST + CFG.REACH_BLOCK)
    if (!hit) return null
    const px = player.ent.pos.x, py = player.ent.pos.y + 1, pz = player.ent.pos.z
    const d = Math.hypot(hit.x + 0.5 - px, hit.y + 0.5 - py, hit.z + 0.5 - pz)
    if (d > CFG.REACH_BLOCK) return null
    return hit
  }

  // 准星指向的怪物（比方块近才算）
  targetMonster() {
    const { monsters, player } = this.ctx
    const { origin, dir } = this.eyeRay()
    const blockHit = this.targetBlock()
    const blockDist = blockHit ? blockHit.dist : Infinity
    let best = null, bestD = Infinity
    for (const m of monsters.list) {
      if (m.dead) continue
      const hw = m.w / 2 + 0.15
      const min = { x: m.ent.pos.x - hw, y: m.ent.pos.y - 0.1, z: m.ent.pos.z - hw }
      const max = { x: m.ent.pos.x + hw, y: m.ent.pos.y + m.h + 0.1, z: m.ent.pos.z + hw }
      const t = rayAABB(origin, dir, min, max)
      if (t === null || t > bestD) continue
      const px = player.ent.pos.x, py = player.ent.pos.y + 1, pz = player.ent.pos.z
      const d = Math.hypot(m.ent.pos.x - px, m.ent.pos.y - py, m.ent.pos.z - pz)
      if (d > CFG.REACH_ATTACK + m.w) continue
      if (t < blockDist + 0.5) { best = m; bestD = t }
    }
    return best
  }

  onLeftDown() {
    const { player } = this.ctx
    if (player.form === 'car' || player.form === 'dive') return
    const m = this.targetMonster()
    if (m && this.attackCooldown <= 0) {
      this.attackCooldown = CFG.ATTACK_COOLDOWN
      this.ctx.monsters.hitMonster(m, player.attack(), player.ent.pos)
      player.swing()
    }
    // 挖掘由 update 中的 leftDown 持续处理
  }

  onRightDown() {
    const { world, player, controls } = this.ctx
    if (player.form === 'car' || player.form === 'dive') return
    const hit = this.targetBlock()
    if (!hit) return
    const id = world.get(hit.x, hit.y, hit.z)
    // 交互：箱子 / 床
    if (id === B.CHEST) { this.ctx.onChestOpen && this.ctx.onChestOpen(hit.x, hit.y, hit.z); return }
    if (id === B.BED) { this.ctx.onBedUse && this.ctx.onBedUse(); return }
    // 竞技房禁放
    if (this.ctx.isRestricted && this.ctx.isRestricted()) return
    // 放置
    const slot = player.hotbarSelected()
    if (!slot) return
    const bx = hit.x + hit.face[0], by = hit.y + hit.face[1], bz = hit.z + hit.face[2]
    if (!world.inBounds(bx, by, bz)) return
    if (world.get(bx, by, bz) !== B.AIR) return
    if (blockIntersectsEntity(bx, by, bz, player.ent)) return
    for (const m of this.ctx.monsters.list) if (!m.dead && blockIntersectsEntity(bx, by, bz, m.ent)) return
    world.set(bx, by, bz, slot.id)
    player.consumeBlock(slot.id)
    this.ctx.onBlockPlaced && this.ctx.onBlockPlaced(slot.id)
  }

  update(dt) {
    const { world, player, controls, hud } = this.ctx
    this.attackCooldown = Math.max(0, this.attackCooldown - dt)

    const hit = (player.form !== 'car' && player.form !== 'dive' && controls.isLocked() && controls.enabled) ? this.targetBlock() : null
    // 高亮
    if (hit) {
      this.highlight.visible = true
      this.highlight.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5)
    } else {
      this.highlight.visible = false
    }

    // 长按挖掘（左键或 F 键，触控板友好）；竞技房禁挖
    const restricted = this.ctx.isRestricted && this.ctx.isRestricted()
    const mineHeld = (controls.leftDown || controls.keys.KeyF) && !restricted
    if (hit && mineHeld && !this.targetMonster()) {
      const id = world.get(hit.x, hit.y, hit.z)
      if (isBreakable(id)) {
        const same = this.mineTarget && this.mineTarget.x === hit.x && this.mineTarget.y === hit.y && this.mineTarget.z === hit.z
        if (!same) { this.mineTarget = { x: hit.x, y: hit.y, z: hit.z }; this.mineProgress = 0 }
        this.mineProgress += dt
        const hardness = BLOCKS[id].hardness
        const ratio = this.mineProgress / hardness
        hud.setMineProgress(ratio)
        // 破碎动画：裂纹随进度加深，末段轻微抖动
        this.crack.visible = true
        this.crack.position.set(hit.x + 0.5, hit.y + 0.5, hit.z + 0.5)
        if (ratio > 0.85) {
          this.crack.position.x += (Math.random() - 0.5) * 0.02
          this.crack.position.z += (Math.random() - 0.5) * 0.02
        }
        const stage = Math.min(3, Math.floor(ratio * 4))
        if (this.crack.material.map !== this.crackTexs[stage]) {
          this.crack.material.map = this.crackTexs[stage]
          this.crack.material.needsUpdate = true
          // 每进一阶掉一点碎屑
          this.ctx.onCrackStage && this.ctx.onCrackStage(hit.x, hit.y, hit.z, world.get(hit.x, hit.y, hit.z))
        }
        if (this.mineProgress >= hardness) {
          world.set(hit.x, hit.y, hit.z, B.AIR)
          const drop = BLOCKS[id].drop
          if (drop) player.addBlock(drop)
          this.mineTarget = null; this.mineProgress = 0
          hud.setMineProgress(0)
          this.crack.visible = false
          this.ctx.onBlockMined && this.ctx.onBlockMined(id, hit.x, hit.y, hit.z)
        }
      } else {
        this.mineTarget = null; this.mineProgress = 0; hud.setMineProgress(0); this.crack.visible = false
      }
    } else {
      this.mineTarget = null; this.mineProgress = 0; hud.setMineProgress(0); this.crack.visible = false
    }
  }
}
