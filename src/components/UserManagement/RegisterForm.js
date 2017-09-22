import React from "react";
import "./formstyles.css";

class RegisterForm extends React.Component {
  render() {
    return (
      <div className="user-management-container">
        <div className="user-management-body">
          <h1 className="form-header">Let's get signed up.</h1>
          <div className="form-field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="First Name" />
              <span className="icon is-small is-left">
                <i className="fa fa-user" />
              </span>
            </p>
          </div>
          <div className="form-field">
            <p className="control has-icons-left has-icons-right">
              <input className="input" type="text" placeholder="Last Name" />
              <span className="icon is-small is-left">
                <i className="fa fa-users" />
              </span>
            </p>
          </div>
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
              <input className="input" type="tel" placeholder="Mobile Number" />
              <span className="icon is-left">
                <i className="fa fa-mobile" />
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
            <p className="control has-icons-left">
              <input className="input" type="password" placeholder="Confirm Password" />
              <span className="icon is-small is-left">
                <i className="fa fa-user-secret" />
              </span>
            </p>
          </div>
          <div className="form-field">
            <div className="control">
              <input type="checkbox" className="terms" id="terms" />
              <label htmlFor="terms" className="terms-label">
                I agree to the <a className="has-text-danger">terms and conditions</a>
              </label>
            </div>
          </div>
          <div className="form-field">
            <p className="control">
              <button className="user-Button">Register</button>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default RegisterForm;
