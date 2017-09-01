import React, { Component } from "react";
import "./OrderDeliveryOptions.css";

class OrderDeliveryOptions extends Component {
  state = { selectedOption: "pickup" };

  handleOptionChange = changeEvent => {
    this.setState({ selectedOption: changeEvent.target.value });
  };

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
          <div className="deliveryAddress">Confirm address</div>
        )}
      </div>
    );
  }
}

export default OrderDeliveryOptions;
