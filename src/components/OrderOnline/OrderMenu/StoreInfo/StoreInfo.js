import React from "react";
import OrderDeliveryOptions from "../OrderDeliveryOptions/OrderDeliveryOptions";
import "./StoreInfoStyles.css";

const StoreInfo = ({ restaurant }) => {
  return (
    <div className="store-header">
      <div className="storeinfo-wrapper">
        <div className="storeinfo-img">
          <img src={restaurant.image} alt="logo" className="image is-64x64" />
        </div>
        <div className="storeinfo-content">
          <h3 className="is-size-4 has-text-grey-dark">
            {restaurant.name}
            <span className="restaurant-tagline has-text-grey-light">{restaurant.tagline}</span>
          </h3>
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
      <OrderDeliveryOptions />
    </div>
  );
};

export default StoreInfo;
