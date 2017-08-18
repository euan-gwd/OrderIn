import React, { Component } from "react";

class Cuisine extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-danger is-medium">
        <div className="hero-head">
          <div className="container">
            <h1 className="has-text-centered is-size-3">
              <span className="icon is-large">
                <i className="fa fa-cutlery" />
              </span>
              Search by Cuisine
            </h1>
          </div>
        </div>
        <div className="hero-body">
          <div className="container">
            <p>Asian</p>
            <p>Mexican</p>
            <p>American</p>
          </div>
        </div>
      </section>
    );
  }
}

export default Cuisine;
