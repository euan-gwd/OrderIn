import React from "react";

const Category = ({ name, searchSelected }) =>
  <button className="button is-danger" onClick={searchSelected.bind(this)}>
    {name}
  </button>;

export default Category;
