// 怪物定义表 v2（标签制）+ Box 拼装模型
// medium: 'ground' | 'water' | 'air'；passive: 被打才反击；radial: 径向弹幕
import * as THREE from 'three'

function box(w, h, d, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }))
  m.position.set(x, y, z)
  return m
}
function eye(g, color, w, h, x, y, z) {
  const e = new THREE.Mesh(new THREE.BoxGeometry(w, h, 0.04), new THREE.MeshBasicMaterial({ color }))
  e.position.set(x, y, z); g.add(e)
}

// —— 第一章三怪 ——
function buildSpider(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.7, 0.28, 0.9, '#181818', 0, 0.32, 0))
  g.add(box(0.4, 0.22, 0.4, '#232323', 0, 0.5, -0.3))
  g.userData.legs = []
  for (const side of [-1, 1]) for (let i = 0; i < 4; i++) {
    const leg = box(0.08, 0.3, 0.08, '#101010', side * 0.42, 0.16, -0.3 + i * 0.22)
    leg.rotation.z = side * 0.5
    leg.userData.baseZ = side * 0.5
    g.add(leg)
    g.userData.legs.push(leg)
  }
  eye(g, '#ff3030', 0.07, 0.07, -0.1, 0.52, -0.5); eye(g, '#ff3030', 0.07, 0.07, 0.1, 0.52, -0.5)
  g.scale.setScalar(scale); return g
}
function buildBrute(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.26, 0.55, 0.3, '#5a5f66', -0.16, 0.28, 0))
  g.add(box(0.26, 0.55, 0.3, '#5a5f66', 0.16, 0.28, 0))
  g.add(box(0.85, 0.6, 0.45, '#787f88', 0, 0.86, 0))
  g.add(box(0.22, 0.6, 0.26, '#6a7078', -0.55, 0.85, 0))
  g.add(box(0.22, 0.6, 0.26, '#6a7078', 0.55, 0.85, 0))
  g.add(box(0.4, 0.36, 0.4, '#8b939d', 0, 1.35, 0))
  eye(g, '#ffb020', 0.07, 0.07, -0.09, 1.4, -0.21); eye(g, '#ffb020', 0.07, 0.07, 0.09, 1.4, -0.21)
  g.scale.setScalar(scale); return g
}
function buildArcher(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.16, 0.6, 0.16, '#e8e4da', -0.1, 0.3, 0))
  g.add(box(0.16, 0.6, 0.16, '#e8e4da', 0.1, 0.3, 0))
  g.add(box(0.42, 0.55, 0.24, '#f2eee4', 0, 0.88, 0))
  g.add(box(0.14, 0.5, 0.14, '#e8e4da', -0.3, 0.9, 0))
  g.add(box(0.14, 0.5, 0.14, '#e8e4da', 0.3, 0.9, 0))
  g.add(box(0.34, 0.34, 0.34, '#f7f4ec', 0, 1.42, 0))
  g.add(box(0.06, 0.7, 0.06, '#7a5a2e', 0.34, 0.9, -0.25))
  eye(g, '#404040', 0.06, 0.08, -0.08, 1.46, -0.18); eye(g, '#404040', 0.06, 0.08, 0.08, 1.46, -0.18)
  g.scale.setScalar(scale); return g
}

// —— 海洋 ——
function buildShark(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.5, 0.5, 1.6, '#5a6c7a', 0, 0.5, 0))
  g.add(box(0.42, 0.3, 0.5, '#e8eef2', 0, 0.28, -0.3))   // 白肚
  g.add(box(0.1, 0.4, 0.4, '#4a5a66', 0, 0.95, 0.1))      // 背鳍
  g.add(box(0.1, 0.35, 0.35, '#4a5a66', 0, 0.5, 0.95))    // 尾鳍
  g.add(box(0.4, 0.14, 0.3, '#e8eef2', 0, 0.32, -0.8))    // 血盆大口
  eye(g, '#ff3030', 0.07, 0.07, -0.16, 0.62, -0.78); eye(g, '#ff3030', 0.07, 0.07, 0.16, 0.62, -0.78)
  g.scale.setScalar(scale); return g
}
function buildOctopus(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.7, 0.6, 0.7, '#7a4a9e', 0, 0.7, 0))
  g.userData.tentacles = []
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2
    const t = box(0.12, 0.5, 0.12, '#653a85', Math.cos(a) * 0.28, 0.22, Math.sin(a) * 0.28)
    t.rotation.x = Math.sin(a) * 0.3; t.rotation.z = -Math.cos(a) * 0.3
    t.userData.baseX = t.rotation.x; t.userData.baseZ = t.rotation.z
    g.add(t)
    g.userData.tentacles.push(t)
  }
  eye(g, '#f5f0e0', 0.16, 0.18, -0.18, 0.78, -0.36); eye(g, '#f5f0e0', 0.16, 0.18, 0.18, 0.78, -0.36)
  eye(g, '#101010', 0.07, 0.09, -0.18, 0.76, -0.38); eye(g, '#101010', 0.07, 0.09, 0.18, 0.76, -0.38)
  g.scale.setScalar(scale); return g
}
function buildFish(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.24, 0.24, 0.5, '#a8c8d8', 0, 0.3, 0))
  g.add(box(0.06, 0.2, 0.2, '#8fb0c0', 0, 0.3, 0.32))
  eye(g, '#101010', 0.05, 0.05, -0.09, 0.36, -0.22); eye(g, '#101010', 0.05, 0.05, 0.09, 0.36, -0.22)
  g.scale.setScalar(scale); return g
}
function buildCrab(scale = 1) {
  const g = new THREE.Group()
  g.add(box(1.1, 0.4, 0.8, '#c0453a', 0, 0.42, 0))
  g.userData.legs = []
  for (const side of [-1, 1]) for (let i = 0; i < 3; i++) {
    const leg = box(0.09, 0.3, 0.09, '#8f3020', side * 0.62, 0.16, -0.25 + i * 0.25)
    leg.userData.baseZ = 0
    g.add(leg); g.userData.legs.push(leg)
  }
  const clawL = box(0.34, 0.26, 0.3, '#d55548', -0.6, 0.55, -0.4)
  const clawR = box(0.34, 0.26, 0.3, '#d55548', 0.6, 0.55, -0.4)
  g.add(clawL, clawR)
  g.userData.claws = [clawL, clawR]
  eye(g, '#101010', 0.07, 0.1, -0.16, 0.72, -0.36); eye(g, '#101010', 0.07, 0.1, 0.16, 0.72, -0.36)
  g.scale.setScalar(scale); return g
}

// —— 天空 ——
// 翼组辅助：pivot 在翼根，内容盒向外伸
function wingPair(g, y, z, len, thick, depth, color) {
  const mk = side => {
    const p = new THREE.Group(); p.position.set(side * 0.2, y, z)
    p.add(box(len, thick, depth, color, side * len / 2, 0, 0))
    return p
  }
  const L = mk(-1), R = mk(1)
  g.add(L, R)
  g.userData.wings = [L, R]
  return [L, R]
}

function buildAngel(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.44, 0.7, 0.3, '#f4f6f7', 0, 0.7, 0))         // 白袍
  g.add(box(0.32, 0.32, 0.32, '#ffe4c8', 0, 1.28, 0))       // 头
  const haloM = new THREE.Mesh(new THREE.BoxGeometry(0.42, 0.05, 0.42),
    new THREE.MeshBasicMaterial({ color: '#ffd75e' }))
  haloM.position.set(0, 1.58, 0); g.add(haloM)
  wingPair(g, 1.0, 0.16, 0.55, 0.08, 0.65, '#ffffff')
  eye(g, '#3a78c8', 0.06, 0.07, -0.08, 1.3, -0.17); eye(g, '#3a78c8', 0.06, 0.07, 0.08, 1.3, -0.17)
  g.scale.setScalar(scale); return g
}
function buildBird(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.3, 0.3, 0.55, '#8a6142', 0, 0.4, 0))
  g.add(box(0.22, 0.22, 0.22, '#7a5538', 0, 0.62, -0.3))
  g.add(box(0.08, 0.08, 0.2, '#f0b429', 0, 0.6, -0.5))      // 尖喙
  g.add(box(0.06, 0.06, 0.3, '#6d4a30', 0, 0.42, 0.4))      // 尾
  wingPair(g, 0.52, 0, 0.5, 0.06, 0.32, '#966c4b')
  eye(g, '#101010', 0.05, 0.05, -0.07, 0.66, -0.4); eye(g, '#101010', 0.05, 0.05, 0.07, 0.66, -0.4)
  g.scale.setScalar(scale); return g
}

// —— 地狱 ——
function buildDemon(scale = 1) {
  const g = buildBrute(1)
  g.traverse(o => { if (o.isMesh && o.material.color && !o.material.map) {
    const c = o.material.color.getHexString()
    if (c.startsWith('5a') || c.startsWith('78') || c.startsWith('6a') || c.startsWith('8b')) o.material.color.set('#7a2828')
  } })
  g.add(box(0.08, 0.22, 0.08, '#2b1414', -0.14, 1.62, 0))
  g.add(box(0.08, 0.22, 0.08, '#2b1414', 0.14, 1.62, 0))
  g.add(box(0.06, 0.35, 0.5, '#4a1a1a', -0.5, 1.0, 0.2))
  g.add(box(0.06, 0.35, 0.5, '#4a1a1a', 0.5, 1.0, 0.2))
  g.scale.setScalar(scale); return g
}
function buildDragon(scale = 1) {
  const g = new THREE.Group()
  // 龙身四节
  for (let i = 0; i < 4; i++) {
    g.add(box(0.6 - i * 0.08, 0.5 - i * 0.06, 0.7, '#5f1a10', 0, 0.8 + i * 0.06, i * 0.62))
  }
  g.add(box(0.5, 0.45, 0.6, '#7a2418', 0, 0.9, -0.55))       // 头
  g.add(box(0.3, 0.14, 0.4, '#8f3020', 0, 0.78, -0.95))      // 吻
  g.add(box(0.08, 0.3, 0.08, '#2b1414', -0.16, 1.24, -0.5))  // 角
  g.add(box(0.08, 0.3, 0.08, '#2b1414', 0.16, 1.24, -0.5))
  wingPair(g, 1.1, 0.3, 1.6, 0.08, 0.8, '#4a1a1a')           // 大翼（可扇动）
  eye(g, '#ffb020', 0.09, 0.09, -0.14, 1.0, -0.83); eye(g, '#ffb020', 0.09, 0.09, 0.14, 1.0, -0.83)
  g.scale.setScalar(scale); return g
}

// —— 终极之地 ——
function buildRuneGuard(scale = 1) {
  const g = new THREE.Group()
  g.add(box(0.24, 0.6, 0.26, '#1a1626', -0.15, 0.3, 0))
  g.add(box(0.24, 0.6, 0.26, '#1a1626', 0.15, 0.3, 0))
  g.add(box(0.7, 0.65, 0.4, '#241c30', 0, 0.9, 0))
  g.add(box(0.2, 0.55, 0.24, '#1a1626', -0.5, 0.9, 0))
  g.add(box(0.2, 0.55, 0.24, '#1a1626', 0.5, 0.9, 0))
  g.add(box(0.38, 0.38, 0.38, '#2e2440', 0, 1.42, 0))
  const rune = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.3, 0.05), new THREE.MeshBasicMaterial({ color: '#7dfcff' }))
  rune.position.set(0, 0.95, -0.22); g.add(rune)
  eye(g, '#7dfcff', 0.07, 0.07, -0.09, 1.46, -0.22); eye(g, '#7dfcff', 0.07, 0.07, 0.09, 1.46, -0.22)
  g.scale.setScalar(scale); return g
}
function buildShadowKing(scale = 1) {
  const g = buildRuneGuard(1.4)
  const crown = box(0.4, 0.14, 0.4, '#f0b429', 0, 2.3, 0)
  g.add(crown)
  const cape = box(0.9, 1.2, 0.08, '#12081e', 0, 1.0, 0.35)
  g.add(cape)
  g.traverse(o => { if (o.isMesh && o.material.color && o.material.type === 'MeshBasicMaterial') o.material.color.set('#c084ff') })
  g.scale.setScalar(scale); return g
}

// —— 海底守卫者（严格按设定原文：鹦鹉螺外形、比鹦鹉螺大好几倍、全身带刺、
//     下半身鱿鱼触手、眼睛长在铠甲旁边）——
function buildSeaGuardian(scale = 3.2) {
  const g = new THREE.Group()
  // 鹦鹉螺螺旋壳：一串渐小的方块卷成螺线
  let r = 0.55, ang = 0
  for (let i = 0; i < 9; i++) {
    const px = Math.cos(ang) * r * 0.5
    const py = 1.1 + Math.sin(ang) * r * 0.5
    const s = 0.75 - i * 0.07
    g.add(box(0.5, s, s, i % 2 ? '#d8b48a' : '#b0805a', px * 0.3, py, px))
    ang += 0.75; r -= 0.045
  }
  // 壳身主体
  g.add(box(0.6, 0.9, 0.9, '#c89a6e', 0, 1.0, 0.1))
  // 全身刺（锥形用细高箱代替）
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2
    const s = box(0.08, 0.34, 0.08, '#f2e8d8', Math.cos(a) * 0.5, 1.1 + Math.sin(a) * 0.55, 0.1 + Math.sin(a * 2) * 0.3)
    s.rotation.z = a
    g.add(s)
  }
  // 眼睛长在铠甲旁边（壳缘两侧大眼）
  eye(g, '#f5f0e0', 0.22, 0.26, -0.34, 1.15, -0.42); eye(g, '#f5f0e0', 0.22, 0.26, 0.34, 1.15, -0.42)
  eye(g, '#101010', 0.1, 0.12, -0.34, 1.13, -0.45); eye(g, '#101010', 0.1, 0.12, 0.34, 1.13, -0.45)
  // 下半身鱿鱼触手 ×8（可摆动）
  g.userData.tentacles = []
  for (let i = 0; i < 8; i++) {
    const a = (i / 8) * Math.PI * 2
    const t = box(0.1, 0.7, 0.1, '#a06a8a', Math.cos(a) * 0.3, 0.28, 0.1 + Math.sin(a) * 0.3)
    t.rotation.x = Math.sin(a) * 0.25; t.rotation.z = -Math.cos(a) * 0.25
    t.userData.baseX = t.rotation.x; t.userData.baseZ = t.rotation.z
    g.add(t)
    g.userData.tentacles.push(t)
  }
  g.scale.setScalar(scale); return g
}

// —— v4 竹林：大熊猫（被动）& 远古熊猫（Boss）——
function buildPanda(scale = 1, ancient = false) {
  const g = new THREE.Group()
  const white = ancient ? '#c8c4bc' : '#f2ecdf'   // 远古熊猫毛色灰旧
  const black = ancient ? '#1a1a1e' : '#232328'
  g.userData.legs = []
  // 四条粗腿（黑）
  for (const [sx, sz] of [[-0.28, -0.2], [0.28, -0.2], [-0.28, 0.2], [0.28, 0.2]]) {
    const leg = box(0.24, 0.4, 0.24, black, sx, 0.2, sz)
    g.add(leg); g.userData.legs.push(leg)
  }
  g.add(box(0.72, 0.6, 0.9, white, 0, 0.66, 0))          // 白胖躯干
  g.add(box(0.16, 0.5, 0.2, black, -0.44, 0.7, 0))       // 黑前肢（肩带）
  g.add(box(0.16, 0.5, 0.2, black, 0.44, 0.7, 0))
  g.add(box(0.5, 0.46, 0.44, white, 0, 1.16, -0.36))     // 圆头
  g.add(box(0.18, 0.16, 0.1, black, -0.24, 1.4, -0.3))   // 黑耳
  g.add(box(0.18, 0.16, 0.1, black, 0.24, 1.4, -0.3))
  g.add(box(0.16, 0.2, 0.06, black, -0.13, 1.14, -0.58)) // 黑眼圈
  g.add(box(0.16, 0.2, 0.06, black, 0.13, 1.14, -0.58))
  g.add(box(0.1, 0.09, 0.06, '#1a1a1a', 0, 1.06, -0.6))  // 鼻
  if (ancient) {
    eye(g, '#ff2020', 0.09, 0.11, -0.13, 1.16, -0.61); eye(g, '#ff2020', 0.09, 0.11, 0.13, 1.16, -0.61)  // 红眼
    // 背部伤疤条
    g.add(box(0.06, 0.04, 0.5, '#7a2020', 0, 0.98, 0))
    g.add(box(0.5, 0.04, 0.06, '#7a2020', 0, 0.98, -0.1))
  } else {
    eye(g, '#101010', 0.06, 0.08, -0.13, 1.15, -0.61); eye(g, '#101010', 0.06, 0.08, 0.13, 1.15, -0.61)
  }
  g.scale.setScalar(scale); return g
}

// —— v4 鬼城：变异坦克 & 变异装甲车（履带载具，盒子拼装）——
function buildTank(scale = 1) {
  const g = new THREE.Group()
  g.userData.wheels = []
  // 履带（两侧长条）+ 轮
  for (const sx of [-0.5, 0.5]) {
    g.add(box(0.24, 0.34, 1.5, '#1a1a1c', sx, 0.24, 0))
    for (let i = -2; i <= 2; i++) {
      const w = box(0.28, 0.28, 0.28, '#2e2e32', sx, 0.2, i * 0.32)
      g.add(w); g.userData.wheels.push(w)
    }
  }
  g.add(box(1.0, 0.4, 1.4, '#3a4038', 0, 0.55, 0))       // 车体（暗绿锈迹）
  g.add(box(0.7, 0.4, 0.7, '#454d42', 0, 0.9, 0.1))      // 炮塔
  g.add(box(0.16, 0.16, 1.0, '#26291f', 0, 0.92, -0.6))  // 长炮管
  g.add(box(0.22, 0.22, 0.22, '#0e0e08', 0, 0.92, -1.1)) // 炮口
  // 变异：外壳凸起的暗红肉瘤
  g.add(box(0.3, 0.2, 0.3, '#6a2020', -0.3, 0.78, -0.3))
  g.add(box(0.24, 0.18, 0.24, '#7a2828', 0.34, 0.76, 0.3))
  eye(g, '#ff3030', 0.1, 0.08, 0, 0.98, -0.26)
  g.scale.setScalar(scale); return g
}
function buildApc(scale = 1) {
  const g = new THREE.Group()
  g.userData.wheels = []
  for (const sx of [-0.46, 0.46]) {
    for (let i = -1; i <= 1; i++) {
      const w = box(0.3, 0.3, 0.3, '#2e2e32', sx, 0.22, i * 0.5)
      g.add(w); g.userData.wheels.push(w)
    }
  }
  g.add(box(0.92, 0.42, 1.7, '#463a30', 0, 0.56, 0))     // 扁长车体
  g.add(box(0.7, 0.24, 0.9, '#544636', 0, 0.86, 0.1))    // 上装甲
  g.add(box(0.2, 0.24, 0.2, '#26291f', 0, 0.98, -0.5))   // 车顶机枪盒
  g.add(box(0.1, 0.1, 0.5, '#1a1a14', 0, 1.0, -0.85))    // 枪管
  g.add(box(0.26, 0.18, 0.26, '#6a2020', -0.34, 0.8, 0.2)) // 变异肉瘤
  eye(g, '#ff3030', 0.09, 0.07, -0.16, 0.9, -0.8); eye(g, '#ff3030', 0.09, 0.07, 0.16, 0.9, -0.8)
  g.scale.setScalar(scale); return g
}

// ============ 动画钩子（monsters.update 每帧调 def.animate(m, ph, dt)）============
function rollWheels(m, ph) {
  const ws = m.group.userData.wheels
  if (!ws) return
  const speed = Math.hypot(m.ent.vel.x, m.ent.vel.z)
  for (const w of ws) w.rotation.x = ph * (0.5 + speed)
}
function pandaWalk(m, ph) {
  const legs = m.group.userData.legs
  if (!legs) return
  const speed = Math.hypot(m.ent.vel.x, m.ent.vel.z)
  const amp = speed > 0.3 ? 0.45 : 0.05
  legs.forEach((leg, i) => { leg.rotation.x = Math.sin(ph * 6 + (i % 2) * Math.PI) * amp })
}
function flapWings(m, ph) {
  const w = m.group.userData.wings
  if (!w) return
  const speed = Math.hypot(m.ent.vel.x, m.ent.vel.z) + Math.abs(m.ent.vel.y)
  const amp = 0.3 + Math.min(0.45, speed * 0.06)
  const a = Math.sin(ph * 6) * amp
  w[0].rotation.z = -a - 0.1
  w[1].rotation.z = a + 0.1
}
// 鲲鹏：扇翅 + 三节翼随扇动波浪展开；俯冲时后掠折翼
function kunpengWings(m, ph) {
  const u = m.group.userData
  if (!u.wings) return
  const diving = m.swoopPhase === 'dive'
  const a = diving ? 0.9 : Math.sin(ph * (m.swoopPhase ? 5 : 3)) * 0.45
  u.wings[0].rotation.z = -a - 0.06
  u.wings[1].rotation.z = a + 0.06
  for (const [si, segs] of [[0, u.wingSegs[0]], [1, u.wingSegs[1]]]) {
    const sgn = si === 0 ? 1 : -1
    segs.forEach((seg, i) => {
      if (i === 0) return
      const lag = Math.sin(ph * (m.swoopPhase ? 5 : 3) - i * 0.7) * 0.3
      seg.rotation.z = sgn * (diving ? 0.7 : lag)
      seg.rotation.y = diving ? sgn * 0.5 : 0
    })
  }
}
function waveTentacles(m, ph) {
  const ts = m.group.userData.tentacles
  if (!ts) return
  ts.forEach((t, i) => {
    t.rotation.x = t.userData.baseX + Math.sin(ph * 2.4 + i * 0.9) * 0.28
    t.rotation.z = t.userData.baseZ + Math.cos(ph * 2.1 + i * 1.2) * 0.22
  })
}
function skitterLegs(m, ph) {
  const legs = m.group.userData.legs
  if (!legs) return
  const speed = Math.hypot(m.ent.vel.x, m.ent.vel.z)
  const amp = speed > 0.3 ? 0.4 : 0.06
  legs.forEach((leg, i) => {
    leg.rotation.x = Math.sin(ph * 9 + i * 1.6) * amp
    if (leg.userData.baseZ !== undefined) leg.rotation.z = leg.userData.baseZ
  })
}
function crabWave(m, ph) {
  skitterLegs(m, ph)
  const claws = m.group.userData.claws
  if (!claws) return
  claws[0].rotation.x = Math.sin(ph * 3) * 0.25 - 0.1
  claws[1].rotation.x = Math.sin(ph * 3 + Math.PI) * 0.25 - 0.1
}

// —— 鲲鹏 v2（鲸形巨身 + 三节可折巨翼 + 羽层色带 + 尾羽扇）——
function buildKunpeng(scale = 4) {
  const g = new THREE.Group()
  // 鲸形巨身（三段渐细）
  g.add(box(0.74, 0.62, 1.0, '#1e3a5c', 0, 0.72, -0.3))
  g.add(box(0.64, 0.54, 0.8, '#224064', 0, 0.7, 0.5))
  g.add(box(0.5, 0.42, 0.6, '#16304e', 0, 0.68, 1.1))
  g.add(box(0.62, 0.52, 0.62, '#16304e', 0, 0.74, -1.05))    // 头
  g.add(box(0.3, 0.16, 0.5, '#0f2540', 0, 0.6, -1.4))        // 喙
  g.add(box(0.54, 0.3, 1.3, '#e8eef2', 0, 0.44, -0.2))       // 白腹
  g.add(box(0.2, 0.12, 0.5, '#2a4a70', 0, 1.06, -0.7))       // 头冠羽
  // 三节可折巨翼（pivot 在翼根；内节→外节逐段收窄，羽层双色带）
  g.userData.wings = []
  g.userData.wingSegs = [[], []]
  for (const side of [-1, 1]) {
    const pivot = new THREE.Group(); pivot.position.set(side * 0.36, 0.94, -0.1)
    let px2 = 0
    const segs = [[1.1, 1.0, '#2a4a70'], [0.95, 0.85, '#3a5d85'], [0.8, 0.7, '#4a739e']]
    const segList = []
    let parent = pivot
    for (const [len, depth, color] of segs) {
      const seg = new THREE.Group(); seg.position.set(side * px2, 0, 0)
      seg.add(box(len, 0.1, depth, color, side * len / 2, 0, 0))
      seg.add(box(len, 0.06, 0.24, '#e8eef2', side * len / 2, -0.02, depth / 2 + 0.1)) // 羽缘白带
      parent.add(seg)
      segList.push(seg)
      parent = seg
      px2 = len
    }
    g.add(pivot)
    g.userData.wings.push(pivot)
    g.userData.wingSegs[side < 0 ? 0 : 1] = segList
  }
  // 尾羽扇（三片斜张）
  for (const [rot, len] of [[-0.4, 0.7], [0, 0.85], [0.4, 0.7]]) {
    const tail = box(0.16, 0.06, len, '#2a4a70', 0, 0.7, 1.5 + len / 2 - 0.2)
    tail.rotation.y = rot
    g.add(tail)
  }
  eye(g, '#7dfcff', 0.13, 0.13, -0.24, 0.86, -1.34); eye(g, '#7dfcff', 0.13, 0.13, 0.24, 0.86, -1.34)
  g.scale.setScalar(scale); return g
}

// —— 禁地守卫（焦黑巨魔像+金裂纹+双炮臂，「差点把作者干死」）——
function buildForbiddenGolem(scale = 2.2) {
  const g = new THREE.Group()
  g.add(box(0.4, 0.7, 0.4, '#2e2320', -0.25, 0.35, 0))
  g.add(box(0.4, 0.7, 0.4, '#2e2320', 0.25, 0.35, 0))
  g.add(box(1.1, 0.9, 0.6, '#3a2c26', 0, 1.15, 0))
  g.add(box(0.34, 0.8, 0.34, '#241b18', -0.75, 1.15, 0))     // 炮臂
  g.add(box(0.34, 0.8, 0.34, '#241b18', 0.75, 1.15, 0))
  g.add(box(0.2, 0.2, 0.2, '#0e0a08', -0.75, 0.7, -0.1))     // 炮口
  g.add(box(0.2, 0.2, 0.2, '#0e0a08', 0.75, 0.7, -0.1))
  g.add(box(0.5, 0.45, 0.5, '#3a2c26', 0, 1.85, 0))
  // 金裂纹
  for (const [gx, gy] of [[-0.3, 1.0], [0.2, 1.3], [0, 0.9]]) {
    g.add(box(0.06, 0.4, 0.62, '#e8b53a', gx, gy, 0))
  }
  eye(g, '#ff3030', 0.1, 0.08, -0.12, 1.9, -0.26); eye(g, '#ff3030', 0.1, 0.08, 0.12, 1.9, -0.26)
  g.scale.setScalar(scale); return g
}

// ============ 定义表 ============
export const MONSTER_DEFS = {
  // 第一章
  spider: { name: '自爆黑蛛', tags: ['爆炸类', '邪恶类', '无脊椎类'], w: 0.9, h: 0.6, speed: 2.9, build: buildSpider, exploder: true, medium: 'ground', animate: skitterLegs },
  brute:  { name: '石壳斗士', tags: ['邪恶类', '有脊椎类'], w: 0.8, h: 1.6, speed: 2.2, build: buildBrute, melee: true, medium: 'ground' },
  archer: { name: '白骨射手', tags: ['远程攻击类', '邪恶类', '有脊椎类'], w: 0.6, h: 1.7, speed: 2.2, build: buildArcher, ranged: true, medium: 'ground' },
  // 海洋
  shark:   { name: '铁齿鲨', tags: ['鲨鱼类', '有脊椎类'], w: 0.7, h: 0.9, speed: 4.2, build: buildShark, melee: true, medium: 'water' },
  octopus: { name: '墨影章鱼', tags: ['章鱼类', '无脊椎类'], w: 0.8, h: 1.0, speed: 2.4, build: buildOctopus, ranged: true, medium: 'water', projColor: '#1a1030', animate: waveTentacles },
  fish:    { name: '小银鱼', tags: ['普通鱼类'], w: 0.3, h: 0.35, speed: 2.0, build: buildFish, passive: true, medium: 'water', dropItem: 'seafood' },
  crab:    { name: '岩壳蟹', tags: ['蟹类', '无脊椎类'], w: 1.1, h: 0.8, speed: 2.0, build: buildCrab, melee: true, medium: 'ground', tough: 0.7, mountable: true, animate: crabWave },
  // 天空
  angel: { name: '云端天使', tags: ['天使类', '正义类'], w: 0.6, h: 1.7, speed: 3.4, build: buildAngel, melee: true, medium: 'air', passive: true, dropItem: 'feather', animate: flapWings },
  bird:  { name: '啄风鸟', tags: ['鸟类'], w: 0.5, h: 0.7, speed: 4.0, build: buildBird, melee: true, medium: 'air', animate: flapWings },
  // 地狱
  demon:  { name: '恶魔', tags: ['邪恶类', '有脊椎类'], w: 0.8, h: 1.7, speed: 2.6, build: buildDemon, melee: true, medium: 'ground', maybeRanged: 0.3, projColor: '#ff7a1a' },
  dragon: { name: '恶龙', tags: ['邪恶类', '有脊椎类', '远程攻击类'], w: 1.6, h: 1.6, speed: 3.6, build: () => buildDragon(1.6), ranged: true, medium: 'air', projColor: '#ff7a1a', animate: flapWings },
  // 终极之地
  runeguard:  { name: '符文守卫', tags: ['邪恶类', '远程攻击类'], w: 0.8, h: 1.8, speed: 2.4, build: buildRuneGuard, ranged: true, medium: 'ground', projColor: '#7dfcff' },
  shadowking: { name: '暗影君王', tags: ['邪恶类', '有脊椎类', '远程攻击类'], w: 1.1, h: 2.4, speed: 2.8, build: buildShadowKing, ranged: true, melee: true, medium: 'ground', projColor: '#c084ff' },
  // 大 boss
  seaguardian: { name: '海底守卫者', tags: ['鲨鱼类', '章鱼类', '无脊椎类'], w: 2.4, h: 3.4, speed: 3.0, build: buildSeaGuardian, melee: true, radial: true, medium: 'water', projColor: '#f2e8d8', animate: waveTentacles },
  kunpeng:     { name: '鲲鹏', tags: ['鸟类', '鲨鱼类', '正义类'], w: 3.4, h: 2.6, speed: 5.0, build: buildKunpeng, ranged: true, melee: true, swoop: true, medium: 'air', projColor: '#7dd8ff', animate: kunpengWings },
  forbiddengolem: { name: '禁地守卫', tags: ['爆炸类', '远程攻击类', '邪恶类', '有脊椎类'], w: 1.8, h: 2.6, speed: 2.2, build: buildForbiddenGolem, ranged: true, radial: true, medium: 'ground', projColor: '#ff5030' },
  helldragon:  { name: '地狱魔龙', tags: ['邪恶类', '有脊椎类', '远程攻击类', '爆炸类'], w: 3.2, h: 3.2, speed: 4.0, build: () => buildDragon(3.2), ranged: true, melee: true, medium: 'air', projColor: '#ff3010', animate: flapWings },
  // —— v4 竹林 ——
  panda:        { name: '大熊猫', tags: ['熊猫类', '被动'], w: 0.9, h: 1.3, speed: 1.8, build: buildPanda, passive: true, melee: true, medium: 'ground', animate: pandaWalk },
  ancientpanda: { name: '远古熊猫', tags: ['熊猫类', '邪恶类', '有脊椎类'], w: 1.8, h: 2.4, speed: 3.2, build: () => buildPanda(2.0, true), melee: true, brawler: true, medium: 'ground', animate: pandaWalk },
  // —— v4 鬼城 ——
  tank:  { name: '变异坦克', tags: ['载具类', '爆炸类', '邪恶类', '远程攻击类'], w: 1.4, h: 1.2, speed: 1.1, build: () => buildTank(1.3), ranged: true, tough: 0.6, projRadius: 2.5, medium: 'ground', projColor: '#ff5030', animate: rollWheels },
  apc:   { name: '变异装甲车', tags: ['载具类', '邪恶类'], w: 1.2, h: 1.1, speed: 4.6, build: () => buildApc(1.2), melee: true, rammer: true, medium: 'ground', projColor: '#ff7040', animate: rollWheels },
  ghostdragon: { name: '邪恶巨龙', tags: ['邪恶类', '有脊椎类', '远程攻击类', '爆炸类'], w: 3.2, h: 3.2, speed: 4.2, build: () => buildRedDragon(3.4), ranged: true, pillar: true, medium: 'air', projColor: '#ff2020', animate: flapWings },
}

// 红色巨龙：复用龙模型 traverse 改成血红配色
function buildRedDragon(scale = 3.4) {
  const g = buildDragon(1)
  g.traverse(o => {
    if (o.isMesh && o.material.color) {
      const c = o.material.color.getHexString()
      if (c === '5f1a10') o.material.color.set('#a01010')
      else if (c === '7a2418') o.material.color.set('#c01818')
      else if (c === '8f3020') o.material.color.set('#d02020')
      else if (c === '4a1a1a') o.material.color.set('#7a1414')
      else if (c === 'ffb020') o.material.color.set('#ff2020')   // 眼睛金→红
    }
  })
  g.scale.setScalar(scale); return g
}
