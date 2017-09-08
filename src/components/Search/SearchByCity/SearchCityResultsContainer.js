import React from "react";
import "../search_styles.css";
import { Route } from "react-router-dom";
import SearchResultsList from "../SearchResults/SearchResultsList";

class SearchCityResultsContainer extends React.Component {
  render() {
    const { cityName, suburbName, cuisineName, selectStore } = this.props;
    const searchResult = { suburbName, cityName, cuisineName };
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <span className="breadcrumb-link-inactive">Cities</span>
              <i className="fa breadcrumb-icon fa-chevron-right" />
              <Route
                render={props => (
                  <a
                    className="breadcrumb-link-inactive"
                    onClick={() => {
                      props.history.push(`/`);
                    }}
                  >
                    {cityName}
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
                    {suburbName}
                  </a>
                )}
              />
              <i className="fa breadcrumb-icon fa-chevron-right" />
              <span className="breadcrumb-link-active">{cuisineName}</span>
            </div>
            <SearchResultsList searchResult={searchResult} selectStore={selectStore} />
          </div>
        </div>
      </section>
    );
  }
}

export default SearchCityResultsContainer;
