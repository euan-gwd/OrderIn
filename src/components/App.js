import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import { RefineSearchBySuburb, RefineSearchByCuisine, SearchCityResultsContainer } from "./Search/";
import OrderOnline from "./OrderOnline/OrderOnline";
import NotFound from "./NotFound";
import { Cities } from "../mock/sample-city-list";
import { Cuisines } from "../mock/sample-cuisine-list";

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

  searchSelected(SearchTerm) {
    const item = SearchTerm.split(",");
    const [street, suburbName, cityName] = item;
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
              path="/order-online/:storeId"
              render={() => <OrderOnline name={this.state.selectedStore} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
