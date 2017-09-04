import React from "react";
import "./OrderMenuStyles.css";
import StoreInfo from "./StoreInfo/StoreInfo";
import OrderMenuList from "./OrderMenuList/OrderMenuList";
import OrderCart from "./OrderCart/OrderCart";
import { platters } from "../../../mock/sample-menu-items";
import { Stores } from "../../../mock/sample-stores";

class OrderMenu extends React.PureComponent {
  constructor(props) {
    super(props);
    const sessionStorageRef = sessionStorage.getItem(`restaurantName`);
    //set initial state
    sessionStorageRef
      ? (this.state = {
          restaurantName: `${sessionStorageRef}`,
          restaurantsData: Stores,
          order: {},
          orderOption: 0
        })
      : (this.state = {
          restaurantName: this.props.restaurantName,
          restaurantsData: Stores,
          order: {},
          orderOption: 0
        });
  }

  addToOrder = item => {
    console.log(item);
  };

  selectDeliveryOption = selectedDeliveryOption => {
    this.setState({ orderOption: selectedDeliveryOption });
  };

  render() {
    const { restaurantName, restaurantsData, orderOption } = this.state;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === restaurantName);
    return (
      <div className="store-menu">
        <StoreInfo restaurant={restaurant} selectDeliveryOption={this.selectDeliveryOption} />
        <OrderMenuList menuData={platters} />
        <OrderCart restaurantName={restaurantName} orderOption={orderOption} />
      </div>
    );
  }
}

export default OrderMenu;
