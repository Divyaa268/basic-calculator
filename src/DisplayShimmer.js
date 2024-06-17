import React, { useState, useEffect } from 'react'
import ShimmerUI from './ShimmerUI';

const DisplayShimmer = () => {

    const [showShimmer, setShowShimmer] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {

            setShowShimmer(false);

        }, 3000 );

        return () => {
            clearTimeout(timer);
          }

    }, [])

    console.log("showShimmer",showShimmer)
    if(showShimmer === true)
        {
           return <ShimmerUI />
        }
        


        
  return (
       <div className='grid grid-cols-3'>
        <div className='p-10 bg-orange-400 m-5'></div>
        <div className='p-10 bg-orange-400 m-5'></div>
        <div className='p-10 bg-orange-400 m-5'></div>
      
    </div>
  )
}

export default DisplayShimmer;
