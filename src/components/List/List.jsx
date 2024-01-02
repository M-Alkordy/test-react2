import React from 'react'
import Child from './Child'

const List = () => {
    let products =[{
        id:1,
        title: "iphon 8",
        price: 150
    },
    {
        id:2,
        title: "samsung s20",
        price: 500
    },
    {
        id:3,
        title: "iphone 13pro",
        price: 1000
    }]
  return (
    <div>
        {/* <Child title={products[0].title} price={products[0].price} />
        <Child title={products[1].title} price={products[1].price} />
        <Child title={products[2].title} price={products[2].price} /> */}
        {products.map((element , index) => {return(
            <Child key={index} title={element.title} price={element.price} />
        ) })}
    </div>
  )
}

export default List