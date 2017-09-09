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
          <i className="fa breadcrumb-icon fa-map-marker" />
          Enter Your Address
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
          <i className="fa breadcrumb-icon fa-home" />
          Pick A Restaurant
        </a>
      )}
    />
    <i className="fa breadcrumb-icon fa-chevron-right" />
    <span className="breadcrumb-link-active">
      <i className="fa fa-icon fa-cutlery" />
      Order Food
    </span>
    <i className="fa breadcrumb-icon fa-chevron-right" />
    <span className="breadcrumb-link-inactive">
      <i className="fa fa-icon fa-shopping-cart" />
      CheckOut
    </span>
  </div>
);

export default OrderBreadCrumbNav;
