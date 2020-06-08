import React from "react"
import Cards from "./CardWithIcon"
import CardDeck from "react-bootstrap/CardDeck"
import { BsCardChecklist, BsGraphUp, BsBullseye } from "react-icons/bs"

const Features = () => {
  return (
    <CardDeck className="py-4">
      <Cards
        icon={<BsCardChecklist />}
        title="Curated For Research"
        text="Every item is carefully reviewed and curated with important information."
      />
      <Cards
        icon={<BsGraphUp />}
        title="Built For Impact"
        text="Impact originates from collaboration. Start connecting and explore interdisciplinary collaborations."
      />
      <Cards
        icon={<BsBullseye />}
        title="Engineered For Visibility"
        text="Valuable research findings is highlighted and promoted through easy sharing and networking."
      />
    </CardDeck>
  )
}

export default Features
