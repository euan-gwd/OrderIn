import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class SearchByCity extends React.PureComponent {
  render() {
    const { selectCity, citiesData } = this.props;
    return (
      <div className="hero-body">
        <div className="container">
          <div className="well">
            <h1 className="has-text-centered is-size-5-touch is-size-4-desktop">
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
                        let getSlug = require("speakingurl");
                        let CityName = getSlug(`${city.name}`);
                        selectCity(`${CityName}`);
                        props.history.push(`/Cities/${CityName}`);
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
    );
  }
}

export default SearchByCity;
