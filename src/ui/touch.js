// 触屏操作层（手机/平板）：左侧虚拟摇杆移动，右侧拖动转视角，
// 右下按键组（跳/挖/放）+ 顶部功能键（T/B/E/V）+ 技能键（Q/C/X/Z）
// 全部通过 controls.keys 与 onKeyDown 汇入现有输入系统，键鼠逻辑零改动
export function isTouchDevice() {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0 ||
    new URLSearchParams(location.search).has('touch')   // 桌面调试用 ?touch=1 强开
}

export function setupTouch(controls) {
  if (!isTouchDevice()) return null
  controls.virtualLock = true          // 触屏无指针锁定，直接虚拟锁定

  const root = document.createElement('div')
  root.className = 'touch-ui'
  root.innerHTML = `
    <div class="tj-zone"><div class="tj-base"><div class="tj-knob"></div></div></div>
    <div class="tlook-zone"></div>
    <div class="tbtns">
      <button class="tbtn big" data-hold="Space">⬆<span>跳</span></button>
      <button class="tbtn big" data-hold="KeyF">⛏<span>挖/打</span></button>
      <button class="tbtn big" data-hold="KeyG">🔫<span>炮</span></button>
      <button class="tbtn big" data-tap="KeyR">✋<span>放/开</span></button>
    </div>
    <div class="tfuncs">
      <button class="tbtn sm" data-tap="KeyE">E</button>
      <button class="tbtn sm" data-tap="KeyT">变形</button>
      <button class="tbtn sm" data-tap="KeyB">背包</button>
      <button class="tbtn sm" data-tap="KeyV">视角</button>
      <button class="tbtn sm" data-tap="KeyH">回城</button>
    </div>
    <div class="tskills">
      <button class="tbtn sm" data-tap="KeyQ">Q</button>
      <button class="tbtn sm" data-tap="KeyC">C</button>
      <button class="tbtn sm" data-tap="KeyX">X</button>
      <button class="tbtn sm" data-tap="KeyZ">Z</button>
    </div>
  `
  document.body.appendChild(root)

  // —— 左摇杆：写入 controls.touchMove（player 侧读取）——
  const zone = root.querySelector('.tj-zone')
  const base = root.querySelector('.tj-base')
  const knob = root.querySelector('.tj-knob')
  let joyId = null, joyCenter = null
  const setKnob = (dx, dy) => { knob.style.transform = `translate(${dx}px, ${dy}px)` }
  zone.addEventListener('touchstart', e => {
    const t = e.changedTouches[0]
    joyId = t.identifier
    const r = base.getBoundingClientRect()
    joyCenter = { x: r.left + r.width / 2, y: r.top + r.height / 2 }
    e.preventDefault()
  }, { passive: false })
  const joyMove = e => {
    for (const t of e.changedTouches) {
      if (t.identifier !== joyId || !joyCenter) continue
      let dx = t.clientX - joyCenter.x, dy = t.clientY - joyCenter.y
      const d = Math.hypot(dx, dy), max = 44
      if (d > max) { dx = dx / d * max; dy = dy / d * max }
      setKnob(dx, dy)
      // 屏幕上=前进（-z 相对朝向），映射到 WASD 向量
      controls.touchMove = { x: dx / max, z: -dy / max }
      e.preventDefault()
    }
  }
  const joyEnd = e => {
    for (const t of e.changedTouches) {
      if (t.identifier !== joyId) continue
      joyId = null; joyCenter = null
      setKnob(0, 0)
      controls.touchMove = null
    }
  }
  zone.addEventListener('touchmove', joyMove, { passive: false })
  zone.addEventListener('touchend', joyEnd)
  zone.addEventListener('touchcancel', joyEnd)

  // —— 右侧拖动视角 ——
  const look = root.querySelector('.tlook-zone')
  const lookTouches = new Map()
  look.addEventListener('touchstart', e => {
    for (const t of e.changedTouches) lookTouches.set(t.identifier, { x: t.clientX, y: t.clientY })
    e.preventDefault()
  }, { passive: false })
  look.addEventListener('touchmove', e => {
    for (const t of e.changedTouches) {
      const prev = lookTouches.get(t.identifier)
      if (!prev) continue
      controls.yaw += (t.clientX - prev.x) * 0.0052
      controls.pitch = Math.max(-1.55, Math.min(1.45, controls.pitch - (t.clientY - prev.y) * 0.0052))
      lookTouches.set(t.identifier, { x: t.clientX, y: t.clientY })
    }
    e.preventDefault()
  }, { passive: false })
  const lookEnd = e => { for (const t of e.changedTouches) lookTouches.delete(t.identifier) }
  look.addEventListener('touchend', lookEnd)
  look.addEventListener('touchcancel', lookEnd)

  // —— 按键：hold=按住生效（跳/挖），tap=按一下（走 onKeyDown 语义）——
  for (const b of root.querySelectorAll('[data-hold]')) {
    const code = b.dataset.hold
    const on = e => { controls.keys[code] = true; if (code === 'KeyF' && controls.onKeyDown && controls.enabled) controls.onKeyDown(code); b.classList.add('on'); e.preventDefault() }
    const off = e => { controls.keys[code] = false; b.classList.remove('on'); e.preventDefault() }
    b.addEventListener('touchstart', on, { passive: false })
    b.addEventListener('touchend', off)
    b.addEventListener('touchcancel', off)
  }
  for (const b of root.querySelectorAll('[data-tap]')) {
    const code = b.dataset.tap
    b.addEventListener('touchstart', e => {
      controls.keys[code] = true
      if (controls.onKeyDown && controls.enabled) controls.onKeyDown(code)
      setTimeout(() => { controls.keys[code] = false }, 80)
      e.preventDefault()
    }, { passive: false })
  }

  return root
}
