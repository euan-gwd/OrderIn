import React, { Component } from "react";
// import { NavLink } from "react-router-dom";
import "../search_styles.css";
import { Cities } from "../../../mock/sample-city-list";

class SearchContainer extends Component {
  render() {
    let sampleCities = Cities.map(city => (
      <button key={city.name} className="button is-link">
        {city.name}
      </button>
    ));
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
                </span>
                Search by City
              </h1>
              <div className="inner-grid">{sampleCities}</div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchContainer;
