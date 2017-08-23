import React, { Component } from "react";
import Search from "./Search";
import SearchByCuisine from "./SearchByCuisine";
import SearchByCity from "./SearchByCity";
import StorePicker from "../StorePicker/StorePicker";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: {}
    };
  }

  searchSelected(suburb, city, cuisine) {
    const item = {
      suburb,
      city,
      cuisine
    };
    this.setState({ searchResult: item });
  }

  render() {
    return (
      <div>
        <Search searchSelected={this.searchSelected.bind(this)} />
        <SearchByCuisine searchSelected={this.searchSelected.bind(this)} />
        <SearchByCity searchSelected={this.searchSelected.bind(this)} />
        {this.state.searchResult.length > 0 &&
          <StorePicker searchResult={this.state.searchResult} />}
      </div>
    );
  }
}

export default Home;
