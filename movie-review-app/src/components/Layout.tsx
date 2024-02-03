import React from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Layout() {
  return (
    <Navbar
      expand="lg"
      className="custom-navbar"
      style={{ background: "#ffff" }}
    >
      <Container fluid>
        <Navbar.Brand as={Link} to="/">
          DialogReview
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            <NavDropdown title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#kdramas">K-dramas</NavDropdown.Item>
              <NavDropdown.Item href="#movies">Movies</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#cartoons">Cartoons </NavDropdown.Item>
              <NavDropdown.Item href="#chineseDramas">
                Chinese Dramas
              </NavDropdown.Item>
              <NavDropdown.Item href="#thaiDramas">
                Thai Dramas{" "}
              </NavDropdown.Item>
              <NavDropdown.Item href="#trendingNow">
                Trending Now{" "}
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button
              style={{
                background: "rgba(160, 208, 251, 0.8)",
                border: "none",
                color: "#1F1F1F",
              }}
            >
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Layout;
