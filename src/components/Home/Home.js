import React, { Component } from "react";
import Search from "./Search";
import City from "./City";
import Cuisine from "./Cuisine";

class Home extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <Search />
        <City />
        <Cuisine />
      </div>
    );
  }
}

export default Home;
