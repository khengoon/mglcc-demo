import React from "react"
import Layout from "../components/Layout/Layout"
import StyledHero from "../components/Layout/StyledHero"
import Section from "../components/Layout/Section"
import Features from "../components/Home/Features"
import Banner from "../components/Layout/Banner"
import BrowseCollectionTable from "../components/Home/BrowseCollectionTable"
import Button from "react-bootstrap/Button"

const Index = () => {
  return (
    <div>
      <Layout>
        <StyledHero home>
          <Banner>
            <Button size="lg">Become a Contributor</Button>
            <Button size="lg" className="ml-4" variant="outline-light">
              Learn More
            </Button>
          </Banner>
        </StyledHero>
        <Section
          title="build for collaboration"
          info="MGLCC provides solution to foster collaboration"
        >
          <Features />
        </Section>
        <Section info="Browse Collection">
          <BrowseCollectionTable />
        </Section>
      </Layout>
    </div>
  )
}

export default Index
