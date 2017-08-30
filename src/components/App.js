import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchContainer from "./Search/SearchByCity/SearchContainer";
import RefineSearchBySuburb from "./Search/";
import SearchResultsList from "./SearchResults/SearchResultsList";
import OrderOnline from "./OrderOnline/OrderOnline";
import NotFound from "./NotFound";
import { Cities } from "../mock/sample-city-list";

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
    const [street, suburb, city] = item;
    console.log(street);
    const cuisine = undefined;
    const searchItem = {
      suburb,
      city,
      cuisine
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
                />
              )}
            />
            <Route
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
              path="/Cities/:cityId/:suburbId"
              render={props => (
                <SearchContainer
                  {...props}
                  citiesData={Cities}
                  cityName={this.state.selectedCity}
                  suburbName={this.state.selectedSuburb}
                  selectCuisine={this.selectCuisine.bind(this)}
                  selectStore={this.selectStore.bind(this)}
                />
              )}
            />
            <Route path="/Cuisine/:cuisineId" render={() => <SearchByCuisine />} />
            <Route
              path="/Search"
              render={() => <SearchResultsList searchResult={this.state.searchResult} />}
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
