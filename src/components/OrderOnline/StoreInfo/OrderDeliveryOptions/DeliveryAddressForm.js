import React from "react";
import PlacesAutocomplete from "react-places-autocomplete";
import "./DeliveryAddressFormStyles.css";

class DeliveryAddressFrom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputIsValid: null, address: this.props.deliveryAddress };
  }

  handleInputChange = address => {
    this.setState({ address });
    this.state.address.length > 6
      ? this.setState({ inputIsValid: true })
      : this.setState({ inputIsValid: false });
  };

  handleInputSelect = address => {
    this.setState({ address, inputIsValid: true });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.inputIsValid) {
      const searchItems = this.state.address.split(",");
      this.props.clientAddress(searchItems);
    } else {
      this.setState({ invalidInputSummitted: true });
    }
  };

  render() {
    const { inputIsValid, invalidInputSummitted } = this.state;

    const inputStyles = {
      root: "field",
      input: "delivery-form-input",
      autocompleteContainer: "delivery-form-autocomplete-container"
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="delivery-form-suggestion-item">
        <i className="fa fa-icon fa-map-marker" />
        <strong>{formattedSuggestion.mainText}</strong>{" "}
        <small className="has-text-grey-light">{formattedSuggestion.secondaryText}</small>
      </div>
    );

    const options = {
      componentRestrictions: { country: "za" },
      types: ["geocode"]
    };

    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleInputChange,
      placeholder: "e.g. 90 Victoria Road, Woodstock, Cape Town"
    };

    return (
      <div className="deliveryAddress">
        <form ref={input => (this.deliveryForm = input)} onSubmit={this.handleSubmit}>
          <p className="">Please Confirm your delivery address:</p>
          <div className="field has-addons">
            <div className="control is-expanded">
              <PlacesAutocomplete
                autocompleteItem={AutocompleteItem}
                onSelect={this.handleInputSelect}
                classNames={inputStyles}
                inputProps={inputProps}
                options={options}
              />
            </div>
            <div className="control">
              <button type="submit" className="button is-success" disabled={!inputIsValid}>
                Confirm
              </button>
            </div>
          </div>
          {invalidInputSummitted && (
            <span className="submit-error has-text-warning">
              Please supply correctly formatted address.
            </span>
          )}
        </form>
      </div>
    );
  }
}

export default DeliveryAddressFrom;
