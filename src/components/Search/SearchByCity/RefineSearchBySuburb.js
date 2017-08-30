import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";
import SearchResultsList from "../../SearchResults/SearchResultsList";

class RefineSearchBySuburb extends Component {
  render() {
    const { citiesData, match, selectSuburb, selectStore } = this.props;
    const cityName = match.params.cityId;
    const city = citiesData.find(city => city.name === cityName);
    const suburbsData = city.suburbs;
    // eslint-disable-next-line
    const searchResult = { undefined, cityName, undefined };

    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <span className="selection-text-padding has-text-grey-light">Cities</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding">{cityName}</span>
              <span className="icon is-left">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
            </div>
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
                </span>
                Search by Suburb
              </h1>
              <div className="inner-grid">
                {suburbsData.map(suburb => (
                  <Route
                    key={suburb}
                    render={props => (
                      <button
                        onClick={() => {
                          selectSuburb(`${suburb}`);
                          props.history.push(`/Cities/${cityName}/${suburb}`);
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

export default RefineSearchBySuburb;
