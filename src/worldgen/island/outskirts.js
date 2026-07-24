// ⑦ 环城平原郊区：城墙与六区之间的 null 平原带——四门放射土路 + 农舍/农田/篱笆/池塘 + 花草
// 让「中央城市 → 平原郊区 → 六区」自然过渡（配合 main.js 撒的郊区居民）
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill, path, pave } from '../lib.js'
import { mulberry32 } from '../../noise.js'
import { zoneAt } from '../../game/zones.js'
import { lampPost, fenceLine, pond, flowerPatch, campfire, streetTree } from '../decor.js'

// 一座郊区小农舍（木墙、草顶、门、门口灯）
function farmhouse(world, cx, cz) {
  const s = world.surfaceAt(cx, cz)
  fill(world, cx - 2, s, cz - 2, cx + 2, s, cz + 2, B.WOOD)          // 地基
  fill(world, cx - 2, s + 1, cz - 2, cx + 2, s + 3, cz + 2, B.WOOD)  // 墙
  fill(world, cx - 1, s + 1, cz - 1, cx + 1, s + 2, cz + 1, B.AIR)   // 掏空
  fill(world, cx - 2, s + 4, cz - 2, cx + 2, s + 4, cz + 2, B.ROOF_TILE) // 陶瓦顶
  world.setRaw(cx, s + 1, cz - 2, B.AIR); world.setRaw(cx, s + 2, cz - 2, B.AIR) // 门
  world.setRaw(cx - 2, s + 5, cz - 2, B.GLOWSTONE)                    // 门口灯
}

// 一块农田：泥地 + 木栅栏 + 作物（树叶当菜苗）
function farmPlot(world, cx, cz, r = 3) {
  for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
    const x = cx + dx, z = cz + dz
    const g = world.surfaceAt(x, z)
    if (world.get(x, g, z) !== B.GRASS) continue
    if (Math.abs(dx) === r || Math.abs(dz) === r) world.setRaw(x, g + 1, z, B.FENCE)  // 栅栏
    else { world.setRaw(x, g, z, B.MUD); if ((dx + dz) % 2 === 0) world.setRaw(x, g + 1, z, B.LEAVES) }  // 耕地+菜苗
  }
}

export function buildOutskirts(world, STRUCT) {
  const rand = mulberry32(CFG.SEED + 909)
  const IC = { x: CFG.ISLAND_CX, z: CFG.ISLAND_CZ }
  const lights = STRUCT.lights
  const H = (POS.CITY.x1 - POS.CITY.x0) / 2   // 城墙半宽 48

  // —— 1. 四门放射土路（砾石）通向六区 + 沿途路灯 ——
  for (const [gx, gz] of POS.CITY_GATES) {
    const dx = Math.sign(gx - IC.x), dz = Math.sign(gz - IC.z)
    path(world, gx, gz, gx + dx * 40, gz + dz * 40, 3, B.GRAVEL)
    for (let d = 6; d <= 34; d += 8) lampPost(world, gx + dx * d + (dx ? 0 : 3), gz + dz * d + (dz ? 0 : 3), lights)
  }

  // —— 2. 环城平原带（城墙 H+6 到区域之间的 null 区）撒农舍/农田/池塘/花草 ——
  for (let z = IC.z - 100; z <= IC.z + 100; z += 9) {
    for (let x = IC.x - 100; x <= IC.x + 100; x += 9) {
      const jx = x + Math.floor(rand() * 6 - 3), jz = z + Math.floor(rand() * 6 - 3)
      const d = Math.hypot(jx - IC.x, jz - IC.z)
      if (d < H + 8 || d > 96) continue              // 只在城墙外、区域内侧的平原环
      if (zoneAt(jx, jz) !== null) continue          // 只在 null 平原（不进城/不进区）
      if (world.surfaceAt(jx, jz) <= CFG.SEA_LEVEL) continue
      const t = rand()
      if (t < 0.26) farmhouse(world, jx, jz)
      else if (t < 0.58) { farmPlot(world, jx, jz, 3); if (rand() < 0.3) fenceLine(world, jx - 4, jz - 4, jx + 4, jz - 4) }
      else if (t < 0.72) pond(world, jx, jz, 3)
      else if (t < 0.82) campfire(world, jx, jz, lights)
      else if (t < 0.92) flowerPatch(world, jx, jz, 3, rand)
      else streetTree(world, jx, jz)
    }
  }
  STRUCT.outskirts = true
}
