import React, { Component } from "react";

class City extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-danger is-medium">
        <div className="hero-head">
          <div className="container">
            <h1 className="has-text-centered is-size-3">
              <span className="icon is-large">
                <i className="fa fa-map-marker" />
              </span>
              Search by City
            </h1>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <p>City</p>
            <p>City</p>
          </div>
        </div>
      </section>
    );
  }
}

export default City;
