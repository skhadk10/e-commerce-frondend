import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

import "./loginForm.style.css";
const initialState = {
  email: "",
  password: "",
};
const LoginForm = () => {
  const [Login, setLogin] = useState(initialState);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setLogin({ ...Login, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(Login);
  };
  return (
    <div className="loginpage" onSubmit={handleOnSubmit}>
      <Form className="formdisplay">
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={Login.email}
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
            value={Login.password}
            onChange={handleOnChange}
          />
        </Form.Group>
        <Row>
          <Col md={3}>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Col>
          <Col md={5}>
            <a className="text center ml-6 " href="">
              Forget password?
            </a>
          </Col>
          <Col md={4}>
            <Button variant="primary" type="submit">
              create user
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default LoginForm;
