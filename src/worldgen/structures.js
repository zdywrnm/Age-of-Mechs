// 主世界建筑 v2
// 第一章：作者之塔、矿石/大地密室、巨石阵（原样保留，坐标不变）
// 第二章：暗黑地狱传送门、作者小岛木屋(神殿②+商店)、丛林神殿(终极之地门)、
//         海底宫殿、禁地、地下之城(驱动核心+神殿③+光明齿轮)、刷怪塔改传送大厅
import { CFG, POS } from '../config.js'
import { B } from '../blocks.js'

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

function fill(world, x0, y0, z0, x1, y1, z1, id) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++)
      for (let x = x0; x <= x1; x++) world.setRaw(x, y, z, id)
}

function flatten(world, cx, cz, half, groundY, clearH = 40, top = B.GRASS) {
  for (let z = cz - half; z <= cz + half; z++)
    for (let x = cx - half; x <= cx + half; x++) {
      for (let y = groundY + 1; y <= groundY + clearH; y++) world.setRaw(x, y, z, B.AIR)
      for (let y = Math.max(2, groundY - 5); y <= groundY; y++) {
        world.setRaw(x, y, z, y === groundY ? top : (y >= groundY - 3 ? B.MUD : B.STONE))
      }
      world.setSurface(x, z, groundY)
    }
}

export function buildStructures(world) {
  STRUCT.lights = []
  buildAuthorTower(world)
  buildOreRoom(world)
  buildStonehenge(world)
  buildEarthRoom(world)
  buildSpawnerHall(world)
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

function buildStonehenge(world) {
  const cx = POS.HENGE_C.x, cz = POS.HENGE_C.z
  const s = world.surfaceAt(cx, cz)
  STRUCT.hengeGround = s
  flatten(world, cx, cz, 10, s)
  for (let k = 0; k < 8; k++) {
    const ang = (k / 8) * Math.PI * 2
    const px = Math.round(cx + Math.cos(ang) * 7)
    const pz = Math.round(cz + Math.sin(ang) * 7)
    fill(world, px, s + 1, pz, px, s + 5, pz, B.STONE)
    world.setRaw(px, s + 6, pz, B.BRICK)
  }
  world.setRaw(cx, s, cz, B.BRICK)
}

function buildEarthRoom(world) {
  const cx = POS.HENGE_C.x, cz = POS.HENGE_C.z
  const s = STRUCT.hengeGround
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

// ============ 刷怪塔 → 传送大厅（v2：楼梯取消，改无尽爬塔传送台） ============

function buildSpawnerHall(world) {
  const cx = POS.SPAWNER_C.x, cz = POS.SPAWNER_C.z, half = 7
  const s = world.surfaceAt(cx, cz)
  STRUCT.spawnerGround = s
  flatten(world, cx, cz, half + 2, s, 90)

  // 装饰高塔外壳（实心封顶，只是地标）
  fill(world, cx - half, s + 1, cz - half, cx + half, s + 80, cz + half, B.BRICK)
  // 底层大厅掏空（高 6）
  fill(world, cx - half + 1, s + 1, cz - half + 1, cx + half - 1, s + 6, cz + half - 1, B.AIR)
  fill(world, cx - half + 1, s, cz - half + 1, cx + half - 1, s, cz + half - 1, B.BRICK)
  // 金角
  for (const dx of [-half, half]) for (const dz of [-half, half])
    fill(world, cx + dx, s + 1, cz + dz, cx + dx, s + 81, cz + dz, B.GOLD)
  // 东门（朝城镇）
  fill(world, cx + half, s + 1, cz - 1, cx + half, s + 3, cz + 1, B.AIR)
  // 每 10 层装饰金环（外观提示这是千层塔）
  for (let f = 10; f <= 80; f += 10) {
    for (const dx of [-half, half]) {
      world.setRaw(cx + dx, s + f, cz - 2, B.GOLD); world.setRaw(cx + dx, s + f, cz + 2, B.GOLD)
    }
  }
  // 传送台：大厅中央 3×3 金砖
  fill(world, cx - 1, s, cz - 1, cx + 1, s, cz + 1, B.GOLD)
  STRUCT.teleporterPad = [cx, s + 1, cz]
  STRUCT.lights.push([cx, s + 4, cz])
}

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

// 海底宫殿（深海盆地底部）：潮涌齿轮 + 海底守卫者
function buildSeaPalace(world) {
  const cx = POS.SEA_PALACE.x, cz = POS.SEA_PALACE.z
  const baseY = 24
  const half = 15, height = 15
  // 外壳
  fill(world, cx - half, baseY, cz - half, cx + half, baseY + height, cz + half, B.PALACE_BRICK)
  // 内部灌水（在水下，内部也是水）
  fill(world, cx - half + 1, baseY + 1, cz - half + 1, cx + half - 1, baseY + height - 1, cz + half - 1, B.WATER)
  // 四面大门 5×5
  for (const [ox, oz, w] of [[0, -half, 'x'], [0, half, 'x'], [-half, 0, 'z'], [half, 0, 'z']]) {
    if (w === 'x') fill(world, cx - 2, baseY + 2, cz + oz, cx + 2, baseY + 6, cz + oz, B.WATER)
    else fill(world, cx + ox, baseY + 2, cz - 2, cx + ox, baseY + 6, cz + 2, B.WATER)
  }
  // 中央高台 + 潮涌齿轮箱
  fill(world, cx - 2, baseY + 1, cz - 2, cx + 2, baseY + 2, cz + 2, B.PALACE_BRICK)
  const chest = [cx, baseY + 3, cz]
  world.setRaw(chest[0], chest[1], chest[2], B.CHEST)
  STRUCT.palaceChest = chest
  // 四角荧光石柱
  for (const dx of [-half + 2, half - 2]) for (const dz of [-half + 2, half - 2]) {
    fill(world, cx + dx, baseY + 1, cz + dz, cx + dx, baseY + 8, cz + dz, B.GLOWSTONE)
  }
  STRUCT.lights.push([cx, baseY + 8, cz])
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

  // 入口：地面竖井 + 折返坡道（3 宽，荧光石照明）
  const ex = POS.UNDERCITY_STAIR.x, ez = POS.UNDERCITY_STAIR.z
  const es = world.surfaceAt(ex, ez)
  // 地面开口标记（石砖框）
  fill(world, ex - 2, es, ez - 2, ex + 2, es, ez + 2, B.BRICK)
  // 第一段：向东下坡（每前进 1 格下降 1）
  let y = es, px = ex
  while (y > floorY + 36 && px < 140) {
    fill(world, px, y - 1, ez - 1, px, y + 2, ez + 1, B.AIR)
    fill(world, px, y - 2, ez - 1, px, y - 2, ez + 1, B.BRICK)
    if (px % 6 === 0) world.setRaw(px, y + 2, ez - 1, B.GLOWSTONE)
    px++; y--
  }
  // 平台
  fill(world, px - 1, y - 1, ez - 1, px + 2, y + 2, ez + 3, B.AIR)
  fill(world, px - 1, y - 2, ez - 1, px + 2, y - 2, ez + 3, B.BRICK)
  // 第二段：向西下坡到城顶
  while (y > floorY + 22 && px > 100) {
    fill(world, px, y - 1, ez + 2, px, y + 2, ez + 4, B.AIR)
    fill(world, px, y - 2, ez + 2, px, y - 2, ez + 4, B.BRICK)
    if (px % 6 === 0) world.setRaw(px, y + 2, ez + 4, B.GLOWSTONE)
    px--; y--
  }
  // 竖直水电梯（整根水柱）：跳下去安全落地，按住空格就能游上去——双向通行
  fill(world, px, floorY, ez + 2, px + 1, y + 2, ez + 3, B.WATER)
  STRUCT.lights.push([px, floorY + 4, ez + 2])
  STRUCT.undercityElevator = [px, ez + 2]
}
