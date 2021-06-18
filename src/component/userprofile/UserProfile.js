import React, { useEffect } from "react";
import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useSelector((state) => state.Login);
  console.log("from userprofile", user);
  return (
    <div className="loginpage">
      <Form>
        hello
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Name
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" value={user.fName} disabled />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            LastName
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" readOnly Value={user.lName} disabled />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
          <Form.Label column sm="2">
            Email
          </Form.Label>
          <Col sm="10">
            <Form.Control type="text" readOnly Value={user.email} disabled />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
          <Form.Label column sm="2">
            Password
          </Form.Label>
          <Col sm="10">
            <Form.Control
              type="password"
              placeholder=""
              value={user.password}
              disabled
            />
          </Col>
        </Form.Group>
      </Form>
    </div>
  );
};

export default UserProfile;
