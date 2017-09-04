import React from "react";
import "./OrderCartStyles.css";

class OrderCart extends React.PureComponent {
  render() {
    return (
      <div className="store-sidebar">
        <div className="cart-divider is-size-4">My Order</div>
        <div className="cart-orderNo">
          <span>Order Number:</span>
          <span>#xxxxxx</span>
        </div>
        <div className="cart-divider has-text-grey-lighter">
          <span>No items added yet.</span>
          <i className="fa icon-padding fa-frown-o" aria-hidden="true" />
        </div>
        <div className="cart-totals-wrapper">
          <div className="cart-totals-line">
            <span className="">Subtotal:*</span>
            <span>R0.00</span>
          </div>
          <div className="cart-totals-line">
            <span className="">Add Gratuity:**</span>
            <button className="button is-danger is-outlined">
              <span className="icon is-small">
                <i className="fa fa-plus-circle" />
              </span>
              <span>10%</span>
            </button>
          </div>
          <div className="cart-totals-line">
            <span className="">Total:</span>
            <span>R0.00</span>
          </div>
        </div>
        <div className="">*All Totals include VAT **Optional</div>
        <div className="cartitem-spacing">
          <button type="submit" className="button is-warning is-fullwidth is-medium">
            Check Out
          </button>
        </div>
      </div>
    );
  }
}

export default OrderCart;
