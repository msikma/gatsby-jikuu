// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import IconList from '../IconList'

const Contributors = () => {
  //const siteMetadata = useSiteMetadata()
  const contribs = [
    {name: 'hottob', img: 'https://25.media.tumblr.com/avatar_bc640123545d_16.png', link: '/'},
    {name: 'spaceblorg', img: 'https://25.media.tumblr.com/avatar_201d14ecc84d_16.png', link: '/'}
  ]
  return <IconList items={contribs} />
}

export default Contributors
