import React, {useState} from 'react'
import CartItem from "./CartItem"
import Button from "./Button"
import '../styles/ShoppingCart.css'

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }


  if (isOpen){
    // show cart summary with proceed to checkout button
    return(
          <div className="shopping-cart">
            <i onClick={handleClick}  className="fas fa-shopping-cart"></i>
            <p>+1</p>
            <div className="shopping-cart-open">
              <h1>Shopping Cart</h1>
              <CartItem />
              <CartItem />

              <div className="subtotal">
                <p>Subtotal</p>
                <h2>$52.87</h2>
                <p className="fine-print">Taxes and shipping calculated at checkout</p>
                <Button text="Check Out"/>
              </div>
            </div>
          </div>
    )
  } else {
    //show cart image with amount of items
    return (
      <div onClick={handleClick} className="shopping-cart">
        <i className="fas fa-shopping-cart"></i>
        <p>+1</p>
      </div>
    )
  }
}
