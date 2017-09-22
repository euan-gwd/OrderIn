import React from "react";
import "./formstyles.css";

class SignInForm extends React.PureComponent {
  render() {
    return (
      <div className="user-management-container">
        <div className="user-management-body">
          <h1 className="form-header">Log in and get ordering.</h1>
          <div className="form-field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="email" placeholder="Email" />
              <span className="icon is-small is-left">
                <i className="fa fa-envelope" />
              </span>
            </p>
          </div>
          <div className="form-field">
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Password" />
              <span className="icon is-small is-left">
                <i className="fa fa-user-secret" />
              </span>
            </p>
          </div>
          <div className="form-field">
            <div className="control">
              <input type="checkbox" className="terms" id="terms" />
              <label htmlFor="terms" className="terms-label">
                Remember Me?
              </label>
            </div>
          </div>
          <div className="form-field">
            <p className="control">
              <button className="user-Button">Sign In</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default SignInForm;
