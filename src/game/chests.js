// 宝箱注册表 v2（v4 重写）：
// - 每个箱子有稳定 id：齿轮箱显式传 'gear:<kind>'（坐标变了存档也不作废），
//   普通物品箱默认用坐标串做 id
// - reward 支持多种奖励：{ gear } 神秘齿轮 | { gears:n } 普通齿轮 |
//   { items:[[itemId,n]] } 物品 | { blocks:[[blockId,n]] } 方块 | { grant:fn } 自定义发放
//   可组合，另可带 { banner:[big,small] } 或 { toast } 展示
// 五个神秘齿轮走箱子（矿石/大地/潮涌/光明/神秘），
// 另外三个（森林/烈火/黑暗）是悬浮拾取物（mysteryPickup）
export class ChestRegistry {
  constructor() {
    this.chests = new Map()     // "x,y,z" -> { id, reward }
    this.opened = new Set()     // 已开箱 id
    this.onOpen = null          // (chest) => void  由 main 分发奖励
    this.onEmpty = null
  }
  register(pos, reward, opts = {}) {
    const key = pos.join(',')
    this.chests.set(key, { id: opts.id || key, reward })
  }
  open(x, y, z) {
    const c = this.chests.get(`${x},${y},${z}`)
    if (!c) { this.onEmpty && this.onEmpty(); return }
    if (this.opened.has(c.id)) { this.onEmpty && this.onEmpty(); return }
    this.opened.add(c.id)
    this.onOpen && this.onOpen(c)
  }
  serialize() { return [...this.opened] }
  deserialize(list) {
    if (!list) return
    for (const k of list) {
      // v3 旧档条目是裸齿轮种类（'ore' 等）→ 映射为稳定 id 'gear:<kind>'
      this.opened.add((k.includes(':') || k.includes(',')) ? k : 'gear:' + k)
    }
  }
}

export const MYSTERY_GEARS = {
  ore:     { name: '矿石变形齿轮', desc: '全身镀上矿石装甲，防御大增！按 T 变形！' },
  earth:   { name: '大地变形齿轮', desc: '跺脚引发地震！按 Q 释放！' },
  tide:    { name: '潮涌变形齿轮', desc: '解锁潜水形态！水中飞快、不怕泡水！按 T 变形！' },
  light:   { name: '光明变形齿轮', desc: '净化邪恶类怪物！按 X 释放致盲闪光！' },
  forest:  { name: '森林变形齿轮', desc: '藤蔓的生命力！从此缓慢自我修复！' },
  fire:    { name: '烈火变形齿轮', desc: '勇敢者的火焰！按 C 喷射烈焰！' },
  dark:    { name: '黑暗变形齿轮', desc: '影子的力量！按 Z 隐身！' },
  mystery: { name: '神秘变形齿轮', desc: '最强神器！八大能力全开，解锁全能形态！！' },
}
