import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";
import SearchResultsList from "../SearchResults/SearchResultsList";
import { unSlug } from "../../helpers";

class RefineSearchBySuburb extends React.PureComponent {
  render() {
    const { citiesData, match, selectSuburb, selectStore } = this.props;
    const cityName = unSlug(match.params.cityId);
    const city = citiesData.find(city => city.name === cityName);
    const suburbsData = city.suburbs;
    // eslint-disable-next-line
    const searchResult = { undefined, cityName, undefined };

    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <Route
                render={props => (
                  <a
                    className="selection-text-padding has-text-grey-light"
                    onClick={() => {
                      props.history.goBack();
                    }}
                  >
                    Cities
                  </a>
                )}
              />
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding">{cityName}</span>
            </div>
            <div className="well">
              <h1 className="has-text-centered is-size-4">
                <span className="icon is-medium">
                  <i className="fa fa-map-o" />
                </span>
                Refine Search by Suburb
              </h1>
              <div className="inner-grid">
                {suburbsData.map(suburb => (
                  <Route
                    key={suburb}
                    render={props => (
                      <button
                        onClick={() => {
                          let getSlug = require("speakingurl");
                          let SubName = getSlug(`${suburb}`);
                          let CtyName = getSlug(`${cityName}`);
                          selectSuburb(`${SubName}`);
                          props.history.push(`/Cities/${CtyName}/${SubName}`);
                        }}
                        className="button is-link"
                      >
                        {suburb}
                      </button>
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
          <SearchResultsList searchResult={searchResult} selectStore={selectStore} />
        </div>
      </section>
    );
  }
}

export default RefineSearchBySuburb;