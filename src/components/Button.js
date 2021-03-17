import React from 'react'
import '../styles/Button.css'
export default function Button(props) {

  if (props.itemID){
    return (
      <div>
      <button 
      className={props.class? props.class : "main"}
      onClick={() => props.function(props.itemID)}
      >
        {props.text}
      </button>
    </div>
    )
  }
  else if (props.function){
    return (
      <div>
      <button 
      className={props.class? props.class : "main"}
      onClick={() => props.function()}
      >
        {props.text}
      </button>
    </div>
    )
  }
  else {
    return (
      <div>
      <button 
      className={props.class? props.class : "main"}
      >
        {props.text}
      </button>
    </div>
    )
  }

}
