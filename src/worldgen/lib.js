// worldgen 公共原语（structures.js 与 island/ 各区模块共用）
import { B } from '../blocks.js'

export function fill(world, x0, y0, z0, x1, y1, z1, id) {
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++)
      for (let x = x0; x <= x1; x++) world.setRaw(x, y, z, id)
}

export function flatten(world, cx, cz, half, groundY, clearH = 40, top = B.GRASS) {
  for (let z = cz - half; z <= cz + half; z++)
    for (let x = cx - half; x <= cx + half; x++) {
      for (let y = groundY + 1; y <= groundY + clearH; y++) world.setRaw(x, y, z, B.AIR)
      for (let y = Math.max(2, groundY - 5); y <= groundY; y++) {
        world.setRaw(x, y, z, y === groundY ? top : (y >= groundY - 3 ? B.MUD : B.STONE))
      }
      world.setSurface(x, z, groundY)
    }
}

// 一次成墙 + 掏空（六区神殿/房屋大量复用「墙+内部空气」模式）
export function hollowBox(world, x0, y0, z0, x1, y1, z1, wall, inner = B.AIR) {
  fill(world, x0, y0, z0, x1, y1, z1, wall)
  fill(world, x0 + 1, y0 + 1, z0 + 1, x1 - 1, y1 - 1, z1 - 1, inner)
}

// 密度场铺装统一入口：遍历矩形格子，test(x,z) 为真且 rng()<dens(x,z) 时调 fn(x,z)
// dens 可为数字或 (x,z)=>数字（配合 regionWeight 做核心密边缘疏）
export function scatter(world, x0, z0, x1, z1, rng, test, dens, fn) {
  const densFn = typeof dens === 'function' ? dens : () => dens
  for (let z = z0; z <= z1; z++)
    for (let x = x0; x <= x1; x++) {
      if (test && !test(x, z)) continue
      if (rng() < densFn(x, z)) fn(x, z)
    }
}

// 跟随地表铺一格（只在草/沙/泥上铺，不碰建筑/水）——泛化 outskirts 的 pave
export function pave(world, x, z, id) {
  const g = world.surfaceAt(x, z)
  const top = world.get(x, g, z)
  if (top === B.GRASS || top === B.SAND || top === B.MUD || top === B.SCORCHED) world.setRaw(x, g, z, id)
}

// 沿两点画一条 width 宽的路（跟随地表），砾石/土路共用
export function path(world, x0, z0, x1, z1, width, id) {
  const dx = x1 - x0, dz = z1 - z0
  const steps = Math.max(Math.abs(dx), Math.abs(dz)) || 1
  const half = (width - 1) / 2
  for (let i = 0; i <= steps; i++) {
    const cx = Math.round(x0 + dx * i / steps), cz = Math.round(z0 + dz * i / steps)
    for (let ox = -half; ox <= half; ox++) for (let oz = -half; oz <= half; oz++)
      pave(world, cx + Math.round(ox), cz + Math.round(oz), id)
  }
}
