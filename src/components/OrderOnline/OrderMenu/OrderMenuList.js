import React, { Component } from "react";

class OrderMenuList extends Component {
  state = {};
  render() {
    return (
      <div className="store-main-content">
        <header className="menu-list-header">
          <span className="is-size-4">Menu</span>
          <span>
            <i className="fa fa-icon fa-leaf has-text-success" />
            Vegetarian
          </span>
        </header>
        <main>menu Listing</main>
      </div>
    );
  }
}

export default OrderMenuList;
