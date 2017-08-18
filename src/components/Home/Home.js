import React, { Component } from "react";
import Search from "./Search";
import City from "./City";
import Category from "./Category";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Search />
        <City />
        <Category />
      </div>
    );
  }
}

export default Home;
