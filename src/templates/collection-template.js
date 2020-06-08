import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout/Layout"
// import Panel from "../components/SingleCollection/Panel"
// import OrderCard from "../components/SingleCollection/OrderCard"

const CollectionTemplate = ({ data }) => {
  const {
    databaseId,
    title,
    info,
    biotypes,
    applications,
    depositors,
  } = data.wpgraphql.collection

  return (
    <Layout>
      {/* <section id="single-collection" className="py-5">
        <div className="container">
          <div className="row">
            <div className="col">
              <h2>{title}</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-9 bg-light">
              <Panel
                info={info}
                biotypes={biotypes}
                applications={applications}
                depositors={depositors}
              />
            </div>
            <div className="col-md-3 bg-info">
              <OrderCard
                id={databaseId}
                title={title}
                price={info.price}
                productFormat={info.productFormat}
              />
            </div>
          </div>
        </div>
      </section> */}
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </Layout>
  )
}

export const query = graphql`
  query($id: ID!) {
    wpgraphql {
      collection(id: $id) {
        info {
          biosafetyLevel
          cloningMethod
          cloningOligonucleotides
          verification
          vectorType
          vectorBackbone
          termsAndLicences
          strainDesignation
          species
          sequencingOligonucleotides
          selectableMarker
          publicationUrl
          publication
          promoter
          productFormat
          price
          oxygenRequirement
          originOfReplication
          mutation
          medium
          isolationOrigin
          growthTemperature
          gene
          expressionHost
          description
          depositorComment
          copyNumber
          countryOfOrigin
        }
        biotypes {
          nodes {
            name
            id
            slug
          }
        }
        applications {
          nodes {
            name
            id
            slug
          }
        }
        depositors {
          nodes {
            name
            slug
            id
          }
        }

        title
        slug
        databaseId
      }
    }
  }
`

export default CollectionTemplate
