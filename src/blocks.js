// 方块注册表 v2 —— 硬度谱系遵循设定集：泥巴最软，代码矿石最硬
// 字段：name、hardness(秒,Infinity=不可破坏)、tiles{top,side,bottom}、drop、
//       solid(默认true,false=可穿过)、opaque(默认true,false=不遮挡邻面)、
//       fluid(液体)、damage(触碰伤害/秒)

export const B = {
  AIR: 0, GRASS: 1, MUD: 2, WOOD: 3, LEAVES: 4, STONE: 5, BRICK: 6,
  ORE: 7, GOLD: 8, CODE: 9, PLANK: 10, CHEST: 11, THRONE: 12,
  BEDROCK: 13, SAND: 14,
  // —— 第二章新增 ——
  WATER: 15, LAVA: 16, MAGMA_STONE: 17, MAGMA_WOOD: 18, MAGMA_LEAVES: 19,
  FIRE: 20, PORTAL: 21, PORTAL_FRAME: 22, END_STONE: 23, SYMBOL: 24,
  BED: 25, PALACE_BRICK: 26, JUNGLE_BRICK: 27, CORE_BLOCK: 28,
  SCORCHED: 29, GLOWSTONE: 30, WATER_FLOW: 31,
  PRISMARINE: 32, SEA_LANTERN: 33, CORAL_PINK: 34, CORAL_BLUE: 35, SEAWEED: 36, PALACE_PILLAR: 37,
  // —— v4 六区重建新增 ——
  BAMBOO: 38, BAMBOO_LEAVES: 39, ORE_DIAMOND: 40, ORE_RUBY: 41, ORE_SAPPHIRE: 42,
  TOTEM_BLOCK: 43, ASH_BRICK: 44, ROOF_TILE: 45, FUR_WHITE: 46, FUR_BLACK: 47,
  CARPET_RED: 48, MURAL: 49, MARKET_CLOTH: 50,
  // —— v5 装饰方块 ——
  FLOWER_RED: 51, FLOWER_YELLOW: 52, TALL_GRASS: 53, FENCE: 54, GRAVEL: 55, CAMPFIRE: 56,
}

export const BLOCKS = [
  { name: '空气',     hardness: 0,        tiles: null, drop: 0, solid: false, opaque: false },
  { name: '草方块',   hardness: 0.25,     tiles: { top: 0, side: 1, bottom: 2 }, drop: B.MUD },
  { name: '泥巴',     hardness: 0.2,      tiles: { top: 2, side: 2, bottom: 2 }, drop: B.MUD },
  { name: '木头',     hardness: 0.5,      tiles: { top: 4, side: 3, bottom: 4 }, drop: B.WOOD },
  { name: '树叶',     hardness: 0.15,     tiles: { top: 5, side: 5, bottom: 5 }, drop: 0 },
  { name: '石头',     hardness: 0.9,      tiles: { top: 6, side: 6, bottom: 6 }, drop: B.STONE },
  { name: '石砖',     hardness: 1.2,      tiles: { top: 7, side: 7, bottom: 7 }, drop: B.BRICK },
  { name: '普通矿石', hardness: 1.5,      tiles: { top: 8, side: 8, bottom: 8 }, drop: B.ORE },
  { name: '金子',     hardness: 1.5,      tiles: { top: 9, side: 9, bottom: 9 }, drop: B.GOLD },
  { name: '代码矿石', hardness: 3.0,      tiles: { top: 10, side: 10, bottom: 10 }, drop: B.CODE },
  { name: '诡异木板', hardness: 0.6,      tiles: { top: 11, side: 11, bottom: 11 }, drop: B.PLANK },
  { name: '箱子',     hardness: Infinity, tiles: { top: 13, side: 12, bottom: 13 }, drop: 0 },
  { name: '金座',     hardness: Infinity, tiles: { top: 14, side: 14, bottom: 14 }, drop: 0 },
  { name: '基岩',     hardness: Infinity, tiles: { top: 15, side: 15, bottom: 15 }, drop: 0 },
  { name: '沙子',     hardness: 0.25,     tiles: { top: 16, side: 16, bottom: 16 }, drop: B.SAND },
  // —— 第二章 ——
  { name: '水',       hardness: Infinity, tiles: { top: 17, side: 17, bottom: 17 }, drop: 0, solid: false, opaque: false, fluid: true },
  { name: '岩浆',     hardness: Infinity, tiles: { top: 18, side: 18, bottom: 18 }, drop: 0, solid: false, fluid: true, damage: 6 },
  { name: '岩浆石',   hardness: 1.0,      tiles: { top: 19, side: 19, bottom: 19 }, drop: B.MAGMA_STONE },
  { name: '岩浆树干', hardness: 0.6,      tiles: { top: 20, side: 20, bottom: 20 }, drop: B.MAGMA_WOOD },
  { name: '岩浆树叶', hardness: 0.15,     tiles: { top: 21, side: 21, bottom: 21 }, drop: 0 },
  { name: '火',       hardness: 0.1,      tiles: { top: 22, side: 22, bottom: 22 }, drop: 0, solid: false, opaque: false, damage: 3 },
  { name: '传送门',   hardness: Infinity, tiles: { top: 23, side: 23, bottom: 23 }, drop: 0, solid: false },
  { name: '门框石',   hardness: Infinity, tiles: { top: 24, side: 24, bottom: 24 }, drop: 0 },
  { name: '暗黑石',   hardness: 1.2,      tiles: { top: 25, side: 25, bottom: 25 }, drop: B.END_STONE },
  { name: '符号',     hardness: 0.8,      tiles: { top: 26, side: 26, bottom: 26 }, drop: 0 },
  { name: '床',       hardness: 0.4,      tiles: { top: 27, side: 28, bottom: 4 }, drop: B.BED },
  { name: '海宫砖',   hardness: 1.5,      tiles: { top: 29, side: 29, bottom: 29 }, drop: B.PALACE_BRICK },
  { name: '丛林砖',   hardness: 1.2,      tiles: { top: 30, side: 30, bottom: 30 }, drop: B.JUNGLE_BRICK },
  { name: '驱动核心', hardness: Infinity, tiles: { top: 31, side: 31, bottom: 31 }, drop: 0 },
  { name: '焦黑土',   hardness: 0.4,      tiles: { top: 32, side: 32, bottom: 32 }, drop: B.SCORCHED },
  { name: '荧光石',   hardness: 0.8,      tiles: { top: 33, side: 33, bottom: 33 }, drop: B.GLOWSTONE },
  { name: '流动的水', hardness: Infinity, tiles: { top: 17, side: 17, bottom: 17 }, drop: 0, solid: false, opaque: false, fluid: true },
  { name: '海晶石',   hardness: 1.4,      tiles: { top: 34, side: 34, bottom: 34 }, drop: B.PRISMARINE },
  { name: '海晶灯',   hardness: 0.8,      tiles: { top: 35, side: 35, bottom: 35 }, drop: B.SEA_LANTERN },
  { name: '粉珊瑚',   hardness: 0.3,      tiles: { top: 36, side: 36, bottom: 36 }, drop: 0, opaque: false },
  { name: '蓝珊瑚',   hardness: 0.3,      tiles: { top: 37, side: 37, bottom: 37 }, drop: 0, opaque: false },
  { name: '海草',     hardness: 0.1,      tiles: { top: 38, side: 38, bottom: 38 }, drop: 0, solid: false, opaque: false },
  { name: '海宫柱',   hardness: 1.6,      tiles: { top: 39, side: 39, bottom: 39 }, drop: B.PALACE_PILLAR },
  // —— v4 六区重建 ——
  { name: '竹子',       hardness: 0.4,    tiles: { top: 40, side: 40, bottom: 40 }, drop: B.BAMBOO },
  { name: '竹叶',       hardness: 0.15,   tiles: { top: 41, side: 41, bottom: 41 }, drop: 0 },
  { name: '钻石矿石',   hardness: 2.5,    tiles: { top: 42, side: 42, bottom: 42 }, drop: B.ORE_DIAMOND },
  { name: '红宝石矿石', hardness: 2.5,    tiles: { top: 43, side: 43, bottom: 43 }, drop: B.ORE_RUBY },
  { name: '蓝宝石矿石', hardness: 2.5,    tiles: { top: 44, side: 44, bottom: 44 }, drop: B.ORE_SAPPHIRE },
  { name: '神秘图腾',   hardness: 3.0,    tiles: { top: 45, side: 46, bottom: 45 }, drop: 0 },  // 挖掘走特判发放神器
  { name: '焦黑砖',     hardness: 1.2,    tiles: { top: 47, side: 47, bottom: 47 }, drop: B.ASH_BRICK },
  { name: '陶瓦',       hardness: 0.8,    tiles: { top: 48, side: 48, bottom: 48 }, drop: B.ROOF_TILE },
  { name: '白绒块',     hardness: 0.4,    tiles: { top: 49, side: 49, bottom: 49 }, drop: B.FUR_WHITE },
  { name: '黑绒块',     hardness: 0.4,    tiles: { top: 50, side: 50, bottom: 50 }, drop: B.FUR_BLACK },
  { name: '红地毯',     hardness: 0.3,    tiles: { top: 51, side: 51, bottom: 51 }, drop: B.CARPET_RED },
  { name: '壁画',       hardness: 1.0,    tiles: { top: 52, side: 52, bottom: 52 }, drop: B.MURAL },
  { name: '摊布',       hardness: 0.3,    tiles: { top: 53, side: 53, bottom: 53 }, drop: B.MARKET_CLOTH },
  // —— v5 装饰方块 ——
  { name: '红花',       hardness: 0.1,    tiles: { top: 54, side: 54, bottom: 54 }, drop: B.FLOWER_RED, solid: false, opaque: false },
  { name: '黄花',       hardness: 0.1,    tiles: { top: 55, side: 55, bottom: 55 }, drop: B.FLOWER_YELLOW, solid: false, opaque: false },
  { name: '高草',       hardness: 0.1,    tiles: { top: 56, side: 56, bottom: 56 }, drop: 0, solid: false, opaque: false },
  { name: '栅栏',       hardness: 0.5,    tiles: { top: 57, side: 57, bottom: 57 }, drop: B.FENCE, opaque: false },
  { name: '砾石',       hardness: 0.6,    tiles: { top: 58, side: 58, bottom: 58 }, drop: B.GRAVEL },
  { name: '篝火',       hardness: 0.4,    tiles: { top: 59, side: 59, bottom: 59 }, drop: 0, opaque: false, damage: 2 },
]

export function isSolid(id) { return id !== B.AIR && BLOCKS[id].solid !== false }
export function isOpaque(id) { return id !== B.AIR && BLOCKS[id].opaque !== false }
export function isBreakable(id) { return id !== B.AIR && BLOCKS[id].hardness !== Infinity }
// 玩家可放置的方块
export const PLACEABLE = [B.MUD, B.WOOD, B.STONE, B.BRICK, B.SAND, B.ORE, B.GOLD, B.CODE, B.PLANK,
  B.MAGMA_STONE, B.MAGMA_WOOD, B.END_STONE, B.PALACE_BRICK, B.JUNGLE_BRICK, B.SCORCHED, B.GLOWSTONE, B.BED,
  B.BAMBOO, B.ORE_DIAMOND, B.ORE_RUBY, B.ORE_SAPPHIRE, B.ASH_BRICK, B.ROOF_TILE,
  B.FUR_WHITE, B.FUR_BLACK, B.CARPET_RED, B.MURAL, B.MARKET_CLOTH,
  B.FLOWER_RED, B.FLOWER_YELLOW, B.TALL_GRASS, B.FENCE, B.GRAVEL]
