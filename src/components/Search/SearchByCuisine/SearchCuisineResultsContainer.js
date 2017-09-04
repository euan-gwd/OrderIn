import React from "react";
import "../search_styles.css";
import { Route } from "react-router-dom";
import SearchResultsList from "../SearchResults/SearchResultsList";

class SearchCuisineResultsContainer extends React.PureComponent {
  render() {
    const { cityName, suburbName, cuisineName, selectStore } = this.props;
    const searchResult = { suburbName, cityName, cuisineName };
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <span className="selection-text-padding has-text-grey-light">Cuisine</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <Route
                render={props => (
                  <a
                    className="selection-text-padding has-text-grey-light"
                    onClick={() => {
                      props.history.push(`/`);
                    }}
                  >
                    {cuisineName}
                  </a>
                )}
              />
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <Route
                render={props => (
                  <a
                    className="selection-text-padding has-text-grey-light"
                    onClick={() => {
                      props.history.goBack();
                    }}
                  >
                    {cityName}
                  </a>
                )}
              />
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding ">{suburbName}</span>
            </div>
            <SearchResultsList searchResult={searchResult} selectStore={selectStore} />
          </div>
        </div>
      </section>
    );
  }
}

export default SearchCuisineResultsContainer;
