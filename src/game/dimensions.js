// 维度管理：main / hell / void / arena
// 每个维度独立 World + ChunkManager + 场景 Group + 氛围；切换时清实体、换 Group、应用氛围
import * as THREE from 'three'
import { CFG, DIMS } from '../config.js'
import { World } from '../world.js'
import { ChunkManager } from '../chunkMesher.js'

export class DimensionManager {
  // ctx: 共享上下文 { world, chunks } —— 各系统通过 ctx.world 动态取当前维度
  constructor(scene, atlas, ctx, ambienceRefs) {
    this.scene = scene
    this.atlas = atlas
    this.ctx = ctx
    this.amb = ambienceRefs      // { hemi, sun, fog: scene.fog }
    this.dims = new Map()        // id -> { world, chunks, group, gen, ambience, surfaceY, generated, lights: [] }
    this.active = 'main'
    this.onSwitch = null         // (id) => {} 切换后回调（清实体等由 main 接）
  }

  register(id, { gen, ambience, surfaceY = null }) {
    const group = new THREE.Group()
    group.visible = false
    this.scene.add(group)
    const world = new World(DIMS[id])
    const chunks = new ChunkManager(world, group, this.atlas, { surfaceY })
    this.dims.set(id, { world, chunks, group, gen, ambience, generated: false, lightObjs: [] })
  }

  get(id) { return this.dims.get(id) }
  activeDim() { return this.dims.get(this.active) }

  // 生成（懒）：gen(world) 返回可选的 lights 数组
  ensure(id, { incremental = false } = {}) {
    const d = this.dims.get(id)
    if (d.generated) return null
    const lights = d.gen(d.world) || []
    d.generated = true
    this.onGenerated && this.onGenerated(id, d)   // 应用存档 edits / 放置拾取物（在建网格之前）
    for (const [lx, ly, lz] of lights) {
      const light = new THREE.PointLight(0xfff2cc, 1.6, 14)
      light.position.set(lx + 0.5, ly + 0.5, lz + 0.5)
      d.group.add(light)
      d.lightObjs.push(light)
    }
    if (incremental) return d.chunks.buildAllIterator()  // 交给调用方分帧
    for (const _ of d.chunks.buildAllIterator()) { /* 同步构建（小维度） */ }
    d.world.dirty.clear()
    return null
  }

  applyAmbience(id, tint = null) {
    const a = this.dims.get(id).ambience
    const sky = tint ?? a.sky
    this.scene.background.set(sky)
    this.amb.fog.color.set(sky)
    this.amb.fog.near = a.fogNear
    this.amb.fog.far = a.fogFar
    this.amb.hemi.intensity = a.hemi
    this.amb.sun.intensity = a.sun
  }

  switchTo(id, spawnPos) {
    if (id === this.active) return
    const from = this.dims.get(this.active)
    const to = this.dims.get(id)
    this.ensure(id)
    from.group.visible = false
    to.group.visible = true
    this.active = id
    this.ctx.world = to.world
    this.ctx.chunks = to.chunks
    this.applyAmbience(id)
    if (this.onSwitch) this.onSwitch(id, spawnPos)
  }
}
