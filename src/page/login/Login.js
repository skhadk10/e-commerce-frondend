import React from "react";
import LoginForm from "../../component/login-form/LoginForm";
import DafaultLayout from '../../component/layout/DafaultLayout'

import "./login.style.css";
const Login = () => {
  return (
    <DafaultLayout>

    <div  className="login-page">  <LoginForm /></div>
   
  </DafaultLayout>
  );
};

export default Login;
