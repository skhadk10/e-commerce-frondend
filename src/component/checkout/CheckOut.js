import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CheckOut.css";
import { sendLogin } from "../../page/login/loginAction.js";
import { CheckOutAction } from "../../page/CheckOut/CheckOutAction";

const initialState = {
  email: "rickeykhd@gmail.com",
  password: "1236",
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
        <Row>
          <Col md={6}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col md={6}>
            <a className="text center ml-6 " href=" ">
              Forget password?
            </a>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default CheckOut;
