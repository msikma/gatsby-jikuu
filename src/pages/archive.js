// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {graphql} from 'gatsby'

import Article from '../components/Article'
import Bio from '../components/Bio'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import BlogArchive from '../components/BlogArchive'
import {useSiteMetadata} from '../queries/site-metadata'

const BlogIndex = ({data, location, hasHeader = false}) => {
  const siteMetadata = useSiteMetadata()
  const siteTitle = siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="All posts" />
        <Bio />
      </Layout>
    )
  }

  const headerPostFormatter = new Intl.DateTimeFormat('en-US', {year: 'numeric', month: 'long'})
  const latestPost = posts[0]
  const oldestPost = posts.slice(-1)[0]
  const latestPostDate = headerPostFormatter.format(new Date(latestPost.frontmatter.dateISO))
  const oldestPostDate = headerPostFormatter.format(new Date(oldestPost.frontmatter.dateISO))

  const postsByMonth = {}
  for (let n = 0; n < posts.length; ++n) {
    const post = posts[n]
    const date = new Date(post.frontmatter.dateISO)
    const month = `${date.getUTCFullYear()}-${date.getMonth()}`
    if (!postsByMonth[month]) {
      postsByMonth[month] = {
        date,
        posts: []
      }
    }
    postsByMonth[month].posts.push(post)
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Archive" />
      <Article>
        {posts.length === 0 ? (
          <>
            <header>
              <h2 className="title">Archive</h2>
            </header>
            <main>
              <p>No blog posts found.</p>
            </main>
          </>
        ) : (
          <>
            <header>
              <h2 className="title">Archive</h2>
              <div className="meta top">
                Listing {posts.length} posts from {oldestPostDate} to {latestPostDate}.
              </div>
            </header>
            <main>
              <BlogArchive posts={posts}  />
            </main>
          </>
        )}
      </Article>
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {fields: {sourceName: {eq: "blog"}}}) {
      nodes {
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
