import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import "../search_styles.css";
import sampleCuisines from "../../../mock/sample-cuisine-list";
import CuisineView from "./CuisineView";

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
            <span className="selection-text-padding">
              {cityId}
            </span>
            <span className="icon is-left">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
            <span className="selection-text-padding">
              {match.params.suburbId}
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
                <Link to={`${match.url}/${cuisine}`} key={cuisine} className="button is-link">
                  {cuisine}
                </Link>
              )}
            </ul>
          </div>
        </div>
        <Route
          path={`${match.url}/:cuisineId`}
          render={props =>
            <CuisineView {...props} cityId={cityId} suburbId={match.params.suburbId} />}
        />
      </div>
    );
  }
}

export default RefineSearchByCuisine;
