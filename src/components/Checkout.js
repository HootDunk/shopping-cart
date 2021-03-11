import React from 'react'
import Header from './Header'
import Banner from './Banner'
import '../styles/Checkout.css'
export default function Checkout(props) {
  return (
    <div>
      <Banner />
      <div>
        <Header darkBanner={true}/>
        <div className="order-complete">
          <div className="message">
            <h1>We will process your order soon.</h1>
            <h1>Thank you for your purchase.</h1>
          </div>

        </div>
        
      </div>
    </div>
  )
}