// 开始界面（四档位选档）+ 出生自定义（左侧 3D 预览，右侧选项）
import * as THREE from 'three'
import { buildRobot, ROBOT_COLORS, DEFAULT_ROBOT } from '../player/robotModel.js'
import { listSlots, setCurrentSlot, deleteSlot, exportSlot, importToSlot, SLOT_COUNT } from '../game/save.js'

// onStart(config | null)：null 表示继续所选档位的存档
export function showStartScreen(onStart) {
  const screen = document.createElement('div')
  screen.className = 'screen'
  screen.innerHTML = `
    <div class="start-box">
      <div class="game-title">机甲时代</div>
      <div class="game-sub">第二章 · 完整世界 —— 原案：淇淇（世界的作者）</div>
      <div class="slots"></div>
      <div class="slot-actions">
        <button class="btn secondary import-btn">📂 导入存档文件</button>
        <input type="file" accept=".json,application/json" style="display:none" class="import-file">
      </div>
      <a class="docs-link" href="./docs.html">📜 开发历程 · 从一段口述设定到完整世界</a>
    </div>
  `
  document.body.appendChild(screen)

  const fmtTime = ts => {
    if (!ts) return ''
    const d = new Date(ts)
    return `${d.getMonth() + 1}/${d.getDate()} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`
  }

  const render = () => {
    const wrap = screen.querySelector('.slots')
    wrap.innerHTML = ''
    for (const s of listSlots()) {
      const card = document.createElement('div')
      card.className = 'slot-card' + (s.exists ? '' : ' empty')
      if (s.exists) {
        card.innerHTML = `
          <div class="slot-avatar" style="background:${s.bodyColor}">🤖</div>
          <div class="slot-info">
            <div class="slot-name">档位 ${s.slot}</div>
            <div class="slot-meta">⭐等级 ${s.level} · 💠${s.mystery}/8 · ${fmtTime(s.savedAt)}</div>
          </div>
          <div class="slot-btns">
            <button class="slot-btn play">▶ 进入</button>
            <button class="slot-btn">⬇ 导出</button>
            <button class="slot-btn danger">✕</button>
          </div>`
        const [play, exp, del] = card.querySelectorAll('.slot-btn')
        play.onclick = () => { setCurrentSlot(s.slot); screen.remove(); onStart(null) }
        exp.onclick = () => exportSlot(s.slot)
        del.onclick = () => {
          if (confirm(`确定删除档位 ${s.slot} 吗？这个档位的进度会全部消失！`)) { deleteSlot(s.slot); render() }
        }
      } else {
        card.innerHTML = `
          <div class="slot-avatar dim">＋</div>
          <div class="slot-info">
            <div class="slot-name">档位 ${s.slot}</div>
            <div class="slot-meta">空档位</div>
          </div>
          <div class="slot-btns"><button class="slot-btn play">✨ 新的冒险</button></div>`
        card.querySelector('.play').onclick = () => {
          setCurrentSlot(s.slot); screen.remove(); showCustomize(onStart)
        }
      }
      wrap.appendChild(card)
    }
  }
  render()

  // 导入：选文件 → 写入第一个空档位（都满则提示先删一个）
  const fileInput = screen.querySelector('.import-file')
  screen.querySelector('.import-btn').onclick = () => fileInput.click()
  fileInput.onchange = async () => {
    const f = fileInput.files[0]
    if (!f) return
    const empty = listSlots().find(s => !s.exists)
    if (!empty) { alert(`四个档位都满了～先删掉一个再导入吧`); fileInput.value = ''; return }
    try {
      importToSlot(empty.slot, await f.text())
      render()
      alert(`导入成功！存到了档位 ${empty.slot}`)
    } catch (e) {
      alert('导入失败：' + e.message)
    }
    fileInput.value = ''
  }
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
  // 按窗口尺寸自适应（手机竖屏变矮、横屏更矮）
  const pw = Math.min(334, Math.floor(innerWidth * 0.86))
  const ph = innerHeight < 560 ? Math.floor(innerHeight * 0.42) : (innerWidth < 860 ? 250 : 414)
  renderer.setSize(pw, ph)
  pane.style.width = pw + 'px'
  pane.style.height = ph + 'px'
  pane.appendChild(renderer.domElement)
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x16283e)
  scene.add(new THREE.HemisphereLight(0xdfefff, 0x556677, 1.2))
  const dl = new THREE.DirectionalLight(0xffffff, 1.0)
  dl.position.set(2, 4, 3); scene.add(dl)
  const cam = new THREE.PerspectiveCamera(45, pw / ph, 0.1, 20)
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
