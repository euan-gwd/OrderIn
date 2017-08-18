import React, { Component } from "react";
import Header from "./Header";

class Home extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-danger is-fullheight">
        <Header className="hero-head" />
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">Simply order food online.</h1>
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
              <p className="has-text-centered label">Enter your street address & suburb:</p>
              <div className="field has-addons">
                <p className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="e.g. 90 Victoria Road, Woodstock"
                  />
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

export default Home;
