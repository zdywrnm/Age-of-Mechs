// 程序化纹理图集：一张 512×512 Canvas，8×8 个 64px tile，无任何外部美术资源
import * as THREE from 'three'
import { mulberry32 } from './noise.js'

export const TILE = 64
export const ATLAS_TILES = 8 // 8×8

// tile 索引表（blocks.js 引用）：
// 0 草顶 | 1 草侧 | 2 泥巴 | 3 木侧 | 4 木顶 | 5 树叶 | 6 石头 | 7 石砖
// 8 普通矿石 | 9 金子 | 10 代码矿石 | 11 诡异木板 | 12 箱侧 | 13 箱顶 | 14 金座 | 15 基岩 | 16 沙子

export function createAtlas() {
  const canvas = document.createElement('canvas')
  canvas.width = canvas.height = TILE * ATLAS_TILES
  const ctx = canvas.getContext('2d')
  const rand = mulberry32(424242)

  const tileXY = i => [(i % ATLAS_TILES) * TILE, Math.floor(i / ATLAS_TILES) * TILE]

  // —— 小工具 ——
  function fill(i, color) {
    const [x, y] = tileXY(i)
    ctx.fillStyle = color
    ctx.fillRect(x, y, TILE, TILE)
  }
  // 噪点：随机小方点
  function speckle(i, colors, count = 260, size = 3) {
    const [x, y] = tileXY(i)
    for (let n = 0; n < count; n++) {
      ctx.fillStyle = colors[Math.floor(rand() * colors.length)]
      ctx.fillRect(x + Math.floor(rand() * TILE), y + Math.floor(rand() * TILE),
        1 + Math.floor(rand() * size), 1 + Math.floor(rand() * size))
    }
  }
  function blobs(i, colors, count = 8, rMin = 4, rMax = 10) {
    const [x, y] = tileXY(i)
    for (let n = 0; n < count; n++) {
      ctx.fillStyle = colors[Math.floor(rand() * colors.length)]
      ctx.beginPath()
      ctx.arc(x + rand() * TILE, y + rand() * TILE, rMin + rand() * (rMax - rMin), 0, Math.PI * 2)
      ctx.fill()
    }
    ctx.save(); ctx.beginPath(); ctx.rect(x, y, TILE, TILE); ctx.clip(); ctx.restore()
  }

  // 0 草顶
  fill(0, '#5cb544'); speckle(0, ['#4ea23a', '#6cc653', '#57ab40'], 320, 3)
  // 1 草侧：上 1/4 草，其余泥巴
  fill(1, '#8a6142'); speckle(1, ['#7a5538', '#966c4b'], 220, 3)
  ;(() => { const [x, y] = tileXY(1)
    ctx.fillStyle = '#5cb544'; ctx.fillRect(x, y, TILE, 14)
    for (let n = 0; n < 20; n++) { ctx.fillRect(x + Math.floor(rand() * TILE), y + 12 + Math.floor(rand() * 6), 3, 4) }
  })()
  // 2 泥巴：棕色 + 深色湿斑
  fill(2, '#8a6142'); speckle(2, ['#7a5538', '#966c4b', '#6d4a30'], 260, 3)
  blobs(2, ['rgba(90,60,38,0.5)'], 5, 4, 8)
  // 3 木侧：竖条木纹
  fill(3, '#8f6b3d')
  ;(() => { const [x, y] = tileXY(3)
    for (let c = 0; c < TILE; c += 8) {
      ctx.fillStyle = c % 16 === 0 ? '#7d5c33' : '#9a7544'
      ctx.fillRect(x + c, y, 6, TILE)
    }
    ctx.fillStyle = '#6b4d29'
    for (let n = 0; n < 6; n++) ctx.fillRect(x + Math.floor(rand() * TILE), y, 1, TILE)
  })()
  // 4 木顶：年轮
  fill(4, '#9a7544')
  ;(() => { const [x, y] = tileXY(4); ctx.strokeStyle = '#7d5c33'; ctx.lineWidth = 3
    for (let r = 6; r < 34; r += 8) { ctx.beginPath(); ctx.arc(x + 32, y + 32, r, 0, Math.PI * 2); ctx.stroke() }
  })()
  // 5 树叶
  fill(5, '#3f8f33'); speckle(5, ['#357a2b', '#4aa63d', '#2e6b25'], 340, 4)
  // 6 石头：灰噪点 + 裂纹
  fill(6, '#8d8d8d'); speckle(6, ['#828282', '#989898', '#777777'], 300, 3)
  ;(() => { const [x, y] = tileXY(6); ctx.strokeStyle = '#6e6e6e'; ctx.lineWidth = 2
    for (let n = 0; n < 3; n++) {
      ctx.beginPath(); let px = x + rand() * TILE, py = y + rand() * TILE
      ctx.moveTo(px, py)
      for (let s = 0; s < 4; s++) { px += (rand() - 0.5) * 26; py += (rand() - 0.5) * 26; ctx.lineTo(px, py) }
      ctx.stroke()
    }
  })()
  // 7 石砖：砖缝
  fill(7, '#9a9a9a')
  ;(() => { const [x, y] = tileXY(7)
    ctx.fillStyle = '#7b7b7b'
    for (let r = 0; r < 4; r++) {
      ctx.fillRect(x, y + r * 16, TILE, 2)
      const off = r % 2 === 0 ? 0 : 16
      for (let c = off; c <= TILE; c += 32) ctx.fillRect(x + c, y + r * 16, 2, 16)
    }
    speckle(7, ['#909090', '#a4a4a4'], 120, 2)
  })()
  // 8 普通矿石：石底 + 青色晶斑
  fill(8, '#8d8d8d'); speckle(8, ['#828282', '#989898'], 200, 3)
  ;(() => { const [x, y] = tileXY(8)
    for (let n = 0; n < 7; n++) {
      const cx = x + 8 + rand() * 48, cy = y + 8 + rand() * 48, s = 4 + rand() * 5
      ctx.fillStyle = '#39c8c4'; ctx.fillRect(cx - s / 2, cy - s / 2, s, s)
      ctx.fillStyle = '#8ff0ed'; ctx.fillRect(cx - 1, cy - 1, 2, 2)
    }
  })()
  // 9 金子：金黄 + 高光星点
  fill(9, '#e8b53a'); speckle(9, ['#d6a02c', '#f2c95c'], 200, 3)
  ;(() => { const [x, y] = tileXY(9); ctx.fillStyle = '#fff3c4'
    for (let n = 0; n < 6; n++) {
      const cx = x + 6 + rand() * 52, cy = y + 6 + rand() * 52
      ctx.fillRect(cx - 1, cy - 4, 2, 8); ctx.fillRect(cx - 4, cy - 1, 8, 2)
    }
  })()
  // 10 代码矿石：黑底 + 绿色字母连成线、纵横交错（设定集原文的样子）
  ;(() => {
    const i = 10; fill(i, '#0a0f0a'); const [x, y] = tileXY(i)
    speckle(i, ['#101810', '#0d130d'], 120, 3)
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ01'
    ctx.font = 'bold 9px monospace'; ctx.textBaseline = 'middle'; ctx.textAlign = 'center'
    // 几条随机走位的折线，线上每隔几像素放一个绿色字母
    for (let line = 0; line < 5; line++) {
      const vertical = line % 2 === 0
      let px = x + 6 + rand() * 52, py = y + 6 + rand() * 52
      let dx = vertical ? 0 : 1, dy = vertical ? 1 : 0
      for (let s = 0; s < 9; s++) {
        const bright = rand() < 0.25
        ctx.fillStyle = bright ? '#7dff7d' : '#2f9e2f'
        ctx.fillText(chars[Math.floor(rand() * chars.length)], px, py)
        // 字母间的连线
        ctx.strokeStyle = 'rgba(47,158,47,0.55)'; ctx.lineWidth = 1
        const nx = px + dx * 8, ny = py + dy * 8
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(nx, ny); ctx.stroke()
        px = nx; py = ny
        if (rand() < 0.3) { [dx, dy] = [dy, dx] } // 折向，形成纵横交错
        if (px < x + 4 || px > x + 60 || py < y + 4 || py > y + 60) break
      }
    }
  })()
  // 11 诡异木板：惨白木纹 + 暗紫涡纹 + 隐约的眼睛
  fill(11, '#cfc4b2')
  ;(() => { const [x, y] = tileXY(11)
    for (let c = 0; c < TILE; c += 10) { ctx.fillStyle = c % 20 === 0 ? '#bfb2a0' : '#d9d0bf'; ctx.fillRect(x + c, y, 8, TILE) }
    ctx.strokeStyle = 'rgba(120,80,160,0.5)'; ctx.lineWidth = 2
    for (let n = 0; n < 3; n++) {
      ctx.beginPath()
      const cx = x + 10 + rand() * 44, cy = y + 10 + rand() * 44
      for (let a = 0; a < Math.PI * 3; a += 0.4) {
        const r = a * 2.2
        const px = cx + Math.cos(a) * r, py = cy + Math.sin(a) * r
        a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
    }
    // 隐约的眼睛
    ctx.fillStyle = 'rgba(90,50,120,0.65)'
    ctx.beginPath(); ctx.ellipse(x + 32, y + 32, 7, 4, 0, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = 'rgba(20,10,30,0.8)'; ctx.beginPath(); ctx.arc(x + 32, y + 32, 2, 0, Math.PI * 2); ctx.fill()
  })()
  // 12 箱侧：木箱 + 金属边
  fill(12, '#a9793f')
  ;(() => { const [x, y] = tileXY(12)
    for (let c = 0; c < TILE; c += 9) { ctx.fillStyle = '#95682f'; ctx.fillRect(x + c, y, 1, TILE) }
    ctx.strokeStyle = '#5f4520'; ctx.lineWidth = 4; ctx.strokeRect(x + 2, y + 2, TILE - 4, TILE - 4)
    ctx.fillStyle = '#e8b53a'; ctx.fillRect(x + 27, y + 22, 10, 14) // 金锁扣
    ctx.fillStyle = '#7d5c1e'; ctx.fillRect(x + 30, y + 28, 4, 5)
  })()
  // 13 箱顶
  fill(13, '#b98747')
  ;(() => { const [x, y] = tileXY(13)
    for (let c = 0; c < TILE; c += 9) { ctx.fillStyle = '#a5773a'; ctx.fillRect(x, y + c, TILE, 1) }
    ctx.strokeStyle = '#5f4520'; ctx.lineWidth = 4; ctx.strokeRect(x + 2, y + 2, TILE - 4, TILE - 4)
  })()
  // 14 金座：金 + 红绒
  fill(14, '#e8b53a')
  ;(() => { const [x, y] = tileXY(14)
    speckle(14, ['#d6a02c', '#f2c95c'], 120, 3)
    ctx.fillStyle = '#b03040'; ctx.fillRect(x + 10, y + 10, 44, 44)
    ctx.fillStyle = '#c94b5c'
    for (let n = 0; n < 30; n++) ctx.fillRect(x + 12 + Math.floor(rand() * 40), y + 12 + Math.floor(rand() * 40), 3, 3)
    ctx.strokeStyle = '#fff3c4'; ctx.lineWidth = 2; ctx.strokeRect(x + 8, y + 8, 48, 48)
  })()
  // 15 基岩：深黑碎纹
  fill(15, '#2b2b2f'); speckle(15, ['#1f1f23', '#3a3a40', '#333338'], 300, 4)
  // 16 沙子
  fill(16, '#e2d29a'); speckle(16, ['#d6c68c', '#ecdfae'], 280, 3)

  // —— 第二章新增 tile ——
  // 17 水：蓝底波纹
  fill(17, '#3a8fd8')
  ;(() => { const [x, y] = tileXY(17); ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 2
    for (let n = 0; n < 5; n++) {
      ctx.beginPath()
      const wy = y + 8 + n * 12
      ctx.moveTo(x, wy)
      for (let c = 0; c <= TILE; c += 8) ctx.lineTo(x + c, wy + Math.sin(c / 8 + n) * 3)
      ctx.stroke()
    }
  })()
  // 18 岩浆：橙红流纹 + 亮黄斑
  fill(18, '#d84a10'); blobs(18, ['#ff8c1a', '#ffb020'], 8, 5, 12); speckle(18, ['#ffe27a', '#b83a0a'], 120, 3)
  // 19 岩浆石：深灰底 + 橙色裂纹
  fill(19, '#4a3f3c'); speckle(19, ['#403633', '#554a46'], 240, 3)
  ;(() => { const [x, y] = tileXY(19); ctx.strokeStyle = '#e85f1a'; ctx.lineWidth = 2
    for (let n = 0; n < 4; n++) {
      ctx.beginPath(); let px = x + rand() * TILE, py = y + rand() * TILE
      ctx.moveTo(px, py)
      for (let s = 0; s < 3; s++) { px += (rand() - 0.5) * 24; py += (rand() - 0.5) * 24; ctx.lineTo(px, py) }
      ctx.stroke()
    }
  })()
  // 20 岩浆树干：焦黑竖纹 + 火星
  fill(20, '#33241e')
  ;(() => { const [x, y] = tileXY(20)
    for (let c = 0; c < TILE; c += 8) { ctx.fillStyle = c % 16 === 0 ? '#241813' : '#3d2b22'; ctx.fillRect(x + c, y, 6, TILE) }
    ctx.fillStyle = '#ff7a2a'
    for (let n = 0; n < 8; n++) ctx.fillRect(x + Math.floor(rand() * TILE), y + Math.floor(rand() * TILE), 2, 3)
  })()
  // 21 岩浆树叶：暗红噪点
  fill(21, '#7a2418'); speckle(21, ['#8f3020', '#5f1a10', '#b04424'], 320, 4)
  // 22 火：橙黄火舌
  fill(22, '#ff7a1a')
  ;(() => { const [x, y] = tileXY(22)
    for (let n = 0; n < 12; n++) {
      const fx = x + rand() * TILE, fh = 14 + rand() * 30
      const g = ctx.createLinearGradient(0, y + TILE, 0, y + TILE - fh)
      g.addColorStop(0, '#ffdd55'); g.addColorStop(1, 'rgba(255,60,10,0.15)')
      ctx.fillStyle = g
      ctx.beginPath()
      ctx.moveTo(fx - 5, y + TILE); ctx.lineTo(fx, y + TILE - fh); ctx.lineTo(fx + 5, y + TILE)
      ctx.fill()
    }
  })()
  // 23 传送门：黑紫漩涡
  fill(23, '#160a24')
  ;(() => { const [x, y] = tileXY(23); ctx.strokeStyle = '#8a4ae0'; ctx.lineWidth = 3
    for (let n = 0; n < 3; n++) {
      ctx.beginPath()
      for (let a = 0; a < Math.PI * 4; a += 0.3) {
        const r = a * 2.4 + n * 4
        const px = x + 32 + Math.cos(a + n * 2) * r, py = y + 32 + Math.sin(a + n * 2) * r
        a === 0 ? ctx.moveTo(px, py) : ctx.lineTo(px, py)
      }
      ctx.stroke()
    }
    speckle(23, ['#b98aff', '#5a2aa0'], 40, 2)
  })()
  // 24 门框石：黑石金纹
  fill(24, '#1e1e26'); speckle(24, ['#16161c', '#2a2a34'], 240, 3)
  ;(() => { const [x, y] = tileXY(24); ctx.strokeStyle = '#e8b53a'; ctx.lineWidth = 3
    ctx.strokeRect(x + 6, y + 6, TILE - 12, TILE - 12)
  })()
  // 25 暗黑石（终极之地地面）：近黑 + 紫斑
  fill(25, '#17131f'); speckle(25, ['#241c30', '#0f0c16', '#2e2440'], 300, 3)
  // 26 符号：黑底发光符文
  fill(26, '#0a0a14')
  ;(() => { const [x, y] = tileXY(26)
    ctx.strokeStyle = '#7dfcff'; ctx.lineWidth = 4; ctx.lineCap = 'round'
    // 随机几何符文
    ctx.beginPath()
    ctx.moveTo(x + 16, y + 48); ctx.lineTo(x + 32, y + 12); ctx.lineTo(x + 48, y + 48); ctx.lineTo(x + 22, y + 30); ctx.lineTo(x + 42, y + 30)
    ctx.stroke()
    ctx.strokeStyle = 'rgba(125,252,255,0.4)'; ctx.lineWidth = 10
    ctx.beginPath(); ctx.arc(x + 32, y + 32, 24, 0, Math.PI * 2); ctx.stroke()
  })()
  // 27 床顶：红毯白枕
  fill(27, '#c0392b')
  ;(() => { const [x, y] = tileXY(27)
    speckle(27, ['#a93226', '#d0453a'], 100, 3)
    ctx.fillStyle = '#f4f6f7'; ctx.fillRect(x + 6, y + 6, TILE - 12, 20)
    ctx.fillStyle = '#d5dbdb'; ctx.fillRect(x + 6, y + 22, TILE - 12, 4)
  })()
  // 28 床侧：木框红毯
  fill(28, '#8f6b3d')
  ;(() => { const [x, y] = tileXY(28); ctx.fillStyle = '#c0392b'; ctx.fillRect(x, y, TILE, 26) })()
  // 29 海宫砖：青蓝砖 + 珠光
  fill(29, '#2e7f96')
  ;(() => { const [x, y] = tileXY(29)
    ctx.fillStyle = '#245f72'
    for (let r = 0; r < 4; r++) {
      ctx.fillRect(x, y + r * 16, TILE, 2)
      const off = r % 2 === 0 ? 0 : 16
      for (let c = off; c <= TILE; c += 32) ctx.fillRect(x + c, y + r * 16, 2, 16)
    }
    ctx.fillStyle = '#9fe8f2'
    for (let n = 0; n < 6; n++) ctx.fillRect(x + 4 + Math.floor(rand() * 56), y + 4 + Math.floor(rand() * 56), 3, 3)
  })()
  // 30 丛林砖：苔绿石砖
  fill(30, '#5d7a4a')
  ;(() => { const [x, y] = tileXY(30)
    ctx.fillStyle = '#465e36'
    for (let r = 0; r < 4; r++) {
      ctx.fillRect(x, y + r * 16, TILE, 2)
      const off = r % 2 === 0 ? 0 : 16
      for (let c = off; c <= TILE; c += 32) ctx.fillRect(x + c, y + r * 16, 2, 16)
    }
    speckle(30, ['#6f8f58', '#3d5230'], 140, 3)
  })()
  // 31 驱动核心：白青发光机械纹
  fill(31, '#d8f6ff')
  ;(() => { const [x, y] = tileXY(31)
    ctx.strokeStyle = '#39c8c4'; ctx.lineWidth = 3
    ctx.strokeRect(x + 8, y + 8, TILE - 16, TILE - 16)
    ctx.beginPath(); ctx.arc(x + 32, y + 32, 12, 0, Math.PI * 2); ctx.stroke()
    ctx.fillStyle = '#7dfcff'; ctx.beginPath(); ctx.arc(x + 32, y + 32, 6, 0, Math.PI * 2); ctx.fill()
    ctx.strokeStyle = 'rgba(57,200,196,0.5)'; ctx.lineWidth = 2
    for (const [ax, ay, bx, by] of [[8,32,20,32],[44,32,56,32],[32,8,32,20],[32,44,32,56]]) {
      ctx.beginPath(); ctx.moveTo(x+ax, y+ay); ctx.lineTo(x+bx, y+by); ctx.stroke()
    }
  })()
  // 32 焦黑土：黑褐 + 余烬
  fill(32, '#2e2320'); speckle(32, ['#241b18', '#3a2c26'], 280, 3)
  ;(() => { const [x, y] = tileXY(32); ctx.fillStyle = '#e85f1a'
    for (let n = 0; n < 5; n++) ctx.fillRect(x + Math.floor(rand() * TILE), y + Math.floor(rand() * TILE), 2, 2)
  })()
  // 33 荧光石：暖黄发光
  fill(33, '#ffe89a'); blobs(33, ['#fff6c8', '#ffd75e'], 8, 5, 10); speckle(33, ['#fffbe0'], 60, 2)

  const texture = new THREE.CanvasTexture(canvas)
  texture.magFilter = THREE.NearestFilter
  texture.minFilter = THREE.NearestFilter
  texture.generateMipmaps = false
  texture.colorSpace = THREE.SRGBColorSpace

  // tile → UV 矩形（内缩半像素防渗色）
  const N = TILE * ATLAS_TILES
  function uvRect(tile) {
    const tx = (tile % ATLAS_TILES) * TILE, ty = Math.floor(tile / ATLAS_TILES) * TILE
    const pad = 0.5
    // 注意：canvas y 向下，UV v 向上，需要翻转
    return {
      u0: (tx + pad) / N,
      v0: 1 - (ty + TILE - pad) / N,
      u1: (tx + TILE - pad) / N,
      v1: 1 - (ty + pad) / N,
    }
  }

  return { canvas, texture, uvRect, waterTexture: createWaterTexture(), waterMaterials: [] }
}

// 专属可平铺水纹（世界坐标 UV + offset 滚动 = 海面流动感）
function createWaterTexture() {
  const c = document.createElement('canvas')
  c.width = c.height = 64
  const ctx = c.getContext('2d')
  ctx.fillStyle = '#3a86c8'
  ctx.fillRect(0, 0, 64, 64)
  // 两层交错的波纹亮带（平铺无缝：正弦相位取整周期）
  for (let layer = 0; layer < 2; layer++) {
    ctx.strokeStyle = layer ? 'rgba(160,215,255,0.5)' : 'rgba(90,160,220,0.65)'
    ctx.lineWidth = layer ? 2 : 3
    for (let row = 0; row < 4; row++) {
      ctx.beginPath()
      for (let x = 0; x <= 64; x += 2) {
        const y = row * 16 + 8 + Math.sin((x / 64) * Math.PI * 2 * 2 + row * 1.7 + layer * 2.4) * 3.5
        x === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y)
      }
      ctx.stroke()
    }
  }
  // 高光碎点
  ctx.fillStyle = 'rgba(220,240,255,0.55)'
  for (let n = 0; n < 26; n++) {
    ctx.fillRect((n * 37) % 64, (n * 23 + 9) % 64, 2, 1)
  }
  const tex = new THREE.CanvasTexture(c)
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping
  tex.magFilter = THREE.LinearFilter
  tex.minFilter = THREE.LinearFilter
  tex.generateMipmaps = false
  tex.colorSpace = THREE.SRGBColorSpace
  return tex
}
