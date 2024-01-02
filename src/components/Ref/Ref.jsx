import { useEffect, useRef, useState } from "react";

const Ref = () => {
    const [x, setx] = useState(false);
    const par = useRef(null)
    const y = useRef(100)
    useEffect(() => {
        console.log(par.current)
    }, [x]);
  return (
    <div>
        <button onClick={()=>{setx(!x)}}>click</button>
        <p ref={par}>Hello world</p>
    </div>
  )
}

export default Ref