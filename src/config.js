// 全局常量配置 —— 所有可调数值集中在这里
export const CFG = {
  // 主世界尺寸（v2：384² 大世界，初始城镇岛原坐标不动）
  SX: 384, SY: 200, SZ: 384,
  CHUNK: 16,
  SEED: 20260722,
  SURFACE: 112,                 // 初始城镇岛地表高度
  SEA_LEVEL: 101,               // 海面高度（真实水体）
  ISLAND_CX: 80, ISLAND_CZ: 80, // 初始城镇岛心
  ISLAND_R_FULL: 58,
  ISLAND_R_EDGE: 72,

  // 渲染
  FOG_NEAR: 120, FOG_FAR: 230,
  RENDER_DIST: 176,             // chunk 显隐距离（配合雾遮住边界）
  SKY_COLOR: 0x87c9f0,
  MESH_BUDGET_PER_FRAME: 2,
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
  MONSTER_CAP: 14,
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
  SAVE_KEY: 'qiqi_save_v2',
  SAVE_KEY_V1: 'qiqi_save_v1',
  AUTOSAVE_INTERVAL: 5,
}

// 维度定义
export const DIMS = {
  main:  { sx: 384, sy: 200, sz: 384 },
  hell:  { sx: 192, sy: 96,  sz: 192 },
  void:  { sx: 128, sy: 80,  sz: 128 },
  arena: { sx: 48,  sy: 32,  sz: 48 },
}

// 关键坐标（结构生成与任务共同引用）
export const POS = {
  // —— 初始城镇岛（第一章，原坐标不动）——
  TOWER_C: { x: 80, z: 80 },
  SPAWN: { x: 80.5, z: 93.5 },
  THRONE: { x: 80, z: 80 },
  GOLD_TILE: { x: 80, z: 82 },
  NPC: { x: 77.5, z: 80.5 },
  HENGE_C: { x: 128, z: 80 },
  SPAWNER_C: { x: 32, z: 80 },
  ORE_ROOM_DEPTH: 100,
  EARTH_PLANK_DEPTH: 100,

  // —— 第二章主世界 ——
  PORTAL_HELL: { x: 80, z: 146 },          // 暗黑地狱传送门（城镇南滩）
  AUTHOR_ISLE: { x: 96, z: 240, r: 26 },   // 作者小岛
  HUT: { x: 96, z: 240 },                  // 木屋神殿②（商店）
  TAME_LAND: { x: 280, z: 176, rx: 86, rz: 78 }, // 收服大陆（椭圆）
  JUNGLE_TEMPLE: { x: 280, z: 176 },       // 丛林神殿（终极之地传送门）
  DEEP_SEA: { x: 208, z: 312, r: 60 },     // 深海盆地
  SEA_PALACE: { x: 208, z: 312 },          // 海底宫殿（潮涌 boss）
  KUNPENG_AIR: { x: 208, y: 150, z: 312 }, // 鲲鹏空域
  FORBIDDEN: { x: 96, z: 362 },            // 禁地中心
  FORBIDDEN_CHEST: { x: 112, z: 368 },     // 神秘齿轮宝箱（禁地周围、巡逻圈外）
  UNDERCITY: { x: 120, y: 18, z: 120 },    // 地下之城地板
  CORE: { x: 120, z: 120 },                // 驱动核心
  SHRINE3: { x: 132, z: 120 },             // 作者神殿③
  LIGHT_CHEST: { x: 125, z: 116 },         // 光明齿轮箱（驱动核心边缘）
  UNDERCITY_STAIR: { x: 104, z: 104 },     // 地面→地下之城竖井入口

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
