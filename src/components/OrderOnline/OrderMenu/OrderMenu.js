import React from "react";
import "./OrderMenuStyles.css";
import OrderMenuHeader from "./OrderMenuHeader/OrderMenuHeader";
import OrderDeliveryOptions from "./OrderDeliveryOptions/OrderDeliveryOptions";
import OrderMenuList from "./OrderMenuList/OrderMenuList";
import { platters } from "../../../mock/sample-menu-items";
import { Stores } from "../../../mock/sample-stores";

class OrderMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    const sessionStorageRef = sessionStorage.getItem(`restaurantName`);
    sessionStorageRef
      ? (this.state = {
          restaurantName: `${sessionStorageRef}`,
          restaurantsData: Stores
        })
      : (this.state = { restaurantName: this.props.restaurantName, restaurantsData: Stores });
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
