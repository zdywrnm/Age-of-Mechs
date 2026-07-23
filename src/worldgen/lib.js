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
