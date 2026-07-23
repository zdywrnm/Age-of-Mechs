// v4 世界生成自动检查：node 直跑（worldgen 链无 three 依赖）
// 用法：npm run check:world
// 每次改 worldgen 后必跑——这个项目在坐标漂移上栽过两次，关键坐标全部钉死成断言
import { World } from '../src/world.js'
import { CFG, POS, DIMS } from '../src/config.js'
import { B, isSolid } from '../src/blocks.js'
import { generateTerrain } from '../src/worldgen/terrain.js'
import { buildStructures, STRUCT } from '../src/worldgen/structures.js'
import { zoneAt, ZONES } from '../src/game/zones.js'

let pass = 0, fail = 0
const errors = []
function check(name, cond, detail = '') {
  if (cond) { pass++ }
  else { fail++; errors.push(`✗ ${name}${detail ? ' — ' + detail : ''}`) }
}
const at = (w, p) => w.get(p[0], p[1], p[2])
const name = id => `B[${id}]`

console.log('生成主世界（512×200×512）…')
const world = new World(DIMS.main)
generateTerrain(world)
buildStructures(world)
console.log('生成完毕，开始断言。')

// —— 出生点 ——
{
  const [sx, sy, sz] = STRUCT.spawnPoint
  const fx = Math.floor(sx), fz = Math.floor(sz)
  check('出生点脚下实心', world.isSolid(fx, sy - 1, fz), `(${fx},${sy - 1},${fz})=${name(world.get(fx, sy - 1, fz))}`)
  check('出生点身位是空气', world.get(fx, sy, fz) === B.AIR && world.get(fx, sy + 1, fz) === B.AIR)
  check('出生点在中央城市区', zoneAt(fx, fz)?.id === 'city', `zone=${zoneAt(fx, fz)?.id}`)
}

// —— 第一章主线：宝座下矿石密室 ——
check('矿石密室宝箱存在', STRUCT.oreRoom && at(world, STRUCT.oreRoom.chest) === B.CHEST)

// —— 第一章主线：巨石阵三块诡异木板 + 大地齿轮箱 ——
{
  const er = STRUCT.earthRoom
  check('大地密室存在', !!er)
  if (er) {
    for (let i = 0; i < 3; i++)
      check(`诡异木板${i + 1}`, at(world, er.planks[i]) === B.PLANK, `${er.planks[i]}=${name(at(world, er.planks[i]))}`)
    check('大地齿轮箱', at(world, er.chest) === B.CHEST, `${er.chest}=${name(at(world, er.chest))}`)
    check('木板与箱在巨石阵正下方', er.planks[0][0] === POS.HENGE_C.x && er.planks[0][2] === POS.HENGE_C.z)
  }
}

// —— 地下之城 ——
{
  const uc = STRUCT.undercity
  check('地下之城存在', !!uc)
  if (uc) {
    check('驱动核心方块', world.get(uc.corePos[0], uc.floorY + 5, uc.corePos[2]) === B.CORE_BLOCK)
    check('光明齿轮箱', at(world, STRUCT.lightChest) === B.CHEST)
    const [ex, ez] = STRUCT.undercityElevator
    check('竖井底部有水缓冲', world.get(ex, uc.floorY + 6, ez) === B.WATER)
    check('竖井上部畅通', world.get(ex, uc.floorY + 40, ez) === B.AIR)
    // 空腔硬约束：所有地下城坐标必须在 96..144
    for (const [label, x, z] of [['CORE', POS.CORE.x, POS.CORE.z], ['SHRINE3', POS.SHRINE3.x, POS.SHRINE3.z],
      ['LIGHT_CHEST', POS.LIGHT_CHEST.x, POS.LIGHT_CHEST.z], ['STAIR', POS.UNDERCITY_STAIR.x, POS.UNDERCITY_STAIR.z]]) {
      check(`地下城坐标 ${label} 在空腔 96..144 内`, x >= 96 && x <= 144 && z >= 96 && z <= 144, `(${x},${z})`)
    }
  }
}

// —— 第二章结构 ——
check('地狱门框存在', STRUCT.hellPortal && at(world, [STRUCT.hellPortal.base[0] - 2, STRUCT.hellPortal.base[1] + 1, STRUCT.hellPortal.base[2]]) === B.PORTAL_FRAME)
check('海底宫殿潮涌箱', at(world, STRUCT.palaceChest) === B.CHEST)
check('禁地神秘齿轮箱', at(world, STRUCT.forbiddenChest) === B.CHEST)
check('刷怪塔传送台金砖', STRUCT.teleporterPad && world.get(STRUCT.teleporterPad[0], STRUCT.teleporterPad[1] - 1, STRUCT.teleporterPad[2]) === B.GOLD)

// —— v4 地形与迁移结构 ——
check('巨石阵在西北高地（地面≥SURFACE+3）', STRUCT.hengeGround >= CFG.SURFACE + 3, `hengeGround=${STRUCT.hengeGround}`)
check('巨石阵位于新址', STRUCT.earthRoom.planks[0][0] === 76 && STRUCT.earthRoom.planks[0][2] === 72)
check('海峡有水（小岛与主岛隔开）', world.get(POS.STRAIT.x, CFG.SEA_LEVEL, POS.STRAIT.z) === B.WATER)
for (const [px, pz, ph] of POS.MOUNT_PEAKS) {
  check(`矿峰(${px},${pz})高度≥${ph - 8}`, world.surfaceAt(px, pz) >= ph - 8, `surface=${world.surfaceAt(px, pz)}`)
}
check('地狱门在东南海岸', Math.hypot(STRUCT.hellPortal.base[0] - 196, STRUCT.hellPortal.base[2] - 196) < 2,
  `base=${STRUCT.hellPortal.base}`)
check('刷怪塔在小岛上', STRUCT.teleporterPad[0] === POS.SPAWNER_C.x && STRUCT.teleporterPad[2] === POS.SPAWNER_C.z)
// 石桥连通性：z=128 中线从小岛平台走到主岛竹林西岸，逐格可走（落脚实心+头顶2格空+高差≤1）
{
  let ok = true, detail = '', prevY = null
  for (let x = POS.SPAWNER_C.x + 8; x <= POS.BRIDGE.x1 + 2; x++) {
    let y = -1
    for (let yy = 115; yy >= 95; yy--) if (world.isSolid(x, yy, 128)) { y = yy; break }
    if (y < 0) { ok = false; detail = `x=${x} 无落脚`; break }
    if (world.get(x, y + 1, 128) !== B.AIR || world.get(x, y + 2, 128) !== B.AIR) {
      ok = false; detail = `x=${x} y=${y} 头顶不通(${world.get(x, y + 1, 128)},${world.get(x, y + 2, 128)})`; break
    }
    if (prevY !== null && Math.abs(y - prevY) > 1) { ok = false; detail = `x=${x} 落差 ${prevY}→${y}`; break }
    prevY = y
  }
  check('石桥中线逐格可走', ok, detail)
}

// —— v4 中央城市 ——
{
  const town = STRUCT.town
  check('城市已生成', !!town)
  if (town) {
    check('房屋数量 = 22', town.houses.length === 22, `实际 ${town.houses.length}`)
    check('商贩数量 = 4', town.vendors.length === 4)
    check('居民数量 = 16', town.residents.length === 16)
    // 每座房屋：门口 2 格空气可进，门里地板实心
    for (const h of town.houses) {
      const [dx, dz] = h.doorCell
      const ok = world.get(dx, 113, dz) === B.AIR && world.get(dx, 114, dz) === B.AIR
      check(`房屋(${h.x},${h.z})${h.type} 门可进`, ok, `door=(${dx},${dz})`)
    }
    check('仓库福利箱存在', town.wareChest && at(world, town.wareChest) === B.CHEST)
  }
  // 城墙四边采样
  check('北城墙', world.get(110, 114, 96) === B.BRICK)
  check('南城墙', world.get(110, 114, 160) === B.BRICK)
  check('西城墙', world.get(96, 114, 110) === B.BRICK)
  check('东城墙', world.get(160, 114, 110) === B.BRICK)
  // 四门开洞（中心 2 格高空气）
  for (const [gx, gz] of POS.CITY_GATES) {
    check(`城门(${gx},${gz})通行`, world.get(gx, 113, gz) === B.AIR && world.get(gx, 114, gz) === B.AIR)
  }
  // 南门→塔前广场大道：铺砖 + 地面可走
  {
    let ok = true, detail = ''
    for (let z = 159; z >= 137; z--) {
      if (world.get(128, 112, z) !== B.BRICK) { ok = false; detail = `z=${z} 非砖`; break }
      if (world.get(128, 113, z) !== B.AIR || world.get(128, 114, z) !== B.AIR) { ok = false; detail = `z=${z} 不通`; break }
    }
    check('南门→塔前大道铺砖可走', ok, detail)
  }
  check('出生点站在砖路上', world.get(128, 112, 152) === B.BRICK)
}

// —— v4 竹林 + 神殿 ——
{
  check('竹林图腾宝箱存在', STRUCT.bambooChest && at(world, STRUCT.bambooChest) === B.CHEST)
  check('神殿三层宝藏箱存在', STRUCT.bambooTreasure && at(world, STRUCT.bambooTreasure) === B.CHEST)
  check('远古熊猫 Boss 场坐标已定义', !!STRUCT.bambooBoss)
  check('三层封板存在（Boss 死前封住）', STRUCT.bambooSeal && STRUCT.bambooSeal.every(([x, y, z]) => world.get(x, y, z) === B.PLANK))
  check('竹林中心判定', zoneAt(POS.BAMBOO_C.x, POS.BAMBOO_C.z)?.id === 'bamboo')
  // 神殿一层入口可进
  const t = POS.BAMBOO_TEMPLE
  const ts = world.surfaceAt(t.x, t.z)
  check('竹林神殿南门可进', world.get(t.x, ts + 1, t.z + 8) === B.AIR && world.get(t.x, ts + 2, t.z + 8) === B.AIR)
}

// —— v4 矿石群山 ——
{
  const s = STRUCT.mountStats
  check('矿脉已生成', !!s)
  if (s) {
    check(`普通矿脉 (${s.ore}) 充足`, s.ore >= 40, `ore=${s.ore}`)
    check(`金矿脉 (${s.gold}) 充足`, s.gold >= 25, `gold=${s.gold}`)
    check(`钻石矿脉 (${s.diamond}) 存在`, s.diamond >= 5, `diamond=${s.diamond}`)
    check(`红宝石 (${s.ruby}) + 蓝宝石 (${s.sapphire}) 存在`, s.ruby >= 3 && s.sapphire >= 3)
    check(`图腾节点 (${s.totem}) 在 1~3 个`, s.totem >= 1 && s.totem <= 3, `totem=${s.totem}`)
  }
  check('矿山有洞口', STRUCT.mountCaves && STRUCT.mountCaves.length === 5)
  check('矿山中心判定', zoneAt(POS.MOUNT_C.x, POS.MOUNT_C.z)?.id === 'mountains')
}

// —— v4 鬼城遗址 ——
{
  check('鬼城废墟锚点已生成', STRUCT.ghostRuins && STRUCT.ghostRuins.length >= 15, `ruins=${STRUCT.ghostRuins?.length}`)
  check('鬼城中心焦黑祭坛', world.get(POS.GHOST_C.x, world.surfaceAt(POS.GHOST_C.x, POS.GHOST_C.z) + 2, POS.GHOST_C.z) === B.SCORCHED)
  check('鬼城中心判定', zoneAt(POS.GHOST_C.x, POS.GHOST_C.z)?.id === 'ghost')
  // 废墟锚点确实在鬼城矩形内
  const allIn = STRUCT.ghostRuins.every(([x, , z]) => x >= POS.GHOST_RECT.x0 && x <= POS.GHOST_RECT.x1 && z >= POS.GHOST_RECT.z0 && z <= POS.GHOST_RECT.z1)
  check('废墟锚点都在鬼城范围内', allIn)
}

// —— v4 森林 + 神殿 ——
{
  check('森林中心判定', zoneAt(POS.FOREST_C.x, POS.FOREST_C.z)?.id === 'forest')
  check('森林神殿红眼睛大箱存在', STRUCT.forestChest && at(world, STRUCT.forestChest) === B.CHEST)
  // 巨型古树：树干高处仍是木头
  check('巨型古树高耸(30格处仍是树干)', world.get(POS.GIANT_TREE.x, world.surfaceAt(POS.GIANT_TREE.x, POS.GIANT_TREE.z) + 30, POS.GIANT_TREE.z) === B.WOOD)
  // 森林神殿南门可进
  const t = POS.FOREST_TEMPLE
  const ts = world.surfaceAt(t.x, t.z)
  check('森林神殿南门可进', world.get(t.x, ts + 1, t.z + 7) === B.AIR && world.get(t.x, ts + 2, t.z + 7) === B.AIR)
  // 二层楼板存在（一层与二层隔开）
  check('森林神殿二层楼板', world.get(t.x + 3, ts + 7, t.z) === B.PLANK)
}

// —— 区域系统 ——
check('塔心在城市区', zoneAt(POS.TOWER_C.x, POS.TOWER_C.z)?.id === 'city')
check('竹林中心判定', zoneAt(POS.BAMBOO_C.x, POS.BAMBOO_C.z)?.id === 'bamboo')
check('鬼城中心判定', zoneAt(POS.GHOST_C.x, POS.GHOST_C.z)?.id === 'ghost')
check('森林中心判定', zoneAt(POS.FOREST_C.x, POS.FOREST_C.z)?.id === 'forest')
check('远海不在任何区域', zoneAt(400, 400) === null)
// 城市区与其他区域互斥（city 优先级最高，物理上不重叠）
{
  let overlap = 0
  for (const zn of ZONES) {
    if (zn.id === 'city' || !zn.rect) continue
    const r = zn.rect, c = POS.CITY
    if (r.x0 <= c.x1 && r.x1 >= c.x0 && r.z0 <= c.z1 && r.z1 >= c.z0) overlap++
  }
  check('城市矩形不与其他矩形区重叠', overlap === 0, `overlap=${overlap}`)
}

// —— 汇总 ——
console.log(`\n通过 ${pass} 项，失败 ${fail} 项`)
if (fail) { for (const e of errors) console.error(e); process.exit(1) }
console.log('✓ check-world 全部通过')
