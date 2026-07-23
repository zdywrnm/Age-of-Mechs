// HUD v2：全 DOM overlay（修复图标 bug：canvas 必须 createElement 逐个 append，
// 不能 innerHTML+=，否则已画位图被序列化清空）
import * as THREE from 'three'
import { CFG } from '../config.js'
import { TILE, ATLAS_TILES } from '../textures.js'
import { BLOCKS } from '../blocks.js'

const FORM_NAMES = { robot: '🤖 机器人', car: '🚗 小车', armor: '🛡️ 矿石装甲', dive: '🤿 潜水', super: '🌈 全能' }

// 小地图配色（按方块 id）
const MM_COLORS = {
  1: '#5cb544', 2: '#8a6142', 3: '#8f6b3d', 4: '#3f8f33', 5: '#8d8d8d', 6: '#9a9a9a',
  7: '#39c8c4', 8: '#e8b53a', 9: '#1a2a1a', 10: '#cfc4b2', 11: '#a9793f', 12: '#e8b53a',
  13: '#2b2b2f', 14: '#e2d29a', 15: '#2a6aa8', 16: '#e85f1a', 17: '#4a4a50', 22: '#3a2c50',
  23: '#d8d0a8', 26: '#3a8fa8', 27: '#4a7a4a', 29: '#2e2320', 30: '#ffe89a', 31: '#3a7ab8',
  32: '#3f8f8a', 33: '#8ff0ea', 34: '#ff6fa8', 35: '#5fb0ff', 36: '#3faa4a', 37: '#4a7a8f',
}
function shade(hex, f) {
  const r = Math.min(255, Math.round(parseInt(hex.slice(1, 3), 16) * f))
  const g = Math.min(255, Math.round(parseInt(hex.slice(3, 5), 16) * f))
  const b = Math.min(255, Math.round(parseInt(hex.slice(5, 7), 16) * f))
  return `rgb(${r},${g},${b})`
}

export class HUD {
  constructor(atlas) {
    this.atlas = atlas
    this.camera = null
    const el = document.createElement('div')
    el.className = 'hud'
    el.innerHTML = `
      <div class="hud-topleft">
        <div class="hp-wrap">
          <div class="hp-label"><span>❤ 生命</span><span class="hp-text"></span></div>
          <div class="hp-bar"><div class="hp-fill"></div></div>
        </div>
        <div class="stat-row">
          <div class="badge lv"></div>
          <div class="badge gear"></div>
          <div class="badge mystery" style="display:none"></div>
        </div>
        <div class="stat-row">
          <div class="badge daytime"></div>
          <div class="badge pet" style="display:none"></div>
        </div>
        <div class="water-wrap" style="display:none">
          <div class="hp-label"><span>💧 泡水</span><span class="water-text"></span></div>
          <div class="hp-bar"><div class="water-fill"></div></div>
        </div>
      </div>
      <div class="quest-card"><div class="quest-title"></div><div class="quest-sub"></div></div>
      <div class="boss-bar"><div class="boss-name"></div><div class="boss-hp"><div class="boss-fill"></div></div></div>
      <div class="compass"><div class="compass-tick"></div></div>
      <div class="minimap"><canvas width="176" height="176"></canvas><div class="mm-arrow">▲</div><div class="mm-n">北</div></div>
      <div class="toasts"></div>
      <div class="crosshair"></div>
      <div class="mine-ring"></div>
      <div class="prompt" style="display:none"></div>
      <div class="hotbar"></div>
      <div class="debug-corner" style="display:none"></div>
    `
    document.body.appendChild(el)
    this.el = el
    this.$ = s => el.querySelector(s)
    this.hurtEl = document.createElement('div')
    this.hurtEl.className = 'hurt-flash'
    document.body.appendChild(this.hurtEl)
    this.bannerEl = document.createElement('div')
    this.bannerEl.className = 'banner'
    this.bannerEl.innerHTML = '<div class="big"></div><div class="small"></div>'
    document.body.appendChild(this.bannerEl)
    this._slotCache = ''
  }

  setCamera(camera) { this.camera = camera }

  blockIcon(id) {
    const c = document.createElement('canvas')
    c.width = c.height = TILE
    const tile = BLOCKS[id].tiles.side
    const sx = (tile % ATLAS_TILES) * TILE, sy = Math.floor(tile / ATLAS_TILES) * TILE
    c.getContext('2d').drawImage(this.atlas.canvas, sx, sy, TILE, TILE, 0, 0, TILE, TILE)
    return c
  }

  update(player, questText, extraChip = '', dayNight = null, pets = null) {
    const hp = Math.ceil(player.hp), max = player.maxHp()
    this.$('.hp-fill').style.width = `${(hp / max) * 100}%`
    this.$('.hp-text').textContent = `${hp} / ${max}`
    this.$('.lv').textContent = `⭐ 等级 ${player.level()}`
    this.$('.gear').textContent = `⚙️ 齿轮 ${player.gears}`
    const my = this.$('.mystery')
    if (player.mysteryGears.length) {
      my.style.display = ''
      my.textContent = `💠 神秘齿轮 ${player.mysteryGears.length}/8`
    }
    // 昼夜
    if (dayNight) {
      const t = dayNight.time
      this.$('.daytime').textContent = dayNight.isNight() ? '🌙 夜晚（怪物变多！）' : (t > 0.42 && t < 0.5 ? '🌇 黄昏' : '☀️ 白天')
    }
    // 宠物
    const petEl = this.$('.pet')
    if (pets && pets.activePet()) {
      const pet = pets.activePet()
      petEl.style.display = ''
      petEl.textContent = pet.hp <= 0 ? `🐾 ${pet.name}（休息中…）` : `🐾 ${pet.name} ${Math.ceil(pet.hp)}/${pet.maxHp}${player.mount ? ' 🏇' : ''}`
    } else petEl.style.display = 'none'
    // 泡水条
    const ww = this.$('.water-wrap')
    if (player.waterTime > 30 && !player.pengPotion) {
      ww.style.display = ''
      const r = Math.min(1, player.waterTime / CFG.WATER_LIMIT)
      const fill = this.$('.water-fill')
      fill.style.width = `${r * 100}%`
      fill.style.background = r >= 1 ? '#e34b4b' : (player.waterTime > CFG.WATER_WARN ? '#f0a92e' : '#3a8fd8')
      const remainMin = Math.max(0, (CFG.WATER_LIMIT - player.waterTime) / 60)
      this.$('.water-text').textContent = r >= 1 ? '泡太久了！快上岸！' : `还能泡 ${remainMin.toFixed(1)} 分钟`
    } else ww.style.display = 'none'

    if (questText) {
      this.$('.quest-title').textContent = `📜 ${questText.title}`
      this.$('.quest-sub').textContent = questText.sub
    }
    // 快捷栏（修复：canvas 逐个 append，杜绝 innerHTML 清位图）
    const bar = player.hotbar()
    const sig = bar.map(s => `${s.id}:${s.count}`).join('|') + `#${player.hotbarIndex}#${player.form}${extraChip}`
    if (sig !== this._slotCache) {
      this._slotCache = sig
      const wrap = this.$('.hotbar')
      wrap.innerHTML = ''
      bar.forEach((s, i) => {
        const d = document.createElement('div')
        d.className = 'slot' + (i === Math.min(player.hotbarIndex, bar.length - 1) ? ' sel' : '')
        d.appendChild(this.blockIcon(s.id))
        const cnt = document.createElement('span'); cnt.className = 'cnt'; cnt.textContent = s.count
        const key = document.createElement('span'); key.className = 'key'; key.textContent = i + 1
        d.appendChild(cnt); d.appendChild(key)
        wrap.appendChild(d)
      })
      const chip = document.createElement('div')
      chip.className = 'form-chip'
      chip.textContent = `${FORM_NAMES[player.form] || player.form}（T 变形）${extraChip}`
      wrap.appendChild(chip)
    }
  }

  setMineProgress(r) {
    const ring = this.$('.mine-ring')
    if (r <= 0 || r >= 1) { ring.style.display = 'none'; return }
    ring.style.display = 'block'
    ring.style.background = `conic-gradient(#ffd75e ${r * 360}deg, rgba(255,255,255,0.15) 0deg)`
    ring.style.mask = 'radial-gradient(circle, transparent 55%, black 56%)'
    ring.style.webkitMask = 'radial-gradient(circle, transparent 55%, black 56%)'
  }

  toast(msg, ms = 2600) {
    const t = document.createElement('div')
    t.className = 'toast'
    t.textContent = msg
    this.$('.toasts').appendChild(t)
    setTimeout(() => t.classList.add('out'), ms)
    setTimeout(() => t.remove(), ms + 600)
  }

  banner(big, small, ms = 3200) {
    this.bannerEl.style.display = 'flex'
    this.bannerEl.querySelector('.big').textContent = big
    this.bannerEl.querySelector('.small').textContent = small || ''
    clearTimeout(this._bannerT)
    this._bannerT = setTimeout(() => { this.bannerEl.style.display = 'none' }, ms)
  }

  showBoss(name, ratio) {
    const b = this.$('.boss-bar')
    b.style.display = 'block'
    this.$('.boss-name').textContent = `👿 ${name}`
    this.$('.boss-fill').style.width = `${Math.max(0, ratio) * 100}%`
  }
  hideBoss() { this.$('.boss-bar').style.display = 'none' }

  setPrompt(text) {
    const p = this.$('.prompt')
    if (!text) { p.style.display = 'none'; return }
    p.style.display = 'block'
    p.textContent = text
  }

  hurtFlash() {
    this.hurtEl.style.transition = 'none'
    this.hurtEl.style.opacity = '1'
    setTimeout(() => {
      this.hurtEl.style.transition = 'opacity 0.5s'
      this.hurtEl.style.opacity = '0'
    }, 30)
  }

  damageNumber(pos, dmg) {
    if (!this.camera) return
    const v = new THREE.Vector3(pos.x, pos.y + 1.2, pos.z).project(this.camera)
    if (v.z > 1) return
    const x = (v.x * 0.5 + 0.5) * innerWidth
    const y = (-v.y * 0.5 + 0.5) * innerHeight
    const d = document.createElement('div')
    d.className = 'dmg-num'
    d.textContent = `-${dmg}`
    d.style.left = `${x + (Math.random() - 0.5) * 30}px`
    d.style.top = `${y}px`
    this.el.appendChild(d)
    setTimeout(() => d.remove(), 850)
  }

  // 小地图（右上角，北朝上，玩家箭头随视角旋转）。world=null 时隐藏
  updateMinimap(world, px, pz, yaw, seaLevel, pois = []) {
    const mm = this.$('.minimap')
    if (!world) { mm.style.display = 'none'; return }
    mm.style.display = 'block'
    this.$('.mm-arrow').style.transform = `translate(-50%,-50%) rotate(${yaw}rad)`
    // 节流：0.4s 重绘一帧
    const now = performance.now()
    if (this._mmT && now - this._mmT < 400) return
    this._mmT = now
    const canvas = mm.querySelector('canvas')
    const ctx = canvas.getContext('2d')
    const R = 44                 // 半径（格）
    const cell = canvas.width / (R * 2)
    const cx = Math.floor(px), cz = Math.floor(pz)
    for (let dz = -R; dz < R; dz++) {
      for (let dx = -R; dx < R; dx++) {
        const wx = cx + dx, wz = cz + dz
        const sy = world.surfaceAt(wx, wz)
        let color
        if (sy <= 0) color = '#0a1a2e'                      // 世界外/虚空
        else if (sy < seaLevel) color = sy < seaLevel - 20 ? '#1a4a7a' : '#2a6aa8' // 深/浅海
        else {
          const id = world.get(wx, sy, wz)
          color = MM_COLORS[id] || '#7a8a5a'
          // 高度明暗
          const f = 0.75 + Math.min(0.5, Math.max(0, (sy - 100) / 40))
          color = shade(color, f)
        }
        ctx.fillStyle = color
        ctx.fillRect((dx + R) * cell, (dz + R) * cell, cell + 0.5, cell + 0.5)
      }
    }
    // 地标点
    for (const p of pois) {
      const dx = p.x - px, dz = p.z - pz
      if (Math.abs(dx) >= R || Math.abs(dz) >= R) continue
      ctx.fillStyle = '#ffd75e'
      ctx.beginPath()
      ctx.arc((dx + R) * cell, (dz + R) * cell, 3, 0, Math.PI * 2)
      ctx.fill()
    }
  }

  // 指南针：屏幕顶部地标方位条（主世界）。yaw=null 时隐藏
  updateCompass(yaw, pois, ppos) {
    const c = this.$('.compass')
    if (yaw === null || yaw === undefined) { c.style.display = 'none'; return }
    c.style.display = 'block'
    if (!this._ci) this._ci = new Map()
    const fov = 1.35
    for (const p of pois) {
      let el = this._ci.get(p.icon)
      if (!el) {
        el = document.createElement('div')
        el.className = 'compass-item'
        el.innerHTML = `<span class="ci-icon">${p.icon}</span><span class="ci-label">${p.label}</span>`
        c.appendChild(el)
        this._ci.set(p.icon, el)
      }
      const dx = p.x - ppos.x, dz = p.z - ppos.z
      let rel = Math.atan2(dx, -dz) - yaw
      while (rel > Math.PI) rel -= Math.PI * 2
      while (rel < -Math.PI) rel += Math.PI * 2
      if (Math.abs(rel) > fov) { el.style.display = 'none'; continue }
      el.style.display = 'flex'
      el.style.left = `${50 + (rel / fov) * 46}%`
      el.style.opacity = Math.hypot(dx, dz) < 40 ? '1' : '0.7'
    }
  }

  setDebug(text) {
    const d = this.$('.debug-corner')
    if (!text) { d.style.display = 'none'; return }
    d.style.display = 'block'
    d.textContent = text
  }
}
