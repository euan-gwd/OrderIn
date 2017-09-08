import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo-orderin-208x50.png";

const Header = () => (
  <nav className="navbar is-transparent has-shadow">
    <div className="container is-fluid">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item">
          <img src={Logo} alt="OrderIn Logo" width="112" height="28" />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field has-addons">
            <p className="control">
              <Link to="/register" className="button is-danger is-inverted">
                <i className="fa fa-icon fa-pencil-square-o" />
                <span>Register</span>
              </Link>
            </p>
            <p className="control">
              <Link to="/signin" className="button is-danger is-inverted">
                <i className="fa fa-icon fa-lock" />
                <span>Login</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
