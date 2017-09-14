import React from "react";
import "./OrderOnlineStyles.css";
import OrderBreadCrumbNav from "./OrderBreadCrumbNav/OrderBreadCrumbNav";
import StoreInfo from "./StoreInfo/StoreInfo";
import OrderMenuItem from "./OrderMenuItem/OrderMenuItem";
import OrderCart from "./OrderCart/OrderCart";
import { Stores } from "../../mockAPI/sample-stores";

class OrderOnline extends React.PureComponent {
  constructor(props) {
    super(props);
    const nameRef = sessionStorage.getItem(`restaurantName`);
    const ordersRef = sessionStorage.getItem(`CurrentOrder`);
    //check if restaurantName exists already in session storage and set initial state else get intial state from props
    nameRef
      ? (this.state = {
          restaurantName: `${nameRef}`,
          restaurantsData: Stores,
          menuItems: {},
          order: JSON.parse(ordersRef) || {}
        })
      : (this.state = {
          restaurantName: this.props.restaurantName,
          restaurantsData: Stores,
          menuItems: {},
          order: {}
        });
  }

  componentDidMount() {
    const { restaurantName, restaurantsData } = this.state;
    const storeData = restaurantsData.find(restaurant => restaurant.name === restaurantName);
    this.setState({ menuItems: storeData.menu });

    const deliveryAddressRef = sessionStorage.getItem(`deliveryAddress`);
    const selectedOrderOptionRef = sessionStorage.getItem(`selectedOrderOption`);
    selectedOrderOptionRef
      ? this.setState({
          orderOption: `${selectedOrderOptionRef}`,
          deliveryAddress: `${deliveryAddressRef}`
        })
      : this.setState({
          orderOption: this.props.orderOptions,
          deliveryAddress: this.props.deliveryAddress
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
    sessionStorage.setItem(`CurrentOrder`, JSON.stringify(nextState.order));
    sessionStorage.setItem(`menuItems`, JSON.stringify(nextState.menuItems));
    sessionStorage.setItem(`orderOpt`, nextState.orderOption);
    let cartCount = Object.keys(nextState.order).length;
    this.props.getCartCount(cartCount);
  }

  render() {
    const { restaurantName, restaurantsData, orderOption, menuItems, deliveryAddress, order } = this.state;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === restaurantName);
    const orderNo = sessionStorage.getItem(`storeUniqueOrderNo`);
    return (
      <div className="StoreMenu">
        <OrderBreadCrumbNav />
        <div className="store-menu">
          <StoreInfo
            restaurant={restaurant}
            selectDeliveryOption={this.selectDeliveryOption}
            selectedOption={orderOption || "Pickup"}
            deliveryAddress={deliveryAddress}
          />
          <div className="store-main-content">
            <header className="menu-list-header">
              <span className="is-size-5 has-text-bold">Menu</span>
              <span>
                <i className="fa fa-icon fa-leaf has-text-success" />
                Vegetarian
              </span>
            </header>
            <div>
              {Object.keys(menuItems).map(menuItem => (
                <OrderMenuItem
                  key={menuItem}
                  index={menuItem}
                  menuItem={menuItems[menuItem]}
                  addToOrder={this.addToOrder}
                />
              ))}
            </div>
            <footer className="has-text-centered spacer has-text-danger">
              <p className="icon is-large">
                <i className="fa fa-arrow-up" aria-hidden="true" />
              </p>
            </footer>
          </div>
          <div className="store-sidebar is-hidden-touch">
            <OrderCart
              restaurantName={restaurantName}
              menuItems={menuItems}
              orderOption={orderOption}
              order={order}
              orderNumber={orderNo}
              removeFromOrder={this.removeFromOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default OrderOnline;
