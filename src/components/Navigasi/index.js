import React from "react";
import { Navbar, Nav, Container, Form } from "react-bootstrap";
import "./style.scss";

function Navigasi() {
  return (
    <div className="Navigasi">            
      <Navbar bg="dark" variant="dark" style={{position: "fix"}}>
        <Container>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#Who We Are">Who We Are</Nav.Link>
            <Nav.Link href="#Work With Us">Work With Us</Nav.Link>
            <Nav.Link href="#News">News</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <button classname="button">Login</button>
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navigasi;
