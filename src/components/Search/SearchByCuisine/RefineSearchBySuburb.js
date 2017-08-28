import React, { Component } from "react";
import { Link, Route } from "react-router-dom";
import SuburbView from "./SuburbView";
import "../search_styles.css";
import sampleCities from "../../../mock/sample-city-list";

class RefineSearchBySuburb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: sampleCities,
      suburbs: {}
    };
  }

  componentWillMount() {
    const city = this.props.match.params.cityId;
    const suburbsList = this.state.cities[city].suburbs;
    this.setState({ suburbs: suburbsList });
  }

  componentWillReceiveProps(nextProps) {
    const city = nextProps.match.params.cityId;
    const suburbsList = this.state.cities[city].suburbs;
    this.setState({ suburbs: suburbsList });
  }

  render() {
    const { match, cuisineId } = this.props;
    return (
      <div>
        <div className="container">
          <div className="box has-text-centered has-text-danger">
            <span className="selection-text-padding has-text-grey-light">Cuisine</span>
            <span className="icon is-left has-text-grey-light">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
            <span className="selection-text-padding has-text-grey-light">
              {cuisineId}
            </span>
            <span className="icon is-left has-text-grey-light">
              <i className="fa fa-chevron-right fa-lg" />
            </span>
            <span className="selection-text-padding">
              {match.params.cityId}
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
                <Link to={`${match.url}/${suburb}`} key={suburb} className="button is-link">
                  {suburb}
                </Link>
              )}
            </div>
          </div>
        </div>
        <Route
          path={`${match.path}/:suburbId`}
          render={props =>
            <SuburbView {...props} cuisineId={cuisineId} cityId={match.params.cityId} />}
        />
      </div>
    );
  }
}

export default RefineSearchBySuburb;
