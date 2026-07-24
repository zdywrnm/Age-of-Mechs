// v5 小装饰库：路灯/水井/喷泉/花丛/栅栏/篝火/长椅/行道树/池塘/树篱
// 城市/郊区/六区复用，避免每处手写重复装饰。需发光的往 lights 数组 push
import { B } from '../blocks.js'
import { fill } from './lib.js'

const surf = (world, x, z) => world.surfaceAt(x, z)

// 路灯柱：木柱 + 顶荧光石（push lights）
export function lampPost(world, x, z, lights) {
  const g = surf(world, x, z)
  fill(world, x, g + 1, z, x, g + 4, z, B.WOOD)
  world.setRaw(x, g + 5, z, B.GLOWSTONE)
  lights && lights.push([x, g + 5, z])
}

// 水井：石砖井圈 + 水 + 木井架
export function well(world, cx, cz) {
  const g = surf(world, cx, cz)
  for (const [dx, dz] of [[-1, -1], [0, -1], [1, -1], [-1, 0], [1, 0], [-1, 1], [0, 1], [1, 1]])
    fill(world, cx + dx, g, cz + dz, cx + dx, g + 1, cz + dz, B.BRICK)
  world.setRaw(cx, g, cz, B.WATER)
  world.setRaw(cx - 1, g + 1, cz - 1, B.WOOD); world.setRaw(cx + 1, g + 1, cz - 1, B.WOOD)
  fill(world, cx - 1, g + 2, cz - 1, cx + 1, g + 2, cz - 1, B.WOOD)   // 井架横梁
  fill(world, cx - 1, g + 3, cz - 1, cx + 1, g + 3, cz + 1, B.ROOF_TILE) // 小顶
}

// 喷泉：石台 + 水 + 中心海晶灯（push lights）
export function fountain(world, cx, cz, lights) {
  const g = surf(world, cx, cz)
  for (let dz = -3; dz <= 3; dz++) for (let dx = -3; dx <= 3; dx++) {
    if (dx * dx + dz * dz > 10) continue
    world.setRaw(cx + dx, g, cz + dz, B.BRICK)
    if (dx * dx + dz * dz <= 4) world.setRaw(cx + dx, g + 1, cz + dz, B.WATER)
  }
  world.setRaw(cx, g + 1, cz, B.PALACE_PILLAR)
  world.setRaw(cx, g + 2, cz, B.SEA_LANTERN)
  lights && lights.push([cx, g + 3, cz])
}

// 花丛：草地上撒红/黄花 + 高草
export function flowerPatch(world, cx, cz, r, rng) {
  for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
    if (dx * dx + dz * dz > r * r) continue
    const x = cx + dx, z = cz + dz, g = surf(world, x, z)
    if (world.get(x, g, z) !== B.GRASS) continue
    const t = rng()
    if (t < 0.22) world.setRaw(x, g + 1, z, B.FLOWER_RED)
    else if (t < 0.44) world.setRaw(x, g + 1, z, B.FLOWER_YELLOW)
    else if (t < 0.7) world.setRaw(x, g + 1, z, B.TALL_GRASS)
  }
}

// 栅栏段：两点之间一排栅栏（跟随地表）
export function fenceLine(world, x0, z0, x1, z1) {
  const dx = x1 - x0, dz = z1 - z0
  const steps = Math.max(Math.abs(dx), Math.abs(dz)) || 1
  for (let i = 0; i <= steps; i++) {
    const x = Math.round(x0 + dx * i / steps), z = Math.round(z0 + dz * i / steps)
    const g = surf(world, x, z)
    if (world.get(x, g, z) !== B.AIR && world.get(x, g + 1, z) === B.AIR) world.setRaw(x, g + 1, z, B.FENCE)
  }
}

// 篝火：地上一格篝火 + 四周石子（push lights）
export function campfire(world, x, z, lights) {
  const g = surf(world, x, z)
  world.setRaw(x, g + 1, z, B.CAMPFIRE)
  lights && lights.push([x, g + 2, z])
}

// 长椅：两格木凳
export function bench(world, x, z) {
  const g = surf(world, x, z)
  world.setRaw(x, g + 1, z, B.PLANK); world.setRaw(x + 1, g + 1, z, B.PLANK)
}

// 行道树：小树（木干 + 树叶球）
export function streetTree(world, x, z) {
  const g = surf(world, x, z)
  if (world.get(x, g, z) !== B.GRASS && world.get(x, g, z) !== B.BRICK && world.get(x, g, z) !== B.GRAVEL) return
  const h = 4 + Math.floor((x * 7 + z * 13) % 3)
  for (let y = 1; y <= h; y++) world.setRaw(x, g + y, z, B.WOOD)
  const top = g + h
  for (let dy = -1; dy <= 2; dy++) for (let dz = -2; dz <= 2; dz++) for (let dx = -2; dx <= 2; dx++) {
    if (dx * dx + dy * dy + dz * dz > 5) continue
    if (world.get(x + dx, top + dy + 1, z + dz) === B.AIR) world.setRaw(x + dx, top + dy + 1, z + dz, B.LEAVES)
  }
}

// 小池塘：挖低一格灌水 + 沙岸
export function pond(world, cx, cz, r) {
  const g = surf(world, cx, cz)
  for (let dz = -r; dz <= r; dz++) for (let dx = -r; dx <= r; dx++) {
    const d = Math.hypot(dx, dz)
    if (d > r) continue
    const x = cx + dx, z = cz + dz
    if (d < r - 1) { world.setRaw(x, g, z, B.WATER); world.setRaw(x, g - 1, z, B.MUD); world.setSurface(x, z, g - 1) }
    else world.setRaw(x, g, z, B.SAND)
  }
}

// 树篱：一排树叶矮墙
export function hedge(world, x0, z0, x1, z1) {
  const dx = x1 - x0, dz = z1 - z0
  const steps = Math.max(Math.abs(dx), Math.abs(dz)) || 1
  for (let i = 0; i <= steps; i++) {
    const x = Math.round(x0 + dx * i / steps), z = Math.round(z0 + dz * i / steps)
    const g = surf(world, x, z)
    if (world.get(x, g + 1, z) === B.AIR) fill(world, x, g + 1, z, x, g + 2, z, B.LEAVES)
  }
}
