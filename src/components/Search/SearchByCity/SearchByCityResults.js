import React from "react";
import SearchResultsList from "../../SearchResults/SearchResultsList";

const SearchByCityResults = ({ match, suburbId, cityId }) => {
  const cuisine = match.params.cuisineId;
  const city = cityId;
  const suburb = suburbId;
  const searchResult = { suburb, city, cuisine };
  return (
    <div className="container">
      <div className="box has-text-centered has-text-danger">
        <span className="selection-text-padding has-text-grey-light">Cities</span>
        <span className="icon is-left has-text-grey-light">
          <i className="fa fa-chevron-right fa-lg" />
        </span>
        <span className="selection-text-padding has-text-grey-light">
          {city}
        </span>
        <span className="icon is-left has-text-grey-light">
          <i className="fa fa-chevron-right fa-lg" />
        </span>
        <span className="selection-text-padding has-text-grey-light">
          {suburb}
        </span>
        <span className="icon is-left has-text-grey-light">
          <i className="fa fa-chevron-right fa-lg" />
        </span>
        <span className="selection-text-padding ">
          {cuisine}
        </span>
      </div>
      <SearchResultsList searchResult={searchResult} />
    </div>
  );
};

export default SearchByCityResults;
