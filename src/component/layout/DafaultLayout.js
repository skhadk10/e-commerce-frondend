import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Footer from "../partial/Footer";
import Header from "../partial/Header";
import SideBarNav from "../side-bar/SideBarNav";
import "./DefaultLayout.css";
const DafaultLayout = ({ childern }) => {
  return (
    <div>
      <Header />
      <div className="sidebarandlist">
        <div>
          <SideBarNav />
        </div>
        <div>{childern}</div>
      </div>
      <Footer />
    </div>
  );
};

export default DafaultLayout;
