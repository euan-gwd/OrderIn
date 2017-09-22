import React from "react";
import "../search_global_styles.css";
import { Route } from "react-router-dom";
import SearchResultsList from "../SearchResults/SearchResultsList";

class SearchCuisineResultsContainer extends React.PureComponent {
  render() {
    const { cityName, suburbName, cuisineName, selectStore } = this.props;
    const searchResult = { suburbName, cityName, cuisineName };
    return (
      <section className="search-results-container mb">
        <div className="search-results-body">
          <div className="breadcrumb-box has-text-centered is-hidden-mobile">
            <span className="breadcrumb-nolink-inactive">Cuisine</span>
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
        </div>
      </section>
    );
  }
}

export default SearchCuisineResultsContainer;
