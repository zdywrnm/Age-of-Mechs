// 千层塔传送台 UI：打到哪层就可以传送到哪层（淇淇拍板）
import { CFG } from '../config.js'

export class TeleporterUI {
  constructor(tower, hud, controls, onTeleport) {
    this.tower = tower
    this.hud = hud
    this.controls = controls
    this.onTeleport = onTeleport   // (floor) => {}
    this.open = false
    const el = document.createElement('div')
    el.className = 'inv-panel'
    el.style.display = 'none'
    el.innerHTML = `
      <div class="inv-box">
        <div class="inv-tabs">
          <div class="inv-tab sel">🗼 千层塔传送台</div>
          <div class="shop-wallet tower-progress"></div>
          <div class="inv-close">✕ 关闭</div>
        </div>
        <div class="inv-body"></div>
      </div>
    `
    document.body.appendChild(el)
    this.el = el
    el.querySelector('.inv-close').addEventListener('click', () => this.toggle(false))
    el.addEventListener('mousedown', e => e.stopPropagation())
  }

  toggle(force) {
    this.open = force !== undefined ? force : !this.open
    this.el.style.display = this.open ? 'flex' : 'none'
    this.controls.enabled = !this.open && this.controls.isLocked()
    if (this.open) { this.render(); document.exitPointerLock && document.exitPointerLock() }
    return this.open
  }

  go(f) {
    this.toggle(false)
    this.onTeleport(f)
  }

  render() {
    const max = this.tower.maxCleared
    this.el.querySelector('.tower-progress').textContent = `已通关 ${max}/${CFG.TOWER_FLOORS} 层`
    const body = this.el.querySelector('.inv-body')
    body.innerHTML = ''

    // 继续挑战按钮
    const next = Math.min(CFG.TOWER_FLOORS, max + 1)
    const big = document.createElement('button')
    big.className = 'btn'
    big.style.width = '100%'
    big.textContent = next >= CFG.TOWER_FLOORS ? '🐉 挑战第 1000 层：地狱魔龙！！' : `⚔️ 继续挑战：第 ${next} 层`
    big.onclick = () => this.go(next)
    body.appendChild(big)

    // 已通关楼层快捷格（每 10 层一格）
    const grid = document.createElement('div')
    grid.className = 'floor-grid'
    const marks = [1]
    for (let f = 10; f <= CFG.TOWER_FLOORS; f += 10) marks.push(f)
    for (const f of marks) {
      const cell = document.createElement('div')
      const unlocked = f <= max + 1
      const isDragon = f === CFG.TOWER_FLOORS
      cell.className = 'floor-cell' + (unlocked ? '' : ' locked') + (isDragon ? ' dragon' : '')
      cell.textContent = isDragon ? '🐉1000' : f
      if (unlocked) cell.onclick = () => this.go(f)
      grid.appendChild(cell)
    }
    body.appendChild(grid)
    const tip = document.createElement('div')
    tip.className = 'equip-row'
    tip.textContent = this.tower.dragonKilled
      ? '👑 你已经打败了地狱魔龙！千层塔之王！'
      : '作者：「每清一层，走进北边的门就是下一层。第 1000 层的地狱魔龙……我打半天才掉一滴血。」'
    body.appendChild(tip)
  }
}
