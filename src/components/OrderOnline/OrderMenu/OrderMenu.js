import React, { Component } from "react";
import "./ordermenustyles.css";
import OrderMenuHeader from "./OrderMenuHeader";
import OrderDeliveryOptions from "./OrderDeliveryOptions/OrderDeliveryOptions";
import OrderMenuList from "./OrderMenuList/OrderMenuList";
import { platters } from "../../../mock/sample-menu-items";

class OrderMenu extends Component {
  render() {
    const { name, restaurantsData } = this.props;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === name);
    return (
      <div className="store-menu">
        <OrderMenuHeader restaurant={restaurant} />
        <OrderDeliveryOptions />
        <OrderMenuList menuData={platters} />
        <aside className="store-sidebar">Order</aside>
      </div>
    );
  }
}

export default OrderMenu;
