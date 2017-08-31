import React, { Component } from "react";
import "./orderonline_styles.css";
import BreadCrumbNav from "./BreadCrumbNav";

class OrderOnline extends Component {
  render() {
    return (
      <div className="StoreMenu">
        <div className="container">
          <BreadCrumbNav />
          
        </div>
      </div>
    );
  }
}

export default OrderOnline;
