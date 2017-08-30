import React, { Component } from "react";
import "../search_styles.css";
import SearchResultsList from "../../SearchResults/SearchResultsList";

class SearchResultsContainer extends Component {
  render() {
    const { cityName: city, suburbName: suburb, cuisineName: cuisine, selectStore } = this.props;
    const searchResult = { suburb, city, cuisine };
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <span className="selection-text-padding has-text-grey-light">Cities</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding has-text-grey-light">{city}</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding has-text-grey-light">{suburb}</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding ">{cuisine}</span>
            </div>
            <SearchResultsList searchResult={searchResult} selectStore={selectStore} />
          </div>
        </div>
      </section>
    );
  }
}

export default SearchResultsContainer;
