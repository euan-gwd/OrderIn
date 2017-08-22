import React from "react";

const CityList = ({ name, showSuburbs }) =>
  <button className="button is-link" onClick={showSuburbs.bind(this)}>
    {name}
  </button>;

export default CityList;
