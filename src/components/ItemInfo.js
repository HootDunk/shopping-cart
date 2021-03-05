import React from 'react'
import Header from './Header'
import Banner from './Banner'
import white from '../3d-assets/5d81923ae7908ebb8d56cdc0_3d_energy_white_1_900x.webp'
import '../styles/ItemInfo.css'
export default function ItemInfo(props) {
  return (
    <div>
      <Banner />
      <div>
        <Header darkBanner={true}/>
        <div className="item-info">
          <img src={white} alt="white"/>

        </div>
      </div>
    </div>
  )
}