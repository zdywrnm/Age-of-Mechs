// v5 区域系统：域扭曲 Voronoi（有机边界，不再方块拼接）
// zoneAt 仍是唯一纯函数入口（安全区/刷怪/指南针/区域标题/鬼城雾共用）
// 单一真源：warp 实例 + SITES 表被 zoneAt/regionWeight/regionDist 共享，terrain 也 import 同一套
import { CFG, POS } from '../config.js'
import { makeWarp2D } from '../noise.js'

// 域扭曲场（±22 格，波长 ~50）——把归一化距离的等值线扭成蜿蜒曲线
const warp = makeWarp2D(CFG.SEED, 22, 0.02)

// 站点表（POS 派生）：中心 + 影响半径 reach + 硬核心 core（保证区中心稳定命中，check 依赖）
// core 之内不看扭曲直接归属；core 之外用扭曲距离场做有机边界
const site = (id, name, icon, c, reach, extra = {}) => ({
  id, name, icon, cx: c.x, cz: c.z, reach, core: reach * 0.38, ...extra,
})
export const SITES = [
  site('mountains', '矿石群山', '⛰️', POS.MOUNT_C, 66),
  site('forest',    '幽暗森林', '🌲', POS.FOREST_C, 62),
  site('ghost',     '鬼城遗址', '👻', POS.GHOST_C, 56),
  site('bamboo',    '翠竹林',   '🎋', POS.BAMBOO_C, 46),
  site('henge',     '巨石阵高地', '🗿', POS.HENGE_C, 24),
]
const SITE_BY_ID = Object.fromEntries(SITES.map(s => [s.id, s]))

// 城市：矩形城墙内（墙本就是方的，最高优先级、安全区）
const CITY_ZONE = { id: 'city', name: '中央城市', icon: '🏰', safe: true }
function inCity(x, z) {
  const c = POS.CITY
  return x >= c.x0 && x <= c.x1 && z >= c.z0 && z <= c.z1
}

// 兼容旧代码（zoneFx/hud 遍历 ZONES 取 icon/name）——由 SITES + city 拼出
export const ZONES = [CITY_ZONE, ...SITES.map(s => ({ id: s.id, name: s.name, icon: s.icon }))]

// 返回命中的区域对象，不在任何区域返回 null（= 平原/郊区过渡带）
export function zoneAt(x, z) {
  if (inCity(x, z)) return CITY_ZONE                       // (a) 城墙内绝对优先
  for (const s of SITES)                                   // (a) 硬核心：区中心稳定命中
    if (Math.hypot(x - s.cx, z - s.cz) < s.core) return s
  const [wx, wz] = warp(x, z)                              // (b) 域扭曲坐标 → 蜿蜒边界
  let best = null, bestScore = 1                           // score<1 才落域，否则 null=平原
  for (const s of SITES) {
    const score = Math.hypot(wx - s.cx, wz - s.cz) / s.reach
    if (score < bestScore) { bestScore = score; best = s }
  }
  return best                                              // (c) 相邻区 score 都>1 处 → null → 自然平原过渡
}

// 区域软权重 0（区外）→1（核心）——供 terrain 做高度软过渡（同一 warp 真源）
export function regionWeight(x, z, id) {
  const s = SITE_BY_ID[id]
  if (!s) return 0
  const [wx, wz] = warp(x, z)
  const t = 1 - Math.min(1, Math.hypot(wx - s.cx, wz - s.cz) / s.reach)
  return t * t * (3 - 2 * t)
}

// 到某区（扭曲）边界的距离：区内=0，区外随距离增大——供 zoneFx 鬼城雾按有机边界渐变
export function regionDist(x, z, id) {
  const s = SITE_BY_ID[id]
  if (!s) return 1e9
  const [wx, wz] = warp(x, z)
  return Math.max(0, Math.hypot(wx - s.cx, wz - s.cz) - s.reach)
}
