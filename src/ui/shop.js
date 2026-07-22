// 作者小岛木屋商店（设定：出售各种产品、水果、海货；货币=齿轮钱包）
import { BLOCKS } from '../blocks.js'
import { ITEMS, SHOP_GOODS } from '../game/items.js'

export class ShopUI {
  constructor(player, hud, controls, onChanged) {
    this.player = player
    this.hud = hud
    this.controls = controls
    this.onChanged = onChanged
    this.open = false
    const el = document.createElement('div')
    el.className = 'inv-panel'
    el.style.display = 'none'
    el.innerHTML = `
      <div class="inv-box">
        <div class="inv-tabs">
          <div class="inv-tab sel">🏪 作者小店（木屋神殿②）</div>
          <div class="shop-wallet"></div>
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

  render() {
    this.el.querySelector('.shop-wallet').textContent = `⚙️ 我的齿轮：${this.player.gears}`
    const body = this.el.querySelector('.inv-body')
    body.innerHTML = ''
    const list = document.createElement('div')
    list.className = 'craft-list'
    for (const g of SHOP_GOODS) {
      const def = ITEMS[g.id]
      const name = g.name || def?.name
      const icon = g.icon || def?.icon
      const row = document.createElement('div')
      row.className = 'craft-row'
      const label = document.createElement('div'); label.className = 'craft-label'
      label.innerHTML = `<b>${icon} ${name}</b><span class="craft-need ok">${def?.desc || ''} · 价格 ${g.price}⚙️</span>`
      const btn = document.createElement('button'); btn.className = 'mini-btn'
      btn.textContent = '买！'
      btn.disabled = this.player.gears < g.price
      btn.onclick = () => {
        if (!this.player.spendGears(g.price)) return
        if (g.outBlockN) this.player.addBlock(g.outBlockN[0], g.outBlockN[1])
        else if (g.outBlock) this.player.addBlock(g.outBlock)
        else this.player.addItem(g.id)
        this.hud.toast(`🛍 买到了 ${name}！`)
        this.render()
        this.onChanged && this.onChanged()
      }
      row.appendChild(label); row.appendChild(btn)
      list.appendChild(row)
    }
    const tip = document.createElement('div')
    tip.className = 'equip-row'
    tip.textContent = '作者：「花掉的齿轮不影响等级哦——等级看的是你一共收集过多少！」'
    body.appendChild(list)
    body.appendChild(tip)
  }
}
