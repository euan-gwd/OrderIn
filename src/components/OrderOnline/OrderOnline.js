import React, { Component } from "react";
import "./orderonline_styles.css";

class OrderOnline extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <div className="App-header">
          <h2>Take Away Menu Main</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default OrderOnline;
