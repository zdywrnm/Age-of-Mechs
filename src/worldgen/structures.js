// 主世界建筑 v2
// 第一章：作者之塔、矿石/大地密室、巨石阵（原样保留，坐标不变）
// 第二章：暗黑地狱传送门、作者小岛木屋(神殿②+商店)、丛林神殿(终极之地门)、
//         海底宫殿、禁地、地下之城(驱动核心+神殿③+光明齿轮)、刷怪塔改传送大厅
import { CFG, POS } from '../config.js'
import { B } from '../blocks.js'
import { fill, flatten } from './lib.js'
import { buildIsland } from './island/index.js'

export const STRUCT = {
  towerGround: 0, spawnerGround: 0, hengeGround: 0,
  throneTopY: 0,
  oreRoom: null, earthRoom: null,
  lights: [],
  spawnPoint: null, npcPos: null,
  // 第二章
  hellPortal: null,      // { base:[x,y,z], topCells:[[x,y,z]…], innerCells:[[x,y,z]…] }
  hutNpcPos: null,       // 作者②（商店）
  templePortalCells: [], // 丛林神殿传送门方块
  palaceChest: null,     // 潮涌齿轮箱
  lightChest: null,      // 光明齿轮箱
  forbiddenChest: null,  // 神秘齿轮箱
  undercity: null,       // { floorY, corePos, shrinePos, folk:[[x,y,z]…] }
  teleporterPad: null,   // 刷怪塔大厅传送台中心
}

export function buildStructures(world) {
  STRUCT.lights = []
  buildAuthorTower(world)
  buildOreRoom(world)
  buildIsland(world, STRUCT)   // v4 六区（巨石阵高地/刷怪塔小岛+石桥/…逐步迁入）
  buildHellPortal(world)
  buildAuthorHut(world)
  buildJungleTemple(world)
  buildSeaPalace(world)
  buildForbidden(world)
  buildUndercity(world)
  const sy = world.surfaceAt(Math.floor(POS.SPAWN.x), Math.floor(POS.SPAWN.z))
  STRUCT.spawnPoint = [POS.SPAWN.x, sy + 1, POS.SPAWN.z]
  return STRUCT
}

// ============ 第一章建筑（原样保留） ============

function buildAuthorTower(world) {
  const cx = POS.TOWER_C.x, cz = POS.TOWER_C.z, half = 7
  const s = world.surfaceAt(cx, cz)
  STRUCT.towerGround = s
  flatten(world, cx, cz, half + 2, s)
  fill(world, cx - half, s + 1, cz - half, cx + half, s + 24, cz + half, B.BRICK)
  fill(world, cx - half + 1, s + 1, cz - half + 1, cx + half - 1, s + 23, cz + half - 1, B.AIR)
  for (const dx of [-half, half]) for (const dz of [-half, half])
    fill(world, cx + dx, s + 1, cz + dz, cx + dx, s + 25, cz + dz, B.GOLD)
  fill(world, cx - half + 1, s, cz - half + 1, cx + half - 1, s, cz + half - 1, B.BRICK)
  fill(world, cx - 1, s + 1, cz + half, cx + 1, s + 3, cz + half, B.AIR)
  for (const wy of [s + 8, s + 14, s + 20]) {
    world.setRaw(cx, wy, cz - half, B.AIR); world.setRaw(cx, wy, cz + half, B.AIR)
    world.setRaw(cx - half, wy, cz, B.AIR); world.setRaw(cx + half, wy, cz, B.AIR)
  }
  fill(world, cx - 1, s + 1, cz - 1, cx + 1, s + 1, cz + 1, B.THRONE)
  world.setRaw(cx, s + 2, cz, B.THRONE)
  world.setRaw(cx, s + 2, cz - 1, B.THRONE)
  world.setRaw(cx, s + 3, cz - 1, B.THRONE)
  STRUCT.throneTopY = s + 1
  world.setRaw(POS.GOLD_TILE.x, s, POS.GOLD_TILE.z, B.GOLD)
  STRUCT.lights.push([cx, s + 6, cz + 3])
  STRUCT.npcPos = [POS.NPC.x, s + 1, POS.NPC.z]
}

function buildOreRoom(world) {
  const cx = POS.TOWER_C.x, cz = POS.TOWER_C.z
  const s = STRUCT.towerGround
  const floorY = s - POS.ORE_ROOM_DEPTH - 1
  fill(world, cx - 3, floorY, cz - 3, cx + 3, floorY + 5, cz + 3, B.STONE)
  fill(world, cx - 3 + 1, floorY + 1, cz - 3 + 1, cx + 3 - 1, floorY + 4, cz + 3 - 1, B.AIR)
  for (const [dx, dz] of [[-3, 0], [3, 0], [0, -3], [0, 3], [-3, -3], [3, 3]]) {
    world.setRaw(cx + dx, floorY + 2, cz + dz, B.CODE)
  }
  const chest = [cx, floorY + 1, cz]
  world.setRaw(chest[0], chest[1], chest[2], B.CHEST)
  STRUCT.oreRoom = { chest, ceilY: floorY + 5 }
  STRUCT.lights.push([cx, floorY + 3, cz])
}

// （v4：buildStonehenge/buildEarthRoom → island/henge.js，buildSpawnerHall → island/spawnerIsle.js）

// ============ 第二章建筑 ============

// 暗黑地狱传送门（城镇南滩）：门顶放金子开启，金子全额消耗，一人次进返
function buildHellPortal(world) {
  const cx = POS.PORTAL_HELL.x, cz = POS.PORTAL_HELL.z
  const s = Math.max(world.surfaceAt(cx, cz), CFG.SEA_LEVEL + 1)
  flatten(world, cx, cz, 5, s, 20, B.SAND)
  // 门框：5 宽 × 6 高，沿 X 轴立起（开口 3×4）
  fill(world, cx - 2, s + 1, cz, cx + 2, s + 6, cz, B.PORTAL_FRAME)
  fill(world, cx - 1, s + 2, cz, cx + 1, s + 5, cz, B.AIR)
  const topCells = [[cx - 2, s + 7, cz], [cx - 1, s + 7, cz], [cx, s + 7, cz], [cx + 1, s + 7, cz], [cx + 2, s + 7, cz]]
  const innerCells = []
  for (let y = s + 2; y <= s + 5; y++) for (let x = cx - 1; x <= cx + 1; x++) innerCells.push([x, y, cz])
  STRUCT.hellPortal = { base: [cx, s, cz], topCells, innerCells }
  STRUCT.lights.push([cx, s + 4, cz + 2])
}

// 作者小岛木屋：神殿② + 商店
function buildAuthorHut(world) {
  const cx = POS.HUT.x, cz = POS.HUT.z
  const s = world.surfaceAt(cx, cz)
  flatten(world, cx, cz, 7, s)
  // 9×7 木屋，木墙石砖基座，斜木顶
  fill(world, cx - 4, s, cz - 3, cx + 4, s, cz + 3, B.BRICK)
  fill(world, cx - 4, s + 1, cz - 3, cx + 4, s + 4, cz + 3, B.WOOD)
  fill(world, cx - 3, s + 1, cz - 2, cx + 3, s + 4, cz + 2, B.AIR)
  // 斜顶
  for (let i = 0; i < 3; i++) {
    fill(world, cx - 4 + i, s + 5 + i, cz - 3, cx + 4 - i, s + 5 + i, cz + 3, i === 2 ? B.PLANK : B.WOOD)
    if (i < 2) fill(world, cx - 3 + i, s + 5 + i, cz - 2, cx + 3 - i, s + 5 + i, cz + 2, B.AIR)
  }
  // 北门
  fill(world, cx, s + 1, cz - 3, cx, s + 3, cz - 3, B.AIR)
  // 窗
  world.setRaw(cx - 4, s + 2, cz, B.AIR); world.setRaw(cx + 4, s + 2, cz, B.AIR)
  // 柜台（金砖）
  fill(world, cx - 2, s + 1, cz + 1, cx + 2, s + 1, cz + 1, B.GOLD)
  STRUCT.hutNpcPos = [cx + 0.5, s + 1, cz + 2.5]  // 作者②站柜台后
  STRUCT.lights.push([cx, s + 3, cz])
}

// 丛林神殿：阶梯金字塔，中央地面传送门（走进自动启动 → 终极之地）
function buildJungleTemple(world) {
  const cx = POS.JUNGLE_TEMPLE.x, cz = POS.JUNGLE_TEMPLE.z
  const s = world.surfaceAt(cx, cz)
  flatten(world, cx, cz, 13, s)
  // 五层阶梯金字塔（半宽 10→2）
  for (let t = 0; t < 5; t++) {
    const half = 10 - t * 2
    fill(world, cx - half, s + 1 + t * 2, cz - half, cx + half, s + 2 + t * 2, cz + half, B.JUNGLE_BRICK)
  }
  // 内部大厅掏空（7×7，高 5）
  fill(world, cx - 3, s + 1, cz - 3, cx + 3, s + 5, cz + 3, B.AIR)
  // 西侧走廊入口
  fill(world, cx - 10, s + 1, cz - 1, cx - 4, s + 3, cz + 1, B.AIR)
  // 中央地面 3×3 传送门（正中央，走进去自动启动——设定原文）
  STRUCT.templePortalCells = []
  for (let dz = -1; dz <= 1; dz++) for (let dx = -1; dx <= 1; dx++) {
    world.setRaw(cx + dx, s, cz + dz, B.PORTAL)
    STRUCT.templePortalCells.push([cx + dx, s, cz + dz])
  }
  // 门框描金
  for (const [dx, dz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) world.setRaw(cx + dx, s + 1, cz + dz, B.GOLD)
  STRUCT.lights.push([cx, s + 3, cz])
}

// 海底宫殿 v2（深海盆地底部）：潮涌齿轮 + 海底守卫者
// 精致化：基座平台 + 拱形正门 + 四角发光柱 + 二层回廊 + 金字塔穹顶 + 周边海底地形
function buildSeaPalace(world) {
  const cx = POS.SEA_PALACE.x, cz = POS.SEA_PALACE.z
  const baseY = 24
  const half = 13, height = 12
  // 确定性伪随机（周边地形用）
  const rng = (a, b) => { const s = Math.sin(a * 12.9898 + b * 78.233) * 43758.5453; return s - Math.floor(s) }

  // —— 基座平台（比主殿大一圈，海晶石，边缘一圈海晶灯）——
  const pHalf = half + 3
  fill(world, cx - pHalf, baseY - 2, cz - pHalf, cx + pHalf, baseY, cz + pHalf, B.PRISMARINE)
  for (let d = -pHalf; d <= pHalf; d += 2) {
    world.setRaw(cx + d, baseY + 1, cz - pHalf, B.SEA_LANTERN)
    world.setRaw(cx + d, baseY + 1, cz + pHalf, B.SEA_LANTERN)
    world.setRaw(cx - pHalf, baseY + 1, cz + d, B.SEA_LANTERN)
    world.setRaw(cx + pHalf, baseY + 1, cz + d, B.SEA_LANTERN)
  }

  // —— 主殿外墙（海宫砖）+ 内部灌水 ——
  fill(world, cx - half, baseY + 1, cz - half, cx + half, baseY + height, cz + half, B.PALACE_BRICK)
  fill(world, cx - half + 1, baseY + 2, cz - half + 1, cx + half - 1, baseY + height - 1, cz + half - 1, B.WATER)
  fill(world, cx - half + 1, baseY + 1, cz - half + 1, cx + half - 1, baseY + 1, cz + half - 1, B.PRISMARINE) // 殿内地面

  // —— 四角发光大柱（从基座冲出殿顶，柱顶海晶灯）——
  for (const dx of [-half, half]) for (const dz of [-half, half]) {
    fill(world, cx + dx, baseY + 1, cz + dz, cx + dx, baseY + height + 2, cz + dz, B.PALACE_PILLAR)
    world.setRaw(cx + dx, baseY + height + 3, cz + dz, B.SEA_LANTERN)
  }

  // —— 正门（朝北 -z，玩家从深海游来的方向）：拱形门洞 + 门框柱 + 门楣灯 + 台阶 ——
  const dz0 = cz - half
  fill(world, cx - 2, baseY + 2, dz0, cx + 2, baseY + 6, dz0, B.WATER)   // 5 宽 5 高门洞
  world.setRaw(cx - 2, baseY + 7, dz0, B.PALACE_PILLAR)                   // 拱顶收角
  world.setRaw(cx + 2, baseY + 7, dz0, B.PALACE_PILLAR)
  fill(world, cx - 1, baseY + 7, dz0, cx + 1, baseY + 7, dz0, B.SEA_LANTERN) // 门楣灯带
  for (const s of [-3, 3]) fill(world, cx + s, baseY + 2, dz0, cx + s, baseY + 7, dz0, B.PALACE_PILLAR) // 门框柱
  // 门前台阶引导（向外三级）
  for (let i = 1; i <= 3; i++) fill(world, cx - 2, baseY, dz0 - i, cx + 2, baseY, dz0 - i, B.PRISMARINE)
  world.setRaw(cx - 3, baseY + 1, dz0 - 1, B.SEA_LANTERN)
  world.setRaw(cx + 3, baseY + 1, dz0 - 1, B.SEA_LANTERN)

  // —— 其余三面：海晶灯格栅窗（透光但看得出是墙）——
  for (const [ox, oz, ax] of [[0, half, 'x'], [-half, 0, 'z'], [half, 0, 'z']]) {
    for (const off of [-4, 0, 4]) {
      if (ax === 'x') { world.setRaw(cx + off, baseY + 4, cz + oz, B.SEA_LANTERN); world.setRaw(cx + off, baseY + 5, cz + oz, B.WATER) }
      else { world.setRaw(cx + ox, baseY + 4, cz + off, B.SEA_LANTERN); world.setRaw(cx + ox, baseY + 5, cz + off, B.WATER) }
    }
  }

  // —— 二层内回廊立柱（避开门→箱子中轴，让进门直视中央齿轮）——
  for (const [dx, dz] of [[-8, -8], [8, -8], [-8, 8], [8, 8], [-9, 0], [9, 0], [-5, -10], [5, -10]]) {
    fill(world, cx + dx, baseY + 2, cz + dz, cx + dx, baseY + height - 1, cz + dz, B.PALACE_PILLAR)
  }

  // —— 金字塔穹顶（逐层内缩 + 尖顶海晶灯）——
  for (let i = 0; i <= half; i++) {
    const r = half - i
    if (r < 1) break
    // 只铺一圈（空心穹顶壳）
    for (let d = -r; d <= r; d++) {
      world.setRaw(cx + d, baseY + height + i, cz - r, B.PALACE_BRICK)
      world.setRaw(cx + d, baseY + height + i, cz + r, B.PALACE_BRICK)
      world.setRaw(cx - r, baseY + height + i, cz + d, B.PALACE_BRICK)
      world.setRaw(cx + r, baseY + height + i, cz + d, B.PALACE_BRICK)
    }
    if (i > half - 4) world.setRaw(cx, baseY + height + i, cz, B.SEA_LANTERN)
  }

  // —— 中央 3 层高台 + 潮涌齿轮箱（灯环围绕）——
  fill(world, cx - 3, baseY + 2, cz - 3, cx + 3, baseY + 2, cz + 3, B.PRISMARINE)
  fill(world, cx - 2, baseY + 3, cz - 2, cx + 2, baseY + 3, cz + 2, B.PRISMARINE)
  for (const [dx, dz] of [[-2, -2], [2, -2], [-2, 2], [2, 2]]) world.setRaw(cx + dx, baseY + 4, cz + dz, B.SEA_LANTERN)
  const chest = [cx, baseY + 4, cz]
  world.setRaw(chest[0], chest[1], chest[2], B.CHEST)
  STRUCT.palaceChest = chest

  STRUCT.lights.push([cx, baseY + 6, cz], [cx, baseY + height + half - 2, cz], [cx, baseY + 4, dz0 - 1])

  // —— 周边海底地形 ——
  buildSeaFloor(world, cx, cz, baseY, pHalf, rng)
}

// 神殿周边深海盆地：珊瑚丛、海草群、礁石堆、沉船残骸、指引神道
function buildSeaFloor(world, cx, cz, baseY, pHalf, rng) {
  // 扫描海床顶（贴起伏盆地斜坡）：返回最高实心方块 y，非水下返回 -1
  const seabed = (x, z) => {
    for (let y = CFG.SEA_LEVEL - 2; y >= baseY - 2; y--) {
      const b = world.get(x, y, z)
      if (b !== B.AIR && b !== B.WATER && b !== B.WATER_FLOW) return y
    }
    return -1
  }
  const place = (x, y, z, id) => { const t = world.get(x, y, z); if (t === B.WATER || t === B.WATER_FLOW) world.setRaw(x, y, z, id) }

  // 通往正门的海晶石神道（北向，贴海床）
  for (let i = 4; i < 16; i++) {
    const z = cz - pHalf - i
    const sb = seabed(cx, z)
    if (sb < 0) continue
    fill(world, cx - 1, sb, z, cx + 1, sb, z, B.PRISMARINE)
    if (i % 3 === 0) { place(cx - 2, sb + 1, z, B.SEA_LANTERN); place(cx + 2, sb + 1, z, B.SEA_LANTERN) }
  }

  // 珊瑚丛 + 海草 + 礁石（撒在盆地内、避开神殿基座，贴海床）
  for (let n = 0; n < 200; n++) {
    const ang = rng(n, 1) * Math.PI * 2
    const rad = pHalf + 3 + rng(n, 2) * 38
    const x = Math.round(cx + Math.cos(ang) * rad)
    const z = Math.round(cz + Math.sin(ang) * rad)
    const sb = seabed(x, z)
    if (sb < 0 || sb > CFG.SEA_LEVEL - 4) continue   // 只在够深的水下
    const r = rng(n, 3)
    if (r < 0.42) {
      const coral = rng(n, 5) < 0.5 ? B.CORAL_PINK : B.CORAL_BLUE
      const hgt = 1 + Math.floor(rng(n, 4) * 3)
      for (let h = 1; h <= hgt; h++) place(x, sb + h, z, coral)
      if (rng(n, 6) < 0.5) place(x + (rng(n, 7) < 0.5 ? 1 : -1), sb + 1, z, coral)
    } else if (r < 0.72) {
      const hgt = 1 + Math.floor(rng(n, 4) * 3)
      for (let h = 1; h <= hgt; h++) place(x, sb + h, z, B.SEAWEED)
    } else if (r < 0.88) {
      place(x, sb + 1, z, B.STONE)
      if (rng(n, 8) < 0.6) place(x, sb + 2, z, B.STONE)
      for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1]]) if (rng(n, 9 + dx) < 0.5) place(x + dx, sb + 1, z + dz, B.STONE)
    } else {
      place(x, sb + 1, z, B.SEA_LANTERN)
    }
  }

  // 沉船残骸（盆地东南，贴海床）
  const sx = cx + pHalf + 12, sz = cz + pHalf + 6
  const ssb = seabed(sx, sz)
  if (ssb > 0 && ssb < CFG.SEA_LEVEL - 4) {
    for (let i = 0; i < 8; i++) {
      const tilt = Math.floor(i * 0.4)
      for (let dz = -2; dz <= 2; dz++) place(sx + i, ssb + 1 + tilt, sz + dz, B.WOOD)      // 船底板
      if (i % 2 === 0 && i < 6) { place(sx + i, ssb + 2 + tilt, sz - 2, B.WOOD); place(sx + i, ssb + 2 + tilt, sz + 2, B.WOOD) } // 破船舷
    }
    for (let h = 2; h <= 6; h++) place(sx + 3, ssb + h, sz, B.WOOD)   // 断桅
    place(sx + 3, ssb + 3, sz + 1, B.SEAWEED)
    place(sx - 1, ssb + 1, sz, B.CORAL_PINK); place(sx + 8, ssb + 1, sz + 1, B.CORAL_BLUE)
  }
}

// 禁地（世界南界焦黑岛链）：神秘齿轮宝箱在「禁地周围」——巡逻圈外沿
function buildForbidden(world) {
  const cx = POS.FORBIDDEN.x, cz = POS.FORBIDDEN.z
  const s = world.surfaceAt(cx, cz)
  // 中心焦黑祭坛（禁地守卫巡逻处）
  fill(world, cx - 3, s + 1, cz - 3, cx + 3, s + 1, cz + 3, B.SCORCHED)
  fill(world, cx - 1, s + 2, cz - 1, cx + 1, s + 2, cz + 1, B.CODE)
  // 几根焦黑残柱
  for (const [dx, dz] of [[-6, -4], [6, -5], [-5, 6], [5, 5]]) {
    fill(world, cx + dx, s + 1, cz + dz, cx + dx, s + 3 + ((dx + dz) & 1), cz + dz, B.SCORCHED)
  }
  // 宝箱在禁地周围（巡逻圈外沿）——设定原文「宝箱在禁地周围」
  const chestX = POS.FORBIDDEN_CHEST.x, chestZ = POS.FORBIDDEN_CHEST.z
  const cs = world.surfaceAt(chestX, chestZ)
  world.setRaw(chestX, cs + 1, chestZ, B.CHEST)
  STRUCT.forbiddenChest = [chestX, cs + 1, chestZ]
}

// 地下之城：像地核一样的大空腔——地下族人、驱动核心、作者神殿③、光明齿轮
function buildUndercity(world) {
  const floorY = POS.UNDERCITY.y            // 18
  const x0 = 96, x1 = 144, z0 = 96, z1 = 144
  // 大空腔（外壳石头，内部挖空，高 22）
  fill(world, x0 - 1, floorY - 2, z0 - 1, x1 + 1, floorY + 22, z1 + 1, B.STONE)
  fill(world, x0, floorY, z0, x1, floorY + 21, z1, B.AIR)
  // 地板：石砖大道 + 泥土
  fill(world, x0, floorY - 1, z0, x1, floorY - 1, z1, B.MUD)
  fill(world, x0, floorY - 1, 118, x1, floorY - 1, 122, B.BRICK)   // 东西大道
  fill(world, 118, floorY - 1, z0, 122, floorY - 1, z1, B.BRICK)   // 南北大道
  // 荧光石顶灯柱
  for (const [lx, lz] of [[104, 104], [136, 104], [104, 136], [136, 136], [120, 108], [120, 132]]) {
    fill(world, lx, floorY, lz, lx, floorY + 6, lz, B.GLOWSTONE)
  }
  // 地下族人的小屋 ×6（石砖小盒）
  const folk = []
  for (const [hx, hz] of [[102, 112], [102, 128], [138, 112], [138, 128], [112, 138], [128, 138]]) {
    fill(world, hx - 2, floorY, hz - 2, hx + 2, floorY + 3, hz + 2, B.BRICK)
    fill(world, hx - 1, floorY, hz - 1, hx + 1, floorY + 2, hz + 1, B.AIR)
    world.setRaw(hx, floorY, hz - 2, B.AIR); world.setRaw(hx, floorY + 1, hz - 2, B.AIR)
    folk.push([hx + 0.5, floorY, hz + 0.5])
  }
  // 驱动核心：中央发光巨柱（5×12×5，不可破坏）
  const corex = POS.CORE.x, corez = POS.CORE.z
  fill(world, corex - 2, floorY, corez - 2, corex + 2, floorY + 11, corez + 2, B.CORE_BLOCK)
  fill(world, corex - 1, floorY + 1, corez - 1, corex + 1, floorY + 10, corez + 1, B.CORE_BLOCK)
  STRUCT.lights.push([corex, floorY + 13, corez])
  STRUCT.lights.push([corex + 4, floorY + 3, corez + 4])
  // 作者神殿③（驱动核心旁）：金顶小神殿
  const shx = POS.SHRINE3.x, shz = POS.SHRINE3.z
  fill(world, shx - 3, floorY, shz - 3, shx + 3, floorY + 5, shz + 3, B.BRICK)
  fill(world, shx - 2, floorY, shz - 2, shx + 2, floorY + 4, shz + 2, B.AIR)
  fill(world, shx - 3, floorY + 5, shz - 3, shx + 3, floorY + 5, shz + 3, B.GOLD)
  fill(world, shx - 1, floorY, shz - 3, shx + 1, floorY + 2, shz - 3, B.AIR)  // 北门
  fill(world, shx - 1, floorY, shz + 1, shx + 1, floorY, shz + 1, B.THRONE)  // 小祭坛
  STRUCT.lights.push([shx, floorY + 3, shz])
  // 光明齿轮箱：驱动核心边缘（设定原文）
  const lc = [POS.LIGHT_CHEST.x, floorY, POS.LIGHT_CHEST.z]
  world.setRaw(lc[0], lc[1], lc[2], B.CHEST)
  STRUCT.lightChest = lc
  STRUCT.undercity = { floorY, corePos: [corex, floorY, corez], shrinePos: [shx, floorY, shz], folk }

  // 入口：地面 → 地下城 竖井（上部空气快速下落，底部 12 格水缓冲安全着陆）
  const ex = POS.UNDERCITY_STAIR.x, ez = POS.UNDERCITY_STAIR.z
  const es = world.surfaceAt(ex, ez)
  const waterTop = floorY + 12    // 底部水缓冲高度
  // 2×2 井道：底部水、上部空气
  fill(world, ex, floorY, ez, ex + 1, waterTop, ez + 1, B.WATER)
  fill(world, ex, waterTop + 1, ez, ex + 1, es + 1, ez + 1, B.AIR)
  // 井壁石砖套管（把井道从周围土层里隔出来）
  for (let y = floorY; y <= es; y++) {
    for (const [dx, dz] of [[-1, 0], [-1, 1], [2, 0], [2, 1], [0, -1], [1, -1], [0, 2], [1, 2]]) {
      const cur = world.get(ex + dx, y, ez + dz)
      if (cur !== B.WATER && cur !== B.CORE_BLOCK && cur !== B.CHEST) world.setRaw(ex + dx, y, ez + dz, B.STONE)
    }
    if (y % 8 === 0) world.setRaw(ex - 1, y, ez, B.GLOWSTONE)   // 井壁灯
  }
  // 地面醒目入口：石砖平台 + 四角荧光石
  for (let dx = -3; dx <= 4; dx++) for (let dz = -3; dz <= 4; dz++) {
    if (dx >= 0 && dx <= 1 && dz >= 0 && dz <= 1) continue
    world.setRaw(ex + dx, es, ez + dz, B.BRICK)
  }
  for (const [dx, dz] of [[-3, -3], [4, -3], [-3, 4], [4, 4]]) {
    world.setRaw(ex + dx, es + 1, ez + dz, B.GLOWSTONE)
    world.setRaw(ex + dx, es + 2, ez + dz, B.GLOWSTONE)
  }
  // 城腔井底回程传送台（发光核心块，按 E 回地面）
  world.setRaw(ex, floorY - 1, ez, B.GLOWSTONE); world.setRaw(ex + 1, floorY - 1, ez + 1, B.GLOWSTONE)
  STRUCT.lights.push([ex, es + 2, ez], [ex, floorY + 3, ez])
  STRUCT.undercityEntrance = [ex + 0.5, es + 1, ez + 0.5]   // 地面井口（E 下城 / 回城落点）
  STRUCT.undercityExit = [ex + 0.5, floorY, ez + 0.5]       // 城腔井底（E 回地面）
  STRUCT.undercityElevator = [ex, ez]
}
