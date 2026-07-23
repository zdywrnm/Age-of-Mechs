// 轻量特效系统：对象池粒子 + 扩散冲击环 + 相机震动 + 全屏闪光
// 所有特效都是短生命周期的小方块/环，不做纹理粒子（保持体素风格统一）
import * as THREE from 'three'

const POOL_SIZE = 320

export class FX {
  constructor(scene) {
    this.scene = scene
    this.pool = []
    this.active = []
    this.rings = []
    this.beams = []      // v4：红眼激光光束
    this.shakeAmp = 0
    const geo = new THREE.BoxGeometry(1, 1, 1)
    for (let i = 0; i < POOL_SIZE; i++) {
      const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true }))
      m.visible = false
      scene.add(m)
      this.pool.push(m)
    }
    // 全屏闪光 DOM
    this.flashEl = document.createElement('div')
    this.flashEl.style.cssText = 'position:fixed;inset:0;pointer-events:none;background:#fff;opacity:0;z-index:30'
    document.body.appendChild(this.flashEl)

    // —— 代码矿石光环：绿色字符环绕矿块转动（设定：字母连成线纵横交错）——
    this.codeT = 0
    this.codeBlocks = []
    this.glyphTexs = []
    const chars = 'ABCDEFXYZ0123456789'
    for (let i = 0; i < 14; i++) {
      const c = document.createElement('canvas')
      c.width = c.height = 32
      const cx = c.getContext('2d')
      cx.font = 'bold 24px monospace'
      cx.textAlign = 'center'; cx.textBaseline = 'middle'
      const ch = chars[Math.floor(Math.random() * chars.length)]
      cx.fillStyle = 'rgba(47,158,47,0.5)'
      cx.fillText(ch, 16, 17)
      cx.fillStyle = '#7dff7d'
      cx.fillText(ch, 16, 16)
      const tex = new THREE.CanvasTexture(c)
      this.glyphTexs.push(tex)
    }
    this.glyphs = []
    for (let i = 0; i < 18; i++) {
      const s = new THREE.Sprite(new THREE.SpriteMaterial({
        map: this.glyphTexs[i % this.glyphTexs.length],
        transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
      }))
      s.scale.set(0.34, 0.34, 1)
      s.visible = false
      scene.add(s)
      this.glyphs.push({ sprite: s, swapT: Math.random() * 2 })
    }
  }

  // 附近的代码矿石列表（main 定期扫描后传入），每块最多 3 个环绕字符
  setCodeBlocks(list) { this.codeBlocks = list.slice(0, 6) }

  updateCodeAura(dt) {
    this.codeT += dt
    for (let i = 0; i < this.glyphs.length; i++) {
      const g = this.glyphs[i]
      const bi = Math.floor(i / 3), gi = i % 3
      const b = this.codeBlocks[bi]
      if (!b) { g.sprite.visible = false; continue }
      g.sprite.visible = true
      const a = this.codeT * 0.9 + gi * 2.09 + bi * 1.3
      g.sprite.position.set(
        b[0] + 0.5 + Math.cos(a) * 0.85,
        b[1] + 0.5 + Math.sin(this.codeT * 1.5 + gi * 2 + bi) * 0.3,
        b[2] + 0.5 + Math.sin(a) * 0.85)
      g.swapT -= dt
      if (g.swapT <= 0) {
        g.swapT = 0.5 + Math.random() * 1.5
        g.sprite.material.map = this.glyphTexs[Math.floor(Math.random() * this.glyphTexs.length)]
      }
    }
  }

  spawnOne(pos, vel, color, { life = 0.8, size = 0.16, gravity = 14, drag = 0, additive = false, fade = true } = {}) {
    const m = this.pool.pop()
    if (!m) return
    m.visible = true
    m.position.copy(pos)
    m.scale.setScalar(size)
    m.material.color.set(color)
    m.material.opacity = 1
    m.material.blending = additive ? THREE.AdditiveBlending : THREE.NormalBlending
    m.rotation.set(Math.random() * 3, Math.random() * 3, 0)
    this.active.push({ m, vel: vel.clone(), life, maxLife: life, gravity, drag, fade, size })
  }

  // 四散爆开
  burst(pos, colors, { count = 12, speed = 5, up = 3, ...opts } = {}) {
    const cs = Array.isArray(colors) ? colors : [colors]
    for (let i = 0; i < count; i++) {
      const a = Math.random() * Math.PI * 2
      const v = new THREE.Vector3(
        Math.cos(a) * speed * (0.3 + Math.random() * 0.7),
        up * (0.4 + Math.random() * 0.8),
        Math.sin(a) * speed * (0.3 + Math.random() * 0.7))
      this.spawnOne(pos, v, cs[Math.floor(Math.random() * cs.length)], opts)
    }
  }

  // 锥形喷射（喷火）
  cone(pos, dir, colors, { count = 16, speed = 9, spread = 0.35, ...opts } = {}) {
    const cs = Array.isArray(colors) ? colors : [colors]
    for (let i = 0; i < count; i++) {
      const v = dir.clone().multiplyScalar(speed * (0.5 + Math.random() * 0.6))
      v.x += (Math.random() - 0.5) * speed * spread
      v.y += (Math.random() - 0.5) * speed * spread * 0.7
      v.z += (Math.random() - 0.5) * speed * spread
      this.spawnOne(pos, v, cs[Math.floor(Math.random() * cs.length)],
        { gravity: -1, life: 0.45 + Math.random() * 0.25, additive: true, ...opts })
    }
  }

  // 地面扩散冲击环
  ring(pos, color, { maxR = 5, life = 0.5, y = 0.1 } = {}) {
    const geo = new THREE.RingGeometry(0.8, 1.0, 24)
    const m = new THREE.Mesh(geo, new THREE.MeshBasicMaterial({
      color, transparent: true, opacity: 0.9, side: THREE.DoubleSide, depthWrite: false,
    }))
    m.rotation.x = -Math.PI / 2
    m.position.set(pos.x, pos.y + y, pos.z)
    this.scene.add(m)
    this.rings.push({ m, t: 0, life, maxR })
  }

  // v4 激光光束：细长发光方柱，瞬间出现快速淡出（红眼睛武器）
  beam(from, to, color = '#ff2020') {
    const len = from.distanceTo(to)
    if (len < 0.5) return
    const m = new THREE.Mesh(
      new THREE.BoxGeometry(0.09, 0.09, len),
      new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false })
    )
    m.position.copy(from).add(to).multiplyScalar(0.5)
    m.lookAt(to)
    this.scene.add(m)
    this.beams.push({ m, t: 0, life: 0.13 })
  }

  // 全屏白闪（光明技能）
  flash(ms = 260) {
    this.flashEl.style.transition = 'none'
    this.flashEl.style.opacity = '0.85'
    setTimeout(() => {
      this.flashEl.style.transition = `opacity ${ms}ms`
      this.flashEl.style.opacity = '0'
    }, 40)
  }

  shake(amp) { this.shakeAmp = Math.max(this.shakeAmp, amp) }

  clear() {
    for (const p of this.active) { p.m.visible = false; this.pool.push(p.m) }
    this.active = []
    for (const r of this.rings) { this.scene.remove(r.m); r.m.geometry.dispose(); r.m.material.dispose() }
    this.rings = []
    for (const b of this.beams) { this.scene.remove(b.m); b.m.geometry.dispose(); b.m.material.dispose() }
    this.beams = []
  }

  update(dt) {
    this.updateCodeAura(dt)
    this.shakeAmp = Math.max(0, this.shakeAmp - dt * 1.6)
    for (const p of this.active) {
      p.life -= dt
      if (p.life <= 0) { p.m.visible = false; this.pool.push(p.m); p.dead = true; continue }
      p.vel.y -= p.gravity * dt
      if (p.drag) p.vel.multiplyScalar(Math.max(0, 1 - p.drag * dt))
      p.m.position.addScaledVector(p.vel, dt)
      p.m.rotation.x += dt * 3; p.m.rotation.y += dt * 4
      const k = p.life / p.maxLife
      if (p.fade) { p.m.material.opacity = k; p.m.scale.setScalar(p.size * (0.4 + k * 0.6)) }
    }
    this.active = this.active.filter(p => !p.dead)
    for (const r of this.rings) {
      r.t += dt
      const k = r.t / r.life
      if (k >= 1) { this.scene.remove(r.m); r.m.geometry.dispose(); r.m.material.dispose(); r.dead = true; continue }
      const s = 1 + k * r.maxR
      r.m.scale.set(s, s, 1)
      r.m.material.opacity = 0.9 * (1 - k)
    }
    this.rings = this.rings.filter(r => !r.dead)
    for (const b of this.beams) {
      b.t += dt
      if (b.t >= b.life) { this.scene.remove(b.m); b.m.geometry.dispose(); b.m.material.dispose(); b.dead = true; continue }
      b.m.material.opacity = 0.95 * (1 - b.t / b.life)
    }
    this.beams = this.beams.filter(b => !b.dead)
  }

  // 相机震动偏移（主循环在 updateCamera 之后调用）
  applyShake(camera) {
    if (this.shakeAmp <= 0.001) return
    camera.position.x += (Math.random() - 0.5) * this.shakeAmp
    camera.position.y += (Math.random() - 0.5) * this.shakeAmp
    camera.position.z += (Math.random() - 0.5) * this.shakeAmp
  }
}

// 方块碎屑配色（挖掘反馈用）
export const BLOCK_FX_COLORS = {
  1: ['#5cb544', '#7a5538'], 2: ['#7a5538', '#8a6142'], 3: ['#8f6b3d'], 4: ['#3f8f33'],
  5: ['#8d8d8d', '#797979'], 6: ['#9a9a9a'], 7: ['#39c8c4', '#8d8d8d'], 8: ['#e8b53a', '#f2c95c'],
  9: ['#101810', '#2f9e2f'], 14: ['#e2d29a'], 16: ['#3a2c26', '#e85f1a'],
  // v4 六区
  38: ['#4fae4a', '#8fe08a'], 39: ['#46a83d', '#54bc49'], 40: ['#5fd8e8', '#8d8d8d'],
  41: ['#e83a5a', '#8d8d8d'], 42: ['#3a6ae8', '#8d8d8d'], 43: ['#8a8a92', '#d82a2a'],
  44: ['#3a3532', '#262220'], 45: ['#b4553a', '#8f3f2a'], 46: ['#e8e2d4'], 47: ['#232328'],
  48: ['#a5202e', '#e8b53a'], 49: ['#d8cdb4', '#4a3a2a'], 50: ['#c73a48', '#f2ede0'],
}
export function blockColors(id) { return BLOCK_FX_COLORS[id] || ['#9a8a72', '#7a6a55'] }
