// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {graphql} from 'gatsby'

import BlogPost from '../components/BlogPost'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import {useSiteMetadata} from '../queries/site-metadata'

const BlogIndex = ({data, location}) => {
  const siteMetadata = useSiteMetadata()
  const siteTitle = siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
        <p>No blog posts found. Add markdown posts to "content/blog" (or the directory you specified for the "gatsby-source-filesystem" plugin in gatsby-config.js).</p>
      </Layout>
    )
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="All posts" />
      <div>
        {posts.map((post, n) => (
          <BlogPost key={`post_${n}`} postData={post} isLastItem={n === posts.length - 1} />
        ))}
      </div>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {sourceName: {eq: "blog"}}}) {
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
