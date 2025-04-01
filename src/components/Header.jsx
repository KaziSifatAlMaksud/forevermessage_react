import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/img/loginlogo.svg"; 

const Header = () => {
  return (
    <Navbar bg="light" variant="light" expand="lg" className="border-bottom shadow-sm">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-dark">    <img 
            src={logo} 
            alt="Logo" 
            width="40" 
            height="40" 
            className="d-inline-block align-top me-2"
          /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" className="text-dark">Home</Nav.Link>
               <Nav.Link as={Link} to="/terms" className="text-dark">Terms & Conditions</Nav.Link>
            <Nav.Link as={Link} to="/policy" className="text-dark">Privacy Policy</Nav.Link>
              <Nav.Link as={Link} to="/security" className="text-dark">Security</Nav.Link>
            <Nav.Link as={Link} to="/about" className="text-dark">About Us</Nav.Link>
            <Nav.Link as={Link} to="/contact" className="text-dark">Contact Us</Nav.Link>
         
          
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
