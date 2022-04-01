import React from "react";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="navigation-bar">
        <a href="/home">
          <img src={logo} alt="" />
        </a>
        <ul className="navbar">
          <li>
            <a href="/order">Order</a>
          </li>
          <li>
            <a href="/review">Order Review</a>
          </li>
          <li>
            <a href="/inventory">Manage Inventory</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
