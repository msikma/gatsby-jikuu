// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import {checkPathEquality} from '../../util/nav'
import {Link} from 'gatsby'
import {SearchIcon, ChevronRightIcon} from '@primer/octicons-react'

const Section = styled.section`
  form {
    margin: 0;
    padding: 0;

    .search-input {
      position: relative;

      input {
        position: absolute;
        background: var(--jikuu-white);
        line-height: 1.143em;
        height: calc(1.143em + 0.286em + 0.286em + 2px);
        position: relative;
        border: 1px solid var(--jikuu-medium-gray);
        text-decoration: none;
        display: block;
        padding: 0.286em calc(0.643em - 1px);
        color: var(--jikuu-near-black);
        box-sizing: border-box;
        width: 100%;
      }
      button {
        position: absolute;
        right: 0;
        line-height: 1;
        z-index: 10;
        padding: 0.286em 0.45em;
        top: 0;
        box-sizing: border-box;
        background: transparent;
        border: 1px solid transparent;
        cursor: pointer;

        svg {
          fill: var(--jikuu-dark-gray);
        }
      }

      :hover {
        input {
          border-color: var(--jikuu-primary);
          color: var(--jikuu-primary);
        }
        button {
          svg {
            fill: var(--jikuu-primary);
          }
        }
      }
    }
  }
  nav {
    margin-bottom: calc(0.575em + 1px);

    ul {
      margin: calc(0.575em - 0.35em) 0 calc(0.575em - 0.35em);
      padding: 0 0 1px 0;

      &.no-active {
        padding-top: calc(0.35em + 1px);
      }

      li {
        display: block;

        a {
          background: var(--jikuu-white);
          line-height: 1.143em;
          margin-bottom: -1px;
          position: relative;
          border: 1px solid var(--jikuu-near-black);
          text-decoration: none;
          display: block;

          span {
            border: none;
            display: block;
            padding: calc(0.286em + 1px) 0.643em;
            color: var(--jikuu-near-black);
            margin: -1px;

            .icon {
              display: none;
              vertical-align: text-top;
            }
          }

          :hover {
            border-color: var(--jikuu-primary);
            z-index: 5;

            span {
              color: var(--jikuu-primary);
            }
          }
        }
      }
      li.active {
        a {
          background: var(--jikuu-dotted-background);
          background-size: 2px 2px;
          background-color: var(--jikuu-medium-gray);
          image-rendering: pixelated;
          border: none;
          padding: 1px;
          top: 1px;
          margin-bottom: 0.35em;
          z-index: 10;

          span {
            border: 1px solid var(--jikuu-near-black);
            padding: 0.286em 0.643em;
            margin: -1px;
            background: var(--jikuu-white);
            color: var(--jikuu-near-black);
            position: relative;
            top: -3px;
            left: -3px;

            .icon {
              display: inline;
            }

            &::after {
              content: ' >'
            }
          }

          :hover {
            background: var(--jikuu-primary);

            span {
              color: var(--jikuu-primary);
              border-color: var(--jikuu-primary);
            }
          }
        }
      }
    }
  }
`

const NavItem = ({name, link = '/', isActive = false, showIcon = false}) => {
  return (
    <li className={classNames({active: isActive})}>
      <Link to={link}>
        <span>{name}{showIcon && <div className="icon">{<ChevronRightIcon size={16} />}</div>}</span>
      </Link>
    </li>
  )
}

const Nav = ({location, hasSearch = false}) => {
  const menuDefinitions = [
    [
      {name: 'Home', link: '/'},
      {name: 'Archive', link: '/archive'},
      {name: 'Tags', link: `/tags`}
      // {name: 'ホーム', link: '/'},
      // {name: 'アーカイブ', link: '/archive'},
      // {name: 'タグ', link: `/tags`},
      // {name: 'About me', link: `/page/about-me`},
      // {name: 'Stuff', link: '/page/stuff'}
    ],
    [
      {name: 'About me', link: `/page/about-me`},
      {name: 'Stuff', link: '/page/stuff'}
    ]
  ]
  const menuSections = menuDefinitions.map((menuSection) => menuSection.map((item) => ({...item, isActive: checkPathEquality(location.pathname, item.link)})))
  return (
    <Section>
      <nav>
        {menuSections.map((items, n) => (
          <ul key={`item_${n}`} className={classNames({'no-active': !items.find((item) => item.isActive)})}>
            {items.map((item, m) => (
              <NavItem key={`item_${n}_${m}`} name={item.name} link={item.link} isActive={item.isActive} />
            ))}
          </ul>
        ))}
      </nav>
      {hasSearch && (
        <form action="http://jikuu.tumblr.com/search" method="get" id="form_search" className="form-search">
          <p className="search-input">
            <button type="submit" aria-label="Search">
              <SearchIcon size={16} />
            </button>
            <input type="text" name="q" value="" readOnly placeholder="Search" />
          </p>
        </form>
      )}
    </Section>
  )
}

export default Nav
