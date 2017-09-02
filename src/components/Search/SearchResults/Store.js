import React, { Component } from "react";
import { Route } from "react-router-dom";

class Store extends Component {
  render() {
    const { details, selectStore } = this.props;
    const storeId = details.name.replace(/\s+/g, "");
    return (
      <div className="media">
        <div className="media-left">
          <img src={details.image} alt="logo" className="image is-64x64" />
        </div>
        <div className="media-content">
          <div className="content">
            <h5 className="title has-text-grey-dark">{details.name}</h5>
            <p className="subtitle has-text-grey-light">{details.address}</p>
          </div>
        </div>
        <div className="media-right">
          <Route
            render={props => (
              <button
                onClick={() => {
                  selectStore(details.name);
                  props.history.push(`/order-online/${storeId}`);
                }}
                className="button is-danger is-outlined"
              >
                Order Now
              </button>
            )}
          />
        </div>
      </div>
    );
  }
}

export default Store;
