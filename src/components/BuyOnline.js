import React from 'react'
import Header from './Header'
import Banner from './Banner'
import StoreItem from "./StoreItem"
import '../styles/BuyOnline.css'
export default function BuyOnline(props) {
  return (
    <div>
      <Banner />
      <div className="store-content">
        <Header darkBanner={true}/>
        <h1>ENERGY DRINKS</h1>

        <div className="drink-selection">
          <StoreItem />
          <StoreItem />
          <StoreItem />

        </div>
      </div>
    </div>
  )
}
