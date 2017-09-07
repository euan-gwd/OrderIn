import React from "react";

const RegisterModal = ({ match, history }) => {
  const back = e => {
    e.stopPropagation();
    history.goBack();
  };
  return (
    <div className="modal is-active">
      <div className="modal-background" />
      <div className="modal-card">
        <header className="modal-card-head">
          <p className="modal-card-title">Modal title</p>
          <button className="delete" aria-label="close" onClick={back} />
        </header>
        <section className="modal-card-body">Hello</section>
      </div>
    </div>
  );
};

export default RegisterModal;
