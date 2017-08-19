import React, { Component } from "react";
import "./styles.css";
import sampleCities from "../../mock/sample-city-list";
import sampleCuisines from "../../mock/sample-cuisine-list";
import CityList from "./CityList";
// import SuburbList from "./SuburbList";
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
                  <i className="fa fa-map-marker" />
                </span>
                Search by City
              </h1>
              <div className="grid">
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
                    Search by Suburb
                  </h1>
                  <div className="grid">
                    {this.state.suburbs.map(element =>
                      <button key={element} className="button is-danger">
                        {element}
                      </button>
                    )}
                  </div>
                </div>
              </div>
            : <div className="" />}
          <div className="container">
            <div className="well">
              <h1 className="has-text-centered is-size-3">
                <span className="icon is-medium">
                  <i className="fa fa-cutlery" />
                </span>
                Search by Cuisine
              </h1>
              <ul className="grid">
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
