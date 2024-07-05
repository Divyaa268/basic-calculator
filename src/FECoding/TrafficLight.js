import React, { useEffect, useState } from 'react'
import '../traffic.css'

const TrafficLight = ({trafficStates}) => {

    const [currentColor, setCurrentColor] = useState("green");

    useEffect(() => {
        // destructing the other properties from trafficStates
        const {duration, next} = trafficStates[currentColor];

        // after this change the  current color to next color based on the duration
        const timerId = setTimeout(() => {
            setCurrentColor(next);
        }, duration);

        return () => {
            clearTimeout(timerId);
        }

    }, [currentColor])

  return (
    <div className='traffic-light-container'>

{/* this returns an array containing all keys of traffic states which in this case is
red, yellow, green */}
        {Object.keys(trafficStates).map((color) => 
        <div className='traffic-light' 
        // to dynamically change the color
        style={{
            backgroundColor: 
            color === currentColor && trafficStates[color].backgroundColor
        }}>
            {/* now switch the colors dynamically after a certain duration/intervals
            we will use useEffect for this which will have the currentColor as the dependency
            so that whenever this currentColor changes, useEffect will be called */}
            </div>)}
      
    </div>
  )
}

export default TrafficLight

