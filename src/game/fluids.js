// 液体流动模拟（有限扩散）：挖开水/岩浆旁的方块，液体会流过去填补
// 规则（为小朋友的体验设计，不做完整流体）：
//  - 空格的上方或四周有液体 → 该空格被同种液体填充
//  - 向下流动不限距离；水平扩散限 SPREAD 格（避免整片海「漏」进一个矿洞淹掉一切）
//  - 每帧限量处理，视觉上呈现「慢慢流过来」的效果
import { B } from '../blocks.js'

const SPREAD = 4          // 水平扩散上限
const CELLS_PER_SEC = 50  // 每秒填充格数（流动速度）

export class FluidSim {
  constructor() {
    this.queue = []       // { x, y, z, depth }
    this.acc = 0
    this.world = null     // 当前维度的 world（dims 切换时由 main 更新）
  }

  setWorld(world) {
    if (this.world !== world) { this.world = world; this.queue = [] }
  }

  fluidNeighbor(x, y, z) {
    const w = this.world
    if (w.get(x, y + 1, z) === B.WATER) return B.WATER
    if (w.get(x, y + 1, z) === B.LAVA) return B.LAVA
    for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
      const id = w.get(x + dx, y, z + dz)
      if (id === B.WATER || id === B.LAVA) return id
    }
    return 0
  }

  // 方块被挖掉/炸掉时调用：如果它旁边有液体，进流动队列
  notifyRemoved(x, y, z) {
    if (!this.world) return
    if (this.fluidNeighbor(x, y, z)) this.queue.push({ x, y, z, depth: 0 })
  }

  tick(dt) {
    if (!this.world || this.queue.length === 0) return
    this.acc += dt * CELLS_PER_SEC
    while (this.acc >= 1 && this.queue.length > 0) {
      this.acc -= 1
      const { x, y, z, depth } = this.queue.shift()
      const w = this.world
      if (w.get(x, y, z) !== B.AIR) continue
      const fluid = this.fluidNeighbor(x, y, z)
      if (!fluid) continue
      // 从上方来的流动重置水平扩散计数
      const fromAbove = w.get(x, y + 1, z) === fluid
      const d = fromAbove ? 0 : depth
      w.set(x, y, z, fluid, true)
      // 继续向下与四周扩散
      if (w.get(x, y - 1, z) === B.AIR) this.queue.push({ x, y: y - 1, z, depth: 0 })
      if (d < SPREAD) {
        for (const [dx, dz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) {
          if (w.get(x + dx, y, z + dz) === B.AIR) this.queue.push({ x: x + dx, y, z: z + dz, depth: d + 1 })
        }
      }
    }
    // 队列兜底：防极端情况堆积
    if (this.queue.length > 4000) this.queue.length = 4000
  }
}
