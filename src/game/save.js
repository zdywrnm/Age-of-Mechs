// 存档系统 v4：四个独立档位（本地），支持导出/导入文件跨设备转移
// 槽位键 aom_slot{1..4}；当前槽 aom_current_slot；
// 旧版单档（qiqi_save_v3，及更早 v2/v1 链）首次访问时自动迁入槽位 1
import { CFG } from '../config.js'

export const SLOT_COUNT = 4
const slotKey = n => `aom_slot${n}`

const ISLAND_REV = 2   // v4 初始岛世界修订号（六区重建）

// v3 → v4 迁移：补新字段 + 过滤新主岛立柱范围内的旧方块编辑（含地下城）
export function migrateV3toV4(d) {
  if (!d || d.version >= 4) return d
  d.version = 4
  d.islandRev = ISLAND_REV
  // 装备补 artifact/ranged 空槽（旧 JSON 导入也可用）
  d.player = d.player || {}
  d.player.equipment = Object.assign({ sword: null, armor: null, wings: null, artifact: null, ranged: null }, d.player.equipment)
  // boss 击杀持久标记
  d.flags = Object.assign({ ancientPandaDefeated: false, ghostDragonDefeated: false }, d.flags)
  // 宝箱 id 前缀化（chests.deserialize 已兼容，这里统一重写）
  d.chests = (d.chests || []).map(k => (k.includes(':') || k.includes(',')) ? k : 'gear:' + k)
  // 只清除「新主岛立柱范围」内的旧方块编辑——主岛柱体(含海滩)+ 刷怪塔小岛盒
  const inRebuild = (x, z) =>
    Math.hypot(x - CFG.ISLAND_CX, z - CFG.ISLAND_CZ) <= 118 ||
    (x <= 40 && z >= 108 && z <= 148)
  if (d.edits?.main) d.edits.main = d.edits.main.filter(([x, , z]) => !inRebuild(x, z))   // 全 y 过滤（含地下城）
  // 旧位置若落在重建区 → 置 null，main.js 现有兜底自动回城南出生点
  if (d.player.pos && inRebuild(d.player.pos[0], d.player.pos[2])) d.player.pos = null
  // 重建区内会被陆地/建筑吞没的旧船移除，其他船保留
  d.boats = (d.boats || []).filter(b => {
    const x = b.x ?? (Array.isArray(b) ? b[0] : 0)
    const z = b.z ?? (Array.isArray(b) ? b[2] : 0)
    return !inRebuild(x, z)
  })
  return d
}

export function currentSlot() {
  const n = Number(localStorage.getItem('aom_current_slot') || 1)
  return n >= 1 && n <= SLOT_COUNT ? n : 1
}
export function setCurrentSlot(n) { localStorage.setItem('aom_current_slot', String(n)) }

// —— 旧版迁移（一次性）：老单档搬进槽位 1 ——
function migrateLegacy() {
  try {
    if (localStorage.getItem(slotKey(1))) return
    let legacy = localStorage.getItem(CFG.SAVE_KEY)
    if (!legacy) { legacyChainV2V1(); legacy = localStorage.getItem(CFG.SAVE_KEY) }
    if (!legacy) return
    const data = JSON.parse(legacy)
    if (data.version === 3) {
      localStorage.setItem(slotKey(1), JSON.stringify(migrateV3toV4(data)))   // 顺手升到 v4
      setCurrentSlot(1)
    }
    localStorage.removeItem(CFG.SAVE_KEY)
  } catch (e) { console.warn('旧档迁移失败', e) }
}

function legacyChainV2V1() {
  // v2/v1 → v3（沿用原链式迁移逻辑，产出写到 CFG.SAVE_KEY）
  try {
    const rawV2 = localStorage.getItem(CFG.SAVE_KEY_V2)
    const rawV1 = localStorage.getItem(CFG.SAVE_KEY_V1)
    let v2 = rawV2 ? JSON.parse(rawV2) : null
    if (!v2 && rawV1) {
      const v1 = JSON.parse(rawV1)
      if (v1.version === 1) {
        const gears = v1.player?.gears || 0
        v2 = {
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
      }
    }
    if (v2 && v2.version === 2) {
      const mystery = v2.player?.mysteryGears || []
      localStorage.setItem(CFG.SAVE_KEY, JSON.stringify({
        version: 3,
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
      }))
    }
    localStorage.removeItem(CFG.SAVE_KEY_V2)
    localStorage.removeItem(CFG.SAVE_KEY_V1)
  } catch (e) { console.warn('v2/v1 链迁移失败', e) }
}

// —— 当前槽读写（main.js 只用这两个，槽位对它透明）——
export function saveGame(data) {
  try {
    localStorage.setItem(slotKey(currentSlot()),
      JSON.stringify({ version: 4, islandRev: ISLAND_REV, savedAt: Date.now(), ...data }))
  } catch (e) { console.warn('存档失败', e) }
}

export function loadGame() {
  migrateLegacy()
  try {
    const raw = localStorage.getItem(slotKey(currentSlot()))
    if (!raw) return null
    let data = JSON.parse(raw)
    if (data.version === 3) { data = migrateV3toV4(data); data.migratedFromV1 = true }   // 旧档提示
    if (data.version !== 4) return null
    return data
  } catch (e) {
    console.warn('读档失败', e)
    return null
  }
}

// —— 槽位管理（标题界面用）——
export function listSlots() {
  migrateLegacy()
  const out = []
  for (let n = 1; n <= SLOT_COUNT; n++) {
    const raw = localStorage.getItem(slotKey(n))
    if (!raw) { out.push({ slot: n, exists: false }); continue }
    try {
      const d = JSON.parse(raw)
      out.push({
        slot: n, exists: true,
        level: Math.min(20, 1 + Math.floor((d.player?.gears || 0) / (CFG.GEARS_PER_LEVEL || 5))),
        mystery: (d.player?.mysteryGears || []).length,
        quest: d.quests?.index || 0,
        savedAt: d.savedAt || null,
        bodyColor: d.robotConfig?.body || '#e74c3c',
      })
    } catch { out.push({ slot: n, exists: false }) }
  }
  return out
}

export function deleteSlot(n) { localStorage.removeItem(slotKey(n)) }

export function exportSlot(n) {
  const raw = localStorage.getItem(slotKey(n))
  if (!raw) return null
  const blob = new Blob([raw], { type: 'application/json' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  const d = new Date()
  a.download = `机甲时代存档-档位${n}-${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}.json`
  a.click()
  setTimeout(() => URL.revokeObjectURL(a.href), 2000)
  return true
}

export function importToSlot(n, text) {
  let data = JSON.parse(text)                // 非法 JSON 会抛错，调用方捕获
  if ((data.version !== 3 && data.version !== 4) || !data.player) throw new Error('不是有效的机甲时代存档')
  if (data.version === 3) data = migrateV3toV4(data)   // 旧档导入自动升级 v4
  localStorage.setItem(slotKey(n), JSON.stringify(data))
  return true
}

export function hasSave() { return listSlots().some(s => s.exists) }
// 清空当前槽（重新开始当前档位用）
export function clearSave() { deleteSlot(currentSlot()) }
