import React, { Component } from "react";
import "./orderonline_styles.css";
import OrderBreadCrumbNav from "./OrderBreadCrumbNav";
import OrderMenu from "./OrderMenu";

class OrderOnline extends Component {
  render() {
    return (
      <div className="StoreMenu">
        <main className="container">
          <OrderBreadCrumbNav />
          <OrderMenu name={this.props.name} storesData={this.props.storesData} />
        </main>
      </div>
    );
  }
}

export default OrderOnline;
