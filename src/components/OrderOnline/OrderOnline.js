import React from "react";
import "./orderonline_styles.css";
import OrderBreadCrumbNav from "./OrderBreadCrumbNav";
import OrderMenu from "./OrderMenu";

const OrderOnline = ({ name, restaurantsData }) => (
  <div className="StoreMenu">
    <main className="container">
      <OrderBreadCrumbNav />
      <OrderMenu name={name} restaurantsData={restaurantsData} />
    </main>
  </div>
);

export default OrderOnline;
