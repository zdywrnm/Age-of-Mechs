// 昼夜系统（仅主世界推进）：天空/雾/光照渐变，夜间怪物更多；床跳过夜晚
import * as THREE from 'three'
import { CFG } from '../config.js'

const DAY = { sky: new THREE.Color(0x87c9f0), hemi: 1.0, sun: 0.7 }
const DUSK = { sky: new THREE.Color(0xf2a65e), hemi: 0.65, sun: 0.35 }
const NIGHT = { sky: new THREE.Color(0x0d1626), hemi: 0.35, sun: 0.06 }

export class DayNight {
  constructor(scene, amb) {
    this.scene = scene
    this.amb = amb            // { hemi, sun, fog }
    this.time = 0.1           // [0,1)，0.5~0.95 为夜
    this.tmp = new THREE.Color()
  }

  isNight() { return this.time >= CFG.NIGHT_START && this.time < CFG.NIGHT_END }

  // 床：直接到清晨
  sleep() { this.time = 0.02 }

  update(dt, isMainDim) {
    if (!isMainDim) return
    this.time = (this.time + dt / CFG.DAY_LENGTH) % 1
    // 分段插值：0~0.42 白天 | 0.42~0.5 黄昏 | 0.5~0.95 夜 | 0.95~1 黎明
    let a, b, t
    if (this.time < 0.42) { a = DAY; b = DAY; t = 0 }
    else if (this.time < 0.5) { a = DAY; b = NIGHT; t = (this.time - 0.42) / 0.08; a = this.mix(DAY, DUSK, Math.min(1, t * 2)); b = NIGHT; t = Math.max(0, t * 2 - 1) }
    else if (this.time < 0.95) { a = NIGHT; b = NIGHT; t = 0 }
    else { a = NIGHT; b = DAY; t = (this.time - 0.95) / 0.05 }
    const sky = this.tmp.copy(a.sky).lerp(b.sky, t)
    this.scene.background.copy(sky)
    this.amb.fog.color.copy(sky)
    this.amb.hemi.intensity = a.hemi + (b.hemi - a.hemi) * t
    this.amb.sun.intensity = a.sun + (b.sun - a.sun) * t
  }

  mix(x, y, t) {
    return { sky: x.sky.clone().lerp(y.sky, t), hemi: x.hemi + (y.hemi - x.hemi) * t, sun: x.sun + (y.sun - x.sun) * t }
  }

  serialize() { return this.time }
  deserialize(t) { if (typeof t === 'number') this.time = t }
}
