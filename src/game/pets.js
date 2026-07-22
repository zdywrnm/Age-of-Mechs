// 宠物系统（设定：收服大陆上击败的怪物自动变成宠物，怪越强宠越强；坐骑类可骑）
import * as THREE from 'three'
import { CFG, POS } from '../config.js'
import { moveEntity } from '../player/physics.js'
import { MONSTER_DEFS } from '../entities/monsterDefs.js'

// 判断位置是否在收服大陆
export function inTameLand(x, z) {
  const t = POS.TAME_LAND
  return Math.hypot((x - t.x) / t.rx, (z - t.z) / t.rz) <= 1
}

function makePetPlate(name) {
  const canvas = document.createElement('canvas')
  canvas.width = 256; canvas.height = 64
  const ctx = canvas.getContext('2d')
  ctx.textAlign = 'center'
  ctx.font = 'bold 34px sans-serif'
  ctx.strokeStyle = 'rgba(0,0,0,0.8)'; ctx.lineWidth = 6
  ctx.fillStyle = '#7dff9a'
  ctx.strokeText(`🐾 ${name}`, 128, 42); ctx.fillText(`🐾 ${name}`, 128, 42)
  const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), depthTest: false }))
  sprite.scale.set(1.7, 0.45, 1)
  return sprite
}

export class PetManager {
  constructor(getRoot, ctx, player, monsters) {
    this.getRoot = getRoot
    this.ctx = ctx
    this.player = player
    this.monsters = monsters
    this.roster = []          // { type, name, hp, maxHp, atk, mountable }
    this.activeIndex = -1     // 出战宠物
    this.entity = null        // 出战宠物实体
    this.restTimer = 0
    this.onCapture = null
  }

  // 击杀回调（main 接入）：在收服大陆击败的怪自动收服
  tryCapture(m) {
    if (m.isBoss) return false                    // boss 不可收服
    if (!inTameLand(m.ent.pos.x, m.ent.pos.z)) return false
    if (this.roster.length >= CFG.PET_CAP) return false
    const pet = {
      type: m.type,
      name: m.def.name,
      maxHp: Math.round(m.maxHp * CFG.PET_HP_RATIO),
      hp: Math.round(m.maxHp * CFG.PET_HP_RATIO),
      atk: Math.round(m.atk * CFG.PET_ATK_RATIO),
      mountable: !!m.def.mountable,
    }
    this.roster.push(pet)
    this.onCapture && this.onCapture(pet)
    return true
  }

  deploy(index) {
    this.dismiss()
    if (index < 0 || index >= this.roster.length) return
    this.activeIndex = index
    const pet = this.roster[index]
    const def = MONSTER_DEFS[pet.type]
    const p = this.player.ent.pos
    this.entity = {
      pet, def,
      ent: {
        pos: { x: p.x + 1.5, y: p.y + 0.5, z: p.z },
        vel: { x: 0, y: 0, z: 0 },
        w: def.w, h: def.h, onGround: false,
        noGravity: def.medium !== 'ground',
      },
      attackT: 0,
      group: def.build(),
    }
    const plate = makePetPlate(pet.name)
    plate.position.set(0, def.h + 0.4, 0)
    this.entity.group.add(plate)
    this.getRoot().add(this.entity.group)
  }

  dismiss() {
    if (this.entity) {
      this.entity.group.parent && this.entity.group.parent.remove(this.entity.group)
      this.entity = null
    }
    this.activeIndex = -1
    this.player.mount = null
  }

  activePet() { return this.activeIndex >= 0 ? this.roster[this.activeIndex] : null }

  // 骑乘切换（坐骑类）
  toggleMount() {
    const pet = this.activePet()
    if (!pet || !pet.mountable || !this.entity) return false
    this.player.mount = this.player.mount ? null : pet
    return true
  }

  update(dt) {
    if (!this.entity) return
    const e = this.entity
    const p = this.player
    const pet = e.pet

    if (pet.hp <= 0) {
      // 宠物休息：30s 后满血归队
      this.restTimer += dt
      e.group.visible = false
      if (this.restTimer > 30) { pet.hp = pet.maxHp; this.restTimer = 0; e.group.visible = true }
      return
    }

    if (p.mount === pet) {
      // 骑乘中：宠物贴在玩家脚下
      e.ent.pos.x = p.ent.pos.x; e.ent.pos.y = p.ent.pos.y - 0.2; e.ent.pos.z = p.ent.pos.z
      e.group.position.set(e.ent.pos.x, e.ent.pos.y, e.ent.pos.z)
      e.group.rotation.y = p.model.group.rotation.y
      return
    }

    const dx = p.ent.pos.x - e.ent.pos.x
    const dz = p.ent.pos.z - e.ent.pos.z
    const distH = Math.hypot(dx, dz)

    // 找 8 格内已仇恨玩家的怪
    let target = null, best = 8
    for (const m of this.monsters.list) {
      if (m.dead || m.state !== 'chase') continue
      const d = Math.hypot(m.ent.pos.x - e.ent.pos.x, m.ent.pos.z - e.ent.pos.z)
      if (d < best) { best = d; target = m }
    }

    let tx = 0, tz = 0
    if (target) {
      const d = best || 1
      tx = (target.ent.pos.x - e.ent.pos.x) / d
      tz = (target.ent.pos.z - e.ent.pos.z) / d
      if (best < e.def.w / 2 + 1.4) {
        e.attackT -= dt
        if (e.attackT <= 0) {
          e.attackT = 1.1
          this.monsters.hitMonster(target, pet.atk, e.ent.pos)
        }
        tx = 0; tz = 0
      }
    } else if (distH > 3.5) {
      tx = dx / distH; tz = dz / distH
    }
    if (distH > 24) {
      // 落太远直接闪现回来
      e.ent.pos.x = p.ent.pos.x + 1.5; e.ent.pos.y = p.ent.pos.y + 0.5; e.ent.pos.z = p.ent.pos.z
    }

    const sp = e.def.speed
    e.ent.vel.x = tx * sp; e.ent.vel.z = tz * sp
    if (e.ent.noGravity) {
      const targetY = p.ent.pos.y + 1
      e.ent.vel.y = THREE.MathUtils.clamp((targetY - e.ent.pos.y) * 1.5, -2.5, 2.5)
    } else if (e.ent.onGround && (tx !== 0 || tz !== 0)) {
      const ax = Math.floor(e.ent.pos.x + tx), az = Math.floor(e.ent.pos.z + tz)
      const fy = Math.floor(e.ent.pos.y)
      if (this.ctx.world.isSolid(ax, fy, az) && !this.ctx.world.isSolid(ax, fy + 1, az)) e.ent.vel.y = 8
    }
    moveEntity(this.ctx.world, e.ent, dt)
    if (e.ent.pos.y < -5) { e.ent.pos.x = p.ent.pos.x; e.ent.pos.y = p.ent.pos.y + 1; e.ent.pos.z = p.ent.pos.z }
    e.group.position.set(e.ent.pos.x, e.ent.pos.y, e.ent.pos.z)
    if (tx || tz) e.group.rotation.y = Math.atan2(-tx, -tz) + Math.PI
  }

  serialize() { return { roster: this.roster, activeIndex: this.activeIndex } }
  deserialize(d) {
    if (!d) return
    this.roster = d.roster || []
    if (d.activeIndex >= 0 && d.activeIndex < this.roster.length) this.deploy(d.activeIndex)
  }
}
