import React from 'react'
import './Button.css'

const Button = ({img, buttonName, click, children}) => {
  return (
    <button className='button' onClick={click}>
      {
        children
      }
        <img src={img} alt={buttonName} title={buttonName} />
    </button>
  )
}

export default Button