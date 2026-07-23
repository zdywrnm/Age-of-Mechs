// ⑥ 森林（城南）：高密森林、约 35 格高巨型古树、两层森林神殿
// 神殿一层：中央吊灯 + 花瓶 + 精致地毯 + 程序化「小人图」壁画
// 神殿二层：大型宝箱 → 唯一「红眼睛」远程武器
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill, flatten } from '../lib.js'
import { mulberry32 } from '../../noise.js'

function tree(world, x, z, trunkH, canopyR) {
  const g = world.surfaceAt(x, z)
  if (world.get(x, g, z) !== B.GRASS) return
  for (let y = 1; y <= trunkH; y++) world.setRaw(x, g + y, z, B.WOOD)
  const top = g + trunkH
  for (let dy = -2; dy <= 2; dy++)
    for (let dz = -canopyR; dz <= canopyR; dz++)
      for (let dx = -canopyR; dx <= canopyR; dx++) {
        if (dx * dx + dy * dy * 1.4 + dz * dz > canopyR * canopyR + 1.5) continue
        const px = x + dx, py = top + dy + 1, pz = z + dz
        if (world.get(px, py, pz) === B.AIR) world.setRaw(px, py, pz, B.LEAVES)
      }
}

export function buildForest(world, STRUCT) {
  const rand = mulberry32(CFG.SEED + 606)
  const r = POS.FOREST_RECT
  const temple = POS.FOREST_TEMPLE
  const giant = POS.GIANT_TREE

  // —— 高密森林（避开神殿与巨树）——
  for (let z = r.z0; z <= r.z1; z++) {
    for (let x = r.x0; x <= r.x1; x++) {
      const s = world.surfaceAt(x, z)
      if (s <= CFG.SEA_LEVEL) continue
      if (Math.hypot(x - temple.x, z - temple.z) < 12) continue
      if (Math.hypot(x - giant.x, z - giant.z) < 8) continue
      if (rand() < 0.06) tree(world, x, z, 4 + Math.floor(rand() * 4), 2 + Math.floor(rand() * 2))
    }
  }

  // —— 巨型古树（约 35 格高，粗 3×3 干 + 巨大树冠）——
  buildGiantTree(world, giant)

  // —— 两层森林神殿 ——
  buildForestTemple(world, STRUCT, temple)
}

function buildGiantTree(world, g) {
  const s = world.surfaceAt(g.x, g.z)
  flatten(world, g.x, g.z, 3, s)
  const H = 35
  // 3×3 粗树干
  for (let y = 1; y <= H; y++)
    for (let dx = -1; dx <= 1; dx++) for (let dz = -1; dz <= 1; dz++)
      world.setRaw(g.x + dx, s + y, g.z + dz, B.WOOD)
  // 分层树冠（三坨，越高越小）
  for (const [ly, lr] of [[H - 6, 9], [H - 1, 11], [H + 4, 7]]) {
    for (let dy = -3; dy <= 3; dy++)
      for (let dz = -lr; dz <= lr; dz++)
        for (let dx = -lr; dx <= lr; dx++) {
          if (dx * dx + dy * dy * 1.6 + dz * dz > lr * lr + 2) continue
          const px = g.x + dx, py = s + ly + dy, pz = g.z + dz
          if (world.get(px, py, pz) === B.AIR) world.setRaw(px, py, pz, B.LEAVES)
        }
  }
  // 几条粗枝
  for (const [ax, az] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
    for (let i = 1; i <= 5; i++) world.setRaw(g.x + ax * i, s + H - 8 + i, g.z + az * i, B.WOOD)
  }
}

function buildForestTemple(world, STRUCT, t) {
  const s = world.surfaceAt(t.x, t.z)
  const half = 7, fh = 6
  flatten(world, t.x, t.z, half + 1, s, 40, B.GRASS)

  const floor1 = s
  const floor2 = s + fh + 1
  const roof = s + 2 * (fh + 1)

  // 外壳（石砖）+ 两层掏空 + 楼板
  fill(world, t.x - half, s + 1, t.z - half, t.x + half, roof, t.z + half, B.BRICK)
  fill(world, t.x - half + 1, floor1 + 1, t.z - half + 1, t.x + half - 1, floor1 + fh, t.z + half - 1, B.AIR)
  fill(world, t.x - half + 1, floor2, t.z - half + 1, t.x + half - 1, floor2, t.z + half - 1, B.PLANK)   // 二层楼板
  fill(world, t.x - half + 1, floor2 + 1, t.z - half + 1, t.x + half - 1, floor2 + fh, t.z + half - 1, B.AIR)
  // 陶瓦屋顶
  fill(world, t.x - half, roof + 1, t.z - half, t.x + half, roof + 1, t.z + half, B.ROOF_TILE)

  // 南门
  fill(world, t.x - 1, floor1 + 1, t.z + half, t.x + 1, floor1 + 3, t.z + half, B.AIR)

  // 楼梯（西北角）+ 二层楼板开口
  const stx = t.x - half + 2, stz = t.z - half + 2
  for (let i = 0; i < fh; i++) world.setRaw(stx + i, floor1 + 1 + i, stz, B.BRICK)
  fill(world, stx + fh - 1, floor2, stz, stx + fh, floor2, stz + 1, B.AIR)

  // —— 一层：中央吊灯 + 花瓶 + 精致地毯 + 小人图壁画 ——
  // 红地毯铺满中央
  fill(world, t.x - 3, floor1 + 1, t.z - 3, t.x + 3, floor1 + 1, t.z + 3, B.CARPET_RED)
  // 中央吊灯：从天花板垂下的荧光石串
  world.setRaw(t.x, floor1 + fh, t.z, B.GOLD)
  world.setRaw(t.x, floor1 + fh - 1, t.z, B.GLOWSTONE)
  // 四角花瓶（陶瓦叠柱代表）
  for (const [dx, dz] of [[-4, -4], [4, -4], [-4, 4], [4, 4]]) {
    world.setRaw(t.x + dx, floor1 + 1, t.z + dz, B.ROOF_TILE)
    world.setRaw(t.x + dx, floor1 + 2, t.z + dz, B.BAMBOO_LEAVES)   // 插花
  }
  // 墙上小人图壁画（东西两墙各三幅）
  for (const off of [-3, 0, 3]) {
    world.setRaw(t.x - half + 1, floor1 + 3, t.z + off, B.MURAL)
    world.setRaw(t.x + half - 1, floor1 + 3, t.z + off, B.MURAL)
  }
  STRUCT.lights.push([t.x, floor1 + fh - 1, t.z])

  // —— 二层：大型宝箱（红眼睛）+ 红眼装饰 ——
  const chest = [t.x, floor2 + 1, t.z]
  world.setRaw(chest[0], chest[1], chest[2], B.CHEST)
  STRUCT.forestChest = chest
  // 大量红眼装饰（图腾侧脸块环绕）
  for (const [dx, dz] of [[-3, -3], [3, -3], [-3, 3], [3, 3], [0, -4], [0, 4], [-4, 0], [4, 0]]) {
    world.setRaw(t.x + dx, floor2 + 1, t.z + dz, B.TOTEM_BLOCK)
  }
  fill(world, t.x - 3, floor2 + 1, t.z - 3, t.x + 3, floor2 + 1, t.z + 3, B.CARPET_RED)
  world.setRaw(chest[0], chest[1], chest[2], B.CHEST)   // 地毯覆盖后重放箱子
  STRUCT.lights.push([t.x, floor2 + fh - 1, t.z])
}
