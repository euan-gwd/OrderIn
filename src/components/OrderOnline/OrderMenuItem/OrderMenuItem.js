import React from "react";
import { formatPrice } from "../../helpers";
import "./OrderMenuItemStyles.css";

class OrderMenuItem extends React.PureComponent {
  render() {
    const { menuItem, addToOrder, index } = this.props;
    const isAvailable = menuItem.status === "available";
    const buttonText = isAvailable ? (
      <span>
        <i className="fa fa-icon fa-plus-circle" />
        Add
      </span>
    ) : (
      <span>
        <i className="fa fa-icon fa-exclamation-triangle" />
        Sold Out
      </span>
    );
    return (
      <li className="item-grid">
        <div className="item-name has-text-grey-darker">{menuItem.name}</div>
        <div className="item-desc has-text-grey">{menuItem.description}</div>
        <div className="item-veg">
          {menuItem.vegetarian && <i className="fa fa-icon fa-leaf has-text-success" />}
        </div>
        <div className="item-actions">
          <div className="item-group">
            <span className="item-price">{formatPrice(menuItem.price)}</span>
            <button
              className="button is-danger is-outlined"
              disabled={!isAvailable}
              onClick={() => addToOrder(index)}
            >
              {buttonText}
            </button>
          </div>
        </div>
      </li>
    );
  }
}

export default OrderMenuItem;
