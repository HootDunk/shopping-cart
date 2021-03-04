import React from 'react'
import '../styles/CartItem.css'
import white from '../3d-assets/5d81923ae7908ebb8d56cdc0_3d_energy_white_1_150x.png?v=1593719465'
export default function CartItem() {
  return (
    <div>
      <div className="cart-item">
        <img src={white} alt="white drink" />
        <div className="cart-middle">
          <p>White - 12 Pack</p>
          <p>$24.99</p>
          <div className="amount-adjust">
            <i className="fas fa-minus"></i>
            <p> 1 </p>
            <i className="fas fa-plus"></i>
          </div>
        </div>
        <i className="fas fa-times"></i>
      </div>
      <hr />
    </div>

  )
}
