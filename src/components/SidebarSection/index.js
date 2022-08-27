// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'
import HorizontalLine from '../HorizontalLine'

const Div = styled.div`
  h3 {
    margin: 0;
    font-size: 1em;
  }
  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`

const SidebarSection = ({title, children, noBar = false}) => {
  return (
    <Div>
      {title && <h3>{title}</h3>}
      <div>{children}</div>
      {!noBar && <HorizontalLine />}
    </Div>
  )
}

export default SidebarSection
