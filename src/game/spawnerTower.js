// 刷怪塔逐层刷怪：首次进入未清空楼层 → 刷怪；全灭 → 清层
export class SpawnerTowerCtrl {
  constructor(info, monsters, hud) {
    this.info = info
    this.monsters = monsters
    this.hud = hud
    this.cleared = {}          // floor -> true
    this.battles = new Map()   // floor -> [monster...]
    this.onFloorCleared = null
    this.currentFloor = 0
  }

  floorMonsters(f) {
    // 类型随楼层轮换；10/20 层是小 boss
    if (f === 10) {
      return [
        { type: 'spider', boss: true, bossName: '黑蛛王', scale: 1.6, hp: 220, atk: 12, gears: 5 },
        { type: 'spider' }, { type: 'brute' },
      ]
    }
    if (f === 20) {
      return [
        { type: 'archer', boss: true, bossName: '白骨神射', scale: 1.5, hp: 450, atk: 16, gears: 10 },
        { type: 'archer' }, { type: 'brute' },
      ]
    }
    const pool = ['brute', 'spider', 'archer']
    const a = pool[f % 3], b = pool[(f + 1) % 3]
    return [{ type: a }, { type: b }, { type: a }]
  }

  update(playerPos) {
    const f = this.info.floorOf(playerPos.x, playerPos.y, playerPos.z)
    this.currentFloor = f

    // 进入新的未清空楼层且该层无进行中的战斗 → 刷怪
    if (f > 0 && !this.cleared[f] && !this.battles.has(f)) {
      const defs = this.floorMonsters(f)
      const points = this.info.spawnPoints(f)
      const spawned = defs.map((d, i) => {
        const [x, y, z] = points[i % points.length]
        return this.monsters.spawn(d.type, x + 0.5, y + (i === 0 ? 0 : 0.1), z + 0.5, {
          floor: f, towerFloor: f,
          boss: d.boss, bossName: d.bossName, scale: d.scale,
          hp: d.hp, atk: d.atk, gears: d.gears,
        })
      })
      this.battles.set(f, spawned)
      const boss = spawned.find(m => m.isBoss)
      if (boss) this.hud.toast(`⚠️ 小 boss 出现：${boss.bossName}！`)
      else this.hud.toast(`第 ${f} 层：怪物出现！`)
    }

    // 检查各层战斗是否结束
    for (const [floor, ms] of this.battles) {
      if (ms.every(m => m.dead)) {
        this.battles.delete(floor)
        this.cleared[floor] = true
        this.hud.toast(`✅ 第 ${floor} 层清空！`)
        this.onFloorCleared && this.onFloorCleared(floor)
      }
    }

    // boss 血条
    let bossShown = false
    for (const ms of this.battles.values()) {
      const boss = ms.find(m => m.isBoss && !m.dead)
      if (boss) { this.hud.showBoss(boss.bossName, boss.hp / boss.maxHp); bossShown = true; break }
    }
    if (!bossShown) this.hud.hideBoss()
  }

  serialize() { return { cleared: this.cleared } }
  deserialize(d) { if (d && d.cleared) this.cleared = d.cleared }
}
