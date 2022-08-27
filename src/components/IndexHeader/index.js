// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'
import HorizontalLine from '../HorizontalLine'
import ArticleStyle from '../ArticleStyle'
import {Link} from 'gatsby'

const Component = styled.div`
  margin-top: 0.65em;
`

const IndexHeader = ({hasLine = true, children}) => {
  return (
    <ArticleStyle>
      <Component>
        <header>
          <h3>{children}</h3>
        </header>
        {hasLine ? <HorizontalLine extraSpace /> : null}
      </Component>
    </ArticleStyle>
  )
}

export default IndexHeader
