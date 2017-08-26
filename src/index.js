import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import "font-awesome/css/font-awesome.css";
import App from "./components/App";
import NotFound from "./components/NotFound";
import registerServiceWorker from "./registerServiceWorker";

const Root = () =>
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>;

ReactDOM.render(<Root />, document.getElementById("root"));
registerServiceWorker();
