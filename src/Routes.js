import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BuyOnline from './components/BuyOnline';
import StoreLocator from './components/StoreLocator';
import ItemInfo from "./components/ItemInfo";
import Checkout from "./components/Checkout";
const Routes = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/buy-online" component={BuyOnline} />
        <Route exact path="/store-locator" component={StoreLocator} />
        {/* will need to be changed to match the item id */}
        <Route exact path="/buy-online/item-info" component={ItemInfo} />
        <Route exact path="/checkout" component={Checkout} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;