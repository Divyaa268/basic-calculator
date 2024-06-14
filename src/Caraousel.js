import React, { useEffect, useState } from 'react'
import { data } from './utils/constants';

const Caraousel = () => {

    const [ currImagePosition, setCurrImagePosition ] = useState(0);

    // using this to change the image automatically after 5 seconds
    useEffect(() => {
        const timer = setTimeout(() => {handleNextClick()},
         5000);
         return () => {
            clearTimeout(timer);
         }
    },
[currImagePosition])

    const handlePrevClick = () => {

        if(currImagePosition ===0) 
            {
                setCurrImagePosition(data.length - 1);
            }
        else
        {
            setCurrImagePosition(currImagePosition - 1);
        }
    }

    const handleNextClick = () => {
        setCurrImagePosition((currImagePosition + 1) % data.length);
    }

  return (
    <div className=''>
        <button className='bg-red-900 text-fuchsia-50 font-semibold rounded-md pl-8 pr-8 pt-4 pb-4 hover:bg-red-600' onClick={handlePrevClick}>  Prev</button>
        
        <div className='flex justify-center '>
            {/* SIMPLE VERSION BUT NOT OPTIMIZED AS IT MAKES MULTIPLE N.W CALLS AND RE-RENDERS ON CLICK OF BUTTONS */}
        {/* <img  className= 'w-3/5 h-3/4 object-contain' src= {data[currImagePosition]} alt='Images'></img> */}

        {/* OPTOMIZED VERSION, NO MULTILE N/W CALLS */}
        {data.map((url, i) => (
            <img
            key = {url}
            src={url}
            className={`w-3/5 h-3/4 object-contain' 
                ${currImagePosition === i ? "block" : "hidden"}`
             }
             alt='images'
            />
        ))}
        </div>
        
        <button className='bg-red-900 text-fuchsia-50 font-semibold rounded-md pl-8 pr-8 pt-4 pb-4 hover:bg-red-600' onClick={handleNextClick}>Next</button>
    </div>
  )
}

export default Caraousel;


// import React, { useEffect, useState } from 'react';
// import { data } from './utils/constants';

// const Carousel = () => {
//     const [currImagePosition, setCurrImagePosition] = useState(0);

//     // Change the image automatically after 5 seconds
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             handleNextClick();
//         }, 5000);
//         return () => clearTimeout(timer); // Clear the timer to avoid multiple instances
//     }, [currImagePosition]);

//     const handlePrevClick = () => {
//         if (currImagePosition === 0) {
//             setCurrImagePosition(data.length - 1);
//         } else {
//             setCurrImagePosition(currImagePosition - 1);
//         }
//     };

//     const handleNextClick = () => {
//         setCurrImagePosition((currImagePosition + 1) % data.length);
//     };

//     return (
//         <div className="flex flex-col items-center">
//             <button
//                 className="bg-red-900 text-fuchsia-50 font-semibold rounded-md pl-8 pr-8 pt-4 pb-4 hover:bg-red-600"
//                 onClick={handlePrevClick}
//             >
//                 Prev
//             </button>
            
//             <div className="flex justify-center w-full mt-4 mb-4">
//                 {/* Optimized version, no multiple network calls */}
//                 {data.map((url, i) => (
//                     <img
//                         key={url}
//                         src={url}
//                         className={`w-3/5 h-3/4 object-contain ${currImagePosition === i ? 'block' : 'hidden'}`}
//                         alt="images"
//                     />
//                 ))}
//             </div>
            
//             <button
//                 className="bg-red-900 text-fuchsia-50 font-semibold rounded-md pl-8 pr-8 pt-4 pb-4 hover:bg-red-600"
//                 onClick={handleNextClick}
//             >
//                 Next
//             </button>
//         </div>
//     );
// };

// export default Carousel;
