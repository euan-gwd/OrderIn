import React, { Component } from "react";
import Header from "../Header";

class Hero extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-danger is-medium">
        <Header className="hero-head" />
        <div className="hero-body">
          <div className="container">
            <h1 className="has-text-centered is-size-3">
              <strong>Simply</strong> Order food online.
            </h1>
            <form className="box">
              <div className="field is-grouped is-grouped-centered">
                <p className="control">
                  <label className="radio">
                    <input type="radio" name="question" />
                    Delivery
                  </label>
                </p>
                <p className="control">
                  <label className="radio">
                    <input type="radio" name="question" />
                    Pickup
                  </label>
                </p>
              </div>
              <p className="has-text-centered is-size-4">Enter your street address & suburb:</p>
              <div className="field has-addons">
                <p className="control is-expanded has-icons-left">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. 90 Victoria Road, Woodstock"
                  />
                  <span className="icon is-left">
                    <i className="fa fa-search" />
                  </span>
                </p>
                <p className="control">
                  <a className="button is-danger">Find Restaurants</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Hero;
