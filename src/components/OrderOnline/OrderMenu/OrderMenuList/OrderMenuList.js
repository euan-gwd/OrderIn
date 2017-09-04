import React from "react";
import OrderMenuItem from "./OrderMenuItem";
import "./OrderMenuList.css";

const OrderMenuList = ({ menuData }) => {
  return (
    <div className="store-main-content">
      <header className="menu-list-header">
        <span className="is-size-4">Menu</span>
        <span>
          <i className="fa fa-icon fa-leaf has-text-success" />
          Vegetarian
        </span>
      </header>
      <ul>{menuData.map(item => <OrderMenuItem key={item.name} menuItem={item} />)}</ul>
    </div>
  );
};

export default OrderMenuList;
