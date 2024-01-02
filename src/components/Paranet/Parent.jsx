import { useState } from "react";
import Child from "../Child/Child"

const Parent = () => {
    const [num, setnum] = useState(0);
  return (
    <div>
        <p>{num}</p>
        <Child changeNumber={setnum} />
    </div>
  )
}

export default Parent