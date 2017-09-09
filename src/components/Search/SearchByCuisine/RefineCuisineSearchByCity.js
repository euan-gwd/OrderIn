import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class RefineCuisineSearchByCity extends React.Component {
  render() {
    const { selectCity, citiesData, cuisineName, match } = this.props;
    return (
      <section className="search-body">
        <div className="breadcrumb-box has-text-centered">
          <Route
            render={props => (
              <a
                className="breadcrumb-link-inactive"
                onClick={() => {
                  props.history.goBack();
                }}
              >
                Cuisine
              </a>
            )}
          />
          <i className="fa breadcrumb-icon fa-chevron-right" />
          <span className="breadcrumb-link-active">{cuisineName}</span>
        </div>
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
                  <a
                    onClick={() => {
                      let getSlug = require("speakingurl");
                      let CityName = getSlug(`${city.name}`);
                      selectCity(`${CityName}`);
                      props.history.push(`${match.url}/${CityName}`);
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
      </section>
    );
  }
}

export default RefineCuisineSearchByCity;
