import React from "react";
import { Route } from "react-router-dom";
import "./StoreStyles.css";

class Store extends React.Component {
  render() {
    const { details, selectStore } = this.props;
    const storeId = details.name.replace(/\s+/g, "");
    return (
      <div className="storelist-wrapper">
        <img src={details.image} alt="logo" className="storelist-img" />
        <div className="storelist-name has-text-bold has-text-grey-dark">{details.name}</div>
        <div className="storelist-address has-text-grey-light">{details.address}</div>
        <Route
          render={props => (
            <button
              onClick={() => {
                selectStore(details.name);
                props.history.push(`/order-online/${storeId}`);
              }}
              className="store-button"
            >
              Order Now
            </button>
          )}
        />
      </div>
    );
  }
}

export default Store;
