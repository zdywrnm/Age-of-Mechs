// AABB 体素碰撞 v2：玩家与怪物共用；支持水/岩浆浮力、无重力（水生/飞行怪）
// entity: { pos, vel, w, h, onGround, inWater, inLava, swimUp?, noGravity? }
import { CFG } from '../config.js'
import { B } from '../blocks.js'

const EPS = 0.001

function collides(world, px, py, pz, w, h) {
  const hw = w / 2
  const x0 = Math.floor(px - hw), x1 = Math.floor(px + hw - EPS)
  const y0 = Math.floor(py), y1 = Math.floor(py + h - EPS)
  const z0 = Math.floor(pz - hw), z1 = Math.floor(pz + hw - EPS)
  for (let y = y0; y <= y1; y++)
    for (let z = z0; z <= z1; z++)
      for (let x = x0; x <= x1; x++)
        if (world.isSolid(x, y, z)) return true
  return false
}

export function moveEntity(world, ent, dt) {
  const { w, h } = ent
  // 介质检测（腰部）
  const waist = world.get(Math.floor(ent.pos.x), Math.floor(ent.pos.y + h * 0.5), Math.floor(ent.pos.z))
  ent.inWater = waist === B.WATER
  ent.inLava = waist === B.LAVA

  if (!ent.noGravity) {
    if (ent.inWater || ent.inLava) {
      ent.vel.y += CFG.GRAVITY * CFG.WATER_GRAVITY_MULT * dt
      ent.vel.y *= Math.max(0, 1 - CFG.WATER_DRAG * dt)
      if (ent.swimUp) ent.vel.y = CFG.SWIM_UP_SPEED * (ent.inLava ? 0.6 : 1)
    } else {
      ent.vel.y += CFG.GRAVITY * dt
    }
    if (ent.vel.y < CFG.TERMINAL_VY) ent.vel.y = CFG.TERMINAL_VY
  }

  // X 轴
  let nx = ent.pos.x + ent.vel.x * dt
  if (collides(world, nx, ent.pos.y, ent.pos.z, w, h)) {
    const dir = Math.sign(ent.vel.x)
    if (dir > 0) nx = Math.floor(nx + w / 2) - w / 2 - EPS
    else if (dir < 0) nx = Math.floor(nx - w / 2) + 1 + w / 2 + EPS
    if (collides(world, nx, ent.pos.y, ent.pos.z, w, h)) nx = ent.pos.x
    ent.vel.x = 0
  }
  ent.pos.x = nx

  // Z 轴
  let nz = ent.pos.z + ent.vel.z * dt
  if (collides(world, ent.pos.x, ent.pos.y, nz, w, h)) {
    const dir = Math.sign(ent.vel.z)
    if (dir > 0) nz = Math.floor(nz + w / 2) - w / 2 - EPS
    else if (dir < 0) nz = Math.floor(nz - w / 2) + 1 + w / 2 + EPS
    if (collides(world, ent.pos.x, ent.pos.y, nz, w, h)) nz = ent.pos.z
    ent.vel.z = 0
  }
  ent.pos.z = nz

  // Y 轴
  ent.onGround = false
  let ny = ent.pos.y + ent.vel.y * dt
  if (collides(world, ent.pos.x, ny, ent.pos.z, w, h)) {
    if (ent.vel.y < 0) {
      ny = Math.floor(ny) + 1 + EPS
      if (collides(world, ent.pos.x, ny, ent.pos.z, w, h)) ny = ent.pos.y
      ent.onGround = true
    } else {
      ny = Math.floor(ny + h) - h - EPS
      if (collides(world, ent.pos.x, ny, ent.pos.z, w, h)) ny = ent.pos.y
    }
    ent.vel.y = 0
  }
  ent.pos.y = ny
}

export function blockIntersectsEntity(bx, by, bz, ent) {
  const hw = ent.w / 2
  return bx + 1 > ent.pos.x - hw && bx < ent.pos.x + hw &&
         by + 1 > ent.pos.y && by < ent.pos.y + ent.h &&
         bz + 1 > ent.pos.z - hw && bz < ent.pos.z + hw
}

export { collides }
