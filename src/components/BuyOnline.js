import React from 'react'
import StoreItem from "./StoreItem"
import '../styles/BuyOnline.css'
export default function BuyOnline(props) {

  return (
    <div>
      <div className="store-content">
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
