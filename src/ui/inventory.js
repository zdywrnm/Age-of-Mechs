// 背包（B 键）：物品 / 齿轮装备 / 合成 / 宠物 四页签
import { B, BLOCKS } from '../blocks.js'
import { ITEMS, RECIPES, GEAR_INFO, GEAR_ORDER } from '../game/items.js'

export class InventoryUI {
  // ctx: { player, pets, hud, controls, onChanged }
  constructor(ctx) {
    this.ctx = ctx
    this.open = false
    this.tab = 'items'
    const el = document.createElement('div')
    el.className = 'inv-panel'
    el.style.display = 'none'
    el.innerHTML = `
      <div class="inv-box">
        <div class="inv-tabs">
          <div class="inv-tab" data-tab="items">🎒 物品</div>
          <div class="inv-tab" data-tab="gears">💠 齿轮</div>
          <div class="inv-tab" data-tab="craft">🔨 合成</div>
          <div class="inv-tab" data-tab="pets">🐾 宠物</div>
          <div class="inv-close">✕ 关闭 (B)</div>
        </div>
        <div class="inv-body"></div>
      </div>
    `
    document.body.appendChild(el)
    this.el = el
    el.querySelectorAll('.inv-tab').forEach(t => {
      t.addEventListener('click', () => { this.tab = t.dataset.tab; this.render() })
    })
    el.querySelector('.inv-close').addEventListener('click', () => this.toggle(false))
    el.addEventListener('mousedown', e => e.stopPropagation())
  }

  toggle(force) {
    this.open = force !== undefined ? force : !this.open
    this.el.style.display = this.open ? 'flex' : 'none'
    this.ctx.controls.enabled = !this.open && this.ctx.controls.isLocked()
    if (this.open) { this.render(); document.exitPointerLock && document.exitPointerLock() }
    return this.open
  }

  render() {
    this.el.querySelectorAll('.inv-tab').forEach(t =>
      t.classList.toggle('sel', t.dataset.tab === this.tab))
    const body = this.el.querySelector('.inv-body')
    body.innerHTML = ''
    if (this.tab === 'items') this.renderItems(body)
    if (this.tab === 'gears') this.renderGears(body)
    if (this.tab === 'craft') this.renderCraft(body)
    if (this.tab === 'pets') this.renderPets(body)
  }

  renderItems(body) {
    const p = this.ctx.player
    const grid = document.createElement('div')
    grid.className = 'inv-grid'
    // 方块
    for (const [id, count] of p.inventory) {
      const cell = document.createElement('div')
      cell.className = 'inv-cell'
      const icon = this.ctx.hud.blockIcon(id)
      cell.appendChild(icon)
      const label = document.createElement('div'); label.className = 'cell-label'; label.textContent = `${BLOCKS[id].name}×${count}`
      cell.appendChild(label)
      grid.appendChild(cell)
    }
    // 物品
    for (const [id, count] of p.items) {
      const def = ITEMS[id]
      if (!def) continue
      const cell = document.createElement('div')
      cell.className = 'inv-cell clickable'
      const em = document.createElement('div'); em.className = 'cell-emoji'; em.textContent = def.icon
      const label = document.createElement('div'); label.className = 'cell-label'; label.textContent = `${def.name}×${count}`
      cell.appendChild(em); cell.appendChild(label)
      if (def.boat) {
        const btn = document.createElement('button'); btn.className = 'mini-btn'
        btn.textContent = '放船'
        btn.onclick = () => { this.ctx.onBoatUse && this.ctx.onBoatUse(); this.render() }
        cell.appendChild(btn)
      } else if (def.use || def.equip) {
        const btn = document.createElement('button'); btn.className = 'mini-btn'
        const equipped = def.equip && p.equipment[def.equip] === id
        btn.textContent = def.use ? '使用' : (equipped ? '已装备' : '装备')
        if (equipped) btn.disabled = true
        btn.onclick = () => { p.useItem(id, this.ctx.hud); this.render(); this.ctx.onChanged && this.ctx.onChanged() }
        cell.appendChild(btn)
      }
      if (def.desc) cell.title = def.desc
      grid.appendChild(cell)
    }
    if (!grid.children.length) grid.innerHTML = '<div class="inv-empty">背包空空的～去挖方块、打怪物吧！</div>'
    body.appendChild(grid)
    // 当前装备
    const eq = document.createElement('div')
    eq.className = 'equip-row'
    const sw = p.equipment.sword ? ITEMS[p.equipment.sword] : null
    const ar = p.equipment.armor ? ITEMS[p.equipment.armor] : null
    const wg = p.equipment.wings ? ITEMS[p.equipment.wings] : null
    eq.textContent = `当前装备：武器 ${sw ? sw.icon + sw.name + `(+${sw.atk}攻)` : '无'} ｜ 护甲 ${ar ? ar.icon + ar.name + `(-${Math.round(ar.def * 100)}%伤)` : '无'} ｜ 翅膀 ${wg ? wg.icon + wg.name : '无'}`
    body.appendChild(eq)
  }

  renderGears(body) {
    const p = this.ctx.player
    const grid = document.createElement('div')
    grid.className = 'gear-grid'
    for (const kind of GEAR_ORDER) {
      const info = GEAR_INFO[kind]
      const owned = p.hasGear(kind)
      const equipped = p.equippedGears.includes(kind)
      const cell = document.createElement('div')
      cell.className = 'gear-cell' + (owned ? '' : ' locked') + (equipped ? ' equipped' : '')
      const em = document.createElement('div'); em.className = 'cell-emoji'; em.textContent = owned ? info.mark : '❓'
      const nm = document.createElement('div'); nm.className = 'cell-label'; nm.textContent = owned ? info.name : '？？？'
      const gv = document.createElement('div'); gv.className = 'gear-gives'; gv.textContent = owned ? info.gives : '还没找到'
      cell.appendChild(em); cell.appendChild(nm); cell.appendChild(gv)
      if (owned) {
        const btn = document.createElement('button'); btn.className = 'mini-btn'
        btn.textContent = equipped ? '卸下' : '装备'
        btn.onclick = () => {
          if (equipped) p.equippedGears = p.equippedGears.filter(k => k !== kind)
          else p.equippedGears.push(kind)
          // 形态可能失效：回退机器人
          if (!p.computeForms().includes(p.form)) { p.form = 'robot'; p.applyForm() }
          this.render(); this.ctx.onChanged && this.ctx.onChanged()
        }
        cell.appendChild(btn)
      }
      grid.appendChild(cell)
    }
    body.appendChild(grid)
    const forms = document.createElement('div')
    forms.className = 'equip-row'
    forms.textContent = `当前可变形态（T 键循环）：${p.computeForms().map(f => ({ robot: '🤖机器人', car: '🚗小车', armor: '🛡装甲', dive: '🤿潜水', super: '🌈全能' }[f])).join(' → ')}`
    body.appendChild(forms)
  }

  renderCraft(body) {
    const p = this.ctx.player
    const list = document.createElement('div')
    list.className = 'craft-list'
    for (const r of RECIPES) {
      const outDef = r.outBlock ? { name: BLOCKS[r.outBlock].name, icon: '🛏' } : ITEMS[r.out]
      const row = document.createElement('div')
      row.className = 'craft-row'
      let canCraft = true
      const needText = Object.entries(r.need).map(([k, n]) => {
        const isBlock = !isNaN(Number(k))
        const name = isBlock ? BLOCKS[Number(k)].name : (ITEMS[k]?.name || k)
        const have = isBlock ? (p.inventory.get(Number(k)) || 0) : (p.items.get(k) || 0)
        if (have < n) canCraft = false
        return `${name} ${have}/${n}`
      }).join(' + ')
      const label = document.createElement('div'); label.className = 'craft-label'
      label.innerHTML = `<b>${outDef.icon || ''} ${outDef.name}</b><span class="craft-need ${canCraft ? 'ok' : 'lack'}">${needText}</span>`
      const btn = document.createElement('button'); btn.className = 'mini-btn'
      btn.textContent = '合成'
      btn.disabled = !canCraft
      btn.onclick = () => {
        for (const [k, n] of Object.entries(r.need)) {
          if (!isNaN(Number(k))) p.consumeBlock(Number(k), n)
          else p.consumeItem(k, n)
        }
        if (r.outBlock) { p.addBlock(r.outBlock); this.ctx.hud.toast(`🔨 合成了 ${BLOCKS[r.outBlock].name}！（放在快捷栏里）`) }
        else { p.addItem(r.out); this.ctx.hud.toast(`🔨 合成了 ${ITEMS[r.out].name}！`) }
        this.render(); this.ctx.onChanged && this.ctx.onChanged()
      }
      row.appendChild(label); row.appendChild(btn)
      list.appendChild(row)
    }
    body.appendChild(list)
  }

  renderPets(body) {
    const pets = this.ctx.pets
    const grid = document.createElement('div')
    grid.className = 'craft-list'
    if (!pets.roster.length) {
      grid.innerHTML = '<div class="inv-empty">还没有宠物！去收服大陆打怪，打败的怪会自动变成宠物哦～</div>'
    }
    pets.roster.forEach((pet, i) => {
      const row = document.createElement('div')
      row.className = 'craft-row'
      const active = pets.activeIndex === i
      const label = document.createElement('div'); label.className = 'craft-label'
      label.innerHTML = `<b>🐾 ${pet.name}${pet.mountable ? '（坐骑类）' : ''}</b><span class="craft-need ok">HP ${Math.ceil(pet.hp)}/${pet.maxHp} · 攻击 ${pet.atk}${active ? ' · 出战中' : ''}</span>`
      row.appendChild(label)
      const btn = document.createElement('button'); btn.className = 'mini-btn'
      btn.textContent = active ? '休息' : '出战'
      btn.onclick = () => { active ? pets.dismiss() : pets.deploy(i); this.render(); this.ctx.onChanged && this.ctx.onChanged() }
      row.appendChild(btn)
      if (pet.mountable && active) {
        const ride = document.createElement('button'); ride.className = 'mini-btn'
        ride.textContent = this.ctx.player.mount === pet ? '下来' : '骑乘'
        ride.onclick = () => { pets.toggleMount(); this.render() }
        row.appendChild(ride)
      }
      grid.appendChild(row)
    })
    body.appendChild(grid)
  }
}
