import React from 'react'
import { Link } from "react-router-dom"
import AmountAdjuster from './AmountAdjuster'
import Button from './Button'
import '../styles/ItemInfo.css'
export default function ItemInfo(props) {
  console.log(props)
  // hmmmm.
  const item = props.getItemInfo(Number(props.router.match.params.id));
  
  const getQuantity = () => {
    let match = props.cart.items.find(matchingItem => matchingItem.id === item.id);
    if (match){
      return match.count;
    }
    else return 0;
  }

  return (
    <div>
      <div className="item-info-container">
        <div className="item-info">
          <img src={item.largeImg} alt="white"/>
          <div className="item-details">
            <div className="item-details-content">
              <h1>{item.name}</h1>
              <h3>{item.amount}</h3>
              <hr />
              <p>{item.description}</p>

              <div>
                <h4>Quantity</h4>
                <AmountAdjuster amount={getQuantity()}  addToCart={props.addToCart} item={props.getItemInfo(item.id)}/>
              </div>

              <div>
                <h2>${item.price}</h2>
                <p>Shipping calculated at checkout</p>
              </div>
              <div className="sale-options">
                <Button function={props.addToCart} itemID={item.id} text="Add to Cart" />
                <Link to="/checkout">
                  <Button text="Buy it now" />
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}