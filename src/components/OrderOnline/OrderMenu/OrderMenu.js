import React, { Component } from "react";
import "./ordermenustyles.css";
import OrderMenuHeader from "./OrderMenuHeader";

class OrderMenu extends Component {
  render() {
    const { name, restaurantsData } = this.props;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === name);
    return (
      <div className="store-menu">
        <OrderMenuHeader restaurant={restaurant} />
        <div className="store-delivery">Delivery Options </div>
        <main className="store-main-content">Menu Listing</main>
        <aside className="store-sidebar">Order</aside>
      </div>
    );
  }
}

export default OrderMenu;
