import React, { useState } from 'react'
import './StateStyle.css'
import ShowNumber from './ShowNumber';
const State = () => {
    const [name, setname] = useState("mohammed");
    const [num , setnum]=useState(0)
    const [menu , setmenu]=useState(false)
    const changeNumberValue =()=>{
        setnum(num +1)
        console.log(num)
    }
    const x=50;
    const [y]=useState(100)
  return (
    <div>
{/*         <input type="text" onChange={event => {setname(event.target.value)}} />
        <p>{name}</p> */}
{/*         <button onClick={()=>changeNumberValue()}>click</button>
        <ShowNumber num={num} /> */}
        <button onClick={()=>{setmenu(!menu)}}>click</button>
        <ul style={{display: (menu)? "block" : "none"}}>
            <li>home</li>
            <li>about</li>
        </ul>
    </div>
  )
}

export default State