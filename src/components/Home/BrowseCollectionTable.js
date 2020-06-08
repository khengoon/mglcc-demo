import React, { useEffect, useState } from "react"

import { useStaticQuery, graphql } from "gatsby"
import CollectionTable from "./CollectionTable"

const BrowseCollectionTable = () => {
  const rawData = useStaticQuery(getCollections)
  const data = rawData.wpgraphql.collections.edges

  const applications = rawData.wpgraphql.applications.edges
  const biotypes = rawData.wpgraphql.biotypes.edges

  const tableData = data.map(({ node }) => ({
    id: node.databaseId,
    title: node.title,
    titleSlug: `collections/${node.slug}`,
    depositor: node.depositors.nodes[0].name,
    depositorSlug: `depositors/${node.depositors.nodes[0].slug}`,
    purpose: node.info.description,
    publication: node.info.publication,
    publicationUrl: node.info.publicationUrl,
    // filterable targets
    applications: node.applications.nodes.map(node => ({
      name: node.name,
      // slug: node.slug,
    })),
    biotypes: node.biotypes.nodes[0].name,
  }))

  const [application, setApplication] = useState("All")
  const [biotype, setBiotype] = useState("All")
  const [defaultData, setDefaultData] = useState(tableData)

  function requestData() {
    console.log("requestData function", application, biotype)
    let newData = tableData
    if (application !== "All") {
      newData = newData.filter(item => {
        for (let i = 0; i < item.applications.length; i++) {
          if (item.applications[i].name === application) {
            return item
          }
        }
      })
    }
    if (biotype !== "All") {
      newData = newData.filter(item => {
        return item.biotypes === biotype
      })
    }

    setDefaultData(newData)
  }

  useEffect(() => {
    setBiotype(biotype)
    setApplication(application)
  }, [biotype, application])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <form
            onSubmit={e => {
              e.preventDefault()
              requestData()
            }}
          >
            <div className="form-row">
              <div className="form-group col-md-3">
                <label htmlFor="application">Application</label>
                <select
                  id="application"
                  className="form-control"
                  value={application}
                  onChange={e => {
                    setApplication(e.target.value)
                  }}
                  onBlur={e => {
                    setApplication(e.target.value)
                  }}
                >
                  <option selected>All</option>
                  {applications.map(({ node }) => (
                    <option key={node.id}>{node.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-3">
                <label htmlFor="biotype">Biotype</label>
                <select
                  id="biotype"
                  className="form-control"
                  value={biotype}
                  onChange={e => {
                    setBiotype(e.target.value)
                  }}
                  onBlur={e => {
                    setBiotype(e.target.value)
                  }}
                >
                  <option selected>All</option>
                  {biotypes.map(({ node }) => (
                    <option key={node.id}>{node.name}</option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-3 align-self-end">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <CollectionTable defaultData={defaultData} />
      {/* <pre>{JSON.stringify(defaultData, null, 2)}</pre> */}
    </div>
  )
}

export default BrowseCollectionTable

const getCollections = graphql`
  query {
    wpgraphql {
      collections {
        edges {
          node {
            info {
              publication
              publicationUrl
              description
            }
            title
            slug
            databaseId
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
          }
        }
      }
      applications {
        edges {
          node {
            name
            slug
            id
          }
        }
      }
      biotypes {
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
