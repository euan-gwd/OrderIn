import React from "react";
import "./OrderOnlineStyles.css";
import OrderBreadCrumbNav from "./OrderBreadCrumbNav/OrderBreadCrumbNav";
import StoreInfo from "./StoreInfo/StoreInfo";
import OrderMenuItem from "./OrderMenuItem/OrderMenuItem";
import OrderCart from "./OrderCart/OrderCart";
import sampleDishes from "../../mockAPI/sample-dishes";
import { Stores } from "../../mockAPI/sample-stores";

class OrderOnline extends React.PureComponent {
  constructor(props) {
    super(props);
    const sessionStorageRef = sessionStorage.getItem(`restaurantName`);
    //check if restaurantName exists already in session storage and set initial state else set intial state from props
    sessionStorageRef
      ? (this.state = {
          restaurantName: `${sessionStorageRef}`,
          restaurantsData: Stores,
          menuItems: sampleDishes,
          order: {},
          orderOption: 0
        })
      : (this.state = {
          restaurantName: this.props.restaurantName,
          restaurantsData: Stores,
          menuItems: sampleDishes,
          order: {},
          orderOption: 0
        });
  }

  addToOrder = key => {
    const order = { ...this.state.order };
    order[key] = order[key] + 1 || 1;
    this.setState({ order });
  };

  removeFromOrder = key => {
    const order = { ...this.state.order };
    order[key] > 1 ? (order[key] -= 1) : delete order[key];
    this.setState({ order });
  };

  selectDeliveryOption = selectedDeliveryOption => {
    this.setState({ orderOption: selectedDeliveryOption });
  };

  render() {
    const { restaurantName, restaurantsData, orderOption, menuItems } = this.state;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === restaurantName);
    return (
      <div className="StoreMenu">
        <main className="container">
          <OrderBreadCrumbNav />
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
                {Object.keys(menuItems).map(menuItem => (
                  <OrderMenuItem
                    key={menuItem}
                    index={menuItem}
                    menuItem={menuItems[menuItem]}
                    addToOrder={this.addToOrder}
                  />
                ))}
              </ul>
            </div>
            <OrderCart
              restaurantName={restaurantName}
              menuItems={menuItems}
              orderOption={orderOption}
              order={this.state.order}
              removeFromOrder={this.removeFromOrder}
            />
          </div>
        </main>
      </div>
    );
  }
}

export default OrderOnline;
