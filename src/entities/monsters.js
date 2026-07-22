// 怪物管理 v2：ground/water/air 三介质 AI + 标签制名牌
// 特性：passive(被打才反击)、exploder、ranged、radial(径向弹幕)、
//       symbolPos(符号在则回血——终极之地机制)、tough(减伤)、stun
import * as THREE from 'three'
import { CFG } from '../config.js'
import { B } from '../blocks.js'
import { moveEntity } from '../player/physics.js'
import { MONSTER_DEFS } from './monsterDefs.js'

function makeNameplate(name, tags, isBoss) {
  const canvas = document.createElement('canvas')
  canvas.width = 512; canvas.height = 128
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({
    map: new THREE.CanvasTexture(canvas), depthTest: false,
  }))
  sprite.scale.set(2.6, 0.65, 1)
  const redraw = (ratio, healing = false) => {
    const ctx = canvas.getContext('2d')
    ctx.clearRect(0, 0, 512, 128)
    ctx.textAlign = 'center'
    ctx.fillStyle = isBoss ? '#ffd75e' : '#ffffff'
    ctx.strokeStyle = 'rgba(0,0,0,0.85)'; ctx.lineWidth = 6
    ctx.font = `bold ${isBoss ? 44 : 36}px sans-serif`
    const title = healing ? `♻ ${name}` : name
    ctx.strokeText(title, 256, 44); ctx.fillText(title, 256, 44)
    ctx.font = '24px sans-serif'
    ctx.strokeStyle = 'rgba(0,0,0,0.7)'; ctx.lineWidth = 4
    ctx.fillStyle = '#cfe8ff'
    const tagText = tags.join('·')
    ctx.strokeText(tagText, 256, 76); ctx.fillText(tagText, 256, 76)
    ctx.fillStyle = 'rgba(0,0,0,0.6)'; ctx.fillRect(106, 92, 300, 18)
    ctx.fillStyle = ratio > 0.35 ? '#57d94f' : '#e34b4b'
    ctx.fillRect(109, 95, 294 * Math.max(0, ratio), 12)
    sprite.material.map.needsUpdate = true
  }
  redraw(1)
  return { sprite, redraw, dispose: () => { sprite.material.map.dispose(); sprite.material.dispose() } }
}

export class MonsterManager {
  // ctx: 共享上下文 { world, scene? } —— world 随维度切换
  constructor(sceneRootGetter, ctx, player) {
    this.getRoot = sceneRootGetter   // () => 当前维度的实体挂载 Group
    this.ctx = ctx
    this.player = player
    this.list = []
    this.onKill = null
    this.onExplode = null
    this.projectiles = null
    this.hud = null
    this.spawnPools = []      // [{points:[[x,z]|[x,y,z]], types:[], max, interval, timer, floor, medium}]
  }

  get world() { return this.ctx.world }

  count(pred = () => true) { return this.list.filter(m => !m.dead && pred(m)).length }

  spawn(type, x, y, z, opts = {}) {
    const def = MONSTER_DEFS[type]
    const f = opts.floor || 1
    const scale = opts.scale || 1
    const m = {
      type, def,
      isBoss: !!opts.boss,
      bossName: opts.bossName,
      floor: opts.towerFloor || 0,
      tag: opts.tag || null,             // 归属刷怪池/维度标记
      w: def.w * scale, h: def.h * scale,
      ent: {
        pos: { x, y, z }, vel: { x: 0, y: 0, z: 0 },
        w: def.w * scale, h: def.h * scale, onGround: false,
        noGravity: def.medium !== 'ground',
      },
      hp: opts.hp ?? (15 + 6 * f),
      maxHp: opts.hp ?? (15 + 6 * f),
      atk: opts.atk ?? Math.round(4 + 1.5 * f),
      gearDrop: opts.gears ?? (Math.random() < 0.2 ? 2 : 1),
      speed: def.speed * (opts.boss ? 1.15 : 1),
      state: 'idle', wanderDir: [0, 0, 0], wanderT: 0,
      attackT: 0, fuseT: -1, shotT: 1 + Math.random(),
      stunT: 0, healTick: 0,
      homeY: y,
      symbolPos: opts.symbolPos || null,
      canShoot: def.ranged || (def.maybeRanged && Math.random() < def.maybeRanged),
      dead: false, hurtT: 0,
      group: def.build(scale === 1 ? undefined : scale) || def.build(),
    }
    if (!m.group) m.group = def.build()
    const name = opts.bossName || def.name
    m.plate = makeNameplate(name, def.tags, m.isBoss)
    m.plate.sprite.position.set(0, m.h + 0.55, 0)
    m.group.add(m.plate.sprite)
    m.group.position.set(x, y, z)
    this.getRoot().add(m.group)
    this.list.push(m)
    return m
  }

  hitMonster(m, dmg, fromPos) {
    if (m.dead) return
    if (m.def.tough) dmg = Math.max(1, Math.round(dmg * m.def.tough))
    m.hp -= dmg
    m.hurtT = 0.15
    m.plate.redraw(Math.max(0, m.hp / m.maxHp))
    if (this.hud) this.hud.damageNumber(m.ent.pos, dmg)
    if (fromPos && m.def.medium === 'ground') {
      const dx = m.ent.pos.x - fromPos.x, dz = m.ent.pos.z - fromPos.z
      const d = Math.hypot(dx, dz) || 1
      m.ent.vel.x += (dx / d) * 5
      m.ent.vel.z += (dz / d) * 5
      m.ent.vel.y = Math.max(m.ent.vel.y, 3.5)
    }
    if (m.state === 'idle') m.state = 'chase'
    if (m.hp <= 0) this.kill(m)
  }

  kill(m) {
    m.dead = true
    m.group.parent && m.group.parent.remove(m.group)
    m.plate.dispose()
    m.group.traverse(o => { if (o.isMesh) o.geometry.dispose() })
    this.onKill && this.onKill(m)
  }

  // 维度切换时清场（不触发 onKill）
  clearAll() {
    for (const m of this.list) {
      if (m.dead) continue
      m.dead = true
      m.group.parent && m.group.parent.remove(m.group)
      m.plate.dispose()
      m.group.traverse(o => { if (o.isMesh) o.geometry.dispose() })
    }
    this.list = []
  }

  explode(m) {
    const p = this.player
    const d = Math.hypot(p.ent.pos.x - m.ent.pos.x, p.ent.pos.y + 0.9 - m.ent.pos.y, p.ent.pos.z - m.ent.pos.z)
    if (d < 3) p.takeDamage(m.atk + 8, m.ent.pos)
    this.onExplode && this.onExplode(m.ent.pos)
    this.kill(m)
  }

  shoot(m, targetPos, speed = 14) {
    const from = new THREE.Vector3(m.ent.pos.x, m.ent.pos.y + m.h * 0.7, m.ent.pos.z)
    const dir = new THREE.Vector3(targetPos.x - from.x, targetPos.y - from.y, targetPos.z - from.z).normalize()
    this.projectiles.spawn(from, dir, speed, m.atk, m.def.projColor)
  }
  radialBurst(m, count = 10) {
    const from = new THREE.Vector3(m.ent.pos.x, m.ent.pos.y + m.h * 0.5, m.ent.pos.z)
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2
      this.projectiles.spawn(from.clone(), new THREE.Vector3(Math.cos(a), -0.05, Math.sin(a)), 10, Math.round(m.atk * 0.7), m.def.projColor)
    }
  }

  update(dt) {
    const p = this.player
    const stealthed = p.stealthTime > 0
    for (const m of this.list) {
      if (m.dead) continue
      m.hurtT = Math.max(0, m.hurtT - dt)
      m.stunT = Math.max(0, m.stunT - dt)

      // 符号回血（终极之地：怪物依赖符号进行回血——打碎符号断回血）
      if (m.symbolPos && m.hp < m.maxHp) {
        m.healTick -= dt
        if (m.healTick <= 0) {
          m.healTick = 1
          const [sx, sy, sz] = m.symbolPos
          if (this.world.get(sx, sy, sz) === B.SYMBOL) {
            m.hp = Math.min(m.maxHp, m.hp + m.maxHp * 0.05)
            m.plate.redraw(m.hp / m.maxHp, true)
          }
        }
      }

      const dx = p.ent.pos.x - m.ent.pos.x
      const dy = (p.ent.pos.y + 0.9) - (m.ent.pos.y + m.h * 0.5)
      const dz = p.ent.pos.z - m.ent.pos.z
      const distH = Math.hypot(dx, dz)
      const dist3 = Math.hypot(dx, dy, dz)

      if (m.stunT > 0) {
        m.ent.vel.x = 0; m.ent.vel.z = 0
        if (m.ent.noGravity) m.ent.vel.y = 0
      } else if (m.fuseT >= 0) {
        m.fuseT += dt
        const blink = Math.floor(m.fuseT * 10) % 2 === 0
        m.group.traverse(o => { if (o.isMesh && o.material.emissive) o.material.emissive.setScalar(blink ? 0.9 : 0) })
        m.group.scale.setScalar((m.w / m.def.w) * (1 + m.fuseT * 0.35))
        m.ent.vel.x = 0; m.ent.vel.z = 0
        if (m.fuseT >= 0.8) { this.explode(m); continue }
      } else if (m.state === 'idle') {
        const aggroR = m.isBoss ? CFG.AGGRO_RANGE * 2 : CFG.AGGRO_RANGE
        if (!m.def.passive && dist3 < aggroR && !p.dead && !stealthed) m.state = 'chase'
        m.wanderT -= dt
        if (m.wanderT <= 0) {
          m.wanderT = 2 + Math.random() * 2
          if (Math.random() < 0.4) m.wanderDir = [0, 0, 0]
          else {
            const a = Math.random() * Math.PI * 2
            m.wanderDir = [Math.cos(a), m.ent.noGravity ? (Math.random() - 0.5) * 0.4 : 0, Math.sin(a)]
          }
        }
        m.ent.vel.x = m.wanderDir[0] * m.speed * 0.35
        m.ent.vel.z = m.wanderDir[2] * m.speed * 0.35
        if (m.ent.noGravity) {
          // 巡游高度回归
          const drift = m.wanderDir[1] * m.speed * 0.35 + (m.homeY - m.ent.pos.y) * 0.3
          m.ent.vel.y = THREE.MathUtils.clamp(drift, -1.5, 1.5)
        }
      } else if (m.state === 'chase') {
        if (p.dead || stealthed) { m.state = 'idle'; m.ent.vel.x = m.ent.vel.z = 0; if (m.ent.noGravity) m.ent.vel.y = 0; continue }
        const nd = dist3 || 1
        let mvx = dx / nd, mvy = dy / nd, mvz = dz / nd

        // 远程：保持距离
        if (m.canShoot) {
          const keep = m.isBoss ? 9 : 8
          if (distH < keep - 2) { mvx = -mvx; mvz = -mvz }
          else if (distH < keep + 2) { mvx = 0; mvz = 0; if (!m.ent.noGravity) mvy = 0 }
          m.shotT -= dt
          if (dist3 < 20 && m.shotT <= 0) {
            m.shotT = m.isBoss ? 1.6 : 2.5
            if (m.def.radial && Math.random() < 0.4) this.radialBurst(m, m.isBoss ? 14 : 10)
            else this.shoot(m, { x: p.ent.pos.x, y: p.ent.pos.y + 0.9, z: p.ent.pos.z })
            // 双连射（白骨神射等 boss）
            if (m.isBoss && !m.def.radial) m.pendingShot = 0.18
          }
        }
        if (m.pendingShot != null) {
          m.pendingShot -= dt
          if (m.pendingShot <= 0) {
            m.pendingShot = null
            if (!m.dead) this.shoot(m, { x: p.ent.pos.x, y: p.ent.pos.y + 0.9, z: p.ent.pos.z })
          }
        }

        // 近战/自爆
        if (m.def.exploder && distH < 1.9 && Math.abs(dy) < 2) { m.fuseT = 0; continue }
        if (m.def.melee && dist3 < (m.w / 2 + 1.4) ) {
          m.attackT -= dt
          if (m.attackT <= 0) { m.attackT = 1.2; p.takeDamage(m.atk, m.ent.pos) }
          mvx = 0; mvz = 0; if (!m.ent.noGravity) mvy = 0
        }

        const knocked = Math.hypot(m.ent.vel.x, m.ent.vel.z) > m.speed + 1.5
        if (!knocked) {
          m.ent.vel.x = mvx * m.speed
          m.ent.vel.z = mvz * m.speed
          if (m.ent.noGravity) m.ent.vel.y = mvy * m.speed * 0.8
        } else { m.ent.vel.x *= 0.92; m.ent.vel.z *= 0.92 }

        // 地面怪卡墙跳
        if (!m.ent.noGravity && m.ent.onGround && (mvx !== 0 || mvz !== 0)) {
          const aheadX = Math.floor(m.ent.pos.x + mvx * 0.8)
          const aheadZ = Math.floor(m.ent.pos.z + mvz * 0.8)
          const fy = Math.floor(m.ent.pos.y)
          if (this.world.isSolid(aheadX, fy, aheadZ) && !this.world.isSolid(aheadX, fy + 1, aheadZ)) {
            m.ent.vel.y = 8
          }
        }
        if (dist3 > CFG.AGGRO_RANGE * (m.isBoss ? 4 : 2)) m.state = 'idle'
      }

      // 水生怪不出水：目标格非水且非空则悬停
      if (m.def.medium === 'water') {
        const nx = Math.floor(m.ent.pos.x + m.ent.vel.x * dt * 2)
        const ny = Math.floor(m.ent.pos.y + m.ent.vel.y * dt * 2 + m.h * 0.5)
        const nz = Math.floor(m.ent.pos.z + m.ent.vel.z * dt * 2)
        if (this.world.get(nx, ny, nz) !== B.WATER) {
          m.ent.vel.x *= 0.2; m.ent.vel.y = Math.min(m.ent.vel.y, 0); m.ent.vel.z *= 0.2
        }
      }

      moveEntity(this.world, m.ent, dt)
      if (m.ent.pos.y < -5) { this.kill(m); continue }

      m.group.position.set(m.ent.pos.x, m.ent.pos.y, m.ent.pos.z)
      if (distH > 0.1 && m.state === 'chase') m.group.rotation.y = Math.atan2(-dx, -dz) + Math.PI
      if (m.hurtT > 0) m.group.traverse(o => { if (o.isMesh && o.material.emissive) o.material.emissive.setRGB(0.6, 0, 0) })
      else if (m.fuseT < 0) m.group.traverse(o => { if (o.isMesh && o.material.emissive) o.material.emissive.setScalar(0) })
    }
    this.list = this.list.filter(m => !m.dead)

    // —— 环境刷怪池 ——
    for (const pool of this.spawnPools) {
      pool.timer -= dt
      if (pool.timer > 0) continue
      pool.timer = pool.interval * (pool.intervalMult ? pool.intervalMult() : 1)
      const cur = this.count(m => m.tag === pool.tag)
      if (cur >= pool.max || this.count() >= CFG.MONSTER_CAP) continue
      const pt = pool.points[Math.floor(Math.random() * pool.points.length)]
      let x, y, z
      if (pt.length === 3) { [x, y, z] = pt }
      else {
        x = pt[0]; z = pt[1]
        y = this.world.surfaceAt(Math.floor(x), Math.floor(z)) + 1
      }
      if (Math.hypot(x - p.ent.pos.x, z - p.ent.pos.z) < 12) continue
      const type = pool.types[Math.floor(Math.random() * pool.types.length)]
      this.spawn(type, x + 0.5, y, z + 0.5, { floor: pool.floor || 1, tag: pool.tag })
    }
  }
}
