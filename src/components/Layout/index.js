// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'
import classNames from 'classnames'
import Bio from '../Bio'
import Contributors from '../Contributors'
import JikuuStylesheet from '../../style'
import LayoutHeader from '../LayoutHeader'
import Nav from '../Nav'
import SidebarSection from '../SidebarSection'
import {useGitStatus} from '../../queries/git-status'

const LayoutRoot = styled.div`
  // Bring the global font size down to 14px/21px.
  font-size: 0.875em;

  padding: 0 2em;

  color: var(--jikuu-body-color);
  width: var(--jikuu-layout-width);
  margin: auto;
  transition: font-size 0.3s ease-out;

  .main {
    display: flex;
    gap: var(--jikuu-layout-gap);

    > section {
      border-top: 0.3125rem solid black;
      padding-top: 1.4em;
      margin-top: 0.875em;
      margin-bottom: 3.2em;
      min-height: 1px;
      flex: 0 0;
    }
    .sidebar {
      border-top-color: var(--jikuu-hover);
      flex-basis: var(--jikuu-layout-sidebar-width);
    }
    .content {
      border-top-color: var(--jikuu-primary);
      flex-basis: var(--jikuu-layout-content-width);
      width: var(--jikuu-layout-content-width);
    }
    .copyright {
      margin-bottom: 0.5em;
    }
    .build {
      font-size: 0.85em;

      a {
        color: var(--jikuu-body-color);

        &:hover {
          color: var(--jikuu-hover);
        }
      }
    }
  }

  @media screen and (max-width: 1060px) {
    font-size: 0.75em;
  }
`

// TODO: use i18n
const labels = {
  en: {
    navigation: 'Navigation',
    contributors: 'Contributors'
  },
  jp: {
    navigation: 'ナビゲーション',
    contributors: '投稿者'
  }
}

const Layout = ({location, children}) => {
  const gitStatus = useGitStatus()
  const lastCommit = new Date(gitStatus.lastCommit)
  const isRootPath = location.pathname === `${__PATH_PREFIX__}/`

  const showContributors = false

  // contributors=

  return (
    <React.Fragment>
      <JikuuStylesheet />

      <LayoutRoot id="root" className="global-wrapper" data-is-root-path={isRootPath}>
        <div className={classNames('page', {index: isRootPath})}>
          <LayoutHeader />
          <main className="main">
            <section className="sidebar">
              <SidebarSection>
                <Bio />
              </SidebarSection>
              <SidebarSection title={labels.jp.navigation}>
                <Nav location={location} />
              </SidebarSection>
              {showContributors && (
                <SidebarSection title={labels.jp.contributors}>
                  <Contributors />
                </SidebarSection>
              )}
              <SidebarSection noBar>
                <h3 className="copyright">© 2008&ndash;{lastCommit.getUTCFullYear()}</h3>
                {gitStatus.isRepo && (
                  <div className="build">
                    <time dateTime={lastCommit.toISOString()} title={lastCommit.toISOString().split('T')[0]}>
                      <a href={gitStatus.homepage}>{gitStatus.version}</a>
                    </time>
                  </div>
                )}
              </SidebarSection>
            </section>
            <section className="content">{children}</section>
          </main>
        </div>
      </LayoutRoot>
    </React.Fragment>
  )
}

export default Layout
