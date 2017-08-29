import React, { Component } from "react";
import Store from "./Store";
import "./results_styles.css";
import sampleStores from "../../mock/sample-stores";

class SearchResultsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      stores: sampleStores
    };
  }

  render() {
    const { searchResult, selectStore } = this.props;
    return (
      <div className="top-spacer">
        <div className="container">
          <h2 className="title has-text-centered has-text-white">
            {searchResult.cuisine} Restaurants near {searchResult.suburb} in {searchResult.city}
          </h2>
          <div className="box">
            <ul>
              {Object.keys(this.state.stores).map(key =>
                <Store key={key} details={this.state.stores[key]} selectStore={selectStore} />
              )}
            </ul>
          </div>
          <footer className="has-text-centered spacer has-text-white">
            <p className="icon is-large">
              <i className="fa fa-cutlery" aria-hidden="true" />
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default SearchResultsList;
