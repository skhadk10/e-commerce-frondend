import React, { useEffect } from "react";
import {
  Alert,
  Button,
  Col,
  Form,
  Row,
  Spinner,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import pp from "../../asset/userprofile/images.png";

import "./UserProfile.css";

const UserProfile = () => {
  const { user } = useSelector((state) => state.Login);
  console.log("from userprofile", user);
  return (
    <div className="detail">
      <Card className="list-group-flush" style={{ width: "50rem" }}>
        <Card.Body style={{backgroundColor: "#9B72AA"}}>
          <Card.Title>
            {user.fName} {user.lName}
          </Card.Title>
          <Card.Text>studying at Federation University</Card.Text>
        </Card.Body>
        <div className="listitems" >
        <ul className="" >
          <li>Email: {user.email}</li>
          <li>Dapibus ac facilisis in</li>
          <li>Vestibulum at eros</li>
        </ul>
        </div>
       
        <Card.Body>
          <Card.Link href="#">Edit</Card.Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserProfile;
