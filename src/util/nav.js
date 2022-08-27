// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import trim from 'lodash.trim'

/**
 * Checks if two paths are the same, accounting for trailing slashes.
 */
const checkPathEquality = (pathA, pathB) => {
  if (pathA == null && pathB == null) return true
  if (pathA == null || pathB == null) return false
  return trim(pathA, '/') === trim(pathB, '/')
}

export {
  checkPathEquality
}
