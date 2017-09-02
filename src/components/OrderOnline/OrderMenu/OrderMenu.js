import React, { Component } from "react";
import "./ordermenustyles.css";
import OrderMenuHeader from "./OrderMenuHeader";
import OrderDeliveryOptions from "./OrderDeliveryOptions/OrderDeliveryOptions";
import OrderMenuList from "./OrderMenuList/OrderMenuList";
import { platters } from "../../../mock/sample-menu-items";
import { Stores } from "../../../mock/sample-stores";

class OrderMenu extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurantName: 0, restaurantsData: 0 };
  }

  componentWillMount() {
    this.setState({ restaurantName: this.props.restaurantName, restaurantsData: Stores });
    const sessionStorageRef = sessionStorage.getItem(`restaurantName`);
    if (sessionStorageRef) {
      this.setState({
        restaurantName: `${sessionStorageRef}`
      });
    }
  }

  render() {
    const { restaurantName, restaurantsData } = this.state;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === restaurantName);
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
