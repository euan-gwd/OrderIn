import React from "react";
import { SearchBox, SearchByCity, SearchByCuisine } from "./Search";

const Home = ({ searchSelected, selectCity, citiesData, selectCuisine, cuisinesData }) => (
  <div>
    <SearchBox searchSelected={searchSelected} />
    <SearchByCity selectCity={selectCity} citiesData={citiesData} />
    <SearchByCuisine selectCuisine={selectCuisine} cuisinesData={cuisinesData} />
  </div>
);

export default Home;
