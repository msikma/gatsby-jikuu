// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'

const wrapIcon = SvgComponent => {
  const component = props => (
    <SvgComponent {...{fill: 'currentColor', style: {verticalAlign: 'text-bottom'}, ...props}} />
  )
  component.displayName = 'wrapIcon'
  return component
}

export default wrapIcon
