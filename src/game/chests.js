// 宝箱：五个神秘齿轮走箱子（矿石/大地/潮涌/光明/神秘），
// 另外三个（森林/烈火/黑暗）是悬浮拾取物（mysteryPickup）
export class ChestRegistry {
  constructor() {
    this.chests = new Map()     // "x,y,z" -> { kind }
    this.opened = new Set()     // 已开的 kind（按种类记录，坐标变了存档也不作废）
    this.onOpen = null
    this.onEmpty = null
  }
  register(pos, kind) { this.chests.set(pos.join(','), { kind }) }
  open(x, y, z) {
    const c = this.chests.get(`${x},${y},${z}`)
    if (!c) { this.onEmpty && this.onEmpty(); return }
    if (this.opened.has(c.kind)) { this.onEmpty && this.onEmpty(); return }
    this.opened.add(c.kind)
    this.onOpen && this.onOpen(c.kind)
  }
  serialize() { return [...this.opened] }
  deserialize(list) { if (list) for (const k of list) this.opened.add(k) }
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
