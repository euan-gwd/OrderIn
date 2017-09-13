import React from "react";
import { Link } from "react-router-dom";
import CSSTransitionGroup from "react-addons-css-transition-group";
import { formatPrice } from "../../helpers";
import "./OrderCartStyles.css";

class OrderCart extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { gratuityAmount: 0 };
  }

  renderOrder = key => {
    const menuItem = this.props.menuItems[key];
    const count = this.props.order[key];
    const removeButton = (
      <button
        className="button is-white has-text-danger is-small"
        onClick={() => {
          this.props.removeFromOrder(key);
        }}
      >
        &#8854; remove
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
          <span>{count}</span>x {menuItem.name}
        </span>
        <span>{formatPrice(count * menuItem.price)}</span>
        {removeButton}
      </li>
    );
  };

  calculateOrder = orderIds => {
    const { menuItems, order } = this.props;
    return orderIds.reduce((prevTotal, key) => {
      const menuItem = menuItems[key];
      const count = order[key];
      const isAvailable = menuItem && menuItem.status === "available";
      if (isAvailable) {
        return prevTotal + (count * menuItem.price || 0);
      }
      return prevTotal;
    }, 0);
  };

  calculateGratuity = subtotal => {
    const { gratuityAmount } = this.state;
    const tip = Number(gratuityAmount) * 100;
    return subtotal + tip;
  };

  handleGratuityChange = evt => {
    let gratuityAmount = evt.target.value;
    if (gratuityAmount < 0) {
      return (gratuityAmount = 0);
    }
    this.setState({ gratuityAmount: gratuityAmount });
  };

  render() {
    const { restaurantName, orderOption, order, orderNumber } = this.props;
    const orderIds = Object.keys(order);
    const subtotal = this.calculateOrder(orderIds);
    const total = this.calculateGratuity(subtotal);

    return (
      <div className="store-sidebar">
        <div className="cart">
          <div className="cartitem-divider is-size-4">
            <i className="fa fa-icon fa-shopping-basket" />
            My Order
          </div>
          <div className="cart-orderNo">
            <span className="has-text-danger has-text-bold">#{orderNumber}</span> from
            <span className="has-text-danger has-text-bold"> {restaurantName} </span>
            for <span className="has-text-danger has-text-bold">{orderOption}</span>
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
              <div className="order-no-line-items has-text-grey-lighter">No items added yet. &#9785;</div>
            )}
          </div>
          <div className="cart-totals-wrapper">
            <div className="cart-subtotal-line">
              <span className="">Subtotal:</span>
              <span>{formatPrice(subtotal)}</span>
            </div>
            <div className="cart-gratuity-line">
              <label htmlFor="gratuity" className="gratuity-label">
                Add Gratuity:**
              </label>
              <input
                type="number"
                name="gratuity"
                className="gratuity-input"
                value={this.state.gratuityAmount}
                disabled={orderIds.length === 0}
                onChange={this.handleGratuityChange}
              />
            </div>
            <div className="cart-totals-line">
              <span className="">Total:</span>
              <span>{orderIds.length === 0 ? "R0.00" : formatPrice(total)}</span>
            </div>
          </div>
          <div className="cartitem-divider has-text-grey-light">
            <p>All Totals include VAT</p>
            <p>**Optional</p>
          </div>
          <div className="cartitem-divider">
            <Link
              className="button is-success is-fullwidth is-medium"
              to={{
                pathname: `/checkout`,
                state: { modal: true }
              }}
              disabled={orderIds.length === 0}
            >
              <i className="fa fa-icon fa-shopping-cart" />
              <span>Check Out</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default OrderCart;
