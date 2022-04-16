import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'

const Header = () => {
  return <div>
  <Navbar collapseOnSelect expand="lg" sticky="top"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  as={ Link} to="/"><img src={logo}  alt="" srcset="" /></Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  </div>;
};

export default Header;
