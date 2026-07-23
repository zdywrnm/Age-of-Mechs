// ② 竹林（城西）：8~14 格高密竹、三层竹林神殿、竹躯干熊猫头大图腾、隐藏图腾宝箱
// 神殿：一层植物大厅 / 二层墙挂武器+封闭 Boss 场（远古熊猫）/ 三层宝藏（Boss 死后开放）
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill, flatten } from '../lib.js'
import { mulberry32 } from '../../noise.js'

function bamboo(world, x, z, h) {
  const g = world.surfaceAt(x, z)
  if (world.get(x, g, z) !== B.GRASS) return
  for (let y = 1; y <= h; y++) world.setRaw(x, g + y, z, B.BAMBOO)
  // 顶端竹叶簇
  const top = g + h
  for (const [dx, dy, dz] of [[0, 1, 0], [1, 0, 0], [-1, 0, 0], [0, 0, 1], [0, 0, -1], [1, 1, 0], [-1, 1, 0]]) {
    if (world.get(x + dx, top + dy, z + dz) === B.AIR) world.setRaw(x + dx, top + dy, z + dz, B.BAMBOO_LEAVES)
  }
}

export function buildBamboo(world, STRUCT) {
  const rand = mulberry32(CFG.SEED + 202)
  const c = POS.BAMBOO_C

  // —— 密竹（圆形范围内，避开神殿与出生小径）——
  const temple = POS.BAMBOO_TEMPLE
  for (let z = c.z - c.r; z <= c.z + c.r; z++) {
    for (let x = c.x - c.r; x <= c.x + c.r; x++) {
      if (Math.hypot(x - c.x, z - c.z) > c.r) continue
      if (Math.hypot(x - temple.x, z - temple.z) < 10) continue     // 神殿净空
      if (Math.abs(x - POS.BRIDGE.x1) < 4 && Math.abs(z - 128) < 3) continue  // 石桥口小径
      // 约 1/9 密度种竹
      if (rand() < 0.14) bamboo(world, x, z, 8 + Math.floor(rand() * 7))
    }
  }

  // —— 隐藏图腾宝箱（竹林深处，四周竹墙围住）——
  const bc = POS.BAMBOO_CHEST
  const bs = world.surfaceAt(bc.x, bc.z)
  for (let y = 1; y <= 4; y++) for (const [dx, dz] of [[-2, -2], [2, -2], [-2, 2], [2, 2], [0, -2], [0, 2], [-2, 0], [2, 0]])
    world.setRaw(bc.x + dx, bs + y, bc.z + dz, B.BAMBOO)
  world.setRaw(bc.x, bs + 1, bc.z, B.CHEST)
  STRUCT.bambooChest = [bc.x, bs + 1, bc.z]
  STRUCT.lights.push([bc.x, bs + 3, bc.z])

  // —— 三层竹林神殿 ——
  buildBambooTemple(world, STRUCT, temple)
}

function buildBambooTemple(world, STRUCT, t) {
  const s = world.surfaceAt(t.x, t.z)
  const half = 8, fh = 6   // 每层内高 6
  flatten(world, t.x, t.z, half + 1, s, 40, B.GRASS)

  const floorY = [s, s + fh + 1, s + 2 * (fh + 1)]   // 三层地板 y
  const roofY = s + 3 * (fh + 1)

  // 三层外壳（竹墙 + 竹叶顶）
  fill(world, t.x - half, s + 1, t.z - half, t.x + half, roofY, t.z + half, B.BAMBOO)
  for (let lv = 0; lv < 3; lv++) {
    const fy = floorY[lv]
    fill(world, t.x - half + 1, fy + 1, t.z - half + 1, t.x + half - 1, fy + fh, t.z + half - 1, B.AIR)  // 掏空
    if (lv > 0) fill(world, t.x - half + 1, fy, t.z - half + 1, t.x + half - 1, fy, t.z + half - 1, B.PLANK)  // 楼板
  }
  // 竹叶尖顶
  for (let i = 0; i <= half; i++) {
    const r = half - i
    if (r < 0) break
    for (let d = -r; d <= r; d++) {
      world.setRaw(t.x + d, roofY + i, t.z - r, B.BAMBOO_LEAVES); world.setRaw(t.x + d, roofY + i, t.z + r, B.BAMBOO_LEAVES)
      world.setRaw(t.x - r, roofY + i, t.z + d, B.BAMBOO_LEAVES); world.setRaw(t.x + r, roofY + i, t.z + d, B.BAMBOO_LEAVES)
    }
  }
  // 南门（一层入口）
  fill(world, t.x - 1, s + 1, t.z + half, t.x + 1, s + 3, t.z + half, B.AIR)

  // 楼梯：每层西北角三级 + 楼板开口
  const stairX = t.x - half + 2, stairZ = t.z - half + 2
  for (let lv = 0; lv < 2; lv++) {
    const base = floorY[lv]
    for (let i = 0; i < fh; i++) world.setRaw(stairX + i, base + 1 + i, stairZ, B.BAMBOO)
    // 上层楼板在楼梯顶开口
    fill(world, stairX + fh - 1, floorY[lv + 1], stairZ, stairX + fh, floorY[lv + 1], stairZ + 1, B.AIR)
  }

  // —— 一层：植物大厅 + 竹躯干熊猫头大图腾 ——
  for (const [dx, dz] of [[-5, -5], [5, -5], [-5, 5], [5, 5], [-6, 0], [6, 0]]) {
    const h = 2 + Math.floor(Math.random() * 2)
    for (let y = 1; y <= h; y++) world.setRaw(t.x + dx, s + y, t.z + dz, B.BAMBOO)
    world.setRaw(t.x + dx, s + h + 1, t.z + dz, B.BAMBOO_LEAVES)
  }
  // 大图腾：竹躯干（3 高竹柱）+ 熊猫头（白绒块 + 黑耳黑眼圈）
  fill(world, t.x, s + 1, t.z, t.x, s + 3, t.z, B.BAMBOO)
  fill(world, t.x - 1, s + 4, t.z - 1, t.x + 1, s + 6, t.z + 1, B.FUR_WHITE)   // 白脸
  world.setRaw(t.x - 1, s + 7, t.z, B.FUR_BLACK); world.setRaw(t.x + 1, s + 7, t.z, B.FUR_BLACK)  // 黑耳
  world.setRaw(t.x - 1, s + 5, t.z - 1, B.FUR_BLACK); world.setRaw(t.x + 1, s + 5, t.z - 1, B.FUR_BLACK)  // 黑眼圈
  STRUCT.lights.push([t.x, s + 4, t.z], [t.x, s + fh, t.z])

  // —— 二层：墙挂武器 + 封闭 Boss 场 ——
  const l2 = floorY[1]
  for (const [dx, dz, wall] of [[-half + 1, 0, 'w'], [half - 1, 0, 'e'], [0, -half + 1, 'n']]) {
    for (const off of [-3, 0, 3]) {
      const wx = wall === 'w' || wall === 'e' ? t.x + dx : t.x + off
      const wz = wall === 'n' ? t.z + dz : t.z + off
      world.setRaw(wx, l2 + 3, wz, B.GOLD)   // 墙挂武器（金饰代表）
      world.setRaw(wx, l2 + 2, wz, B.STONE)
    }
  }
  STRUCT.bambooBoss = [t.x + 0.5, l2 + 1, t.z + 0.5]   // 远古熊猫生成点
  STRUCT.lights.push([t.x, l2 + fh, t.z])

  // —— 三层：宝藏（Boss 死后开放；封板由二层顶到三层的楼梯口初始封住）——
  const l3 = floorY[2]
  world.setRaw(t.x - 2, l3 + 1, t.z, B.GOLD)
  world.setRaw(t.x + 2, l3 + 1, t.z, B.CHEST)          // 钻石/代码宝藏箱
  world.setRaw(t.x, l3 + 1, t.z - 2, B.ORE_DIAMOND)
  world.setRaw(t.x, l3 + 1, t.z + 2, B.CODE)
  STRUCT.bambooTreasure = [t.x + 2, l3 + 1, t.z]
  // 封板：二→三层楼梯口初始用竹板堵住（击杀 Boss 后 world.set 打开）
  const seal = []
  const sx = stairX + fh - 1, sz = stairZ
  for (const [cx, cz] of [[sx, sz], [sx + 1, sz], [sx, sz + 1], [sx + 1, sz + 1]]) {
    world.setRaw(cx, l3, cz, B.PLANK)
    seal.push([cx, l3, cz])
  }
  STRUCT.bambooSeal = seal
  STRUCT.lights.push([t.x, l3 + fh, t.z])
}
