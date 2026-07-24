// ④ 矿石群山（城北）：五座主峰内部确定性矿脉 + 洞穴
// 普通矿/金子多，钻石中，红蓝宝石/代码少，神秘图腾节点极少（全山 1~3 个）
// 地形抬升（五峰锥体）在 terrain.js 完成；这里往山体里塞矿脉 + 掏洞
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { mulberry32 } from '../../noise.js'

export function buildMountains(world, STRUCT) {
  const rand = mulberry32(CFG.SEED + 404)   // 同存档同设备布局一致
  // 采样范围扩到整个矿山有机区（C5 已把整片区抬成山峦，比旧 MOUNT_RECT 大）
  const mc = POS.MOUNT_C, reach = 66
  const bbx0 = mc.x - reach, bbz0 = mc.z - reach, bbW = reach * 2

  // 山体范围内的所有石头做候选矿脉（确定性块状替换）
  const placeVein = (id, count, rMin, rMax, yMin, yMax) => {
    let placed = 0, tries = 0
    while (placed < count && tries++ < count * 6) {
      const bx = bbx0 + Math.floor(rand() * bbW)
      const bz = bbz0 + Math.floor(rand() * bbW)
      const surf = world.surfaceAt(bx, bz)
      if (surf < CFG.SURFACE + 4) continue       // 只在真正隆起的山体里布矿
      const by = Math.round(yMin + rand() * Math.min(yMax - yMin, surf - yMin - 2))
      if (by < yMin || by > surf - 2) continue
      const rad = rMin + rand() * (rMax - rMin)
      const ri = Math.ceil(rad)
      let any = false
      for (let dy = -ri; dy <= ri; dy++)
        for (let dz = -ri; dz <= ri; dz++)
          for (let dx = -ri; dx <= ri; dx++) {
            if (dx * dx + dy * dy + dz * dz > rad * rad) continue
            const px = bx + dx, py = by + dy, pz = bz + dz
            if (world.get(px, py, pz) === B.STONE) { world.setRaw(px, py, pz, id); any = true }
          }
      if (any) placed++
    }
    return placed
  }

  // 矿脉数量按更大的山体面积上调（旧值约 ×1.6）
  const stats = {}
  stats.ore = placeVein(B.ORE, 150, 1.4, 2.6, 60, 150)
  stats.gold = placeVein(B.GOLD, 95, 1.2, 2.0, 55, 135)
  stats.diamond = placeVein(B.ORE_DIAMOND, 34, 1.0, 1.6, 50, 115)
  stats.ruby = placeVein(B.ORE_RUBY, 22, 0.9, 1.4, 50, 125)
  stats.sapphire = placeVein(B.ORE_SAPPHIRE, 22, 0.9, 1.4, 50, 125)
  stats.code = placeVein(B.CODE, 18, 0.9, 1.4, 45, 100)
  // 神秘图腾节点：极少（单块，深处）——全山目标 1~3 个
  stats.totem = placeVein(B.TOTEM_BLOCK, 2, 0.0, 0.3, 55, 105)

  // —— 洞穴：每座主峰侧面掏一条斜洞（球串），洞口标记 ——
  const caves = []
  for (const [px, pz] of POS.MOUNT_PEAKS) {
    const surf = world.surfaceAt(px, pz)
    let cx = px, cy = surf - 3, cz = pz + 6   // 从南坡开口往山心斜下
    const mouth = [cx, world.surfaceAt(cx, cz) + 1, cz]
    for (let step = 0; step < 14; step++) {
      const rad = 2.0 + rand() * 0.8
      const ri = Math.ceil(rad)
      for (let dy = -ri; dy <= ri; dy++)
        for (let dz = -ri; dz <= ri; dz++)
          for (let dx = -ri; dx <= ri; dx++) {
            if (dx * dx + dy * dy + dz * dz > rad * rad) continue
            const x = Math.round(cx) + dx, y = Math.round(cy) + dy, z = Math.round(cz) + dz
            const cur = world.get(x, y, z)
            if (cur !== B.AIR && cur !== B.BEDROCK && cur !== B.CHEST && cur !== B.CORE_BLOCK) world.setRaw(x, y, z, B.AIR)
          }
      cx += (rand() - 0.5) * 3
      cy -= 1.4 + rand()
      cz -= 1.5 + rand() * 2      // 向山心（-z）掘进
      if (cy < 40) break
    }
    caves.push(mouth)
  }
  STRUCT.mountCaves = caves
  STRUCT.mountStats = stats
  return stats
}
