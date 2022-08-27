// gatsby-jikuu <https://github.com/msikma/gatsby-jikuu>
// © MIT license

import * as React from 'react'
import {Link} from 'gatsby'
import HorizontalLine from '../HorizontalLine'
import Tag from '../Tag'
import Article, {ArticleTime} from '../Article'
import {getRelativeTime} from '../../util/time'

// TODO: use i18n
const getPermalinkNode = (date, author, locale = 'jp') => {
  const relDate = getRelativeTime(date)
  if (locale === 'jp') {
    return <>{relDate}に{author ? <>{author}から投稿されました</> : <>投稿</>}</>
  }
  return <>Posted {relDate} by {author}</>
}
const getTagsNode = (tags, locale = 'jp') => {
  if (locale === 'jp') {
    return <>タグ：{tags}</>
  }
  return <>Tagged with {tags}</>
}

const BlogPostAtom = ({title, slug, date, content, tags, authors, showMeta = true, isLastItem = true}) => {
  return (
    <Article>
      <header>
        <h2 className="title">
          <Link to={slug} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
        {showMeta && (
          <div className="meta top">
            <ArticleTime date={date} />
          </div>
        )}
      </header>
      <main>
        <p dangerouslySetInnerHTML={{__html: content}} itemProp="description" />
      </main>
      {showMeta && (
        <footer>
          <div className="meta bottom">
            <p className="permalink">
              <Link to={slug}>{getPermalinkNode(date, authors[0])}</Link>
            </p>
            {tags.length ? <p className="tags">{getTagsNode(tags.map(tag => <Tag key={`tag_${tag}`} term={tag} />))}</p> : null}
          </div>
        </footer>
      )}
      {!isLastItem && <HorizontalLine main />}
    </Article>
  )
}

const BlogPost = ({postData, isLastItem = false}) => {
  const dateObj = new Date(postData.frontmatter.dateISO)
  return (
    <BlogPostAtom
      title={postData.frontmatter.title || postData.fields.slug}
      slug={postData.fields.slug}
      content={postData.html}
      tags={postData.frontmatter.tags ?? []}
      authors={postData.frontmatter.authors ?? []}
      date={dateObj}
      showMeta={postData.fields.sourceName !== 'page'}
      isLastItem={isLastItem}
    />
  )
}

export default BlogPost
