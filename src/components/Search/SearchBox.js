import React from "react";
import { Redirect } from "react-router-dom";
import "./search_styles.css";
import { titleCase } from "../helpers";

class SearchBox extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: 0,
      fireRedirect: false,
      inputIsValid: false,
      touched: false,
      invalidSummit: false
    };
  }

  handleInput = event => {
    const searchInput = event.target.value;
    const regex = /\d\w+\s\w+\s\w+,\s\w+,\s\w+\s\w+$/;
    regex.test(searchInput)
      ? this.setState({ inputIsValid: true, searchTerm: searchInput })
      : this.setState({ inputIsValid: false, searchTerm: 0 });
  };

  handleInputFocus = event => {
    this.setState({ touched: true, invalidSummit: false });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm.length > 0) {
      const searchItems = this.state.searchTerm.split(",");
      let sanitizeitems = searchItems
        .map(item => (item.startsWith(" ") ? item.trim() : item))
        .map(item => titleCase(item));
      this.props.searchSelected(sanitizeitems);
      this.setState({ fireRedirect: true });
    } else {
      this.setState({ invalidSummit: true });
    }
  };

  render() {
    const { inputIsValid, fireRedirect, touched, invalidSummit } = this.state;
    const showError = touched
      ? "icon is-right is-small has-text-warning"
      : "icon is-right is-small has-text-white";
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="subtitle has-text-centered is-size-2">
            <strong>Simply</strong> order food online.
          </h1>
          <div className="columns is-centered">
            <form
              ref={input => (this.searchForm = input)}
              className="column is-half box"
              onSubmit={this.handleSubmit}
            >
              <p className="has-text-centered is-size-4">
                Enter your street address, suburb & city:
              </p>
              <div className="field has-addons">
                <p className="control is-expanded has-icons-left has-icons-right">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. 90 Victoria Road, Woodstock, Cape Town"
                    onFocus={this.handleInputFocus}
                    onChange={this.handleInput.bind(this)}
                  />
                  <span className="icon is-left is-small">
                    <i className="fa fa-icon fa-search" />
                  </span>
                  {inputIsValid ? (
                    <span className="icon is-right is-small has-text-success">
                      <i className="fa fa-check" />
                    </span>
                  ) : (
                    <span className={showError}>
                      <i className="fa fa-warning" />
                    </span>
                  )}
                </p>
              </div>
              {invalidSummit && (
                <span className="submit-error has-text-warning">
                  Please supply correctly formatted address.
                </span>
              )}
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
    );
  }
}

export default SearchBox;