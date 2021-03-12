import React from 'react'
import '../styles/CartItem.css'
import AmountAdjuster from './AmountAdjuster'

export default function CartItem(props) {

  console.log("cart item => ", props)


  return (
    <div>
      <div className="cart-item">
        <img src={props.item.smallImg} alt="white drink" />
        <div className="cart-middle">
          <p>{props.item.name} - {props.item.amount}</p>
          <p>${props.item.price}</p>
          <AmountAdjuster amount={props.amount} addToCart={props.addToCart} item={props.item}/>
        </div>
        <i className="fas fa-times"></i>
      </div>
      <hr />
    </div>
  )
}
