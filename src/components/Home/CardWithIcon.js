import React from "react"
import Card from "react-bootstrap/Card"
import { IconContext } from "react-icons"

const CardWithIcon = ({ icon, title, text }) => (
  <Card>
    <Card.Body>
      <IconContext.Provider value={{ size: "3rem" }}>
        <div>{icon}</div>
      </IconContext.Provider>
      <Card.Title className="my-3">{title}</Card.Title>
      <Card.Text>{text}</Card.Text>
    </Card.Body>
  </Card>
)

export default CardWithIcon
