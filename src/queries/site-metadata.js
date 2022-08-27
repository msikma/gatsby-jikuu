// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import {useStaticQuery, graphql} from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    query SiteMetadataQuery {
      site {
        siteMetadata {
          title
          description
          author {
            name
            summary
            links
          }
          settings {
            locale
          }
          siteUrl
        }
      }
    }
  `)
  return data.site.siteMetadata
}
