import React from "react";
import OrderMenuItem from "./OrderMenuItem";
import "./OrderMenuList.css";

class OrderMenuList extends React.PureComponent {
  render() {
    const { menuData } = this.props;
    return (
      <div className="store-main-content">
        <header className="menu-list-header">
          <span className="is-size-4">Menu</span>
          <span>
            <i className="fa fa-icon fa-leaf has-text-success" />
            Vegetarian
          </span>
        </header>
        <main>
          <ul>{menuData.map(item => <OrderMenuItem key={item.name} menuItem={item} />)}</ul>
        </main>
      </div>
    );
  }
}

export default OrderMenuList;
