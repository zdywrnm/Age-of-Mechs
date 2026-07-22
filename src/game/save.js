// 存档 v2 + v1 迁移（保留角色进度，世界改动与位置放弃）
import { CFG } from '../config.js'

export function saveGame(data) {
  try {
    localStorage.setItem(CFG.SAVE_KEY, JSON.stringify({ version: 2, ...data }))
  } catch (e) { console.warn('存档失败', e) }
}

export function loadGame() {
  try {
    const raw = localStorage.getItem(CFG.SAVE_KEY)
    if (!raw) return null
    const data = JSON.parse(raw)
    if (data.version !== 2) return null
    return data
  } catch (e) {
    console.warn('读档失败', e)
    return null
  }
}

// v1 → v2 迁移：只带走角色进度
export function migrateV1() {
  try {
    const raw = localStorage.getItem(CFG.SAVE_KEY_V1)
    if (!raw) return null
    const v1 = JSON.parse(raw)
    if (v1.version !== 1) return null
    const gears = v1.player?.gears || 0
    const migrated = {
      version: 2,
      migratedFromV1: true,
      robotConfig: v1.robotConfig,
      player: {
        pos: null,  // 位置重置为出生点
        hp: 9999,   // 载入时按 maxHp 截断
        gears,
        totalGears: gears,
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
      chests: v1.chests || [],
      pets: null, dayTime: 0.1,
      flags: {},
      edits: { main: [], hell: [], void: [] },
      boats: [],
    }
    localStorage.setItem(CFG.SAVE_KEY, JSON.stringify(migrated))
    localStorage.removeItem(CFG.SAVE_KEY_V1)
    return migrated
  } catch (e) {
    console.warn('v1 迁移失败', e)
    return null
  }
}

export function hasSave() { return !!loadGame() || !!localStorage.getItem(CFG.SAVE_KEY_V1) }
export function clearSave() {
  localStorage.removeItem(CFG.SAVE_KEY)
  localStorage.removeItem(CFG.SAVE_KEY_V1)
}
