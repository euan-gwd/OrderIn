import React, { Component } from "react";
import Header from "../Header";
import "./styles.css";

class Search extends Component {
  state = {};
  render() {
    return (
      <section className="hero is-danger">
        <Header className="hero-head" />
        <div className="hero-body">
          <div className="container">
            <h1 className="subtitle has-text-centered is-size-2">
              <strong>Simply</strong> Order food online.
            </h1>
            <div className="columns is-centered">
              <form className="column is-half box">
                <div className="field is-grouped is-grouped-centered">
                  <div className="control">
                    <input type="radio" id="Delivery" name="question" className="with-font" />
                    <label htmlFor="Delivery" className="is-size-4">
                      Delivery
                    </label>
                  </div>
                  <div className="control">
                    <input type="radio" id="Pickup" name="question" className="with-font" />
                    <label htmlFor="Pickup" className="is-size-4">
                      Pickup
                    </label>
                  </div>
                </div>
                <p className="has-text-centered is-size-4">Enter your street address & suburb:</p>
                <div className="field has-addons">
                  <p className="control is-expanded has-icons-left">
                    <input
                      className="input is-large"
                      type="text"
                      placeholder="e.g. 90 Victoria Road, Woodstock"
                    />
                    <span className="icon is-left">
                      <i className="fa fa-search" />
                    </span>
                  </p>
                </div>
                <div className="field is-grouped is-grouped-centered">
                  <button
                    type="submit"
                    className="button is-danger is-medium is-large-tablet is-size-3-tablet"
                  >
                    Find Restaurants
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Search;
