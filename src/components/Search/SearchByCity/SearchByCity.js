import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class SearchByCity extends React.Component {
  render() {
    const { selectCity, citiesData } = this.props;
    return (
      <div className="hero-body">
        <div className="container">
          <div className="well">
            <p className="has-text-centered is-size-5-touch is-size-4-desktop">
              <i className="fa fa-map-marker" />
              Search by City
            </p>
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
