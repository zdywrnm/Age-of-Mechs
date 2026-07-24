// 程序化纹理图集：一张 512×512 Canvas，8×8 个 64px tile，无任何外部美术资源
import * as THREE from 'three'
import { mulberry32, makeFbm2D } from './noise.js'

export const TILE = 64
export const ATLAS_TILES = 8 // 8×8

// tile 索引表（blocks.js 引用）：
// 0 草顶 | 1 草侧 | 2 泥巴 | 3 木侧 | 4 木顶 | 5 树叶 | 6 石头 | 7 石砖
// 8 普通矿石 | 9 金子 | 10 代码矿石 | 11 诡异木板 | 12 箱侧 | 13 箱顶 | 14 金座 | 15 基岩 | 16 沙子
// 17-39 第二章（水/岩浆/地狱/终极之地/海洋）
// —— v4 六区 ——
// 40 竹节 | 41 竹叶 | 42 钻石矿石 | 43 红宝石矿石 | 44 蓝宝石矿石
// 45 图腾顶底 | 46 图腾侧脸(四红眼) | 47 焦黑砖 | 48 陶瓦 | 49 白绒 | 50 黑绒
// 51 红地毯 | 52 壁画(小人图) | 53 摊布

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
  // 有机纹理：value noise 分层上色（stops 按阈值从低到高，2px 像素块保持像素感）
  function fbmTile(i, stops, scale = 5, seed) {
    const [x0, y0] = tileXY(i)
    const noise = makeFbm2D(seed ?? (i * 991 + 7), 3)
    for (let py = 0; py < TILE; py += 2) {
      for (let px = 0; px < TILE; px += 2) {
        const v = noise((px / TILE) * scale, (py / TILE) * scale)
        let color = stops[stops.length - 1].c
        for (const s of stops) { if (v <= s.t) { color = s.c; break } }
        ctx.fillStyle = color
        ctx.fillRect(x0 + px, y0 + py, 2, 2)
      }
    }
  }

  // 0 草顶：多层次绿色草甸 + 亮草尖
  fbmTile(0, [{ t: 0.38, c: '#468f37' }, { t: 0.5, c: '#51a340' }, { t: 0.62, c: '#5cb544' }, { t: 1, c: '#69c250' }], 6)
  speckle(0, ['#7fd35f', '#8ada6a'], 46, 1)
  speckle(0, ['#3d7d30'], 30, 1)
  // 1 草侧：有机泥土 + 参差下垂的草皮边
  fbmTile(1, [{ t: 0.4, c: '#6d4a30' }, { t: 0.55, c: '#7a5538' }, { t: 0.72, c: '#8a6142' }, { t: 1, c: '#96704e' }], 5)
  ;(() => { const [x, y] = tileXY(1)
    const n1 = makeFbm2D(881, 2)
    for (let px = 0; px < TILE; px += 2) {
      const h = 9 + Math.floor(n1(px / TILE * 5, 0.3) * 9)
      ctx.fillStyle = '#51a340'; ctx.fillRect(x + px, y, 2, h)
      ctx.fillStyle = '#69c250'; ctx.fillRect(x + px, y, 2, 3)
      ctx.fillStyle = '#3d7d30'; ctx.fillRect(x + px, y + h - 2, 2, 2)
    }
  })()
  // 2 泥巴：湿润土壤层次 + 深色孔隙
  fbmTile(2, [{ t: 0.36, c: '#5f4029' }, { t: 0.5, c: '#6d4a30' }, { t: 0.66, c: '#7d5638' }, { t: 1, c: '#8f6647' }], 6)
  speckle(2, ['#4a3220'], 40, 2)
  speckle(2, ['#9a7454'], 26, 1)
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
  // 5 树叶：深浅簇叶 + 透光暗洞
  fbmTile(5, [{ t: 0.36, c: '#2a6122' }, { t: 0.5, c: '#357a2b' }, { t: 0.66, c: '#3f8f33' }, { t: 1, c: '#4aa63d' }], 7)
  speckle(5, ['#1e4718'], 36, 2)
  speckle(5, ['#5cb544'], 30, 1)
  // 6 石头：多倍频灰岩 + 裂缝阴影
  fbmTile(6, [{ t: 0.4, c: '#797979' }, { t: 0.54, c: '#848484' }, { t: 0.7, c: '#8f8f8f' }, { t: 1, c: '#9b9b9b' }], 5)
  ;(() => { const [x, y] = tileXY(6)
    for (let n = 0; n < 3; n++) {
      let px = x + rand() * TILE, py = y + rand() * TILE
      for (let s = 0; s < 5; s++) {
        const nx = px + (rand() - 0.5) * 24, ny = py + (rand() - 0.5) * 24
        ctx.strokeStyle = '#666666'; ctx.lineWidth = 2
        ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(nx, ny); ctx.stroke()
        ctx.strokeStyle = 'rgba(200,200,200,0.35)'; ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(px + 1, py + 1); ctx.lineTo(nx + 1, ny + 1); ctx.stroke()
        px = nx; py = ny
      }
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
  // 8 普通矿石：灰岩底 + 有棱有角的青晶簇（暗边+亮角）
  fbmTile(8, [{ t: 0.4, c: '#797979' }, { t: 0.54, c: '#848484' }, { t: 0.7, c: '#8f8f8f' }, { t: 1, c: '#9b9b9b' }], 5, 8881)
  ;(() => { const [x, y] = tileXY(8)
    for (let n = 0; n < 6; n++) {
      const cx = x + 8 + rand() * 46, cy = y + 8 + rand() * 46, s = 5 + rand() * 5
      ctx.fillStyle = '#1e7a76'; ctx.fillRect(cx - s / 2 - 1, cy - s / 2 - 1, s + 2, s + 2)  // 暗边
      ctx.fillStyle = '#39c8c4'; ctx.fillRect(cx - s / 2, cy - s / 2, s, s)
      ctx.fillStyle = '#67dcd8'; ctx.fillRect(cx - s / 2, cy - s / 2, s, 2)                  // 顶棱
      ctx.fillStyle = '#b8f5f2'; ctx.fillRect(cx - s / 2, cy - s / 2, 2, 2)                  // 亮角
    }
  })()
  // 9 金子：暖金层次 + 星芒高光
  fbmTile(9, [{ t: 0.4, c: '#c9962a' }, { t: 0.55, c: '#d9a832' }, { t: 0.72, c: '#e8b53a' }, { t: 1, c: '#f2c95c' }], 5)
  ;(() => { const [x, y] = tileXY(9); ctx.fillStyle = '#fff3c4'
    for (let n = 0; n < 6; n++) {
      const cx = x + 6 + rand() * 52, cy = y + 6 + rand() * 52
      ctx.fillRect(cx - 1, cy - 4, 2, 8); ctx.fillRect(cx - 4, cy - 1, 8, 2)
      ctx.fillStyle = '#ffffff'; ctx.fillRect(cx - 1, cy - 1, 2, 2); ctx.fillStyle = '#fff3c4'
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
  // 15 基岩：高对比深岩层
  fbmTile(15, [{ t: 0.36, c: '#17171b' }, { t: 0.5, c: '#222227' }, { t: 0.68, c: '#2e2e34' }, { t: 1, c: '#3b3b42' }], 6)
  speckle(15, ['#0e0e11'], 40, 2)
  // 16 沙子：细沙层次 + 风纹
  fbmTile(16, [{ t: 0.4, c: '#d2c184' }, { t: 0.55, c: '#dbcb90' }, { t: 0.72, c: '#e2d29a' }, { t: 1, c: '#ecdfae' }], 6)
  ;(() => { const [x, y] = tileXY(16)
    ctx.strokeStyle = 'rgba(255,248,220,0.5)'; ctx.lineWidth = 1
    for (let row = 0; row < 4; row++) {
      ctx.beginPath()
      for (let px = 0; px <= TILE; px += 4) {
        const py = row * 16 + 10 + Math.sin(px / TILE * Math.PI * 2 + row * 2.1) * 3
        px === 0 ? ctx.moveTo(x + px, y + py) : ctx.lineTo(x + px, y + py)
      }
      ctx.stroke()
    }
  })()

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
  // 25 暗黑石（终极之地地面）：近黑层理 + 幽紫脉络
  fbmTile(25, [{ t: 0.38, c: '#0d0a13' }, { t: 0.52, c: '#151020' }, { t: 0.7, c: '#1d1730' }, { t: 1, c: '#282045' }], 6)
  speckle(25, ['#3d2f66', '#4a3a7a'], 34, 1)
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
  // 32 焦黑土：焦炭层理 + 明灭余烬
  fbmTile(32, [{ t: 0.38, c: '#1c1512' }, { t: 0.52, c: '#261d19' }, { t: 0.7, c: '#322622' }, { t: 1, c: '#3f302a' }], 6)
  ;(() => { const [x, y] = tileXY(32)
    for (let n = 0; n < 6; n++) {
      const cx = x + Math.floor(rand() * TILE), cy = y + Math.floor(rand() * TILE)
      ctx.fillStyle = '#7a2e10'; ctx.fillRect(cx - 1, cy - 1, 4, 4)
      ctx.fillStyle = '#e85f1a'; ctx.fillRect(cx, cy, 2, 2)
      ctx.fillStyle = '#ffb35e'; ctx.fillRect(cx, cy, 1, 1)
    }
  })()
  // 33 荧光石：暖黄发光
  fill(33, '#ffe89a'); blobs(33, ['#fff6c8', '#ffd75e'], 8, 5, 10); speckle(33, ['#fffbe0'], 60, 2)

  // 34 海晶石：青绿分块纹
  fill(34, '#3f8f8a'); fbmTile(34, [[0.4, '#347a76'], [0.6, '#3f8f8a'], [0.8, '#4fa8a0']], 4)
  ;(() => { const [x, y] = tileXY(34); ctx.strokeStyle = 'rgba(30,70,68,0.6)'; ctx.lineWidth = 2
    for (let g = 0; g <= TILE; g += 21) { ctx.beginPath(); ctx.moveTo(x + g, y); ctx.lineTo(x + g, y + TILE); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x, y + g); ctx.lineTo(x + TILE, y + g); ctx.stroke() } })()
  // 35 海晶灯：亮青发光晶体
  fill(35, '#8ff0ea'); blobs(35, ['#c8fffb', '#a8f4ee', '#6fe0d8'], 10, 4, 9)
  ;(() => { const [x, y] = tileXY(35); ctx.fillStyle = '#e8fffd'
    for (let n = 0; n < 5; n++) { const cx2 = x + 8 + rand() * 48, cy2 = y + 8 + rand() * 48
      ctx.fillRect(cx2 - 1, cy2 - 5, 2, 10); ctx.fillRect(cx2 - 5, cy2 - 1, 10, 2) } })()
  // 36 粉珊瑚：珊瑚枝丫
  fill(36, '#0a1a1e'); ;(() => { const [x, y] = tileXY(36)
    ctx.strokeStyle = '#ff6fa8'; ctx.lineWidth = 4; ctx.lineCap = 'round'
    for (let b = 0; b < 4; b++) { let px = x + 14 + b * 12, py = y + TILE
      ctx.beginPath(); ctx.moveTo(px, py)
      for (let s = 0; s < 4; s++) { px += (rand() - 0.5) * 16; py -= 12; ctx.lineTo(px, py) }
      ctx.stroke() }
    ctx.fillStyle = '#ffb0d0'; for (let n = 0; n < 12; n++) ctx.fillRect(x + rand() * TILE, y + rand() * TILE, 3, 3) })()
  // 37 蓝珊瑚
  fill(37, '#0a1a1e'); ;(() => { const [x, y] = tileXY(37)
    ctx.strokeStyle = '#5fb0ff'; ctx.lineWidth = 4; ctx.lineCap = 'round'
    for (let b = 0; b < 4; b++) { let px = x + 14 + b * 12, py = y + TILE
      ctx.beginPath(); ctx.moveTo(px, py)
      for (let s = 0; s < 4; s++) { px += (rand() - 0.5) * 16; py -= 12; ctx.lineTo(px, py) }
      ctx.stroke() }
    ctx.fillStyle = '#a8d8ff'; for (let n = 0; n < 12; n++) ctx.fillRect(x + rand() * TILE, y + rand() * TILE, 3, 3) })()
  // 38 海草：竖向飘带
  fill(38, '#0a1a1e'); ;(() => { const [x, y] = tileXY(38)
    ctx.strokeStyle = '#3faa4a'; ctx.lineWidth = 5; ctx.lineCap = 'round'
    for (let b = 0; b < 5; b++) { let px = x + 8 + b * 12, py = y + TILE
      ctx.beginPath(); ctx.moveTo(px, py)
      for (let s = 0; s < 4; s++) { px += Math.sin(s + b) * 6; py -= 15; ctx.lineTo(px, py) }
      ctx.stroke() } })()
  // 39 海宫柱：竖纹青石柱 + 金饰
  fill(39, '#4a7a8f'); fbmTile(39, [[0.5, '#3f6a7c'], [0.75, '#4a7a8f'], [0.9, '#5f95aa']], 3)
  ;(() => { const [x, y] = tileXY(39); ctx.fillStyle = 'rgba(30,55,68,0.7)'
    for (let g = 6; g < TILE; g += 12) ctx.fillRect(x + g, y, 3, TILE)
    ctx.fillStyle = '#e8b53a'; ctx.fillRect(x, y + 4, TILE, 4); ctx.fillRect(x, y + TILE - 8, TILE, 4) })()

  // —— v4 六区新增 tile ——
  // 40 竹节：翠绿竖纹 + 深色竹节环 + 节上高光
  fill(40, '#4fae4a')
  ;(() => { const [x, y] = tileXY(40)
    for (let c = 0; c < TILE; c += 8) { ctx.fillStyle = c % 16 === 0 ? '#419440' : '#5cbf56'; ctx.fillRect(x + c, y, 6, TILE) }
    ctx.fillStyle = '#2f7a30'
    ctx.fillRect(x, y + 14, TILE, 4); ctx.fillRect(x, y + 44, TILE, 4)
    ctx.fillStyle = '#8fe08a'
    ctx.fillRect(x, y + 12, TILE, 2); ctx.fillRect(x, y + 42, TILE, 2)
  })()
  // 41 竹叶：暗绿底 + 细长亮叶
  fbmTile(41, [{ t: 0.4, c: '#2f7a2b' }, { t: 0.55, c: '#3a9434' }, { t: 0.72, c: '#46a83d' }, { t: 1, c: '#54bc49' }], 6)
  ;(() => { const [x, y] = tileXY(41)
    ctx.strokeStyle = '#8fe08a'; ctx.lineWidth = 2; ctx.lineCap = 'round'
    for (let n = 0; n < 14; n++) {
      const cx = x + 6 + rand() * 52, cy = y + 6 + rand() * 52, a = rand() * Math.PI
      ctx.beginPath(); ctx.moveTo(cx - Math.cos(a) * 6, cy - Math.sin(a) * 6); ctx.lineTo(cx + Math.cos(a) * 6, cy + Math.sin(a) * 6); ctx.stroke()
    }
    speckle(41, ['#1e5c1a'], 30, 2)
  })()
  // 42 钻石矿石：灰岩底 + 青白菱形晶簇
  fbmTile(42, [{ t: 0.4, c: '#797979' }, { t: 0.54, c: '#848484' }, { t: 0.7, c: '#8f8f8f' }, { t: 1, c: '#9b9b9b' }], 5, 4211)
  ;(() => { const [x, y] = tileXY(42)
    for (let n = 0; n < 5; n++) {
      const cx = x + 10 + rand() * 44, cy = y + 10 + rand() * 44, s = 5 + rand() * 4
      ctx.fillStyle = '#5fd8e8'
      ctx.beginPath(); ctx.moveTo(cx, cy - s); ctx.lineTo(cx + s, cy); ctx.lineTo(cx, cy + s); ctx.lineTo(cx - s, cy); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#c8f6ff'
      ctx.beginPath(); ctx.moveTo(cx, cy - s); ctx.lineTo(cx + s * 0.5, cy - s * 0.4); ctx.lineTo(cx, cy); ctx.closePath(); ctx.fill()
      ctx.fillStyle = '#ffffff'; ctx.fillRect(cx - 1, cy - s + 2, 2, 2)
    }
  })()
  // 43 红宝石矿石：灰岩底 + 暗红晶粒
  fbmTile(43, [{ t: 0.4, c: '#797979' }, { t: 0.54, c: '#848484' }, { t: 0.7, c: '#8f8f8f' }, { t: 1, c: '#9b9b9b' }], 5, 4311)
  ;(() => { const [x, y] = tileXY(43)
    for (let n = 0; n < 6; n++) {
      const cx = x + 8 + rand() * 46, cy = y + 8 + rand() * 46, s = 4 + rand() * 4
      ctx.fillStyle = '#8f1626'; ctx.fillRect(cx - s / 2 - 1, cy - s / 2 - 1, s + 2, s + 2)
      ctx.fillStyle = '#e83a5a'; ctx.fillRect(cx - s / 2, cy - s / 2, s, s)
      ctx.fillStyle = '#ff8fa5'; ctx.fillRect(cx - s / 2, cy - s / 2, s, 2)
      ctx.fillStyle = '#ffd8e0'; ctx.fillRect(cx - s / 2, cy - s / 2, 2, 2)
    }
  })()
  // 44 蓝宝石矿石：灰岩底 + 深蓝晶粒
  fbmTile(44, [{ t: 0.4, c: '#797979' }, { t: 0.54, c: '#848484' }, { t: 0.7, c: '#8f8f8f' }, { t: 1, c: '#9b9b9b' }], 5, 4411)
  ;(() => { const [x, y] = tileXY(44)
    for (let n = 0; n < 6; n++) {
      const cx = x + 8 + rand() * 46, cy = y + 8 + rand() * 46, s = 4 + rand() * 4
      ctx.fillStyle = '#16308f'; ctx.fillRect(cx - s / 2 - 1, cy - s / 2 - 1, s + 2, s + 2)
      ctx.fillStyle = '#3a6ae8'; ctx.fillRect(cx - s / 2, cy - s / 2, s, s)
      ctx.fillStyle = '#8fabff'; ctx.fillRect(cx - s / 2, cy - s / 2, s, 2)
      ctx.fillStyle = '#d8e2ff'; ctx.fillRect(cx - s / 2, cy - s / 2, 2, 2)
    }
  })()
  // 45 神秘图腾 顶/底：灰石主体 + 红色边框（双层）
  fill(45, '#8a8a92'); speckle(45, ['#7a7a82', '#9a9aa2'], 160, 3)
  ;(() => { const [x, y] = tileXY(45)
    ctx.strokeStyle = '#d82a2a'; ctx.lineWidth = 5; ctx.strokeRect(x + 3, y + 3, TILE - 6, TILE - 6)
    ctx.strokeStyle = 'rgba(255,90,90,0.5)'; ctx.lineWidth = 2; ctx.strokeRect(x + 9, y + 9, TILE - 18, TILE - 18)
  })()
  // 46 神秘图腾 侧脸：灰体红框 + 两双发光红眼（设定原文：两双红色的眼睛）
  fill(46, '#84848c'); speckle(46, ['#74747c', '#94949c'], 140, 3)
  ;(() => { const [x, y] = tileXY(46)
    ctx.strokeStyle = '#d82a2a'; ctx.lineWidth = 5; ctx.strokeRect(x + 3, y + 3, TILE - 6, TILE - 6)
    for (const [ex, ey] of [[22, 22], [42, 22], [22, 40], [42, 40]]) {
      ctx.fillStyle = 'rgba(255,40,40,0.35)'; ctx.beginPath(); ctx.arc(x + ex, y + ey, 8, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#ff2020'; ctx.beginPath(); ctx.ellipse(x + ex, y + ey, 6, 4, 0, 0, Math.PI * 2); ctx.fill()
      ctx.fillStyle = '#ffb0a0'; ctx.fillRect(x + ex - 1, y + ey - 2, 3, 2)
    }
    ctx.fillStyle = '#5a5a62'; ctx.fillRect(x + 24, y + 52, 16, 3)   // 嘴缝
  })()
  // 47 焦黑砖：暗色砖缝 + 焦裂余烬
  fill(47, '#3a3532')
  ;(() => { const [x, y] = tileXY(47)
    ctx.fillStyle = '#262220'
    for (let r = 0; r < 4; r++) {
      ctx.fillRect(x, y + r * 16, TILE, 2)
      const off = r % 2 === 0 ? 0 : 16
      for (let c = off; c <= TILE; c += 32) ctx.fillRect(x + c, y + r * 16, 2, 16)
    }
    speckle(47, ['#2e2a28', '#4a4440'], 120, 2)
    ctx.strokeStyle = '#1a1614'; ctx.lineWidth = 2
    for (let n = 0; n < 3; n++) {
      let px = x + rand() * TILE, py = y + rand() * TILE
      ctx.beginPath(); ctx.moveTo(px, py)
      for (let s = 0; s < 3; s++) { px += (rand() - 0.5) * 20; py += (rand() - 0.5) * 20; ctx.lineTo(px, py) }
      ctx.stroke()
    }
    ctx.fillStyle = '#c05024'
    for (let n = 0; n < 4; n++) ctx.fillRect(x + Math.floor(rand() * TILE), y + Math.floor(rand() * TILE), 2, 2)
  })()
  // 48 陶瓦：红陶横条瓦楞
  fill(48, '#b4553a')
  ;(() => { const [x, y] = tileXY(48)
    for (let r = 0; r < 4; r++) {
      ctx.fillStyle = '#8f3f2a'; ctx.fillRect(x, y + r * 16 + 12, TILE, 4)
      ctx.fillStyle = '#cf6a48'; ctx.fillRect(x, y + r * 16, TILE, 3)
    }
    speckle(48, ['#a34a32', '#c25f42'], 80, 2)
  })()
  // 49 白绒块：米白绒毛（熊猫图腾用）
  fbmTile(49, [{ t: 0.4, c: '#ddd6c8' }, { t: 0.55, c: '#e8e2d4' }, { t: 0.72, c: '#f2ecdf' }, { t: 1, c: '#faf6ec' }], 6)
  ;(() => { const [x, y] = tileXY(49)
    ctx.strokeStyle = 'rgba(200,190,170,0.6)'; ctx.lineWidth = 1
    for (let n = 0; n < 30; n++) {
      const cx = x + rand() * TILE, cy = y + rand() * TILE
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + (rand() - 0.5) * 6, cy + 4 + rand() * 3); ctx.stroke()
    }
  })()
  // 50 黑绒块：黑绒毛
  fbmTile(50, [{ t: 0.4, c: '#17171a' }, { t: 0.55, c: '#202024' }, { t: 0.72, c: '#28282d' }, { t: 1, c: '#323238' }], 6)
  ;(() => { const [x, y] = tileXY(50)
    ctx.strokeStyle = 'rgba(70,70,80,0.6)'; ctx.lineWidth = 1
    for (let n = 0; n < 30; n++) {
      const cx = x + rand() * TILE, cy = y + rand() * TILE
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + (rand() - 0.5) * 6, cy + 4 + rand() * 3); ctx.stroke()
    }
  })()
  // 51 红地毯：红底金边 + 菱形纹样（森林神殿）
  fill(51, '#a5202e'); speckle(51, ['#8f1826', '#b52c3a'], 140, 3)
  ;(() => { const [x, y] = tileXY(51)
    ctx.strokeStyle = '#e8b53a'; ctx.lineWidth = 3; ctx.strokeRect(x + 3, y + 3, TILE - 6, TILE - 6)
    ctx.strokeStyle = 'rgba(232,181,58,0.7)'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.moveTo(x + 32, y + 12); ctx.lineTo(x + 52, y + 32); ctx.lineTo(x + 32, y + 52); ctx.lineTo(x + 12, y + 32); ctx.closePath(); ctx.stroke()
    ctx.fillStyle = '#e8b53a'; ctx.fillRect(x + 30, y + 30, 4, 4)
  })()
  // 52 壁画：亚麻底画框 + 火柴小人图 + 齿轮（森林神殿墙画）
  fill(52, '#d8cdb4'); speckle(52, ['#ccc0a6', '#e2d8c2'], 80, 2)
  ;(() => { const [x, y] = tileXY(52)
    ctx.strokeStyle = '#6b4d29'; ctx.lineWidth = 3; ctx.strokeRect(x + 2, y + 2, TILE - 4, TILE - 4)
    ctx.strokeStyle = '#4a3a2a'; ctx.lineWidth = 2; ctx.lineCap = 'round'
    const man = (mx, my, pose) => {
      ctx.beginPath(); ctx.arc(x + mx, y + my, 4, 0, Math.PI * 2); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x + mx, y + my + 4); ctx.lineTo(x + mx, y + my + 14); ctx.stroke()
      ctx.beginPath(); ctx.moveTo(x + mx, y + my + 14); ctx.lineTo(x + mx - 5, y + my + 22)
      ctx.moveTo(x + mx, y + my + 14); ctx.lineTo(x + mx + 5, y + my + 22); ctx.stroke()
      if (pose === 0) { ctx.beginPath(); ctx.moveTo(x + mx - 6, y + my + 2); ctx.lineTo(x + mx, y + my + 8); ctx.lineTo(x + mx + 6, y + my + 2); ctx.stroke() }
      else { ctx.beginPath(); ctx.moveTo(x + mx - 6, y + my + 12); ctx.lineTo(x + mx + 6, y + my + 8); ctx.stroke() }
    }
    man(16, 12, 0); man(34, 28, 1); man(50, 10, 0)
    ctx.strokeStyle = '#8a5f2a'; ctx.lineWidth = 2
    ctx.beginPath(); ctx.arc(x + 48, y + 48, 6, 0, Math.PI * 2); ctx.stroke()
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 3) {
      ctx.beginPath(); ctx.moveTo(x + 48 + Math.cos(a) * 6, y + 48 + Math.sin(a) * 6)
      ctx.lineTo(x + 48 + Math.cos(a) * 9, y + 48 + Math.sin(a) * 9); ctx.stroke()
    }
  })()
  // 53 摊布：红白条纹遮阳布（市集摊位）
  fill(53, '#f2ede0')
  ;(() => { const [x, y] = tileXY(53)
    for (let c = 0; c < TILE; c += 16) { ctx.fillStyle = '#c73a48'; ctx.fillRect(x + c, y, 8, TILE) }
    ctx.fillStyle = 'rgba(0,0,0,0.12)'
    for (let r = 12; r < TILE; r += 16) ctx.fillRect(x, y + r, TILE, 2)
  })()

  // —— v5 装饰 tile ——
  // 54 红花：草底 + 红花瓣 + 黄蕊 + 绿茎
  fill(54, '#4a9a3e')
  ;(() => { const [x, y] = tileXY(54)
    for (let n = 0; n < 5; n++) {
      const cx = x + 12 + rand() * 40, cy = y + 16 + rand() * 40
      ctx.strokeStyle = '#2f7a2b'; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(cx, cy + 10); ctx.lineTo(cx, cy); ctx.stroke()
      ctx.fillStyle = '#e0342e'
      for (const [ox, oz] of [[-4, 0], [4, 0], [0, -4], [0, 4]]) ctx.fillRect(cx + ox - 2, cy + oz - 2, 4, 4)
      ctx.fillStyle = '#ffd23a'; ctx.fillRect(cx - 2, cy - 2, 4, 4)
    }
  })()
  // 55 黄花
  fill(55, '#4a9a3e')
  ;(() => { const [x, y] = tileXY(55)
    for (let n = 0; n < 5; n++) {
      const cx = x + 12 + rand() * 40, cy = y + 16 + rand() * 40
      ctx.strokeStyle = '#2f7a2b'; ctx.lineWidth = 2
      ctx.beginPath(); ctx.moveTo(cx, cy + 10); ctx.lineTo(cx, cy); ctx.stroke()
      ctx.fillStyle = '#f4c430'
      for (const [ox, oz] of [[-4, 0], [4, 0], [0, -4], [0, 4]]) ctx.fillRect(cx + ox - 2, cy + oz - 2, 4, 4)
      ctx.fillStyle = '#c8760f'; ctx.fillRect(cx - 2, cy - 2, 4, 4)
    }
  })()
  // 56 高草：草底 + 竖向草叶
  fill(56, '#4a9a3e')
  ;(() => { const [x, y] = tileXY(56)
    ctx.strokeStyle = '#5cb544'; ctx.lineWidth = 2; ctx.lineCap = 'round'
    for (let n = 0; n < 18; n++) {
      const bx = x + 4 + rand() * 56, h = 10 + rand() * 18
      ctx.strokeStyle = rand() < 0.5 ? '#5cb544' : '#4a9a3e'
      ctx.beginPath(); ctx.moveTo(bx, y + 60); ctx.lineTo(bx + (rand() - 0.5) * 6, y + 60 - h); ctx.stroke()
    }
  })()
  // 57 栅栏：木色竖条 + 横档（半透背景）
  ;(() => { const i = 57; const [x, y] = tileXY(i)
    ctx.clearRect(x, y, TILE, TILE)
    ctx.fillStyle = '#8a6136'
    ctx.fillRect(x + 14, y, 8, TILE); ctx.fillRect(x + 42, y, 8, TILE)   // 两根立柱
    ctx.fillRect(x, y + 16, TILE, 6); ctx.fillRect(x, y + 40, TILE, 6)   // 两根横档
    ctx.fillStyle = '#6b4a29'
    ctx.fillRect(x + 14, y, 2, TILE); ctx.fillRect(x + 42, y, 2, TILE)
  })()
  // 58 砾石：杂色小石子
  fbmTile(58, [{ t: 0.4, c: '#7a736c' }, { t: 0.55, c: '#8a837a' }, { t: 0.72, c: '#9a9088' }, { t: 1, c: '#a89e94' }], 7, 5811)
  speckle(58, ['#5f584f', '#b0a89c', '#6a6259'], 200, 3)
  // 59 篝火：石圈 + 木柴 + 火焰
  fill(59, '#3a3532')
  ;(() => { const [x, y] = tileXY(59)
    ctx.fillStyle = '#6a625a'   // 石圈
    for (let a = 0; a < Math.PI * 2; a += Math.PI / 6) ctx.fillRect(x + 32 + Math.cos(a) * 24 - 3, y + 32 + Math.sin(a) * 24 - 3, 6, 6)
    ctx.strokeStyle = '#5f4326'; ctx.lineWidth = 4   // 交叉木柴
    ctx.beginPath(); ctx.moveTo(x + 18, y + 44); ctx.lineTo(x + 46, y + 22); ctx.moveTo(x + 46, y + 44); ctx.lineTo(x + 18, y + 22); ctx.stroke()
    for (let n = 0; n < 10; n++) {   // 火焰
      const fx = x + 24 + rand() * 16, fh = 12 + rand() * 20
      const g = ctx.createLinearGradient(0, y + 40, 0, y + 40 - fh)
      g.addColorStop(0, '#ffdd55'); g.addColorStop(1, 'rgba(255,60,10,0.2)')
      ctx.fillStyle = g
      ctx.beginPath(); ctx.moveTo(fx - 4, y + 40); ctx.lineTo(fx, y + 40 - fh); ctx.lineTo(fx + 4, y + 40); ctx.fill()
    }
  })()

  const texture = new THREE.CanvasTexture(canvas)
  // 近处保持像素感、远处用 mipmap 消闪烁摩尔纹
  texture.magFilter = THREE.NearestFilter
  texture.minFilter = THREE.NearestMipmapLinearFilter
  texture.generateMipmaps = true
  texture.anisotropy = 4
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

// 挖掘破碎四阶段裂纹（透明底，叠在被挖方块表面）
export function createCrackTextures() {
  const texs = []
  for (let stage = 0; stage < 4; stage++) {
    const c = document.createElement('canvas')
    c.width = c.height = 64
    const ctx = c.getContext('2d')
    const rand = mulberry32(777 + 1)   // 各阶段同种子，裂纹逐步延伸
    ctx.strokeStyle = 'rgba(10,8,6,0.85)'
    ctx.lineWidth = 2
    const branches = 3 + stage * 2
    const steps = 2 + stage * 2
    for (let b = 0; b < branches; b++) {
      let px = 32 + (rand() - 0.5) * 10, py = 32 + (rand() - 0.5) * 10
      ctx.beginPath(); ctx.moveTo(px, py)
      for (let s = 0; s < steps; s++) {
        px += (rand() - 0.5) * 26
        py += (rand() - 0.5) * 26
        ctx.lineTo(px, py)
      }
      ctx.stroke()
      // 高阶段加细碎裂
      if (stage >= 2) {
        ctx.lineWidth = 1
        ctx.beginPath(); ctx.moveTo(px, py)
        ctx.lineTo(px + (rand() - 0.5) * 16, py + (rand() - 0.5) * 16)
        ctx.stroke()
        ctx.lineWidth = 2
      }
    }
    const tex = new THREE.CanvasTexture(c)
    tex.magFilter = THREE.NearestFilter
    tex.minFilter = THREE.NearestFilter
    texs.push(tex)
  }
  return texs
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
