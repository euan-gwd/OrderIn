import React from "react";

const CityList = ({ name, showSuburbs, getCityName }) =>
  <button
    className="button is-link"
    onClick={event => {
      showSuburbs(this);
      getCityName(this, name);
    }}
  >
    {name}
  </button>;

export default CityList;
