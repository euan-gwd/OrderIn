import React from "react";

const CityList = ({ name, showSuburbs }) =>
  <button
    className="button is-link"
    onClick={event => {
      showSuburbs(this);
    }}
  >
    {name}
  </button>;

export default CityList;
