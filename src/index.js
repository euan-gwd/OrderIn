import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import App from "./components/App";
import OrderOnline from "./components/OrderOnline/OrderOnline";
import NotFound from "./components/NotFound";
import registerServiceWorker from "./registerServiceWorker";

const Root = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={App} />
      <Route
        path="/order-online/:storeId"
        component={props => <OrderOnline name={props.match.params.storeId} />}
      />
      <Route component={NotFound} />
    </Switch>
  </Router>;

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
