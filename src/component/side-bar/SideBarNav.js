import React from "react";
import "./sideBarNav.style.css";

const SideBarNav = () => {
  return (
    <div className="sideBar-nav">
      <ul>
        <li>
          <i className="fas fa-tachometer-alt"></i>Dashboard
        </li>
        <li>
          <i className="fas fa-sitemap"></i>Category
        </li>
        <li>
          <i className="fas fa-table"></i> Product
        </li>
        <li>
          <i className="fas fa-shopping-cart"></i> Order
        </li>
        <li>
          <i className="fas fa-user"></i> User
        </li>
        <li>
          <i className="fas fa-cogs"></i> Account
        </li>
      </ul>
    </div>
  );
};

export default SideBarNav;
