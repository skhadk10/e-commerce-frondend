import React, { useState } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "./CreateloginForm.style.css";
import {sendCreatelogin} from '../../page/create-login/CreateLoginAction.js'

const initialState = {
  fName:"",
  lName:"",
  email: "rickeykhd@gmail.com",
  password: "1236",
};
const CreateLoginForm = () => {
  // const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, loginResponse } = useSelector((state) => state.newUser);
  const [createlogin, setCreateLogin] = useState(initialState);

  // const token = sessionStorage.getItem("accessJWT");
  // useEffect(() => {
  //   token && history.push("/dashboard");
  // }, [loginResponse]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setCreateLogin({ ...createlogin, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!createlogin.email || !createlogin.password) {
      alert("plz fill up all the input field");
    }
    console.log(createlogin)
    dispatch(sendCreatelogin(createlogin));
    console.log(createlogin)
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
            value={createlogin.fName}
            placeholder="Enter first Name"
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            name="lName"
            type="text"
            placeholder="Enter Last Name"
            value={createlogin.lName}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={createlogin.email}
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
            value={createlogin.password}
            onChange={handleOnChange}
          />
        </Form.Group>
      
            <Button variant="primary" type="submit">
              Submit
            </Button>
        
      </Form>
    </div>
  );
};

export default CreateLoginForm;
