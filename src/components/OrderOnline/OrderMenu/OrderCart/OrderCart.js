import React from "react";
import "./OrderCartStyles.css";

class OrderCart extends React.PureComponent {
  render() {
    const { restaurantName } = this.props;
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
              for <span className="has-text-danger has-text-bold">Pickup</span>
            </p>
          </div>
          <div className="cartitem-items has-text-grey-lighter">
            <span>No items added yet.</span>
            <i className="fa icon-padding fa-frown-o" aria-hidden="true" />
          </div>
          <div className="cart-totals-wrapper">
            <div className="cart-subtotal-line">
              <span className="">Subtotal:</span>
              <span>R0.00</span>
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
              <span>R0.00</span>
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
