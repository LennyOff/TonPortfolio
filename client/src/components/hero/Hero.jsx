import React from 'react'
import './hero.css'
import { SectionWrapper } from "../../hoc";

const Hero = () => {
  return (
    <div className='hero'>
      <div className='heroFlat'>
        <div className='heroText'>
          <h1 className='name'>Antonin<br/>Duchesne</h1>
          <p className='description'>Entreprenneur Blockchain et Trader Bybit</p>
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(Hero, "");