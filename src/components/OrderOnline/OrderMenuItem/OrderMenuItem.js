import React from "react";
import { formatPrice } from "../../helpers";
import "./OrderMenuItemStyles.css";

class OrderMenuItem extends React.PureComponent {
  render() {
    const { menuItem, addToOrder, index } = this.props;
    const isAvailable = menuItem.status === "available";
    return (
      <li className="item-grid">
        <div className="item-name has-text-bold">{menuItem.name}</div>
        <div className="item-desc has-text-grey">{menuItem.description}</div>
        <div className="item-veg">{menuItem.vegetarian && <i className="fa fa-icon fa-leaf has-text-success" />}</div>
        <div className="item-actions" disabled={!isAvailable}>
          {isAvailable ? (
            <div className="item-group">
              <span className="item-price">{formatPrice(menuItem.price)}</span>
              <button className="button is-outlined" onClick={() => addToOrder(index)}>
                <span className="has-text-success">
                  <i className="fa fa-icon fa-cart-plus" />
                  <span className="">Add</span>
                </span>
              </button>
            </div>
          ) : (
            <div className="item-group">
              <span className="item-price">{formatPrice(menuItem.price)}</span>
              <span className="item-disabled-button">
                <i className="fa fa-icon fa-exclamation-triangle" />
                <span>Sold Out!</span>
              </span>
            </div>
          )}
        </div>
      </li>
    );
  }
}

export default OrderMenuItem;
