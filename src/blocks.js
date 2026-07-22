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
  SCORCHED: 29, GLOWSTONE: 30,
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
]

export function isSolid(id) { return id !== B.AIR && BLOCKS[id].solid !== false }
export function isOpaque(id) { return id !== B.AIR && BLOCKS[id].opaque !== false }
export function isBreakable(id) { return id !== B.AIR && BLOCKS[id].hardness !== Infinity }
// 玩家可放置的方块
export const PLACEABLE = [B.MUD, B.WOOD, B.STONE, B.BRICK, B.SAND, B.ORE, B.GOLD, B.CODE, B.PLANK,
  B.MAGMA_STONE, B.MAGMA_WOOD, B.END_STONE, B.PALACE_BRICK, B.JUNGLE_BRICK, B.SCORCHED, B.GLOWSTONE, B.BED]
