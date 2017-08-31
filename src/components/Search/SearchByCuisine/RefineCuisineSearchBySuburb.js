import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";
import SearchResultsList from "../../SearchResults/SearchResultsList";

class RefineCuisineSearchBySuburb extends Component {
  render() {
    const { citiesData, match, selectSuburb, cuisineName, selectStore } = this.props;
    const cityName = match.params.cityId;
    const city = citiesData.find(city => city.name === cityName);
    const suburbsData = city.suburbs;
    const searchResult = { undefined, cityName, cuisineName };

    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <Route
                render={props => (
                  <a
                    className="selection-text-padding has-text-grey-light"
                    onClick={() => {
                      props.history.push(`/`);
                    }}
                  >
                    Cuisine
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
                    {cuisineName}
                  </a>
                )}
              />
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding">{cityName}</span>
            </div>
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-o" />
                </span>
                Refine Search by Suburb
              </h1>
              <div className="inner-grid">
                {suburbsData.map(suburb => (
                  <Route
                    key={suburb}
                    render={props => (
                      <button
                        onClick={() => {
                          selectSuburb(`${suburb}`);
                          props.history.push(`${match.url}/${suburb}`);
                        }}
                        className="button is-link"
                      >
                        {suburb}
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

export default RefineCuisineSearchBySuburb;
