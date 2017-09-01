import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./search_styles.css";
import { titleCase } from "../helpers";

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: 0, fireRedirect: false };
  }

  handleInput = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.state.searchTerm.length > 0) {
      const searchItems = this.state.searchTerm.split(",");
      let sanitizeitems = searchItems.map(item => {
        return item.startsWith(" ") ? item.trim() : item;
      });
      let newSearchTerm = sanitizeitems.map(item => {
        return titleCase(item);
      });
      this.props.searchSelected(newSearchTerm);
      this.setState({ fireRedirect: true });
    }
  };

  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="subtitle has-text-centered is-size-2">
            <strong>Simply</strong> Order food online.
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
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input is-large"
                    type="text"
                    placeholder="e.g. 90 Victoria Road,Woodstock,Cape Town"
                    onChange={this.handleInput.bind(this)}
                  />
                  <span className="icon is-left">
                    <i className="fa fa-search" />
                  </span>
                </p>
              </div>
              <div className="field is-grouped is-grouped-centered">
                <button type="submit" className="button is-danger is-fullwidth is-medium">
                  Find Restaurants
                </button>
              </div>
            </form>
          </div>
        </div>
        {this.state.fireRedirect && <Redirect push to="/Search" />}
      </div>
    );
  }
}

export default SearchBox;
