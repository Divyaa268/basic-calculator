import React from 'react'
import '../traffic.css'

const TrafficLight = () => {
  return (
    <div className='traffic-light-container'>

        {[1,2,3].map(() => 
        <div className='traffic-light'>
            </div>)}
      
    </div>
  )
}

export default TrafficLight

