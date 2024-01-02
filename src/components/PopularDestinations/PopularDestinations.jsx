import React from 'react'
import './PopularDestinationsStyle.css'
const PopularDestinations = (props) => {
    return (
        <div className='destination'>
            <h1>Popular Destinations</h1>
            <h2>Tours dive you the opportunity to see a lot, within a time frame.</h2>
            {props.children}
        </div>
    )
}

export default PopularDestinations