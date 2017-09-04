import React from "react";
import { formatPrice } from "../../../helpers";
import "./OrderMenuItemStyles.css";

class OrderMenuItem extends React.PureComponent {
  render() {
    const { menuItem } = this.props;

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
            <a className="button is-danger is-outlined">
              <span className="icon is-small">
                <i className="fa fa-plus-circle" />
              </span>
              <span>Add</span>
            </a>
          </div>
        </div>
      </li>
    );
  }
}

export default OrderMenuItem;
