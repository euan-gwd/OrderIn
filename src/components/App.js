import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchByCity from "./Search/SearchByCity/SearchByCity";
import SearchResultsList from "./SearchResults/SearchResultsList";
import NotFound from "./NotFound";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {}
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

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home searchSelected={this.searchSelected.bind(this)} />}
            />
            <Route
              path="/Cities/:cityId"
              render={() => <SearchByCity searchSelected={this.searchSelected.bind(this)} />}
            />
            <Route
              path="/Cuisine/:cuisineId"
              render={() => <SearchByCuisine searchSelected={this.searchSelected.bind(this)} />}
            />
            <Route
              path="/Search"
              render={() => <SearchResultsList searchResult={this.state.searchResult} />}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
