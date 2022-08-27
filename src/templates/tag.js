// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {Link, graphql} from 'gatsby'
import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import IndexHeader from '../components/IndexHeader'
import {useSiteMetadata} from '../queries/site-metadata'

/**
 * Index page for displaying posts with a certain tag (detail page for a tag).
 */
const Tags = ({data, location, pageContext}) => {
  const {tag} = pageContext
  const siteMetadata = useSiteMetadata()
  const siteTitle = siteMetadata?.title || `Title`
  const totalCount = data.allMarkdownRemark.totalCount
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={`Posts tagged with "${tag}"`} />
      <IndexHeader hasLine>
        タグ：{tag}が付けられている投稿{totalCount}件を表示しています:
      </IndexHeader>
      <div>
        {posts.map((post, n) => (
          <BlogPost key={`post_${n}`} postData={post} isLastItem={n === posts.length - 1} />
        ))}
      </div>
    </Layout>
  )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: {fields: [frontmatter___date], order: DESC}
      filter: {
        frontmatter: {
          tags: {in: [$tag]}
        }
        fields: {
          sourceName: {eq: "blog"}
        }
      }
    ) {
      totalCount
      nodes {
        html
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          dateISO: date
          tags
          authors
          title
          description
        }
      }
    }
  }
`
