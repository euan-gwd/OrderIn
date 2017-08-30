import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../search_styles.css";
import { Cities } from "../../../mock/sample-city-list";
import RefineSearchBySuburb from "./RefineSearchBySuburb";

class RefineSearchByCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: Cities
    };
  }

  render() {
    const { match } = this.props;
    return (
      <div className="">
        <div className="container">
          <div className="box has-text-centered has-text-danger">
            <span className="selection-text-padding has-text-grey-light">Cuisine</span>
            <span className="icon is-left has-text-grey-light">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
            <span className="selection-text-padding">{match.params.cuisineId}</span>
            <span className="icon is-left">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
          </div>
          <div className="well">
            <h1 className="has-text-centered is-size-3">
              <span className="icon is-medium">
                <i className="fa fa-map-marker" />
              </span>
              Search by City
            </h1>
            <div className="inner-grid">
              {Object.keys(this.state.cities).map(city => (
                <NavLink to={`${match.url}/${city}`} key={city} className="button is-link">
                  {city}
                </NavLink>
              ))}
            </div>
          </div>
        </div>
        <Route
          path={`${match.path}/:cityId`}
          render={props => (
            <RefineSearchBySuburb
              {...props}
              cuisineId={match.params.cuisineId}
              data={this.state.cities}
            />
          )}
        />
      </div>
    );
  }
}

export default RefineSearchByCity;
