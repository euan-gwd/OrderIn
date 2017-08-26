import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "./search_styles.css";
import sampleCuisines from "../../mock/sample-cuisine-list";
import SearchByCity from "./SearchByCity";

class SearchByCuisine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: sampleCuisines
    };
  }

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
                  <Link to={`/Cuisine/${cuisine}`} key={cuisine} className="button is-link">
                    {cuisine}
                  </Link>
                )}
              </ul>
            </div>
          </div>
          <Route path="/Cuisine/:cuisineId" render={props => <SearchByCity {...props} />} />
        </div>
      </section>
    );
  }
}

export default SearchByCuisine;
