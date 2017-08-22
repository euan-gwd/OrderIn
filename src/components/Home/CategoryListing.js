import React, { Component } from "react";
import "./styles.css";
import sampleCities from "../../mock/sample-city-list";
import sampleCuisines from "../../mock/sample-cuisine-list";
import CityList from "./CityList";

class CategoryListing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: sampleCities,
      cuisines: sampleCuisines,
      suburbs: {},
      selectedCity: {},
      selectedCusine: {}
    };
  }

  showSuburbs(city) {
    const citySuburb = city.suburbs.map(citySuburb => citySuburb);
    this.setState({ suburbs: citySuburb });
  }

  getCityName = (item, name) => {
    this.setState({ selectedCity: name });
  };

  getCuisineName = (item, name) => {
    this.setState({ selectedCusine: name });
  };

  render() {
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-cutlery" />
                </span>
                Search by Cuisine
              </h1>
              <ul className="inner-grid">
                {this.state.cuisines.map(cuisine =>
                  <button
                    key={cuisine}
                    className="button is-link"
                    onClick={event => {
                      this.getCuisineName(this, cuisine);
                    }}
                  >
                    {cuisine}
                  </button>
                )}
              </ul>
            </div>
          </div>
          {this.state.selectedCusine.length > 0 &&
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
                      getCityName={this.getCityName}
                      name={city}
                    />
                  )}
                </div>
              </div>
            </div>}
          {this.state.suburbs.length > 0 &&
            <div className="container">
              <div className="well">
                <h1 className="has-text-centered is-size-3">
                  <span className="icon is-medium">
                    <i className="fa fa-map-marker" />
                  </span>
                  Refine Search by Suburb
                </h1>
                <div className="inner-grid">
                  {this.state.suburbs.map(suburb =>
                    <button
                      key={suburb}
                      className="button is-link"
                      onClick={this.props.searchSelected.bind(
                        this,
                        suburb,
                        this.state.selectedCity,
                        this.state.selectedCusine
                      )}
                    >
                      {suburb}
                    </button>
                  )}
                </div>
              </div>
            </div>}
        </div>
      </section>
    );
  }
}

export default CategoryListing;
