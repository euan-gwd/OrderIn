import React from "react";
import { formatPrice } from "../../../helpers";
import "./OrderMenuItemStyles.css";

const OrderMenuItem = ({ details }) => {
  return (
    <li className="item-grid">
      <p className="item-header has-text-grey-dark">{details.name}</p>
      <p className="item-desc has-text-grey-light">{details.description}</p>
      <div className="">
        <span className="item-price">{formatPrice(details.price)}</span>
        <a className="button is-success is-outlined">
          <span className="icon is-small">
            <i className="fa fa-plus" />
          </span>
          <span>Add</span>
        </a>
      </div>
    </li>
  );
};

export default OrderMenuItem;
