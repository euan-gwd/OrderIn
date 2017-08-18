import React from "react";
import Logo from "../images/logo-orderin-208x50.png";

const Header = () =>
  <nav className="navbar is-transparent has-shadow">
    <div className="container is-fluid">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} alt="OrderIn Logo" width="112" height="28" />
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field has-addons">
            <p className="control">
              <a className="button is-danger is-inverted">
                <span className="icon">
                  <i className="fa fa-pencil-square-o" />
                </span>
                <span>Register</span>
              </a>
            </p>
            <p className="control">
              <a className="button is-danger is-inverted">
                <span className="icon">
                  <i className="fa fa-lock" />
                </span>
                <span>Sign In</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>;

export default Header;
