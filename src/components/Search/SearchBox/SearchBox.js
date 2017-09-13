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
    const { fireRedirect, inputIsValid, invalidInputSummitted } = this.state;

    const inputStyles = {
      root: "field",
      input: "search-input",
      autocompleteContainer: "search-autocomplete-container"
    };

    const AutocompleteItem = ({ formattedSuggestion }) => (
      <div className="search-suggestion-item">
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
      <div className="hero is-danger">
        <div className="hero-body headerBar-spacer">
          <div className="container">
            <h1 className="subtitle has-text-centered is-size-4-touch is-size-2-desktop">
              <strong>Simply</strong> order food online.
            </h1>
            <div className="columns is-centered">
              <form
                ref={input => (this.searchForm = input)}
                className="column is-half box"
                onSubmit={this.handleSubmit}
              >
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
                {invalidInputSummitted && (
                  <span className="submit-error has-text-warning">Please supply correctly formatted address.</span>
                )}
                <div className="field mt">
                  <button type="submit" className="button is-danger is-fullwidth is-medium" disabled={!inputIsValid}>
                    Find Restaurants
                  </button>
                </div>
              </form>
            </div>
          </div>
          {fireRedirect && <Redirect push to="/Search" />}
        </div>
      </div>
    );
  }
}

export default SearchBox;
