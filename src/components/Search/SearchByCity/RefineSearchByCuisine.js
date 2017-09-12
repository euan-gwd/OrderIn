import React from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";
import SearchResultsList from "../SearchResults/SearchResultsList";
import { unSlug } from "../../helpers";

class RefineSearchByCuisine extends React.PureComponent {
  render() {
    const { cuisinesData, match, selectCuisine, cityName, selectStore } = this.props;
    const suburbName = unSlug(match.params.suburbId);
    const searchResult = { suburbName, cityName, undefined };

    return (
      <section className="search-body">
        <div className="breadcrumb-box has-text-centered is-hidden-mobile">
          <Route
            render={props => (
              <a
                className="breadcrumb-link-inactive"
                onClick={() => {
                  props.history.push(`/`);
                }}
              >
                Cities
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
                {cityName}
              </a>
            )}
          />
          <i className="fa breadcrumb-icon fa-chevron-right" />
          <span className="breadcrumb-link-active">{suburbName}</span>
        </div>
        <div className="well">
          <p className="has-text-centered is-size-5-touch is-size-4-desktop">
            <i className="fa fa-icon fa-cutlery" />
            Refine Search by Cuisine
          </p>
          <div className="inner-grid">
            {cuisinesData.map(cuisine => (
              <Route
                key={cuisine}
                render={props => (
                  <a
                    onClick={() => {
                      let getSlug = require("speakingurl");
                      let cuisineName = getSlug(`${cuisine}`);
                      selectCuisine(`${cuisineName}`);
                      props.history.push(`${match.url}/${cuisineName}`);
                    }}
                    className="search-links"
                  >
                    {cuisine}
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

export default RefineSearchByCuisine;
