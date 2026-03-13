import React, { use, useState } from 'react';
import Card1 from '../../Cards/Card1';
import Card2 from '../../Cards/Card2';
import Card3 from '../../Cards/Card3';

const MainSection = ({tikitData,setProgress,progress,setResolve,resolve,removeTaskStatus}) => {
    const datas = use(tikitData);
    console.log(datas);

    const [mainData,setMainData]=useState(datas);
    const removeDatas = (TaskStatus)=>{
       const filterData = mainData.filter(data=>data.id !== TaskStatus.id);
       setMainData(filterData);
    }
   
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 p-5 ">
            <div className=' col-span-2 '>
                <h1 className='text-3xl font-semibold mb-5'>Customer Tickets</h1>
            <div className="grid grid-cols-2 gap-3 ">
                {
                mainData.map(data => <Card1  setProgress={setProgress} data={data} progress={progress} ></Card1>)
            }
            </div>

            </div>
            <div className=' md:col-span-1  '>
                      <h1 className='text-3xl font-semibold mb-5'>Task Status</h1>
                {
                    progress.map(TaskStatus => <Card2 TaskStatus={TaskStatus} setResolve={setResolve} resolve={resolve} progress={progress} removeTaskStatus={removeTaskStatus} removeDatas={removeDatas}></Card2>)
                }
                
             <div>
                <h1 className='text-3xl font-semibold mb-4'>Resolve Task</h1>
                {
                    resolve.map(data=><Card3 data={data}></Card3>)
                }
            </div>
                 
            </div>
           
            
        </div>
    );
};

export default MainSection;