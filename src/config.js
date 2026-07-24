// 初始岛心（唯一真源）——未来挪岛/加新岛只改这一个基准点，所有初始岛坐标 isl() 派生
export const IC = { x: 320, z: 320 }
const CITY_HALF = 48                 // 城墙半宽（v5 扩大：城 96×96）
const isl = (dx, dz, e = {}) => ({ x: IC.x + dx, z: IC.z + dz, ...e })

// 全局常量配置 —— 所有可调数值集中在这里
export const CFG = {
  // 主世界尺寸（v5：1024² 大世界，为大幅扩大的初始岛 + 未来更多大岛留余地）
  // ⚠️ 内存：1024²×200 ≈ 200MB 扁平数组；若低端安卓 OOM，改回 768 即可（单常量）
  SX: 1024, SY: 200, SZ: 1024,
  CHUNK: 16,
  SEED: 20260722,
  SURFACE: 112,                   // 初始城镇岛地表高度
  SEA_LEVEL: 101,                 // 海面高度（真实水体）
  ISLAND_CX: IC.x, ISLAND_CZ: IC.z, // 初始城镇岛心（= IC）
  ISLAND_R_FULL: 210,             // v5：大幅扩岛（满高陆地半径，岛盘 [80,560]）
  ISLAND_R_EDGE: 240,

  // 渲染（v5 大岛：陆地更密，收一点渲染距离控 draw call，雾遮边界）
  FOG_NEAR: 96, FOG_FAR: 176,
  RENDER_DIST: 136,             // chunk 显隐距离（配合雾遮住边界）
  SKY_COLOR: 0x87c9f0,
  MESH_BUDGET_PER_FRAME: 3,
  LOAD_CHUNKS_PER_FRAME: 8,

  // 玩家物理
  GRAVITY: -25,
  JUMP_SPEED: 8.5,
  WALK_SPEED: 4.3,
  TERMINAL_VY: -40,
  PLAYER_W: 0.6, PLAYER_H: 1.8,
  CAR_W: 0.9, CAR_H: 1.0,
  CAR_SPEED_MULT: 1.8,
  CAR_JUMP_MULT: 0.7,
  ARMOR_SPEED_MULT: 0.85,
  EYE_HEIGHT: 1.6,
  CAM_DIST: 6,

  // 水
  SWIM_UP_SPEED: 4,
  WATER_GRAVITY_MULT: 0.18,
  WATER_DRAG: 2.5,
  WATER_SPEED_MULT: 0.6,        // 水中水平速度倍率
  PENG_SPEED_MULT: 1.5,         // 鹏之药水游速加成
  DIVE_SPEED_MULT: 2.0,         // 潜水形态
  WATER_WARN: 480,              // 泡水黄色提示（秒）
  WATER_LIMIT: 600,             // 涉水十分钟（设定第八章）
  WATER_DAMAGE: 2,              // 超时后每秒扣血
  WATER_RECOVER_MULT: 2,        // 离水后计时恢复速度

  // 交互
  REACH_BLOCK: 5,
  REACH_ATTACK: 3.5,
  ATTACK_COOLDOWN: 0.4,

  // 玩家数值
  BASE_HP: 100, HP_PER_LEVEL: 10,
  BASE_ATK: 10, ATK_PER_LEVEL: 2,
  GEARS_PER_LEVEL: 5,           // 等级 = 1 + floor(totalGears / 5)
  MAX_LEVEL: 40,
  REGEN_DELAY: 5, REGEN_PER_SEC: 2,
  ARMOR_DAMAGE_MULT: 0.5,
  ARMOR_ATK_BONUS: 5,
  QUAKE_RADIUS: 4, QUAKE_COOLDOWN: 6, QUAKE_DMG_MULT: 1.5,
  FIRE_BREATH_COOLDOWN: 4, FIRE_BREATH_RANGE: 6,   // 烈火齿轮 C 喷火
  FLASH_COOLDOWN: 10, FLASH_RADIUS: 8, FLASH_DMG: 25, // 光明齿轮 X 净化闪光
  STEALTH_DURATION: 8, STEALTH_COOLDOWN: 20,       // 黑暗齿轮 Z 隐身
  FOREST_REGEN: 1,                                  // 森林齿轮被动自愈/秒

  // 环境伤害
  LAVA_DPS: 6, FIRE_DPS: 3,

  // 怪物
  MONSTER_CAP: 20,   // v4：六区同屏更多怪
  AGGRO_RANGE: 12,
  PLAINS_SPAWN_INTERVAL: 20,
  PLAINS_MAX: 4,

  // 昼夜（仅主世界，秒）
  DAY_LENGTH: 600,
  NIGHT_START: 0.5, NIGHT_END: 0.95,
  NIGHT_SPAWN_MULT: 2,

  // 宠物
  PET_CAP: 12,
  PET_HP_RATIO: 0.8, PET_ATK_RATIO: 0.7,
  MOUNT_SPEED_MULT: 1.6,

  // 船
  BOAT_SPEED: 7,

  // 刷怪塔 v2
  TOWER_FLOORS: 1000,           // 设定：共 1000 层
  DRAGON_HP: 250000, DRAGON_ATK: 60,

  // 存档
  SAVE_KEY: 'qiqi_save_v3',
  SAVE_KEY_V2: 'qiqi_save_v2',
  SAVE_KEY_V1: 'qiqi_save_v1',
  AUTOSAVE_INTERVAL: 5,
}

// 维度定义（main 从 CFG 派生，杜绝尺寸双写漂移）
export const DIMS = {
  main:  { sx: CFG.SX, sy: CFG.SY, sz: CFG.SZ },
  hell:  { sx: 192, sy: 96,  sz: 192 },
  void:  { sx: 128, sy: 80,  sz: 128 },
  arena: { sx: 48,  sy: 32,  sz: 48 },
}

// 关键坐标（结构生成与任务共同引用）
// v5 布局：初始岛全部相对岛心 IC 派生（isl(dx,dz)），远海地标等比外扩
export const POS = {
  // —— 初始城镇岛（全部 IC 派生）——
  TOWER_C: isl(0, 0),
  SPAWN: isl(0.5, 24),            // 城南大道出生点
  THRONE: isl(0, 0),
  GOLD_TILE: isl(0, 2),
  NPC: isl(-2.5, 0.5),
  HENGE_C: isl(-96, -96),         // 巨石阵：西北高地
  SPAWNER_C: isl(-256, 0),        // 刷怪塔小岛中心（= SPAWNER_ISLE）
  ORE_ROOM_DEPTH: 100,
  EARTH_PLANK_DEPTH: 100,

  // —— 第二章远海地标（等比外扩，保留相对布局）——
  PORTAL_HELL: isl(150, 150),                    // 东南海岸 (470,470)
  AUTHOR_ISLE: isl(-40, 360, { r: 30 }),         // 作者小岛 (280,680)
  HUT: isl(-40, 360),                            // 木屋神殿②
  TAME_LAND: isl(380, 90, { rx: 90, rz: 86 }),   // 收服大陆 (700,410)
  JUNGLE_TEMPLE: isl(380, 90),                   // 丛林神殿
  DEEP_SEA: isl(250, 400, { r: 70 }),            // 深海盆地 (570,720)
  SEA_PALACE: isl(250, 400),                     // 海底宫殿
  KUNPENG_AIR: { x: IC.x + 250, y: 150, z: IC.z + 400 }, // 鲲鹏空域 (570,150,720)
  FORBIDDEN: isl(-30, 470),                      // 禁地中心 (290,790)
  FORBIDDEN_CHEST: isl(-16, 476),                // 神秘齿轮宝箱 (304,796)

  // ①中央城市（城墙 IC±CITY_HALF，罩住地下城居中空腔）
  CITY: { x0: IC.x - CITY_HALF, z0: IC.z - CITY_HALF, x1: IC.x + CITY_HALF, z1: IC.z + CITY_HALF },
  CITY_GATES: [[IC.x, IC.z - CITY_HALF], [IC.x, IC.z + CITY_HALF], [IC.x - CITY_HALF, IC.z], [IC.x + CITY_HALF, IC.z]], // 北/南/西/东
  // ②竹林（西）
  BAMBOO_C: isl(-120, 6, { r: 26 }),             // (200,326)
  BAMBOO_TEMPLE: isl(-130, 20),                  // (190,340)
  BAMBOO_CHEST: isl(-108, -14),                  // (212,306)
  // ④矿石群山（北）
  MOUNT_C: isl(0, -155),                          // (320,165)
  MOUNT_RECT: { x0: IC.x - 46, z0: IC.z - 185, x1: IC.x + 46, z1: IC.z - 125 }, // 274..366 × 135..195
  MOUNT_PEAKS: [[290, 150, 152, 26], [330, 140, 158, 30], [360, 162, 150, 24], [296, 186, 145, 20], [352, 190, 148, 22]], // [x,z,峰顶高,半径]
  // ⑤鬼城遗址（东）
  GHOST_RECT: { x0: IC.x + 127, z0: IC.z - 28, x1: IC.x + 177, z1: IC.z + 40 }, // 447..497 × 292..360
  GHOST_C: isl(152, 6),                           // (472,326)
  // ⑥森林（南）
  FOREST_RECT: { x0: IC.x - 38, z0: IC.z + 125, x1: IC.x + 38, z1: IC.z + 175 }, // 282..358 × 445..495
  FOREST_C: isl(0, 150),                          // (320,470)
  GIANT_TREE: isl(14, 156),                       // (334,476)
  FOREST_TEMPLE: isl(-18, 156),                   // (302,476)
  // 刷怪塔独立小岛（西侧近海）+ 海峡 + 石桥
  SPAWNER_ISLE: isl(-256, 0, { r: 16 }),          // (64,320)
  STRAIT: { x: IC.x - 232, z: IC.z, rx: 14, rz: 36 }, // (88,320) 西侧海峡
  BRIDGE: { x0: IC.x - 248, x1: IC.x - 200, z0: IC.z - 1, z1: IC.z + 1 }, // 72..120 × 319..321 石桥（早起覆盖小岛下坡）

  // 地下之城（居中于岛心，消灭 v4 偏心腔历史坑）
  UNDERCITY_CAVITY: { cx: IC.x, cz: IC.z, half: 40, floorY: 18 }, // 空腔 280..360
  UNDERCITY: { x: IC.x, y: 18, z: IC.z },         // 地下之城地板（腔心=岛心=城心）
  CORE: isl(0, 0),                                // 驱动核心
  SHRINE3: isl(12, 0),                            // 作者神殿③
  LIGHT_CHEST: isl(4, -4),                        // 光明齿轮箱
  UNDERCITY_STAIR: isl(-8, -4),                   // 地面→地下城竖井入口（城内广场）

  // —— 暗黑地狱 ——
  HELL_SPAWN: { x: 30, z: 96 },            // 地狱入口平台
  HELL_LAKE: { x: 96, z: 96, r: 24 },      // 岩浆湖圈（中央树=森林齿轮）
  HELL_FIRE_SEA: { x: 150, z: 96, r: 18 }, // 火海（正中央=烈火齿轮）
  HELL_FORT1: { x: 48, z: 48 },            // 堡垒（恶龙栖息）
  HELL_FORT2: { x: 48, z: 144 },

  // —— 终极之地 ——
  VOID_SPAWN: { x: 64, z: 20 },            // 终极之地入口
  VOID_CENTER: { x: 64, z: 64 },           // 正中央（黑暗齿轮）
  VOID_DISK_R: 56, VOID_FLOOR_Y: 30,
}
