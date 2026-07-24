// ① 中央城市（机甲古城）：城墙 64×64、四门门楼、十字大道、22 座可进入房屋、
// 市集摊位、集市广场（含地下之城井口）。城内 = 绝对安全区（判定在 zones.js）。
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill, flatten } from '../lib.js'

// v5：城内坐标原按旧城心 128 手工核对，整体位移到新城心 IC（DX/DZ = IC-128）
// （C8 会把这里改成程序化布局并扩大到 ~40 座；此段只搬家不改形状）
const DX = CFG.ISLAND_CX - 128, DZ = CFG.ISLAND_CZ - 128
// 22 座房屋（12住宅/4商铺/2工坊/1旅店/1仓库/2守卫屋）
const HOUSES = ([
  // 西北象限
  { x: 99,  z: 99,  w: 8,  d: 6, type: 'home',  door: 'S' },
  { x: 109, z: 99,  w: 8,  d: 6, type: 'home',  door: 'S' },
  { x: 119, z: 99,  w: 6,  d: 6, type: 'guard', door: 'E' },   // 北门守卫屋
  // 东北象限
  { x: 133, z: 99,  w: 8,  d: 6, type: 'home',  door: 'S' },
  { x: 143, z: 99,  w: 8,  d: 6, type: 'home',  door: 'S' },
  { x: 152, z: 99,  w: 6,  d: 6, type: 'home',  door: 'S' },
  { x: 133, z: 108, w: 8,  d: 7, type: 'shop',  door: 'W', catalog: 'food',      label: '🍎 食品铺·果婶' },
  { x: 143, z: 108, w: 8,  d: 7, type: 'shop',  door: 'S', catalog: 'build',     label: '🧱 建材铺·砖叔' },
  { x: 152, z: 108, w: 6,  d: 7, type: 'work',  door: 'S' },
  // 西南象限
  { x: 99,  z: 133, w: 8,  d: 6, type: 'home',  door: 'N' },
  { x: 109, z: 133, w: 8,  d: 6, type: 'shop',  door: 'N', catalog: 'combat',    label: '⚔️ 装备铺·钢爷' },
  { x: 99,  z: 142, w: 8,  d: 7, type: 'home',  door: 'E' },
  { x: 109, z: 142, w: 8,  d: 7, type: 'home',  door: 'E' },
  { x: 118, z: 142, w: 6,  d: 7, type: 'work',  door: 'E' },
  { x: 119, z: 152, w: 6,  d: 6, type: 'guard', door: 'E' },   // 南门守卫屋
  // 东南象限
  { x: 139, z: 133, w: 8,  d: 6, type: 'shop',  door: 'W', catalog: 'transport', label: '🛶 船具铺·帆帆' },
  { x: 149, z: 133, w: 8,  d: 6, type: 'home',  door: 'W' },
  { x: 133, z: 142, w: 10, d: 8, type: 'inn',   door: 'W' },   // 旅店（两层）
  { x: 146, z: 142, w: 8,  d: 7, type: 'ware',  door: 'W' },   // 仓库（福利箱）
  { x: 133, z: 152, w: 8,  d: 6, type: 'home',  door: 'N' },
  { x: 143, z: 152, w: 8,  d: 6, type: 'home',  door: 'N' },
  { x: 152, z: 152, w: 6,  d: 6, type: 'home',  door: 'N' },
]).map(h => ({ ...h, x: h.x + DX, z: h.z + DZ }))

// 市集摊位（广场边 + 南大道两侧）
const STALLS = [[105, 110], [113, 110], [120, 110], [105, 122], [120, 122], [113, 122],
  [124, 140], [124, 148], [132, 140], [132, 148]].map(([x, z]) => [x + DX, z + DZ])

// 居民漫步范围（只在大道/广场上，避开塔区和建筑——小人不穿墙）
const RESIDENT_PATCHES = [
  [126, 99, 130, 118],    // 北大道
  [126, 138, 130, 157],   // 南大道
  [139, 126, 157, 130],   // 东大道
  [99, 126, 117, 130],    // 西大道
  [105, 109, 118, 123],   // 集市广场
].map(([a, b, c, d]) => [a + DX, b + DZ, c + DX, d + DZ])

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
  const cxA = CFG.ISLAND_CX, czA = CFG.ISLAND_CZ
  for (let z = z0 + 1; z <= z1 - 1; z++) for (let x = cxA - 2; x <= cxA + 2; x++) world.setRaw(x, g, z, B.BRICK)
  for (let x = x0 + 1; x <= x1 - 1; x++) for (let z = czA - 2; z <= czA + 2; z++) world.setRaw(x, g, z, B.BRICK)
  for (let x = cxA - 24; x <= cxA - 6; x++) for (let z = czA - 20; z <= czA - 4; z++) world.setRaw(x, g, z, B.BRICK)

  // —— 22 座房屋 ——
  const houses = []
  for (const h of HOUSES) buildHouse(world, h, g, houses, STRUCT)

  // —— 市集摊位（双柱 + 条纹摊布顶 + 金柜台）——
  for (const [sx, sz] of STALLS) {
    fill(world, sx, g + 1, sz, sx, g + 2, sz, B.WOOD)
    fill(world, sx + 2, g + 1, sz, sx + 2, g + 2, sz, B.WOOD)
    fill(world, sx, g + 3, sz - 1, sx + 2, g + 3, sz + 1, B.MARKET_CLOTH)
    world.setRaw(sx + 1, g + 1, sz, B.GOLD)
  }

  // —— 广场与大道灯 ——
  STRUCT.lights.push([cxA - 15, g + 5, czA - 12], [cxA, g + 4, czA + 18], [cxA, g + 4, czA - 18])

  STRUCT.town = {
    houses,
    vendors: houses.filter(h => h.vendor).map(h => h.vendor),
    residents: RESIDENT_PATCHES.flatMap((patch, i) => {
      const n = i === 4 ? 4 : 3   // 广场 4 人，四条大道各 3 人 = 16
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
