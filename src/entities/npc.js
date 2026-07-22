// 友好 NPC：作者（金色变形金刚）与地下族人（可自定义配色与头顶标签）
import * as THREE from 'three'
import { buildRobot } from '../player/robotModel.js'

const AUTHOR_COLORS = {
  head: '#f7d341', body: '#e8b53a', arm: '#f7d341', leg: '#c78d1b',
  headType: 'antenna', eyeStyle: 'visor', wide: true,
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
