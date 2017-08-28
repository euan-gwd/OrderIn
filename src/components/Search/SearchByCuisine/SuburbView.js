import React from "react";

const SuburbView = ({ match, cuisineId, cityId }) =>
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
      <span className="selection-text-padding has-text-grey-light">
        {cityId}
      </span>
      <span className="icon is-left has-text-grey-light">
        <i className="fa fa-chevron-right fa-lg" />
      </span>
      <span className="selection-text-padding ">
        {match.params.suburbId}
      </span>
    </div>
  </div>;

export default SuburbView;
