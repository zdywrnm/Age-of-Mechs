// 方块拼装的变形金刚模型：机器人 / 小车 / 矿石装甲 三形态
// 模型面朝 -Z，原点在脚底中心
import * as THREE from 'three'

function box(w, h, d, color, x = 0, y = 0, z = 0) {
  const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), new THREE.MeshLambertMaterial({ color }))
  m.position.set(x, y, z)
  return m
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
  const bodyW = cfg.wide ? 0.62 : 0.5
  // 腿（pivot 在髋部）
  const legL = new THREE.Group(); legL.position.set(-0.13, 0.5, 0)
  legL.add(box(0.2, 0.5, 0.24, cfg.leg, 0, -0.25, 0))
  const legR = new THREE.Group(); legR.position.set(0.13, 0.5, 0)
  legR.add(box(0.2, 0.5, 0.24, cfg.leg, 0, -0.25, 0))
  // 身体
  const body = box(bodyW, 0.6, 0.3, cfg.body, 0, 0.8, 0)
  const chest = box(bodyW * 0.7, 0.2, 0.06, '#dddddd', 0, 0.9, -0.17)
  // 手臂（pivot 在肩部）
  const armX = bodyW / 2 + 0.11
  const armL = new THREE.Group(); armL.position.set(-armX, 1.06, 0)
  armL.add(box(0.18, 0.55, 0.22, cfg.arm, 0, -0.24, 0))
  const armR = new THREE.Group(); armR.position.set(armX, 1.06, 0)
  armR.add(box(0.18, 0.55, 0.22, cfg.arm, 0, -0.24, 0))
  // 头
  const head = new THREE.Group(); head.position.set(0, 1.1, 0)
  head.add(box(0.42, 0.42, 0.42, cfg.head, 0, 0.21, 0))
  if (cfg.headType === 'antenna') {
    head.add(box(0.05, 0.22, 0.05, '#cccccc', -0.14, 0.5, 0))
    head.add(box(0.09, 0.09, 0.09, '#ff5555', -0.14, 0.63, 0))
  }
  // 眼睛（自发光感）
  const eyeMat = new THREE.MeshBasicMaterial({ color: '#7dfcff' })
  if (cfg.eyeStyle === 'visor') {
    const visor = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.08, 0.03), eyeMat)
    visor.position.set(0, 0.26, -0.215); head.add(visor)
  } else {
    for (const ex of [-0.1, 0.1]) {
      const eye = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.1, 0.03), eyeMat)
      eye.position.set(ex, 0.26, -0.215); head.add(eye)
    }
  }
  robot.add(legL, legR, body, chest, armL, armR, head)

  // 矿石装甲件（armor 形态时显示）
  const armorMat = '#8fb5b0'
  const armorParts = new THREE.Group()
  armorParts.add(box(bodyW + 0.14, 0.34, 0.4, armorMat, 0, 0.86, 0))          // 胸甲
  armorParts.add(box(0.3, 0.14, 0.34, armorMat, -armX - 0.02, 1.14, 0))       // 肩甲左
  armorParts.add(box(0.3, 0.14, 0.34, armorMat, armX + 0.02, 1.14, 0))        // 肩甲右
  armorParts.add(box(0.5, 0.12, 0.5, '#39c8c4', 0, 1.58, 0))                  // 头顶矿晶
  armorParts.visible = false
  robot.add(armorParts)

  // ============ 小车形态 ============
  const car = new THREE.Group()
  car.add(box(0.85, 0.34, 1.25, cfg.body, 0, 0.42, 0))                        // 底盘
  car.add(box(0.55, 0.28, 0.6, cfg.head, 0, 0.72, 0.1))                       // 驾驶舱
  const glass = new THREE.Mesh(new THREE.BoxGeometry(0.45, 0.18, 0.05), eyeMat)
  glass.position.set(0, 0.74, -0.22); car.add(glass)
  for (const [wx, wz] of [[-0.38, -0.4], [0.38, -0.4], [-0.38, 0.4], [0.38, 0.4]]) {
    car.add(box(0.16, 0.3, 0.3, '#222222', wx, 0.22, wz))
  }
  car.visible = false

  // ============ 潜水形态（潮涌齿轮） ============
  const dive = new THREE.Group()
  dive.add(box(0.7, 0.55, 1.3, '#2e7f96', 0, 0.5, 0))                          // 艇身
  dive.add(box(0.4, 0.3, 0.5, '#39c8c4', 0, 0.85, -0.15))                      // 观察舱
  const porthole = new THREE.Mesh(new THREE.BoxGeometry(0.3, 0.2, 0.05), eyeMat)
  porthole.position.set(0, 0.86, -0.42); dive.add(porthole)
  dive.add(box(0.12, 0.4, 0.3, '#245f72', 0, 0.6, 0.72))                       // 尾鳍
  dive.add(box(0.5, 0.1, 0.25, '#245f72', 0, 0.35, 0.55))                      // 螺旋桨座
  dive.visible = false

  // ============ 全能形态（神秘齿轮）：金色荣光 ============
  const superParts = new THREE.Group()
  superParts.add(box(bodyW + 0.18, 0.36, 0.44, '#f0b429', 0, 0.86, 0))         // 金胸甲
  superParts.add(box(0.32, 0.16, 0.36, '#f0b429', -armX - 0.02, 1.16, 0))
  superParts.add(box(0.32, 0.16, 0.36, '#f0b429', armX + 0.02, 1.16, 0))
  const halo = new THREE.Mesh(new THREE.BoxGeometry(0.6, 0.06, 0.6),
    new THREE.MeshBasicMaterial({ color: '#ffe89a', transparent: true, opacity: 0.85 }))
  halo.position.set(0, 1.75, 0); superParts.add(halo)
  superParts.visible = false
  robot.add(superParts)

  group.add(robot, car, dive)

  let form = 'robot'
  let swingT = 0
  const allMats = []
  group.traverse(o => { if (o.isMesh) allMats.push(o.material) })

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
        else if (m !== halo.material) { m.opacity = 1; m.transparent = false }
      }
    },
    swing() { swingT = 0.35 },
    // moving: 是否在移动；t: 累计时间
    animate(t, moving, dt) {
      swingT = Math.max(0, swingT - dt)
      if (form === 'car') return
      const amp = moving ? 0.55 : 0
      const w = Math.sin(t * 8) * amp
      legL.rotation.x = w
      legR.rotation.x = -w
      armL.rotation.x = -w * 0.8
      armR.rotation.x = swingT > 0 ? -2.2 * (swingT / 0.35) : w * 0.8
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
