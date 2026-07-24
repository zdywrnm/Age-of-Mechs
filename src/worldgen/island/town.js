// ① 中央城市（机甲古城）：城墙 96×96、四门门楼、十字大道、约 40 座可进入房屋、
// 市集摊位、集市广场、路灯/行道树/喷泉/水井/花坛。城内 = 绝对安全区（判定在 zones.js）。
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill, flatten } from '../lib.js'
import { lampPost, streetTree, fountain, well, flowerPatch, bench } from '../decor.js'
import { mulberry32 } from '../../noise.js'

// 程序化生成房屋列表（四象限网格，避开十字大道/塔广场/城墙/集市广场）
function genHouses(cx, cz, half, keepOut) {
  const overlaps = (x, z, w, d) => keepOut && x <= keepOut.x1 && x + w >= keepOut.x0 && z <= keepOut.z1 && z + d >= keepOut.z0
  const houses = []
  const shopSpecs = [
    { catalog: 'food', label: '🍎 食品铺·果婶' },
    { catalog: 'build', label: '🧱 建材铺·砖叔' },
    { catalog: 'combat', label: '⚔️ 装备铺·钢爷' },
    { catalog: 'transport', label: '🛶 船具铺·帆帆' },
  ]
  let shopI = 0, special = 0
  // 四象限：(sx,sz) 方向；门朝水平大道（朝城心 z）
  for (const [sx, sz] of [[-1, -1], [1, -1], [-1, 1], [1, 1]]) {
    const door = sz < 0 ? 'S' : 'N'
    for (let row = 0; row < 3; row++) {
      for (let col = 0; col < 3; col++) {
        const w = 8, d = 6
        // 从城墙侧向大道排布：col 越大越靠城心
        const bx = cx + sx * (half - 6 - col * 13) - (sx < 0 ? 0 : w)
        const bz = cz + sz * (half - 6 - row * 12) - (sz < 0 ? 0 : d)
        let type = 'home'
        // 每象限最靠门的一座 = 商铺；再点缀工坊/旅店/仓库/守卫
        let spec = {}
        if (row === 0 && col === 1 && shopI < 4) { type = 'shop'; spec = shopSpecs[shopI++] }
        else if (row === 2 && col === 2 && special === 0) { type = 'inn'; special = 1 }
        else if (row === 2 && col === 1 && special === 1) { type = 'ware'; special = 2 }
        else if (col === 0 && row === 2) type = 'guard'
        else if (col === 0 && row === 1) type = 'work'
        const hw = type === 'inn' ? 10 : w, hd = type === 'inn' ? 8 : d
        if (overlaps(bx, bz, hw, hd)) continue   // 跳过压在集市广场上的
        houses.push({ x: bx, z: bz, w: hw, d: hd, type, door, ...spec })
      }
    }
  }
  return houses
}

export function buildTown(world, STRUCT) {
  const { x0, z0, x1, z1 } = POS.CITY
  const g = CFG.SURFACE   // 城内地面统一 112

  // —— 整城拍平（64×64，塔稍后在中心重拍一遍同高度）——
  flatten(world, CFG.ISLAND_CX, CFG.ISLAND_CZ, (x1 - x0) / 2, g)

  // —— 城墙（1 厚 6 高 + 城垛 + 四角塔）——
  for (const [wx0, wz0, wx1, wz1] of [[x0, z0, x1, z0], [x0, z1, x1, z1], [x0, z0, x0, z1], [x1, z0, x1, z1]]) {
    fill(world, wx0, g + 1, wz0, wx1, g + 6, wz1, B.BRICK)
  }
  for (let x = x0; x <= x1; x += 2) { world.setRaw(x, g + 7, z0, B.BRICK); world.setRaw(x, g + 7, z1, B.BRICK) }
  for (let z = z0; z <= z1; z += 2) { world.setRaw(x0, g + 7, z, B.BRICK); world.setRaw(x1, g + 7, z, B.BRICK) }
  for (const [cx, cz] of [[x0 + 1, z0 + 1], [x1 - 1, z0 + 1], [x0 + 1, z1 - 1], [x1 - 1, z1 - 1]]) {
    fill(world, cx - 1, g + 1, cz - 1, cx + 1, g + 10, cz + 1, B.BRICK)
    fill(world, cx - 1, g + 11, cz - 1, cx + 1, g + 11, cz + 1, B.GOLD)
  }

  // —— 四门（5 宽 4 高开洞 + 门楼金顶）——
  for (const [gx, gz] of POS.CITY_GATES) {
    if (gz === z0 || gz === z1) {
      fill(world, gx - 2, g + 1, gz, gx + 2, g + 4, gz, B.AIR)
      fill(world, gx - 3, g + 5, gz, gx + 3, g + 8, gz, B.BRICK)
      world.setRaw(gx - 3, g + 5, gz, B.GOLD); world.setRaw(gx + 3, g + 5, gz, B.GOLD)
      world.setRaw(gx, g + 9, gz, B.GOLD)
      // 门外引道（沙滩方向踏出几步砖路）
      const dz = gz === z0 ? -1 : 1
      for (let i = 1; i <= 4; i++) for (let x = gx - 2; x <= gx + 2; x++) {
        const zz = gz + dz * i
        if (world.surfaceAt(x, zz) <= g) { world.setRaw(x, g, zz, B.BRICK); world.setSurface(x, zz, g) }
        else world.setRaw(x, world.surfaceAt(x, zz), zz, B.BRICK)
      }
    } else {
      fill(world, gx, g + 1, gz - 2, gx, g + 4, gz + 2, B.AIR)
      fill(world, gx, g + 5, gz - 3, gx, g + 8, gz + 3, B.BRICK)
      world.setRaw(gx, g + 5, gz - 3, B.GOLD); world.setRaw(gx, g + 5, gz + 3, B.GOLD)
      world.setRaw(gx, g + 9, gz, B.GOLD)
      const dx = gx === x0 ? -1 : 1
      for (let i = 1; i <= 4; i++) for (let z = gz - 2; z <= gz + 2; z++) {
        const xx = gx + dx * i
        if (world.surfaceAt(xx, z) <= g) { world.setRaw(xx, g, z, B.BRICK); world.setSurface(xx, z, g) }
        else world.setRaw(xx, world.surfaceAt(xx, z), z, B.BRICK)
      }
    }
  }

  // —— 十字大道（5 宽，四门通塔，以城心 IC 为轴）+ 集市广场 ——
  const cxA = CFG.ISLAND_CX, czA = CFG.ISLAND_CZ, half = (x1 - x0) / 2
  const rand = mulberry32(CFG.SEED + 808)
  for (let z = z0 + 1; z <= z1 - 1; z++) for (let x = cxA - 2; x <= cxA + 2; x++) world.setRaw(x, g, z, B.BRICK)
  for (let x = x0 + 1; x <= x1 - 1; x++) for (let z = czA - 2; z <= czA + 2; z++) world.setRaw(x, g, z, B.BRICK)
  // 象限内街巷（3 宽砾石路，连房屋网格）
  for (const s of [-1, 1]) {
    for (let x = x0 + 3; x <= x1 - 3; x++) world.setRaw(x, g, czA + s * 20, world.get(x, g, czA + s * 20) === B.BRICK ? B.BRICK : B.GRAVEL)
    for (let z = z0 + 3; z <= z1 - 3; z++) world.setRaw(cxA + s * 20, g, z, world.get(cxA + s * 20, g, z) === B.BRICK ? B.BRICK : B.GRAVEL)
  }
  // 集市广场（塔西南）
  const plaza = { x0: cxA - 30, z0: czA - 26, x1: cxA - 10, z1: czA - 6 }
  for (let x = plaza.x0; x <= plaza.x1; x++) for (let z = plaza.z0; z <= plaza.z1; z++) world.setRaw(x, g, z, B.BRICK)

  // —— 约 30 座房屋（程序化四象限网格，避开集市广场）——
  const houses = []
  for (const h of genHouses(cxA, czA, half, plaza)) buildHouse(world, h, g, houses, STRUCT)

  // —— 市集摊位（塔西南广场边）——
  const STALLS = []
  for (let sx = cxA - 28; sx <= cxA - 12; sx += 5) for (let sz = czA - 24; sz <= czA - 8; sz += 6) STALLS.push([sx, sz])
  for (const [sx, sz] of STALLS) {
    fill(world, sx, g + 1, sz, sx, g + 2, sz, B.WOOD)
    fill(world, sx + 2, g + 1, sz, sx + 2, g + 2, sz, B.WOOD)
    fill(world, sx, g + 3, sz - 1, sx + 2, g + 3, sz + 1, B.MARKET_CLOTH)
    world.setRaw(sx + 1, g + 1, sz, B.GOLD)
  }

  // —— 城市细节：喷泉/水井/花坛/路灯/行道树/长椅 ——
  fountain(world, plaza.x0 + 10, plaza.z0 + 10, STRUCT.lights)   // 集市广场喷泉（避开大道）
  well(world, cxA - 20, czA + 20); well(world, cxA + 22, czA - 20)
  flowerPatch(world, cxA + 18, czA + 18, 5, rand)
  flowerPatch(world, cxA - 18, czA - 20, 4, rand)
  for (let d = 8; d <= half - 6; d += 6) {                 // 十字大道两侧路灯 + 行道树
    for (const s of [-1, 1]) {
      lampPost(world, cxA + s * 4, czA + (d % 12 === 0 ? d : -d), STRUCT.lights)
      if (d % 12 === 0) { streetTree(world, cxA - 4, czA + s * d); streetTree(world, cxA + 4, czA - s * d) }
    }
  }
  for (const [bx, bz] of [[cxA - 3, czA + 10], [cxA + 3, czA + 10], [cxA - 3, czA - 12], [cxA + 3, czA - 12]]) bench(world, bx, bz)

  // —— 居民漫步区（四条大道 + 广场，约 28 人）——
  const RES = [
    [cxA - 2, z0 + 3, cxA + 2, czA - 12],   // 北
    [cxA - 2, czA + 12, cxA + 2, z1 - 3],   // 南
    [cxA + 12, czA - 2, x1 - 3, czA + 2],   // 东
    [x0 + 3, czA - 2, cxA - 12, czA + 2],   // 西
    [cxA - 28, czA - 24, cxA - 12, czA - 8], // 集市广场
  ]
  STRUCT.town = {
    houses,
    vendors: houses.filter(h => h.vendor).map(h => h.vendor),
    residents: RES.flatMap((patch, i) => {
      const n = i === 4 ? 8 : 5   // 广场 8 人 + 四条大道各 5 人 = 28
      return Array.from({ length: n }, (_, k) => ({
        patch,
        pos: [patch[0] + 1 + (k * 7) % Math.max(1, patch[2] - patch[0] - 1), g + 1, patch[1] + 1 + (k * 11) % Math.max(1, patch[3] - patch[1] - 1)],
      }))
    }),
    wareChest: houses.find(h => h.type === 'ware')?.chest || null,
  }
}

function buildHouse(world, h, g, houses, STRUCT) {
  const { x, z, w, d, type } = h
  const wallMat = (type === 'home' || type === 'inn') ? B.WOOD : B.BRICK
  const wallH = type === 'inn' ? 8 : 4
  const out = { ...h }

  // 地基地板 + 墙体 + 掏空
  fill(world, x, g, z, x + w - 1, g, z + d - 1, B.BRICK)
  fill(world, x, g + 1, z, x + w - 1, g + wallH, z + d - 1, wallMat)
  fill(world, x + 1, g + 1, z + 1, x + w - 2, g + wallH - 1, z + d - 2, B.AIR)

  // 屋顶：陶瓦两层收边
  fill(world, x, g + wallH + 1, z, x + w - 1, g + wallH + 1, z + d - 1, B.ROOF_TILE)
  if (w >= 5 && d >= 5) fill(world, x + 1, g + wallH + 2, z + 1, x + w - 2, g + wallH + 2, z + d - 2, B.ROOF_TILE)

  // 门（2 高开洞）+ 窗
  const mx = x + Math.floor(w / 2), mz = z + Math.floor(d / 2)
  let doorCell
  if (h.door === 'S') { doorCell = [mx, z + d - 1]; fill(world, mx, g + 1, z + d - 1, mx, g + 2, z + d - 1, B.AIR) }
  else if (h.door === 'N') { doorCell = [mx, z]; fill(world, mx, g + 1, z, mx, g + 2, z, B.AIR) }
  else if (h.door === 'W') { doorCell = [x, mz]; fill(world, x, g + 1, mz, x, g + 2, mz, B.AIR) }
  else { doorCell = [x + w - 1, mz]; fill(world, x + w - 1, g + 1, mz, x + w - 1, g + 2, mz, B.AIR) }
  out.doorCell = doorCell
  // 窗户（门对面墙 + 侧墙各一格）
  if (h.door === 'S' || h.door === 'N') {
    const wz = h.door === 'S' ? z : z + d - 1
    world.setRaw(x + 1, g + 2, wz, B.AIR); world.setRaw(x + w - 2, g + 2, wz, B.AIR)
  } else {
    const wx = h.door === 'W' ? x + w - 1 : x
    world.setRaw(wx, g + 2, z + 1, B.AIR); world.setRaw(wx, g + 2, z + d - 2, B.AIR)
  }

  // 室内布置
  const inx = x + 1, inz = z + 1, inx1 = x + w - 2, inz1 = z + d - 2
  if (type === 'home') {
    world.setRaw(inx, g + 1, inz1, B.BED)
    world.setRaw(inx1, g + wallH - 1, inz, B.GLOWSTONE)
  } else if (type === 'shop') {
    // 金砖柜台一排（正对门），商贩站柜台后
    let counter, vpos, face
    if (h.door === 'W') { fill(world, x + w - 3, g + 1, inz, x + w - 3, g + 1, inz1, B.GOLD); vpos = [x + w - 1.5, g + 1, mz + 0.5]; face = Math.PI / 2 }
    else if (h.door === 'E') { fill(world, x + 2, g + 1, inz, x + 2, g + 1, inz1, B.GOLD); vpos = [x + 1.5, g + 1, mz + 0.5]; face = -Math.PI / 2 }
    else if (h.door === 'N') { fill(world, inx, g + 1, z + d - 3, inx1, g + 1, z + d - 3, B.GOLD); vpos = [mx + 0.5, g + 1, z + d - 1.5]; face = Math.PI }
    else { fill(world, inx, g + 1, z + 2, inx1, g + 1, z + 2, B.GOLD); vpos = [mx + 0.5, g + 1, z + 1.5]; face = 0 }
    world.setRaw(inx, g + wallH - 1, inz, B.GLOWSTONE)
    // 门口摊布招牌
    world.setRaw(doorCell[0], g + 3, doorCell[1], B.MARKET_CLOTH)
    out.vendor = { pos: vpos, face, catalog: h.catalog, label: h.label }
  } else if (type === 'work') {
    world.setRaw(inx, g + 1, inz, B.CODE)
    fill(world, inx1 - 1, g + 1, inz1, inx1, g + 1, inz1, B.STONE)
    world.setRaw(inx1, g + wallH - 1, inz, B.GLOWSTONE)
  } else if (type === 'inn') {
    // 一层柜台 + 角落台阶上二层，二层三张床
    fill(world, inx, g + 4, inz, inx1, g + 4, inz1, B.PLANK)      // 二层楼板
    fill(world, x + 4, g + 5, z + 1, inx1, g + 7, inz1, B.AIR)    // 二层空间（楼板上方）
    world.setRaw(inx, g + 1, inz, B.BRICK); world.setRaw(inx + 1, g + 2, inz, B.BRICK)
    world.setRaw(inx + 2, g + 3, inz, B.BRICK)                    // 三级台阶
    world.setRaw(inx + 3, g + 4, inz, B.PLANK)                    // 台阶顶接楼板
    fill(world, inx + 3, g + 5, inz, inx + 3, g + 7, inz, B.AIR)  // 楼梯口
    for (const bx of [x + 5, x + 7, x + 9 <= inx1 ? x + 9 : inx1]) world.setRaw(bx, g + 5, inz1, B.BED)
    fill(world, x + 2, g + 1, z + d - 3, x + 2, g + 1, inz1, B.GOLD)  // 一层柜台
    world.setRaw(inx, g + 3, inz1, B.GLOWSTONE)
    world.setRaw(inx1, g + 7, inz, B.GLOWSTONE)
  } else if (type === 'ware') {
    const chest = [mx, g + 1, mz]
    world.setRaw(chest[0], chest[1], chest[2], B.CHEST)
    out.chest = chest
    fill(world, inx, g + 1, inz, inx, g + 2, inz, B.WOOD)
    fill(world, inx1, g + 1, inz, inx1, g + 2, inz, B.STONE)
    world.setRaw(inx, g + wallH - 1, inz1, B.GLOWSTONE)
  } else if (type === 'guard') {
    world.setRaw(inx, g + 1, inz, B.GOLD)
    world.setRaw(inx1, g + wallH - 1, inz1, B.GLOWSTONE)
  }
  houses.push(out)
}
