import React, { Component } from "react";
import "./styles.css";
import sampleCities from "../../mock/sample-city-list";
import CityList from "./CityList";

class SearchByCity extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: sampleCities,
      suburbs: {},
      selectedCity: {}
    };
  }

  showSuburbs(city) {
    const citySuburb = city.suburbs.map(citySuburb => citySuburb);
    this.setState({ suburbs: citySuburb });
  }

  getCityName = (item, name) => {
    this.setState({ selectedCity: name });
  };

  render() {
    return (
      <section className="hero is-danger">
        <div className="hero-body">
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
          </div>
          {this.state.suburbs.length > 0 &&
            <div className="container">
              <div className="box has-text-centered has-text-danger">
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
                        this.state.selectedCity
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
