import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class SearchByCity extends Component {
  render() {
    const { selectCity, citiesData } = this.props;
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-4">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker fa-lg" />
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
                          props.history.push(`/Cities/${city.name}`);
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

export default SearchByCity;
