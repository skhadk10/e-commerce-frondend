import React from "react";
import CreateLoginForm from "../../component/create-login-form/CreateLoginForm";
import DafaultLayout from '../../component/layout/DafaultLayout'

import "./login.style.css";
const CreateLogin = () => {
  return (
    <DafaultLayout>

      <div  className="login-page">  <CreateLoginForm /></div>
     
    </DafaultLayout>
  );
};

export default CreateLogin;
