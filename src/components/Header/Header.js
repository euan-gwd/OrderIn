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
    <div className="headerbar-end">
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
