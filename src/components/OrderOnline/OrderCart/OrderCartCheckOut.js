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
            close
          </button>
        </header>
        <section className="modal-card-body">
          <h1 className="title has-text-centered">Hire Me</h1>
          <div className="hire-icons-wrapper">
            <a className="hire-icon">
              <i className="fa fa-github-square fa-3x" />
            </a>
            <a className="hire-icon">
              <i className="fa fa-linkedin-square fa-3x" />
            </a>
            <a className="hire-icon">
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
