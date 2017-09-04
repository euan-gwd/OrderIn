import React from "react";
import "./OrderMenuStyles.css";
import StoreInfo from "./StoreInfo/StoreInfo";
import OrderMenuItem from "./OrderMenuItem/OrderMenuItem";
import OrderCart from "./OrderCart/OrderCart";
import { platters } from "../../../mockAPI/sample-menu-items";
import { Stores } from "../../../mockAPI/sample-stores";

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
    const menuData = platters;
    return (
      <div className="store-menu">
        <StoreInfo restaurant={restaurant} selectDeliveryOption={this.selectDeliveryOption} />
        <div className="store-main-content">
          <header className="menu-list-header">
            <span className="is-size-4">Menu</span>
            <span>
              <i className="fa fa-icon fa-leaf has-text-success" />
              Vegetarian
            </span>
          </header>
          <ul>
            {menuData.map(menuItem => <OrderMenuItem key={menuItem.name} menuItem={menuItem} />)}
          </ul>
        </div>
        <OrderCart restaurantName={restaurantName} orderOption={orderOption} />
      </div>
    );
  }
}

export default OrderMenu;
