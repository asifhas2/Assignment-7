
import './App.css'
 import { ToastContainer, toast } from 'react-toastify';
import Navber from './Components/Navber/Navber'
import Banner from './Components/BannerSection/Banner'
import MainSection from './Components/Navber/mainSection/MainSection'
import { Suspense, use, useState } from 'react'

  const promiss = ()=>{
    const PromissData = fetch("../public/data.json").then(res=>res.json())  
   return PromissData;
  }

const tikitData = promiss();
function App() {

const [progress,setProgress]=useState([]);
const [resolve,setResolve]=useState([]);

const removeTaskStatus =(removeTask)=>{
    const filterData = progress.filter(data =>data.id !== removeTask.id);
    setProgress(filterData);
}

  return (
    <>

           <Navber></Navber>
      <div className='max-w-[1400px] mx-auto bg-[#f2f0f0]'>
              <Banner progress={progress} resolve={resolve}></Banner>
             <Suspense fallback={<h1>Loading....</h1>}>
               <MainSection tikitData={tikitData} setProgress={setProgress} progress={progress} setResolve={setResolve} resolve={resolve} removeTaskStatus={removeTaskStatus}></MainSection>
             </Suspense>
          
      </div>
       <ToastContainer />

    </>
  )
}

export default App
