import React from 'react'
// import { Link } from "react-router-dom"
import '../styles/Header.css'
import Logo from '../3d-assets/3d-logo.png'
import ShoppingCart from './ShoppingCart'
export default function Header() {
  return (
    <div className="header">
      <header>
        <div className="logo">
          <img src={Logo} alt="3d logo"/>
        </div>

        <div className="links">
          <ul>
            <li>Home</li>
            <li>Buy Online</li>
            <li>Store Locator</li>
            <li><ShoppingCart /></li>
          </ul>
        </div>
      </header>
    </div>
  )
}
