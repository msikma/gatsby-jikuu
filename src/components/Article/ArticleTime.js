// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {formatDatetimeParts} from '../../util/time'

const ArticleTime = ({date, type = 'std', onlyRelative = false, now = new Date()}) => {
  if (!['std', 'archive'].includes(type)) {
    throw new Error(`Invalid time type: ${type}`)
  }

  const iso = date.toISOString()
  const parts = formatDatetimeParts(type, date)
  return <time dateTime={iso}>{parts.join('')}</time>
}

export default ArticleTime
