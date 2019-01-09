const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allPortfolioDataJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  ).then(result => {
      result.data.allPortfolioDataJson.edges.forEach(({ node }) => {
        createPage({
          path: node.slug,
          component: path.resolve('./src/templates/portfolioDetail.js'),
          context: {
            slug: node.slug
          }
        })
      })
      resolve()
    })
  })
}