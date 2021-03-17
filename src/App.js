import React, { useState } from 'react'
import Routes from './Routes'

import storeContent from './data'

export default function App() {
  
  const [cart, setCart] = useState({
    totalItems: 0,
    items: [],
    isOpen: false,
  });

  const toggleCart = () => {
    setCart(prevCart => {
      return {
        ...prevCart,
        isOpen: !prevCart.isOpen,
      }
    })
  }

  const resetCart = () => {
    setCart(
      {
        totalItems: 0,
        items: [],
        isOpen: false,
      }
    )
  }

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
        isOpen: prevCart.isOpen,
      }
    });
  }

  const removeOne = (id) => {
    let copy = [...cart.items];
    // get cart item index and drecrment
    const index = copy.findIndex(item => item.id === id);
    // item not in cart, do nothing
    if (index === -1){
      return;
    }
    copy[index].count--;
    // if count reaches zero, remove the item
    if (copy[index].count === 0){
      copy.splice(index, 1);
    }
    setCart(prevCart => {
      return {
        totalItems: prevCart.totalItems - 1,
        items: copy,
        isOpen: prevCart.isOpen,
      }
    });
  }
  // remove all items of matching id from cart
  const removeAll = (id) => {
    console.log(id)
    let copy = [...cart.items];
    // just filter and update state
    copy = copy.filter(item => item.id !== id);
    let newTotal = 0;
    copy.forEach(item => newTotal += item.count);
    setCart(prevCart => {
      return {
        totalItems: newTotal,
        items: copy,
        isOpen: prevCart.isOpen,
      }
    }

    )
  }

  // returns the complete information for that item. (imgs of product, description, price, etc)
  const getItemInfo = (id) => {
    return storeContent.find(item => item.id === id)
  }

  const getCartTotal = () => {
    let total = 0;
    cart.items.forEach((cartItem) => {
      let drink = storeContent.find(storeItem =>storeItem.id === cartItem.id);
      total += drink.price * cartItem.count;
    })
    total = Math.round(total * 100) / 100;
    return total;
  }


  return (
      <Routes 
        cart={cart} 
        removeAll={removeAll} 
        removeOne={removeOne} 
        addToCart={addToCart} 
        getItemInfo={getItemInfo} 
        getCartTotal={getCartTotal}
        toggleCart={toggleCart}
        resetCart={resetCart}
      />
  )
}
