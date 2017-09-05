import React from "react";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { formatPrice } from "../../helpers";
import "./OrderCartStyles.css";

class OrderCart extends React.PureComponent {
  renderOrder = key => {
    const menuItem = this.props.menuItems[key];
    const count = this.props.order[key];
    const removeButton = (
      <button
        className="button is-white has-text-danger"
        onClick={() => {
          this.props.removeFromOrder(key);
        }}
      >
        &otimes;
      </button>
    );

    if (!menuItem || menuItem.status === "unavailable") {
      return (
        <li key={key}>
          Sorry, {menuItem ? menuItem.name : "menuItem"} is no longer available {removeButton}
        </li>
      );
    }

    return (
      <li key={key} className="order-line-item">
        <span>
          <CSSTransitionGroup
            component="span"
            className="count"
            transitionName="count"
            transitionEnterTimeout={250}
            transitionLeaveTimeout={250}
          >
            <span key={count}>{count}</span>
          </CSSTransitionGroup>
          x {menuItem.name}
        </span>
        {removeButton}
        <span>{formatPrice(count * menuItem.price)}</span>
      </li>
    );
  };

  render() {
    const { restaurantName, orderOption, menuItems, order } = this.props;
    const orderIds = Object.keys(order);
    const subtotal = orderIds.reduce((prevTotal, key) => {
      const menuItem = menuItems[key];
      const count = order[key];
      const isAvailable = menuItem && menuItem.status === "available";
      if (isAvailable) {
        return prevTotal + (count * menuItem.price || 0);
      }
      return prevTotal;
    }, 0);
    return (
      <div className="store-sidebar">
        <div className="cart">
          <div className="cartitem-divider is-size-4">
            <i className="fa fa-icon fa-shopping-basket" />
            My Order
          </div>
          <div className="cart-orderNo">
            <p>
              <span className="has-text-danger has-text-bold">#xxxxxx</span> from
              <span className="has-text-danger has-text-bold"> {restaurantName} </span>
              for <span className="has-text-danger has-text-bold">{orderOption || "Pickup"}</span>
            </p>
          </div>
          <div className="cartitem-itemsList">
            <CSSTransitionGroup
              component="ul"
              transitionName="order"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={500}
            >
              {orderIds.map(this.renderOrder)}
            </CSSTransitionGroup>
            {orderIds.length === 0 && (
              <div className="order-no-line-items has-text-grey-lighter">
                No items added yet. &#9785;
              </div>
            )}
          </div>
          <div className="cart-totals-wrapper">
            <div className="cart-subtotal-line">
              <span className="">Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-gratuity-line">
              <span className="">Add Gratuity:**</span>
              <button className="button is-danger is-outlined">
                <i className="fa fa-icon fa-plus-circle" />
                <span>10%</span>
              </button>
            </div>
            <div className="cart-totals-line">
              <span className="">Total:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
          </div>
          <div className="cartitem-divider has-text-grey-light">
            <p>All Totals include VAT</p>
            <p>**Optional</p>
          </div>
          <div className="cartitem-divider">
            <button type="submit" className="button is-warning is-fullwidth is-medium">
              Check Out
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderCart;
