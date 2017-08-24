import React, { Component } from "react";
import "./search_styles.css";
import sampleCities from "../../mock/sample-city-list";
import sampleCuisines from "../../mock/sample-cuisine-list";
import CityList from "./CityList";

class SearchByCity extends Component {
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

  getCuisineName = name => {
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
                    onClick={this.getCuisineName.bind(this, cuisine)}
                  >
                    {cuisine}
                  </button>
                )}
              </ul>
            </div>
          </div>
          {this.state.selectedCusine.length > 0 &&
            <div className="container">
              <div className="box has-text-centered has-text-danger">
                <span className="selection-text-padding">
                  {this.state.selectedCusine}
                </span>
                <span className="icon is-left">
                  <i className="fa fa-chevron-right fa-lg" />
                </span>
              </div>
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
              <div className="box has-text-centered has-text-danger">
                <span className="selection-text-padding has-text-grey-light">
                  {this.state.selectedCusine}
                </span>
                <span className="icon is-left has-text-grey-light">
                  <i className="fa fa-chevron-right fa-lg" />
                </span>
                <span className="selection-text-padding">
                  {this.state.selectedCity}
                </span>
                <span className="icon is-left">
                  <i className="fa fa-chevron-right fa-lg" />
                </span>
              </div>
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
              <div className="item-centered">
                <span className="icon">
                  <i className="fa fa-chevron-down" />
                </span>
              </div>
            </div>}
        </div>
      </section>
    );
  }
}

export default SearchByCity;
