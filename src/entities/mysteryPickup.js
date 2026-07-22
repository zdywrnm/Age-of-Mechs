// 神秘齿轮悬浮拾取物（森林/烈火/黑暗齿轮——不在箱子里，而是悬浮在现场）
import * as THREE from 'three'
import { GEAR_INFO } from '../game/items.js'

const GLOW = { forest: '#4aa63d', fire: '#ff7a1a', dark: '#c084ff' }

function buildBigGear(glowColor) {
  const g = new THREE.Group()
  const mat = new THREE.MeshLambertMaterial({ color: '#f0b429' })
  const a = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.16, 0.7), mat)
  const b = new THREE.Mesh(new THREE.BoxGeometry(0.7, 0.16, 0.7), mat)
  b.rotation.y = Math.PI / 4
  const hub = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.26, 0.24), new THREE.MeshBasicMaterial({ color: glowColor }))
  const aura = new THREE.Sprite(new THREE.SpriteMaterial({
    map: makeAura(glowColor), transparent: true, depthWrite: false,
  }))
  aura.scale.set(2.2, 2.2, 1)
  g.add(a, b, hub, aura)
  return g
}
function makeAura(color) {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const ctx = c.getContext('2d')
  const grad = ctx.createRadialGradient(64, 64, 8, 64, 64, 64)
  grad.addColorStop(0, color + 'cc')
  grad.addColorStop(1, color + '00')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 128, 128)
  return new THREE.CanvasTexture(c)
}

export class MysteryPickupManager {
  constructor(player) {
    this.player = player
    this.list = []          // { kind, pos, mesh, dimId }
    this.onPickup = null    // (kind) => {}
    this.t = 0
  }

  // 加入某维度的 group（维度生成时调用；已拥有则不生成）
  place(kind, pos, group) {
    if (this.player.hasGear(kind)) return
    if (this.list.some(p => p.kind === kind)) return
    const mesh = buildBigGear(GLOW[kind] || '#ffd75e')
    mesh.position.set(pos[0] + 0.5, pos[1] + 0.5, pos[2] + 0.5)
    group.add(mesh)
    this.list.push({ kind, pos, mesh })
  }

  update(dt, activeGroup) {
    this.t += dt
    const p = this.player
    for (const it of this.list) {
      it.mesh.rotation.y += dt * 1.5
      it.mesh.position.y = it.pos[1] + 0.5 + Math.sin(this.t * 2) * 0.15
      // 只在该拾取物所在 group 可见时判定
      if (!it.mesh.parent || !it.mesh.parent.visible) continue
      const d = Math.hypot(p.ent.pos.x - it.mesh.position.x, p.ent.pos.y + 0.9 - it.mesh.position.y, p.ent.pos.z - it.mesh.position.z)
      if (d < 1.8 && !p.dead) {
        it.mesh.parent.remove(it.mesh)
        it.remove = true
        this.onPickup && this.onPickup(it.kind)
      }
    }
    this.list = this.list.filter(i => !i.remove)
  }
}
