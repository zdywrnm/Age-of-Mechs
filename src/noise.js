// 种子随机数 + 2D value noise（世界生成的确定性来源）

export function mulberry32(seed) {
  let a = seed >>> 0
  return function () {
    a |= 0; a = (a + 0x6D2B79F5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

// 2D value noise：网格随机值 + 平滑插值
export function makeNoise2D(seed) {
  const rand = mulberry32(seed)
  const perm = new Uint8Array(512)
  const vals = new Float32Array(256)
  for (let i = 0; i < 256; i++) { perm[i] = i; vals[i] = rand() }
  for (let i = 255; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1))
    ;[perm[i], perm[j]] = [perm[j], perm[i]]
  }
  for (let i = 0; i < 256; i++) perm[256 + i] = perm[i]

  const at = (ix, iz) => vals[perm[(ix & 255) + perm[iz & 255]]]
  const fade = t => t * t * (3 - 2 * t)

  return function noise(x, z) {
    const ix = Math.floor(x), iz = Math.floor(z)
    const fx = x - ix, fz = z - iz
    const v00 = at(ix, iz), v10 = at(ix + 1, iz)
    const v01 = at(ix, iz + 1), v11 = at(ix + 1, iz + 1)
    const u = fade(fx), w = fade(fz)
    return (v00 * (1 - u) + v10 * u) * (1 - w) + (v01 * (1 - u) + v11 * u) * w
  }
}

// 多层叠加（fBm），返回约 [0,1]
export function makeFbm2D(seed, octaves = 3) {
  const layers = []
  for (let i = 0; i < octaves; i++) layers.push(makeNoise2D(seed + i * 1013))
  return function (x, z) {
    let sum = 0, amp = 1, freq = 1, norm = 0
    for (let i = 0; i < octaves; i++) {
      sum += layers[i](x * freq, z * freq) * amp
      norm += amp; amp *= 0.5; freq *= 2
    }
    return sum / norm
  }
}
