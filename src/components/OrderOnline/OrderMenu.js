import React, { Component } from "react";
import "./ordermenustyles.css";

class OrderMenu extends Component {
  render() {
    const { name, restaurantsData } = this.props;
    const restaurant = restaurantsData.find(restaurant => restaurant.name === name);
    return (
      <div className="store-menu">
        <header className="store-header">
          <div className="media">
            <div className="media-left">
              <img src={restaurant.image} alt="logo" className="image is-64x64" />
            </div>
            <div className="media-content">
              <div className="">
                <h3 className="is-size-4 has-text-grey-dark">{restaurant.name}</h3>
                <span className="has-text-grey-light">
                  <i className="fa fa-icon fa-map-marker" />
                  {restaurant.address}
                </span>
                <span className="has-text-grey-light">
                  <i className="fa icon-padding fa-phone" />
                  {restaurant.tel}
                </span>
              </div>
            </div>
          </div>
        </header>
        <main className="store-main-content">Menu</main>
        <aside className="store-sidebar">Order</aside>
      </div>
    );
  }
}

export default OrderMenu;
