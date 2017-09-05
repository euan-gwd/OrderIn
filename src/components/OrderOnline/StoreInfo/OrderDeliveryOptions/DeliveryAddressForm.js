import React from "react";
import { titleCase } from "../../../helpers";

class DeliveryAddressFrom extends React.PureComponent {
  state = { DeliveryAddress: 0 };

  handleInput = event => {
    this.setState({ DeliveryAddress: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.DeliveryAddress.length > 0) {
      const searchItems = this.state.DeliveryAddress.split(",");
      let clientsDeliveryAddress = searchItems
        .map(item => (item.startsWith(" ") ? item.trim() : item))
        .map(item => titleCase(item))
        .toString();
      this.props.clientAddress(clientsDeliveryAddress);
    }
  };
  render() {
    return (
      <div className="deliveryAddress">
        <form ref={input => (this.deliveryForm = input)} onSubmit={this.handleSubmit}>
          <p className="">Please Confirm your delivery address:</p>
          <div className="field has-addons">
            <p className="control is-expanded has-icons-left">
              <input
                className="input"
                type="text"
                placeholder="e.g. 90 Victoria Road, Woodstock, Cape Town"
                onChange={this.handleInput.bind(this)}
              />
              <span className="icon is-small is-left">
                <i className="fa fa-globe" />
              </span>
            </p>
            <div className="control">
              <button type="submit" className="button is-success">
                Confirm
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default DeliveryAddressFrom;
