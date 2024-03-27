import React from 'react';
import spinner from '../assets/svg/spinner.svg';

function Spinner() {
  return (
    <div className='bg-black bg-opacity-20 flex justify-center items-center fixed left-0 right-0 bottom-0 top-0 z-20'>
        <div>
            {/* Go to website loading.io for getting image of spinner */}
            <img 
              src={spinner} 
              alt="Loading..." 
              className='h-24'
            />
        </div>
    </div>
  )
}

export default Spinner;