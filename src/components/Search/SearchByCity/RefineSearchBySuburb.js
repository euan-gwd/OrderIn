import React from "react";
import { Route } from "react-router-dom";
import "../search_global_styles.css";
import SearchResultsList from "../SearchResults/SearchResultsList";
import { unSlug } from "../../helpers";

class RefineSearchBySuburb extends React.Component {
  render() {
    const { citiesData, match, selectSuburb, selectStore } = this.props;
    const cityName = unSlug(match.params.cityId);
    const city = citiesData.find(city => city.name === cityName);
    const suburbsData = city.suburbs;
    // eslint-disable-next-line
    const searchResult = { undefined, cityName, undefined };

    return (
      <section className="search-results-container">
        <div className="search-results-body">
          <div className="breadcrumb-box has-text-centered is-hidden-mobile">
            <Route
              render={props => (
                <a
                  className="breadcrumb-link-inactive"
                  onClick={() => {
                    props.history.goBack();
                  }}
                >
                  Cities
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
                        let CtyName = getSlug(`${cityName}`);
                        selectSuburb(`${SubName}`);
                        props.history.push(`/Cities/${CtyName}/${SubName}`);
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
        </div>
      </section>
    );
  }
}

export default RefineSearchBySuburb;
