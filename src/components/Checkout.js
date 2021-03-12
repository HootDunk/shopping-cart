import React from 'react'
import CartItem from './CartItem'
import Button from './Button'
import '../styles/Checkout.css'
export default function Checkout(props) {
  // need to disable or hide the shopping cart when on the checkout page.
  // could potentially do useEffect? not sure.
  
  // add an h1 that says 'Your Order' over the checkout items

  // also need to turn the checkout item into its own component.

  // checkout can display cart and have overview
  // button to confirm purchase can go at bottom. clicking takes you to the thank you message with a countdown to be redirected to home.
  // this way the CartItem can be re-used as well.  just make a container element

  // conditionally link to checkout page. ie, if no items in cart, don't show the checkout page.

  return (
    <div>
      <div>
        <div className="order-complete">
          <div className="order-container">
            <h1>Your Cart</h1>
            
            <CartItem />
            <CartItem />
            <CartItem />
            <CartItem />

            <div className="total">
              <h2>Total: $24.99</h2>
            </div>
          </div>
          <Button text="Confirm Purchase" />

          {/* <div className="message">
            <div>
              <h1>We will process your order soon.</h1>
              <h1>Thank you for your purchase.</h1>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}