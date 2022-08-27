const {getRepoInfo} = require('repoinf')
const kebabCase = require('lodash.kebabcase')
const path = require(`path`)
const fs = require('fs').promises
const {createFilePath} = require(`gatsby-source-filesystem`)

const makePostQuery = (type) => {
  return `
    {
      allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: ASC}
        limit: 1000
        filter: {fields: {sourceName: {eq: "${type}"}}}
      ) {
        nodes {
          id
          fields {
            slug
          }
        }
      }
    }
  `
}

const makeTagsQuery = () => {
  return `
    {
      postsRemark: allMarkdownRemark(
        sort: {fields: [frontmatter___date], order: DESC}
        limit: 2000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
      tagsGroup: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `
}

/**
 * Panics in case any of our required GraphQL queries to generate pages fails.
 * 
 * In case of errors, 'true' is returned.
 */
const queriesHaveErrors = (reporter, resultItems) => {
  for (const resultItem of resultItems) {
    if (resultItem.errors) {
      reporter.panicOnBuild(`There was an error generating posts`, resultItem.errors)
      return true
    }
  }
  return false
}

exports.createPages = async ({graphql, actions, reporter}) => {
  const {createPage} = actions

  // Define a template for blog post
  const postTemplate = path.resolve(`./src/templates/post.js`)
  const tagTemplate = path.resolve(`./src/templates/tag.js`)

  // Get all markdown blog posts sorted by date
  const resultPosts = await graphql(makePostQuery('blog'))
  const resultPages = await graphql(makePostQuery('page'))
  const resultTags = await graphql(makeTagsQuery())

  if (queriesHaveErrors(reporter, [resultPosts, resultPages, resultTags])) {
    return
  }

  // Create pages and posts, which share the same template.
  for (const queryResult of [resultPosts, resultPages]) {
    const items = queryResult.data.allMarkdownRemark.nodes
    items.forEach((post, index) => {
      const previousPostId = index === 0 ? null : items[index - 1].id
      const nextPostId = index === items.length - 1 ? null : items[index + 1].id

      createPage({
        path: post.fields.slug,
        component: postTemplate,
        context: {
          id: post.id,
          previousPostId,
          nextPostId
        }
      })
    })
  }

  // Create tag detail pages.
  for (const tagGroup of resultTags.data.tagsGroup.group) {
    createPage({
      path: `/tag/${kebabCase(tagGroup.fieldValue)}/`,
      component: tagTemplate,
      context: {
        tag: tagGroup.fieldValue
      }
    })
  }
}

exports.sourceNodes = async ({actions, createNodeId, createContentDigest}) => {
  const {createNode} = actions
  const packageData = JSON.parse(await fs.readFile(path.join(__dirname, 'package.json'), 'utf8'))
  const nodeData = {version: '', lastCommit: '', homepage: packageData.homepage, ...(await getRepoInfo(__dirname))}
  const nodeContent = JSON.stringify(nodeData)
  const nodeMeta = {
    id: createNodeId(`git-status`),
    parent: null,
    children: [],
    internal: {
      type: `GitStatus`,
      mediaType: `text/html`,
      content: nodeContent,
      contentDigest: createContentDigest(nodeData)
    }
  }

  createNode({...nodeData, ...nodeMeta})
}

const createSlug = (filePath, type) => {
  if (type === 'blog') {
    return `/post${filePath}`
  }
  if (type === 'page') {
    return `/page${filePath}`
  }
  return `${filePath}`
}

exports.onCreateNode = ({node, actions, getNode}) => {
  const {createNodeField} = actions

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({node, getNode})
    const file = getNode(node.parent)
    createNodeField({
      node,
      name: `slug`,
      value: createSlug(value, file.sourceInstanceName)
    })
    createNodeField({
      node,
      name: 'sourceName',
      value: file.sourceInstanceName
    })
  }
}

exports.createSchemaCustomization = ({actions}) => {
  const {createTypes} = actions

  // Explicitly define the siteMetadata {} object
  // This way those will always be defined even if removed from gatsby-config.js

  // Also explicitly define the Markdown frontmatter
  // This way the "MarkdownRemark" queries will return `null` even when no
  // blog posts are stored inside "content/blog" instead of returning an error
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
    }

    type Author {
      name: String
      summary: String
    }

    type MarkdownRemark implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      title: String
      description: String
      tags: [String]
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `)
}
