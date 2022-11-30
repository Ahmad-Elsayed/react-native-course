/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */
/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions
  const { data } = await graphql(`
    query {
      allContentfulLessons {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
// slug  if (result.errors) {
//     throw result.errors
//   }
// console.error(data.allContentfulLessons.edges)
  data.allContentfulLessons.edges.forEach(edge => {
    createPage({
      path: `lessons/${edge.node.slug}`,
      component: require.resolve(`./src/templates/lesson.js`),
      context: {
        slug: edge.node.slug,
      },
    })
  })
}
