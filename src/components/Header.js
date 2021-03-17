import React from 'react'
import { Link } from "react-router-dom"
import '../styles/Header.css'
import Logo from '../3d-assets/3d-logo.png'
import ShoppingCart from './ShoppingCart'
export default function Header(props) {
  // console.log("header props => ", props)
  return (
    <div className={props.class}>
      <header>
        <div className="logo">
          <img src={Logo} alt="3d logo"/>
        </div>

        <div className="links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/buy-online">Buy Online</Link>
            </li>
            <li>
              <ShoppingCart 
                addToCart={props.addToCart} 
                cart={props.cart} 
                getItemInfo={props.getItemInfo} 
                getCartTotal={props.getCartTotal}
                removeOne={props.removeOne}
                removeAll={props.removeAll}
                toggleCart={props.toggleCart}
              />
            </li>
          </ul>
        </div>
      </header>
    </div>
  )
}
