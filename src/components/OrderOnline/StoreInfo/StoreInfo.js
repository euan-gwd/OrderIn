import React from "react";
import OrderDeliveryOptions from "./OrderDeliveryOptions/OrderDeliveryOptions";
import "./StoreInfoStyles.css";

const StoreInfo = ({ restaurant, selectDeliveryOption, selectedOption, deliveryAddress }) => {
  return (
    <div className="store-header">
      <div className="storeinfo-wrapper">
        <img src={restaurant.image} alt="logo" className="storeinfo-img" />
        <div className="storeinfo-name has-text-bold has-text-grey-dark">{restaurant.name}</div>
        <span className="storeinfo-tagline has-text-grey-light">{restaurant.tagline}</span>
        <span className="storeinfo-address has-text-grey-light">
          <i className="fa fa-icon fa-map-marker" />
          {restaurant.address}
        </span>
        <span className="storeinfo-phone has-text-grey-light">
          <i className="fa fa-icon fa-phone" />
          {restaurant.tel}
        </span>
      </div>
      <OrderDeliveryOptions
        selectDeliveryOption={selectDeliveryOption}
        selectedOption={selectedOption}
        deliveryAddress={deliveryAddress}
      />
    </div>
  );
};

export default StoreInfo;
