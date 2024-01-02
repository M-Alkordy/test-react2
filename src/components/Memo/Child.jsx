import React, { memo } from 'react'

const Child = () => {
    console.log("hello from child")
  return (
    <div>Child</div>
  )
}

export default memo(Child)