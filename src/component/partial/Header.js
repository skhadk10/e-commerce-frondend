import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const Header = () => {
  return (
    <Navbar bg="success" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Contact Us</Nav.Link>
        <Nav.Link href="#pricing">About Us</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
