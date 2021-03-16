import React, {useState} from 'react'
import { Link } from "react-router-dom"
import CartItem from "./CartItem"
import Button from "./Button"
import '../styles/ShoppingCart.css'

export default function ShoppingCart(props) {

  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }

  console.log("shopping cart => ", props)

  // // maybe move this outside to it's own folder
  // const getItemInfo = (id) => {
  //   return props.storeContent.find(item => item.id === id)
  // }



  if (isOpen){
    // show cart summary with proceed to checkout button
    return(
          <div className="shopping-cart">
            <i onClick={handleClick}  className="fas fa-shopping-cart"></i>
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
                <Link to="/checkout">
                  <Button text="Check Out"/>
                </Link>

              </div>
            </div>
          </div>
    )
  } else {
    //show cart image with amount of items
    return (
      <div onClick={handleClick} className="shopping-cart">
        <i className="fas fa-shopping-cart"></i>
        <p>{props.cart.totalItems && `+${props.cart.totalItems}`}</p>
      </div>
    )
  }
}
