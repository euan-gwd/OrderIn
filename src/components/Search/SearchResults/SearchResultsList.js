import React, { Component } from "react";
import Store from "./Store";
import "./results_styles.css";
import { Stores } from "../../../mock/sample-stores";

class SearchResultsList extends Component {
  render() {
    const { searchResult, selectStore } = this.props;
    const restaurants = Stores;
    return (
      <div className="top-spacer">
        <div className="container">
          <h2 className="title has-text-centered has-text-white">
            {searchResult.cuisineName} Restaurants in {searchResult.suburbName}{" "}
            {searchResult.cityName}
          </h2>
          <div className="box">
            <ul>
              {restaurants.map(restaurant => (
                <Store key={restaurant.name} details={restaurant} selectStore={selectStore} />
              ))}
            </ul>
          </div>
          <footer className="has-text-centered spacer has-text-white">
            <p className="icon is-large">
              <i className="fa fa-chevron-up" aria-hidden="true" />
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default SearchResultsList;
