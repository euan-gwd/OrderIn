import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchByCity from "./Search/SearchByCity/SearchByCity";
import NotFound from "./NotFound";

const App = () =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/Cities/:cityId" component={SearchByCity} />
      <Route path="/Cuisine/:cuisineId" component={SearchByCuisine} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>;

export default App;
