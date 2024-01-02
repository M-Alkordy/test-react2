
const Child = ({changeNumber}) => {
  return (
    <div>
        <button onClick={()=>changeNumber(prev=>prev+1)}>click</button>
    </div>
  )
}

export default Child