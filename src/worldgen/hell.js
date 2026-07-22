// 暗黑地狱（设定：岩浆/岩浆石/岩浆树/堡垒/恶魔恶龙；森林齿轮=岩浆湖圈中央树顶；
// 烈火齿轮=火海正中央，走到中央火消失+回满血）
import { POS } from '../config.js'
import { B } from '../blocks.js'
import { mulberry32, makeFbm2D } from '../noise.js'

export const HELL = {
  spawn: null, returnPortalCells: [],
  forestGear: null, fireGear: null,
  fireSeaCells: [], fireCenter: null,
  demonSpawns: [], dragonPos: null,
  lights: [],
}

function fill(world, x0, y0, z0, x1, y1, z1, id) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++)
      for (let x = x0; x <= x1; x++) world.setRaw(x, y, z, id)
}

export function generateHell(world) {
  HELL.returnPortalCells = []; HELL.fireSeaCells = []; HELL.demonSpawns = []; HELL.lights = []
  const fbm = makeFbm2D(99001, 3)
  const rand = mulberry32(99002)
  const SX = world.sx, SZ = world.sz
  const LAVA_LEVEL = 26

  // —— 基础地形：岩浆石地面 + 低洼处岩浆 ——
  for (let z = 0; z < SZ; z++) {
    for (let x = 0; x < SX; x++) {
      let h = Math.round(30 + (fbm(x * 0.04, z * 0.04) - 0.5) * 12)
      // 岩浆湖圈：环形岩浆（r 12~24），中央小岛留给森林齿轮树
      const dLake = Math.hypot(x - POS.HELL_LAKE.x, z - POS.HELL_LAKE.z)
      if (dLake < POS.HELL_LAKE.r && dLake > 11) h = 22
      for (let y = 0; y <= Math.max(h, LAVA_LEVEL); y++) {
        let id
        if (y <= 1) id = B.BEDROCK
        else if (y <= h) id = B.MAGMA_STONE
        else id = B.LAVA
        world.setRaw(x, y, z, id)
      }
      world.setSurface(x, z, Math.max(h, LAVA_LEVEL))
    }
  }

  // —— 岩浆树（散布） ——
  const magmaTree = (tx, tz, trunkH) => {
    const g = world.surfaceAt(tx, tz)
    if (world.get(tx, g, tz) !== B.MAGMA_STONE) return
    for (let y = 1; y <= trunkH; y++) world.setRaw(tx, g + y, tz, B.MAGMA_WOOD)
    for (let dy = -1; dy <= 2; dy++)
      for (let dz = -2; dz <= 2; dz++)
        for (let dx = -2; dx <= 2; dx++) {
          if (dx * dx + dy * dy * 1.5 + dz * dz > 5.5) continue
          const py = g + trunkH + dy + 1
          if (world.get(tx + dx, py, tz + dz) === B.AIR) world.setRaw(tx + dx, py, tz + dz, B.MAGMA_LEAVES)
        }
  }
  for (let n = 0; n < 14; n++) {
    magmaTree(20 + Math.floor(rand() * (SX - 40)), 20 + Math.floor(rand() * (SZ - 40)), 4 + Math.floor(rand() * 3))
  }

  // —— 岩浆湖圈中央大树：森林齿轮在树顶（设定原文） ——
  const lx = POS.HELL_LAKE.x, lz = POS.HELL_LAKE.z
  fill(world, lx - 5, 22, lz - 5, lx + 5, 30, lz + 5, B.MAGMA_STONE) // 中央小岛垫高
  world.setSurface(lx, lz, 30)
  const TREE_H = 12
  for (let y = 1; y <= TREE_H; y++) world.setRaw(lx, 30 + y, lz, B.MAGMA_WOOD)
  fill(world, lx - 1, 30 + 4, lz - 1, lx + 1, 30 + TREE_H - 1, lz + 1, B.MAGMA_WOOD) // 粗树干
  for (let dy = 0; dy <= 3; dy++)
    for (let dz = -3; dz <= 3; dz++)
      for (let dx = -3; dx <= 3; dx++) {
        if (dx * dx + dy * dy + dz * dz > 11) continue
        const py = 30 + TREE_H + dy
        if (world.get(lx + dx, py, lz + dz) === B.AIR) world.setRaw(lx + dx, py, lz + dz, B.MAGMA_LEAVES)
      }
  // 树顶平台（站得住）+ 齿轮位置
  fill(world, lx - 1, 30 + TREE_H + 3, lz - 1, lx + 1, 30 + TREE_H + 3, lz + 1, B.MAGMA_WOOD)
  HELL.forestGear = [lx, 30 + TREE_H + 4, lz]
  // 湖圈到中央的岩浆石踏脚桥（挑战性通路）
  for (let i = 12; i <= 24; i += 3) {
    world.setRaw(lx + i, 27, lz, B.MAGMA_STONE)
    world.setRaw(lx + i, 27, lz + 1, B.MAGMA_STONE)
  }

  // —— 火海：烈火齿轮在正中央（走到中央火消失+回满血） ——
  const fx = POS.HELL_FIRE_SEA.x, fz = POS.HELL_FIRE_SEA.z, fr = POS.HELL_FIRE_SEA.r
  for (let dz = -fr; dz <= fr; dz++)
    for (let dx = -fr; dx <= fr; dx++) {
      if (dx * dx + dz * dz > fr * fr) continue
      const px = fx + dx, pz = fz + dz
      // 整平火海地面
      for (let y = 25; y <= 30; y++) world.setRaw(px, y, pz, B.MAGMA_STONE)
      for (let y = 31; y <= 40; y++) world.setRaw(px, y, pz, B.AIR)
      world.setSurface(px, pz, 30)
      // 正中央 2 格无火，其余布火
      if (dx * dx + dz * dz > 4) {
        world.setRaw(px, 31, pz, B.FIRE)
        HELL.fireSeaCells.push([px, 31, pz])
      }
    }
  HELL.fireCenter = [fx, 31, fz]
  HELL.fireGear = [fx, 31.6, fz]

  // —— 堡垒 ×2 ——
  const fort = (cx, cz) => {
    const s = world.surfaceAt(cx, cz)
    fill(world, cx - 6, s + 1, cz - 6, cx + 6, s + 8, cz + 6, B.MAGMA_STONE)
    fill(world, cx - 5, s + 1, cz - 5, cx + 5, s + 7, cz + 5, B.AIR)
    fill(world, cx - 6, s + 8, cz - 6, cx + 6, s + 8, cz + 6, B.MAGMA_STONE) // 顶
    // 四角塔
    for (const dx of [-6, 6]) for (const dz of [-6, 6])
      fill(world, cx + dx, s + 1, cz + dz, cx + dx, s + 11, cz + dz, B.MAGMA_STONE)
    // 门
    fill(world, cx, s + 1, cz - 6, cx, s + 3, cz - 6, B.AIR)
    HELL.demonSpawns.push([cx - 2.5, s + 1, cz], [cx + 2.5, s + 1, cz], [cx, s + 1, cz + 2.5])
    return s
  }
  const s1 = fort(POS.HELL_FORT1.x, POS.HELL_FORT1.z)
  fort(POS.HELL_FORT2.x, POS.HELL_FORT2.z)
  HELL.dragonPos = [POS.HELL_FORT1.x, s1 + 16, POS.HELL_FORT1.z]  // 恶龙栖于堡垒上空

  // —— 入口平台 + 返回传送门 ——
  const ex = POS.HELL_SPAWN.x, ez = POS.HELL_SPAWN.z
  const es = 32
  fill(world, ex - 4, es - 2, ez - 4, ex + 4, es, ez + 4, B.MAGMA_STONE)
  fill(world, ex - 4, es + 1, ez - 4, ex + 4, es + 8, ez + 4, B.AIR)
  world.setSurface(ex, ez, es)
  // 返回门（常开）
  fill(world, ex - 2, es + 1, ez - 4, ex + 2, es + 5, ez - 4, B.PORTAL_FRAME)
  for (let y = es + 2; y <= es + 4; y++) for (let x = ex - 1; x <= ex + 1; x++) {
    world.setRaw(x, y, ez - 4, B.PORTAL)
    HELL.returnPortalCells.push([x, y, ez - 4])
  }
  HELL.spawn = [ex + 0.5, es + 1, ez + 1.5]
  HELL.lights.push([ex, es + 4, ez])
}
