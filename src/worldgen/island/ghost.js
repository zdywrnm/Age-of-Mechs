// ⑤ 鬼城遗址（城东）：约 20 处破墙/倒塌楼体/焦黑街道/残柱
// 导出废墟锚点列表（zoneFx 局部烟雾/火星发射器用）
import { CFG, POS } from '../../config.js'
import { B } from '../../blocks.js'
import { fill } from '../lib.js'
import { mulberry32 } from '../../noise.js'

export function buildGhost(world, STRUCT) {
  const rand = mulberry32(CFG.SEED + 505)
  const r = POS.GHOST_RECT
  const anchors = []   // 冒烟锚点

  // —— 焦黑街道：区内地表零星铺焦砖 + 焦黑土 ——
  for (let z = r.z0; z <= r.z1; z++) {
    for (let x = r.x0; x <= r.x1; x++) {
      const s = world.surfaceAt(x, z)
      if (s <= CFG.SEA_LEVEL) continue
      const n = rand()
      if (n < 0.18) world.setRaw(x, s, z, B.ASH_BRICK)
      else if (n < 0.34) world.setRaw(x, s, z, B.SCORCHED)
    }
  }

  // —— 约 20 处废墟（破墙 / 倒塌楼体 / 残柱），大小随机 ——
  const ruins = 20
  let placed = 0, tries = 0
  while (placed < ruins && tries++ < ruins * 5) {
    const cx = r.x0 + 4 + Math.floor(rand() * (r.x1 - r.x0 - 8))
    const cz = r.z0 + 4 + Math.floor(rand() * (r.z1 - r.z0 - 8))
    const s = world.surfaceAt(cx, cz)
    if (s <= CFG.SEA_LEVEL) continue
    const kind = rand()
    if (kind < 0.4) {
      // 破墙：一段带缺口的焦黑砖墙
      const len = 4 + Math.floor(rand() * 5)
      const h = 3 + Math.floor(rand() * 3)
      const along = rand() < 0.5
      for (let i = 0; i < len; i++) {
        const wh = h - Math.floor(rand() * 2)   // 参差残破
        const wx = along ? cx + i : cx
        const wz = along ? cz : cz + i
        for (let y = 1; y <= wh; y++) if (rand() > 0.15) world.setRaw(wx, s + y, wz, B.ASH_BRICK)
      }
    } else if (kind < 0.72) {
      // 倒塌楼体：一个残破的方盒子，一角塌陷
      const w = 3 + Math.floor(rand() * 3), d = 3 + Math.floor(rand() * 3), h = 3 + Math.floor(rand() * 4)
      for (let y = 1; y <= h; y++) {
        const shrink = Math.floor(y / 2 * rand())
        for (let dx = 0; dx <= w; dx++) for (let dz = 0; dz <= d; dz++) {
          const edge = dx === 0 || dx === w || dz === 0 || dz === d
          if (!edge) continue
          if (dx > w - shrink && dz > d - shrink) continue   // 塌陷角
          if (rand() > 0.2) world.setRaw(cx + dx, s + y, cz + dz, rand() < 0.7 ? B.ASH_BRICK : B.SCORCHED)
        }
      }
      // 楼内碎瓦
      world.setRaw(cx + 1, s + 1, cz + 1, B.ROOF_TILE)
    } else {
      // 残柱群：几根断柱
      for (let k = 0; k < 3; k++) {
        const px = cx + Math.floor((rand() - 0.5) * 6), pz = cz + Math.floor((rand() - 0.5) * 6)
        const ph = 2 + Math.floor(rand() * 4)
        const ps = world.surfaceAt(px, pz)
        for (let y = 1; y <= ph; y++) world.setRaw(px, ps + y, pz, B.ASH_BRICK)
      }
    }
    anchors.push([cx, s + 1, cz])
    placed++
  }

  STRUCT.ghostRuins = anchors
  // 遗址中心广场留一处焦黑祭坛做地标
  const c = POS.GHOST_C
  const cs = world.surfaceAt(c.x, c.z)
  fill(world, c.x - 2, cs + 1, c.z - 2, c.x + 2, cs + 1, c.z + 2, B.ASH_BRICK)
  world.setRaw(c.x, cs + 2, c.z, B.SCORCHED)
  STRUCT.lights.push([c.x, cs + 3, c.z])
}
