// 世界生成加载条
export class LoadingUI {
  constructor() {
    const el = document.createElement('div')
    el.className = 'screen'
    el.innerHTML = `
      <div class="start-box">
        <div class="game-title">机甲时代</div>
        <div class="game-sub loading-msg">正在创造世界……</div>
        <div class="loading-bar-wrap"><div class="loading-fill"></div></div>
      </div>
    `
    document.body.appendChild(el)
    this.el = el
  }
  set(ratio, msg) {
    this.el.querySelector('.loading-fill').style.width = `${Math.round(ratio * 100)}%`
    if (msg) this.el.querySelector('.loading-msg').textContent = msg
  }
  done() { this.el.remove() }
}
