import React from "react";
import { Redirect } from "react-router-dom";
import PlacesAutocomplete from "react-places-autocomplete";
import "./SearchBoxStyles.css";
import SearchDeliveryOptions from "./SearchDeliveryOptions/SearchDeliveryOptions";

class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      fireRedirect: false,
      inputIsValid: null,
      invalidInputSummitted: false,
      orderOption: "Pickup",
      address: ""
    };
  }

  handleInputChange = address => {
    this.setState({ address });
    this.state.address.length > 6 ? this.setState({ inputIsValid: true }) : this.setState({ inputIsValid: false });
  };

  handleInputSelect = address => {
    this.setState({ address, inputIsValid: true });
  };

  handleDeliveryOption = selectedDeliveryOption => {
    this.setState({ orderOption: selectedDeliveryOption });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { address, orderOption, inputIsValid } = this.state;
    if (inputIsValid) {
      this.props.searchSelected(address, orderOption);
      this.setState({ fireRedirect: true });
    } else {
      this.setState({ invalidInputSummitted: true });
    }
  };

  render() {
    const { fireRedirect, inputIsValid } = this.state;

    const inputStyles = {
      input: "searchBox-input",
      autocompleteContainer: "searchBox-autocomplete-container"
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="searchBox-suggestion-item">
        <i className="fa fa-icon fa-map-marker" />
        <strong className="mr">{formattedSuggestion.mainText}</strong>
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
      <div className="searchBox-container">
        <h1 className="searchBox-title">
          <span className="has-text-bold has-text-white">Simply</span> order food online.
        </h1>

        <form ref={input => (this.searchForm = input)} className="searchBox-form" onSubmit={this.handleSubmit}>
          <SearchDeliveryOptions selectDeliveryOption={this.handleDeliveryOption} />
          <h4 className="searchBox-header is-size-6-touch is-size-5-desktop has-text-centered">
            Enter your street address & suburb:
          </h4>
          <PlacesAutocomplete
            autocompleteItem={AutocompleteItem}
            onSelect={this.handleInputSelect}
            classNames={inputStyles}
            inputProps={inputProps}
            options={options}
          />
          <button type="submit" className="searchButton" disabled={!inputIsValid}>
            Find Restaurants
          </button>
        </form>
        {fireRedirect && <Redirect push to="/Search" />}
      </div>
    );
  }
}

export default SearchBox;
