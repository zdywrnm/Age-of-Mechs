// 船：放到水上骑乘（E 上下船，W/S 油门 A/D 转向，带惯性滑行）
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
  const lamp = new THREE.Mesh(new THREE.BoxGeometry(0.12, 0.12, 0.12), new THREE.MeshBasicMaterial({ color: '#ffd75e' }))
  lamp.position.set(0, 0.55, -1.15)
  g.add(hull, inner, bow, lamp)
  return g
}

export class BoatManager {
  constructor(mainGroup, ctx, player) {
    this.group = mainGroup     // 船只存在于主世界
    this.ctx = ctx
    this.player = player
    this.boats = []            // { pos, yaw, speed, mesh, bobT }
    this.riding = null
    this.onWake = null         // (pos, speed) => {} 浪花特效钩子（fx 层接）
  }

  // 该水平位置是否可行船：海平面这一格是水
  navigable(x, z) {
    return this.ctx.world.get(Math.floor(x), CFG.SEA_LEVEL, Math.floor(z)) === B.WATER
  }

  place(x, y, z) {
    const mesh = buildBoat()
    const boat = { pos: new THREE.Vector3(x, CFG.SEA_LEVEL + 0.05, z), yaw: 0, speed: 0, bobT: Math.random() * 5, mesh }
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

  // E 键：上船/下船
  toggleRide() {
    const p = this.player
    if (this.riding) {
      // 下船：优先放到岸/浅水侧
      const b = this.riding
      let ox = 1.2, oz = 0
      if (this.navigable(b.pos.x + 1.2, b.pos.z) && !this.navigable(b.pos.x - 1.2, b.pos.z)) ox = -1.2
      p.ent.pos.x = b.pos.x + ox
      p.ent.pos.y = b.pos.y + 1
      p.ent.pos.z = b.pos.z + oz
      b.speed = 0
      this.riding = null
      return 'off'
    }
    const b = this.nearest(p.ent.pos)
    if (b) { this.riding = b; return 'on' }
    return null
  }

  update(dt, controls) {
    const p = this.player
    for (const b of this.boats) {
      b.bobT += dt
      if (b !== this.riding) {
        b.mesh.position.set(b.pos.x, b.pos.y + Math.sin(b.bobT * 1.6) * 0.04, b.pos.z)
        continue
      }

      // —— 驾驶 ——
      let throttle = 0, turn = 0
      if (controls.enabled) {
        if (controls.keys.KeyW) throttle = 1
        if (controls.keys.KeyS) throttle = -0.5
        if (controls.keys.KeyA) turn = -1
        if (controls.keys.KeyD) turn = 1
        if (controls.touchMove) {   // 触屏摇杆开船
          if (controls.touchMove.z > 0.25) throttle = Math.min(1, controls.touchMove.z)
          else if (controls.touchMove.z < -0.25) throttle = Math.max(-0.5, controls.touchMove.z * 0.5)
          if (Math.abs(controls.touchMove.x) > 0.3) turn = Math.sign(controls.touchMove.x)
        }
      }
      // A/D 独立转向（低速转得慢，有开起来的感觉）
      const turnRate = 1.6 * (0.4 + 0.6 * Math.min(1, Math.abs(b.speed) / CFG.BOAT_SPEED))
      b.yaw += turn * turnRate * dt * (b.speed < 0 ? -1 : 1)
      // 油门 + 惯性
      const target = throttle * CFG.BOAT_SPEED
      const accel = throttle !== 0 ? 6 : 2.5   // 松油门缓慢滑行减速
      b.speed += THREE.MathUtils.clamp(target - b.speed, -accel * dt, accel * dt)
      if (Math.abs(b.speed) < 0.05 && throttle === 0) b.speed = 0

      if (Math.abs(b.speed) > 0.05) {
        const fx = Math.sin(b.yaw), fz = -Math.cos(b.yaw)
        const step = b.speed * dt
        let nx = b.pos.x + fx * step, nz = b.pos.z + fz * step
        // 船头探测海平面这一格（浅水照样能开）；碰岸减速滑移，不锁死
        if (this.navigable(nx, nz)) {
          b.pos.x = nx; b.pos.z = nz
        } else if (this.navigable(nx, b.pos.z)) {
          b.pos.x = nx; b.speed *= 0.8
        } else if (this.navigable(b.pos.x, nz)) {
          b.pos.z = nz; b.speed *= 0.8
        } else {
          b.speed *= 0.4    // 顶住岸边，松一下方向就能倒出来
        }
        if (this.onWake && Math.abs(b.speed) > 3) this.onWake(b.pos, b.speed)
      }

      // 浮在水面 + 随速度轻微俯仰
      b.pos.y = CFG.SEA_LEVEL + 0.05
      b.mesh.position.set(b.pos.x, b.pos.y + Math.sin(b.bobT * 2.2) * 0.05, b.pos.z)
      b.mesh.rotation.y = -b.yaw
      b.mesh.rotation.x = -b.speed / CFG.BOAT_SPEED * 0.06

      // 玩家坐船上
      p.ent.pos.x = b.pos.x
      p.ent.pos.y = b.pos.y + 0.35
      p.ent.pos.z = b.pos.z
      p.ent.vel.x = p.ent.vel.y = p.ent.vel.z = 0
    }
  }

  serialize() { return this.boats.map(b => [b.pos.x, b.pos.y, b.pos.z]) }
  deserialize(list) {
    if (!list) return
    for (const [x, y, z] of list) this.place(x, y, z)
  }
}
