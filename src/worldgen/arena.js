// 塔竞技房：无尽爬塔的虚拟楼层（同一房间按楼层刷怪；禁挖禁放）
import { B } from '../blocks.js'

export const ARENA = {
  spawn: null,
  returnPortalCells: [],   // 回大厅（常开，入口旁）
  nextPortalCells: [],     // 下一层传送门（清层后由 towerV2 填充 PORTAL）
  spawnPoints: [],
  bossPos: null,
  lights: [],
}

function fill(world, x0, y0, z0, x1, y1, z1, id) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++)
      for (let x = x0; x <= x1; x++) world.setRaw(x, y, z, id)
}

export function generateArena(world) {
  ARENA.returnPortalCells = []; ARENA.nextPortalCells = []; ARENA.spawnPoints = []; ARENA.lights = []
  const cx = 24, cz = 24, half = 10, FY = 8

  // 房间：21×21，墙高 6，封顶
  fill(world, cx - half - 1, FY - 1, cz - half - 1, cx + half + 1, FY + 7, cz + half + 1, B.BRICK)
  fill(world, cx - half, FY, cz - half, cx + half, FY + 6, cz + half, B.AIR)
  fill(world, cx - half, FY - 1, cz - half, cx + half, FY - 1, cz + half, B.BRICK)
  for (let z = 0; z < world.sz; z++) for (let x = 0; x < world.sx; x++) world.setSurface(x, z, FY - 1)

  // 四角荧光石
  for (const dx of [-half + 1, half - 1]) for (const dz of [-half + 1, half - 1])
    world.setRaw(cx + dx, FY + 5, cz + dz, B.GLOWSTONE)

  // 南侧：入场点 + 回大厅传送门（常开）
  fill(world, cx - 1, FY, cz + half, cx + 1, FY + 4, cz + half, B.PORTAL_FRAME)
  for (let y = FY + 1; y <= FY + 3; y++) {
    world.setRaw(cx - 1 + 1, y, cz + half, B.PORTAL) // 中列
    ARENA.returnPortalCells.push([cx, y, cz + half])
  }
  ARENA.spawn = [cx + 0.5, FY, cz + half - 2.5]

  // 北墙：下一层传送门位（默认门框+封闭，清层后填 PORTAL）
  fill(world, cx - 1, FY, cz - half, cx + 1, FY + 4, cz - half, B.PORTAL_FRAME)
  for (let y = FY + 1; y <= FY + 3; y++) ARENA.nextPortalCells.push([cx, y, cz - half])

  // 刷怪点
  ARENA.spawnPoints = [
    [cx - 6.5, FY, cz - 4.5], [cx + 6.5, FY, cz - 4.5],
    [cx - 6.5, FY, cz + 3.5], [cx + 6.5, FY, cz + 3.5],
    [cx - 0.5, FY, cz - 6.5], [cx + 3.5, FY, cz + 0.5],
    [cx - 3.5, FY, cz + 0.5], [cx + 0.5, FY, cz + 5.5],
  ]
  ARENA.bossPos = [cx + 0.5, FY, cz - 2.5]
  ARENA.lights.push([cx, FY + 4, cz])
}
