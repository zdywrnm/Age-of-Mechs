// 开始界面 + 出生自定义（左侧 3D 预览，右侧选项）
import * as THREE from 'three'
import { buildRobot, ROBOT_COLORS, DEFAULT_ROBOT } from '../player/robotModel.js'
import { hasSave, clearSave } from '../game/save.js'

// onStart(config | null)：null 表示继续已有存档
export function showStartScreen(onStart) {
  const screen = document.createElement('div')
  screen.className = 'screen'
  const saved = hasSave()
  screen.innerHTML = `
    <div class="start-box">
      <div class="game-title">机甲时代</div>
      <div class="game-sub">第二章 · 完整世界 —— 原案：淇淇（世界的作者）</div>
      <div class="btns"></div>
    </div>
  `
  const btns = screen.querySelector('.btns')
  if (saved) {
    const cont = document.createElement('button')
    cont.className = 'btn'
    cont.textContent = '▶ 继续游戏'
    cont.onclick = () => { screen.remove(); onStart(null) }
    btns.appendChild(cont)
    const restart = document.createElement('button')
    restart.className = 'btn secondary'
    restart.textContent = '🔄 重新开始'
    restart.onclick = () => {
      if (confirm('确定要重新开始吗？现在的进度会全部消失哦！')) {
        clearSave()
        screen.remove()
        showCustomize(onStart)
      }
    }
    btns.appendChild(restart)
  } else {
    const start = document.createElement('button')
    start.className = 'btn'
    start.textContent = '✨ 创造我的变形金刚'
    start.onclick = () => { screen.remove(); showCustomize(onStart) }
    btns.appendChild(start)
  }
  document.body.appendChild(screen)
}

function showCustomize(onStart) {
  const cfg = { ...DEFAULT_ROBOT }
  const screen = document.createElement('div')
  screen.className = 'screen'
  screen.innerHTML = `
    <div class="customize">
      <div class="preview-pane"></div>
      <div class="custom-pane">
        <h1>创造你的变形金刚！</h1>
        <div class="opts"></div>
        <button class="btn go">🚀 开始冒险！</button>
      </div>
    </div>
  `
  document.body.appendChild(screen)

  // —— 3D 预览 ——
  const pane = screen.querySelector('.preview-pane')
  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(334, 414)
  pane.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x16283e)
  scene.add(new THREE.HemisphereLight(0xdfefff, 0x556677, 1.2))
  const dl = new THREE.DirectionalLight(0xffffff, 1.0)
  dl.position.set(2, 4, 3); scene.add(dl)
  const cam = new THREE.PerspectiveCamera(45, 334 / 414, 0.1, 20)
  cam.position.set(0, 1.35, 3.4)
  cam.lookAt(0, 0.95, 0)
  let robot = null
  const rebuild = () => {
    if (robot) scene.remove(robot.group)
    robot = buildRobot(cfg)
    scene.add(robot.group)
  }
  rebuild()
  let alive = true
  ;(function spin(t) {
    if (!alive) return
    requestAnimationFrame(spin)
    if (robot) {
      robot.group.rotation.y = t / 1200
      robot.animate(t / 280, true, 0.016)
    }
    renderer.render(scene, cam)
  })(0)

  // —— 选项 ——
  const opts = screen.querySelector('.opts')
  const colorGroup = (label, key) => {
    const g = document.createElement('div')
    g.className = 'opt-group'
    g.innerHTML = `<div class="opt-label">${label}</div><div class="swatches"></div>`
    const wrap = g.querySelector('.swatches')
    for (const c of ROBOT_COLORS) {
      const s = document.createElement('div')
      s.className = 'swatch' + (cfg[key] === c ? ' sel' : '')
      s.style.background = c
      s.onclick = () => {
        cfg[key] = c
        wrap.querySelectorAll('.swatch').forEach(x => x.classList.remove('sel'))
        s.classList.add('sel')
        rebuild()
      }
      wrap.appendChild(s)
    }
    opts.appendChild(g)
  }
  const choiceGroup = (label, key, choices) => {
    const g = document.createElement('div')
    g.className = 'opt-group'
    g.innerHTML = `<div class="opt-label">${label}</div><div class="choice-row"></div>`
    const wrap = g.querySelector('.choice-row')
    for (const [val, name] of choices) {
      const b = document.createElement('div')
      b.className = 'choice' + (cfg[key] === val ? ' sel' : '')
      b.textContent = name
      b.onclick = () => {
        cfg[key] = val
        wrap.querySelectorAll('.choice').forEach(x => x.classList.remove('sel'))
        b.classList.add('sel')
        rebuild()
      }
      wrap.appendChild(b)
    }
    opts.appendChild(g)
  }

  colorGroup('头的颜色', 'head')
  colorGroup('身体颜色', 'body')
  colorGroup('手臂颜色', 'arm')
  colorGroup('腿的颜色', 'leg')
  choiceGroup('头型', 'headType', [['antenna', '📡 带天线'], ['cube', '⬜ 方头']])
  choiceGroup('眼睛', 'eyeStyle', [['round', '👀 圆眼'], ['visor', '🕶 一字眼罩']])
  choiceGroup('肩膀', 'wide', [[false, '普通肩'], [true, '💪 宽肩']])

  screen.querySelector('.go').onclick = () => {
    alive = false
    renderer.dispose()
    screen.remove()
    onStart(cfg)
  }
}
