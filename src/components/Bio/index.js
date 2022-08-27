// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import styled from 'styled-components'
import {useSiteMetadata} from '../../queries/site-metadata'
import SocialMediaIcon from './SocialMediaIcon'

const Component = styled.div`
  .bio .summary {
  }
  .social-media {
    margin: 0.35em 0;
    padding: 0;
    list-style: none;

    a {
      display: block;
      padding: 0.1em 0;
      margin: 0;
      color: var(--jikuu-primary);
      text-decoration: none;
    }
    a:hover {
      color: var(--jikuu-hover);
    }
    .text {
      margin-left: 0.5ch;
    }
  }
`

const Bio = () => {
  const siteMetadata = useSiteMetadata()
  const socialLinks = [...siteMetadata.author.links, ['rss', 'RSS', '/rss.xml']]
  return (
    <Component className="bio">
      <p className="summary">{siteMetadata.author.summary}</p>
      <ul className="social-media">
        {socialLinks.map(item => (
          <li key={`social_media_${item[0]}`} className={item[0]}>
            <a href={item[2]}>
              <SocialMediaIcon type={item[0]} />
              <span className="text">{item[1]}</span>
            </a>
          </li>
        ))}
      </ul>
    </Component>
  )
}

export default Bio
