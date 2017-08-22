import React, { Component } from "react";
import Search from "./Search";
import CategoryListing from "./CategoryListing";
import StorePicker from "../StorePicker/StorePicker";

class Home extends Component {
  state = {
    searchResult: 0
  };

  searchSelected(item) {
    this.setState({ searchResult: item });
  }

  render() {
    return (
      <div>
        <Search searchSelected={this.searchSelected.bind(this)} />
        <CategoryListing searchSelected={this.searchSelected.bind(this)} />
        {this.state.searchResult !== 0
          ? <StorePicker searchResult={this.state.searchResult || 0} />
          : <div />}
      </div>
    );
  }
}

export default Home;
