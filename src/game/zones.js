// v4 区域系统：初始岛六区判定
// 纯函数、无渲染依赖——安全区、刷怪池、区域标题、鬼城雾效、指南针共用同一套判定
import { POS } from '../config.js'

export const ZONES = [
  // city 排第一 = 最高优先级（城墙内绝对安全区）
  { id: 'city',      name: '中央城市',   icon: '🏰', safe: true, rect: POS.CITY },
  { id: 'bamboo',    name: '翠竹林',     icon: '🎋', circle: POS.BAMBOO_C },
  { id: 'ghost',     name: '鬼城遗址',   icon: '👻', rect: POS.GHOST_RECT },
  // henge 在 mountains 之前：石阵高地与矿山南缘的重叠带优先显示巨石阵
  { id: 'henge',     name: '巨石阵高地', icon: '🗿', circle: { get x() { return POS.HENGE_C.x }, get z() { return POS.HENGE_C.z }, r: 18 } },
  { id: 'mountains', name: '矿石群山',   icon: '⛰️', rect: POS.MOUNT_RECT },
  { id: 'forest',    name: '幽暗森林',   icon: '🌲', rect: POS.FOREST_RECT },
]

const inRect = (r, x, z) => x >= r.x0 && x <= r.x1 && z >= r.z0 && z <= r.z1
const inCircle = (c, x, z) => Math.hypot(x - c.x, z - c.z) <= c.r

// 返回命中的区域对象（数组顺序即优先级），不在任何区域返回 null
export function zoneAt(x, z) {
  for (const zn of ZONES) {
    if (zn.rect && inRect(zn.rect, x, z)) return zn
    if (zn.circle && inCircle(zn.circle, x, z)) return zn
  }
  return null
}
