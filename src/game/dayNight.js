// 昼夜与天空系统（仅主世界推进）：
// 渐变天穹 + 太阳/月亮东升西落 + 方向光跟随太阳 + 夜晚星空 + 漂浮方块云
import * as THREE from 'three'
import { CFG } from '../config.js'

// 调色板：{ zenith 天顶, horizon 地平线, hemi, sun }
const P_DAY   = { zenith: new THREE.Color(0x3d8fd8), horizon: new THREE.Color(0xa8d4ee), hemi: 1.0,  sun: 0.75 }
const P_DUSK  = { zenith: new THREE.Color(0x3a3564), horizon: new THREE.Color(0xff9a5e), hemi: 0.6,  sun: 0.3 }
const P_NIGHT = { zenith: new THREE.Color(0x04060e), horizon: new THREE.Color(0x0e1826), hemi: 0.32, sun: 0.05 }
const P_DAWN  = { zenith: new THREE.Color(0x4a5a8c), horizon: new THREE.Color(0xffc07a), hemi: 0.7,  sun: 0.4 }

function diskTexture(inner, outer, glow) {
  const c = document.createElement('canvas')
  c.width = c.height = 128
  const ctx = c.getContext('2d')
  const grad = ctx.createRadialGradient(64, 64, 8, 64, 64, 62)
  grad.addColorStop(0, inner)
  grad.addColorStop(glow, outer)
  grad.addColorStop(1, 'rgba(0,0,0,0)')
  ctx.fillStyle = grad
  ctx.fillRect(0, 0, 128, 128)
  const tex = new THREE.CanvasTexture(c)
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}

export class DayNight {
  constructor(scene, amb) {
    this.scene = scene
    this.amb = amb            // { hemi, sun, fog }
    this.time = 0.1           // [0,1)，0.5~0.95 为夜
    this.tmp = new THREE.Color()
    this.tmp2 = new THREE.Color()

    // —— 天穹（跟随相机的大球，顶点色渐变）——
    const domeGeo = new THREE.SphereGeometry(340, 20, 12)
    const count = domeGeo.attributes.position.count
    domeGeo.setAttribute('color', new THREE.Float32BufferAttribute(new Float32Array(count * 3), 3))
    this.dome = new THREE.Mesh(domeGeo, new THREE.MeshBasicMaterial({
      vertexColors: true, side: THREE.BackSide, fog: false, depthWrite: false,
    }))
    this.dome.renderOrder = -10
    scene.add(this.dome)

    // —— 太阳 / 月亮 ——
    this.sunSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: diskTexture('#fff8d8', 'rgba(255,215,94,0.9)', 0.35), fog: false, depthWrite: false, transparent: true,
    }))
    this.sunSprite.scale.set(56, 56, 1)
    this.sunSprite.renderOrder = -9
    scene.add(this.sunSprite)
    this.moonSprite = new THREE.Sprite(new THREE.SpriteMaterial({
      map: diskTexture('#f4f6fa', 'rgba(190,205,230,0.85)', 0.45), fog: false, depthWrite: false, transparent: true,
    }))
    this.moonSprite.scale.set(34, 34, 1)
    this.moonSprite.renderOrder = -9
    scene.add(this.moonSprite)

    // —— 星空（上半球随机点）——
    const starPos = []
    for (let i = 0; i < 420; i++) {
      const a = Math.random() * Math.PI * 2
      const e = Math.acos(Math.random())          // 偏向天顶
      const r = 330
      starPos.push(Math.cos(a) * Math.cos(e) * r, Math.sin(e) * r * 0.95 + 5, Math.sin(a) * Math.cos(e) * r)
    }
    this.stars = new THREE.Points(
      new THREE.BufferGeometry().setAttribute('position', new THREE.Float32BufferAttribute(starPos, 3)),
      new THREE.PointsMaterial({ color: 0xdfe8ff, size: 1.6, sizeAttenuation: false, transparent: true, opacity: 0, fog: false, depthWrite: false })
    )
    this.stars.renderOrder = -8
    scene.add(this.stars)

    // —— 方块云（世界空间缓慢漂移，两层）——
    this.clouds = new THREE.Group()
    const cloudMat = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.5, depthWrite: false })
    this.cloudMat = cloudMat
    this.cloudList = []
    let seed = 12345
    const rnd = () => { seed = (seed * 16807) % 2147483647; return seed / 2147483647 }
    for (let i = 0; i < 16; i++) {
      const w = 12 + rnd() * 18, d = 8 + rnd() * 14
      const m = new THREE.Mesh(new THREE.BoxGeometry(w, 1.6, d), cloudMat)
      m.position.set(rnd() * CFG.SX, 158 + rnd() * 18, rnd() * CFG.SZ)
      this.clouds.add(m)
      this.cloudList.push(m)
    }
    scene.add(this.clouds)
  }

  isNight() { return this.time >= CFG.NIGHT_START && this.time < CFG.NIGHT_END }

  // 床：直接到清晨
  sleep() { this.time = 0.02 }

  // 当前调色板（分段插值）
  palette() {
    const t = this.time
    if (t < 0.42) return P_DAY
    if (t < 0.46) return this.mix(P_DAY, P_DUSK, (t - 0.42) / 0.04)
    if (t < 0.52) return this.mix(P_DUSK, P_NIGHT, (t - 0.46) / 0.06)
    if (t < 0.93) return P_NIGHT
    if (t < 0.97) return this.mix(P_NIGHT, P_DAWN, (t - 0.93) / 0.04)
    return this.mix(P_DAWN, P_DAY, (t - 0.97) / 0.03)
  }

  update(dt, isMainDim, camPos) {
    // 天空元素只在主世界显示（其他维度有自己的氛围）
    this.dome.visible = isMainDim
    this.sunSprite.visible = isMainDim
    this.moonSprite.visible = isMainDim
    this.stars.visible = isMainDim
    this.clouds.visible = isMainDim
    if (!isMainDim) return

    this.time = (this.time + dt / CFG.DAY_LENGTH) % 1
    const pal = this.palette()

    // 背景/雾/光强
    this.scene.background.copy(pal.horizon)
    this.amb.fog.color.copy(pal.horizon)
    this.amb.hemi.intensity = pal.hemi
    this.amb.sun.intensity = pal.sun

    // 天穹顶点色 + 跟随相机
    if (camPos) this.dome.position.copy(camPos)
    const colAttr = this.dome.geometry.attributes.color
    const posAttr = this.dome.geometry.attributes.position
    for (let i = 0; i < posAttr.count; i++) {
      const h = THREE.MathUtils.clamp(posAttr.getY(i) / 340, 0, 1)
      const c = this.tmp.copy(pal.horizon).lerp(this.tmp2.copy(pal.zenith), Math.pow(h, 0.65))
      colAttr.setXYZ(i, c.r, c.g, c.b)
    }
    colAttr.needsUpdate = true

    // 太阳/月亮位置（东升西落，白天 0~0.5 太阳、夜里 0.5~1 月亮）
    const R = 300
    const place = (sprite, phase) => {
      const a = phase * Math.PI     // 0=东地平线, π/2=天顶, π=西地平线
      sprite.position.set(
        (camPos ? camPos.x : 0) + Math.cos(a) * R,
        (camPos ? camPos.y : 100) * 0 + 100 + Math.sin(a) * R * 0.75,
        (camPos ? camPos.z : 0) - 60
      )
    }
    const dayPhase = THREE.MathUtils.clamp(this.time / 0.5, 0, 1)
    const nightPhase = THREE.MathUtils.clamp((this.time - 0.5) / 0.5, 0, 1)
    place(this.sunSprite, dayPhase)
    place(this.moonSprite, nightPhase)
    this.sunSprite.material.opacity = this.time < 0.5 ? 1 : 0
    this.moonSprite.material.opacity = this.time >= 0.48 ? 1 : 0

    // 方向光跟随太阳（夜里跟月亮，弱）
    const lightPhase = this.time < 0.5 ? dayPhase : nightPhase
    const la = lightPhase * Math.PI
    this.amb.sun.position.set(Math.cos(la) * 120, Math.max(20, Math.sin(la) * 120), 40)

    // 星星淡入淡出
    const night = this.time >= 0.48 && this.time < 0.97
    const target = night ? 0.9 : 0
    this.stars.material.opacity += (target - this.stars.material.opacity) * Math.min(1, dt * 2)
    if (camPos) this.stars.position.set(camPos.x, 0, camPos.z)

    // 云颜色随天色（白天纯白，黄昏染橙，夜里变暗）
    this.cloudMat.color.set(0xffffff).lerp(pal.horizon, 0.4)
    this.cloudMat.opacity = night ? 0.28 : 0.5
    // 云漂移（世界空间，环绕整张地图）
    for (const m of this.cloudList) {
      m.position.x += dt * 1.1
      if (m.position.x > CFG.SX + 20) m.position.x = -20
    }
  }

  mix(x, y, t) {
    return {
      zenith: x.zenith.clone().lerp(y.zenith, t),
      horizon: x.horizon.clone().lerp(y.horizon, t),
      hemi: x.hemi + (y.hemi - x.hemi) * t,
      sun: x.sun + (y.sun - x.sun) * t,
    }
  }

  serialize() { return this.time }
  deserialize(t) { if (typeof t === 'number') this.time = t }
}
