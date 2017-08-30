import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../search_styles.css";
import { Cuisines } from "../../../mock/sample-cuisine-list";
import RefineSearchByCity from "./RefineSearchByCity";

class SearchByCuisine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: Cuisines,
      searchResult: 0
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
                {this.state.cuisines.map(cuisine => (
                  <NavLink to={`/Cuisine/${cuisine}`} key={cuisine} className="button is-link">
                    {cuisine}
                  </NavLink>
                ))}
              </ul>
            </div>
          </div>
          <Route path="/Cuisine/:cuisineId" render={props => <RefineSearchByCity {...props} />} />
        </div>
      </section>
    );
  }
}

export default SearchByCuisine;
