import React, { Component } from "react";
import "./ordermenustyles.css";
import OrderMenuHeader from "./OrderMenuHeader";
import OrderDeliveryOptions from "./OrderDeliveryOptions";
import OrderMenuList from "./OrderMenuList";

class OrderMenu extends Component {
  render() {
    const { name, restaurantsData } = this.props;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === name);
    return (
      <div className="store-menu">
        <OrderMenuHeader restaurant={restaurant} />
        <OrderDeliveryOptions />
        <OrderMenuList />
        <aside className="store-sidebar">Order</aside>
      </div>
    );
  }
}

export default OrderMenu;
