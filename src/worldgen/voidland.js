// 终极之地（设定：石柱悬空符号、怪物依赖符号回血、周围漆黑、往前跑掉虚空；
// 黑暗齿轮在正中央，很多精英怪守护，最强的怪也会出现）
import { POS } from '../config.js'
import { B } from '../blocks.js'

export const VOID = {
  spawn: null, returnPortalCells: [],
  darkGear: null,
  symbols: [],        // 悬空符号方块坐标（符文守卫绑定用）
  guardSpawns: [],    // [ [x,y,z, symbolIndex] ]
  kingPos: null,
  lights: [],
}

function fill(world, x0, y0, z0, x1, y1, z1, id) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++)
      for (let x = x0; x <= x1; x++) world.setRaw(x, y, z, id)
}

export function generateVoidland(world) {
  VOID.returnPortalCells = []; VOID.symbols = []; VOID.guardSpawns = []; VOID.lights = []
  const cx = POS.VOID_CENTER.x, cz = POS.VOID_CENTER.z
  const R = POS.VOID_DISK_R, FY = POS.VOID_FLOOR_Y

  // 黑石圆盘（3 厚），盘外即虚空
  for (let z = 0; z < world.sz; z++)
    for (let x = 0; x < world.sx; x++) {
      const d = Math.hypot(x - cx, z - cz)
      if (d > R) { world.setSurface(x, z, 0); continue }
      for (let y = FY - 2; y <= FY; y++) world.setRaw(x, y, z, B.END_STONE)
      world.setSurface(x, z, FY)
    }

  // 石柱两圈 + 悬空符号（柱顶上方隔 2 格悬浮——「悬空的符号」）
  const ring = (r, count, h) => {
    for (let k = 0; k < count; k++) {
      const ang = (k / count) * Math.PI * 2 + (r === 20 ? 0 : Math.PI / count)
      const px = Math.round(cx + Math.cos(ang) * r)
      const pz = Math.round(cz + Math.sin(ang) * r)
      fill(world, px, FY + 1, pz, px, FY + h, pz, B.END_STONE)
      const sy = FY + h + 3
      world.setRaw(px, sy, pz, B.SYMBOL)
      VOID.symbols.push([px, sy, pz])
      // 每根柱脚一个守卫刷新位（绑定该符号）
      VOID.guardSpawns.push([px + 1.5, FY + 1, pz + 0.5, VOID.symbols.length - 1])
    }
  }
  ring(20, 6, 8)
  ring(35, 8, 12)

  // 正中央：黑暗齿轮祭坛（代码矿石底座）
  fill(world, cx - 1, FY + 1, cz - 1, cx + 1, FY + 1, cz + 1, B.CODE)
  VOID.darkGear = [cx, FY + 2.6, cz]
  VOID.kingPos = [cx + 4.5, FY + 1, cz + 0.5]     // 暗影君王（最强的怪）
  VOID.lights.push([cx, FY + 6, cz])

  // 入口平台 + 返回门
  const ex = POS.VOID_SPAWN.x, ez = POS.VOID_SPAWN.z
  fill(world, ex - 3, FY, ez - 3, ex + 3, FY, ez + 3, B.END_STONE)
  fill(world, ex - 2, FY + 1, ez - 3, ex + 2, FY + 5, ez - 3, B.PORTAL_FRAME)
  for (let y = FY + 2; y <= FY + 4; y++) for (let x = ex - 1; x <= ex + 1; x++) {
    world.setRaw(x, y, ez - 3, B.PORTAL)
    VOID.returnPortalCells.push([x, y, ez - 3])
  }
  VOID.spawn = [ex + 0.5, FY + 1, ez + 1.5]
  VOID.lights.push([ex, FY + 4, ez])
}
