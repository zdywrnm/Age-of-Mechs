// 船：放到水上骑乘（E 上下船，WASD 开船）
import * as THREE from 'three'
import { CFG } from '../config.js'
import { B } from '../blocks.js'

function buildBoat() {
  const g = new THREE.Group()
  const hull = new THREE.Mesh(new THREE.BoxGeometry(1.1, 0.35, 2.0), new THREE.MeshLambertMaterial({ color: '#8f6b3d' }))
  hull.position.y = 0.25
  const inner = new THREE.Mesh(new THREE.BoxGeometry(0.8, 0.2, 1.6), new THREE.MeshLambertMaterial({ color: '#6b4d29' }))
  inner.position.y = 0.42
  const bow = new THREE.Mesh(new THREE.BoxGeometry(0.5, 0.3, 0.4), new THREE.MeshLambertMaterial({ color: '#8f6b3d' }))
  bow.position.set(0, 0.35, -1.1)
  g.add(hull, inner, bow)
  return g
}

export class BoatManager {
  constructor(mainGroup, ctx, player) {
    this.group = mainGroup     // 船只存在于主世界
    this.ctx = ctx
    this.player = player
    this.boats = []            // { pos: Vector3, yaw, mesh }
    this.riding = null
  }

  place(x, y, z) {
    const mesh = buildBoat()
    const boat = { pos: new THREE.Vector3(x, y, z), yaw: 0, mesh }
    mesh.position.copy(boat.pos)
    this.group.add(mesh)
    this.boats.push(boat)
    return boat
  }

  nearest(pos, maxD = 3) {
    let best = null, bd = maxD
    for (const b of this.boats) {
      const d = Math.hypot(b.pos.x - pos.x, b.pos.y - pos.y, b.pos.z - pos.z)
      if (d < bd) { bd = d; best = b }
    }
    return best
  }

  // E 键：上船/下船。返回处理结果字符串或 null
  toggleRide() {
    const p = this.player
    if (this.riding) {
      // 下船：放到船侧
      p.ent.pos.x = this.riding.pos.x + 1.2
      p.ent.pos.y = this.riding.pos.y + 1
      p.ent.pos.z = this.riding.pos.z
      this.riding = null
      return 'off'
    }
    const b = this.nearest(p.ent.pos)
    if (b) { this.riding = b; return 'on' }
    return null
  }

  update(dt, controls) {
    const p = this.player
    if (!this.riding) return
    const b = this.riding
    // 开船：朝视线方向前进
    let thrust = 0
    if (controls.enabled) {
      if (controls.keys.KeyW) thrust = 1
      if (controls.keys.KeyS) thrust = -0.5
    }
    b.yaw = controls.yaw
    if (thrust !== 0) {
      const vx = Math.sin(b.yaw) * CFG.BOAT_SPEED * thrust * dt
      const vz = -Math.cos(b.yaw) * CFG.BOAT_SPEED * thrust * dt
      const nx = b.pos.x + vx, nz = b.pos.z + vz
      // 前方必须还是水（船头水面检测）
      const ahead = this.ctx.world.get(Math.floor(nx), Math.floor(b.pos.y - 0.2), Math.floor(nz))
      if (ahead === B.WATER) { b.pos.x = nx; b.pos.z = nz }
    }
    // 浮在水面
    b.pos.y = CFG.SEA_LEVEL + 0.05
    b.mesh.position.copy(b.pos)
    b.mesh.rotation.y = -b.yaw
    // 玩家坐船上
    p.ent.pos.x = b.pos.x
    p.ent.pos.y = b.pos.y + 0.35
    p.ent.pos.z = b.pos.z
    p.ent.vel.x = p.ent.vel.y = p.ent.vel.z = 0
  }

  serialize() { return this.boats.map(b => [b.pos.x, b.pos.y, b.pos.z]) }
  deserialize(list) {
    if (!list) return
    for (const [x, y, z] of list) this.place(x, y, z)
  }
}
