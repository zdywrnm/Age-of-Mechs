// 变形金刚模型 v3：机器人形态用 Blender 制作的 GLB（倒角硬表面机甲），
// 其余形态（小车/潜水艇/装甲/全能叠加件）沿用盒子拼装
// GLB 未加载完成前回退到盒子机器人 —— 模型面朝 -Z，原点在脚底中心
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

// —— GLB 模板（模块级加载一次，每个机器人实例克隆一份）——
// 命名约定：节点 Torso/Head/Antenna/EyesRound/EyesVisor/ArmL/ArmR/LegL/LegR（四肢原点在关节）
//          材质 MatHead/MatBody/MatArm/MatLeg/MatTrim/MatEye/MatCore
let mechTemplate = null
const mechReady = new GLTFLoader()
  .loadAsync(import.meta.env.BASE_URL + 'models/mech.glb')
  .then(g => { mechTemplate = g.scene })
  .catch(e => { console.warn('机甲 GLB 加载失败，使用盒子模型兜底', e) })

// 克隆模板并按配置换色/换样式，返回 { grp, nodes, mats }
function cloneMech(cfg) {
  const grp = mechTemplate.clone(true)
  // 材质按名克隆（同名共享一个克隆，避免实例间串色）
  const matMap = new Map()
  const colorFor = {
    MatHead: cfg.head, MatBody: cfg.body, MatArm: cfg.arm, MatLeg: cfg.leg,
  }
  grp.traverse(o => {
    if (!o.isMesh) return
    const list = Array.isArray(o.material) ? o.material : [o.material]
    const cloned = list.map(m => {
      if (!matMap.has(m.name)) {
        const c = m.clone()
        if (colorFor[m.name]) c.color.set(colorFor[m.name])
        matMap.set(m.name, c)
      }
      return matMap.get(m.name)
    })
    o.material = Array.isArray(o.material) ? cloned : cloned[0]
    o.castShadow = false
  })
  const nodes = {}
  for (const n of ['Torso', 'Head', 'Antenna', 'EyesRound', 'EyesVisor', 'ArmL', 'ArmR', 'LegL', 'LegR']) {
    nodes[n] = grp.getObjectByName(n)
  }
  // 样式开关
  if (nodes.Antenna) nodes.Antenna.visible = cfg.headType === 'antenna'
  if (nodes.EyesRound) nodes.EyesRound.visible = cfg.eyeStyle !== 'visor'
  if (nodes.EyesVisor) nodes.EyesVisor.visible = cfg.eyeStyle === 'visor'
  if (cfg.wide && nodes.Torso) nodes.Torso.scale.x = 1.14
  return { grp, nodes, mats: matMap }
}

function box(w, h, d, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }))
  m.position.set(x, y, z)
  return m
}
function glow(w, h, d, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshBasicMaterial({ color }))
  m.position.set(x, y, z)
  return m
}
function darken(hex, f = 0.6) {
  const c = new THREE.Color(hex)
  return '#' + c.multiplyScalar(f).getHexString()
}

export const ROBOT_COLORS = ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71', '#9b59b6', '#e67e22', '#ecf0f1', '#34495e']

export const DEFAULT_ROBOT = {
  head: '#3498db', body: '#e74c3c', arm: '#f1c40f', leg: '#34495e',
  headType: 'antenna',   // 'cube' | 'antenna'
  eyeStyle: 'round',     // 'round' | 'visor'
  wide: false,           // 宽肩
}

export function buildRobot(cfg = DEFAULT_ROBOT) {
  const group = new THREE.Group()

  // ============ 机器人形态 ============
  const robot = new THREE.Group()
  const bodyW = cfg.wide ? 0.64 : 0.52
  const legDark = darken(cfg.leg, 0.55)
  const armDark = darken(cfg.arm, 0.6)
  const bodyDark = darken(cfg.body, 0.62)

  // 腿（pivot 在髋部）：大腿 + 小腿(略窄) + 脚
  const mkLeg = side => {
    const g = new THREE.Group(); g.position.set(side * 0.14, 0.56, 0)
    g.add(box(0.2, 0.3, 0.24, cfg.leg, 0, -0.14, 0))            // 大腿
    g.add(box(0.16, 0.26, 0.2, darken(cfg.leg, 0.8), 0, -0.4, 0)) // 小腿
    g.add(box(0.2, 0.09, 0.3, legDark, 0, -0.52, -0.04))        // 脚
    return g
  }
  let legL = mkLeg(-1), legR = mkLeg(1)
  // 骨盆
  const pelvis = box(0.4, 0.14, 0.28, legDark, 0, 0.6, 0)
  // 身体 + 腹带 + 背包
  const body = box(bodyW, 0.56, 0.32, cfg.body, 0, 0.94, 0)
  const belly = box(bodyW + 0.02, 0.1, 0.33, bodyDark, 0, 0.72, 0)
  const backpack = box(bodyW * 0.7, 0.36, 0.12, bodyDark, 0, 0.98, 0.2)
  const pipeL = box(0.06, 0.24, 0.06, '#9aa4ad', -bodyW * 0.24, 1.24, 0.22)
  const pipeR = box(0.06, 0.24, 0.06, '#9aa4ad', bodyW * 0.24, 1.24, 0.22)
  // 胸口发光核心
  const corePlate = box(0.26, 0.26, 0.05, '#d8dde2', 0, 0.98, -0.17)
  const core = glow(0.14, 0.14, 0.04, '#7dfcff', 0, 0.98, -0.195)
  // 手臂（pivot 在肩部）：肩甲 + 上臂 + 前臂 + 手
  const armX = bodyW / 2 + 0.12
  const mkArm = side => {
    const g = new THREE.Group(); g.position.set(side * armX, 1.16, 0)
    g.add(box(0.24, 0.14, 0.28, legDark, 0, 0.02, 0))           // 肩甲
    g.add(box(0.17, 0.26, 0.2, cfg.arm, 0, -0.16, 0))           // 上臂
    g.add(box(0.15, 0.24, 0.18, darken(cfg.arm, 0.82), 0, -0.4, 0)) // 前臂
    g.add(box(0.16, 0.1, 0.16, armDark, 0, -0.56, 0))           // 手
    return g
  }
  let armL = mkArm(-1), armR = mkArm(1)
  // 头：主体 + 面甲 + 下巴 + 侧耳 + 天线
  const head = new THREE.Group(); head.position.set(0, 1.24, 0)
  head.add(box(0.42, 0.38, 0.4, cfg.head, 0, 0.2, 0))
  head.add(box(0.36, 0.12, 0.03, darken(cfg.head, 0.75), 0, 0.1, -0.205)) // 面甲下缘
  head.add(box(0.05, 0.14, 0.14, darken(cfg.head, 0.7), -0.235, 0.2, 0))  // 左耳件
  head.add(box(0.05, 0.14, 0.14, darken(cfg.head, 0.7), 0.235, 0.2, 0))   // 右耳件
  let lamp = null
  if (cfg.headType === 'antenna') {
    head.add(box(0.05, 0.2, 0.05, '#cccccc', -0.14, 0.48, 0))
    lamp = glow(0.09, 0.09, 0.09, '#ff5555', -0.14, 0.6, 0)
    head.add(lamp)
  }
  const eyeMat = new THREE.MeshBasicMaterial({ color: '#7dfcff' })
  if (cfg.eyeStyle === 'visor') {
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.32, 0.09, 0.03), eyeMat)
    visor.position.set(0, 0.24, -0.205); head.add(visor)
  } else {
    for (const ex of [-0.1, 0.1]) {
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.09, 0.11, 0.03), eyeMat)
      eye.position.set(ex, 0.24, -0.205); head.add(eye)
    }
  }
  // 盒子拼装机器人放进 fallback 组：GLB 加载完成后整组替换
  const fallback = new THREE.Group()
  fallback.add(legL, legR, pelvis, body, belly, backpack, pipeL, pipeR, corePlate, core, armL, armR, head)
  robot.add(fallback)

  // 矿石装甲件（armor 形态叠加显示）
  const armorParts = new THREE.Group()
  const armorMat = '#8fb5b0'
  armorParts.add(box(bodyW + 0.16, 0.4, 0.42, armorMat, 0, 0.96, 0))
  armorParts.add(box(0.32, 0.16, 0.36, armorMat, -armX - 0.03, 1.22, 0))
  armorParts.add(box(0.32, 0.16, 0.36, armorMat, armX + 0.03, 1.22, 0))
  // 肩上晶刺（旋转 45° 的细高盒）
  for (const sx of [-1, 1]) {
    const spike = box(0.1, 0.3, 0.1, '#39c8c4', sx * (armX + 0.03), 1.42, 0)
    spike.rotation.z = sx * 0.3
    armorParts.add(spike)
    const spike2 = box(0.08, 0.22, 0.08, '#67dcd8', sx * (armX - 0.08), 1.4, 0.06)
    spike2.rotation.z = sx * 0.55
    armorParts.add(spike2)
  }
  armorParts.add(box(0.46, 0.12, 0.46, '#39c8c4', 0, 1.66, 0))
  armorParts.visible = false
  robot.add(armorParts)

  // 全能形态（神秘齿轮）：金甲 + 光环 + 双浮环
  const superParts = new THREE.Group()
  superParts.add(box(bodyW + 0.18, 0.4, 0.46, '#f0b429', 0, 0.96, 0))
  superParts.add(box(0.34, 0.18, 0.38, '#f0b429', -armX - 0.03, 1.24, 0))
  superParts.add(box(0.34, 0.18, 0.38, '#f0b429', armX + 0.03, 1.24, 0))
  superParts.add(glow(0.2, 0.2, 0.05, '#fff3c4', 0, 0.98, -0.22))
  const halo = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.05, 0.6),
    new THREE.MeshBasicMaterial({ color: '#ffe89a', transparent: true, opacity: 0.85 }))
  halo.position.set(0, 1.85, 0); superParts.add(halo)
  const ring1 = new THREE.Mesh(new THREE.BoxGeometry(1.0, 0.05, 0.08),
    new THREE.MeshBasicMaterial({ color: '#ffd75e', transparent: true, opacity: 0.7 }))
  ring1.position.set(0, 0.9, 0)
  const ring2 = ring1.clone(); ring2.rotation.y = Math.PI / 2; ring2.position.y = 1.15
  superParts.add(ring1, ring2)
  superParts.visible = false
  robot.add(superParts)

  // ============ 小车形态 ============
  const car = new THREE.Group()
  car.add(box(0.9, 0.3, 1.3, cfg.body, 0, 0.4, 0))                          // 底盘
  car.add(box(0.86, 0.1, 1.34, bodyDark, 0, 0.26, 0))                       // 底裙
  car.add(box(0.56, 0.3, 0.62, cfg.head, 0, 0.72, 0.08))                    // 驾驶舱
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.46, 0.2, 0.05), eyeMat)
  glass.position.set(0, 0.74, -0.24); car.add(glass)
  car.add(glow(0.12, 0.08, 0.04, '#fff8c8', -0.3, 0.42, -0.66))             // 车灯
  car.add(glow(0.12, 0.08, 0.04, '#fff8c8', 0.3, 0.42, -0.66))
  car.add(glow(0.1, 0.07, 0.04, '#ff5040', -0.3, 0.44, 0.66))               // 尾灯
  car.add(glow(0.1, 0.07, 0.04, '#ff5040', 0.3, 0.44, 0.66))
  car.add(box(0.05, 0.18, 0.05, '#cccccc', 0.3, 0.95, 0.3))                 // 车顶天线
  const wheels = []
  for (const [wx, wz] of [[-0.42, -0.42], [0.42, -0.42], [-0.42, 0.42], [0.42, 0.42]]) {
    car.add(box(0.14, 0.12, 0.5, bodyDark, wx, 0.5, wz))                    // 轮拱
    const wheel = box(0.14, 0.3, 0.3, '#1c1c1c', wx, 0.24, wz)
    wheels.push(wheel)
    car.add(wheel)
  }
  car.visible = false

  // ============ 潜水形态（潮涌齿轮） ============
  const dive = new THREE.Group()
  dive.add(box(0.72, 0.55, 1.35, '#2e7f96', 0, 0.52, 0))                    // 艇身
  dive.add(box(0.66, 0.12, 1.2, '#245f72', 0, 0.24, 0))                     // 底
  dive.add(box(0.42, 0.3, 0.52, '#39c8c4', 0, 0.88, -0.16))                 // 观察舱
  const porthole = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.05), eyeMat)
  porthole.position.set(0, 0.89, -0.44); dive.add(porthole)
  dive.add(box(0.12, 0.42, 0.32, '#245f72', 0, 0.66, 0.72))                 // 尾鳍
  dive.add(box(0.5, 0.1, 0.28, '#245f72', -0.42, 0.5, 0.2))                 // 侧鳍
  dive.add(box(0.5, 0.1, 0.28, '#245f72', 0.42, 0.5, 0.2))
  const prop = new THREE.Group(); prop.position.set(0, 0.5, 0.78)
  prop.add(box(0.06, 0.4, 0.06, '#c8d2d8', 0, 0, 0))
  prop.add(box(0.4, 0.06, 0.06, '#c8d2d8', 0, 0, 0))
  dive.add(prop)
  dive.visible = false

  group.add(robot, car, dive)

  let form = 'robot'
  let swingT = 0
  const allMats = []
  group.traverse(o => { if (o.isMesh) allMats.push(o.material) })

  // —— GLB 升级：模板就绪后把盒子机器人换成 Blender 机甲 ——
  let mechMats = null
  let glbDone = false
  function upgradeToGLB() {
    if (!mechTemplate || glbDone) return
    glbDone = true
    const { grp, nodes, mats } = cloneMech(cfg)
    robot.remove(fallback)
    fallback.traverse(o => { if (o.isMesh) o.geometry.dispose() })
    robot.add(grp)
    // 动画引用重绑到 GLB 关节节点
    if (nodes.LegL) legL = nodes.LegL
    if (nodes.LegR) legR = nodes.LegR
    if (nodes.ArmL) armL = nodes.ArmL
    if (nodes.ArmR) armR = nodes.ArmR
    lamp = null
    mechMats = mats
    for (const m of mats.values()) allMats.push(m)
  }
  upgradeToGLB()
  mechReady.then(() => upgradeToGLB())

  return {
    group,
    setForm(f) {
      form = f
      robot.visible = f !== 'car' && f !== 'dive'
      car.visible = f === 'car'
      dive.visible = f === 'dive'
      armorParts.visible = f === 'armor'
      superParts.visible = f === 'super'
      const s = f === 'armor' ? 1.12 : (f === 'super' ? 1.18 : 1)
      robot.scale.set(s, s, s)
    },
    // 隐身（黑暗齿轮）：整体半透明
    setGhost(on) {
      for (const m of allMats) {
        if (on) { m.transparent = true; m.opacity = 0.35 }
        else if (m !== halo.material && m !== ring1.material && m !== ring2.material) { m.opacity = 1; m.transparent = false }
      }
    },
    swing() { swingT = 0.35 },
    // moving: 是否在移动；t: 累计时间
    animate(t, moving, dt) {
      swingT = Math.max(0, swingT - dt)
      // 天线灯闪烁（盒子版）/ 胸口核心脉冲（GLB 版）
      if (lamp) lamp.material.color.setHex(Math.sin(t * 2.4) > 0 ? 0xff5555 : 0x7a1f1f)
      if (mechMats) {
        const mc = mechMats.get('MatCore')
        if (mc && mc.emissiveIntensity !== undefined) mc.emissiveIntensity = 2.2 + Math.sin(t * 2.4) * 1.2
      }
      if (form === 'car') {
        const spin = moving ? t * 10 : 0
        for (const w of wheels) w.rotation.x = spin
        return
      }
      if (form === 'dive') {
        prop.rotation.z = t * 12
        return
      }
      const amp = moving ? 0.6 : 0
      const w = Math.sin(t * 8) * amp
      legL.rotation.x = w
      legR.rotation.x = -w
      armL.rotation.x = -w * 0.8
      armR.rotation.x = swingT > 0 ? -2.2 * (swingT / 0.35) : w * 0.8
      // 走路上下颠 + 待机呼吸
      robot.position.y = moving ? Math.abs(Math.sin(t * 8)) * 0.05 : Math.sin(t * 1.6) * 0.015
      // 全能形态浮环旋转
      if (superParts.visible) {
        halo.rotation.y = t * 1.2
        ring1.rotation.y = t * 2
        ring2.rotation.y = Math.PI / 2 + t * 2
      }
    },
    // 变形动画：短暂压扁弹起
    playTransform() {
      group.scale.set(1.25, 0.6, 1.25)
    },
    updateTransformAnim(dt) {
      group.scale.lerp(new THREE.Vector3(1, 1, 1), Math.min(1, dt * 10))
    },
  }
}
