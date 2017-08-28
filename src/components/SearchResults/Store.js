import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";

const Store = ({ details, history }) => {
  const storeId = details.name.replace(/\s+/g, "");
  return (
    <li className="media">
      <div className="media-left">
        <img src={details.image} alt="logo" className="image is-64x64" />
      </div>
      <div className="media-content">
        <div className="content">
          <h5 className="title">
            {details.name}
          </h5>
          <p className="subtitle">
            {details.address}
          </p>
        </div>
      </div>
      <div className="media-right">
        <button
          className="button is-danger is-outlined"
          onClick={() => history.push(`/order-online/${storeId}`)}
        >
          Order Now
        </button>
      </div>
    </li>
  );
};

Store.contextTypes = {
  history: PropTypes.shape({
    push: PropTypes.object
  })
};

export default withRouter(Store);
