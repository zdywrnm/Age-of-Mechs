// 作者对话框：逐条推进
export class Dialog {
  constructor(controls) {
    this.controls = controls
    const el = document.createElement('div')
    el.className = 'dialog'
    el.innerHTML = `
      <div class="who">👑 作者</div>
      <div class="text"></div>
      <div class="next">点击 / 按空格 继续 ▸</div>
    `
    document.body.appendChild(el)
    this.el = el
    this.lines = []
    this.i = 0
    this.onDone = null
    this.open = false

    const advance = () => { if (this.open) this.next() }
    el.addEventListener('mousedown', e => { e.stopPropagation(); advance() })
    addEventListener('mousedown', () => { if (this.open) advance() })
    addEventListener('keydown', e => {
      if (this.open && (e.code === 'Space' || e.code === 'KeyE' || e.code === 'Enter')) {
        e.preventDefault(); advance()
      }
    })
  }

  show(lines, onDone) {
    this.lines = lines
    this.i = 0
    this.onDone = onDone || null
    this.open = true
    this.controls.enabled = false
    this.el.style.display = 'block'
    this.render()
  }

  render() {
    this.el.querySelector('.text').textContent = this.lines[this.i]
    this.el.querySelector('.next').textContent =
      this.i < this.lines.length - 1 ? '点击 / 按空格 继续 ▸' : '点击 / 按空格 关闭 ✕'
  }

  next() {
    this.i++
    if (this.i >= this.lines.length) {
      this.open = false
      this.el.style.display = 'none'
      // 稍等一拍再恢复操作，防止关闭对话的那次点击触发挖掘
      setTimeout(() => { if (!this.open) this.controls.enabled = true }, 120)
      this.onDone && this.onDone()
    } else {
      this.render()
    }
  }
}
