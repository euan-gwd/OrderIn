import React, { Component } from "react";
import "./orderonline_styles.css";
import OrderBreadCrumbNav from "./OrderBreadCrumbNav";

class OrderOnline extends Component {
  render() {
    return (
      <div className="StoreMenu">
        <div className="container">
          <OrderBreadCrumbNav />
        </div>
      </div>
    );
  }
}

export default OrderOnline;
