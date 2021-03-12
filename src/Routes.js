import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BuyOnline from './components/BuyOnline';
import StoreLocator from './components/StoreLocator';
import ItemInfo from "./components/ItemInfo";
import Checkout from "./components/Checkout";

import data from './data'

const Routes = (props) => {
  // Definitely Refactor the page layouts so that the header can be separate from the pages 
  return(
    <BrowserRouter>
      <Switch>
        <Route 
          exact path="/" 
          component={() => 
          <Homepage 
            addToCart={props.addToCart}
            cart={props.cart}
            getItemInfo={props.getItemInfo}
          />} 
        />
        <Route 
          exact path="/buy-online" 
          component={() =>  
            <BuyOnline
              storeContent={data}
              addToCart={props.addToCart}
              cart={props.cart}
              getItemInfo={props.getItemInfo}
              getCartTotal={props.getCartTotal}
            />} 
        />
        <Route exact path="/store-locator" component={StoreLocator} />
        <Route exact path="/checkout" component={Checkout} />

        <Route 
          path="/buy-online/item-info/:id" 
          component={(routeProps) => 
          <ItemInfo 
            router={routeProps} 
            addToCart={props.addToCart}
            cart={props.cart}
            getItemInfo={props.getItemInfo}
            getCartTotal={props.getCartTotal}
          />}
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;