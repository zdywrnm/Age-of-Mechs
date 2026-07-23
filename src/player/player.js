// 玩家状态 v2：齿轮装备/形态派生/物品/装备/水下生存/新能力
import * as THREE from 'three'
import { CFG } from '../config.js'
import { B, BLOCKS, PLACEABLE } from '../blocks.js'
import { ITEMS } from '../game/items.js'
import { moveEntity } from './physics.js'
import { buildRobot } from './robotModel.js'

export class Player {
  constructor(scene, robotConfig, spawnPoint) {
    this.scene = scene
    this.robotConfig = robotConfig
    this.spawnPoint = spawnPoint.slice()
    this.ent = {
      pos: { x: spawnPoint[0], y: spawnPoint[1], z: spawnPoint[2] },
      vel: { x: 0, y: 0, z: 0 },
      w: CFG.PLAYER_W, h: CFG.PLAYER_H, onGround: false, inWater: false, inLava: false,
    }
    this.gears = 0            // 齿轮钱包（可以花）
    this.totalGears = 0       // 累计齿轮（决定等级，设定：等级由变形齿轮决定）
    this.mysteryGears = []    // 拥有的神秘齿轮
    this.equippedGears = []   // 已装备的神秘齿轮（决定形态与能力）
    this.form = 'robot'
    this.inventory = new Map()  // 方块
    this.items = new Map()      // 物品
    this.equipment = { sword: null, armor: null, wings: null }
    this.hotbarIndex = 0
    this.hp = this.maxHp()
    this.regenTimer = 0
    this.dead = false
    this.walkT = 0
    // 水下生存
    this.waterTime = 0
    this.pengPotion = false
    // 能力冷却/状态
    this.quakeCooldown = 0
    this.fireCooldown = 0
    this.flashCooldown = 0
    this.stealthCooldown = 0
    this.stealthTime = 0
    this.shootCooldown = 0
    this.envDamageTick = 0
    this.jumpCount = 0
    this.mount = null          // 骑乘中的宠物
    this.onHurt = null
    this.onDeath = null

    this.model = buildRobot(robotConfig)
    scene.add(this.model.group)
  }

  level() { return Math.min(CFG.MAX_LEVEL, 1 + Math.floor(this.totalGears / CFG.GEARS_PER_LEVEL)) }
  maxHp() { return CFG.BASE_HP + CFG.HP_PER_LEVEL * (this.level() - 1) }

  hasGear(kind) { return this.mysteryGears.includes(kind) }
  hasAbility(kind) { return this.equippedGears.includes(kind) || this.equippedGears.includes('mystery') }

  attack() {
    let a = CFG.BASE_ATK + CFG.ATK_PER_LEVEL * (this.level() - 1)
    if (this.form === 'armor') a += CFG.ARMOR_ATK_BONUS
    if (this.form === 'super') a += 12
    if (this.hasAbility('earth')) a += 3
    if (this.equipment.sword) a += ITEMS[this.equipment.sword].atk
    return a
  }

  // 形态派生（设定 Q5：齿轮标记决定形态）——每次由装备状态重算，不入存档
  computeForms() {
    const f = ['robot']
    if (this.totalGears > 0) f.push('car')
    if (this.hasAbility('ore')) f.push('armor')
    if (this.hasAbility('tide')) f.push('dive')
    if (this.equippedGears.includes('mystery')) f.push('super')
    return f
  }

  addGears(n) {
    const before = this.level()
    this.gears += n
    this.totalGears += n
    if (this.level() > before) { this.hp = this.maxHp(); return true }
    return false
  }
  spendGears(n) {
    if (this.gears < n) return false
    this.gears -= n
    return true
  }

  addMysteryGear(kind) {
    if (!this.mysteryGears.includes(kind)) this.mysteryGears.push(kind)
    if (!this.equippedGears.includes(kind)) this.equippedGears.push(kind) // 拿到自动装备
  }

  // —— 背包 ——
  addBlock(id, n = 1) { this.inventory.set(id, (this.inventory.get(id) || 0) + n) }
  consumeBlock(id, n = 1) {
    const c = (this.inventory.get(id) || 0) - n
    if (c <= 0) this.inventory.delete(id); else this.inventory.set(id, c)
  }
  addItem(id, n = 1) { this.items.set(id, (this.items.get(id) || 0) + n) }
  consumeItem(id, n = 1) {
    const c = (this.items.get(id) || 0) - n
    if (c <= 0) this.items.delete(id); else this.items.set(id, c)
  }
  hotbar() {
    return PLACEABLE.filter(id => this.inventory.get(id) > 0)
      .slice(0, 5)
      .map(id => ({ id, count: this.inventory.get(id), name: BLOCKS[id].name }))
  }
  hotbarSelected() {
    const bar = this.hotbar()
    if (bar.length === 0) return null
    return bar[Math.min(this.hotbarIndex, bar.length - 1)]
  }

  // —— 战斗 ——
  takeDamage(dmg, fromPos) {
    if (this.dead) return
    let mult = 1
    if (this.form === 'armor') mult *= CFG.ARMOR_DAMAGE_MULT
    if (this.form === 'super') mult *= 0.4
    if (this.equipment.armor) mult *= (1 - ITEMS[this.equipment.armor].def)
    dmg = Math.max(1, Math.ceil(dmg * mult))
    this.hp -= dmg
    this.regenTimer = 0
    if (fromPos) {
      const dx = this.ent.pos.x - fromPos.x, dz = this.ent.pos.z - fromPos.z
      const d = Math.hypot(dx, dz) || 1
      this.ent.vel.x += (dx / d) * 6
      this.ent.vel.z += (dz / d) * 6
      this.ent.vel.y = Math.max(this.ent.vel.y, 4)
    }
    this.onHurt && this.onHurt(dmg)
    if (this.hp <= 0) { this.hp = 0; this.dead = true; this.onDeath && this.onDeath() }
  }

  respawn() {
    this.ent.pos.x = this.spawnPoint[0]
    this.ent.pos.y = this.spawnPoint[1]
    this.ent.pos.z = this.spawnPoint[2]
    this.ent.vel.x = this.ent.vel.y = this.ent.vel.z = 0
    this.hp = this.maxHp()
    this.dead = false
    this.mount = null
  }

  swing() { this.model.swing() }

  transform() {
    const forms = this.computeForms()
    let i = forms.indexOf(this.form)
    if (i === -1) i = 0
    this.form = forms[(i + 1) % forms.length]
    this.applyForm()
    this.model.playTransform()
    return this.form
  }
  applyForm() {
    if (this.form === 'car' || this.form === 'dive') { this.ent.w = CFG.CAR_W; this.ent.h = CFG.CAR_H }
    else { this.ent.w = CFG.PLAYER_W; this.ent.h = CFG.PLAYER_H }
    this.model.setForm(this.form)
  }

  speed() {
    let s = CFG.WALK_SPEED
    if (this.form === 'car') s *= CFG.CAR_SPEED_MULT
    if (this.form === 'armor') s *= CFG.ARMOR_SPEED_MULT
    if (this.form === 'super') s *= 1.3
    if (this.mount) s *= CFG.MOUNT_SPEED_MULT
    if (this.ent.inWater) {
      if (this.form === 'dive') s *= CFG.DIVE_SPEED_MULT
      else if (this.pengPotion) s *= CFG.PENG_SPEED_MULT
      else s *= CFG.WATER_SPEED_MULT
    }
    return s
  }

  useItem(id, hud) {
    if (!this.items.get(id)) return false
    const def = ITEMS[id]
    if (def.use === 'heal') {
      if (this.hp >= this.maxHp()) { hud && hud.toast('血是满的，不用吃～'); return false }
      this.hp = Math.min(this.maxHp(), this.hp + def.heal)
      this.consumeItem(id)
      hud && hud.toast(`${def.icon} 吃了${def.name}，回 ${def.heal} 血！`)
      return true
    }
    if (def.use === 'peng') {
      if (this.pengPotion) { hud && hud.toast('已经喝过鹏之药水啦！'); return false }
      this.pengPotion = true
      this.waterTime = 0
      this.consumeItem(id)
      hud && hud.toast('🧪 喝下鹏之药水！从此水里行动自如！')
      return true
    }
    if (def.equip) {
      this.equipment[def.equip] = id
      hud && hud.toast(`${def.icon} 装备了${def.name}！`)
      return true
    }
    return false
  }

  update(dt, controls, world) {
    if (this.dead) return
    this.quakeCooldown = Math.max(0, this.quakeCooldown - dt)
    this.fireCooldown = Math.max(0, this.fireCooldown - dt)
    this.flashCooldown = Math.max(0, this.flashCooldown - dt)
    this.stealthCooldown = Math.max(0, this.stealthCooldown - dt)
    this.shootCooldown = Math.max(0, this.shootCooldown - dt)
    this.stealthTime = Math.max(0, this.stealthTime - dt)

    // 移动输入
    let mx = 0, mz = 0
    if (controls.enabled) {
      if (controls.touchMove) { mx += controls.touchMove.x; mz += controls.touchMove.z }
      if (controls.keys.KeyW) mz += 1
      if (controls.keys.KeyS) mz -= 1
      if (controls.keys.KeyA) mx -= 1
      if (controls.keys.KeyD) mx += 1
    }
    const fwd = controls.forwardFlat(new THREE.Vector3())
    const right = controls.rightFlat(new THREE.Vector3())
    const len = Math.hypot(mx, mz)
    const speed = this.speed()
    let vx = 0, vz = 0
    if (len > 0) {
      vx = (fwd.x * mz + right.x * mx) / len * speed
      vz = (fwd.z * mz + right.z * mx) / len * speed
    }
    const knock = Math.hypot(this.ent.vel.x, this.ent.vel.z) > speed + 1
    if (!knock) { this.ent.vel.x = vx; this.ent.vel.z = vz }
    else { this.ent.vel.x *= 0.9; this.ent.vel.z *= 0.9 }

    // 跳/游泳上浮/二段跳/滑翔（鲲鹏之翼）
    this.ent.swimUp = false
    if (controls.enabled && controls.keys.Space) {
      if (this.ent.inWater || this.ent.inLava) {
        this.ent.swimUp = true
        // 水边登岸：朝岸边游时，前方脚位是实心岸、岸上有空间 → 蹬水跃上岸
        const sp = Math.hypot(vx, vz)
        if (sp > 0.5) {
          const lx = Math.floor(this.ent.pos.x + (vx / sp) * 0.8)
          const lz = Math.floor(this.ent.pos.z + (vz / sp) * 0.8)
          const fy = Math.floor(this.ent.pos.y + 0.1)
          if (world.isSolid(lx, fy, lz) && !world.isSolid(lx, fy + 1, lz) && !world.isSolid(lx, fy + 2, lz)) {
            this.ent.vel.y = CFG.JUMP_SPEED * 0.85
            this.ent.swimUp = false
          }
        }
      } else if (this.ent.onGround) {
        let jump = CFG.JUMP_SPEED
        if (this.form === 'car' || this.form === 'dive') jump *= CFG.CAR_JUMP_MULT
        this.ent.vel.y = jump
        this.jumpCount = 1
        this.spacePressed = true
        this.onJump && this.onJump()
      } else if (this.equipment.wings) {
        // 二段跳（需要松开再按）
        if (!this.spaceHeld && this.jumpCount === 1) {
          this.ent.vel.y = CFG.JUMP_SPEED * 0.9
          this.jumpCount = 2
        } else if (this.ent.vel.y < -2) {
          this.ent.vel.y = -2  // 滑翔缓降
        }
      }
      this.spaceHeld = true
    } else {
      this.spaceHeld = false
    }
    if (this.ent.onGround) this.jumpCount = 0

    moveEntity(world, this.ent, dt)

    if (this.ent.pos.y < -5) this.fellOut = true

    // —— 水下生存（设定第八章：涉水十分钟） ——
    const headBlock = world.get(Math.floor(this.ent.pos.x), Math.floor(this.ent.pos.y + this.ent.h * 0.9), Math.floor(this.ent.pos.z))
    const submerged = headBlock === B.WATER
    const waterImmune = this.pengPotion || this.form === 'dive' || this.form === 'super'
    if (submerged && !waterImmune) this.waterTime += dt
    else this.waterTime = Math.max(0, this.waterTime - dt * CFG.WATER_RECOVER_MULT)
    this.envDamageTick -= dt
    if (submerged && !waterImmune && this.waterTime > CFG.WATER_LIMIT && this.envDamageTick <= 0) {
      this.envDamageTick = 1
      this.takeDamage(CFG.WATER_DAMAGE, null)
    }
    // 岩浆/火伤害
    const feetBlock = world.get(Math.floor(this.ent.pos.x), Math.floor(this.ent.pos.y + 0.2), Math.floor(this.ent.pos.z))
    if ((this.ent.inLava || feetBlock === B.LAVA) && this.envDamageTick <= 0) {
      this.envDamageTick = 0.5
      this.takeDamage(CFG.LAVA_DPS / 2, null)
    } else if (feetBlock === B.FIRE && this.form !== 'super' && this.envDamageTick <= 0) {
      this.envDamageTick = 0.5
      this.takeDamage(CFG.FIRE_DPS / 2, null)
    }

    // 回血：脱战 + 森林齿轮被动
    this.regenTimer += dt
    let regen = 0
    if (this.regenTimer > CFG.REGEN_DELAY) regen += CFG.REGEN_PER_SEC
    if (this.hasAbility('forest')) regen += CFG.FOREST_REGEN
    if (regen > 0 && this.hp < this.maxHp()) this.hp = Math.min(this.maxHp(), this.hp + regen * dt)

    // 模型
    const moving = len > 0 && (this.ent.onGround || this.ent.inWater)
    this.walkT += dt * (moving ? 1 : 0) * (speed / CFG.WALK_SPEED)
    this.model.group.position.set(this.ent.pos.x, this.ent.pos.y, this.ent.pos.z)
    this.model.group.rotation.y = -controls.yaw
    this.model.animate(this.walkT * 4, moving, dt)
    this.model.updateTransformAnim(dt)
    this.model.setGhost(this.stealthTime > 0)
  }

  headPos(out = new THREE.Vector3()) {
    const eye = (this.form === 'car' || this.form === 'dive') ? 0.9 : CFG.EYE_HEIGHT
    return out.set(this.ent.pos.x, this.ent.pos.y + eye, this.ent.pos.z)
  }

  // 远程炮档位：按已装备的元素齿轮返回弹药配置（越强的齿轮解锁越猛的弹）
  weaponTier() {
    const atk = this.attack()
    if (this.hasAbility('mystery'))
      return { name: '神秘追踪弹', color: '#c9a0ff', dmg: Math.round(atk * 1.6), speed: 26, cd: 0.42, count: 1, radius: 2.4, homing: true, size: 0.24, kind: 'mystery' }
    if (this.hasAbility('fire'))
      return { name: '烈焰爆弹', color: '#ff6a1a', dmg: Math.round(atk * 1.3), speed: 20, cd: 0.5, count: 1, radius: 2.6, size: 0.22, kind: 'explode' }
    if (this.hasAbility('tide'))
      return { name: '三连水弹', color: '#39c8ff', dmg: Math.round(atk * 0.7), speed: 22, cd: 0.5, count: 3, spread: 0.16, size: 0.18, kind: 'spark' }
    if (this.hasAbility('light'))
      return { name: '光明射线', color: '#fff0a8', dmg: Math.round(atk * 1.0), speed: 34, cd: 0.34, count: 1, pierce: true, size: 0.16, kind: 'spark' }
    // 基础能量炮（所有机器人默认）
    return { name: '能量弹', color: '#7dfcff', dmg: Math.round(atk * 0.85), speed: 24, cd: 0.45, count: 1, size: 0.18, kind: 'spark' }
  }
  canShoot() { return this.shootCooldown <= 0 && !this.dead && this.form !== 'car' && this.form !== 'dive' }

  serialize() {
    return {
      pos: [this.ent.pos.x, this.ent.pos.y, this.ent.pos.z],
      hp: this.hp, gears: this.gears, totalGears: this.totalGears,
      mysteryGears: this.mysteryGears.slice(),
      equippedGears: this.equippedGears.slice(),
      form: this.form,
      inventory: [...this.inventory.entries()],
      items: [...this.items.entries()],
      equipment: { ...this.equipment },
      pengPotion: this.pengPotion,
      waterTime: Math.round(this.waterTime),
    }
  }
  deserialize(d) {
    if (!d) return
    this.ent.pos.x = d.pos[0]; this.ent.pos.y = d.pos[1]; this.ent.pos.z = d.pos[2]
    this.gears = d.gears || 0
    this.totalGears = d.totalGears ?? d.gears ?? 0
    this.mysteryGears = d.mysteryGears || []
    this.equippedGears = d.equippedGears || this.mysteryGears.slice()
    this.inventory = new Map(d.inventory || [])
    this.items = new Map(d.items || [])
    this.equipment = Object.assign({ sword: null, armor: null, wings: null }, d.equipment)
    this.pengPotion = !!d.pengPotion
    this.waterTime = d.waterTime || 0
    const forms = this.computeForms()
    this.form = forms.includes(d.form) ? d.form : 'robot'
    this.applyForm()
    this.hp = Math.min(d.hp ?? this.maxHp(), this.maxHp())
  }
}
