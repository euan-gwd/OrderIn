import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header/Header";
import UserLoginModal from "./UserLoginModal";
import Footer from "./Footer/Footer";
import {
  RefineSearchBySuburb,
  RefineSearchByCuisine,
  SearchCityResultsContainer,
  RefineCuisineSearchByCity,
  RefineCuisineSearchBySuburb,
  SearchCuisineResultsContainer,
  SearchResultsList
} from "./Search/";
import OrderOnline from "./OrderOnline/OrderOnline";
import NotFound from "./NotFound";
import { Cities } from "../mockAPI/sample-city-list";
import { Cuisines } from "../mockAPI/sample-cuisine-list";
import { unSlug } from "./helpers";

class App extends React.PureComponent {
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

  previousLocation = this.props.location;

  componentWillUpdate(nextProps) {
    const { location } = this.props;
    // set previousLocation if props.location is not modal
    if (nextProps.history.action !== "POP" && (!location.state || !location.state.modal)) {
      this.previousLocation = this.props.location;
    }
  }

  searchSelected = searchTerm => {
    const [street, suburbName, cityName] = searchTerm;
    console.log(street);
    const cuisineName = undefined;
    const searchItem = {
      suburbName,
      cityName,
      cuisineName
    };
    this.setState({ searchResult: searchItem });
  };

  selectStore = store => {
    sessionStorage.setItem(`restaurantName`, store);
    const orderUid = Date.now();
    sessionStorage.setItem(`storeUniqueOrderNo`, orderUid);
    this.setState({ selectedStore: store });
  };

  selectCity = item => {
    const city = unSlug(item);
    this.setState({ selectedCity: city });
  };

  selectSuburb = item => {
    const suburb = unSlug(item);
    this.setState({ selectedSuburb: suburb });
  };

  selectCuisine = item => {
    const cuisine = unSlug(item);
    this.setState({ selectedCuisine: cuisine });
  };

  render() {
    const { location } = this.props;
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location
    ); // not initial render

    return (
      <div>
        <Header />
        <Switch location={isModal ? this.previousLocation : location}>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                searchSelected={this.searchSelected}
                selectCity={this.selectCity}
                selectCuisine={this.selectCuisine}
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
                selectSuburb={this.selectSuburb}
                selectStore={this.selectStore}
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
                selectCuisine={this.selectCuisine}
                selectStore={this.selectStore}
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
                selectStore={this.selectStore}
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
                selectCity={this.selectCity}
                selectStore={this.selectStore}
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
                selectSuburb={this.selectSuburb}
                selectStore={this.selectStore}
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
                selectStore={this.selectStore}
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
                    selectStore={this.selectStore}
                  />
                )}
              />
            )}
          />
          <Route
            path="/order-online/:storeId"
            render={() => <OrderOnline restaurantName={this.state.selectedStore} />}
          />
          <Route component={NotFound} />
        </Switch>
        {isModal ? <Route path="/register" component={UserLoginModal} /> : null}
        <Footer />
      </div>
    );
  }
}

export default App;
