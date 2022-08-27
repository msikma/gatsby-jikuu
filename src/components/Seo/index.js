// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import PropTypes from 'prop-types'
import {Helmet} from 'react-helmet'
import {useSiteMetadata} from '../../queries/site-metadata'

const Seo = ({description, lang, meta, title}) => {
  const siteMetadata = useSiteMetadata()

  const siteTitle = siteMetadata.title
  const metaTitle = title ?? siteMetadata.title
  const metaDescription = description ?? siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={title}
      titleTemplate={siteTitle === metaTitle ? null : `%s | ${siteTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription
        },
        {
          property: `og:title`,
          content: metaTitle
        },
        {
          property: `og:description`,
          content: metaDescription
        },
        {
          property: `og:type`,
          content: `website`
        },
        {
          name: `twitter:card`,
          content: `summary`
        },
        {
          name: `twitter:creator`,
          content: siteMetadata.author.links.find((l) => l[0] === 'twitter')?.[1] || ``
        },
        {
          name: `twitter:title`,
          content: metaTitle
        },
        {
          name: `twitter:description`,
          content: metaDescription
        }
      ].concat(meta)}
    />
  )
}

Seo.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired
}

export default Seo
