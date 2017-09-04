import React from "react";
import "./OrderOnlineStyles.css";
import OrderBreadCrumbNav from "./OrderBreadCrumbNav/OrderBreadCrumbNav";
import OrderMenu from "./OrderMenu/OrderMenu";

const OrderOnline = ({ restaurantName }) => (
  <div className="StoreMenu">
    <main className="container">
      <OrderBreadCrumbNav />
      <OrderMenu restaurantName={restaurantName} />
    </main>
  </div>
);

export default OrderOnline;