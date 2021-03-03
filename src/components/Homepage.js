import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Banner from './Banner'
import '../styles/Homepage.css'
export default function Homepage() {
  return (
    <div>
      <Banner />
      <div className="homepage-content">
        <Header />
      </div>
      <Footer />
    </div>
  )
}
