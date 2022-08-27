// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {Link} from 'gatsby'
import styled from 'styled-components'
import Tag from '../Tag'
import {formatYearMonth} from '../../util/time'
import {ArticleTime} from '../Article'

const Table = styled.table`
  .post-link {
    display: inline-block;
    padding: 0.1em 0.3em 0.1em 0;
  }
`

/**
 * Groups posts by month.
 */
const groupByMonth = posts => {
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
  return postsByMonth
}

const BlogArchive = ({posts, hasHeader = false}) => {
  // Organize available posts by month.
  const postsByMonth = groupByMonth(posts)

  return (
    <Table>
      {hasHeader && (
        <thead>
          <tr>
            <th colSpan={2}>Title</th>
            <th>Published</th>
          </tr>
        </thead>
      )}
      {Object.values(postsByMonth).map(month => {
        const {date, posts} = month
        const monthISO = `${date.getUTCFullYear()}-${date.getMonth()}`
        const monthFormatted = formatYearMonth(date)
        return (
          <tbody key={monthISO}>
            <tr>
              <th colSpan={2}>{monthFormatted}</th>
              <th></th>
            </tr>
            {posts.map((postData, n) => (
              <tr key={`${postData.fields.slug}`}>
                <td style={{borderRight: '0'}}>
                  <span className="post-link"><Link to={postData.fields.slug}>{postData.frontmatter.title}</Link></span>
                </td>
                <td>
                  {(postData.frontmatter.tags || []).map((tag) => (
                    <Tag key={tag} term={tag} isBlock />
                  ))}
                </td>
                <td className=""><ArticleTime date={new Date(postData.frontmatter.dateISO)} type="archive" /></td>
              </tr>
            ))}
          </tbody>
        )
      })}
    </Table>
  )
}

export default BlogArchive
