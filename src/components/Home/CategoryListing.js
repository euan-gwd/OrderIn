import React, { Component } from "react";
import "./styles.css";
import sampleCities from "../../mock/sample-city-list";
import sampleCuisines from "../../mock/sample-cuisine-list";
import CityList from "./CityList";
import Category from "./Category";

class CategoryListing extends Component {
  state = {
    cities: sampleCities,
    cuisines: sampleCuisines,
    suburbs: 0
  };

  showSuburbs(city, evt) {
    evt.preventDefault();
    const citySuburb = city.suburbs.map(suburb => suburb);
    this.setState({ suburbs: citySuburb });
  }

  render() {
    return (
      <section className="hero is-danger is-medium">
        <div className="hero-body">
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-cutlery" />
                </span>
                Which? Search by Cuisine
              </h1>
              <ul className="inner-grid">
                {this.state.cuisines.map(cuisine =>
                  <Category
                    key={cuisine}
                    name={cuisine}
                    searchSelected={this.props.searchSelected.bind(this, cuisine)}
                  />
                )}
              </ul>
            </div>
          </div>
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-map-marker" />
                </span>
                Where? Search by City
              </h1>
              <div className="inner-grid">
                {Object.keys(this.state.cities).map(city =>
                  <CityList
                    key={city}
                    showSuburbs={this.showSuburbs.bind(this, this.state.cities[city])}
                    name={city}
                  />
                )}
              </div>
            </div>
          </div>
          {this.state.suburbs !== 0
            ? <div className="container">
                <div className="well">
                  <h1 className="has-text-centered is-size-3">
                    <span className="icon is-medium">
                      <i className="fa fa-map-marker" />
                    </span>
                    Refine Search by Suburb
                  </h1>
                  <div className="inner-grid">
                    {this.state.suburbs.map(element =>
                      <button
                        key={element}
                        className="button is-danger"
                        onClick={this.props.searchSelected.bind(this, element)}
                      >
                        {element}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            : <div />}
        </div>
      </section>
    );
  }
}

export default CategoryListing;
