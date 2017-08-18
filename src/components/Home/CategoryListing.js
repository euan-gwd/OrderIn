import React, { Component } from "react";
import "./styles.css";

class CategoryListing extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-danger is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-large">
                  <i className="fa fa-map-marker" />
                </span>
                Search by City
              </h1>
              <p>City</p>
              <p>City</p>
            </div>
          </div>
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-large">
                  <i className="fa fa-cutlery" />
                </span>
                Search by Cuisine
              </h1>
              <p>Asian</p>
              <p>Mexican</p>
              <p>American</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryListing;
