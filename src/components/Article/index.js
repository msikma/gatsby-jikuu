// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'
import ArticleTime from './ArticleTime'
import ArticleStyle from '../ArticleStyle'

const ArticleElement = styled.article`
  .meta {
    color: var(--jikuu-dark-gray);

    a {
      color: var(--jikuu-dark-gray);

      &:hover {
        color: var(--jikuu-hover);
        text-decoration: underline;
      }
    }

    &.top {
      margin-bottom: 1.3em;
    }

    &.bottom {
      font-size: 0.85em;
      line-height: 1.8em;
    }

    p {
      margin: 0;
    }
  }
`

const TagElement = styled.a`
  .hash:before {
    content: '#';
  }
`

const Article = ({children}) => {
  return (
    <ArticleStyle>
      <ArticleElement itemScope itemType="http://schema.org/Article">
        {children}
      </ArticleElement>
    </ArticleStyle>
  )
}

export {
  ArticleTime
}
export default Article
