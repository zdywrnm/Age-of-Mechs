// 主世界地形 v2：初始城镇岛（与第一章逐格一致）+ 作者小岛 + 收服大陆 + 禁地 + 海底/深海盆地 + 真实水体
import { CFG, POS } from '../config.js'
import { B } from '../blocks.js'
import { mulberry32, makeFbm2D } from '../noise.js'
import { zoneAt } from '../game/zones.js'

const { SEED, SURFACE, SEA_LEVEL } = CFG

export function generateTerrain(world) {
  const fbm = makeFbm2D(SEED, 3)
  const fbm2 = makeFbm2D(SEED + 555, 3)
  const SX = world.sx, SZ = world.sz

  const smooth = t => t * t * (3 - 2 * t)

  for (let z = 0; z < SZ; z++) {
    for (let x = 0; x < SX; x++) {
      // —— 各陆地高度候选 ——
      let landH = -1
      let topKind = 'grass'

      // 初始城镇岛（与第一章完全一致的公式，保证密室坐标不变）
      const dTown = Math.hypot(x - CFG.ISLAND_CX, z - CFG.ISLAND_CZ)
      if (dTown <= CFG.ISLAND_R_EDGE) {
        const noiseH = SURFACE + (fbm(x * 0.03, z * 0.03) - 0.5) * 6
        let h
        let beach = false
        if (dTown <= CFG.ISLAND_R_FULL) h = Math.round(noiseH)
        else {
          const s = smooth((dTown - CFG.ISLAND_R_FULL) / (CFG.ISLAND_R_EDGE - CFG.ISLAND_R_FULL))
          h = Math.round(noiseH * (1 - s) + 100 * s)
          beach = h <= 103
        }
        landH = h
        topKind = beach ? 'sand' : 'grass'
      }

      // 作者小岛（低矮沙缘小岛）
      const isle = POS.AUTHOR_ISLE
      const dIsle = Math.hypot(x - isle.x, z - isle.z)
      if (dIsle <= isle.r) {
        const base = 105 + (fbm2(x * 0.05, z * 0.05) - 0.5) * 4
        const s = dIsle <= isle.r - 8 ? 0 : smooth((dIsle - (isle.r - 8)) / 8)
        const h = Math.round(base * (1 - s) + 99 * s)
        if (h > landH) { landH = h; topKind = h <= 103 ? 'sand' : 'grass' }
      }

      // 收服大陆（椭圆大陆，丛林感起伏）
      const tl = POS.TAME_LAND
      const eNorm = Math.hypot((x - tl.x) / tl.rx, (z - tl.z) / tl.rz)
      if (eNorm <= 1) {
        const base = 107 + (fbm2(x * 0.025, z * 0.025) - 0.5) * 10
        const s = eNorm <= 0.85 ? 0 : smooth((eNorm - 0.85) / 0.15)
        const h = Math.round(base * (1 - s) + 99 * s)
        if (h > landH) { landH = h; topKind = h <= 103 ? 'sand' : 'grass' }
      }

      // 禁地岛链（世界南界，焦黑）
      for (const [fx, fz, fr] of [[POS.FORBIDDEN.x, POS.FORBIDDEN.z, 22], [74, 462, 9], [136, 470, 10]]) {
        const dF = Math.hypot(x - fx, z - fz)
        if (dF <= fr) {
          const s = dF <= fr - 5 ? 0 : smooth((dF - (fr - 5)) / 5)
          const h = Math.round(104 * (1 - s) + 99 * s)
          if (h > landH) { landH = h; topKind = 'scorched' }
        }
      }

      // —— v4：巨石阵高地（西北，+6 缓坡台地）+ 北部矿石群山（五峰锥体）——
      if (landH > 0) {
        const dHg = Math.hypot(x - POS.HENGE_C.x, z - POS.HENGE_C.z)
        if (dHg < 20) {
          const t = dHg < 12 ? 1 : 1 - smooth((dHg - 12) / 8)
          landH = Math.round(landH + 6 * t)
        }
        for (const [px, pz, ph, pr] of POS.MOUNT_PEAKS) {
          const dP = Math.hypot(x - px, z - pz)
          if (dP < pr) {
            const t = 1 - dP / pr
            const h2 = Math.round(landH + (ph - landH) * Math.pow(t, 1.4) + (fbm2(x * 0.08, z * 0.08) - 0.5) * 4 * t)
            if (h2 > landH) landH = h2
          }
        }
        if (landH >= 128) topKind = 'stone'   // 高峰石顶
      }
      // —— v4：西侧海峡（把刷怪塔小岛和主岛隔开）——
      {
        const st = POS.STRAIT
        const eN = Math.hypot((x - st.x) / st.rx, (z - st.z) / st.rz)
        if (eN < 1 && landH > 0) {
          const s2 = smooth(1 - eN)
          landH = Math.round(landH * (1 - s2) + 96 * s2)
          if (landH <= 103) topKind = 'sand'
        }
      }
      // —— v4：刷怪塔小岛（顶面缓台）——
      {
        const si = POS.SPAWNER_ISLE
        const dI = Math.hypot(x - si.x, z - si.z)
        if (dI <= si.r) {
          const t = dI <= 6 ? 1 : 1 - smooth((dI - 6) / (si.r - 6))
          const h2 = Math.round(98 + 8 * t)
          if (h2 > landH) { landH = h2; topKind = h2 <= 103 ? 'sand' : 'grass' }
        }
      }

      // —— 海底 ——
      let oceanFloor = 88 + Math.round((fbm(x * 0.02, z * 0.02) - 0.5) * 8)
      const ds = POS.DEEP_SEA
      const dDeep = Math.hypot(x - ds.x, z - ds.z)
      if (dDeep < ds.r) {
        const s = smooth(1 - dDeep / ds.r)
        oceanFloor = Math.round(oceanFloor * (1 - s) + 24 * s)
      }

      const h = Math.max(landH, oceanFloor)
      const underwater = h < SEA_LEVEL

      for (let y = 0; y <= h; y++) {
        let id
        if (y <= 1) id = B.BEDROCK
        else if (y < h - 3) id = B.STONE
        else if (y < h) id = B.MUD
        else {
          if (underwater) id = B.SAND
          else if (topKind === 'sand') id = B.SAND
          else if (topKind === 'scorched') id = B.SCORCHED
          else if (topKind === 'stone') id = B.STONE
          else id = B.GRASS
        }
        world.setRaw(x, y, z, id)
      }
      // 真实水体
      if (underwater) {
        for (let y = h + 1; y <= SEA_LEVEL; y++) world.setRaw(x, y, z, B.WATER)
      }
      world.setSurface(x, z, h)
    }
  }

  // —— 矿脉（全图，只替换石头）——
  const rand = mulberry32(SEED + 77)
  const placeBlob = (id, count, yMin, yMax, rMin, rMax) => {
    for (let n = 0; n < count; n++) {
      const bx = 8 + Math.floor(rand() * (SX - 16))
      const bz = 8 + Math.floor(rand() * (SZ - 16))
      const by = Math.round(yMin + rand() * (yMax - yMin))
      const r = rMin + rand() * (rMax - rMin)
      const ri = Math.ceil(r)
      for (let dy = -ri; dy <= ri; dy++)
        for (let dz = -ri; dz <= ri; dz++)
          for (let dx = -ri; dx <= ri; dx++) {
            if (dx * dx + dy * dy + dz * dz > r * r) continue
            const px = bx + dx, py = by + dy, pz = bz + dz
            if (world.get(px, py, pz) === B.STONE) world.setRaw(px, py, pz, id)
          }
    }
  }
  placeBlob(B.ORE, 360, 20, 100, 1.2, 2.2)
  placeBlob(B.GOLD, 120, 8, 60, 1.0, 1.8)
  placeBlob(B.CODE, 60, 4, 40, 1.0, 1.6)

  // —— 树 ——
  // v4：清理了旧岛心 (80,80) 时代的漂移坐标；主岛植被由各区模块负责，
  // 这里只在六区之外的野地撒少量零散树
  const KEEP_OUT = [
    { x: POS.SPAWN.x, z: POS.SPAWN.z, r: 8 },
    { x: POS.PORTAL_HELL.x, z: POS.PORTAL_HELL.z, r: 8 },
    { x: POS.HUT.x, z: POS.HUT.z, r: 10 },
    { x: POS.JUNGLE_TEMPLE.x, z: POS.JUNGLE_TEMPLE.z, r: 18 },
    { x: POS.UNDERCITY_STAIR.x, z: POS.UNDERCITY_STAIR.z, r: 6 },
  ]
  const tryTree = (tx, tz, trunkMin, trunkVar, canopy) => {
    if (KEEP_OUT.some(k => Math.hypot(tx - k.x, tz - k.z) < k.r)) return false
    const ground = world.surfaceAt(tx, tz)
    if (world.get(tx, ground, tz) !== B.GRASS) return false
    const trunkH = trunkMin + Math.floor(rand() * trunkVar)
    for (let y = 1; y <= trunkH; y++) world.setRaw(tx, ground + y, tz, B.WOOD)
    const top = ground + trunkH
    const r = canopy
    for (let dy = -1; dy <= 2; dy++)
      for (let dz = -r; dz <= r; dz++)
        for (let dx = -r; dx <= r; dx++) {
          if (dx * dx + dy * dy * 1.5 + dz * dz > r * r + 1.5) continue
          const px = tx + dx, py = top + dy + 1, pz = tz + dz
          if (world.get(px, py, pz) === B.AIR) world.setRaw(px, py, pz, B.LEAVES)
        }
    return true
  }
  // 初始城镇岛零散树（只种在六区之外的野地）
  let placed = 0, tries = 0
  while (placed < 15 && tries++ < 400) {
    const ang = rand() * Math.PI * 2, rr = 20 + rand() * (CFG.ISLAND_R_FULL - 26)
    const tx = Math.round(CFG.ISLAND_CX + Math.cos(ang) * rr)
    const tz = Math.round(CFG.ISLAND_CZ + Math.sin(ang) * rr)
    if (zoneAt(tx, tz)) continue
    if (tryTree(tx, tz, 4, 2, 2)) placed++
  }
  // 收服大陆丛林 70 棵（更高更密）
  placed = 0; tries = 0
  while (placed < 70 && tries++ < 600) {
    const ang = rand() * Math.PI * 2, rr = Math.sqrt(rand()) * 0.8
    const tx = Math.round(POS.TAME_LAND.x + Math.cos(ang) * rr * POS.TAME_LAND.rx)
    const tz = Math.round(POS.TAME_LAND.z + Math.sin(ang) * rr * POS.TAME_LAND.rz)
    if (tryTree(tx, tz, 5, 3, 3)) placed++
  }
  // 作者小岛 6 棵
  placed = 0; tries = 0
  while (placed < 6 && tries++ < 80) {
    const ang = rand() * Math.PI * 2, rr = rand() * (POS.AUTHOR_ISLE.r - 10)
    if (tryTree(Math.round(POS.AUTHOR_ISLE.x + Math.cos(ang) * rr), Math.round(POS.AUTHOR_ISLE.z + Math.sin(ang) * rr), 4, 2, 2)) placed++
  }
}
