// 体素世界 v2：参数化尺寸（多维度共用）+ 脏 chunk + 玩家改动记录
import { CFG } from './config.js'
import { B, BLOCKS, isSolid as blockSolid } from './blocks.js'

export class World {
  constructor(dims = { sx: CFG.SX, sy: CFG.SY, sz: CFG.SZ }) {
    this.sx = dims.sx; this.sy = dims.sy; this.sz = dims.sz
    this.chunksX = Math.ceil(this.sx / CFG.CHUNK)
    this.chunksZ = Math.ceil(this.sz / CFG.CHUNK)
    this.data = new Uint8Array(this.sx * this.sy * this.sz)
    this.surface = new Uint16Array(this.sx * this.sz)
    this.edits = new Map()
    this.dirty = new Set()
  }

  inBounds(x, y, z) { return x >= 0 && x < this.sx && y >= 0 && y < this.sy && z >= 0 && z < this.sz }
  idx(x, y, z) { return (y * this.sz + z) * this.sx + x }

  get(x, y, z) {
    if (!this.inBounds(x, y, z)) return B.AIR
    return this.data[this.idx(x, y, z)]
  }

  isSolid(x, y, z) { return blockSolid(this.get(x, y, z)) }
  isFluid(x, y, z) { const id = this.get(x, y, z); return !!BLOCKS[id].fluid }

  setRaw(x, y, z, id) {
    if (!this.inBounds(x, y, z)) return
    this.data[this.idx(x, y, z)] = id
  }

  set(x, y, z, id, record = true) {
    if (!this.inBounds(x, y, z)) return
    this.data[this.idx(x, y, z)] = id
    if (record) this.edits.set(`${x},${y},${z}`, id)
    const C = CFG.CHUNK
    const cx = Math.floor(x / C), cz = Math.floor(z / C)
    this.dirty.add(`${cx},${cz}`)
    const lx = x % C, lz = z % C
    if (lx === 0 && cx > 0) this.dirty.add(`${cx - 1},${cz}`)
    if (lx === C - 1 && cx < this.chunksX - 1) this.dirty.add(`${cx + 1},${cz}`)
    if (lz === 0 && cz > 0) this.dirty.add(`${cx},${cz - 1}`)
    if (lz === C - 1 && cz < this.chunksZ - 1) this.dirty.add(`${cx},${cz + 1}`)
  }

  surfaceAt(x, z) {
    if (x < 0 || x >= this.sx || z < 0 || z >= this.sz) return 0
    return this.surface[z * this.sx + x]
  }
  setSurface(x, z, y) { this.surface[z * this.sx + x] = y }

  applyEdits(list) {
    for (const [x, y, z, id] of list) {
      if (!this.inBounds(x, y, z)) continue
      this.data[this.idx(x, y, z)] = id
      this.edits.set(`${x},${y},${z}`, id)
    }
  }
  serializeEdits() {
    const out = []
    for (const [k, id] of this.edits) {
      const [x, y, z] = k.split(',').map(Number)
      out.push([x, y, z, id])
    }
    return out
  }

  blockName(id) { return BLOCKS[id] ? BLOCKS[id].name : '?' }
}
