import React, { useState, useEffect } from 'react'
import { Redirect } from "react-router-dom";
import CartItem from './CartItem'
import Button from './Button'
import '../styles/Checkout.css'
export default function Checkout(props) {

  const [isPurchased, setIsPurchased] = useState(false);
  const [redirectTime, setRedirectTime] = useState(5);
  const [redirect, setRedirect] = useState(null);


  useEffect(()=> {
    let timer;
    if (isPurchased){
      timer = setInterval(() => {
        setRedirectTime(prevTime => prevTime - 1);
      }, 1000);
    }
    // cleanup timer when we unmount
    return () => {
      clearInterval(timer)
    }

  }, [isPurchased]);

  useEffect(() => {
    if (redirectTime === 0){
      setRedirect("/")
    }
  }, [redirectTime]);

  
  const {resetCart} = props;
  useEffect(() => {
    if (redirect === "/"){
      resetCart();
    }
  }, [redirect])

  const handlePurchase = () => {
    setIsPurchased(true);
    // props.resetCart();
  }

  if (redirect){
    return <Redirect to={redirect} />
  }
  else if (isPurchased){
    return (
      <div className="order-complete">
        <div className="order-container">
          <h1>Purchase Complete! you will be redirected to the homepage in {redirectTime} seconds</h1>
        </div>
      </div>
    )
  }
  else if (!isPurchased && props.cart.totalItems !== 0){
    return (
      <div className="order-complete">
        <div className="order-container">
          <h1>Your Cart</h1>
          {props.cart.items.map((item) => {
              return <CartItem 
                key={item.id} 
                amount={item.count} 
                item={props.getItemInfo(item.id)}
                addToCart={props.addToCart}
                removeOne={props.removeOne}
                removeAll={props.removeAll}
              />
            })
          }
          <div className="total">
            <h2>Total: ${props.getCartTotal()}</h2>
          </div>
        </div>
      <Button function={handlePurchase} text="Confirm Purchase" />
    </div>
    )
  }
  else {
    return (
      <div className="order-complete">
        <div className="order-container">
          <h1>No Items in Cart</h1>
        </div>
      </div>
    )
  }
}