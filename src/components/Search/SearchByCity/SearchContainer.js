import React, { Component } from "react";
import "../search_styles.css";

class SearchContainer extends Component {
  render() {
    const { cityName, suburbName, cuisineName } = this.props;
    const searchResult = { suburbName, cityName, cuisineName };
    return (
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container">
            <div className="box has-text-centered has-text-danger">
              <span className="selection-text-padding has-text-grey-light">Cities</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding has-text-grey-light">{cityName}</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding has-text-grey-light">{suburbName}</span>
              <span className="icon is-left has-text-grey-light">
                <i className="fa fa-chevron-right fa-lg" />
              </span>
              <span className="selection-text-padding ">{cuisineName}</span>
            </div>
            <div className="" />
          </div>
        </div>
      </section>
    );
  }
}

export default SearchContainer;
