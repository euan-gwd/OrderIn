import React, { Component } from "react";
import Store from "./Store";
import Header from "../Header";
import "./StorePicker.css";
import sampleStores from "../../sample-stores";
class StorePicker extends Component {
  constructor() {
    super();
    this.state = {
      stores: sampleStores
    };
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <h2 className="title has-text-centered">Woodstock Restaurants</h2>
          <div className="">
            <ul className="">
              {Object.keys(this.state.stores).map(key =>
                <Store key={key} details={this.state.stores[key]} />
              )}
            </ul>
          </div>
          <footer className="has-text-centered spacer">
            <p className="icon is-large">
              <i className="fa fa-cutlery" aria-hidden="true" />
            </p>
          </footer>
        </div>
      </div>
    );
  }
}

export default StorePicker;
