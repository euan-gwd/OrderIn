import React, { Component } from "react";
import { NavLink, Route } from "react-router-dom";
import RefineSearchByCuisine from "./RefineSearchByCuisine";
import "../search_styles.css";

class RefineSearchBySuburb extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cities: this.props.data,
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
    const { match } = this.props;
    return (
      <div>
        <div className="container">
          <div className="box has-text-centered has-text-danger">
            <span className="selection-text-padding has-text-grey-light">Cities</span>
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
                <NavLink to={`${match.url}/${suburb}`} key={suburb} className="button is-link">
                  {suburb}
                </NavLink>
              )}
            </div>
          </div>
        </div>
        <Route
          path={`${match.path}/:suburbId`}
          render={props => <RefineSearchByCuisine {...props} cityId={match.params.cityId} />}
        />
      </div>
    );
  }
}

export default RefineSearchBySuburb;
