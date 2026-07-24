// v4 区域帧逻辑：区域标题横幅、鬼城局部雾效、鬼城环境音、鬼城烟雾/火星粒子
// 全部只在主世界生效；雾必须在 dayNight.update 之后覆盖
import * as THREE from 'three'
import { CFG, POS } from '../config.js'
import { zoneAt, regionDist } from './zones.js'

const GHOST_FOG = { near: 42, far: 120, color: new THREE.Color('#3a2f2a') }

export class ZoneFx {
  constructor({ scene, fx, audio, hud, player, dims, ctx }) {
    this.scene = scene; this.fx = fx; this.audio = audio; this.hud = hud
    this.player = player; this.dims = dims; this.ctx = ctx
    this.lastZoneId = null
    this.wailT = 4 + Math.random() * 4
    this.smokeT = 0
    this._baseFogColor = new THREE.Color()
  }

  // 每帧调用（在 dayNight.update 之后）
  update(dt) {
    if (this.dims.active !== 'main') { this.lastZoneId = null; return }
    const p = this.player.ent.pos
    const zone = zoneAt(p.x, p.z)
    const zid = zone?.id || null

    // —— 区域标题横幅（进入边沿）——
    if (zid !== this.lastZoneId) {
      this.lastZoneId = zid
      if (zone) this.hud.banner(`${zone.icon} ${zone.name}`, zoneSubtitle(zid), 1800)
    }

    // —— 鬼城局部雾（按到鬼城有机边界距离 lerp）——
    const fog = this.scene.fog
    const dGhost = regionDist(p.x, p.z, 'ghost')
    const t = Math.max(0, Math.min(1, 1 - dGhost / 30))
    if (t > 0) {
      this._baseFogColor.copy(fog.color)
      fog.near = lerp(CFG.FOG_NEAR, GHOST_FOG.near, t)
      fog.far = lerp(CFG.FOG_FAR, GHOST_FOG.far, t)
      fog.color.lerp(GHOST_FOG.color, t * 0.7)
    }
    // t=0 时 dayNight 已写好正确的雾色/雾距，无需回写

    // —— 鬼城环境音（撕裂声，进区周期触发）——
    if (zid === 'ghost') {
      this.wailT -= dt
      if (this.wailT <= 0) { this.wailT = 6 + Math.random() * 4; this.audio.sfx('ghostwail') }
    }

    // —— 鬼城烟雾 + 火星粒子（复刻代码矿石光环的「周期扫描锚点」模式）——
    this.smokeT -= dt
    if (this.smokeT <= 0 && t > 0.2) {
      this.smokeT = 0.25
      const ruins = this.ctx.STRUCT.ghostRuins || []
      let emitted = 0
      for (const [rx, ry, rz] of ruins) {
        if (emitted >= 6) break
        if (Math.hypot(rx - p.x, rz - p.z) > 24) continue
        emitted++
        // 灰烟：慢升、高寿命、上飘
        this.fx.spawnOne(
          new THREE.Vector3(rx + (Math.random() - 0.5), ry + Math.random() * 2, rz + (Math.random() - 0.5)),
          new THREE.Vector3((Math.random() - 0.5) * 0.4, 0.8 + Math.random() * 0.6, (Math.random() - 0.5) * 0.4),
          Math.random() < 0.5 ? '#4a4a4a' : '#2e2a28',
          { life: 1.8, size: 0.28, gravity: -1.5, drag: 0.4, fade: true })
        // 火星：additive 橙点，概率补发
        if (Math.random() < 0.5) {
          this.fx.spawnOne(
            new THREE.Vector3(rx + (Math.random() - 0.5) * 1.5, ry + 0.2, rz + (Math.random() - 0.5) * 1.5),
            new THREE.Vector3((Math.random() - 0.5) * 1.2, 1.5 + Math.random(), (Math.random() - 0.5) * 1.2),
            Math.random() < 0.5 ? '#ff8a3a' : '#ffd24a',
            { life: 0.8, size: 0.1, gravity: 3, additive: true, fade: true })
        }
      }
    }
  }
}

function zoneSubtitle(id) {
  return {
    city: '绝对安全的落脚点——怪物进不来',
    bamboo: '翠竹深处，藏着熊猫与图腾',
    henge: '古老的石柱阵，中央有向下的入口',
    mountains: '挖穿巨山，稀有矿石在等你',
    ghost: '逝者的废墟，小心天上盘旋的巨龙',
    forest: '幽暗密林，古树与神殿藏在深处',
  }[id] || ''
}

function rectDist(r, x, z) {
  const dx = Math.max(r.x0 - x, 0, x - r.x1)
  const dz = Math.max(r.z0 - z, 0, z - r.z1)
  return Math.hypot(dx, dz)
}
function lerp(a, b, t) { return a + (b - a) * t }
