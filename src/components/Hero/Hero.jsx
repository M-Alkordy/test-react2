import React from 'react'
import './HeroStyle.css'
const Hero = ({image , title , subTitle , btn}) => {
  return (
    <div className='hero' style={{backgroundImage:`url(${image})`}}>
        {/* <img src={image} alt="" /> */}
        <h1>{title}</h1>
        <h2>{subTitle}</h2>
        <button>{btn}</button>
    </div>
  )
}

export default Hero