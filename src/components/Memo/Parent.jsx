import React, { useState } from 'react'
import Child from './Child'

const Parent = () => {
    const [state, setstate] = useState(0);
  return (
    <div>
        <button onClick={()=>{setstate(prev => prev+1)}}>click</button>
        <p>{state}</p>
        <Child />
    </div>
  )
}

export default Parent