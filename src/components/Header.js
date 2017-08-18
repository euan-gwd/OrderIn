import React from "react";
import Logo from "../images/logo-orderin-208x50.png";

const Header = () =>
  <nav className="navbar is-transparent">
    <div className="container is-fluid">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
          <img src={Logo} alt="OrderIn Logo" width="112" height="28" />
        </a>
      </div>
      <div className="navbar-end">
        <div className="navbar-item">
          <div className="field is-grouped">
            <p className="control">
              <a className="button is-outlined is-info">SignUp</a>
            </p>
            <p className="control">
              <a className="button is-outlined is-success">Login</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>;

export default Header;
