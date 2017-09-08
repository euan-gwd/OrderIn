import React from "react";
import { Route } from "react-router-dom";
import "./StoreStyles.css";

class Store extends React.Component {
  render() {
    const { details, selectStore } = this.props;
    const storeId = details.name.replace(/\s+/g, "");
    return (
      <div className="storelist-wrapper">
        <div className="storelist-img">
          <img src={details.image} alt="logo" className="image is-64x64" />
        </div>
        <div className="storelist-content">
          <h5 className="title is-4 has-text-grey-dark">{details.name}</h5>
          <p className="subtitle is-6 has-text-grey-light">{details.address}</p>
        </div>
        <div className="storelist-actions">
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
