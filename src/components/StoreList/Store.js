import React from "react";
const Store = ({ details }) =>
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
      <button className="button is-danger is-outlined"> Order Now </button>
    </div>
  </li>;

export default Store;
