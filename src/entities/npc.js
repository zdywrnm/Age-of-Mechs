// 友好 NPC：作者（金色变形金刚）与地下族人（可自定义配色与头顶标签）
import * as THREE from 'three'
import { buildRobot } from '../player/robotModel.js'

const AUTHOR_COLORS = {
  head: '#f7d341', body: '#e8b53a', arm: '#f7d341', leg: '#c78d1b',
  headType: 'antenna', eyeStyle: 'visor', wide: true,
}

// —— v4 城市居民/商贩：轻量盒子小人（不吃 GLB），可漫步可站柜台 ——
const VILLAGER_PALETTES = [
  { head: '#f0dcc0', body: '#c05040', arm: '#f0dcc0', leg: '#4a5a7a' },
  { head: '#f0dcc0', body: '#3a7ac0', arm: '#f0dcc0', leg: '#5a4a3a' },
  { head: '#e8d0b0', body: '#4a9a5a', arm: '#e8d0b0', leg: '#3a3a4a' },
  { head: '#f0dcc0', body: '#c09030', arm: '#f0dcc0', leg: '#6a4a5a' },
  { head: '#e8d0b0', body: '#9a5ac0', arm: '#e8d0b0', leg: '#4a5a4a' },
  { head: '#f0dcc0', body: '#c07a9a', arm: '#f0dcc0', leg: '#3a5a6a' },
]

export class Villager {
  // opts: { label 名牌, colors 配色, patch [x0,z0,x1,z1] 漫步范围（null=站桩）, face 朝向弧度 }
  constructor(parent, pos, opts = {}) {
    this.pos = new THREE.Vector3(pos[0], pos[1], pos[2])
    this.patch = opts.patch || null
    this.speed = 1.1 + Math.random() * 0.4
    this.t = Math.random() * 10
    this.waitT = Math.random() * 4
    this.target = null
    this.group = new THREE.Group()
    const c = opts.colors || VILLAGER_PALETTES[Math.floor(Math.random() * VILLAGER_PALETTES.length)]
    const mat = col => new THREE.MeshLambertMaterial({ color: col })
    const box = (w, h, d, col, x, y, z) => {
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), mat(col))
      m.position.set(x, y, z); this.group.add(m); return m
    }
    this.legL = box(0.16, 0.5, 0.16, c.leg, -0.12, 0.25, 0)
    this.legR = box(0.16, 0.5, 0.16, c.leg, 0.12, 0.25, 0)
    box(0.46, 0.55, 0.28, c.body, 0, 0.78, 0)
    this.armL = box(0.12, 0.45, 0.12, c.arm, -0.32, 0.82, 0)
    this.armR = box(0.12, 0.45, 0.12, c.arm, 0.32, 0.82, 0)
    box(0.36, 0.34, 0.32, c.head, 0, 1.28, 0)
    box(0.06, 0.06, 0.02, '#1a1a1a', -0.09, 1.3, -0.17)
    box(0.06, 0.06, 0.02, '#1a1a1a', 0.09, 1.3, -0.17)
    this.group.position.copy(this.pos)
    if (opts.face !== undefined) this.group.rotation.y = opts.face
    parent.add(this.group)

    if (opts.label) {
      const canvas = document.createElement('canvas')
      canvas.width = 320; canvas.height = 96
      const ctx = canvas.getContext('2d')
      ctx.textAlign = 'center'
      ctx.font = 'bold 40px sans-serif'
      ctx.strokeStyle = 'rgba(0,0,0,0.8)'; ctx.lineWidth = 7
      ctx.fillStyle = '#d8f0c0'
      ctx.strokeText(opts.label, 160, 60); ctx.fillText(opts.label, 160, 60)
      const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), depthTest: false }))
      sprite.scale.set(1.4, 0.42, 1)
      sprite.position.y = 1.85
      this.group.add(sprite)
    }
  }

  distanceTo(pos) {
    return Math.hypot(pos.x - this.pos.x, pos.y - this.pos.y, pos.z - this.pos.z)
  }

  update(dt, world) {
    this.t += dt
    if (!this.patch) { this.group.position.y = this.pos.y + Math.sin(this.t * 2) * 0.02; return }
    if (this.target) {
      const dx = this.target[0] - this.pos.x, dz = this.target[1] - this.pos.z
      const d = Math.hypot(dx, dz)
      if (d < 0.4) { this.target = null; this.waitT = 2 + Math.random() * 5 }
      else {
        const step = Math.min(d, this.speed * dt)
        this.pos.x += (dx / d) * step
        this.pos.z += (dz / d) * step
        if (world) this.pos.y = world.surfaceAt(Math.floor(this.pos.x), Math.floor(this.pos.z)) + 1
        this.group.rotation.y = Math.atan2(-dx, -dz)   // 模型面朝 -Z，脸朝移动方向
        const sw = Math.sin(this.t * 7) * 0.5
        this.legL.rotation.x = sw; this.legR.rotation.x = -sw
        this.armL.rotation.x = -sw * 0.6; this.armR.rotation.x = sw * 0.6
        this.group.position.copy(this.pos)
      }
    } else {
      this.legL.rotation.x = this.legR.rotation.x = 0
      this.armL.rotation.x = this.armR.rotation.x = 0
      this.waitT -= dt
      if (this.waitT <= 0) {
        const p = this.patch
        this.target = [p[0] + Math.random() * (p[2] - p[0]), p[1] + Math.random() * (p[3] - p[1])]
      }
    }
  }
}

export class AuthorNPC {
  constructor(parent, pos, label = '👑 作者', colors = AUTHOR_COLORS) {
    this.pos = new THREE.Vector3(pos[0], pos[1], pos[2])
    this.model = buildRobot(colors)
    this.model.group.position.copy(this.pos)
    this.model.group.rotation.y = Math.PI / 2 + 0.6
    parent.add(this.model.group)
    this.t = Math.random() * 5
    this.float = label.includes('作者')   // 只有创世神会悬浮

    const canvas = document.createElement('canvas')
    canvas.width = 320; canvas.height = 96
    const ctx = canvas.getContext('2d')
    ctx.textAlign = 'center'
    ctx.font = 'bold 44px sans-serif'
    ctx.strokeStyle = 'rgba(0,0,0,0.8)'; ctx.lineWidth = 8
    ctx.fillStyle = this.float ? '#ffd75e' : '#bfe0ff'
    ctx.strokeText(label, 160, 60); ctx.fillText(label, 160, 60)
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(canvas), depthTest: false }))
    sprite.scale.set(1.8, 0.55, 1)
    sprite.position.y = 2.3
    this.model.group.add(sprite)
  }

  distanceTo(pos) {
    return Math.hypot(pos.x - this.pos.x, pos.y - this.pos.y, pos.z - this.pos.z)
  }

  update(dt) {
    this.t += dt
    if (this.float) this.model.group.position.y = this.pos.y + Math.sin(this.t * 1.6) * 0.08 + 0.05
    this.model.animate(this.t * 0.8, false, dt)
  }
}
