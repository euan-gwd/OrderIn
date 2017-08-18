import React from "react";

const City = ({ name, suburbs }) =>
  <li className="column is-4 has-text-centered">
    <button className="button is-danger">
      {name}
    </button>
  </li>;

export default City;
