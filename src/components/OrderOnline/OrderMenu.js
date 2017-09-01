import React, { Component } from "react";
import "./ordermenustyles.css";

class OrderMenu extends Component {
  render() {
    const { name, storesData } = this.props;
    // const store = storesData.find(store => store.name === name);
    console.log(storesData);
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
