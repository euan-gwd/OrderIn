import React, { Component } from "react";
import Search from "./Search";
import CuisineListing from "./CuisineListing";
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
        <CuisineListing searchSelected={this.searchSelected.bind(this)} />
        {this.state.searchResult !== 0
          ? <StorePicker searchResult={this.state.searchResult} />
          : <div />}
      </div>
    );
  }
}

export default Home;
