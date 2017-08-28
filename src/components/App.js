import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";
import SearchByCuisine from "./Search/SearchByCuisine/SearchByCuisine";
import SearchByCity from "./Search/SearchByCity/SearchByCity";
import SearchResultsList from "./OrderOnline/OrderOnline";
import NotFound from "./NotFound";

const App = () =>
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Cities/:cityId" component={SearchByCity} />
        <Route path="/Cuisine/:cuisineId" component={SearchByCuisine} />
        <Route path="/order-online/:storeId" component={SearchResultsList} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>;

export default App;
