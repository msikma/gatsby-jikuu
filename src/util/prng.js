// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

/**
 * MurmurHash3's mixing function for creating seeds.
 * 
 * See: <https://stackoverflow.com/a/47593316>
 */
const xmur3 = str => {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = h << 13 | h >>> 19
  }
  return () => {
    h = Math.imul(h ^ h >>> 16, 2246822507)
    h = Math.imul(h ^ h >>> 13, 3266489909)
    return (h ^= h >>> 16) >>> 0
  }
}

/**
 * Simple Fast Counter implementation.
 * 
 * Part of the PractRand random number testing suite. Has a 128-bit state.
 * 
 * See: <https://stackoverflow.com/a/47593316>
 */
const sfc32 = (a, b, c, d) => () => {
  a >>>= 0
  b >>>= 0
  c >>>= 0
  d >>>= 0 
  let t = (a + b) | 0
  a = b ^ b >>> 9
  b = c + (c << 3) | 0
  c = (c << 21 | c >>> 11)
  d = d + 1 | 0
  t = t + d | 0
  c = c + t | 0
  return (t >>> 0) / 4294967296
}

/**
 * Returns a pseudo-random integer between [min, max) using a prng.
 */
const randInt = (rand, min, max) => () => {
  return Math.floor(rand() * (max - min) + min)
}

/**
 * Returns a pseudo-random item from an array using a string as seed.
 */
const getRandomFromArrayBySeed = (items, seedString) => {
  const seed = xmur3(`${seedString}`)
  const prng = sfc32(seed(), seed(), seed(), seed())
  const index = randInt(prng, 0, items.length)()
  return items[index]
}

export {
  getRandomFromArrayBySeed
}
