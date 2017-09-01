import React from "react";
const OrderMenuHeader = ({ restaurant }) => {
  return (
    <div className="store-header">
      <div className="media">
        <div className="media-left">
          <img src={restaurant.image} alt="logo" className="image is-64x64" />
        </div>
        <div className="media-content">
          <div>
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
    </div>
  );
};

export default OrderMenuHeader;
