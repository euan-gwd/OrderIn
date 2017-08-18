import React from "react";

const Category = ({ name }) =>
  <li className="column is-2 has-text-centered">
    <button className="button is-danger">
      {name}
    </button>
  </li>;

export default Category;
