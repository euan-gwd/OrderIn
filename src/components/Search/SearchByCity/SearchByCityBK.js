import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../search_styles.css";
import { Cities } from "../../../mock/sample-city-list";
import RefineSearchBySuburb from "./RefineSearchBySuburb";

class SearchByCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: Cities,
      searchResult: 0
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
                {Cities.map(city => (
                  <NavLink to={`/Cities/${city.name}`} key={city.name} className="button is-link">
                    {city.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
          <Route
            path={`/Cities/:cityId`}
            render={props => (
              <RefineSearchBySuburb
                {...props}
                data={this.state.cities}
                selectStore={this.props.selectStore}
              />
            )}
          />
        </div>
      </section>
    );
  }
}

export default SearchByCity;
