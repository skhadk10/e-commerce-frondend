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
const EditUserProfile = () => {
  // const history = useHistory();
  const dispatch = useDispatch();

  const { isLoading, loginResponse, user } = useSelector((state) => state.Login);
  const [EditProfile, setEditPofile] = useState(initialState);

  // const token = sessionStorage.getItem("accessJWT");
  // useEffect(() => {
  //   token && history.push("/dashboard");
  // }, [loginResponse]);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log({ name, value });
    setEditPofile({ ...EditProfile, [name]: value });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!EditProfile.email || !EditProfile.password) {
      alert("plz fill up all the input field");
    }
    console.log(EditProfile)
    dispatch(setEditPofile(EditProfile));
    console.log(EditProfile)
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
            value={EditProfile.fName}
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
            value={EditProfile.lName}
            onChange={handleOnChange}
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            name="email"
            type="email"
            value={EditProfile.email}
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
            value={EditProfile.password}
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

export default EditUserProfile;
