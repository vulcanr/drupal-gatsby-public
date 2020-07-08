/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)
const _ = require("lodash")

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  const slug = `/blog/${_.kebabCase(node.title)}`
  createNodeField({
    node,
    name: `slug`,
    value: slug,
  })
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPostTemplate = path.resolve(`./src/templates/blog-post.js`)
  // const aboutTemplate = path.resolve(`./src/templates/about.js`)
  // const contactTemplate = path.resolve(`./src/templates/about.js`)

  return graphql(`
    {
     allNodeArticle {
       edges {
         node {
           title
           fields {
              slug
           }
         }
       }
     }
    }
  `
  ).then(result => {

    result.data.allNodeArticle.edges.forEach(({ node }) => {
      createPage({
        path: node.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: node.fields.slug
        },
      })
    })
  })
}
