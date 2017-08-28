import React from "react";
import SearchBox from "./Search/SearchBox";
import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchByCity from "./Search/SearchByCity/SearchByCity";

const Home = ({ searchSelected }) =>
  <div>
    <SearchBox searchSelected={searchSelected} />
    <SearchByCity />
    <SearchByCuisine  />
  </div>;

export default Home;
