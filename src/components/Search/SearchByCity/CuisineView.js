import React from "react";

const CuisineView = ({ match, suburbId, cityId }) =>
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
      <span className="selection-text-padding has-text-grey-light">
        {suburbId}
      </span>
      <span className="icon is-left has-text-grey-light">
        <i className="fa fa-chevron-right fa-lg" />
      </span>
      <span className="selection-text-padding ">
        {match.params.cuisineId}
      </span>
    </div>
  </div>;

export default CuisineView;
