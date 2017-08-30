import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";
import SearchResultsList from "../../SearchResults/SearchResultsList";

class SearchByCuisine extends Component {
  render() {
    const { cuisinesData, match, selectCuisine, cityName, selectStore } = this.props;
    const suburbName = match.params.suburbId;
    const searchResult = { suburbName, cityName, undefined };

    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <span className="selection-text-padding has-text-grey-light">Cities</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding has-text-grey-light">{cityName}</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding">{suburbName}</span>
              <span className="icon is-left">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
            </div>
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
                </span>
                Search by Cuisine
              </h1>
              <div className="inner-grid">
                {cuisinesData.map(cuisine => (
                  <Route
                    key={cuisine}
                    render={props => (
                      <button
                        onClick={() => {
                          selectCuisine(`${cuisine}`);
                          props.history.push(`${match.url}/${cuisine}`);
                        }}
                        className="button is-link"
                      >
                        {cuisine}
                      </button>
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
          <SearchResultsList searchResult={searchResult} selectStore={selectStore} />
        </div>
      </section>
    );
  }
}

export default SearchByCuisine;
