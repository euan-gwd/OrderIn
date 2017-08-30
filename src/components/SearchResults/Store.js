import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { restaurant: {}, fireRedirect: false };
  }

  handleClick = () => {
    const { details, selectStore } = this.props;
    selectStore(details.name);
    this.setState({ fireRedirect: true });
  };

  render() {
    const { details } = this.props;
    const storeId = details.name.replace(/\s+/g, "");
    return (
      <li className="media">
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
          <button className="button is-danger is-outlined" onClick={this.handleClick}>
            Order Now
          </button>
        </div>
        {this.state.fireRedirect && <Redirect push to={`/order-online/${storeId}`} />}
      </li>
    );
  }
}

export default Store;
