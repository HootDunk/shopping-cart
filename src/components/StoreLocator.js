import React from 'react'
import Header from './Header'
import Banner from './Banner'

export default function StoreLocator(props) {
  return (
    <div>
      <Banner />
      <div>
        <Header location={props.location.pathname}/>
      </div>
      
    </div>
  )
}