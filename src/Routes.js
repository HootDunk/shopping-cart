import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BuyOnline from './components/BuyOnline';
import StoreLocator from './components/StoreLocator';
const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/buy-online" component={BuyOnline} />
        <Route exact path="/store-locator" component={StoreLocator} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;