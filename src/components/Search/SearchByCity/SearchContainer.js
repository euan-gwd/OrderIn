import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "../search_styles.css";
import { Cities } from "../../../mock/sample-city-list";

class SearchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: Cities
    };
  }

  render() {
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
              <div className="inner-grid">
                {this.state.cities.map(city => (
                  <NavLink to={`/Cities/${city}`} key={city} className="button is-link">
                    {city}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchContainer;
