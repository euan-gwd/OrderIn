import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import "../search_styles.css";
import sampleCuisines from "../../../mock/sample-cuisine-list";
import SearchByCityResults from "./SearchByCityResults";

class RefineSearchByCuisine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cuisines: sampleCuisines
    };
  }

  render() {
    const { match, cityId } = this.props;
    return (
      <div className="">
        <div className="container">
          <div className="box has-text-centered has-text-danger">
            <span className="selection-text-padding has-text-grey-light">Cities</span>
            <span className="icon is-left has-text-grey-light">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
            <span className="selection-text-padding has-text-grey-light">
              {cityId}
            </span>
            <span className="icon is-left has-text-grey-light">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
            <span className="selection-text-padding">
              {match.params.suburbId}
            </span>
            <span className="icon is-left">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
          </div>
          <div className="well">
            <h1 className="has-text-centered is-size-3">
              <span className="icon is-medium">
                <i className="fa fa-cutlery" />
              </span>
              Search by Cuisine
            </h1>
            <ul className="inner-grid">
              {this.state.cuisines.map(cuisine =>
                <NavLink to={`${match.url}/${cuisine}`} key={cuisine} className="button is-link">
                  {cuisine}
                </NavLink>
              )}
            </ul>
          </div>
        </div>
        <Route
          path={`${match.path}/:cuisineId`}
          render={props =>
            <SearchByCityResults {...props} cityId={cityId} suburbId={match.params.suburbId} />}
        />
      </div>
    );
  }
}

export default RefineSearchByCuisine;
