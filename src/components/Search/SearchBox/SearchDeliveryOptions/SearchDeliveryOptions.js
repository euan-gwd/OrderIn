import React from "react";
import "./SearchDeliveryOptions.css";

class SearchDeliveryOptions extends React.Component {
  state = { selectedOption: "Pickup", deliveryAddress: "Pickup" };

  handleOptionChange = changeEvent => {
    this.setState({ selectedOption: changeEvent.target.value });
    this.props.selectDeliveryOption(changeEvent.target.value);
  };

  clientAddress = item => {
    this.setState({ deliveryAddress: item });
  };

  render() {
    return (
      <div className="search-options-wrapper">
        <div className="search-option-container">
          <div>
            <input
              id="delivery"
              name="question"
              type="radio"
              className="delivery"
              value="Delivery"
              checked={this.state.selectedOption === "Delivery"}
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
              value="Pickup"
              onChange={this.handleOptionChange}
              checked={this.state.selectedOption === "Pickup"}
            />
            <label htmlFor="pickup">Pickup</label>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchDeliveryOptions;
