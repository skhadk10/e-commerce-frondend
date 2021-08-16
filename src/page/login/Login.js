import React from "react";
import CategoryListTable from "../../component/CategoryListTable/CategryListTable";
import CategoryProduct from "../../component/CategoryProduct/CategoryProduct";
import LoginForm from "../../component/login-form/LoginForm";
import Header from "../../component/partial/Header";
import CategoryDisplay from "../category/CategoryDisplay";

import "./login.style.css";
const Login = () => {
  return (
    <div>
      <Header />
      <CategoryListTable/>
      <div className="login-page">
      
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
