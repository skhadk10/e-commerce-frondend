import React from "react";
import {Link} from 'react-router-dom';
import { Navbar, Nav, } from "react-bootstrap";

import "./header.styles.css"
const Header = () => {
  return (
    <Navbar bg="success" variant="light">
      <Navbar.Brand href="#home">Clothes stores</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#category">Category</Nav.Link>
        <Nav.Link href="#product">Product</Nav.Link> 
        <Nav.Link href="#abou">About Us</Nav.Link> 
        <Nav.Link href="#order">order</Nav.Link> 
       
      </Nav> 
      <Nav>
         <div className="rightnavbar">
        <ul>
          <li>
        <Link to=""></Link> 
          </li>
          <li>
        <Link to="/Createlogin">Create Account</Link> 
          </li>
          <li>
        <Link to="/"><i className="fas fa-user primary"></i></Link> 
          </li>
        </ul>
       
        
      </div>
      </Nav>
     
     
    </Navbar>
  );
};

export default Header;
