// v4.1 城郊：城墙外、六区之间的平原郊区——从城门延伸的土路 + 零星农舍 + 农田
// 让「中央城市 → 平原郊区 → 六区」有过渡带（配合 main.js 撒的郊区居民）
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill } from '../lib.js'

// 在地表铺一格（跟随起伏地形，只在草/沙上铺，不碰建筑/水）
function pave(world, x, z, id) {
  const g = world.surfaceAt(x, z)
  const top = world.get(x, g, z)
  if (top === B.GRASS || top === B.SAND || top === B.MUD) world.setRaw(x, g, z, id)
}

// 一座郊区小农舍（木墙、草顶、小门），落在地表
function farmhouse(world, cx, cz) {
  const s = world.surfaceAt(cx, cz)
  fill(world, cx - 2, s, cz - 2, cx + 2, s, cz + 2, B.WOOD)          // 地基
  fill(world, cx - 2, s + 1, cz - 2, cx + 2, s + 3, cz + 2, B.WOOD)  // 墙
  fill(world, cx - 1, s + 1, cz - 1, cx + 1, s + 2, cz + 1, B.AIR)   // 掏空
  fill(world, cx - 2, s + 4, cz - 2, cx + 2, s + 4, cz + 2, B.LEAVES) // 草顶
  world.setRaw(cx, s + 1, cz - 2, B.AIR); world.setRaw(cx, s + 2, cz - 2, B.AIR) // 门
  world.setRaw(cx - 2, s + 5, cz - 2, B.GLOWSTONE)                    // 门口灯（夜里认得出）
}

// 一块农田：泥地 + 木栅栏围栏 + 零星作物（用树叶当菜苗）
function farmPlot(world, cx, cz, r = 3) {
  for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
    const x = cx + dx, z = cz + dz
    const g = world.surfaceAt(x, z)
    if (world.get(x, g, z) !== B.GRASS) continue
    if (Math.abs(dx) === r || Math.abs(dz) === r) {
      world.setRaw(x, g + 1, z, B.WOOD)   // 栅栏
    } else {
      world.setRaw(x, g, z, B.MUD)        // 耕地
      if ((dx + dz) % 2 === 0) world.setRaw(x, g + 1, z, B.LEAVES)  // 菜苗
    }
  }
}

export function buildOutskirts(world, STRUCT) {
  const cx = CFG.ISLAND_CX
  // 三门外郊区（西门接竹林，空间不足不做）：[门x, 门z, 朝外方向 dx/dz, 农舍点, 农田点]
  const gate = POS.CITY_GATES  // [[128,96]北,[128,160]南,[96,128]西,[160,128]东]
  // 北门外
  layout(world, 128, 96, 0, -1, [[118, 84], [140, 86]], [[120, 90], [138, 82]])
  // 南门外
  layout(world, 128, 160, 0, 1, [[116, 172], [142, 170]], [[138, 168], [118, 174]])
  // 东门外
  layout(world, 160, 128, 1, 0, [[172, 118], [170, 140]], [[168, 138], [174, 120]])

  function layout(world, gx, gz, dx, dz, houses, farms) {
    // 土路：从城门向外延伸到六区边界，3 格宽泥巴路
    for (let d = 1; d <= 14; d++) {
      const rx = gx + dx * d, rz = gz + dz * d
      for (let w = -1; w <= 1; w++) {
        pave(world, rx + (dx ? 0 : w), rz + (dz ? 0 : w), B.MUD)
      }
    }
    for (const [hx, hz] of houses) farmhouse(world, hx, hz)
    for (const [fx, fz] of farms) farmPlot(world, fx, fz)
  }
}
