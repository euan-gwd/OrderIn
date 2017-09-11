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
          <i className="fa breadcrumb-icon fa-map-marker is-hidden-mobile" />
          <span className="plh">Enter Your Address</span>
        </a>
      )}
    />
    <i className="fa breadcrumb-icon fa-chevron-right" />
    <Route
      render={props => (
        <a
          onClick={() => {
            props.history.goBack();
          }}
        >
          <i className="fa breadcrumb-icon fa-home is-hidden-mobile" />
          <span className="plh">Pick A Restaurant</span>
        </a>
      )}
    />
    <i className="fa breadcrumb-icon fa-chevron-right" />
    <span className="has-text-danger">
      <i className="fa fa-cutlery is-hidden-mobile" />
      <span className="plh">Order Food</span>
    </span>
    <i className="fa breadcrumb-icon fa-chevron-right" />
    <span className="has-text-grey-light">
      <i className="fa fa-shopping-cart is-hidden-mobile" />
      <span className="plh">CheckOut</span>
    </span>
  </div>
);

export default OrderBreadCrumbNav;
