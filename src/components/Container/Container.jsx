import React from 'react'
import './Container.css'
const Container = ({firstPic , secPic , title , desc , reverse}) => {
  return (
    <div className={(reverse)? "reverse container" : "container"} /* style={{flexDirection: (reverse)? "row-reverse" : "row"}} */>
        <div className="texts">
            <h1>{title}</h1>
            <p>{desc}</p>
        </div>
        <div className="images">
            <img src={firstPic} alt="" />
            <img src={secPic} alt="" />
        </div>
    </div>
  )
}

export default Container