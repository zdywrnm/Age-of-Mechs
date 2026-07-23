// 音频引擎：WebAudio 全程序化合成——零外部音频素材
// BGM：分维度曲风的生成式芯片音乐循环；SFX：二十余种一次性合成音效
// 静音状态存 localStorage（全局，不随存档档位）

class AudioEngine {
  constructor() {
    this.ctx = null
    this.enabled = localStorage.getItem('aom_audio') !== 'off'
    this.bgmTimer = null
    this.bgmMood = null
    this.barPos = 0
    this.nextNoteTime = 0
  }

  ensure() {
    if (this.ctx) return true
    try {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)()
      this.master = this.ctx.createGain()
      this.master.gain.value = this.enabled ? 1 : 0
      this.master.connect(this.ctx.destination)
      this.sfxGain = this.ctx.createGain()
      this.sfxGain.gain.value = 0.5
      this.sfxGain.connect(this.master)
      this.bgmGain = this.ctx.createGain()
      this.bgmGain.gain.value = 0.16
      this.bgmGain.connect(this.master)
      return true
    } catch { return false }
  }

  // 首次用户手势后调用（浏览器自动播放策略）
  resume() {
    if (!this.ensure()) return
    if (this.ctx.state === 'suspended') this.ctx.resume()
  }

  toggle() {
    this.enabled = !this.enabled
    localStorage.setItem('aom_audio', this.enabled ? 'on' : 'off')
    if (this.ctx) this.master.gain.value = this.enabled ? 1 : 0
    return this.enabled
  }

  // ———— 合成原语 ————
  tone({ freq = 440, freq2 = null, dur = 0.15, type = 'square', vol = 0.3, at = 0, dest = null }) {
    if (!this.ctx || !this.enabled) return
    const t0 = this.ctx.currentTime + at
    const o = this.ctx.createOscillator()
    o.type = type
    o.frequency.setValueAtTime(freq, t0)
    if (freq2 !== null) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq2), t0 + dur)
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(vol, t0)
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur)
    o.connect(g); g.connect(dest || this.sfxGain)
    o.start(t0); o.stop(t0 + dur + 0.02)
  }

  noise({ dur = 0.12, vol = 0.3, freq = 1200, q = 1, at = 0, slide = null }) {
    if (!this.ctx || !this.enabled) return
    const t0 = this.ctx.currentTime + at
    const len = Math.ceil(this.ctx.sampleRate * dur)
    const buf = this.ctx.createBuffer(1, len, this.ctx.sampleRate)
    const d = buf.getChannelData(0)
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1
    const src = this.ctx.createBufferSource()
    src.buffer = buf
    const f = this.ctx.createBiquadFilter()
    f.type = 'bandpass'
    f.frequency.setValueAtTime(freq, t0)
    if (slide) f.frequency.exponentialRampToValueAtTime(slide, t0 + dur)
    f.Q.value = q
    const g = this.ctx.createGain()
    g.gain.setValueAtTime(vol, t0)
    g.gain.exponentialRampToValueAtTime(0.001, t0 + dur)
    src.connect(f); f.connect(g); g.connect(this.sfxGain)
    src.start(t0); src.stop(t0 + dur + 0.02)
  }

  // ———— 音效表 ————
  sfx(name) {
    if (!this.ctx || !this.enabled) return
    const N = (o) => this.noise(o)
    const T = (o) => this.tone(o)
    switch (name) {
      case 'dig':    N({ dur: 0.06, vol: 0.18, freq: 900, slide: 500 }); break
      case 'break':  N({ dur: 0.16, vol: 0.32, freq: 700, slide: 200 }); T({ freq: 180, freq2: 60, dur: 0.12, type: 'triangle', vol: 0.25 }); break
      case 'place':  T({ freq: 220, freq2: 160, dur: 0.08, type: 'square', vol: 0.2 }); break
      case 'jump':   T({ freq: 260, freq2: 480, dur: 0.12, type: 'square', vol: 0.15 }); break
      case 'splash': N({ dur: 0.35, vol: 0.3, freq: 900, slide: 300, q: 0.6 }); break
      case 'swing':  N({ dur: 0.09, vol: 0.15, freq: 2200, slide: 900 }); break
      case 'hit':    N({ dur: 0.08, vol: 0.3, freq: 500 }); T({ freq: 140, freq2: 90, dur: 0.09, type: 'sawtooth', vol: 0.2 }); break
      case 'hurt':   T({ freq: 320, freq2: 120, dur: 0.22, type: 'sawtooth', vol: 0.3 }); break
      case 'pickup': T({ freq: 660, dur: 0.07, type: 'square', vol: 0.18 }); T({ freq: 990, dur: 0.09, at: 0.06, type: 'square', vol: 0.18 }); break
      case 'level':  [523, 659, 784, 1047].forEach((f, i) => T({ freq: f, dur: 0.12, at: i * 0.09, type: 'square', vol: 0.22 })); break
      case 'chest':  [392, 523, 659, 784, 1047].forEach((f, i) => T({ freq: f, dur: 0.18, at: i * 0.11, type: 'triangle', vol: 0.26 })); break
      case 'fanfare': [523, 523, 523, 659, 784, 1047].forEach((f, i) => T({ freq: f, dur: 0.16, at: i * 0.13, type: 'square', vol: 0.22 })); break
      case 'quake':  N({ dur: 0.5, vol: 0.4, freq: 150, slide: 60, q: 0.5 }); T({ freq: 60, freq2: 35, dur: 0.5, type: 'sawtooth', vol: 0.35 }); break
      case 'fire':   N({ dur: 0.45, vol: 0.3, freq: 600, slide: 1800, q: 0.4 }); break
      case 'flash':  T({ freq: 1400, freq2: 2800, dur: 0.3, type: 'sine', vol: 0.25 }); T({ freq: 2100, dur: 0.35, at: 0.05, type: 'sine', vol: 0.15 }); break
      case 'stealth': T({ freq: 800, freq2: 200, dur: 0.4, type: 'sine', vol: 0.2 }); break
      case 'portal': T({ freq: 200, freq2: 900, dur: 0.5, type: 'sine', vol: 0.25 }); T({ freq: 300, freq2: 1200, dur: 0.5, at: 0.08, type: 'sine', vol: 0.18 }); break
      case 'transform': T({ freq: 300, freq2: 600, dur: 0.1, type: 'square', vol: 0.2 }); T({ freq: 600, freq2: 400, dur: 0.12, at: 0.09, type: 'square', vol: 0.2 }); N({ dur: 0.1, at: 0.05, vol: 0.12, freq: 1500 }); break
      case 'boat':   N({ dur: 0.2, vol: 0.2, freq: 500, slide: 250, q: 0.7 }); break
      case 'shoot':  T({ freq: 880, freq2: 300, dur: 0.12, type: 'square', vol: 0.16 }); N({ dur: 0.06, vol: 0.1, freq: 2000, slide: 800 }); break
      case 'click':  T({ freq: 900, dur: 0.04, type: 'square', vol: 0.12 }); break
      case 'death':  [392, 330, 262, 196].forEach((f, i) => T({ freq: f, dur: 0.25, at: i * 0.2, type: 'triangle', vol: 0.28 })); break
      case 'ending': [523, 659, 784, 880, 1047, 1319, 1568].forEach((f, i) => T({ freq: f, dur: 0.3, at: i * 0.16, type: 'triangle', vol: 0.26 })); break
    }
  }

  // ———— 生成式 BGM ————
  // 每种曲风：音阶、低音进行、速度、音色、密度
  static MOODS = {
    main:  { scale: [262, 294, 330, 392, 440, 523, 587, 659], bass: [131, 110, 87, 98], bpm: 96, lead: 'triangle', density: 0.72, bassType: 'square' },
    night: { scale: [262, 294, 330, 392, 440, 523], bass: [131, 98, 110, 87], bpm: 72, lead: 'sine', density: 0.45, bassType: 'sine' },
    hell:  { scale: [220, 233, 262, 311, 349, 415], bass: [55, 58, 65, 62], bpm: 80, lead: 'sawtooth', density: 0.55, bassType: 'sawtooth' },
    void:  { scale: [330, 392, 494, 587, 659, 784], bass: [82, 73, 65, 98], bpm: 56, lead: 'sine', density: 0.3, bassType: 'sine' },
    arena: { scale: [294, 330, 349, 440, 494, 587], bass: [73, 82, 87, 65], bpm: 118, lead: 'square', density: 0.8, bassType: 'square' },
  }

  setBgm(mood) {
    if (mood === this.bgmMood) return
    this.bgmMood = mood
    this.barPos = 0
    if (this.bgmTimer) { clearInterval(this.bgmTimer); this.bgmTimer = null }
    if (!mood || !this.ctx) return
    this.nextNoteTime = this.ctx.currentTime + 0.1
    this.bgmTimer = setInterval(() => this.scheduleBgm(), 180)
  }

  scheduleBgm() {
    if (!this.ctx || !this.enabled || document.hidden) return
    const M = AudioEngine.MOODS[this.bgmMood]
    if (!M) return
    const step = 60 / M.bpm / 2   // 八分音符
    while (this.nextNoteTime < this.ctx.currentTime + 0.6) {
      const pos = this.barPos
      const at = this.nextNoteTime - this.ctx.currentTime
      // 低音：每小节（8 步）换一个根音，1、5 步各一响
      const bar = Math.floor(pos / 8) % M.bass.length
      if (pos % 8 === 0 || pos % 8 === 4) {
        this.tone({ freq: M.bass[bar], dur: step * 1.8, type: M.bassType, vol: 0.16, at, dest: this.bgmGain })
      }
      // 旋律：受密度控制的音阶随机游走，偏向级进
      if (Math.random() < M.density) {
        this._mi = (this._mi ?? 2) + (Math.random() < 0.6 ? (Math.random() < 0.5 ? 1 : -1) : (Math.random() < 0.5 ? 2 : -2))
        this._mi = Math.max(0, Math.min(M.scale.length - 1, this._mi))
        this.tone({ freq: M.scale[this._mi], dur: step * (Math.random() < 0.25 ? 1.9 : 0.95), type: M.lead, vol: 0.12, at, dest: this.bgmGain })
      }
      this.nextNoteTime += step
      this.barPos++
    }
  }
}

export const audio = new AudioEngine()
