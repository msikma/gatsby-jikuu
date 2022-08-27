// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import orderBy from 'lodash.orderby'
import kebabCase from 'lodash.kebabcase'
import styled from 'styled-components'
import {graphql, Link} from 'gatsby'

import Article from '../components/Article'
import Layout from '../components/Layout'
import Seo from '../components/Seo'
import {useSiteMetadata} from '../queries/site-metadata'
import Tag from '../components/Tag'
/*
const TagSpan = styled.span`
  display: inline-block;

  .name {

  }
  .count {
    background: gray;
    display: inline-block;
    padding: 0 1em;
    margin-left: 1ch;
    border-radius: 1em;
  }
`

const Tag = ({count, link, children}) => {
  return (
    <TagSpan>
      <Link to={link}>
        <span className="name">{children}</span>
        <span className="count">{count}</span>
      </Link>
    </TagSpan>
  )
}
 */
const BlogIndex = ({data, location}) => {
  const siteMetadata = useSiteMetadata()
  const siteTitle = siteMetadata?.title || `Title`
  const tags = orderBy(data.allMarkdownRemark.group, ['totalCount', 'fieldValue'], ['desc', 'asc'])

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Tags" />
      <Article>
        {tags.length === 0 ? (
          <>
            <header>
              <h2 className="title">Tags</h2>
              <div className="meta top">
                No tags found.
              </div>
            </header>
          </>
        ) : (
          <>
            <header>
              <h2 className="title">Tags</h2>
              <div className="meta top">
                Listing {tags.length} tags.
              </div>
            </header>
            <main>
              <table>
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Count</th>
                  </tr>
                </thead>
                <tbody>
                  {tags.map((tag, n) => (
                    <tr key={tag.fieldValue}>
                      <td>
                        <Tag term={tag.fieldValue} isBlock />
                      </td>
                      <td>
                        <span className="count">{tag.totalCount}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
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
    allMarkdownRemark(limit: 2000, filter: {fields: {sourceName: {eq: "blog"}}}) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
