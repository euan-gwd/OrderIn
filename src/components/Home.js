import React from "react";
import SearchBox from "./Search/SearchBox";
import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchByCity from "./Search/SearchByCity/SearchByCity";

const Home = ({ searchSelected, selectCity, citiesData, selectCuisine, cuisinesData }) => (
  <div className="hero is-danger is-medium">
    <SearchBox searchSelected={searchSelected} />
    <SearchByCity selectCity={selectCity} citiesData={citiesData} />
    <SearchByCuisine selectCuisine={selectCuisine} cuisinesData={cuisinesData} />
  </div>
);

export default Home;
