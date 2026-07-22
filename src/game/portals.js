// 传送门逻辑：
// 暗黑地狱门（主世界）：门顶放金子自动开启，金子全额消耗，一人次进入返回（设定原文）
// 丛林神殿门（主世界）：走进自动启动 → 终极之地
// 地狱/终极之地返回门 → 主世界
import { B } from '../blocks.js'
import { STRUCT } from '../worldgen/structures.js'
import { HELL } from '../worldgen/hell.js'
import { VOID } from '../worldgen/voidland.js'
import { ARENA } from '../worldgen/arena.js'

export class PortalSystem {
  constructor(dims, player, hud, flags) {
    this.dims = dims
    this.player = player
    this.hud = hud
    this.flags = flags          // { portalCharged }
    this.cooldown = 0
    this.onHellEnter = null
    this.onVoidEnter = null
    this.towerNextFloor = null  // towerV2 注入：走进下一层门回调
    this.toHall = null          // 回塔大厅回调
  }

  // 放方块钩子：金子放上门顶 → 开门（无论放多少金子都全部消耗——设定原文）
  onBlockPlaced(id, x, y, z) {
    if (this.dims.active !== 'main' || id !== B.GOLD || !STRUCT.hellPortal) return
    const onTop = STRUCT.hellPortal.topCells.some(([tx, ty, tz]) => tx === x && ty === y && tz === z)
    if (!onTop) return
    const world = this.dims.get('main').world
    // 消耗门顶所有金子
    let consumed = 0
    for (const [tx, ty, tz] of STRUCT.hellPortal.topCells) {
      if (world.get(tx, ty, tz) === B.GOLD) { world.set(tx, ty, tz, B.AIR); consumed++ }
    }
    for (const [px, py, pz] of STRUCT.hellPortal.innerCells) world.set(px, py, pz, B.PORTAL, false)
    this.flags.portalCharged = true
    this.hud.toast(`🌀 传送门开启！消耗了 ${consumed} 块金子（放多少都会全部消耗哦）`)
  }

  chargeOff() {
    if (this.dims.active !== 'main') return
    const world = this.dims.get('main').world
    if (STRUCT.hellPortal) for (const [px, py, pz] of STRUCT.hellPortal.innerCells) world.set(px, py, pz, B.AIR, false)
    this.flags.portalCharged = false
  }

  inCells(cells, pos) {
    const bx = Math.floor(pos.x), by = Math.floor(pos.y + 0.5), bz = Math.floor(pos.z)
    return cells.some(([x, y, z]) => x === bx && (y === by || y === by + 1) && z === bz)
  }

  update(dt) {
    this.cooldown = Math.max(0, this.cooldown - dt)
    if (this.cooldown > 0) return
    const pos = this.player.ent.pos
    const dim = this.dims.active

    if (dim === 'main') {
      // 暗黑地狱门（需已充能）
      if (this.flags.portalCharged && STRUCT.hellPortal && this.inCells(STRUCT.hellPortal.innerCells, pos)) {
        this.cooldown = 1.5
        this.dims.ensure('hell')   // 先生成才有 HELL.spawn
        this.dims.switchTo('hell', HELL.spawn)
        this.hud.toast('🔥 进入暗黑地狱！（传送门只支持一人次进入返回）')
        this.onHellEnter && this.onHellEnter()
        return
      }
      // 丛林神殿门（常开，走进自动启动）
      if (STRUCT.templePortalCells.length && this.inCells(STRUCT.templePortalCells.map(([x, y, z]) => [x, y + 1, z]), pos)) {
        this.cooldown = 1.5
        this.dims.ensure('void')
        this.dims.switchTo('void', VOID.spawn)
        this.hud.toast('🌌 传送门自动启动……欢迎来到终极之地！小心虚空！')
        this.onVoidEnter && this.onVoidEnter()
        return
      }
    } else if (dim === 'hell') {
      if (this.inCells(HELL.returnPortalCells, pos)) {
        this.cooldown = 1.5
        const [bx, by, bz] = STRUCT.hellPortal.base
        this.dims.switchTo('main', [bx + 0.5, by + 1, bz + 2.5])
        this.chargeOff() // 一人次进返：回来后门关闭
        this.hud.toast('🌀 回到主世界。传送门已关闭（金子被消耗了）')
        return
      }
    } else if (dim === 'void') {
      if (this.inCells(VOID.returnPortalCells, pos)) {
        this.cooldown = 1.5
        const t = STRUCT.templePortalCells[4] || STRUCT.templePortalCells[0]
        this.dims.switchTo('main', [t[0] + 0.5, t[1] + 1, t[2] + 3.5])
        this.hud.toast('🌌 回到丛林神殿')
        return
      }
    } else if (dim === 'arena') {
      const world = this.dims.get('arena').world
      // 回大厅门
      if (this.inCells(ARENA.returnPortalCells, pos)) {
        this.cooldown = 1.5
        this.toHall && this.toHall()
        return
      }
      // 下一层门（清层后是 PORTAL）
      const bx = Math.floor(pos.x), by = Math.floor(pos.y + 0.5), bz = Math.floor(pos.z)
      if (ARENA.nextPortalCells.some(([x, y, z]) => x === bx && (y === by || y === by + 1) && z === bz) &&
          world.get(...ARENA.nextPortalCells[0]) === B.PORTAL) {
        this.cooldown = 1.5
        this.towerNextFloor && this.towerNextFloor()
      }
    }
  }
}
