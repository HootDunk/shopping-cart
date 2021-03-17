import React, {useState} from 'react'
import { Link } from "react-router-dom"
import Button from "./Button"
import '../styles/StoreItem.css'

export default function StoreItem(props) {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      className="store-item"
    >
      <img src={props.data.mediumImg} alt="drink"/>
      {showOverlay &&
      <div className="overlay">
        <Link to={`/buy-online/item-info/${props.data.id}`}>
          <Button text="View Product"/>
        </Link>
      </div>
      }
      <p className="drink-name">{props.data.name}</p>
      <p className="drink-amount">{props.data.amount}</p>
      <p className="drink-price">${props.data.price}</p>
    </div>
  )
}
