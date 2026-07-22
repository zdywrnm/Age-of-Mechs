// 液体流动模拟 v2：渐进式流动——
// 缺口先被「流动的水」（浅层）漫过去，稳定 1.2 秒后才涨成整格水，
// 视觉上呈现「水流过来→水位上涨」两段过程，而不是瞬间填充。
import { B } from '../blocks.js'

const SPREAD = 4          // 水平扩散上限
const CELLS_PER_SEC = 40  // 每秒漫延格数（流动速度）
const RISE_DELAY = 1.2    // 浅水涨满所需秒数

export class FluidSim {
  constructor() {
    this.queue = []       // { x, y, z, depth }
    this.rising = []      // { x, y, z, t } 等待涨满的浅水
    this.acc = 0
    this.world = null
    this.onFill = null    // (x, y, z, fluid) => {} 特效钩子
  }

  setWorld(world) {
    if (this.world !== world) { this.world = world; this.queue = []; this.rising = [] }
  }

  isWater(id) { return id === B.WATER || id === B.WATER_FLOW }

  fluidNeighbor(x, y, z) {
    const w = this.world
    const up = w.get(x, y + 1, z)
    if (this.isWater(up)) return B.WATER
    if (up === B.LAVA) return B.LAVA
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const id = w.get(x + dx, y, z + dz)
      if (this.isWater(id)) return B.WATER
      if (id === B.LAVA) return B.LAVA
    }
    return 0
  }

  // 方块被挖掉/炸掉时调用：如果它旁边有液体，进流动队列
  notifyRemoved(x, y, z) {
    if (!this.world) return
    if (this.fluidNeighbor(x, y, z)) this.queue.push({ x, y, z, depth: 0 })
  }

  tick(dt) {
    if (!this.world) return
    // —— 漫延 ——
    if (this.queue.length) {
      this.acc += dt * CELLS_PER_SEC
      while (this.acc >= 1 && this.queue.length > 0) {
        this.acc -= 1
        const { x, y, z, depth } = this.queue.shift()
        const w = this.world
        if (w.get(x, y, z) !== B.AIR) continue
        const fluid = this.fluidNeighbor(x, y, z)
        if (!fluid) continue
        const fromAbove = this.isWater(w.get(x, y + 1, z)) || w.get(x, y + 1, z) === B.LAVA
        const d = fromAbove ? 0 : depth
        // 水先以浅层「流动的水」漫过去；岩浆直接整格（岩浆黏稠）
        if (fluid === B.WATER) {
          w.set(x, y, z, B.WATER_FLOW, true)
          this.rising.push({ x, y, z, t: RISE_DELAY })
        } else {
          w.set(x, y, z, fluid, true)
        }
        this.onFill && this.onFill(x, y, z, fluid)
        if (w.get(x, y - 1, z) === B.AIR) this.queue.push({ x, y: y - 1, z, depth: 0 })
        if (d < SPREAD) {
          for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
            if (w.get(x + dx, y, z + dz) === B.AIR) this.queue.push({ x: x + dx, y, z: z + dz, depth: d + 1 })
          }
        }
      }
      if (this.queue.length > 4000) this.queue.length = 4000
    }
    // —— 浅水涨满 ——
    if (this.rising.length) {
      for (const r of this.rising) {
        r.t -= dt
        if (r.t <= 0 && this.world.get(r.x, r.y, r.z) === B.WATER_FLOW) {
          this.world.set(r.x, r.y, r.z, B.WATER, true)
        }
      }
      this.rising = this.rising.filter(r => r.t > 0)
    }
  }
}
