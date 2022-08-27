// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {MarkGithubIcon, LinkExternalIcon, RssIcon} from '@primer/octicons-react'
import MarkTwitterSVG from './MarkTwitter.inline.svg'
import wrapIcon from '../../hoc/wrap-icon'

// Twitter brand icon.
const MarkTwitterIcon = wrapIcon(MarkTwitterSVG)

/**
 * Social media icon component.
 *
 * This displays an SVG icon of the given social media type.
 * If the type is unknown, a generic "external link" icon is displayed.
 */
const SocialMediaIcon = ({type}) => {
  if (type === 'github') {
    return <MarkGithubIcon />
  }
  if (type === 'twitter') {
    return <MarkTwitterIcon />
  }
  if (type === 'rss') {
    return <RssIcon />
  }
  return <LinkExternalIcon />
}

export default SocialMediaIcon
