import React, { Component } from "react";
import Header from "../Header";
import { titleCase } from "../../helpers";
import "./styles.css";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { searchTerm: 0 };
  }

  handleInput = event => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const item = this.state.searchTerm.split(",");
    const [street, suburbName, cityName] = item;
    const suburb = titleCase(suburbName);
    const city = titleCase(cityName);
    if (this.state.searchTerm.length > 0) {
      this.props.searchSelected(suburb, city, undefined, street);
      this.props.fromSearchForm(this.state.searchTerm);
      this.searchForm.reset();
    }
  };

  render() {
    return (
      <section className="hero is-danger is-fullheight">
        <Header className="hero-head" />
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
        </div>
        <div className="hero-foot">
          <div className="item-centered">
            <span className="icon">
              <i className="fa fa-arrow-down" />
            </span>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
