import React, { Component } from "react";
import Search from "./Search";
import SearchByCuisine from "./SearchByCuisine";
import StoreList from "../StoreList/StoreList";

class Home extends Component {
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
        <Search
          searchSelected={this.searchSelected.bind(this)}
          fromSearchForm={this.fromSearchForm.bind(this)}
        />
        <SearchByCuisine searchSelected={this.searchSelected.bind(this)} />
        {this.state.searchResult !== 0
          ? <StoreList searchResult={this.state.searchResult} />
          : <div />}
      </div>
    );
  }
}

export default Home;
