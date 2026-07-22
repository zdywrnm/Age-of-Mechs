// 键鼠输入 + Pointer Lock + 第三人称相机
import * as THREE from 'three'
import { CFG } from '../config.js'
import { raycastVoxel } from './interaction.js'

export class Controls {
  constructor(domElement) {
    this.dom = domElement
    this.keys = {}
    this.yaw = 0                // yaw=0 → forward=(0,·,-1) 朝北，出生点在塔南侧，正好面向塔门
    this.pitch = -0.15
    this.locked = false
    this.virtualLock = false    // debug/自动化环境兜底：无指针锁定也能玩（键盘+方向键视角）
    this.leftDown = false
    this.rightDown = false
    this.enabled = true         // 对话/界面打开时禁用
    this.onLeftDown = null      // 按下瞬间回调（攻击/开始挖掘由 interaction 处理）
    this.onRightDown = null
    this.onKeyDown = null       // (code) => {}
    this.wheelDelta = 0

    addEventListener('keydown', e => {
      if (e.repeat) return
      this.keys[e.code] = true
      if (this.onKeyDown && this.enabled) this.onKeyDown(e.code)
    })
    addEventListener('keyup', e => { this.keys[e.code] = false })
    addEventListener('blur', () => { this.keys = {}; this.leftDown = false; this.rightDown = false })

    this.dom.addEventListener('mousedown', e => {
      if (!this.isLocked() || !this.enabled) return
      if (e.button === 0) { this.leftDown = true; this.onLeftDown && this.onLeftDown() }
      if (e.button === 2) { this.rightDown = true; this.onRightDown && this.onRightDown() }
    })
    addEventListener('mouseup', e => {
      if (e.button === 0) this.leftDown = false
      if (e.button === 2) this.rightDown = false
    })
    this.dom.addEventListener('contextmenu', e => e.preventDefault())
    addEventListener('wheel', e => { this.wheelDelta += Math.sign(e.deltaY) })

    addEventListener('mousemove', e => {
      if (!this.locked || !this.enabled) return
      this.yaw += e.movementX * 0.0026
      this.pitch -= e.movementY * 0.0026
      // 允许几乎垂直向下看：设定里的寻宝任务需要「垂直往下挖一百格」
      this.pitch = Math.max(-1.55, Math.min(1.45, this.pitch))
    })
    document.addEventListener('pointerlockchange', () => {
      this.locked = document.pointerLockElement === this.dom
      if (this.onLockChange) this.onLockChange(this.locked)
    })
  }

  isLocked() { return this.locked || this.virtualLock }

  requestLock() {
    if (!this.locked) this.dom.requestPointerLock()
  }

  // 三档视角（V 键，淇淇拍板）：0=第一人称 1=第三人称背后 2=第三人称正面
  cycleCamMode() {
    this.camMode = ((this.camMode || 0) + 1) % 3
    return this.camMode
  }

  // 方向键转视角（触控板/自动化环境的补充操作方式）
  updateLook(dt) {
    if (!this.enabled) return
    const sp = 2.2 * dt
    if (this.keys.ArrowLeft) this.yaw -= sp
    if (this.keys.ArrowRight) this.yaw += sp
    if (this.keys.ArrowUp) this.pitch = Math.min(1.45, this.pitch + sp)
    if (this.keys.ArrowDown) this.pitch = Math.max(-1.55, this.pitch - sp)
  }

  forward(out = new THREE.Vector3()) {
    const cp = Math.cos(this.pitch)
    return out.set(Math.sin(this.yaw) * cp, Math.sin(this.pitch), -Math.cos(this.yaw) * cp)
  }
  forwardFlat(out = new THREE.Vector3()) {
    return out.set(Math.sin(this.yaw), 0, -Math.cos(this.yaw))
  }
  rightFlat(out = new THREE.Vector3()) {
    return out.set(Math.cos(this.yaw), 0, Math.sin(this.yaw))
  }

  // 相机：三档视角，体素射线防穿墙
  updateCamera(camera, world, headPos) {
    const mode = this.camMode || 0
    const fwd = this.forward(new THREE.Vector3())
    if (mode === 0) {
      // 第一人称
      this.camDist = 0.01
      camera.position.copy(headPos)
      camera.lookAt(headPos.x + fwd.x, headPos.y + fwd.y, headPos.z + fwd.z)
      return
    }
    // 第三人称：背后(1) / 正面(2)
    const dir = mode === 1 ? fwd.clone().negate() : fwd.clone()
    let dist = CFG.CAM_DIST
    const hit = raycastVoxel(world, headPos, dir, CFG.CAM_DIST)
    if (hit) dist = Math.max(0.5, hit.dist - 0.35)
    this.camDist = dist
    camera.position.copy(headPos).addScaledVector(dir, dist)
    camera.lookAt(headPos)
  }
}
