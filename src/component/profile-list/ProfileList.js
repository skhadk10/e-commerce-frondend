import React from "react";
import { useSelector } from "react-redux";
import { Form, Row, Col } from "react-bootstrap";

const ProfileList = () => {
  const { loginResponse, isAuthorised } = useSelector((state) => state.Login);
  console.log("from userprofile", loginResponse);
  return (
    <>
      {loginResponse.user?.map((item, i) => {
        return (
          <Form key={i}>
            hello
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Name
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={item.fName}
                  disabled
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                LastName
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={item.lName}
                  disabled
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextEmail"
            >
              <Form.Label column sm="2">
                Email
              </Form.Label>
              <Col sm="10">
                <Form.Control
                  plaintext
                  readOnly
                  defaultValue={item.email}
                  disabled
                />
              </Col>
            </Form.Group>
            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formPlaintextPassword"
            >
              <Form.Label column sm="2">
                Password
              </Form.Label>
              <Col sm="10">
                <Form.Control type="password" placeholder="" />
              </Col>
            </Form.Group>
          </Form>
        );
      })}
    </>
  );
};

export default ProfileList;
