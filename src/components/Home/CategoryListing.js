import React, { Component } from "react";
import "./styles.css";
import sampleCities from "../../mock/sample-city-list";
import sampleCuisines from "../../mock/sample-cuisine-list";
import CityList from "./CityList";
// import Category from "./Category";

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
              <div className="grid">
                {Object.keys(this.state.cities).map(city =>
                  <CityList key={city} city={this.state.cities[city]} name={city} />
                )}
              </div>
            </div>
          </div>
          <div className="container">
            <div className="well">
              <ul className="" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default CategoryListing;
