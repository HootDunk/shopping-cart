import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Homepage from "./components/Homepage";
import BuyOnline from './components/BuyOnline';
import StoreLocator from './components/StoreLocator';
import ItemInfo from "./components/ItemInfo";
import Checkout from "./components/Checkout";
import Header from './components/Header'
import data from './data'
import Banner from './components/Banner'
const Routes = (props) => {

  // this changes header styling at top level to save from unecessary component nesting
  const getHeader = (path) => {
      return <Header 
        class={(path === '/')? "header-homepage" : "header"} 
        cart={props.cart}
        removeAll={props.removeAll}
        removeOne={props.removeOne}
        addToCart={props.addToCart} 
        getItemInfo={props.getItemInfo}
        getCartTotal={props.getCartTotal}
      />
  }

  return(
    <BrowserRouter>
        <Banner />
      <Switch>
        <Route 
          exact path="/" 
          component={(routeProps) => {
            return <div>
              {getHeader(routeProps.match.path)}
              <Homepage 
                addToCart={props.addToCart}
                cart={props.cart}
                getItemInfo={props.getItemInfo}
              />
            </div>
          }
        } 
        />
        <Route 
          exact path="/buy-online" 
          component={(routeProps) => {
            return <div>
              {getHeader(routeProps.match.path)}
              <BuyOnline
                storeContent={data}
                addToCart={props.addToCart}
                getItemInfo={props.getItemInfo}
              />
            </div>
            }
          }
        />
        <Route exact path="/store-locator" component={StoreLocator} />
        <Route 
          exact path="/checkout" 
          component={(routeProps) => {
            return <div>
              {getHeader(routeProps.match.path)}
              <Checkout 
                cart={props.cart}
                removeAll={props.removeAll}
                removeOne={props.removeOne}
                addToCart={props.addToCart} 
                getItemInfo={props.getItemInfo}
                getCartTotal={props.getCartTotal}
              />
            </div>
            }
          } 
        />
        <Route 
          path="/buy-online/item-info/:id" 
          component={(routeProps) => {
            return <div>
              {getHeader(routeProps.match.path)}
              <ItemInfo 
                router={routeProps}
                removeOne={props.removeOne}
                addToCart={props.addToCart}
                cart={props.cart}
                getItemInfo={props.getItemInfo}
              />
            </div>
            }
          }
        />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes;