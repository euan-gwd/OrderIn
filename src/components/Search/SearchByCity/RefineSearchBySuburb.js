import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class RefineSearchBySuburb extends Component {
  render() {
    const { citiesData, match, selectSuburb } = this.props;
    const cityId = match.params.cityId;
    const city = citiesData.find(city => city.name === cityId);
    const suburbsData = city.suburbs;

    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <span className="selection-text-padding has-text-grey-light">Cities</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding">{cityId}</span>
              <span className="icon is-left">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
            </div>
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
                </span>
                Search by Suburb
              </h1>
              <div className="inner-grid">
                {suburbsData.map(suburb => (
                  <Route
                    key={suburb}
                    render={props => (
                      <button
                        onClick={() => {
                          selectSuburb(`${suburb}`);
                          props.history.push(`${match.path}/${suburb}`);
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
        </div>
      </section>
    );
  }
}

export default RefineSearchBySuburb;
