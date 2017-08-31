import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class RefineCuisineSearchByCity extends Component {
  render() {
    const { selectCity, citiesData, cuisineName, match } = this.props;
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
                      props.history.goBack();
                    }}
                  >
                    Cuisine
                  </a>
                )}
              />
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding">{cuisineName}</span>
            </div>
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
                </span>
                Search by City
              </h1>
              <div className="inner-grid">
                {citiesData.map(city => (
                  <Route
                    key={city.name}
                    render={props => (
                      <button
                        onClick={() => {
                          selectCity(`${city.name}`);
                          props.history.push(`${match.url}/${city.name}`);
                        }}
                        className="button is-link"
                      >
                        {city.name}
                      </button>
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default RefineCuisineSearchByCity;
