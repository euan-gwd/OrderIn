import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo-orderin-208x50.png";

const Header = () => (
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
              <Link
                className="button is-danger is-inverted"
                to={{
                  pathname: `/register`,
                  state: { modal: true }
                }}
              >
                <i className="fa fa-icon fa-pencil-square-o" />
                <span>Register</span>
              </Link>
            </p>
            <p className="control">
              <a className="button is-danger is-inverted">
                <i className="fa fa-icon fa-lock" />
                <span>Sign In</span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
