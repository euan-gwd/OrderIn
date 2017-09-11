import React from "react";
import { Redirect } from "react-router-dom";
import PlacesAutocomplete from "react-places-autocomplete";
// import "../search_styles.css";
import "./SearchBoxStyles.css";
// import { titleCase } from "../../helpers";
import SearchDeliveryOptions from "./SearchDeliveryOptions/SearchDeliveryOptions";

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 0,
      fireRedirect: false,
      inputIsValid: false,
      touched: false,
      invalidSummit: false,
      orderOption: 0,
      address: ""
    };
  }

  handleInputChange = address => this.setState({ address });

  handleInputSelect = address => {
    this.setState({ address });
  };

  selectDeliveryOption = selectedDeliveryOption => {
    this.setState({ orderOption: selectedDeliveryOption });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.address);
    console.log(this.state.address.length);
    // if (this.state.searchTerm.length > 0) {
    //   const searchItems = this.state.searchTerm.split(",");
    //   let sanitizeitems = searchItems
    //     .map(item => (item.startsWith(" ") ? item.trim() : item))
    //     .map(item => titleCase(item));
    //   this.props.searchSelected(sanitizeitems);
    //   this.setState({ fireRedirect: true });
    // } else {
    //   this.setState({ invalidSummit: true });
    // }
  };

  render() {
    const { fireRedirect } = this.state;

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
      componentRestrictions: { country: "za" }
    };

    const inputProps = {
      type: "text",
      value: this.state.address,
      onChange: this.handleInputChange,
      placeholder: "e.g. 90 Victoria Road, Woodstock, Cape Town"
    };

    return (
      <div className="hero is-danger">
        <div className="hero-body">
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
                <SearchDeliveryOptions selectDeliveryOption={this.selectDeliveryOption} />
                <h4 className="searchBox-header is-size-6-touch is-size-5-desktop has-text-centered has-text-grey">
                  Enter your street address & suburb:
                </h4>
                <div className="">
                  <i className="fa fa-icon fa-search" />
                  <PlacesAutocomplete
                    autocompleteItem={AutocompleteItem}
                    onSelect={this.handleInputSelect}
                    classNames={inputStyles}
                    inputProps={inputProps}
                    options={options}
                  />
                </div>
                <div className="field mt">
                  <button type="submit" className="button is-danger is-fullwidth is-medium">
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
