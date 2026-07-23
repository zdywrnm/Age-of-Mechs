// ③ 巨石阵（v4 迁到西北高地）：内外多圈石柱，中央唯一挖掘入口
// 主线严格保留：中心正下方 100 格三块诡异木板，第三块下方大地齿轮箱
import { POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill, flatten } from '../lib.js'

export function buildHenge(world, STRUCT) {
  const cx = POS.HENGE_C.x, cz = POS.HENGE_C.z
  const s = world.surfaceAt(cx, cz)
  STRUCT.hengeGround = s
  flatten(world, cx, cz, 14, s)
  // 内圈 8 柱（第一章样式原样：高柱+砖帽）
  for (let k = 0; k < 8; k++) {
    const ang = (k / 8) * Math.PI * 2
    const px = Math.round(cx + Math.cos(ang) * 7)
    const pz = Math.round(cz + Math.sin(ang) * 7)
    fill(world, px, s + 1, pz, px, s + 5, pz, B.STONE)
    world.setRaw(px, s + 6, pz, B.BRICK)
  }
  // 外圈 12 柱（v4 扩建：矮一截，错开角度）
  for (let k = 0; k < 12; k++) {
    const ang = (k / 12) * Math.PI * 2 + 0.13
    const px = Math.round(cx + Math.cos(ang) * 12)
    const pz = Math.round(cz + Math.sin(ang) * 12)
    fill(world, px, s + 1, pz, px, s + 4, pz, B.STONE)
  }
  // 中央唯一挖掘入口标记（砖块 = 从这里往下挖）
  world.setRaw(cx, s, cz, B.BRICK)

  // —— 大地密室（原 buildEarthRoom 逻辑原样，深度不变）——
  const p1 = s - POS.EARTH_PLANK_DEPTH
  const p2 = p1 - 3
  const p3 = p2 - 3
  world.setRaw(cx, p1, cz, B.PLANK)
  world.setRaw(cx, p2, cz, B.PLANK)
  world.setRaw(cx, p3, cz, B.PLANK)
  const top = p3 - 1
  const bottom = top - 3
  fill(world, cx - 2, bottom - 1, cz - 2, cx + 2, top, cz + 2, B.STONE)
  fill(world, cx - 2, bottom, cz - 2, cx + 2, top, cz + 2, B.AIR)
  fill(world, cx - 2, bottom - 1, cz - 2, cx + 2, bottom - 1, cz + 2, B.PLANK)
  const chest = [cx + 1, bottom, cz]
  world.setRaw(chest[0], chest[1], chest[2], B.CHEST)
  STRUCT.earthRoom = { chest, planks: [[cx, p1, cz], [cx, p2, cz], [cx, p3, cz]] }
  STRUCT.lights.push([cx, bottom + 2, cz])
}
