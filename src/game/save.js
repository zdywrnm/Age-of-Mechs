// 存档 v3 + v2/v1 迁移链（迁移只保留角色进度：世界改动/船/位置放弃）
import { CFG } from '../config.js'

export function saveGame(data) {
  try {
    localStorage.setItem(CFG.SAVE_KEY, JSON.stringify({ version: 3, ...data }))
  } catch (e) { console.warn('存档失败', e) }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(CFG.SAVE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data.version !== 3) return null
    return data
  } catch (e) {
    console.warn('读档失败', e)
    return null
  }
}

// v2 → v3：512 大地图重布局，坐标系全变——
// 保留角色进度；宝箱开启状态按「已拥有的神秘齿轮」重建（开箱⟺得齿轮，语义等价）
export function migrateV2() {
  try {
    const raw = localStorage.getItem(CFG.SAVE_KEY_V2)
    if (!raw) return null
    const v2 = JSON.parse(raw)
    if (v2.version !== 2) return null
    const mystery = v2.player?.mysteryGears || []
    const migrated = {
      version: 3,
      migratedFromV2: true,
      robotConfig: v2.robotConfig,
      player: { ...v2.player, pos: null, waterTime: 0 },
      quests: v2.quests || { index: 0, counters: {} },
      tower2: v2.tower2 || { maxCleared: 0, dragonKilled: false },
      chests: ['ore', 'earth', 'tide', 'light', 'mystery'].filter(k => mystery.includes(k)),
      pets: v2.pets || null,
      dayTime: v2.dayTime ?? 0.1,
      flags: v2.flags || {},
      edits: { main: [], hell: [], void: [] },
      boats: [],
    }
    localStorage.setItem(CFG.SAVE_KEY, JSON.stringify(migrated))
    localStorage.removeItem(CFG.SAVE_KEY_V2)
    return migrated
  } catch (e) {
    console.warn('v2 迁移失败', e)
    return null
  }
}

// v1 → v2 → v3 链式迁移
export function migrateV1() {
  try {
    const raw = localStorage.getItem(CFG.SAVE_KEY_V1)
    if (!raw) return null
    const v1 = JSON.parse(raw)
    if (v1.version !== 1) return null
    const gears = v1.player?.gears || 0
    const v2 = {
      version: 2,
      robotConfig: v1.robotConfig,
      player: {
        pos: null, hp: 9999, gears, totalGears: gears,
        mysteryGears: v1.player?.mysteryGears || [],
        equippedGears: v1.player?.mysteryGears || [],
        form: 'robot',
        inventory: v1.player?.inventory || [],
        items: [],
        equipment: { sword: null, armor: null, wings: null },
        pengPotion: false, waterTime: 0,
      },
      quests: { index: (v1.quests?.index >= 7) ? 8 : (v1.quests?.index || 0), counters: {} },
      tower2: { maxCleared: Math.max(...Object.keys(v1.tower?.cleared || {}).map(Number), 0), dragonKilled: false },
      pets: null, dayTime: 0.1, flags: {},
    }
    localStorage.setItem(CFG.SAVE_KEY_V2, JSON.stringify(v2))
    localStorage.removeItem(CFG.SAVE_KEY_V1)
    return migrateV2()
  } catch (e) {
    console.warn('v1 迁移失败', e)
    return null
  }
}

export function hasSave() {
  return !!localStorage.getItem(CFG.SAVE_KEY) ||
         !!localStorage.getItem(CFG.SAVE_KEY_V2) ||
         !!localStorage.getItem(CFG.SAVE_KEY_V1)
}
export function clearSave() {
  localStorage.removeItem(CFG.SAVE_KEY)
  localStorage.removeItem(CFG.SAVE_KEY_V2)
  localStorage.removeItem(CFG.SAVE_KEY_V1)
}
