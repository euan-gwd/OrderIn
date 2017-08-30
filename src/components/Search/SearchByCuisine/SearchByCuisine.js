import React, { Component } from "react";
import { Route } from "react-router-dom";
import "../search_styles.css";

class SearchByCuisine extends Component {
  render() {
    const { selectCuisine, cuisinesData } = this.props;
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
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
                          selectCuisine(`${cuisine}`);
                          props.history.push(`/Cuisine/${cuisine}`);
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
      </section>
    );
  }
}

export default SearchByCuisine;
