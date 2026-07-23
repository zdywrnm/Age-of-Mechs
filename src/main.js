// 淇淇小游戏 · 第二章「完整世界」—— 游戏入口与主循环
import * as THREE from 'three'
import './ui/styles.css'
import { CFG, POS } from './config.js'
import { B } from './blocks.js'
import { createAtlas } from './textures.js'
import { generateTerrain } from './worldgen/terrain.js'
import { buildStructures, STRUCT } from './worldgen/structures.js'
import { generateHell, HELL } from './worldgen/hell.js'
import { generateVoidland, VOID } from './worldgen/voidland.js'
import { generateArena, ARENA } from './worldgen/arena.js'
import { DimensionManager } from './game/dimensions.js'
import { Controls } from './player/controls.js'
import { Player } from './player/player.js'
import { Interaction, raycastVoxel, rayAABB } from './player/interaction.js'
import { ITEMS } from './game/items.js'
import { MonsterManager } from './entities/monsters.js'
import { ProjectileManager } from './entities/projectiles.js'
import { DropManager } from './entities/drops.js'
import { AuthorNPC, Villager } from './entities/npc.js'
import { zoneAt } from './game/zones.js'
import { ZoneFx } from './game/zoneFx.js'
import { MysteryPickupManager } from './entities/mysteryPickup.js'
import { BoatManager } from './entities/boat.js'
import { FluidSim } from './game/fluids.js'
import { FX, blockColors } from './fx.js'
import { PetManager } from './game/pets.js'
import { QuestManager } from './game/quests.js'
import { ChestRegistry, MYSTERY_GEARS } from './game/chests.js'
import { TowerV2 } from './game/towerV2.js'
import { PortalSystem } from './game/portals.js'
import { DayNight } from './game/dayNight.js'
import { saveGame, loadGame } from './game/save.js'
import { setupTouch } from './ui/touch.js'
import { audio } from './audio.js'
import { HUD } from './ui/hud.js'
import { Dialog } from './ui/dialog.js'
import { showStartScreen } from './ui/customize.js'
import { InventoryUI } from './ui/inventory.js'
import { ShopUI } from './ui/shop.js'
import { TeleporterUI } from './ui/teleporter.js'
import { LoadingUI } from './ui/loading.js'

const DEBUG = new URLSearchParams(location.search).has('debug')

// ============ 渲染基础 ============
const app = document.getElementById('app')
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setPixelRatio(Math.min(devicePixelRatio, 2))
renderer.setSize(innerWidth, innerHeight)
app.appendChild(renderer.domElement)

const scene = new THREE.Scene()
scene.background = new THREE.Color(CFG.SKY_COLOR)
scene.fog = new THREE.Fog(CFG.SKY_COLOR, CFG.FOG_NEAR, CFG.FOG_FAR)
const hemi = new THREE.HemisphereLight(0xdfefff, 0x8a7a5a, 1.0)
scene.add(hemi)
const sun = new THREE.DirectionalLight(0xffffff, 0.7)
sun.position.set(60, 120, 40)
scene.add(sun)

const camera = new THREE.PerspectiveCamera(70, innerWidth / innerHeight, 0.1, 420)
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(innerWidth, innerHeight)
})

// ============ 维度 ============
const ctx = { world: null, chunks: null }        // 共享上下文（各系统动态取当前维度）
const atlas = createAtlas()
const fx = new FX(scene)
const dims = new DimensionManager(scene, atlas, ctx, { hemi, sun, fog: scene.fog })
dims.register('main', {
  gen: w => { generateTerrain(w); buildStructures(w); return STRUCT.lights },
  ambience: { sky: 0x87c9f0, fogNear: CFG.FOG_NEAR, fogFar: CFG.FOG_FAR, hemi: 1.0, sun: 0.7 },
  surfaceY: CFG.SURFACE,
})
dims.register('hell', {
  gen: w => { generateHell(w); return HELL.lights },
  ambience: { sky: 0x2a0f0a, fogNear: 40, fogFar: 150, hemi: 0.55, sun: 0.15 },
})
dims.register('void', {
  gen: w => { generateVoidland(w); return VOID.lights },
  ambience: { sky: 0x05030a, fogNear: 25, fogFar: 95, hemi: 0.35, sun: 0.05 },
})
dims.register('arena', {
  gen: w => { generateArena(w); return ARENA.lights },
  ambience: { sky: 0x1a1410, fogNear: 60, fogFar: 200, hemi: 0.85, sun: 0.4 },
})

// 临时实体（怪物/投射物/掉落/宠物）挂载点，切维度时各管理器自清
const entityGroup = new THREE.Group()
scene.add(entityGroup)

const raf = () => new Promise(r => requestAnimationFrame(() => r()))
const tick = () => new Promise(r => setTimeout(r, 0))

// ============ 启动 ============
showStartScreen(config => boot(config))

async function boot(newConfig) {
  const loading = new LoadingUI()
  await tick()
  const save = newConfig ? null : loadGame()   // 槽位/旧档迁移都在 save.js 内部处理
  const robotConfig = newConfig || save.robotConfig

  loading.set(0.05, '正在创造大陆与海洋……')
  await tick()
  const d = dims.get('main')
  const iter = dims.ensure('main', { incremental: true })
  if (save?.edits?.main) d.world.applyEdits(save.edits.main)
  const total = d.chunks.totalChunks()
  let i = 0
  for (const _ of iter) {
    i++
    // 前台分帧显示加载条；后台（定时器被节流）直接同步建完
    if (!document.hidden && i % CFG.LOAD_CHUNKS_PER_FRAME === 0) {
      loading.set(0.05 + 0.9 * (i / total), i < total * 0.5 ? '正在铺设海底……' : '正在种树盖房……')
      await tick()
    }
  }
  d.world.dirty.clear()
  d.group.visible = true
  ctx.world = d.world
  ctx.chunks = d.chunks
  loading.set(1, '出发！')
  await tick()
  loading.done()
  if (save?.migratedFromV1) {
    setTimeout(() => alert('欢迎回来！初始城镇变成了六区大岛（城市/竹林/巨石阵/群山/鬼城/森林）。\n你的等级、齿轮、任务、装备、宠物、其他大陆的建造都完整保留了。\n只有旧主岛上的方块改动被清理，位置回到了城南出生点～'), 100)
  }
  startGame(robotConfig, save)
}

// ============ 游戏主体 ============
function startGame(robotConfig, save) {
  const controls = new Controls(renderer.domElement)
  const hud = new HUD(atlas)
  setupTouch(controls)           // 触屏设备：虚拟摇杆+视角拖动+按键组
  hud.setCamera(camera)
  const dialog = new Dialog(controls)
  const flags = Object.assign({ portalCharged: false, fireSeaCleared: false, endingSeen: false, ancientPandaDefeated: false, ghostDragonDefeated: false }, save?.flags)
  const mainGroup = dims.get('main').group

  const player = new Player(scene, robotConfig, STRUCT.spawnPoint)
  const monsters = new MonsterManager(() => entityGroup, ctx, player)
  const projectiles = new ProjectileManager(() => entityGroup, ctx, player)
  monsters.projectiles = projectiles
  projectiles.monsters = monsters
  projectiles.onImpact = (pos, kind) => {
    if (kind === 'explode') {
      fx.burst(pos, ['#ffd24a', '#ff7a1a', '#ff4020'], { count: 18, speed: 7, up: 3, size: 0.16 })
      fx.ring(pos, '#ffb020', { maxR: 3, life: 0.4, y: pos.y })
      fx.shake(0.5); audio.sfx('quake')
    } else if (kind === 'mystery') {
      fx.burst(pos, ['#c9a0ff', '#e8d0ff', '#a060ff'], { count: 14, speed: 6, up: 2.5, size: 0.14 })
      audio.sfx('hit')
    } else {
      fx.burst(pos, ['#7dfcff', '#c8fbff'], { count: 6, speed: 4, up: 1.5, size: 0.1 })
      audio.sfx('hit')
    }
  }

  // —— v4 红眼睛：装备后 G/🔫 变即时激光（射程40 命中第一个敌人，卸下自动恢复机甲炮）——
  function fireLaser() {
    const def = ITEMS[player.equipment.ranged]
    const L = def?.laser || { dmg: 100, range: 40, cd: 0.9 }
    player.shootCooldown = L.cd
    const eye = player.headPos(new THREE.Vector3())
    const dir = controls.forward(new THREE.Vector3())
    const hitBlock = raycastVoxel(ctx.world, eye, dir, L.range)   // 墙壁遮挡
    let bd = hitBlock ? hitBlock.dist : L.range
    let best = null
    for (const m of monsters.list) {
      if (m.dead) continue
      const min = { x: m.ent.pos.x - m.w / 2, y: m.ent.pos.y, z: m.ent.pos.z - m.w / 2 }
      const max = { x: m.ent.pos.x + m.w / 2, y: m.ent.pos.y + m.h, z: m.ent.pos.z + m.w / 2 }
      const t = rayAABB(eye, dir, min, max)
      if (t !== null && t < bd) { bd = t; best = m }
    }
    const end = eye.clone().addScaledVector(dir, bd)
    const from = eye.clone().addScaledVector(dir, 0.5); from.y -= 0.15
    fx.beam(from, end, '#ff2020')
    fx.burst(end, ['#ff4040', '#ffb0a0'], { count: 8, speed: 4, up: 2, size: 0.12, additive: true })
    if (best) monsters.hitMonster(best, Math.round(L.dmg * player.damageMult()), player.ent.pos)
    player.swing()
    audio.sfx('laser')
  }

  // —— 远程炮：G 键 / 触屏「炮」发射，弹药随齿轮升级 ——
  function fireCannon() {
    if (!player.canShoot()) return
    if (player.equipment.ranged) { fireLaser(); return }
    const w = player.weaponTier()
    player.shootCooldown = w.cd
    const eye = player.headPos(new THREE.Vector3())
    const dir = controls.forward(new THREE.Vector3())
    // 从机器人右肩前方发射
    const side = new THREE.Vector3(dir.z, 0, -dir.x).normalize().multiplyScalar(0.3)
    const origin = eye.clone().add(dir.clone().multiplyScalar(0.6)).add(side)
    const n = w.count || 1
    for (let i = 0; i < n; i++) {
      const d = dir.clone()
      if (n > 1) {   // 扇形散射
        const a = (i - (n - 1) / 2) * (w.spread || 0.14)
        const cos = Math.cos(a), sin = Math.sin(a)
        const nx = d.x * cos - d.z * sin, nz = d.x * sin + d.z * cos
        d.x = nx; d.z = nz
      }
      projectiles.spawn(origin.clone(), d, w.speed, w.dmg, w.color,
        { friendly: true, radius: w.radius || 0, pierce: w.pierce, homing: w.homing, size: w.size, kind: w.kind })
    }
    player.swing()
    fx.burst(origin, [w.color, '#ffffff'], { count: 5, speed: 3, up: 1, size: 0.1, additive: true })
    audio.sfx('shoot')
  }
  monsters.hud = hud
  // v4 安全区注入：城内不刷怪/不追击/敌弹销毁
  const inSafeZone = (x, z) => dims.active === 'main' && !!(zoneAt(x, z)?.safe)
  monsters.isSafeZone = inSafeZone
  projectiles.isSafeZone = inSafeZone
  const drops = new DropManager(() => entityGroup, ctx, player)
  const pets = new PetManager(() => entityGroup, ctx, player, monsters)
  const boats = new BoatManager(mainGroup, ctx, player)
  const fluids = new FluidSim()
  fluids.setWorld(ctx.world)
  const pickups = new MysteryPickupManager(player)
  const dayNight = new DayNight(scene, { hemi, sun, fog: scene.fog })
  const zoneFx = new ZoneFx({ scene, fx, audio, hud, player, dims, ctx: { STRUCT, active: () => dims.active } })

  // NPC：作者①（塔）、作者②（木屋商店）、地下族人
  const npc = new AuthorNPC(mainGroup, STRUCT.npcPos)
  const hutNpc = new AuthorNPC(mainGroup, STRUCT.hutNpcPos, '👑 作者·小岛分身')
  const folkNpcs = STRUCT.undercity.folk.map((pos, i) =>
    new AuthorNPC(mainGroup, pos, '⛏ 地下族人', { head: '#8b939d', body: '#6a7078', arm: '#787f88', leg: '#5a5f66', headType: 'cube', eyeStyle: 'round', wide: false }))

  // —— v4 城市 NPC：4 商贩（站柜台）+ 16 流动居民（大道/广场漫步）——
  const RESIDENT_NAMES = ['铁蛋', '螺丝', '小齿轮', '阿铜', '闪闪', '嘟嘟', '钢镚', '小马达',
    '布丁', '图纸', '扳手', '小灯泡', '贝壳', '咕噜', '天线', '小履带']
  const RESIDENT_LINES = [
    ['北边的大山里全是矿！', '听说还有会发光的稀有宝石，钻石红宝石蓝宝石都有！'],
    ['西边竹林最近来了好多大熊猫！', '毛茸茸的，就是竹林深处的神殿有点吓人……'],
    ['东边的鬼城晚上会传来奇怪的声音……', '还有喷火的大家伙在天上转！别一个人去！'],
    ['南边森林里有座老神殿。', '我爷爷说二层藏着不得了的宝贝。'],
    ['城里绝对安全，怪物进不来！', '但是城墙外面……可就说不准啦。'],
    ['广场的井口通地下之城！', '跳下去有水垫接着，一点都不疼！'],
    ['刷怪塔搬到西边海上的小岛了！', '出西门过石桥就到，一共一千层哦！'],
    ['作者之塔就在城中心！', '有任务不知道做什么，就去找作者聊聊！'],
  ]
  const vendorNpcs = []
  const residentNpcs = []
  if (STRUCT.town) {
    for (const v of STRUCT.town.vendors) {
      const n = new Villager(mainGroup, v.pos, { label: v.label, face: v.face })
      n.catalog = v.catalog
      vendorNpcs.push(n)
    }
    STRUCT.town.residents.forEach((r, i) => {
      residentNpcs.push(new Villager(mainGroup, r.pos, { label: `🤖 ${RESIDENT_NAMES[i % RESIDENT_NAMES.length]}`, patch: r.patch }))
    })
  }

  // 宝箱（五个神秘齿轮走箱子；齿轮箱用稳定 id，坐标变了存档也不作废）
  const chests = new ChestRegistry()
  chests.register(STRUCT.oreRoom.chest, { gear: 'ore' }, { id: 'gear:ore' })
  chests.register(STRUCT.earthRoom.chest, { gear: 'earth' }, { id: 'gear:earth' })
  chests.register(STRUCT.palaceChest, { gear: 'tide' }, { id: 'gear:tide' })
  chests.register(STRUCT.lightChest, { gear: 'light' }, { id: 'gear:light' })
  chests.register(STRUCT.forbiddenChest, { gear: 'mystery' }, { id: 'gear:mystery' })
  if (STRUCT.town?.wareChest) {
    chests.register(STRUCT.town.wareChest,
      { blocks: [[B.WOOD, 20], [B.STONE, 20], [B.BRICK, 10]], toast: '🧰 仓库福利：木头×20 石头×20 石砖×10！' },
      { id: 'town:warehouse' })
  }
  // v4 竹林隐藏图腾宝箱 → 神秘图腾（重复获得转 25 齿轮，逻辑在 grantArtifact）
  if (STRUCT.bambooChest) {
    chests.register(STRUCT.bambooChest, { grant: () => grantArtifact() }, { id: 'bamboo:totem' })
  }
  // v4 竹林神殿三层宝藏（远古熊猫死后开放）
  if (STRUCT.bambooTreasure) {
    chests.register(STRUCT.bambooTreasure,
      { blocks: [[B.GOLD, 6], [B.ORE_DIAMOND, 4], [B.CODE, 3]], banner: ['💎 竹林秘藏！', '金子×6 钻石×4 代码矿石×3！'] },
      { id: 'bamboo:treasure' })
  }
  // v4 森林神殿二层大箱 → 唯一「红眼睛」远程武器（装上即替代机甲炮）
  if (STRUCT.forestChest) {
    chests.register(STRUCT.forestChest, {
      grant: () => {
        if (player.items.get('red_eye')) { player.addGears(20); hud.toast('👁️ 你已经有红眼睛了，化作 20 齿轮！'); return }
        player.addItem('red_eye')
        player.equipment.ranged = 'red_eye'
        hud.banner('👁️ 获得远古武器 · 红眼睛！', '瞬间射出红色激光（100 伤害）！现在 G/🔫 变成激光，背包里可卸下')
      },
    }, { id: 'forest:redeye' })
  }

  const towerCtrl = new TowerV2(dims, monsters, hud)
  const portals = new PortalSystem(dims, player, hud, flags)
  const teleporterUI = new TeleporterUI(towerCtrl, hud, controls, f => towerCtrl.enterFloor(f))
  const shopUI = new ShopUI(player, hud, controls)
  const invUI = new InventoryUI({
    player, pets, hud, controls,
    onBoatUse: () => tryPlaceBoat(),
    onChanged: () => {},
  })

  // —— 任务 ——
  const questCtx = {
    player, dialog, hud, flags,
    towerGround: STRUCT.towerGround,
    hengeGround: STRUCT.hengeGround,
    oreChestY: STRUCT.oreRoom.chest[1],
    plank1Y: STRUCT.earthRoom.planks[0][1],
    maxCleared: () => towerCtrl.maxCleared,
    petCount: () => pets.roster.length,
    save: () => doSave(),
    onChapter1Complete: () => hud.banner('🎉 第一章 · 通关！', '休息一下，第二章马上开始！'),
  }
  const quests = new QuestManager(questCtx)

  // —— 读档 ——
  if (save) {
    player.deserialize(save.player?.pos ? save.player : { ...save.player, pos: STRUCT.spawnPoint })
    quests.deserialize(save.quests)
    towerCtrl.deserialize(save.tower2)
    chests.deserialize(save.chests)
    pets.deserialize(save.pets)
    dayNight.deserialize(save.dayTime)
    boats.deserialize(save.boats)
  }

  // —— 交互 ——
  const ictx = {
    scene, camera, controls, player, monsters, hud,
    get world() { return ctx.world },
    onChestOpen: (x, y, z) => chests.open(x, y, z),
    onBedUse: () => useBed(),
    onBlockMined: (id, x, y, z) => {
      quests.onMined(id)
      if (id === B.TOTEM_BLOCK) grantArtifact()   // v4：矿山图腾节点，挖到即得神器
      fluids.notifyRemoved(x, y, z)
      // 挖掘碎屑（同色小方块四溅）
      fx.burst(new THREE.Vector3(x + 0.5, y + 0.5, z + 0.5), blockColors(id),
        { count: 8, speed: 2.6, up: 3, size: 0.12 })
    },
    onBlockPlaced: (id, x, y, z) => { quests.onPlaced(); portals.onBlockPlaced(id, x, y, z); audio.sfx('place') },
    onCrackStage: (x, y, z, id) => { audio.sfx('dig'); fx.burst(new THREE.Vector3(x + 0.5, y + 0.5, z + 0.5),
      blockColors(id), { count: 3, speed: 1.6, up: 2, size: 0.09 }) },
    isRestricted: () => dims.active === 'arena',
  }
  const interaction = new Interaction(ictx)
  // Interaction 的放置回调签名对齐（带坐标）
  const origOnRightDown = interaction.onRightDown.bind(interaction)

  // —— v4 神秘图腾发放（唯一神器；重复获得 → 25 齿轮）——
  function grantArtifact() {
    if (player.items.get('totem_artifact')) {
      player.addGears(25)
      hud.toast('🗿 图腾与你已有的那尊产生共鸣，化作 25 个齿轮！')
      doSave()
      return
    }
    player.addItem('totem_artifact')
    player.equipment.artifact = 'totem_artifact'
    hud.banner('🗿 获得神器 · 神秘图腾！', '灰色的身躯、红色的边框、两双红眼……你的所有伤害翻倍！')
    audio.sfx('fanfare')
    doSave()
  }

  // —— 齿轮授予 ——
  function grantGear(kind) {
    const info = MYSTERY_GEARS[kind]
    player.addMysteryGear(kind)
    hud.banner(`💠 获得 · ${info.name}！`, info.desc)
    audio.sfx('chest')
    quests.onGearGot(kind)
    doSave()
  }
  // 宝箱奖励分发（v2：齿轮箱走原流程，普通箱按 reward 结构发放）
  chests.onOpen = c => {
    const r = c.reward
    if (r.gear) { grantGear(r.gear); return }   // grantGear 自带 banner+音效+存档
    if (r.gears) {
      const leveled = player.addGears(r.gears)
      if (leveled) { hud.toast(`⭐ 升级！现在是 ${player.level()} 级！`); audio.sfx('level') }
    }
    if (r.items) for (const [itemId, n] of r.items) player.addItem(itemId, n)
    if (r.blocks) for (const [blockId, n] of r.blocks) player.addBlock(blockId, n)
    if (typeof r.grant === 'function') r.grant()
    if (r.banner) hud.banner(r.banner[0], r.banner[1] || '')
    else if (r.toast) hud.toast(r.toast)
    audio.sfx('chest')
    doSave()
  }
  chests.onEmpty = () => hud.toast('箱子是空的～')
  pickups.onPickup = grantGear

  // —— 击杀 ——
  monsters.onKill = m => {
    // 死亡烟花：金色齿轮光点 + 怪物本色碎块
    const mp = new THREE.Vector3(m.ent.pos.x, m.ent.pos.y + m.h * 0.5, m.ent.pos.z)
    fx.burst(mp, ['#ffd75e', '#fff3c4'], { count: 10, speed: 4, up: 4, size: 0.14, additive: true })
    fx.burst(mp, [m.def.projColor || '#8a8a8a'], { count: 8, speed: 3.5, up: 3, size: 0.18 })
    drops.spawnGears(new THREE.Vector3(m.ent.pos.x, m.ent.pos.y, m.ent.pos.z), m.gearDrop)
    quests.onKill()
    if (m.def.dropItem) {
      player.addItem(m.def.dropItem)
      hud.toast(`获得 ${m.def.dropItem === 'seafood' ? '🦐 海货' : '🪶 光羽'}！`)
    }
    if (m.type === 'kunpeng') {
      player.addItem('peng_potion')
      player.addItem('peng_wings')
      hud.banner('🐦 你打败了鲲鹏！！', '获得 🧪鹏之药水 + 🪽鲲鹏之翼！打开背包（B）使用/装备！')
    }
    // v4 远古熊猫：置 flag + 直接收服熊猫宠物（固定 800/45，非坐骑）+ 打开神殿三层封板
    if (m.type === 'ancientpanda') {
      flags.ancientPandaDefeated = true
      pets.roster.push({ type: 'panda', name: '熊猫伙伴', maxHp: 800, hp: 800, atk: 45, mountable: false })
      if (STRUCT.bambooSeal) for (const [x, y, z] of STRUCT.bambooSeal) ctx.world.set(x, y, z, B.AIR, true)
      hud.banner('🐼 远古熊猫被你打败了！', '获得唯一的熊猫伙伴宠物！神殿三层的宝藏也开放了！')
      audio.sfx('fanfare')
      doSave()
    }
    // v4 邪恶巨龙：置 flag + 首杀大礼
    if (m.type === 'ghostdragon') {
      flags.ghostDragonDefeated = true
      player.addGears(100)
      player.addBlock(B.GOLD, 8); player.addBlock(B.CODE, 4)
      player.addBlock(B.ORE_RUBY, 2); player.addBlock(B.ORE_SAPPHIRE, 2)
      hud.banner('🐉 邪恶巨龙陨落！', '鬼城的天空恢复了平静！获得 100 齿轮 + 金子/代码/红蓝宝石！')
      audio.sfx('fanfare')
      doSave()
    }
    pets.tryCapture(m)
  }
  monsters.onExplode = pos => {
    hud.toast('💥 轰！！')
    if (pos) {
      const ep = new THREE.Vector3(pos.x, pos.y + 0.4, pos.z)
      fx.burst(ep, ['#ff5a1a', '#ffb35e', '#3a3a3a'], { count: 24, speed: 7, up: 5, size: 0.24 })
      fx.ring(ep, '#ff8a3a', { maxR: 3.5, life: 0.35 })
      fx.shake(0.3)
    }
  }
  // 近战/技能命中反馈
  monsters.onHit = (m2, dmg) => {
    fx.burst(new THREE.Vector3(m2.ent.pos.x, m2.ent.pos.y + m2.h * 0.6, m2.ent.pos.z),
      '#ffffff', { count: 4, speed: 2.2, up: 1.6, size: 0.09, additive: true })
  }
  // v4 邪恶巨龙火焰光柱：预警红环 → 落柱火焰
  monsters.onPillar = (tx, tz, phase) => {
    const gy = ctx.world.surfaceAt(Math.floor(tx), Math.floor(tz)) + 1
    const base = new THREE.Vector3(tx, gy, tz)
    if (phase === 'warn') {
      fx.ring(base, '#ff2020', { maxR: 3.2, life: 1.2 })   // 地面红色预警环
    } else {
      // 落柱：竖直火焰柱 + 爆裂 + 震屏
      fx.cone(base, new THREE.Vector3(0, 1, 0), ['#ff2020', '#ff6a1a', '#ffd24a'], { count: 30, speed: 14, spread: 0.15, size: 0.32, gravity: -4 })
      fx.burst(base, ['#ff3020', '#ffb040'], { count: 20, speed: 8, up: 6, size: 0.24, additive: true })
      fx.ring(base, '#ff8a3a', { maxR: 4, life: 0.4 })
      fx.shake(0.5); audio.sfx('pillar')
    }
  }
  // v4 远古熊猫范围震地：冲击环 + 土块 + 震屏
  monsters.onBrawlerQuake = pos => {
    const p = new THREE.Vector3(pos.x, pos.y, pos.z)
    fx.ring(p, '#c8c4bc', { maxR: 6 })
    fx.ring(p, '#7a2020', { maxR: 4, life: 0.4 })
    fx.burst(p.clone().setY(p.y + 0.2), ['#8a6142', '#5f4029', '#c8c4bc'], { count: 22, speed: 6, up: 5, size: 0.2 })
    fx.shake(0.5); audio.sfx('quake')
  }
  // 鲲鹏俯冲：风压线
  monsters.onSwoopStart = m2 => {
    fx.burst(new THREE.Vector3(m2.ent.pos.x, m2.ent.pos.y, m2.ent.pos.z),
      ['#cfe8ff', '#ffffff'], { count: 14, speed: 5, up: -2, size: 0.16, gravity: -6, additive: true })
  }
  // 船的浪花
  boats.onWake = (pos, speed) => {
    if (Math.random() < 0.35) {
      fx.burst(new THREE.Vector3(pos.x, pos.y + 0.15, pos.z),
        ['#cfe8ff', '#ffffff', '#a8d4ee'], { count: 3, speed: 1.6, up: 2.2, size: 0.1 })
    }
  }
  pets.onCapture = pet => {
    hud.toast(`🐾 收服了 ${pet.name}！怪越强宠越强！（B 背包→宠物页出战）`)
    quests.onPetCaptured()
  }
  drops.onPickup = n => {
    const firstGear = player.totalGears === 0
    audio.sfx('pickup')
    const leveled = player.addGears(n)
    quests.onGears(n)
    if (firstGear) hud.toast('🚗 齿轮上有小车标记！按 T 变形！')
    if (leveled) { hud.toast(`⭐ 升级！现在是 ${player.level()} 级！`); audio.sfx('level') }
  }
  player.onHurt = () => { hud.hurtFlash(); audio.sfx('hurt') }
  player.onJump = () => audio.sfx('jump')

  // —— 维度切换 ——
  dims.onGenerated = (id, dd) => {
    if (save?.edits?.[id]) dd.world.applyEdits(save.edits[id])
    if (id === 'hell') {
      pickups.place('forest', HELL.forestGear, dd.group)
      pickups.place('fire', HELL.fireGear, dd.group)
      if (flags.fireSeaCleared) for (const [x, y, z] of HELL.fireSeaCells) dd.world.setRaw(x, y, z, B.AIR)
    }
    if (id === 'void') pickups.place('dark', VOID.darkGear, dd.group)
  }
  dims.onSwitch = (id, spawnPos) => {
    audio.sfx('portal')
    audio.setBgm(id === 'main' ? 'main' : id)
    monsters.clearAll()
    projectiles.clearAll()
    drops.clearAll()
    fluids.setWorld(ctx.world)
    fx.clear()
    boats.riding = null
    player.mount = null
    player.ent.pos.x = spawnPos[0]; player.ent.pos.y = spawnPos[1]; player.ent.pos.z = spawnPos[2]
    player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
    monsters.poolsEnabled = id === 'main'
    if (id === 'hell') spawnHellMobs()
    if (id === 'void') spawnVoidMobs()
    if (id === 'main') spawnMainBosses()   // 回主世界重新放常驻 boss（目标已完成的不再出现）
    if (pets.activeIndex >= 0 && pets.entity) {
      pets.entity.ent.pos.x = spawnPos[0] + 1.5
      pets.entity.ent.pos.y = spawnPos[1] + 0.5
      pets.entity.ent.pos.z = spawnPos[2]
    }
  }
  function spawnHellMobs() {
    for (const [x, y, z] of HELL.demonSpawns) monsters.spawn('demon', x, y + 0.1, z, { floor: 8, tag: 'hell' })
    monsters.spawn('dragon', HELL.dragonPos[0], HELL.dragonPos[1], HELL.dragonPos[2], {
      boss: true, bossName: '恶龙', hp: 1500, atk: 22, gears: 40, tag: 'hell',
    })
  }
  function spawnVoidMobs() {
    for (const [x, y, z, symbolIdx] of VOID.guardSpawns) {
      monsters.spawn('runeguard', x, y + 0.1, z, {
        hp: 300, atk: 18, gears: 8, tag: 'void', symbolPos: VOID.symbols[symbolIdx],
      })
    }
    monsters.spawn('shadowking', VOID.kingPos[0], VOID.kingPos[1] + 0.1, VOID.kingPos[2], {
      boss: true, bossName: '暗影君王', hp: 6000, atk: 30, gears: 60, tag: 'void',
    })
  }
  // 主世界常驻 boss（目标未完成才出现）
  function spawnMainBosses() {
    // v4 远古熊猫（竹林神殿二层 Boss 场；每档只出现一次）
    if (!flags.ancientPandaDefeated && STRUCT.bambooBoss) {
      monsters.spawn('ancientpanda', STRUCT.bambooBoss[0], STRUCT.bambooBoss[1], STRUCT.bambooBoss[2], {
        boss: true, bossName: '远古熊猫', hp: 3200, atk: 22, gears: 30, tag: 'mainboss', aggroR: 14,
      })
    }
    // v4 邪恶巨龙（鬼城上空盘旋；每档只出现一次）
    if (!flags.ghostDragonDefeated) {
      monsters.spawn('ghostdragon', POS.GHOST_C.x, 150, POS.GHOST_C.z, {
        boss: true, bossName: '邪恶巨龙', hp: 10000, atk: 30, gears: 100, tag: 'mainboss',
        patrol: { cx: POS.GHOST_C.x, cz: POS.GHOST_C.z, r: 18, y: 150 }, aggroR: 40,
      })
    }
    if (!player.hasGear('tide')) {
      monsters.spawn('seaguardian', POS.SEA_PALACE.x + 0.5, 28, POS.SEA_PALACE.z + 6.5, {
        boss: true, bossName: '海底守卫者', hp: 4000, atk: 26, gears: 80, tag: 'mainboss',
        patrol: { cx: POS.SEA_PALACE.x, cz: POS.SEA_PALACE.z + 6, r: 10 }, aggroR: 26,
      })
    }
    if (!player.pengPotion) {
      monsters.spawn('kunpeng', POS.KUNPENG_AIR.x, POS.KUNPENG_AIR.y, POS.KUNPENG_AIR.z, {
        boss: true, bossName: '鲲鹏', hp: 5000, atk: 24, gears: 80, tag: 'mainboss',
        // 环游整个主世界的航线：深海 → 收服大陆 → 主岛外海 → 作者小岛，循环
        // （v4：主岛段改走外海，避开北部矿峰空域）
        patrol: {
          path: [
            [POS.KUNPENG_AIR.x, POS.KUNPENG_AIR.z],
            [POS.TAME_LAND.x + 40, POS.TAME_LAND.z],
            [200, 40],
            [40, 60],
            [POS.HUT.x, POS.HUT.z + 40],
            [POS.SEA_PALACE.x - 60, POS.SEA_PALACE.z - 30],
          ],
          y: POS.KUNPENG_AIR.y,
        }, aggroR: 60,
      })
    }
    if (!player.hasGear('mystery')) {
      // 禁地岩体建在地形上方，surfaceAt 不含结构——向上扫描找真正能站立的空位
      const w = dims.get('main').world
      let gy = w.surfaceAt(POS.FORBIDDEN.x, POS.FORBIDDEN.z) + 1
      while (gy < 190 && (w.get(POS.FORBIDDEN.x, gy, POS.FORBIDDEN.z) !== B.AIR ||
             w.get(POS.FORBIDDEN.x, gy + 1, POS.FORBIDDEN.z) !== B.AIR ||
             w.get(POS.FORBIDDEN.x, gy + 2, POS.FORBIDDEN.z) !== B.AIR)) gy++
      monsters.spawn('forbiddengolem', POS.FORBIDDEN.x + 0.5, gy, POS.FORBIDDEN.z + 0.5, {
        boss: true, bossName: '禁地守卫', hp: 8000, atk: 40, gears: 100, tag: 'mainboss',
        patrol: { cx: POS.FORBIDDEN.x, cz: POS.FORBIDDEN.z, r: 9 }, aggroR: 40,
      })
    }
  }
  spawnMainBosses()

  // 环境刷怪池（主世界）
  monsters.poolsEnabled = true
  monsters.spawnPools = [
    // v4：plains 点移到六区之间的野地（城墙外，不落任何区）
    { tag: 'plains', points: [[86, 100], [180, 90], [90, 166], [176, 172]], types: ['spider', 'brute'], max: CFG.PLAINS_MAX, interval: CFG.PLAINS_SPAWN_INTERVAL, timer: 5, floor: 1, intervalMult: () => dayNight.isNight() ? 0.4 : 1 },
    // v4 竹林：野生被动大熊猫
    { tag: 'bamboo', points: [[POS.BAMBOO_C.x - 12, POS.BAMBOO_C.z], [POS.BAMBOO_C.x + 10, POS.BAMBOO_C.z - 8], [POS.BAMBOO_C.x, POS.BAMBOO_C.z + 12], [POS.BAMBOO_C.x + 8, POS.BAMBOO_C.z + 6]], types: ['panda'], max: 5, interval: 14, timer: 4, floor: 1 },
    // v4 矿山：夜行怪
    { tag: 'mountains', points: [[POS.MOUNT_C.x - 20, POS.MOUNT_C.z], [POS.MOUNT_C.x + 20, POS.MOUNT_C.z + 6], [POS.MOUNT_C.x, POS.MOUNT_C.z - 10]], types: ['spider', 'brute', 'archer'], max: 4, interval: 16, timer: 8, floor: 6, intervalMult: () => dayNight.isNight() ? 0.5 : 1 },
    // v4 鬼城：变异载具 + 鬼怪（坦克/装甲车定值血量攻击）
    { tag: 'ghost', points: [[POS.GHOST_C.x - 10, POS.GHOST_C.z - 10], [POS.GHOST_C.x + 12, POS.GHOST_C.z + 8], [POS.GHOST_C.x, POS.GHOST_C.z + 14], [POS.GHOST_C.x + 8, POS.GHOST_C.z - 12]], types: ['tank', 'apc', 'demon'], max: 5, interval: 18, timer: 10, floor: 12, opts: { tank: { hp: 400, atk: 24, gears: 6 }, apc: { hp: 180, atk: 12, gears: 4 } } },
    // v4 森林：高密刷怪
    { tag: 'forest', points: [[POS.FOREST_C.x - 16, POS.FOREST_C.z], [POS.FOREST_C.x + 16, POS.FOREST_C.z + 8], [POS.FOREST_C.x - 8, POS.FOREST_C.z + 16], [POS.FOREST_C.x + 10, POS.FOREST_C.z - 8]], types: ['spider', 'brute', 'archer'], max: 6, interval: 12, timer: 6, floor: 5, intervalMult: () => dayNight.isNight() ? 0.5 : 1 },
    { tag: 'ocean', points: [[240, 98, 300], [200, 97, 360], [340, 96, 340], [220, 98, 250], [420, 97, 320]], types: ['shark', 'octopus', 'fish', 'crab'], max: 5, interval: 15, timer: 8, floor: 3 },
    { tag: 'sky', points: [[128, 135, 20], [300, 135, 240], [396, 130, 180], [128, 132, 300]], types: ['bird', 'angel'], max: 3, interval: 25, timer: 12, floor: 3 },
    { tag: 'tame', points: [[366, 180], [420, 215], [396, 230], [430, 185], [370, 220]], types: ['brute', 'spider', 'crab', 'archer'], max: 4, interval: 18, timer: 6, floor: 5, intervalMult: () => dayNight.isNight() ? 0.5 : 1 },
  ]
  // 池子只在主世界生效
  const origPoolsUpdate = monsters.update.bind(monsters)
  monsters.update = dt => {
    const pools = monsters.spawnPools
    if (!monsters.poolsEnabled) monsters.spawnPools = []
    origPoolsUpdate(dt)
    monsters.spawnPools = pools
  }

  // —— 塔接线 ——
  portals.towerNextFloor = () => towerCtrl.enterFloor(towerCtrl.currentFloor + 1)
  portals.toHall = () => {
    const [px, py, pz] = STRUCT.teleporterPad
    dims.switchTo('main', [px + 2.5, py, pz + 0.5])
    hud.toast('回到刷怪塔大厅')
  }
  towerCtrl.onFloorCleared = f => { quests.onFloorCleared(f); doSave() }

  // —— 床 ——
  let sleeping = false
  function useBed() {
    if (dims.active !== 'main') { hud.toast('只能在主世界睡觉哦'); return }
    if (!dayNight.isNight()) { hud.toast('☀️ 天还亮着呢，晚上再睡吧～'); return }
    if (sleeping) return
    sleeping = true
    const fade = document.createElement('div')
    fade.style.cssText = 'position:fixed;inset:0;background:#000;opacity:0;transition:opacity 0.6s;z-index:200;pointer-events:none'
    document.body.appendChild(fade)
    requestAnimationFrame(() => { fade.style.opacity = '1' })
    setTimeout(() => {
      dayNight.sleep()
      hud.toast('🌅 早安！新的一天！')
      fade.style.opacity = '0'
      setTimeout(() => { fade.remove(); sleeping = false }, 700)
    }, 800)
  }

  // —— 船 ——
  function tryPlaceBoat() {
    if (dims.active !== 'main') { hud.toast('船只能放在主世界的海里'); return }
    const fwd = controls.forwardFlat(new THREE.Vector3())
    for (let d = 2; d <= 6; d++) {
      const bx = Math.floor(player.ent.pos.x + fwd.x * d)
      const bz = Math.floor(player.ent.pos.z + fwd.z * d)
      if (ctx.world.get(bx, CFG.SEA_LEVEL, bz) === B.WATER) {
        boats.place(bx + 0.5, CFG.SEA_LEVEL + 0.05, bz + 0.5)
        player.consumeItem('boat_item')
        invUI.open && invUI.toggle(false)
        hud.toast('🛶 船放好了！走近按 E 上船')
        return
      }
    }
    hud.toast('前面没有水面～面朝大海再放船！')
  }

  // —— 地标（指南针/小地图共用）——
  const POIS = [
    { x: POS.TOWER_C.x, z: POS.TOWER_C.z, icon: '🗼', label: '作者之塔' },
    // v4 六区
    { x: POS.BAMBOO_C.x, z: POS.BAMBOO_C.z, icon: '🎋', label: '竹林' },
    { x: POS.HENGE_C.x, z: POS.HENGE_C.z, icon: '🗿', label: '巨石阵' },
    { x: POS.MOUNT_C.x, z: POS.MOUNT_C.z, icon: '⛰️', label: '矿石群山' },
    { x: POS.GHOST_C.x, z: POS.GHOST_C.z, icon: '👻', label: '鬼城遗址' },
    { x: POS.FOREST_C.x, z: POS.FOREST_C.z, icon: '🌲', label: '森林' },
    { x: POS.SPAWNER_C.x, z: POS.SPAWNER_C.z, icon: '🏯', label: '刷怪塔小岛' },
    { x: POS.HUT.x, z: POS.HUT.z, icon: '🏠', label: '作者小岛' },
    { x: POS.TAME_LAND.x, z: POS.TAME_LAND.z, icon: '🌴', label: '收服大陆' },
    { x: POS.SEA_PALACE.x, z: POS.SEA_PALACE.z, icon: '🌊', label: '深海' },
    { x: POS.FORBIDDEN.x, z: POS.FORBIDDEN.z, icon: '💀', label: '禁地' },
    { x: POS.PORTAL_HELL.x, z: POS.PORTAL_HELL.z, icon: '🔥', label: '地狱门' },
    { x: POS.UNDERCITY_STAIR.x, z: POS.UNDERCITY_STAIR.z, icon: '🕳️', label: '地下城入口' },
  ]
  let codeScanT = 0
  // 水流漫延的小水花
  fluids.onFill = (x, y, z, fluid) => {
    if (fluid !== B.WATER || Math.random() > 0.5) return
    fx.burst(new THREE.Vector3(x + 0.5, y + 0.7, z + 0.5),
      ['#cfe8ff', '#a8d4ee'], { count: 3, speed: 1.2, up: 1.8, size: 0.09 })
  }

  // —— 遮罩层 ——
  const pauseOverlay = document.createElement('div')
  pauseOverlay.className = 'overlay'
  pauseOverlay.innerHTML = `<div class="title">⏸ 暂停中 · 点击空白处继续</div>
    <div class="sub">WASD 移动 · 空格跳/游泳 · 左键挖/打 · 右键放/开箱<br>
    左键近战 · <b>G 远程炮</b>（按住连发）· T 变形 · B 背包 · E 对话/上船 · V 视角 · Q/C/X/Z 齿轮技能<br>
    <b>H 被困时回城</b> · 触控板玩家：方向键转视角 · F 挖/打 · R 放/开箱</div>
    <div class="pause-btns">
      <button class="btn pause-save">💾 立即存档</button>
      <button class="btn secondary pause-quit">💾 存档并回标题</button>
    </div>
    <div class="save-hint">游戏每 5 秒自动存档，关掉网页也不会丢进度</div>`
  document.body.appendChild(pauseOverlay)
  addEventListener('pointerdown', () => audio.resume(), { once: true })
  addEventListener('keydown', () => audio.resume(), { once: true })
  pauseOverlay.addEventListener('click', () => {
    controls.requestLock()
    if (DEBUG) setTimeout(() => { if (!controls.locked) controls.virtualLock = true }, 300)
  })
  pauseOverlay.querySelector('.pause-save').addEventListener('click', e => {
    e.stopPropagation()
    doSave()
    const b = e.currentTarget
    b.textContent = '✅ 已存档！'
    setTimeout(() => { b.textContent = '💾 立即存档' }, 1200)
  })
  pauseOverlay.querySelector('.pause-quit').addEventListener('click', e => {
    e.stopPropagation()
    doSave()
    location.reload()
  })

  const deathOverlay = document.createElement('div')
  deathOverlay.className = 'overlay death'
  deathOverlay.innerHTML = `<div class="title">💫 你被打倒了……</div><div class="sub">作者复活了你！齿轮和东西都还在！</div>`
  document.body.appendChild(deathOverlay)
  player.onDeath = () => {
    deathOverlay.style.display = 'flex'
    audio.sfx('death')
    setTimeout(() => {
      if (dims.active !== 'main') dims.switchTo('main', STRUCT.spawnPoint)
      player.respawn()
      deathOverlay.style.display = 'none'
    }, 2200)
  }

  // —— 大结局 ——
  function checkEnding() {
    if (flags.endingSeen || quests.index !== 18 || dims.active !== 'main') return
    if (player.mysteryGears.length < 8) return
    const [sx, , sz] = [POS.SHRINE3.x, 0, POS.SHRINE3.z]
    const d = Math.hypot(player.ent.pos.x - sx, player.ent.pos.z - sz)
    const inCity = Math.abs(player.ent.pos.y - STRUCT.undercity.floorY) < 8
    if (d < 5 && inCity) {
      dialog.show([
        '（驱动核心的光芒突然变得无比明亮……）',
        '你来了。八个神秘变形齿轮，全部集齐——这个世界建成以来，你是第一个做到的。',
        '知道吗？驱动核心驱动着整个世界。而驱动它的燃料，其实是勇气。',
        '你挖穿一百格的勇气、走进火海的勇气、潜入深海的勇气、面对禁地的勇气……',
        '这个世界是我创造的。但从今天起，它的故事由你来写。',
        '——作者 淇淇 敬上',
      ], () => {
        hud.banner('🎉 第二章 · 完！', '八大神秘齿轮集齐！世界的故事由你来写！')
        quests.onEnding()
        doSave()
      })
    }
  }

  // —— 按键 ——
  controls.onKeyDown = code => {
    if (code === 'KeyT') {
      const forms = player.computeForms()
      if (forms.length <= 1) { hud.toast('还没有其他形态！先收集变形齿轮吧'); return }
      audio.sfx('transform')
      const f = player.transform()
      hud.toast({ robot: '🤖 变回机器人！', car: '🚗 变形：小车！', armor: '🛡️ 变形：矿石装甲！', dive: '🤿 变形：潜水形态！', super: '🌈 变形：全能形态！！' }[f])
    }
    if (code === 'KeyB') invUI.toggle()
    if (code === 'KeyV') {
      const m = controls.cycleCamMode()
      hud.toast(['👁 第一视角', '🎥 第三视角（背后）', '🤳 第二视角（正面）'][m])
    }
    if (code === 'KeyQ' && player.hasAbility('earth')) {
      audio.sfx('quake')
      if (player.quakeCooldown > 0) { hud.toast(`地震冷却中… ${player.quakeCooldown.toFixed(1)}s`); return }
      player.quakeCooldown = CFG.QUAKE_COOLDOWN
      const dmg = Math.round(player.attack() * CFG.QUAKE_DMG_MULT)
      let n = 0
      for (const m of monsters.list) {
        const d = Math.hypot(m.ent.pos.x - player.ent.pos.x, m.ent.pos.z - player.ent.pos.z)
        if (d < CFG.QUAKE_RADIUS && Math.abs(m.ent.pos.y - player.ent.pos.y) < 3) { monsters.hitMonster(m, dmg, player.ent.pos); n++ }
      }
      // 特效：冲击环 + 土块飞溅 + 震屏
      const pp = new THREE.Vector3(player.ent.pos.x, player.ent.pos.y, player.ent.pos.z)
      fx.ring(pp, '#c9a15a', { maxR: CFG.QUAKE_RADIUS + 1 })
      fx.ring(pp, '#8a6142', { maxR: CFG.QUAKE_RADIUS - 1, life: 0.4 })
      fx.burst(pp.clone().setY(pp.y + 0.2), ['#7a5538', '#8a6142', '#5f4029'], { count: 26, speed: 6, up: 5, size: 0.22 })
      fx.shake(0.4)
    }
    if (code === 'KeyC' && player.hasAbility('fire')) {
      audio.sfx('fire')
      if (player.fireCooldown > 0) { hud.toast(`喷火冷却中… ${player.fireCooldown.toFixed(1)}s`); return }
      player.fireCooldown = CFG.FIRE_BREATH_COOLDOWN
      const fwd = controls.forwardFlat(new THREE.Vector3())
      const dmg = Math.round(player.attack() * 1.5)
      let n = 0
      for (const m of monsters.list) {
        const dx = m.ent.pos.x - player.ent.pos.x, dz = m.ent.pos.z - player.ent.pos.z
        const d = Math.hypot(dx, dz)
        if (d > CFG.FIRE_BREATH_RANGE) continue
        const dot = (dx * fwd.x + dz * fwd.z) / (d || 1)
        if (dot > 0.6) { monsters.hitMonster(m, dmg, player.ent.pos); n++ }
      }
      // 特效：锥形三色火舌 + 余烬 + 轻震
      const from = new THREE.Vector3(player.ent.pos.x, player.ent.pos.y + 1.1, player.ent.pos.z)
        .addScaledVector(fwd, 0.6)
      const fdir = new THREE.Vector3(fwd.x, 0.06, fwd.z)
      fx.cone(from, fdir, ['#ff5a1a', '#ffb35e', '#ffd75e'], { count: 26, speed: 10, size: 0.24 })
      fx.cone(from, fdir, ['#ff8a3a'], { count: 8, speed: 6, size: 0.14 })
      fx.shake(0.12)
    }
    if (code === 'KeyX' && player.hasAbility('light')) {
      audio.sfx('flash')
      if (player.flashCooldown > 0) { hud.toast(`闪光冷却中… ${player.flashCooldown.toFixed(1)}s`); return }
      player.flashCooldown = CFG.FLASH_COOLDOWN
      let n = 0
      for (const m of monsters.list) {
        const d = Math.hypot(m.ent.pos.x - player.ent.pos.x, m.ent.pos.z - player.ent.pos.z)
        if (d > CFG.FLASH_RADIUS) continue
        const evil = m.def.tags.includes('邪恶类')
        m.stunT = evil ? 2.5 : 1
        if (evil) {
          monsters.hitMonster(m, Math.round(CFG.FLASH_DMG * player.damageMult()), null); n++   // v4：图腾倍率
          fx.burst(new THREE.Vector3(m.ent.pos.x, m.ent.pos.y + m.h * 0.6, m.ent.pos.z),
            ['#ffe89a', '#fff3c4'], { count: 10, speed: 3, up: 2.5, size: 0.14, additive: true })
        }
      }
      // 特效：全屏白闪 + 金色光环扩散
      fx.flash()
      fx.ring(new THREE.Vector3(player.ent.pos.x, player.ent.pos.y, player.ent.pos.z),
        '#fff3c4', { maxR: CFG.FLASH_RADIUS, life: 0.6 })
      hud.toast(`✨ 净化闪光！净化了 ${n} 只邪恶类！`)
    }
    if (code === 'KeyZ' && player.hasAbility('dark')) {
      audio.sfx('stealth')
      if (player.stealthCooldown > 0) { hud.toast(`隐身冷却中… ${player.stealthCooldown.toFixed(1)}s`); return }
      player.stealthCooldown = CFG.STEALTH_COOLDOWN
      player.stealthTime = CFG.STEALTH_DURATION
      // 特效：紫烟一团
      fx.burst(new THREE.Vector3(player.ent.pos.x, player.ent.pos.y + 0.9, player.ent.pos.z),
        ['#7a4a9e', '#4a2a66', '#c084ff'], { count: 20, speed: 2.5, up: 2, size: 0.24, gravity: -2 })
      hud.toast('🌑 隐身！怪物看不见你了（8 秒）')
    }
    if (code === 'KeyM') {
      const on = audio.toggle()
      hud.toast(on ? '🔊 声音开' : '🔇 静音')
    }
    if (code === 'KeyH') {
      // 作者救援：主世界任何地方直接回出生点（卡在坑里/迷路专用）
      if (player.dead) return
      if (dims.active !== 'main') { hud.toast('这里出不去的话，找发紫光的返回传送门走进去～'); return }
      player.ent.pos.x = STRUCT.spawnPoint[0]
      player.ent.pos.y = STRUCT.spawnPoint[1]
      player.ent.pos.z = STRUCT.spawnPoint[2]
      player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
      boats.riding = null
      hud.toast('🌀 作者把你接回了出生点！（迷路或被困就按 H）')
    }
    if (code === 'KeyE') {
      // 优先级：船 → 作者① → 作者②商店 → 地下族人 → 传送台
      if (boats.riding) { boats.toggleRide(); audio.sfx('boat'); hud.toast('⬇️ 下船'); return }
      if (dims.active === 'main') {
        if (boats.nearest(player.ent.pos)) { boats.toggleRide(); audio.sfx('boat'); hud.toast('🛶 上船！WASD 开船，E 下船'); return }
        if (npc.distanceTo(player.ent.pos) < 3.5) {
          if (!quests.onTalk()) {
            const q = quests.current()
            dialog.show([`接下来的任务：${q.title}`, q.progress(quests.counters, questCtx) || '加油！'])
          }
          return
        }
        if (hutNpc.distanceTo(player.ent.pos) < 4) {
          quests.onHutTalk()
          shopUI.toggle(true, 'island')
          return
        }
        // v4：城内商贩 → 对应商店；居民 → 闲聊（顺带六区导览）
        for (const v of vendorNpcs) {
          if (v.distanceTo(player.ent.pos) < 3.5) { shopUI.toggle(true, v.catalog); return }
        }
        for (const r of residentNpcs) {
          if (r.distanceTo(player.ent.pos) < 3) {
            dialog.show(RESIDENT_LINES[Math.floor(Math.random() * RESIDENT_LINES.length)])
            return
          }
        }
        for (const folk of folkNpcs) {
          if (folk.distanceTo(player.ent.pos) < 3) {
            const lines = [
              ['我们地下族人世世代代守护驱动核心。', '它一旦停转，世界就会毁灭……幸好有作者在。'],
              ['听说我们是最早的变形金刚的后代！', '你身上的齿轮味儿……很正宗！'],
              ['驱动核心的光看久了眼睛疼，但很安心。', '要合成装备的话，代码矿石是最硬的！'],
            ][Math.floor(Math.random() * 3)]
            dialog.show(lines)
            return
          }
        }
        const [tx, ty, tz] = STRUCT.teleporterPad
        if (Math.hypot(player.ent.pos.x - tx, player.ent.pos.z - tz) < 2.5 && Math.abs(player.ent.pos.y - ty) < 3) {
          teleporterUI.toggle(true)
          return
        }
        // 地下之城入口（地面井口）→ 下城；井底传送台 → 回地面
        const en = STRUCT.undercityEntrance, ext = STRUCT.undercityExit
        if (en && Math.hypot(player.ent.pos.x - en[0], player.ent.pos.z - en[2]) < 3 && Math.abs(player.ent.pos.y - en[1]) < 4) {
          player.ent.pos.x = ext[0]; player.ent.pos.y = ext[1] + 1; player.ent.pos.z = ext[2]
          player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
          audio.sfx('portal'); hud.toast('🕳️ 下到地下之城！这里有驱动核心和光明齿轮')
          return
        }
        if (ext && Math.hypot(player.ent.pos.x - ext[0], player.ent.pos.z - ext[2]) < 3 && Math.abs(player.ent.pos.y - ext[1]) < 4) {
          player.ent.pos.x = en[0]; player.ent.pos.y = en[1] + 1; player.ent.pos.z = en[2]
          player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
          audio.sfx('portal'); hud.toast('⬆️ 回到地面！')
          return
        }
      }
    }
    if (/^Digit[1-5]$/.test(code)) player.hotbarIndex = Number(code.slice(5)) - 1
    if (code === 'KeyF') interaction.onLeftDown()
    if (code === 'KeyR') interaction.onRightDown()
    if (DEBUG) {
      if (code === 'KeyP') { fly = !fly; hud.toast(fly ? '🕊 飞行开' : '🚶 飞行关') }
      if (code === 'KeyN') {
        const gy = (x, z) => ctx.world.surfaceAt(Math.floor(x), Math.floor(z)) + 1
        const spots = [
          ['中央城市·作者之塔', [POS.TOWER_C.x + 0.5, STRUCT.towerGround + 1, POS.TOWER_C.z + 10.5]],
          ['竹林', [POS.BAMBOO_C.x + 0.5, gy(POS.BAMBOO_C.x, POS.BAMBOO_C.z), POS.BAMBOO_C.z + 0.5]],
          ['巨石阵高地', [POS.HENGE_C.x + 0.5, STRUCT.hengeGround + 1, POS.HENGE_C.z + 14.5]],
          ['矿石群山', [POS.MOUNT_C.x + 0.5, gy(POS.MOUNT_C.x, POS.MOUNT_C.z), POS.MOUNT_C.z + 0.5]],
          ['鬼城遗址', [POS.GHOST_C.x + 0.5, gy(POS.GHOST_C.x, POS.GHOST_C.z), POS.GHOST_C.z + 0.5]],
          ['森林', [POS.FOREST_C.x + 0.5, gy(POS.FOREST_C.x, POS.FOREST_C.z), POS.FOREST_C.z + 0.5]],
          ['刷怪塔小岛', [STRUCT.teleporterPad[0] + 2.5, STRUCT.teleporterPad[1], STRUCT.teleporterPad[2] + 0.5]],
          ['地狱传送门', [POS.PORTAL_HELL.x + 0.5, gy(POS.PORTAL_HELL.x, POS.PORTAL_HELL.z) + 1, POS.PORTAL_HELL.z + 3.5]],
          ['地下之城', [POS.CORE.x - 6.5, STRUCT.undercity.floorY + 0.1, POS.CORE.z + 0.5]],
          ['作者小岛', [POS.HUT.x + 0.5, 108, POS.HUT.z - 5.5]],
          ['丛林神殿', [POS.JUNGLE_TEMPLE.x - 12.5, 110, POS.JUNGLE_TEMPLE.z + 0.5]],
          ['深海上空', [POS.KUNPENG_AIR.x, 145, POS.KUNPENG_AIR.z - 15]],
          ['海底宫殿', [POS.SEA_PALACE.x + 0.5, 30, POS.SEA_PALACE.z - 18.5]],
          ['禁地', [POS.FORBIDDEN.x + 0.5, 108, POS.FORBIDDEN.z - 14.5]],
          ['收服大陆', [366.5, gy(366, 180), 180.5]],
        ]
        window.__tpIdx = ((window.__tpIdx ?? -1) + 1) % spots.length
        const [name, p] = spots[window.__tpIdx]
        if (dims.active !== 'main') dims.switchTo('main', p)
        else { player.ent.pos.x = p[0]; player.ent.pos.y = p[1]; player.ent.pos.z = p[2] }
        player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
        hud.toast(`🧭 传送：${name}（再按 N 下一个）`)
      }
    }
  }

  // 滚轮切换快捷栏
  setInterval(() => {
    if (controls.wheelDelta !== 0) {
      const bar = player.hotbar()
      if (bar.length > 0) {
        player.hotbarIndex = ((player.hotbarIndex + Math.sign(controls.wheelDelta)) % bar.length + bar.length) % bar.length
      }
      controls.wheelDelta = 0
    }
  }, 80)

  // —— 存档 ——
  function doSave() {
    const edits = {}
    for (const id of ['main', 'hell', 'void']) {
      const dd = dims.get(id)
      edits[id] = dd.generated ? dd.world.serializeEdits() : (save?.edits?.[id] || [])
    }
    const pdata = player.serialize()
    if (dims.active !== 'main') pdata.pos = STRUCT.spawnPoint.slice()   // 读档总是回主世界
    saveGame({
      robotConfig,
      player: pdata,
      quests: quests.serialize(),
      tower2: towerCtrl.serialize(),
      chests: chests.serialize(),
      pets: pets.serialize(),
      dayTime: dayNight.serialize(),
      flags,
      boats: boats.serialize(),
      dim: 'main',   // 存档总是回主世界（简单可靠）
      edits,
    })
  }
  setInterval(doSave, CFG.AUTOSAVE_INTERVAL * 1000)
  addEventListener('beforeunload', doSave)

  // —— 开场 ——
  if (DEBUG) {
    controls.virtualLock = true
    window.__qiqi = {
      controls, player, ctx, dims, quests, towerCtrl, monsters, chests, drops, pets, boats,
      portals, dayNight, flags, npc, interaction, pickups, fluids, atlas, fx, STRUCT, HELL, VOID, ARENA, POS,
      giveBlock: (id, n) => player.addBlock(id, n),
      give: (id, n = 1) => player.addItem(id, n),
      gainGear: grantGear,
      grantArtifact,
      frame: t => frame(t),
    }
  }
  controls.requestLock()
  audio.ensure(); audio.setBgm('main')
  setTimeout(() => hud.toast('🔫 按 G 发射远程炮！集齐元素齿轮解锁更强弹药'), 4000)
  if (!save || quests.index === 0) quests.start()
  else if (quests.index === 7) { quests.advance() }  // 第一章通关档：直接开启第二章
  else hud.toast(`欢迎回来！当前任务：${quests.current().title}`)

  // ============ 主循环 ============
  let fly = false
  let last = performance.now()
  let fpsCount = 0, fpsTime = 0, fps = 60

  function frame(now) {
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000))
    last = now
    fpsCount++; fpsTime += dt
    if (fpsTime >= 0.5) { fps = Math.round(fpsCount / fpsTime); fpsCount = 0; fpsTime = 0 }

    const uiOpen = invUI.open || shopUI.open || teleporterUI.open
    const paused = uiOpen || (!controls.isLocked() && !dialog.open)
    pauseOverlay.style.display = (paused && !uiOpen) ? 'flex' : 'none'
    controls.enabled = controls.isLocked() && !dialog.open && !uiOpen
    controls.updateLook(dt)

    if (!paused) {
      if (fly) {
        const fwd = controls.forward(new THREE.Vector3())
        const right = controls.rightFlat(new THREE.Vector3())
        const sp = 30 * dt
        if (controls.keys.KeyW) { player.ent.pos.x += fwd.x * sp; player.ent.pos.y += fwd.y * sp; player.ent.pos.z += fwd.z * sp }
        if (controls.keys.KeyS) { player.ent.pos.x -= fwd.x * sp; player.ent.pos.y -= fwd.y * sp; player.ent.pos.z -= fwd.z * sp }
        if (controls.keys.KeyA) { player.ent.pos.x -= right.x * sp; player.ent.pos.z -= right.z * sp }
        if (controls.keys.KeyD) { player.ent.pos.x += right.x * sp; player.ent.pos.z += right.z * sp }
        if (controls.keys.Space) player.ent.pos.y += sp
        if (controls.keys.ShiftLeft) player.ent.pos.y -= sp
        player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
        player.model.group.position.set(player.ent.pos.x, player.ent.pos.y, player.ent.pos.z)
        player.model.group.rotation.y = -controls.yaw
      } else if (boats.riding) {
        boats.update(dt, controls)
        player.model.group.position.set(player.ent.pos.x, player.ent.pos.y, player.ent.pos.z)
        player.model.group.rotation.y = -controls.yaw
      } else {
        player.update(dt, controls, ctx.world)
      }

      // 掉出世界兜底
      if (player.fellOut && !player.dead) {
        player.fellOut = false
        if (dims.active === 'void') {
          player.takeDamage(20, null)
          player.ent.pos.x = VOID.spawn[0]; player.ent.pos.y = VOID.spawn[1]; player.ent.pos.z = VOID.spawn[2]
          player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
          hud.toast('🌌 掉进虚空！被传送回入口（-20 血）')
        } else {
          if (dims.active !== 'main') dims.switchTo('main', STRUCT.spawnPoint)
          player.respawn()
          hud.toast('🌀 作者把你捞了回来～')
        }
      }
      // 终极之地虚空提前检测（掉出圆盘）
      if (dims.active === 'void' && player.ent.pos.y < 10 && !player.dead) {
        player.takeDamage(20, null)
        player.ent.pos.x = VOID.spawn[0]; player.ent.pos.y = VOID.spawn[1]; player.ent.pos.z = VOID.spawn[2]
        player.ent.vel.x = player.ent.vel.y = player.ent.vel.z = 0
        hud.toast('🌌 掉进虚空！被传送回入口（-20 血）')
      }
      // 火海勇敢者试炼：走到正中央火消失+回满血（设定原文）
      if (dims.active === 'hell' && !flags.fireSeaCleared) {
        const [fx, , fz] = HELL.fireCenter
        if (Math.hypot(player.ent.pos.x - fx, player.ent.pos.z - fz) < 2) {
          flags.fireSeaCleared = true
          const hellWorld = dims.get('hell').world
          for (const [x, y, z] of HELL.fireSeaCells) hellWorld.set(x, y, z, B.AIR, false)
          player.hp = player.maxHp()
          hud.banner('🔥 勇敢者试炼通过！', '火焰熄灭了！生命全部恢复！烈火齿轮就在眼前！')
        }
      }

      interaction.update(dt)
      if (controls.enabled && controls.keys.KeyG) fireCannon()   // 按住 G / 触屏炮键连发（受冷却节流）
      monsters.update(dt)
      projectiles.update(dt)
      drops.update(dt)
      pets.update(dt)
      pickups.update(dt, dims.activeDim().group)
      npc.update(dt); hutNpc.update(dt)
      for (const f of folkNpcs) f.update(dt)
      if (dims.active === 'main') {
        for (const v of vendorNpcs) v.update(dt, ctx.world)
        for (const r of residentNpcs) r.update(dt, ctx.world)
      }
      portals.update(dt)
      towerCtrl.update()
      // 世界 boss 血条（塔外）：显示最近一只已仇恨的 boss
      if (dims.active !== 'arena') {
        let bossNear = null, bossD = 1e9
        for (const m of monsters.list) {
          if (!m.isBoss || m.dead || m.state !== 'chase') continue
          const d = Math.hypot(m.ent.pos.x - player.ent.pos.x, m.ent.pos.z - player.ent.pos.z)
          if (d < bossD) { bossD = d; bossNear = m }
        }
        if (bossNear) hud.showBoss(bossNear.bossName, bossNear.hp / bossNear.maxHp)
        else hud.hideBoss()
      }
      // 指南针 + 小地图：主世界显示地标方位与周边地形
      if (dims.active === 'main') {
        hud.updateCompass(controls.yaw, POIS, player.ent.pos)
        hud.updateMinimap(ctx.world, player.ent.pos.x, player.ent.pos.z, controls.yaw, CFG.SEA_LEVEL, POIS)
      } else {
        hud.updateCompass(null)
        hud.updateMinimap(null)
      }
      // 附近代码矿石扫描（字符环绕特效）
      codeScanT -= dt
      if (codeScanT <= 0) {
        codeScanT = 1.5
        const found = []
        const px0 = Math.floor(player.ent.pos.x), py0 = Math.floor(player.ent.pos.y), pz0 = Math.floor(player.ent.pos.z)
        for (let dy = -8; dy <= 8 && found.length < 6; dy++)
          for (let dz = -10; dz <= 10 && found.length < 6; dz++)
            for (let dx = -10; dx <= 10 && found.length < 6; dx++) {
              if (ctx.world.get(px0 + dx, py0 + dy, pz0 + dz) === B.CODE) found.push([px0 + dx, py0 + dy, pz0 + dz])
            }
        fx.setCodeBlocks(found)
      }
      quests.setFloor(dims.active === 'arena' ? towerCtrl.currentFloor : 0)
      dayNight.update(dt, dims.active === 'main', camera.position)
      zoneFx.update(dt)   // v4 区域标题/鬼城雾/环境音/粒子（必须在 dayNight 之后覆盖雾）
      fluids.tick(dt)
      if (player.ent.inWater && !window.__wasInWater && player.ent.vel.y < -3) audio.sfx('splash')
      window.__wasInWater = player.ent.inWater
      fx.update(dt)
      // 海面流动动画（纹理滚动 + 轻微呼吸）
      atlas.waterTexture.offset.x = (now * 0.000020) % 1
      atlas.waterTexture.offset.y = (now * 0.000013) % 1
      const wop = 0.60 + Math.sin(now * 0.0013) * 0.05
      for (const wm of atlas.waterMaterials) wm.opacity = wop
      checkEnding()

      // E 提示
      let prompt = null
      if (dims.active === 'main') {
        if (boats.riding) prompt = null
        else if (npc.distanceTo(player.ent.pos) < 3.5) prompt = '按 E 和作者说话'
        else if (hutNpc.distanceTo(player.ent.pos) < 4) prompt = '按 E 逛作者小店'
        else if (vendorNpcs.some(v => v.distanceTo(player.ent.pos) < 3.5)) prompt = '按 E 逛铺子'
        else if (residentNpcs.some(r => r.distanceTo(player.ent.pos) < 3)) prompt = '按 E 和居民聊聊'
        else if (folkNpcs.some(f => f.distanceTo(player.ent.pos) < 3)) prompt = '按 E 和地下族人聊聊'
        else if (boats.nearest(player.ent.pos)) prompt = '按 E 上船'
        else {
          const [tx, ty, tz] = STRUCT.teleporterPad
          const en = STRUCT.undercityEntrance, ext = STRUCT.undercityExit
          if (Math.hypot(player.ent.pos.x - tx, player.ent.pos.z - tz) < 2.5 && Math.abs(player.ent.pos.y - ty) < 3) prompt = '按 E 打开千层塔传送台'
          else if (en && Math.hypot(player.ent.pos.x - en[0], player.ent.pos.z - en[2]) < 3 && Math.abs(player.ent.pos.y - en[1]) < 4) prompt = '按 E 进入地下之城 🕳️'
          else if (ext && Math.hypot(player.ent.pos.x - ext[0], player.ent.pos.z - ext[2]) < 3 && Math.abs(player.ent.pos.y - ext[1]) < 4) prompt = '按 E 回到地面 ⬆️'
        }
      }
      hud.setPrompt(prompt)
    }

    ctx.chunks && ctx.chunks.update()
    ctx.chunks && ctx.chunks.updateVisibility(camera.position.x, camera.position.z, CFG.RENDER_DIST)
    controls.updateCamera(camera, ctx.world, player.headPos())
    fx.applyShake(camera)
    player.model.group.visible = (controls.camDist ?? CFG.CAM_DIST) > 1.2

    // HUD
    let chip = ''
    if (player.hasAbility('earth')) chip += player.quakeCooldown > 0 ? ` Q${player.quakeCooldown.toFixed(0)}` : ' Q✓'
    if (player.hasAbility('fire')) chip += player.fireCooldown > 0 ? ` C${player.fireCooldown.toFixed(0)}` : ' C✓'
    if (player.hasAbility('light')) chip += player.flashCooldown > 0 ? ` X${player.flashCooldown.toFixed(0)}` : ' X✓'
    if (player.hasAbility('dark')) chip += player.stealthCooldown > 0 ? ` Z${player.stealthCooldown.toFixed(0)}` : ' Z✓'
    hud.update(player, quests.hudText(), chip, dims.active === 'main' ? dayNight : null, pets)
    if (DEBUG) {
      const p = player.ent.pos
      hud.setDebug(`FPS ${fps} 维度 ${dims.active}\nx ${p.x.toFixed(1)} y ${p.y.toFixed(1)} z ${p.z.toFixed(1)}\n怪 ${monsters.list.length} 任务 ${quests.index} 塔 ${towerCtrl.maxCleared}\nP飞行 N传送点循环`)
    }

    renderer.render(scene, camera)
  }

  function loop(now) {
    requestAnimationFrame(loop)
    frame(now)
  }
  requestAnimationFrame(loop)
  if (DEBUG) setInterval(() => { if (document.hidden) frame(performance.now()) }, 33)
}
