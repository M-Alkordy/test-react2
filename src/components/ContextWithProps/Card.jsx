import { useContext } from "react";
import { Name } from "../../App";

const Card = () => {
    const x = useContext(Name);
  return (
    <div>
        {x}
    </div>
  )
}

export default Card