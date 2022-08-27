// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import classNames from 'classnames'
import styled from 'styled-components'

const Section = styled.section`
  ul {
    margin: 0.35em 0;
    padding: 0;
    list-style: none;
  }
  li {
    a {
      display: block;
    }
    .icon {
      width: 16px;
      height: 16px;
      display: inline-block;
      user-select: none;
      overflow: visible;
      vertical-align: text-bottom;
    }
    .icon.no-image {
      background: var(--jikuu-primary);
    }
    .text {
      margin-left: 0.5ch;
    }
  }
`

const IconList = ({items = []}) => {
  return (
    <Section>
      <ul>
        {items.map((item, n) => (
          <li key={`li_${n}`}>
            <a href="/">
              <span className={classNames('icon', {'no-image': !item.img})}>{item.img && <img src={item.img} width="16" alt={`Avatar for ${item.name}`} />}</span>
              <span className="text">{item.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default IconList
