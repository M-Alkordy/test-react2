import React, { useEffect, useState } from 'react'

const Effect = () => {
    const [num, setnum] = useState(0);
    const [x, setx] = useState(0);
    useEffect(() => {
        console.log(num)
    }, []);
  return (
    <div>
        <button onClick={()=>setnum(prev=>prev+1)}>click</button>
    </div>
  )
}

export default Effect