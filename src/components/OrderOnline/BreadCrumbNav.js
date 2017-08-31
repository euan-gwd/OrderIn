import React from "react";
import { Link } from "react-router-dom";
import "./BreadCrumbNav.css";

const BreadCrumbNav = () => (
  <div className="box breadcrumb-item-centered">
    <Link to={`/`}>
      <i className="fa fa-icon fa-map-marker" />
      Enter Your Address
    </Link>
    <span className="icon is-left has-text-grey-light">
      <i className="fa fa-chevron-right" />
    </span>
    <Link to={`/`}>
      <i className="fa fa-icon fa-home" />
      Pick A Restaurant
    </Link>
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

export default BreadCrumbNav;
