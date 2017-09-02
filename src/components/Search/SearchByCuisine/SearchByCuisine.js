import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class SearchByCuisine extends Component {
  render() {
    const { selectCuisine, cuisinesData } = this.props;
    return (
      <div className="hero-body">
        <div className="container">
          <div className="well">
            <h1 className="has-text-centered is-size-4">
              <span className="icon">
                <i className="fa fa-cutlery fa-lg" />
              </span>
              Search by Cuisine
            </h1>
            <div className="inner-grid">
              {cuisinesData.map(cuisine => (
                <Route
                  key={cuisine}
                  render={props => (
                    <button
                      onClick={() => {
                        let getSlug = require("speakingurl");
                        let cuisineName = getSlug(`${cuisine}`);
                        selectCuisine(`${cuisineName}`);
                        props.history.push(`/Cuisine/${cuisineName}`);
                      }}
                      className="button is-link"
                    >
                      {cuisine}
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

export default SearchByCuisine;
