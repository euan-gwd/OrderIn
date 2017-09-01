import React, { Component } from "react";
import "./OrderDeliveryOptions.css";
import DeliveryAddressForm from "./DeliveryAddressForm";

class OrderDeliveryOptions extends Component {
  state = { selectedOption: "pickup", deliveryAddress: "pickup" };

  handleOptionChange = changeEvent => {
    this.setState({ selectedOption: changeEvent.target.value });
  };

  clientAddress(item) {
    this.setState({ deliveryAddress: item });
  }

  render() {
    return (
      <div className="store-delivery">
        <div className="options-container">
          <div>
            <input
              id="delivery"
              name="question"
              type="radio"
              className="delivery"
              value="delivery"
              checked={this.state.selectedOption === "delivery"}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="delivery">Delivery</label>
          </div>
          <div>
            <input
              id="pickup"
              name="question"
              type="radio"
              className="pickup"
              value="pickup"
              onChange={this.handleOptionChange}
              checked={this.state.selectedOption === "pickup"}
            />
            <label htmlFor="pickup">Pickup</label>
          </div>
        </div>
        {this.state.selectedOption === "delivery" && (
          <DeliveryAddressForm clientAddress={this.clientAddress.bind(this)} />
        )}
      </div>
    );
  }
}

export default OrderDeliveryOptions;
