import React from 'react'
import '../styles/Footer.css'
import kroger from '../3d-assets/kroger.png'
import gnc from '../3d-assets/gnc.png'
import walmart from '../3d-assets/walmart.png'
import randalls from '../3d-assets/randalls.png'
import jewelOsco from '../3d-assets/jewel-osco.png'
import sevenElleven from '../3d-assets/7-eleven.png'
import muscleFoods from '../3d-assets/muscle-foods.png'
import europa from '../3d-assets/europa.png'

export default function Footer() {
  return (
    <div className="footer">
      <img src={kroger} alt="kroger" />
      <img src={gnc} alt="gnc" />
      <img src={walmart} alt="walmart" />
      <img src={randalls} alt="randalls" />
      <img src={jewelOsco} alt="jewel osco" />
      <img src={sevenElleven} alt="seven elleven" />
      <img src={muscleFoods} alt="muscle foods" />
      <img src={europa} alt="europa" />
    </div>
  )
}
