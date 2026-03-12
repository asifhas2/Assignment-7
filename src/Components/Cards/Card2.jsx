import React from 'react';
import { toast } from 'react-toastify';

const Card2 = ({TaskStatus,setResolve,resolve,progress,removeTaskStatus}) => {
    // console.log(TaskStatus);
    // console.log(progress);
    const handelResolveBtn = (TaskStatus)=>{
        setResolve([...resolve,TaskStatus])
        removeTaskStatus(TaskStatus);
        toast("Completed !")
    }
    return (
        <div className=' bg-white mb-5 p-4 rounded-2xl'>
            <h1 className='text-2xl font-semibold mb-4'>{TaskStatus.title}</h1>
            <button onClick={()=>handelResolveBtn(TaskStatus)} className='bg-[#02A53B] text-white w-full py-3 text-[20px] font-semibold'>Complete</button>
        </div>
    );
};

export default Card2;