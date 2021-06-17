import React, { useEffect } from "react";
// import { Alert, Button, Col, Form, Row, Spinner } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserProfileAction } from "../../page/profile/ProfileAction";
import "./UserProfile.css";



const UserProfile = () => {
 
  const {user} = useSelector(state => state.Login)
console.log("from userprofileform",user);

  return (
    <div className="loginpage">
      
     hello user
       </div>
  );
};

export default UserProfile;
