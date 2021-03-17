import React from 'react'
import Button from "./Button";
import Footer from './Footer'
import { Link } from "react-router-dom"
import '../styles/Homepage.css'
export default function Homepage(props) {
  return (
    <div>
      <div className="homepage-content">
        <div>
          <h1>Energy <span>Felt</span></h1>
          <h2>The Gold One</h2>
          <Link to="/buy-online/item-info/1">
            <Button class="homepage" text="Shop Gold" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}
