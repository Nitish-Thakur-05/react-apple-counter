import React, { useState } from 'react'
import leftArrow from '../assets/left-arrow.png'
import rightArrow from '../assets/right-arrow.png'
import Button from './Button'
import './AppleCounter.css'
import AppleBasket from './AppleBasket'


const AppleCounter = () => {
    const totalApple = 10
    const [leftApple, SetleftApple] = useState(10)
    let rightApple = totalApple - leftApple

    function leftClick() {
        if(rightApple != 0) {
            SetleftApple(leftApple + 1)
        }
    }
    
    function rightClick() {
        if(leftApple != 0) {
            SetleftApple(leftApple - 1)
        }
    }

  return (
    <section className='g'>
        <AppleBasket noOfApple={leftApple} basketName={1} />
        <Button img={leftArrow} buttonName='left button' click={leftClick}><p>left arrow</p></Button>
        <Button img={rightArrow} buttonName='right button' click={rightClick}><p>right arrow</p></Button>
        <AppleBasket noOfApple={rightApple} basketName={2} />
    </section>
  )
}

export default AppleCounter