import React from "react";
import Store from "./Store";
import "./SearchResultsStyles.css";
import { Stores } from "../../../mock/sample-stores";

class SearchResultsList extends React.PureComponent {
  render() {
    const { searchResult, selectStore } = this.props;
    const restaurants = Stores;
    return (
      <div>
        <div className="container">
          <h2 className="title has-text-centered has-text-white">
            {searchResult.cuisineName} Restaurants in {searchResult.suburbName}{" "}
            {searchResult.cityName}
          </h2>
          <div className="storelist-box">
            {restaurants.map(restaurant => (
              <Store key={restaurant.name} details={restaurant} selectStore={selectStore} />
            ))}
          </div>
          <footer className="has-text-centered spacer has-text-white">
            <p className="icon is-large">
              <i className="fa fa-arrow-up" aria-hidden="true" />
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default SearchResultsList;
