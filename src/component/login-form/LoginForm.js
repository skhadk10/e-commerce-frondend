import React, { useEffect, useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory,useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./loginForm.style.css";
import {sendLogin} from '../../page/login/loginAction.js'
import {userAutoLogin} from '../../page/login/loginAction'


const initialState = {
  email: "rickeykhd@gmail.com",
  password: "1236",
};
const LoginForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, loginResponse,isAuthorised } = useSelector((state) => state.Login);
  const [login, setLogin] = useState(initialState);

  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  useEffect(() => {
     isAuthorised && history.replace(from)
     !isAuthorised && dispatch(userAutoLogin());
  }, [dispatch, from, history, isAuthorised]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setLogin({ ...login, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!login.email || !login.password) {
      alert("plz fill up all the input field");
    }
    dispatch( sendLogin(login));
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
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={login.email}
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
            value={login.password}
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

export default LoginForm;
