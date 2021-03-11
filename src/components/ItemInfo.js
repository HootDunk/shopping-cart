import React from 'react'
import { Link } from "react-router-dom"
import Header from './Header'
import Banner from './Banner'
import AmountAdjuster from './AmountAdjuster'
import Button from './Button'
import white from '../3d-assets/5d81923ae7908ebb8d56cdc0_3d_energy_white_1_900x.webp'
import '../styles/ItemInfo.css'
export default function ItemInfo(props) {
  return (
    <div>
      <Banner />
      <div className="item-info-container">
        <Header darkBanner={true}/>
        <div className="item-info">
          <img src={white} alt="white"/>
          <div className="item-details">
            <div className="item-details-content">
              <h1>WHITE</h1>
              <h3>12 Pack</h3>
              <hr />
              <p>We call it the OG, but it’s better known as Frost. A light citrus taste with a crisp and 
                clean finish, you can never go wrong with the original 3D Energy Drink.</p>

              <div>
                <h4>Quantity</h4>
                <AmountAdjuster />
              </div>

              <div>
                <h2>$24.99</h2>
                <p>Shipping calculated at checkout</p>
              </div>
              <div className="sale-options">
                <Button text="Add to Cart" />
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