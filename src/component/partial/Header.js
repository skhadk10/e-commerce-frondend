import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

import "./header.styles.css";
import { LogOut } from "../../page/login/loginAction";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const dispatch = useDispatch()

  const history = useHistory()

  const {loginResponse} = useSelector(state => state.Login)
  const {cartList} = useSelector(state => state.cartListItem)

  const handleOnLogOut=()=>{
    dispatch(LogOut(loginResponse?.result))
    history.push("/")
  }

  const totalQty=()=>{
    let itemcount=0
  cartList.forEach(item => {
    itemcount= itemcount +item.qtyselected
  });
  return itemcount
  }
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
                <i class="fas fa-shopping-cart">{totalQty()}</i> 
              </Link>
            </li>
            <li>
              <Link onClick={()=>{handleOnLogOut()}}>
                logOut
              </Link>
            </li>
          </ul>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
