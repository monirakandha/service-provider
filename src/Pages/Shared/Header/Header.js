import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from '../../../images/logo.png'

const Header = () => {
  return <div>
  <Navbar collapseOnSelect expand="lg" sticky="top"  bg="dark" variant="dark">
    <Container>
    <Navbar.Brand  as={Link} to="/"><img src={logo}  alt="" srcset="" /></Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav"> 
    <Nav className="justify-content-end" style={{ width: "100%" }}>
      <Nav.Link  as={Link} to="/" activeClassName="selected" >Home</Nav.Link>
      <Nav.Link as={Link}  to="/about">About</Nav.Link>
      <Nav.Link as={Link} to="/practricarea">Practice Area</Nav.Link>
      <Nav.Link as={Link}  to="/blog">BLogs</Nav.Link>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </div>;
};

export default Header;
