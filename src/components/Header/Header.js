import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./logo-orderin-208x50.png";
import "./Header.css";

const Header = () => (
  <nav className="navbar is-transparent has-shadow">
    <div className="navcontainer">
      <div className="navbar-brand">
        <NavLink to="/" className="navbar-item">
          <img src={Logo} alt="OrderIn Logo" width="112" height="28" />
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field has-addons">
            <p className="control">
              <NavLink to="/register" className="button is-danger is-inverted">
                <i className="fa fa-icon fa-pencil-square-o" />
                <span>Register</span>
              </NavLink>
            </p>
            <p className="control">
              <NavLink to="/signin" className="button is-danger is-inverted">
                <i className="fa fa-icon fa-lock" />
                <span>Login</span>
              </NavLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
