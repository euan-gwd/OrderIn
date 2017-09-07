import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";

const Root = () => (
  <Router>
    <Route component={App} />
  </Router>
);

export default Root;

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
