import React from "react";
import "./OrderDeliveryOptions.css";
import DeliveryAddressForm from "./DeliveryAddressForm";

class OrderDeliveryOptions extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.selectedOption || "Pickup",
      deliveryAddress: this.props.deliveryAddress || "",
      confirmed: false
    };
  }

  handleOptionChange = changeEvent => {
    this.setState({ selectedOption: changeEvent.target.value });
    this.props.selectDeliveryOption(changeEvent.target.value);
  };

  clientAddress = item => {
    this.setState({ deliveryAddress: item });
    this.setState({ confirmed: true });
    sessionStorage.setItem(`deliveryAddress`, item);
  };

  render() {
    const { selectedOption, confirmed } = this.state;
    return (
      <div className="store-delivery">
        <div className="options-container">
          <div>
            <input
              id="delivery"
              name="question"
              type="radio"
              className="order-delivery"
              value="Delivery"
              checked={selectedOption === "Delivery"}
              onChange={this.handleOptionChange}
            />
            <label htmlFor="delivery">Delivery</label>
          </div>
          <div>
            <input
              id="pickup"
              name="question"
              type="radio"
              className="order-pickup"
              value="Pickup"
              onChange={this.handleOptionChange}
              checked={selectedOption === "Pickup"}
            />
            <label htmlFor="pickup">Pickup</label>
          </div>
        </div>
        {selectedOption === "Delivery" &&
        !confirmed && (
          <DeliveryAddressForm clientAddress={this.clientAddress} deliveryAddress={this.state.deliveryAddress} />
        )}
      </div>
    );
  }
}

export default OrderDeliveryOptions;
