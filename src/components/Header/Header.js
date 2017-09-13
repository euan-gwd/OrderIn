import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo-orderin-208x50.png";
import "./Header.css";

const Header = () => (
  <nav className="headerbar">
    <div className="headerbar-logo">
      <NavLink to="/" className="">
        <img src={Logo} alt="OrderIn Logo" width="112" height="28" />
      </NavLink>
    </div>

    <div className="headerbar-dropdown dropdown is-hoverable is-hidden-desktop">
      <div className="dropdown-trigger">
        <button className="header-button" aria-haspopup="true" aria-controls="dropdown-menu-user">
          <i className="fa fa-user-circle-o fa-lg" />
        </button>
      </div>
      <div className="dropdown-menu" id="dropdown-menu-user" role="menu">
        <div className="header-dropdown-content">
          <NavLink to="/register" className="dropdown-item">
            <i className="fa fa-icon fa-pencil-square-o" />
            <span>Register</span>
          </NavLink>
          <NavLink to="/signin" className="dropdown-item">
            <i className="fa fa-icon fa-lock" />
            <span>Login</span>
          </NavLink>
        </div>
      </div>
    </div>

    <div className="headerbar-cart is-hidden-desktop">
      <NavLink to="/cart" className="button is-danger">
        <i className="fa fa-icon fa-shopping-cart fa-lg" />
      </NavLink>
    </div>

    <div className="headerbar-buttons is-hidden-touch">
      <NavLink to="/register" className="button is-danger is-inverted">
        <i className="fa fa-icon fa-pencil-square-o" />
        <span>Register</span>
      </NavLink>
      <NavLink to="/signin" className="button is-danger is-inverted">
        <i className="fa fa-icon fa-lock" />
        <span>Login</span>
      </NavLink>
    </div>
  </nav>
);

export default Header;
