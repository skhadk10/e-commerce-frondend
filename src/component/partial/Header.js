import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./header.styles.css";
const Header = () => {
  return (
    <Navbar bg="success" variant="light">
      <Navbar.Brand href="#home">Clothes stores</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link to="#home">
          <Link to="/Products">Home </Link>
        </Nav.Link>
        <Nav.Link to="#category">Category</Nav.Link>
        <Nav.Link to="">Product</Nav.Link>
        <Nav.Link to="#abou">About Us</Nav.Link>
        <Nav.Link to="#order">order</Nav.Link>
      </Nav>
      <Nav>
        <div className="rightnavbar">
          <ul>
            <li>
              <Link to="">SignIn</Link>
            </li>
            <li>
              <Link to="/Createlogin">signUp</Link>
            </li>

            <li>
              <Link to="/cart">
                <i class="fas fa-shopping-cart"></i> 
              </Link>
            </li>
            <li>
              <Link to="/">
                <i className="fas fa-user primary"></i>
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
