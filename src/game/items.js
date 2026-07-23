// 物品（非方块）与合成配方数据层
import { B } from '../blocks.js'

export const ITEMS = {
  fruit:       { name: '水果', icon: '🍎', desc: '吃了回 20 血', use: 'heal', heal: 20 },
  seafood:     { name: '海货', icon: '🦐', desc: '吃了回 10 血', use: 'heal', heal: 10 },
  feather:     { name: '光羽', icon: '🪶', desc: '云端天使的羽毛，可以用来做床' },
  peng_potion: { name: '鹏之药水', icon: '🧪', desc: '喝下后水里行动自如！（鲲鹏掉落）', use: 'peng' },
  peng_wings:  { name: '鲲鹏之翼', icon: '🪽', desc: '装备后可以二段跳+按住空格滑翔', equip: 'wings' },
  boat_item:   { name: '船', icon: '🛶', desc: '对着水面右键放下，就能开船', boat: true },
  sword_wood:  { name: '木剑', icon: '🗡', atk: 3,  equip: 'sword' },
  sword_stone: { name: '石剑', icon: '🗡', atk: 6,  equip: 'sword' },
  sword_ore:   { name: '矿石剑', icon: '⚔️', atk: 10, equip: 'sword' },
  sword_gold:  { name: '黄金剑', icon: '⚔️', atk: 15, equip: 'sword' },
  sword_code:  { name: '代码神剑', icon: '🌟', atk: 25, equip: 'sword', desc: '用最硬的代码矿石打造！' },
  armor_wood:  { name: '木甲', icon: '🛡', def: 0.10, equip: 'armor' },
  armor_stone: { name: '石甲', icon: '🛡', def: 0.18, equip: 'armor' },
  armor_ore:   { name: '矿石甲', icon: '🛡', def: 0.28, equip: 'armor' },
  armor_gold:  { name: '黄金甲', icon: '🛡', def: 0.38, equip: 'armor' },
  armor_code:  { name: '代码神甲', icon: '✨', def: 0.50, equip: 'armor', desc: '最硬的护甲！' },
  // —— v4 六区神器 ——
  totem_artifact: { name: '神秘图腾', icon: '🗿', equip: 'artifact', dmgMult: 2,
    desc: '灰色身躯红色边框、两双红眼的古老神器——装备后所有主动伤害翻倍！' },
  red_eye: { name: '红眼睛', icon: '👁️', equip: 'ranged', laser: { dmg: 100, range: 40, cd: 0.9 },
    desc: '森林神殿的远古激光武器：瞬间射出红色激光（100 伤害）。装备后 G/🔫 替代机甲炮，卸下恢复' },
}

// 合成配方：need = { 方块id或物品id: 数量 }（方块用数字 id，物品用字符串）
export const RECIPES = [
  { out: 'sword_wood',  need: { [B.WOOD]: 3, [B.MUD]: 1 } },
  { out: 'sword_stone', need: { [B.STONE]: 3, [B.WOOD]: 2 } },
  { out: 'sword_ore',   need: { [B.ORE]: 3, [B.WOOD]: 2 } },
  { out: 'sword_gold',  need: { [B.GOLD]: 3, [B.WOOD]: 2 } },
  { out: 'sword_code',  need: { [B.CODE]: 3, [B.WOOD]: 2 } },
  { out: 'armor_wood',  need: { [B.WOOD]: 6 } },
  { out: 'armor_stone', need: { [B.STONE]: 6 } },
  { out: 'armor_ore',   need: { [B.ORE]: 6 } },
  { out: 'armor_gold',  need: { [B.GOLD]: 6 } },
  { out: 'armor_code',  need: { [B.CODE]: 6 } },
  { out: 'bed_block',   need: { [B.WOOD]: 3, feather: 2 }, outBlock: B.BED },
  { out: 'boat_item',   need: { [B.WOOD]: 5 } },
]

// 商店（货币=普通齿轮钱包）
export const SHOP_GOODS = [
  { id: 'fruit', price: 2 },
  { id: 'seafood', price: 2 },
  { id: 'boat_item', price: 15 },
  { id: 'bed_block', price: 10, outBlock: B.BED, name: '床', icon: '🛏' },
  { id: 'wood_bundle', price: 4, name: '木头×10', icon: '🪵', outBlockN: [B.WOOD, 10] },
  { id: 'stone_bundle', price: 4, name: '石头×10', icon: '🪨', outBlockN: [B.STONE, 10] },
]

// v4 中央城市四类商店 + 作者小岛老店
export const SHOP_CATALOGS = {
  island: { title: '🏪 作者小店（木屋神殿②）', goods: SHOP_GOODS,
    tip: '作者：「花掉的齿轮不影响等级哦——等级看的是你一共收集过多少！」' },
  food: { title: '🍎 食品铺', goods: [
    { id: 'fruit', price: 2 },
    { id: 'seafood', price: 2 },
  ], tip: '果婶：「打怪前吃饱饱！」' },
  build: { title: '🧱 建材铺', goods: [
    { id: 'wood_bundle', price: 4, name: '木头×10', icon: '🪵', outBlockN: [B.WOOD, 10] },
    { id: 'stone_bundle', price: 4, name: '石头×10', icon: '🪨', outBlockN: [B.STONE, 10] },
    { id: 'brick_bundle', price: 5, name: '石砖×10', icon: '🧱', outBlockN: [B.BRICK, 10] },
    { id: 'glow_bundle', price: 6, name: '荧光石×4', icon: '💡', outBlockN: [B.GLOWSTONE, 4] },
  ], tip: '砖叔：「盖房子记得留窗户！」' },
  combat: { title: '⚔️ 战斗装备铺', goods: [
    { id: 'sword_stone', price: 8 },
    { id: 'sword_ore', price: 16 },
    { id: 'armor_stone', price: 10 },
    { id: 'armor_ore', price: 18 },
  ], tip: '钢爷：「代码神装买不到——得自己合成，矿在北边山里！」' },
  transport: { title: '🛶 交通用品铺', goods: [
    { id: 'boat_item', price: 15 },
    { id: 'bed_block', price: 10, outBlock: B.BED, name: '床', icon: '🛏' },
  ], tip: '帆帆：「出海记得带床，睡一觉天就亮！」' },
}

// 神秘齿轮 → 形态/能力（设定 Q5：齿轮标记决定形态）
export const GEAR_INFO = {
  tide:    { name: '潮涌变形齿轮', mark: '🌊', gives: '潜水形态（水中飞快+不怕泡水）' },
  ore:     { name: '矿石变形齿轮', mark: '🛡', gives: '矿石装甲形态（减伤+攻击）' },
  earth:   { name: '大地变形齿轮', mark: '🦶', gives: 'Q 键跺脚地震' },
  forest:  { name: '森林变形齿轮', mark: '🌿', gives: '缓慢自我修复（被动）' },
  fire:    { name: '烈火变形齿轮', mark: '🔥', gives: 'C 键喷射烈焰' },
  light:   { name: '光明变形齿轮', mark: '✨', gives: 'X 键净化闪光（专克邪恶类）' },
  dark:    { name: '黑暗变形齿轮', mark: '🌑', gives: 'Z 键隐身' },
  mystery: { name: '神秘变形齿轮', mark: '💠', gives: '全能形态（八大能力全开，最强！）' },
}
export const GEAR_ORDER = ['tide', 'ore', 'earth', 'forest', 'fire', 'mystery', 'light', 'dark'] // 设定原文顺序
