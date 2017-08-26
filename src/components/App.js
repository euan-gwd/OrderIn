import React, { Component } from "react";
import SearchBox from "./Search/SearchBox";
import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchResultsList from "./SearchResults/SearchResultsList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: 0
    };
  }

  fromSearchForm(deliveryAddress) {
    // console.log(deliveryAddress);
    // this.setState({ deliveryAddress });
  }

  searchSelected(suburb, city, cuisine) {
    const searchItem = {
      suburb,
      city,
      cuisine
    };
    this.setState({ searchResult: searchItem });
  }

  render() {
    return (
      <div>
        <SearchBox
          searchSelected={this.searchSelected.bind(this)}
          fromSearchForm={this.fromSearchForm.bind(this)}
        />
        <SearchByCuisine searchSelected={this.searchSelected.bind(this)} />
        {this.state.searchResult !== 0
          ? <SearchResultsList searchResult={this.state.searchResult} />
          : <div />}
      </div>
    );
  }
}

export default App;
