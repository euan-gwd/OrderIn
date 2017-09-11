import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class SearchByCity extends React.PureComponent {
  render() {
    const { selectCity, citiesData } = this.props;
    return (
      <div className="search-body">
        <div className="well">
          <p className="has-text-centered is-size-5-touch is-size-4-desktop">
            <i className="fa fa-icon fa-map-marker" />
            Search by City
          </p>
          <div className="inner-grid">
            {citiesData.map(city => (
              <Route
                key={city.name}
                render={props => (
                  <a
                    onClick={() => {
                      let getSlug = require("speakingurl");
                      let CityName = getSlug(`${city.name}`);
                      selectCity(`${CityName}`);
                      props.history.push(`/Cities/${CityName}`);
                    }}
                    className="search-links"
                  >
                    {city.name}
                  </a>
                )}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SearchByCity;
