// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'

const Component = styled.hr`
  border: none;
  height: 0.1875rem;
  background-image: var(--jikuu-dotted-background);
  background-size: 2px 2px;
  background-color: var(--jikuu-medium-gray);
  margin: 1em 0;

  &.main {
    height: 0.3125rem;
    margin: 2em 0;
  }
  &.space {
    margin-bottom: 2em;
  }
`

const HorizontalLine = ({main, extraSpace}) => {
  return <Component className={classNames({main, space: extraSpace})} />
}

export default HorizontalLine
