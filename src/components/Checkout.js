import React from 'react'
import CartItem from './CartItem'
import Button from './Button'
import '../styles/Checkout.css'
export default function Checkout(props) {
  console.log("checkout props => ", props)
  // conditionally link to checkout page. ie, if no items in cart, don't show the checkout page.
  // add local start to manage purchase action, display time until redirect and a thank you message.

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
          })}
        <div className="total">
          <h2>Total: ${props.getCartTotal()}</h2>
        </div>
      </div>
      {props.cart.totalItems !== 0 && <Button text="Confirm Purchase" />}

      {/* <div className="message">
        <div>
          <h1>We will process your order soon.</h1>
          <h1>Thank you for your purchase.</h1>
        </div>
      </div> */}
    </div>

  )
}