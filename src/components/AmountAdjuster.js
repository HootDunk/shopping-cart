import React from 'react'
import '../styles/AmountAdjuster.css'
export default function AmountAdjuster(props) {
  console.log("amount adjuster => ", props)
  return (
    <div className="amount-adjust">
      <i 
        className="fas fa-minus"
        onClick={() => props.removeOne(props.item.id)}
      ></i>
      <p> {props.amount} </p>
      <i 
        className="fas fa-plus"
        onClick={() => props.addToCart(props.item.id)}
      ></i>
    </div>
  )
}
