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
        <Header 
          darkBanner={true} 
          cart={props.cart} 
          addToCart={props.addToCart} 
          getItemInfo={props.getItemInfo}
          getCartTotal={props.getCartTotal}
        />
        <h1>ENERGY DRINKS</h1>

        <div className="drink-selection">
          {props.storeContent.map((item) => {
            return <StoreItem key={item.id} data={item}/>
          })}


        </div>
      </div>
    </div>
  )
}
