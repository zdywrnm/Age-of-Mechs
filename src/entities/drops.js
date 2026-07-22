// 掉落的变形齿轮：旋转、磁吸、拾取（维度感知）
import * as THREE from 'three'
import { B } from '../blocks.js'

function buildGear() {
  const g = new THREE.Group()
  const mat = new THREE.MeshLambertMaterial({ color: '#f0b429' })
  const a = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.34), mat)
  const b = new THREE.Mesh(new THREE.BoxGeometry(0.34, 0.09, 0.34), mat)
  b.rotation.y = Math.PI / 4
  const hub = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.14, 0.12), new THREE.MeshLambertMaterial({ color: '#c78d1b' }))
  g.add(a, b, hub)
  return g
}

export class DropManager {
  constructor(getRoot, ctx, player) {
    this.getRoot = getRoot
    this.ctx = ctx
    this.player = player
    this.list = []
    this.onPickup = null
  }
  get world() { return this.ctx.world }

  spawnGears(pos, n) {
    // 大额掉落合并成最多 12 个实体（boss 掉几十上百个齿轮时不炸帧）
    const pieces = Math.min(n, 12)
    const base = Math.floor(n / pieces)
    let rem = n - base * pieces
    for (let i = 0; i < pieces; i++) {
      const value = base + (rem-- > 0 ? 1 : 0)
      const g = buildGear()
      if (value > 3) g.scale.setScalar(1.6)
      g.position.set(pos.x, pos.y + 0.4, pos.z)
      this.getRoot().add(g)
      this.list.push({
        pos: new THREE.Vector3(pos.x, pos.y + 0.4, pos.z),
        vel: new THREE.Vector3((Math.random() - 0.5) * 3, 4 + Math.random() * 2, (Math.random() - 0.5) * 3),
        mesh: g, t: 0, value,
      })
    }
  }

  clearAll() {
    for (const d of this.list) { d.mesh.parent && d.mesh.parent.remove(d.mesh) }
    this.list = []
  }

  update(dt) {
    const p = this.player
    for (const d of this.list) {
      d.t += dt
      const px = p.ent.pos.x, py = p.ent.pos.y + 0.8, pz = p.ent.pos.z
      const dist = Math.hypot(px - d.pos.x, py - d.pos.y, pz - d.pos.z)
      if (dist < 2.5 && !p.dead) {
        const dir = new THREE.Vector3(px - d.pos.x, py - d.pos.y, pz - d.pos.z).normalize()
        d.vel.lerp(dir.multiplyScalar(9), 0.25)
      } else {
        const inWater = this.world.get(Math.floor(d.pos.x), Math.floor(d.pos.y), Math.floor(d.pos.z)) === B.WATER
        d.vel.y -= (inWater ? 3 : 20) * dt
        if (inWater) d.vel.multiplyScalar(1 - Math.min(1, 2 * dt))
        const below = this.world.get(Math.floor(d.pos.x), Math.floor(d.pos.y - 0.2), Math.floor(d.pos.z))
        if (below !== B.AIR && below !== B.WATER && d.vel.y < 0) { d.vel.y = 0; d.vel.x *= 0.8; d.vel.z *= 0.8 }
      }
      d.pos.addScaledVector(d.vel, dt)
      d.mesh.position.copy(d.pos)
      d.mesh.rotation.y += dt * 3

      if (dist < 0.7 && !p.dead) {
        d.mesh.parent && d.mesh.parent.remove(d.mesh)
        d.remove = true
        this.onPickup && this.onPickup(d.value || 1)
      } else if (d.t > 90 || d.pos.y < -5) {
        d.mesh.parent && d.mesh.parent.remove(d.mesh)
        d.remove = true
      }
    }
    this.list = this.list.filter(d => !d.remove)
  }
}
