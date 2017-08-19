import React from "react";

const SuburbList = ({ city }) =>
  <ul className="inner-grid">
    {city.map(suburb =>
      <li key={suburb}>
        {suburb}
      </li>
    )}
  </ul>;

export default SuburbList;
