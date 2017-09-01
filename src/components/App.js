import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import {
  RefineSearchBySuburb,
  RefineSearchByCuisine,
  SearchCityResultsContainer,
  RefineCuisineSearchByCity,
  RefineCuisineSearchBySuburb,
  SearchCuisineResultsContainer
} from "./Search/";
import SearchResultsList from "./SearchResults/SearchResultsList";
import OrderOnline from "./OrderOnline/OrderOnline";
import NotFound from "./NotFound";
import { Cities } from "../mock/sample-city-list";
import { Cuisines } from "../mock/sample-cuisine-list";
import { Stores } from "../mock/sample-stores";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {},
      selectedStore: {},
      selectedCity: {},
      selectedSuburb: {},
      selectedCuisine: {}
    };
  }

  searchSelected(searchTerm) {
    console.log(searchTerm);
    const [street, suburbName, cityName] = searchTerm;
    console.log(street);
    const cuisineName = undefined;
    const searchItem = {
      suburbName,
      cityName,
      cuisineName
    };
    this.setState({ searchResult: searchItem });
  }

  selectStore(store) {
    this.setState({ selectedStore: store });
  }

  selectCity(item) {
    this.setState({ selectedCity: item });
  }

  selectSuburb(item) {
    this.setState({ selectedSuburb: item });
  }

  selectCuisine(item) {
    this.setState({ selectedCuisine: item });
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => (
                <Home
                  searchSelected={this.searchSelected.bind(this)}
                  selectCity={this.selectCity.bind(this)}
                  selectCuisine={this.selectCuisine.bind(this)}
                  citiesData={Cities}
                  cuisinesData={Cuisines}
                />
              )}
            />
            <Route
              exact
              path="/Cities/:cityId"
              render={props => (
                <RefineSearchBySuburb
                  {...props}
                  citiesData={Cities}
                  cityName={this.state.selectedCity}
                  selectSuburb={this.selectSuburb.bind(this)}
                  selectStore={this.selectStore.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/Cities/:cityId/:suburbId"
              render={props => (
                <RefineSearchByCuisine
                  {...props}
                  cuisinesData={Cuisines}
                  cityName={this.state.selectedCity}
                  suburbName={this.state.selectedSuburb}
                  selectCuisine={this.selectCuisine.bind(this)}
                  selectStore={this.selectStore.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/Cities/:cityId/:suburbId/:cuisineId"
              render={() => (
                <SearchCityResultsContainer
                  cityName={this.state.selectedCity}
                  suburbName={this.state.selectedSuburb}
                  cuisineName={this.state.selectedCuisine}
                  selectStore={this.selectStore.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/Cuisine/:cuisineId"
              render={props => (
                <RefineCuisineSearchByCity
                  {...props}
                  citiesData={Cities}
                  cuisineName={this.state.selectedCuisine}
                  selectCity={this.selectCity.bind(this)}
                  selectStore={this.selectStore.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/Cuisine/:cuisineId/:cityId"
              render={props => (
                <RefineCuisineSearchBySuburb
                  {...props}
                  citiesData={Cities}
                  cuisineName={this.state.selectedCuisine}
                  cityName={this.state.selectedCity}
                  selectSuburb={this.selectSuburb.bind(this)}
                  selectStore={this.selectStore.bind(this)}
                />
              )}
            />
            <Route
              exact
              path="/Cuisine/:cuisineId/:cityId/:suburbId"
              render={() => (
                <SearchCuisineResultsContainer
                  cuisineName={this.state.selectedCuisine}
                  cityName={this.state.selectedCity}
                  suburbName={this.state.selectedSuburb}
                  selectStore={this.selectStore.bind(this)}
                />
              )}
            />
            <Route
              path="/Search"
              render={() => (
                <Route
                  path="/Search"
                  render={() => (
                    <SearchResultsList
                      searchResult={this.state.searchResult}
                      selectStore={this.selectStore.bind(this)}
                    />
                  )}
                />
              )}
            />
            <Route
              path="/order-online/:storeId"
              render={() => (
                <OrderOnline name={this.state.selectedStore} restaurantsData={Stores} />
              )}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
