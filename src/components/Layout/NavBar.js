import React from "react"
import Container from "react-bootstrap/Container"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Badge from "react-bootstrap/Badge"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import { FaAlignRight, FaCartPlus } from "react-icons/fa"

const NavBar = () => {
  const activeStyle = {
    borderBottom: "solid",
    borderColor: "red",
  }
  return (
    <Navbar expand="lg" variant="light" bg="light" className="py-3">
      <Container>
        <AniLink fade to="/" className="navbar-brand">
          MGLCC
        </AniLink>

        <Navbar.Toggle aria-controls="navbar-nav">
          <FaAlignRight />
        </Navbar.Toggle>
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            <AniLink
              fade
              to="/collections"
              className="nav-link"
              activeStyle={activeStyle}
            >
              Collections
            </AniLink>

            <AniLink
              fade
              to="/services"
              className="nav-link"
              activeStyle={activeStyle}
            >
              Services
            </AniLink>
            <AniLink fade to="/cart" className="nav-link">
              <span>
                <FaCartPlus
                  className="text-primary"
                  style={{ fontSize: "1.3rem" }}
                />
                <Badge
                  variant="primary"
                  className="rounded-circle ml-1"
                  style={{ fontSize: "0.7rem", position: "absolute" }}
                >
                  3
                </Badge>
              </span>
            </AniLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar
