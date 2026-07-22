// 任务链：第一章 0~7 + 第二章 8~19（作者引导，retro 兜底防死锁）
import { B } from '../blocks.js'
import { POS } from '../config.js'

export const QUESTS = [
  // ============ 第一章 ============
  {
    id: 0, title: '去中央高塔见作者！',
    lines: [
      '（有个声音在你脑海里响起……）',
      '新来的变形金刚，你好呀！我是这个世界的作者！',
      '来初始城镇正中央的高塔找我吧，塔门朝南开着！',
    ],
    progress: () => '走到高塔里，按 E 和作者说话',
  },
  {
    id: 1, title: '练习：挖 5 块泥巴，再放 3 块方块',
    lines: [
      '欢迎来到我的作者之塔！我是作者，这个世界是我创造的，嘿嘿。',
      '先教你最基本的本领：对准方块【按住左键】就能挖掉它！',
      '这个世界最软的是泥巴，最硬的是代码——代码可是我写的，是一种黑色的矿石哦。',
      '去外面挖 5 块泥巴（草地下面就是），再【按右键】把方块放回去 3 块试试！',
    ],
    progress: c => `挖泥巴 ${Math.min(c.mine, 5)}/5 · 放方块 ${Math.min(c.place, 3)}/3`,
  },
  {
    id: 2, title: '打败 3 只怪物，收集 5 个变形齿轮',
    lines: [
      '干得漂亮！你已经会挖会放了。',
      '塔外的平原上有怪物出没——注意看它们头顶的标签，那是我给怪物的分类！',
      '黑色的蜘蛛是【爆炸类】，靠近你会自爆，看到它闪白光就赶紧跑开！',
      '打败 3 只怪物，捡 5 个变形齿轮回来。在这个世界，等级是由变形齿轮决定的！',
    ],
    progress: c => `打怪 ${Math.min(c.kill, 3)}/3 · 齿轮 ${Math.min(c.gearsGained, 5)}/5`,
  },
  {
    id: 3, title: '宝座下一百格：找到矿石变形齿轮！',
    lines: [
      '你捡到齿轮的时候发现了吗？每个变形齿轮上都有标记——按 T 就能变成标记对应的形态！',
      '现在告诉你一个大秘密：传说中有八个神秘变形齿轮，是全世界最稀有的神器！',
      '第一个就藏在我的宝座正下方一百格的箱子里！',
      '挖开宝座前的那块金砖，一直往下挖！别怕，你摔不坏的，我保证。',
    ],
    progress: (c, ctx) => {
      const py = ctx.player.ent.pos.y
      if (ctx.player.hasGear('ore')) return '打开箱子！'
      const remain = Math.max(0, Math.ceil(py - ctx.oreChestY))
      return py < ctx.towerGround - 2 ? `还差 ${remain} 格！继续往下挖！` : '挖开宝座前的金砖，垂直往下！'
    },
  },
  {
    id: 4, title: '巨石阵下一百格：打碎第三块诡异木板！',
    lines: [
      '矿石变形齿轮到手！按 T 可以变成矿石装甲形态，防御超高！',
      '第二个神秘齿轮在城镇东边平原的巨石阵！',
      '从巨石阵正中间往下挖一百格，会看到诡异的木板……',
      '记住我的话：沿着木板挖，数到【第三块】，打碎它，你就会掉下去。别怕，掉下去就对了！',
    ],
    progress: (c, ctx) => {
      const py = ctx.player.ent.pos.y
      if (ctx.player.hasGear('earth')) return '打开箱子！'
      if (c.planksBroken > 0) return `已打碎诡异木板 ${c.planksBroken}/3`
      const remain = Math.max(0, Math.ceil(py - ctx.plank1Y))
      const nearHenge = Math.hypot(ctx.player.ent.pos.x - POS.HENGE_C.x, ctx.player.ent.pos.z - POS.HENGE_C.z) < 20
      return nearHenge ? (py < ctx.hengeGround - 2 ? `还差 ${remain} 格遇到第一块木板！` : '从巨石阵正中间往下挖！') : '去东边平原的巨石阵'
    },
  },
  {
    id: 5, title: '爬上刷怪塔，打败第 10 层的黑蛛王！',
    lines: [
      '大地变形齿轮到手！它的标记是一只跺脚的大脚丫——按 Q 可以跺脚引发地震！',
      '你已经很强了，去试试真正的挑战吧！',
      '城镇西边的刷怪塔，从一级怪物一直排到最强 boss——一共有一千层！',
      '塔里有我做的传送台，站上去选楼层就行。先打到第 10 层，会会小 boss 黑蛛王！',
    ],
    progress: c => c.floor > 0 ? `当前第 ${c.floor} 层 → 目标第 10 层` : '去西边刷怪塔，站上大厅的金色传送台',
  },
  {
    id: 6, title: '挑战：第 20 层的白骨神射！',
    lines: [
      '黑蛛王被你打败啦！你真是了不起的变形金刚！',
      '第 20 层的白骨神射会双连射，躲开它的箭！',
      '打败它，第一章就通关了！',
      '（悄悄告诉你：第 1000 层住着地狱魔龙，连我打半天才掉一滴血……以后再说吧！）',
    ],
    progress: c => c.floor > 0 ? `当前第 ${c.floor} 层 → 目标第 20 层` : '在传送台选择继续挑战！',
  },
  {
    id: 7, title: '第一章 · 完！',
    lines: [
      '你打败了白骨神射！第一章通关！！',
      '这个世界还有六个神秘变形齿轮、暗黑地狱、终极之地、收服大陆……都在等你！',
      '休息一下，冒险马上继续！',
    ],
    progress: () => '回作者之塔找作者，开启第二章！',
  },
  // ============ 第二章 ============
  {
    id: 8, title: '第二章开始！回塔见作者',
    lines: [
      '世界变大了！！海变成了真正的海——你可以游泳了！',
      '不过要小心：普通情况下只能涉水十分钟，泡太久会受伤的！',
      '按 B 打开你的新背包看看：物品、齿轮装备、合成、宠物，四个页面！',
      '对了，按 V 还能切换视角哦。来塔里找我，告诉你接下来去哪！',
    ],
    progress: () => '按 E 和作者说话（作者之塔）',
  },
  {
    id: 9, title: '出海！去南边作者小岛的木屋',
    lines: [
      '南边的海上有一座作者小岛，那是我隐居的地方！',
      '岛上的木屋是我的第二座神殿，我在那开了个小店，卖水果、海货、床、还有船！',
      '你可以游过去（记住：十分钟！），也可以合成一艘船（背包合成页，木头×5）开过去！',
      '船开起来可比游泳快多了。到了小岛按 E 跟我的木屋分身聊聊！',
    ],
    progress: (c, ctx) => {
      const d = Math.hypot(ctx.player.ent.pos.x - POS.HUT.x, ctx.player.ent.pos.z - POS.HUT.z)
      return d < 30 ? '快到了！找到木屋按 E' : '往南出海！（B 背包可以合成船）'
    },
  },
  {
    id: 10, title: '登陆收服大陆，收服第一只宠物！',
    lines: [
      '东边那块大大的陆地就是收服大陆！',
      '在收服大陆上，被你击败的怪物会自动变成你的宠物！',
      '记住规律：击败的怪物越强，得到的宠物就越强！',
      '去收服一只吧！背包的宠物页可以让它出战，蟹类还能骑！',
    ],
    progress: (c, ctx) => `已收服宠物 ${ctx.petCount()}/1`,
  },
  {
    id: 11, title: '丛林神殿→终极之地：夺取黑暗齿轮！',
    lines: [
      '收服大陆的丛林深处有一座神殿，正中央的传送门通往【终极之地】！',
      '走进去就会自动启动。里头有很多石柱，上面悬空飘着符号……',
      '那些符号对应着守卫怪物——怪物靠符号回血！先打碎符号，再打怪！',
      '黑暗变形齿轮就在正中央。小心：周围一片漆黑，往前乱跑会掉进虚空！',
    ],
    progress: (c, ctx) => ctx.player.hasGear('dark') ? '拿到了！' : '丛林神殿在收服大陆正中，先打碎符号再打怪！',
  },
  {
    id: 12, title: '金子开门！地狱树顶的森林齿轮',
    lines: [
      '接下来是【暗黑地狱】！传送门就在初始城镇南边的沙滩上。',
      '开门方法：往传送门顶部放一块金子，门就会自动开启！',
      '注意：无论放多少金子都会全部消耗，而且每次开门只够一人进入返回一次！',
      '地狱里岩浆湖圈的正中央有一棵大树——森林变形齿轮就在树顶！走岩浆石，别碰岩浆！',
    ],
    progress: (c, ctx) => ctx.player.hasGear('forest') ? '拿到了！' : '带上金子去城镇南滩的大门（挖金矿或用背包里的金子）',
  },
  {
    id: 13, title: '勇敢者试炼：火海正中央的烈火齿轮',
    lines: [
      '还是在暗黑地狱：岩浆湖圈旁边有一片火海！',
      '碰到火会受伤……但是我告诉你一个秘密：',
      '只要一直走到火海的正中央，火就会消失，还会恢复所有生命值！',
      '只有勇敢的人才能得到烈火变形齿轮。你敢吗？',
    ],
    progress: (c, ctx) => ctx.player.hasGear('fire') ? '拿到了！勇敢的孩子！' : '火海在岩浆湖圈东边，勇敢地走到正中央！',
  },
  {
    id: 14, title: '地下之城：驱动核心旁的光明齿轮',
    lines: [
      '该去见见地下族人了！初始城镇的地下藏着一座地下之城——像地球的地核一样！',
      '入口在城镇西北的平原上，有个石砖框的洞口，沿坡道一直往下走。',
      '城里有驱动核心——它驱动着整个世界，地下族人世世代代守护着它。',
      '光明变形齿轮就在驱动核心边缘的箱子里。顺便替我看看第三座神殿！',
    ],
    progress: (c, ctx) => ctx.player.hasGear('light') ? '拿到了！' : '入口在城镇西北平原（石砖框洞口），下去找驱动核心',
  },
  {
    id: 15, title: '挑战鲲鹏！喝下鹏之药水',
    lines: [
      '接下来的两个齿轮都在深海。但泡水十分钟可不够……',
      '深海的上空住着一只巨大的生物——鲲鹏！鲲是鱼、鹏是鸟，又是海洋又是天空！',
      '打败它，它会掉落两样宝贝：鹏之药水和鲲鹏之翼！',
      '喝下鹏之药水，你就能在水里行动自如——不限时间！深海在作者小岛的东南方向。',
    ],
    progress: (c, ctx) => ctx.player.pengPotion ? '喝下了鹏之药水！' : '去深海上空挑战鲲鹏（它在很高的天上盘旋）',
  },
  {
    id: 16, title: '海底宫殿：打败海底守卫者！',
    lines: [
      '潮涌变形齿轮藏在海洋最深处的海底宫殿里！',
      '守着它的是海底守卫者——外表像鹦鹉螺但大好几倍，全身带刺，',
      '下半身像鱿鱼一样有很多触手，眼睛长在铠甲旁边……我见过一次，好家伙。',
      '潜到深海盆地的最底下，找到宫殿，打败它！',
    ],
    progress: (c, ctx) => ctx.player.hasGear('tide') ? '拿到了！' : '潜入深海盆地最底部的宫殿（就在鲲鹏空域下方）',
  },
  {
    id: 17, title: '禁地：取回神秘变形齿轮！',
    lines: [
      '最后一个，也是最强的一个——神秘变形齿轮！',
      '从作者小岛一直往南游，游到世界的边界，那里是禁地。',
      '禁地的守卫……差点把我干死。正面打赢它很难很难。',
      '但是宝箱在禁地周围——聪明的变形金刚，可以想办法绕过它拿宝箱！',
    ],
    progress: (c, ctx) => ctx.player.hasGear('mystery') ? '拿到了！！' : '作者小岛往南到世界边界，宝箱在禁地周围（可以智取！）',
  },
  {
    id: 18, title: '大结局：回到驱动核心旁的作者神殿',
    lines: [
      '八个神秘变形齿轮……你居然真的集齐了！！',
      '还记得地下之城驱动核心旁边的那座神殿吗？那是我的第三座神殿。',
      '回到那里去。这个世界最后的秘密，在那里等你。',
    ],
    progress: (c, ctx) => `神秘齿轮 ${ctx.player.mysteryGears.length}/8 · 去地下之城的作者神殿`,
  },
  {
    id: 19, title: '第二章 · 完！自由探索！',
    lines: [
      '（大结局剧情已在神殿播放）',
      '接下来就是你的自由时间啦！',
      '千层塔在等你——第 1000 层的地狱魔龙，打半天才掉一滴血的那位！',
      '收服更强的宠物、合成代码神装、盖你自己的城堡……这个世界都是你的！',
    ],
    progress: () => '自由探索：千层塔 1000 层 · 收服宠物 · 代码神装',
  },
]

export class QuestManager {
  constructor(ctx) {
    this.ctx = ctx
    this.index = 0
    this.counters = { mine: 0, place: 0, kill: 0, gearsGained: 0, planksBroken: 0, floor: 0 }
    this.started = false
  }

  current() { return QUESTS[this.index] }

  start() {
    if (this.started) return
    this.started = true
    this.ctx.dialog.show(QUESTS[this.index].lines)
  }

  advance() {
    if (this.index >= QUESTS.length - 1) return
    this.index++
    const q = QUESTS[this.index]
    this.ctx.hud.toast(`📜 新任务：${q.title}`)
    this.ctx.dialog.show(q.lines)
    this.ctx.save && this.ctx.save()
    this.checkRetro()
  }

  // 回溯检查：乱序完成也能推进
  checkRetro() {
    const p = this.ctx.player
    const maxCleared = this.ctx.maxCleared ? this.ctx.maxCleared() : 0
    if (this.index === 3 && p.hasGear('ore')) return this.advance()
    if (this.index === 4 && p.hasGear('earth')) return this.advance()
    if (this.index === 5 && maxCleared >= 10) return this.advance()
    if (this.index === 6 && maxCleared >= 20) return this.advance()
    if (this.index === 10 && this.ctx.petCount() >= 1) return this.advance()
    if (this.index === 11 && p.hasGear('dark')) return this.advance()
    if (this.index === 12 && p.hasGear('forest')) return this.advance()
    if (this.index === 13 && p.hasGear('fire')) return this.advance()
    if (this.index === 14 && p.hasGear('light')) return this.advance()
    if (this.index === 15 && p.pengPotion) return this.advance()
    if (this.index === 16 && p.hasGear('tide')) return this.advance()
    if (this.index === 17 && p.hasGear('mystery')) return this.advance()
    if (this.index === 18 && this.ctx.flags && this.ctx.flags.endingSeen) return this.advance()
  }

  // —— 事件钩子 ——
  onTalk() {
    if (this.index === 0 || this.index === 8) { this.advance(); return true }
    return false
  }
  onHutTalk() {
    if (this.index === 9) { this.advance(); return true }
    return false
  }
  onMined(id) {
    if (this.index === 1 && id === B.MUD) { this.counters.mine++; this.checkQ1() }
    if (id === B.PLANK && this.index === 4 && this.counters.planksBroken < 3) {
      this.counters.planksBroken++
      if (this.counters.planksBroken === 3) this.ctx.hud.toast('第三块木板碎了！掉下去吧！')
      else this.ctx.hud.toast(`诡异木板 ${this.counters.planksBroken}/3`)
    }
    if (id === B.GOLD && this.index === 3) this.ctx.hud.toast('金砖挖开了！一直往下挖！')
  }
  onPlaced() { if (this.index === 1) { this.counters.place++; this.checkQ1() } }
  checkQ1() { if (this.index === 1 && this.counters.mine >= 5 && this.counters.place >= 3) this.advance() }
  onKill() { if (this.index === 2) { this.counters.kill++; this.checkQ2() } }
  onGears(n) { if (this.index === 2) { this.counters.gearsGained += n; this.checkQ2() } }
  checkQ2() { if (this.index === 2 && this.counters.kill >= 3 && this.counters.gearsGained >= 5) this.advance() }
  onGearGot(kind) {
    const map = { ore: 3, earth: 4, dark: 11, forest: 12, fire: 13, light: 14, tide: 16, mystery: 17 }
    if (map[kind] === this.index) this.advance()
    // 集齐八个：任何时候都提示
    if (this.ctx.player.mysteryGears.length === 8 && this.index < 18) {
      while (this.index < 18) this.index++
      const q = QUESTS[this.index]
      this.ctx.hud.toast(`📜 新任务：${q.title}`)
      this.ctx.dialog.show(q.lines)
    }
  }
  onPetCaptured() { if (this.index === 10) this.advance() }
  onPengPotion() { if (this.index === 15) this.advance() }
  onFloorCleared(f) {
    if (f >= 10 && this.index === 5) this.advance()
    if (f >= 20 && this.index === 6) {
      this.advance()
      this.ctx.onChapter1Complete && this.ctx.onChapter1Complete()
    }
  }
  onEnding() {
    if (this.index === 18) {
      this.ctx.flags.endingSeen = true
      this.advance()
    }
  }
  setFloor(f) { this.counters.floor = f }

  hudText() {
    const q = this.current()
    return { title: q.title, sub: q.progress(this.counters, this.ctx) }
  }

  serialize() { return { index: this.index, counters: this.counters } }
  deserialize(d) {
    if (!d) return
    this.index = d.index || 0
    Object.assign(this.counters, d.counters || {})
    this.started = this.index > 0
  }
}
