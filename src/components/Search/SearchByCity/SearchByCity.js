import React from "react";
import { Route } from "react-router-dom";
import "../search_global_styles.css";

class SearchByCity extends React.Component {
  render() {
    const { selectCity, citiesData } = this.props;
    return (
      <div className="searchByCity-container">
        <div className="well">
          <div className="inner-grid-header">
            <i className="fa fa-icon fa-map-marker" />
            Search by City
          </div>
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
