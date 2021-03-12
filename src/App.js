import React, { useState } from 'react'
import Routes from './Routes'
import storeContent from './data'

export default function App() {
  
  const [cart, setCart] = useState({
    totalItems: null,
    items: [],
  });

  
  // need to add removeFromCartFunction
  // connect the checkout page to js logic
  // add a message for when purchase is confirmed and reset cart after timeout
  // need to also do the homepage.

  // longterm changes -> redo css so that the header is separate from (but still overlays) page content.  then move
  // the header out and place outside the routes.  move all logic out as well.  It will really simplify the app. 

  const addToCart = (id) => {
    let copy = [...cart.items];
    // see if item is already in cart
    const index = copy.findIndex(item => item.id === id);
    // if item is in cart
    if (index !== -1){
      copy[index].count++;
    }
    // item is not in cart, add its id to the array with a count of 1
    else if (index === -1){
      copy = [...copy, {id: id, count: 1,}]
    }
    setCart(prevCart => {
      return {
        totalItems: prevCart.totalItems + 1,
        items: copy,
      }
    });
  }

  // maybe move this outside to it's own folder
  const getItemInfo = (id) => {
    return storeContent.find(item => item.id === id)
  }

  const getCartTotal = () => {
    let total = 0;
    cart.items.forEach((cartItem) => {
      let drink = storeContent.find(storeItem =>storeItem.id === cartItem.id);
      total += drink.price * cartItem.count;
    })
    return total;
  }

  // const incrementCount = (id) => {
  //   // we can actually use the addToCart method here.
  // }


  return (
    <div>
      <Routes cart={cart} addToCart={addToCart} getItemInfo={getItemInfo} getCartTotal={getCartTotal}/>
    </div>
  )
}
