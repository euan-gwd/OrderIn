import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";
import SearchResultsList from "../SearchResults/SearchResultsList";
import { unSlug } from "../../helpers";

class RefineCuisineSearchBySuburb extends React.Component {
  render() {
    const { citiesData, match, selectSuburb, cuisineName, selectStore } = this.props;
    const cityName = unSlug(match.params.cityId);
    const city = citiesData.find(city => city.name === cityName);
    const suburbsData = city.suburbs;
    const searchResult = { undefined, cityName, cuisineName };

    return (
      <section className="search-body">
        <div className="breadcrumb-box has-text-centered">
          <Route
            render={props => (
              <a
                className="breadcrumb-link-inactive"
                onClick={() => {
                  props.history.push(`/`);
                }}
              >
                Cuisine
              </a>
            )}
          />
          <i className="fa breadcrumb-icon fa-chevron-right" />
          <Route
            render={props => (
              <a
                className="breadcrumb-link-inactive"
                onClick={() => {
                  props.history.goBack();
                }}
              >
                {cuisineName}
              </a>
            )}
          />
          <i className="fa breadcrumb-icon fa-chevron-right" />
          <span className="breadcrumb-link-active">{cityName}</span>
        </div>
        <div className="well">
          <p className="has-text-centered is-size-5-touch is-size-4-desktop">
            <i className="fa fa-icon fa-map-o" />
            Refine Search by Suburb
          </p>
          <div className="inner-grid">
            {suburbsData.map(suburb => (
              <Route
                key={suburb}
                render={props => (
                  <a
                    onClick={() => {
                      let getSlug = require("speakingurl");
                      let SubName = getSlug(`${suburb}`);
                      selectSuburb(`${SubName}`);
                      props.history.push(`${match.url}/${SubName}`);
                    }}
                    className="search-links"
                  >
                    {suburb}
                  </a>
                )}
              />
            ))}
          </div>
        </div>
        <SearchResultsList searchResult={searchResult} selectStore={selectStore} />
      </section>
    );
  }
}

export default RefineCuisineSearchBySuburb;
