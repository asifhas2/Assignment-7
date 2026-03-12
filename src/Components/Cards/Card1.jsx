import React from 'react';
import calender from './Vector (3).png'
import dott from './Ellipse 22 (1).png'
import { toast } from 'react-toastify';

const Card1 = ({data,setProgress,progress}) => {
   
    const {id,title,description,customer,priority,status,createdAt}=data;

    const HandelCardButton = (data)=>{
        setProgress([...progress,data]);
        toast("In progress !");
    }

    return (
        <div onClick={()=>HandelCardButton(data)} className='flex flex-col gap-3  p-3 shadow-2xs bg-[#FFFFFF] rounded-[7px]'>
            <div className='flex justify-between  items-center'>
                <h1 className='text-[18px] font-semibold'>{title}</h1>
                <button className='bg-[#92e7b0] flex items-center px-2 py-1 rounded-2xl gap-1 justify-center font-bold'><span><img src={dott} alt="" /></span> {status}</button>
            </div>
            <div>
                <p className='text-gray-400'>{description}</p>
            </div>
            <div className='flex justify-between'>
                <div className='text-gray-400 flex gap-2'>
                    <div>{id}</div>
                    <div>{priority}</div>
                </div>
                <div className='text-gray-400 flex gap-2' >
                    <div>
                       {customer} 
                    </div>
                    <div className='flex items-center'><img src={calender} alt="" /><span>{createdAt}</span></div>
                </div>
            </div>
        </div>
    );
};

export default Card1;