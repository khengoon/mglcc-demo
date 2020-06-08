const path = require("path")

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const GET_PAGES = `
        query {
            wpgraphql {
                collections {
                    edges {
                      node {
                        id
                        uri
                        slug
                      }
                    }
                }
                depositors {
                  edges {
                    node {
                      name
                      slug
                      id
                    }
                  }
                }
            }
        }
    `
  const result = await graphql(GET_PAGES)

  if (result.errors) {
    reporter.panicOnBuild("ERROR: Loading createPages query")
  }

  const collections = result.data.wpgraphql.collections.edges

  const depositors = result.data.wpgraphql.depositors.edges

  collections.forEach(({ node }, index) => {
    createPage({
      path: `collections/${node.slug}`,
      component: path.resolve(`./src/templates/collection-template.js`),
      context: { id: node.id },
    })
  })

  depositors.forEach(({ node }, index) => {
    createPage({
      path: `depositors/${node.slug}`,
      component: path.resolve(`./src/templates/depositor-template.js`),
      context: { id: node.id },
    })
  })
}
