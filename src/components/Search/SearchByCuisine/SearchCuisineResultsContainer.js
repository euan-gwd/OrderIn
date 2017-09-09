import React from "react";
import "../search_styles.css";
import { Route } from "react-router-dom";
import SearchResultsList from "../SearchResults/SearchResultsList";

class SearchCuisineResultsContainer extends React.Component {
  render() {
    const { cityName, suburbName, cuisineName, selectStore } = this.props;
    const searchResult = { suburbName, cityName, cuisineName };
    return (
      <section className="search-body">
        <div className="breadcrumb-box has-text-centered">
          <span className="breadcrumb-link-inactive">Cuisine</span>
          <i className="fa breadcrumb-icon fa-chevron-right" />
          <Route
            render={props => (
              <a
                className="breadcrumb-link-inactive"
                onClick={() => {
                  props.history.push(`/`);
                }}
              >
                {cuisineName}
              </a>
            )}
          />
          <i className="fa breadcrumb-icon fa-chevron-right" />
          <Route
            render={props => (
              <a
                className="breadcrumb-link-inactive"
                onClick={() => {
                  props.history.goBack();
                }}
              >
                {cityName}
              </a>
            )}
          />
          <i className="fa breadcrumb-icon fa-chevron-right" />
          <span className="breadcrumb-link-active">{suburbName}</span>
        </div>
        <SearchResultsList searchResult={searchResult} selectStore={selectStore} />
      </section>
    );
  }
}

export default SearchCuisineResultsContainer;
