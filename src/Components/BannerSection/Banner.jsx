import React from 'react';
import img1 from './vector1.png'
import img2 from './vector2.png'

const Banner = ({progress,resolve}) => {
    return (
       <div className="grid md:grid-cols-2 gap-2 md:gap-6 pt-10 w-full">
  
  <div className=" h-[200px] flex flex-col items-center justify-center rounded-lg text-white 
  bg-gradient-to-r from-purple-600 to-indigo-500">
    <h3 className="text-lg">In-Progress</h3>
    <h1 className="text-6xl font-bold">{progress.length}</h1>
  </div>

  <div className="h-[200px] flex flex-col items-center justify-center rounded-lg text-white 
  bg-gradient-to-r from-green-500 to-teal-600">
    <h3 className="text-lg">Resolved</h3>
    <h1 className="text-6xl font-bold">{resolve.length}</h1>
  </div>

</div>
    );
};

export default Banner;