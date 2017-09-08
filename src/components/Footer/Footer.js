import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer has-inset-shadow">
      <div className="container">
        <div className="content has-text-centered">
          <div className="icons-wrapper">
            <a className="facebook">
              <i className="fa fa-facebook-square fa-3x" />
            </a>
            <a className="twitter">
              <i className="fa fa-twitter-square fa-3x" />
            </a>
            <a className="pinterest">
              <i className="fa fa-pinterest-square fa-3x" />
            </a>
            <a className="instagram">
              <i className="fa fa-instagram fa-3x" />
            </a>
          </div>
          <div className="invite-wrapper">
            <div className="bordered">
              <p className="has-text-bold has-text-centered">Sign Up your Company</p>
              <p className="has-text-grey has-text-centered">
                With a corporate account, employees can order food quickly and easily.
              </p>
              <button className="button is-danger">&#9656; Sign Up</button>
            </div>
            <div className="bordered">
              <p className="has-text-bold has-text-centered">Add your restaurant to OrderIn!</p>
              <p className="has-text-grey has-text-centered">
                Sign up with South Africa’s Premier Online food ordering service.
              </p>
              <button className="button is-danger">&#9656; Sign Up</button>
            </div>
            <div>
              <p className="has-text-bold has-text-centered">Join Our Team</p>
              <p className="has-text-grey has-text-centered">
                We are looking for dynamic individuals to be part of our growth.
              </p>
              <button className="button is-danger">&#9656; View Jobs</button>
            </div>
          </div>
          <div className="contact-wrapper">
            <div className="contact-item">
              <a className="has-text-danger">
                <span className="icon is-left has-text-grey-light">
                  <i className="fa fa-envelope" />
                </span>
                customerservice@orderin.co.za
              </a>
            </div>
            <div className="contact-item">
              <a className="has-text-danger">
                <span className="icon is-left has-text-grey-light">
                  <i className="fa fa-phone-square" />
                </span>
                +27 21 201 1155
              </a>
            </div>
            <div className="contact-item has-text-grey-light">(9 AM – 10 PM)</div>
          </div>
          <p>
            <span>© Copyright OrderIn (Pty) Ltd. All rights reserved. </span>
            <a className="has-text-danger">Privacy Policy, Terms & Conditions</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
