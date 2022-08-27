// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {graphql} from 'gatsby'

import BlogPost from '../components/BlogPost'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
// import ArticleNav from '../components/ArticleNav'
import {useSiteMetadata} from '../queries/site-metadata'
import {setTimeLocale} from '../util/time'

const BlogPostTemplate = ({data, location}) => {
  const siteMetadata = useSiteMetadata()
  const post = data.markdownRemark
  const siteTitle = siteMetadata?.title || `Title`
  const {previous, next} = data

  setTimeLocale(siteMetadata?.settings?.locale)

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title={post.frontmatter.title} description={post.frontmatter.description || post.excerpt} />
      <BlogPost postData={post} isLastItem={true} />
      {/*<ArticleNav previous={previous} next={next} />*/}
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!, $previousPostId: String, $nextPostId: String) {
    markdownRemark(id: {eq: $id}) {
      id
      excerpt(pruneLength: 160)
      html
      fields {
        slug
        sourceName
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
    previous: markdownRemark(id: {eq: $previousPostId}) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: {eq: $nextPostId}) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
