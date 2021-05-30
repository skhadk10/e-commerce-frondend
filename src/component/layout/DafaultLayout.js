import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CategoryDisplay from "../../page/category/CategoryDisplay";

import Footer from "../partial/Footer";
import Header from "../partial/Header";
import SideBarNav from "../side-bar/SideBarNav";
import "./DefaultLayout.css";
const DafaultLayout = ({ children }) => {
  return (
    <div>
      <Header />
      <CategoryDisplay />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default DafaultLayout;
