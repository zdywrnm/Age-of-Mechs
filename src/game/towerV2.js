// 千层塔 v2：无尽爬塔（淇淇拍板：楼梯取消，打到哪层传到哪层，1000 层地狱魔龙）
import { CFG } from '../config.js'
import { B } from '../blocks.js'
import { ARENA } from '../worldgen/arena.js'

// 难度曲线
export function floorStats(f) {
  if (f >= CFG.TOWER_FLOORS) {
    return { count: 1, hp: CFG.DRAGON_HP, atk: CFG.DRAGON_ATK, gears: 999, dragon: true }
  }
  let count, hp, atk, gears
  if (f <= 20) { count = 3; hp = 15 + 6 * f; atk = 4 + 1.5 * f; gears = 2 }
  else if (f <= 100) { count = Math.min(6, 3 + Math.floor(f / 10) - 1); hp = 135 + (f - 20) * 12; atk = 34 + (f - 20) * 0.5; gears = 2 }
  else if (f <= 500) { count = 6; hp = 1095 + (f - 100) * 20; atk = Math.min(90, 74 + (f - 100) * 0.08); gears = 3 }
  else { count = 8; hp = 9095 + (f - 500) * 25; atk = 90; gears = 4 }
  const boss = f % 10 === 0
  return { count: boss ? count + 1 : count, hp: Math.round(hp), atk: Math.round(atk), gears, boss }
}

// 类型池随层段轮换
function typePool(f) {
  if (f <= 100) return ['brute', 'spider', 'archer']
  if (f <= 300) return ['brute', 'spider', 'archer', 'crab', 'bird']
  if (f <= 600) return ['brute', 'archer', 'crab', 'demon']
  return ['demon', 'archer', 'runeguard', 'crab']
}
function bossType(f) {
  if (f === 10) return { type: 'spider', name: '黑蛛王', scale: 1.6 }
  if (f === 20) return { type: 'archer', name: '白骨神射', scale: 1.5 }
  const pool = [
    { type: 'brute', name: '巨岩武士', scale: 1.8 },
    { type: 'spider', name: '爆裂蛛后', scale: 1.9 },
    { type: 'archer', name: '骨王神箭', scale: 1.7 },
    { type: 'demon', name: '恶魔队长', scale: 1.8 },
  ]
  return pool[Math.floor(f / 10) % pool.length]
}

export class TowerV2 {
  constructor(dims, monsters, hud) {
    this.dims = dims
    this.monsters = monsters
    this.hud = hud
    this.maxCleared = 0
    this.dragonKilled = false
    this.currentFloor = 0
    this.battle = null         // 当前层怪物
    this.onFloorCleared = null
  }

  // 进入某层（从传送台或下一层门）
  enterFloor(f) {
    f = Math.max(1, Math.min(CFG.TOWER_FLOORS, f))
    this.dims.ensure('arena')   // 先生成才有 ARENA.spawn
    if (this.dims.active === 'arena') {
      // 已在竞技房（走下一层门）：手动清场重摆
      const [sx, sy, sz] = ARENA.spawn
      this.monsters.clearAll()
      const p = this.monsters.player
      p.ent.pos.x = sx; p.ent.pos.y = sy; p.ent.pos.z = sz
      p.ent.vel.x = p.ent.vel.y = p.ent.vel.z = 0
    } else {
      this.dims.switchTo('arena', ARENA.spawn)
    }
    const arenaWorld = this.dims.get('arena').world
    // 关闭下一层门
    for (const [x, y, z] of ARENA.nextPortalCells) arenaWorld.set(x, y, z, B.PORTAL_FRAME, false)
    this.currentFloor = f
    this.battle = []
    const stats = floorStats(f)
    if (stats.dragon) {
      const [bx, by, bz] = ARENA.bossPos
      const m = this.monsters.spawn('helldragon', bx, by + 2, bz, {
        boss: true, bossName: '地狱魔龙', hp: stats.hp, atk: stats.atk, gears: stats.gears, towerFloor: f, tag: 'arena',
      })
      this.battle.push(m)
      this.hud.toast('🐉 第 1000 层！地狱魔龙降临！！（作者打半天才掉一滴血的那位）')
      return
    }
    const pool = typePool(f)
    const pts = ARENA.spawnPoints
    for (let i = 0; i < stats.count; i++) {
      const isBossSlot = stats.boss && i === 0
      const bt = isBossSlot ? bossType(f) : null
      const [x, y, z] = pts[i % pts.length]
      const m = this.monsters.spawn(bt ? bt.type : pool[Math.floor(Math.random() * pool.length)], x, y + 0.1, z, {
        floor: Math.min(f, 20), towerFloor: f, tag: 'arena',
        boss: isBossSlot, bossName: bt?.name, scale: bt?.scale,
        hp: isBossSlot ? stats.hp * 6 : stats.hp,
        atk: isBossSlot ? Math.round(stats.atk * 1.5) : stats.atk,
        gears: isBossSlot ? 5 + Math.floor(f / 2) : stats.gears,
      })
      this.battle.push(m)
    }
    this.hud.toast(stats.boss ? `⚠️ 第 ${f} 层：小 boss 层！` : `⚔️ 第 ${f} 层：怪物出现！`)
  }

  // 每帧：清层检查 + boss 血条
  update() {
    if (this.dims.active !== 'arena' || !this.battle) {
      return   // 塔外的 boss 血条由 main 的世界 boss 逻辑驱动
    }
    if (this.battle.length && this.battle.every(m => m.dead)) {
      const f = this.currentFloor
      this.battle = []
      this.maxCleared = Math.max(this.maxCleared, f)
      if (f >= CFG.TOWER_FLOORS) {
        this.dragonKilled = true
        this.hud.banner('🏆 你打败了地狱魔龙！！', '千层塔登顶！你是这个世界最了不起的变形金刚！')
      } else {
        this.hud.toast(`✅ 第 ${f} 层清空！走进北边的门挑战下一层`)
        // 打开下一层门
        const arenaWorld = this.dims.get('arena').world
        for (const [x, y, z] of ARENA.nextPortalCells) arenaWorld.set(x, y, z, B.PORTAL, false)
      }
      this.onFloorCleared && this.onFloorCleared(f)
    }
    const boss = this.battle.find(m => m.isBoss && !m.dead)
    if (boss) this.hud.showBoss(boss.bossName, boss.hp / boss.maxHp)
    else this.hud.hideBoss()
  }

  serialize() { return { maxCleared: this.maxCleared, dragonKilled: this.dragonKilled } }
  deserialize(d) {
    if (!d) return
    this.maxCleared = d.maxCleared || 0
    this.dragonKilled = !!d.dragonKilled
  }
}
