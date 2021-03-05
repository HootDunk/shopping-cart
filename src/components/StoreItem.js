import React, {useState} from 'react'
import { Link } from "react-router-dom"
import white from '../3d-assets/5d81923ae7908ebb8d56cdc0_3d_energy_white_1_300x.png?v=1593719465'
import Button from "./Button"
import '../styles/StoreItem.css'

export default function StoreItem() {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div 
      onMouseEnter={() => setShowOverlay(true)}
      onMouseLeave={() => setShowOverlay(false)}
      className="store-item"
    >
      <img src={white} alt="drink"/>
      {showOverlay &&
      <div className="overlay">
        <Link to="/buy-online/item-info">
          <Button text="View Product"/>
        </Link>
      </div>
      }
      <p className="drink-name">White</p>
      <p className="drink-amount">12 Pack</p>
      <p className="drink-price">$24.99</p>
    </div>
  )
}
