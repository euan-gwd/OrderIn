import React, { Component } from "react";
import Search from "./Search";
import CategoryListing from "./CategoryListing";

class Home extends Component {
  render() {
    return (
      <div className="">
        <Search />
        <CategoryListing />
      </div>
    );
  }
}

export default Home;
