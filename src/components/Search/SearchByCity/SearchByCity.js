import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../search_styles.css";
import sampleCities from "../../../mock/sample-city-list";
import RefineSearchBySuburb from "./RefineSearchBySuburb";

class SearchByCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: sampleCities
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
                Where? Search by City
              </h1>
              <div className="inner-grid">
                {Object.keys(this.state.cities).map(city =>
                  <Link to={`/Cities/${city}`} key={city} className="button is-link">
                    {city}
                  </Link>
                )}
              </div>
            </div>
          </div>
          <Route path={`/Cities/:cityId`} render={props => <RefineSearchBySuburb {...props} />} />
        </div>
      </section>
    );
  }
}

export default SearchByCity;
