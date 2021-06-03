exports.createPages = async ({ actions: { createPage }, graphql }) => {
    const data = await graphql(`
      {
        allProductDataJson {
          edges {
            node {
              slug
            }
          }
        }
      }
    `)
  
    if (data.errors) {
      console.log("Error retrieving data", data.errors)
      return
    }
  
    const productTemplate = require.resolve("./src/templates/ProductPage.js")
  
    data.data.allProductDataJson.edges.forEach(edge => {
      createPage({
        path: `/oferta/${edge.node.slug}/`,
        component: productTemplate,
        context: {
          slug: edge.node.slug,
        },
      })
    })
  }
  