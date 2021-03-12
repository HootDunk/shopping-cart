import React from 'react'
import '../styles/Button.css'
export default function Button(props) {

  //button should take props.class for the class name.  All button styles in one component
  return (
    <div>
      <button 
      className="main"
      onClick={props.itemID? () => props.function(props.itemID) : undefined}
      >
        {props.text}
      </button>
    </div>
  )
}
