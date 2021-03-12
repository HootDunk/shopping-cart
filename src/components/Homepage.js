import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import '../styles/Homepage.css'
export default function Homepage(props) {
  return (
    <div>
      <Banner />
      <div className="homepage-content">
        {/* Header needs to be inside main-content div as its position is set to fixed (outside of document flow) */}
        <Header cart={props.cart} addToCart={props.addToCart} getItemInfo={props.getItemInfo}/>
      </div>
      <Footer />
    </div>
  )
}
