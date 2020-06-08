import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
// import SingleDepositor from "../components/Depositor/SingleDepositor"

const DepositorTemplate = ({ data }) => {
  const { name, collections, description } = data.wpgraphql.depositor

  return (
    <Layout>
      {/* <section id="single-depositor">
        <div className="container">
          <div className="row py-5">
            <div className="col">
              <h2>{name}</h2>
              <p className="lead">{description}</p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">ID</th>
                    <th scope="col">Title</th>
                    <th scope="col">Purpose</th>
                    <th scope="col">Biology</th>
                    <th scope="col">Publication</th>
                  </tr>
                </thead>
                <tbody>
                  {collections.edges.map(({ node }) => (
                    <SingleDepositor key={node.id} node={node} />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section> */}
      <pre>{JSON.stringify(collections.edges, null, 2)}</pre>
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      depositor(id: $id) {
        collections {
          edges {
            node {
              databaseId
              id
              title
              info {
                publication
                publicationUrl
                description
              }
              slug
              biotypes {
                nodes {
                  name
                  slug
                }
              }
            }
          }
        }
        description
        name
      }
    }
  }
`

export default DepositorTemplate
