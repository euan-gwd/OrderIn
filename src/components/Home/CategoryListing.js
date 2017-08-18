import React, { Component } from "react";
import "./styles.css";
import sampleCities from "../../sample-city-list";
import sampleCuisines from "../../sample-cuisine-list";
import City from "./City";
import Category from "./Category";

class CategoryListing extends Component {
  state = {
    cities: sampleCities,
    cuisines: sampleCuisines
  };
  render() {
    return (
      <section className="hero is-danger is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
                </span>
                Search by City
              </h1>
              <ul className="columns is-multiline">
                {Object.keys(this.state.cities).map(key =>
                  <City key={key} suburbs={this.state.cities[key]} name={key} />
                )}
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-cutlery" />
                </span>
                Search by Cuisine
              </h1>
              <ul className="columns is-multiline">
                {this.state.cuisines.map(cuisine => <Category key={cuisine} name={cuisine} />)}
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryListing;
