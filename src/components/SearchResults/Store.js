import React from "react";
import { Link } from "react-router-dom";

const Store = ({ details }) => {
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
        <Link to={`/order-online/${storeId}`}>
          <button className="button is-danger is-outlined"> Order Now </button>
        </Link>
      </div>
    </li>
  );
};

export default Store;
