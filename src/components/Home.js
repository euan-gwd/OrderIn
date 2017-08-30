import React from "react";
import SearchBox from "./Search/SearchBox";
// import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchByCity from "./Search/SearchByCity/SearchByCity";

const Home = ({ searchSelected, selectCity, citiesData }) => (
  <div>
    <SearchBox searchSelected={searchSelected} />
    <SearchByCity searchSelected={searchSelected} selectCity={selectCity} citiesData={citiesData} />
  </div>
);

export default Home;
