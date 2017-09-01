import React, { Component } from "react";
import "./ordermenustyles.css";

class OrderMenu extends Component {
  render() {
    const { name, restaurantsData } = this.props;
    // const restaurant = restaurantsData.find(restaurant => restaurant.name === name);
    console.log(name);
    console.log(restaurantsData);
    // console.log(restaurant);
    return (
      <div className="store-menu">
        <header className="store-header">Store info</header>
        <main className="store-main-content">Menu</main>
        <aside className="store-sidebar">Order</aside>
      </div>
    );
  }
}

export default OrderMenu;
