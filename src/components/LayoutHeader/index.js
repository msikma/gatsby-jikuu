// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import JikuuLogo from '../JikuuLogo'

const Header = styled.header`
  #title {
    //padding: 2em 0 1em;
    text-align: center;
    text-decoration: none;
    margin: 0;
    font-size: 1em;

    > a {
      width: 23.5em;
      margin: 0;
      display: block;
      padding: 2.15em 0 0 0;

      // Align with the content section.
      margin-left: calc(var(--jikuu-layout-gap) + var(--jikuu-layout-sidebar-width));
    }
  }
`

const LayoutHeader = () => {
  return (
    <Header>
      <h1 id="title">
        <Link to="/">
          <JikuuLogo />
        </Link>
      </h1>
    </Header>
  )
}

export default LayoutHeader
