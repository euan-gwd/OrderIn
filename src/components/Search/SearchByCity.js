import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./search_styles.css";
import sampleCities from "../../mock/sample-city-list";
import SearchBySuburb from "./SearchBySuburb";

class SearchByCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: sampleCities,
      suburbs: {},
      selectedCity: {}
    };
  }

  showSuburbs(city) {
    const citySuburb = city.suburbs.map(citySuburb => citySuburb);
    this.setState({ suburbs: citySuburb });
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
            <span className="selection-text-padding">
              {match.params.cuisineId}
            </span>
            <span className="icon is-left">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
          </div>
          <div className="well">
            <h1 className="has-text-centered is-size-3">
              <span className="icon is-medium">
                <i className="fa fa-map-marker" />
              </span>
              Where? Search by City
            </h1>
            <div className="inner-grid">
              {Object.keys(this.state.cities).map(city =>
                <Link to={`${match.url}/${city}`} key={city} className="button is-link">
                  {city}
                </Link>
              )}
            </div>
          </div>
        </div>
        <Route
          path={`${match.url}/:cityId`}
          render={props => <SearchBySuburb {...props} cuisineId={match.params.cuisineId} />}
        />
      </div>
    );
  }
}

export default SearchByCity;
