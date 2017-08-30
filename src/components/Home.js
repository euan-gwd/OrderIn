import React from "react";
import SearchBox from "./Search/SearchBox";
// import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
// import SearchByCity from "./Search/SearchByCity/SearchByCity";
import SearchContainer from "./Search/SearchByCity/SearchContainer";

const Home = ({ searchSelected }) => (
  <div>
    <SearchBox searchSelected={searchSelected} />
    <SearchContainer />
  </div>
);

export default Home;
