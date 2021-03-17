import React from 'react'
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import Button from "./Button"
import '../styles/ShoppingCart.css'

export default function ShoppingCart(props) {

  // console.log("shopping cart => ", props)

  if (props.cart.isOpen){
    // show cart summary with proceed to checkout button
    return(
          <div className="shopping-cart">
            <i onClick={() => props.toggleCart()}  className="fas fa-shopping-cart"></i>
            <p>{props.cart.totalItems && `+${props.cart.totalItems}`}</p>
            <div className="shopping-cart-open">
              <h1>Shopping Cart</h1>
              {props.cart.items.map((item) => {
                return <CartItem 
                  key={item.id} 
                  amount={item.count} 
                  item={props.getItemInfo(item.id)}
                  addToCart={props.addToCart}
                  removeOne={props.removeOne}
                  removeAll={props.removeAll}
                />
              })}

              <div className="subtotal">
                <p>Subtotal</p>
                <h2>${props.getCartTotal()}</h2>
                <p className="fine-print">Taxes and shipping calculated at checkout</p>
                <Link onClick={() => props.toggleCart()} to="/checkout">
                  <Button text="Check Out"/>
                </Link>

              </div>
            </div>
          </div>
    )
  } else {
    //show cart image with amount of items
    return (
      <div onClick={() => props.toggleCart()} className="shopping-cart">
        <i className="fas fa-shopping-cart"></i>
        <p>{props.cart.totalItems && `+${props.cart.totalItems}`}</p>
      </div>
    )
  }
}
