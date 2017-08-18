import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import Home from "./components/Home/Hero";
import App from "./components/App";
import NotFound from "./components/NotFound";
import registerServiceWorker from "./registerServiceWorker";

const Root = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>;

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
