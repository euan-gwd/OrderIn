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
        <section className="modal-card-body">Hello</section>
        <footer className="modal-card-foot">
          <button className="delete" aria-label="close" onClick={back} />
        </footer>
      </div>
    </div>
  );
};

export default RegisterModal;
