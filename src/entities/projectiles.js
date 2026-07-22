// 投射物 v2：可染色、维度感知
import * as THREE from 'three'
import { B } from '../blocks.js'

export class ProjectileManager {
  constructor(getRoot, ctx, player) {
    this.getRoot = getRoot
    this.ctx = ctx
    this.player = player
    this.list = []
  }
  get world() { return this.ctx.world }

  spawn(pos, dir, speed, dmg, color = '#f5f0e0') {
    const mesh = new THREE.Mesh(
      new THREE.BoxGeometry(0.16, 0.16, 0.42),
      new THREE.MeshBasicMaterial({ color })
    )
    mesh.position.copy(pos)
    mesh.lookAt(pos.clone().add(dir))
    this.getRoot().add(mesh)
    this.list.push({ pos: pos.clone(), dir: dir.clone(), speed, dmg, mesh, t: 0 })
  }

  clearAll() {
    for (const a of this.list) { a.mesh.parent && a.mesh.parent.remove(a.mesh); a.mesh.geometry.dispose(); a.mesh.material.dispose() }
    this.list = []
  }

  update(dt) {
    const p = this.player
    for (const a of this.list) {
      a.t += dt
      a.pos.addScaledVector(a.dir, a.speed * dt)
      a.mesh.position.copy(a.pos)
      let dead = a.t > 3.5
      if (!dead && this.world.isSolid(Math.floor(a.pos.x), Math.floor(a.pos.y), Math.floor(a.pos.z))) dead = true
      if (!dead && !p.dead) {
        const hw = p.ent.w / 2 + 0.15
        if (Math.abs(a.pos.x - p.ent.pos.x) < hw &&
            a.pos.y > p.ent.pos.y - 0.1 && a.pos.y < p.ent.pos.y + p.ent.h + 0.1 &&
            Math.abs(a.pos.z - p.ent.pos.z) < hw) {
          p.takeDamage(a.dmg, a.pos)
          dead = true
        }
      }
      if (dead) { a.mesh.parent && a.mesh.parent.remove(a.mesh); a.mesh.geometry.dispose(); a.mesh.material.dispose(); a.remove = true }
    }
    this.list = this.list.filter(a => !a.remove)
  }
}
