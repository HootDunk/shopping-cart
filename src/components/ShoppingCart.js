import React, {useState} from 'react'
import '../styles/ShoppingCart.css'

export default function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(true);

  const handleClick = () => {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }


  if (isOpen){
    // show cart summary with proceed to checkout button
    return(
          <div className="shopping-cart">
            <i onClick={handleClick}  className="fas fa-shopping-cart"></i>
            <p>+1</p>
            <div className="shopping-cart-open">
              <h1>Summary</h1>
            </div>
          </div>
    )
  } else {
    //show cart image with amount of items
    return (
      <div onClick={handleClick} className="shopping-cart">
        <i className="fas fa-shopping-cart"></i>
        <p>+1</p>
      </div>
    )
  }
}
