import React from 'react';

const Card3 = ({data}) => {
    console.log(data);
    return (
        <div className=' bg-[#E0E7FF] w-full h-[75px] flex text-[18px] font-semibold  items-center p-3 mb-5 rounded-2xl' >
            <h1>{data.title}</h1>
        </div>
    );
};

export default Card3;