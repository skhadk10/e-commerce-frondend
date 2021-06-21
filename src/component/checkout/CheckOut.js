import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CheckOut.css";
import { sendLogin } from "../../page/login/loginAction.js";
import { CheckOutAction } from "../../page/CheckOut/CheckOutAction";

const product = {
  cart: [
    {
      name: "almond milk",
      qty: 5,
      price: 10,
    },
    {
      name: "cow milk",
      qty: 15,
      price: 20,
    },
  ],
  total: 20 * 100,
};

const initialState = {
  country: "",
  fName: "",
  lName: "",
  streetAddress: "",
  streetAddress2: "",
  suburb: "",
  state: "",
  postCode: "",
  email: "",
  confEmail: "",
  countryCode: "",
  phoneNumber: "",
};

const CheckOut = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, loginResponse, isAuthorised } = useSelector(
    (state) => state.Login
  );
  const [checkout, setCheckout] = useState(initialState);

  // useEffect(() => {
  //   isAuthorised && history.replace(from);
  //   !isAuthorised && dispatch(userAutoLogin());
  // }, [isAuthorised]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setCheckout({ ...checkout, [name]: value });
  };
  const handleOnPayment = async (token) => {
    const data = {
      token,
      product,
    };

    const result = await axios.post(
      "http://localhost:5001/api/v1/payment",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!checkout.email || !checkout.password) {
      alert("plz fill up all the input field");
    }
    dispatch(CheckOutAction(checkout));
  };
  return (
    <div className="loginpage" onSubmit={handleOnSubmit}>
      {isLoading && <Spinner variant="primary" animation="border"></Spinner>}

      {loginResponse?.message && (
        <Alert
          variant={loginResponse?.status === "success" ? "success" : "danger"}
        >
          {loginResponse?.message}
        </Alert>
      )}
      <Form className="formdisplay">
        <Form.Group>
          <Form.Label>First Name</Form.Label>
          <Form.Control
            name="fName"
            type="text"
            value={checkout.fName}
            placeholder="Enter email"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lName"
            type="text"
            value={checkout.lName}
            placeholder="Enter email"
            onChange={handleOnChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={checkout.email}
            placeholder="Enter email"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            value={checkout.password}
            onChange={handleOnChange}
          />
        </Form.Group>
        <div className="container">
          <StripeCheckout
            token={handleOnPayment}
            stripeKey={process.env.REACT_APP_STRIP_KEY}
            name="Pay by card "
            amount={product.total}
          >
            <Button variant="info" type="submit">
              Pay now
            </Button>
          </StripeCheckout>
        </div>
      </Form>
    </div>
  );
};

export default CheckOut;
