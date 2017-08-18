import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bulma/css/bulma.css";
import "font-awesome/css/font-awesome.css";
import "./index.css";
import StorePicker from "./components/StorePicker/StorePicker";
import App from "./components/App";
import NotFound from "./components/NotFound";
import registerServiceWorker from "./registerServiceWorker";

const Root = () =>
  <Router>
    <Switch>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Switch>
  </Router>;

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
