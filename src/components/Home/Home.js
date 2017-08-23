import React, { Component } from "react";
import Search from "./Search";
import SearchByCuisine from "./SearchByCuisine";
import SearchByCity from "./SearchByCity";
import StorePicker from "../StorePicker/StorePicker";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResult: 0
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
        {this.state.searchResult !== 0
          ? <StorePicker searchResult={this.state.searchResult} />
          : <div />}
      </div>
    );
  }
}

export default Home;
