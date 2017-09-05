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
    const nameRef = sessionStorage.getItem(`restaurantName`);
    const ordersRef = sessionStorage.getItem(`currentOrder`);
    //check if restaurantName exists already in session storage and set initial state else get intial state from props
    nameRef
      ? (this.state = {
          restaurantName: `${nameRef}`,
          restaurantsData: Stores,
          menuItems: sampleDishes,
          order: JSON.parse(ordersRef) || {},
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
    const increaseOrder = { ...this.state.order };
    increaseOrder[key] = increaseOrder[key] + 1 || 1;
    this.setState({ order: increaseOrder });
  };

  removeFromOrder = key => {
    const decreaseOrder = { ...this.state.order };
    decreaseOrder[key] > 1 ? (decreaseOrder[key] -= 1) : delete decreaseOrder[key];
    this.setState({ order: decreaseOrder });
  };

  selectDeliveryOption = selectedDeliveryOption => {
    this.setState({ orderOption: selectedDeliveryOption });
  };

  componentWillUpdate(nextProps, nextState) {
    sessionStorage.setItem(`currentOrder`, JSON.stringify(nextState.order));
  }

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
