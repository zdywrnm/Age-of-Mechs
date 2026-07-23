// 刷怪塔（千层塔传送大厅）：v4 迁到主岛西侧近海独立小岛，石桥连接竹林西岸
import { POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill, flatten } from '../lib.js'

export function buildSpawnerIsle(world, STRUCT) {
  const cx = POS.SPAWNER_C.x, cz = POS.SPAWNER_C.z, half = 7
  const s = world.surfaceAt(cx, cz)
  STRUCT.spawnerGround = s
  // 地基填实（平台边缘不悬空）
  fill(world, cx - half - 2, 90, cz - half - 2, cx + half + 2, Math.max(90, s - 5), cz + half + 2, B.STONE)
  flatten(world, cx, cz, half + 2, s, 90)

  // —— 塔体（原 buildSpawnerHall 原样）——
  // 装饰高塔外壳（实心封顶，只是地标）
  fill(world, cx - half, s + 1, cz - half, cx + half, s + 80, cz + half, B.BRICK)
  // 底层大厅掏空（高 6）
  fill(world, cx - half + 1, s + 1, cz - half + 1, cx + half - 1, s + 6, cz + half - 1, B.AIR)
  fill(world, cx - half + 1, s, cz - half + 1, cx + half - 1, s, cz + half - 1, B.BRICK)
  // 金角
  for (const dx of [-half, half]) for (const dz of [-half, half])
    fill(world, cx + dx, s + 1, cz + dz, cx + dx, s + 81, cz + dz, B.GOLD)
  // 东门（朝石桥/主岛）
  fill(world, cx + half, s + 1, cz - 1, cx + half, s + 3, cz + 1, B.AIR)
  // 每 10 层装饰金环
  for (let f = 10; f <= 80; f += 10) {
    for (const dx of [-half, half]) {
      world.setRaw(cx + dx, s + f, cz - 2, B.GOLD); world.setRaw(cx + dx, s + f, cz + 2, B.GOLD)
    }
  }
  // 传送台：大厅中央 3×3 金砖
  fill(world, cx - 1, s, cz - 1, cx + 1, s, cz + 1, B.GOLD)
  STRUCT.teleporterPad = [cx, s + 1, cz]
  STRUCT.lights.push([cx, s + 4, cz])

  // —— 石桥（小岛东缘 → 主岛竹林西岸，跨海峡）——
  const br = POS.BRIDGE
  const deckY = s - 1
  for (let x = br.x0; x <= br.x1; x++) {
    for (let z = br.z0; z <= br.z1; z++) {
      const g = world.surfaceAt(x, z)
      if (g >= deckY) continue              // 桥身没入地形处不铺，两端与坡自然衔接
      for (let y = deckY + 1; y <= deckY + 4; y++) world.setRaw(x, y, z, B.AIR)
      world.setRaw(x, deckY, z, B.BRICK)
      world.setSurface(x, z, deckY)         // 小地图上画出桥
      if (x % 4 === 0) {                    // 每 4 格一排桥墩落到海床
        for (let y = deckY - 1; y > g; y--) world.setRaw(x, y, z, B.BRICK)
      }
    }
    if (x % 4 === 2) {                      // 金栏柱（两侧边线，不挡中线）
      if (world.surfaceAt(x, br.z0) <= deckY) world.setRaw(x, deckY + 1, br.z0, B.GOLD)
      if (world.surfaceAt(x, br.z1) <= deckY) world.setRaw(x, deckY + 1, br.z1, B.GOLD)
    }
  }
  // 东端接坡：把海岸坡切成 ≤1 格的砖台阶（桥面 → 竹林西岸自然地形）
  let walkY = deckY
  for (let x = br.x0; x <= br.x1 + 6; x++) {
    const g = world.surfaceAt(x, POS.SPAWNER_C.z)
    if (g <= walkY) continue
    walkY = Math.min(g, walkY + 1)
    if (g > walkY) {
      for (let z = br.z0; z <= br.z1; z++) {
        for (let y = walkY + 1; y <= g + 3; y++) world.setRaw(x, y, z, B.AIR)
        world.setRaw(x, walkY, z, B.BRICK)
        world.setSurface(x, z, walkY)
      }
    } else {
      walkY = g
    }
  }
  STRUCT.bridgeDeckY = deckY
}
