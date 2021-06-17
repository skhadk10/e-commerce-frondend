import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

import "./header.styles.css";
import { LogOut, userAutoLogin } from "../../page/login/loginAction";
import { useDispatch, useSelector } from "react-redux";
const Header = () => {
  const [searchterm, setSearchterm] = useState("");
  const dispatch = useDispatch();

  const history = useHistory();

  const { loginResponse, isAuthorised,user } = useSelector((state) => state.Login);
  const { cartList } = useSelector((state) => state.cartListItem);

  // const location = useLocation();
  // let { from } = location.state || { from: { pathname: "/" } };

  useEffect(() => {
    // isAuthorised && history.replace(from);
<<<<<<< HEAD
    if(sessionStorage.getItem("accessJWT") && !isAuthorised){
 dispatch(userAutoLogin())
=======
    if (!isAuthorised && sessionStorage.getItem("accessJWT")) {
      dispatch(userAutoLogin());
>>>>>>> 3a3ee04fd054906f22a9a122f87f85117b8c117e
    }
  }, [isAuthorised]);

  const handleOnLogOut = () => {
    console.log("from header logout ",loginResponse?.user);
    dispatch(LogOut(loginResponse?.user));
    history.push("/");
  };
  const totalQty = () => {
    let itemcount = 0;
    cartList.forEach((item) => {
      itemcount = itemcount + item.qtyselected;
    });
    return itemcount;
  };
  const handleOnSearch = (e) => {
    const { name, value } = e.target;

    setSearchterm({ ...searchterm, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Navbar bg="success" variant="light" onSubmit={handleOnSubmit}>
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
      <Form className="d-flex">
        <FormControl
          name="name"
          type="search"
          onChange={handleOnSearch}
          value={searchterm.name}
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav>
        <div className="rightnavbar">
          <ul>
            <li>
              <Link to="/cart">
                <i class="fas fa-shopping-cart">{totalQty()}</i>
              </Link>
            </li>
            <li>
              {isAuthorised ? (
                <div>
                  <Link
                    onClick={() => {
                      handleOnLogOut();
                    }}
                  >
                    logOut
                  </Link>

                  <Link to="/profile"> User </Link>
                </div>
              ) : (
                <div>
                  <Link to="/signIn">SignIn</Link>

                  <Link to="/Createlogin">signUp</Link>
                </div>
              )}
            </li>
          </ul>
        </div>
      </Nav>
    </Navbar>
  );
};

export default Header;
