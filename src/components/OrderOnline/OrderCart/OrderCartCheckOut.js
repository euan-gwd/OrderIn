import React from "react";

const OrderCartCheckOut = ({ match, history }) => {
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">
            <span className="has-text-white">
              <i className="fa fa-icon fa-shopping-cart" />
              CheckOut
            </span>
          </p>
          <button className="button is-danger has-text-white" aria-label="close" onClick={back}>
            &#10007;close
          </button>
        </header>
        <section className="modal-card-body">
          <p className="title has-text-centered">Hire Me</p>
          <p className="has-text-centered"> If you like what you see, please get in touch</p>
          <div className="hire-icons-wrapper">
            <a href="https://github.com/euan-gwd" className="hire-icon">
              <i className="fa fa-github-square fa-3x" />
            </a>
            <a href="https://za.linkedin.com/in/euangreenwood" className="hire-icon">
              <i className="fa fa-linkedin-square fa-3x" />
            </a>
            <a href="mailto:contact@euangreenwood.com" className="hire-icon">
              <i className="fa fa-envelope-square fa-3x" />
            </a>
          </div>
        </section>
        <footer className="modal-card-foot">
          <div className="" />
        </footer>
      </div>
    </div>
  );
};

export default OrderCartCheckOut;
