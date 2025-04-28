import React from 'react'
import './AppleBasket.css'

const AppleBasket = ({basketName, noOfApple}) => {
  return (
    <>
        <div className="apple-basket">
            <h2><span>{noOfApple}</span> Apple</h2>
            <p>basket {basketName} {noOfApple === 0 && '(empty)'} {noOfApple === 10 && '(full)'}</p>
        </div>
    </>
  )
}

export default AppleBasket