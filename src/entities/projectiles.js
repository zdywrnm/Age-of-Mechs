// 投射物 v3：怪物弹（打玩家）+ 友方弹（玩家远程炮，打怪物）
import * as THREE from 'three'
import { B } from '../blocks.js'

export class ProjectileManager {
  constructor(getRoot, ctx, player) {
    this.getRoot = getRoot
    this.ctx = ctx
    this.player = player
    this.monsters = null       // main 注入（友方弹命中判定用）
    this.onImpact = null       // (pos, kind) => {} 命中特效钩子
    this.isSafeZone = null     // v4：敌方弹进入安全区即销毁（main 注入）
    this.list = []
  }
  get world() { return this.ctx.world }

  // opts: { friendly, radius(爆炸半径), pierce(穿透), size, kind(特效标记) }
  spawn(pos, dir, speed, dmg, color = '#f5f0e0', opts = {}) {
    const size = opts.size || 0.16
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(size, size, size * 2.6),
      new THREE.MeshBasicMaterial({ color })
    )
    mesh.position.copy(pos)
    mesh.lookAt(pos.clone().add(dir))
    this.getRoot().add(mesh)
    this.list.push({
      pos: pos.clone(), dir: dir.clone(), speed, dmg, mesh, t: 0,
      friendly: !!opts.friendly, radius: opts.radius || 0,
      enemyRadius: opts.enemyRadius || 0,   // v4：敌方弹对玩家溅射半径
      pierce: !!opts.pierce, kind: opts.kind || 'spark', homing: !!opts.homing, hitSet: new Set(),
    })
  }

  clearAll() {
    for (const a of this.list) { a.mesh.parent && a.mesh.parent.remove(a.mesh); a.mesh.geometry.dispose(); a.mesh.material.dispose() }
    this.list = []
  }

  explode(a) {
    if (a.radius > 0 && this.monsters) {
      for (const m of this.monsters.list) {
        if (m.dead) continue
        const d = Math.hypot(m.ent.pos.x - a.pos.x, m.ent.pos.y - a.pos.y, m.ent.pos.z - a.pos.z)
        if (d < a.radius) this.monsters.hitMonster(m, Math.round(a.dmg * (1 - d / a.radius / 2)), a.pos)
      }
      this.onImpact && this.onImpact(a.pos, 'explode')
    } else {
      this.onImpact && this.onImpact(a.pos, a.kind)
    }
  }

  update(dt) {
    const p = this.player
    for (const a of this.list) {
      a.t += dt
      // 神秘追踪弹：缓缓转向最近的怪物
      if (a.homing && this.monsters) {
        let best = null, bd = 18
        for (const m of this.monsters.list) {
          if (m.dead) continue
          const d = Math.hypot(m.ent.pos.x - a.pos.x, m.ent.pos.y + m.h * 0.5 - a.pos.y, m.ent.pos.z - a.pos.z)
          if (d < bd) { bd = d; best = m }
        }
        if (best) {
          const tx = best.ent.pos.x - a.pos.x, ty = best.ent.pos.y + best.h * 0.5 - a.pos.y, tz = best.ent.pos.z - a.pos.z
          const td = Math.hypot(tx, ty, tz) || 1
          a.dir.x += (tx / td - a.dir.x) * Math.min(1, 7 * dt)
          a.dir.y += (ty / td - a.dir.y) * Math.min(1, 7 * dt)
          a.dir.z += (tz / td - a.dir.z) * Math.min(1, 7 * dt)
          a.dir.normalize()
          a.mesh.lookAt(a.pos.clone().add(a.dir))
        }
      }
      a.pos.addScaledVector(a.dir, a.speed * dt)
      a.mesh.position.copy(a.pos)
      let dead = a.t > 3.5
      // v4 安全区：敌方弹不得入城
      if (!dead && !a.friendly && this.isSafeZone && this.isSafeZone(a.pos.x, a.pos.z)) {
        this.onImpact && this.onImpact(a.pos, a.kind)
        dead = true
      }
      // 撞方块
      if (!dead && this.world.isSolid(Math.floor(a.pos.x), Math.floor(a.pos.y), Math.floor(a.pos.z))) {
        this.explode(a); dead = true
      }
      if (!dead && a.friendly && this.monsters) {
        // 友方弹：命中怪物。爆炸弹用球形近炸引信（避免绕圈擦过），普通弹用 AABB
        for (const m of this.monsters.list) {
          if (m.dead || a.hitSet.has(m)) continue
          let hit
          if (a.radius > 0) {
            const cy = m.ent.pos.y + m.h * 0.5
            hit = Math.hypot(a.pos.x - m.ent.pos.x, a.pos.y - cy, a.pos.z - m.ent.pos.z) < a.radius * 0.7 + m.w * 0.5
          } else {
            const hw = m.w / 2 + 0.25
            hit = Math.abs(a.pos.x - m.ent.pos.x) < hw &&
              a.pos.y > m.ent.pos.y - 0.2 && a.pos.y < m.ent.pos.y + m.h + 0.2 &&
              Math.abs(a.pos.z - m.ent.pos.z) < hw
          }
          if (hit) {
            if (a.radius > 0) { this.explode(a); dead = true; break }
            this.monsters.hitMonster(m, a.dmg, a.pos)
            this.onImpact && this.onImpact(a.pos, a.kind)
            if (a.pierce) { a.hitSet.add(m) } else { dead = true; break }
          }
        }
      } else if (!dead && !a.friendly && !p.dead) {
        // 怪物弹：命中玩家。爆炸炮弹(enemyRadius>0)做近炸引信 + 距离衰减溅射
        if (a.enemyRadius > 0) {
          const d = Math.hypot(a.pos.x - p.ent.pos.x, a.pos.y - (p.ent.pos.y + p.ent.h * 0.5), a.pos.z - p.ent.pos.z)
          if (d < a.enemyRadius) {
            p.takeDamage(Math.round(a.dmg * (1 - d / a.enemyRadius / 2)), a.pos)
            this.onImpact && this.onImpact(a.pos, 'explode')
            dead = true
          }
        } else {
          const hw = p.ent.w / 2 + 0.15
          if (Math.abs(a.pos.x - p.ent.pos.x) < hw &&
              a.pos.y > p.ent.pos.y - 0.1 && a.pos.y < p.ent.pos.y + p.ent.h + 0.1 &&
              Math.abs(a.pos.z - p.ent.pos.z) < hw) {
            p.takeDamage(a.dmg, a.pos)
            dead = true
          }
        }
      }
      if (dead) { a.mesh.parent && a.mesh.parent.remove(a.mesh); a.mesh.geometry.dispose(); a.mesh.material.dispose(); a.remove = true }
    }
    this.list = this.list.filter(a => !a.remove)
  }
}
