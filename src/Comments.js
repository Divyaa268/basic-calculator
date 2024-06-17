import React from 'react';
import {commentsData} from './utils/commentsData';

const Comments = ( {data} ) => {

    // destructure
    const {name, text, replies} = data;
  return (
    <div className='flex shadow-sm bg-gray-100 rounded-lg my-2'>
            <img 
                className='h-12 w-12'
                alt="User image"
                src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
            />
            <div className='px-3'>
                <p className='font-bold'> {name} </p>
                <p> {text} </p>
            </div>
        </div>
  )
}

export default Comments;


// make comments data
// make comments component
// make commentsList component
// make commentsContainer component
