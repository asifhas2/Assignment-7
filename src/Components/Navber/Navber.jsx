import React from 'react';

const Navber = () => {
    return (
        <div className="flex justify-between mb-3 py-3 md:px-30 items-center ">
            <div>
                <h1 className='text-[24px] font-bold'>CS — Ticket System</h1>
            </div>
            <div className="flex gap-5 justify-center items-center">
                <h5 className='text-gray-700 font-semibold '>Home</h5>
                <h5 className='text-gray-700 font-semibold'>FAQ</h5>
                <h5 className='text-gray-700 font-semibold'>text</h5>
                <h5 className='text-gray-700 font-semibold'>Blog</h5>
                <h5 className='text-gray-700 font-semibold'>Download</h5>
                <h5 className='text-gray-700 font-semibold'>Contact</h5>
                <button className='bg-gradient-to-r from-indigo-600 to-indigo-400 text-white px-6 py-2 rounded-lg'>+ New Ticket</button>
                
            </div>
        </div>
    );
};

export default Navber;