import React from "react";
import { Route } from "react-router-dom";
import "./OrderBreadCrumbNav.css";

const OrderBreadCrumbNav = () => (
  <div className="navbox breadcrumb-item-centered">
    <Route
      render={props => (
        <a
          onClick={() => {
            props.history.push(`/`);
          }}
        >
          <i className="fa fa-icon fa-map-marker" />
          Enter Your Address
        </a>
      )}
    />
    <span className="icon is-left has-text-grey-light">
      <i className="fa fa-chevron-right" />
    </span>
    <Route
      render={props => (
        <a
          onClick={() => {
            props.history.goBack();
          }}
        >
          <i className="fa fa-icon fa-home fa-lg" />
          Pick A Restaurant
        </a>
      )}
    />
    <span className="icon is-left has-text-grey-light">
      <i className="fa fa-chevron-right" />
    </span>
    <span className="has-text-danger">
      <i className="fa fa-icon fa-cutlery" />
      Order Food
    </span>
    <span className="icon is-left has-text-grey-light">
      <i className="fa fa-chevron-right" />
    </span>
    <span className="has-text-grey-light">
      <i className="fa fa-icon fa-shopping-cart" />
      CheckOut
    </span>
  </div>
);

export default OrderBreadCrumbNav;
