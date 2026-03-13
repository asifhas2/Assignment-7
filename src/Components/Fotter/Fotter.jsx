import React from 'react';
import x from './fi_5969020.png'
import linkdin from './fi_6244710.png'
import fecbook from './Group (1).png'
import gmail from './Group (2).png'


const Fotter = () => {
    return (
      <>
         <div className='bg-black text-white md:p-15'>
                 <div className='bg-black text-white mx-20 py-5 md:flex justify-between items-center border-b-1 pb-10'>
            <div className='flex flex-col gap-2'>
                <h1 className='text-[20px] font-bold '>CS — Ticket System</h1>
                <p>Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry. <br /> Lorem Ipsum has been the industry's <br /> standard dummy text ever since the <br />1500s, when an unknown printer took <br /> a galley of type and scrambled it  a type </p>
            </div>
            <div className='flex flex-col gap-2'>
                 <h1 className='text-[20px] font-bold '>CS — Ticket System</h1>
                 <p>About Us</p>
                 <p>Our Mission</p>
                 <p>Contact Saled</p>
            </div>
            <div className='flex flex-col gap-2'>
                 <h1 className='text-[20px] font-bold '>Services</h1>
                 <p>Products & Services</p>
                 <p>Products & Services </p>
                 <p>Download Apps</p>
            </div>
            <div className='flex flex-col gap-2'>
                 <h1 className='text-[20px] font-bold '>Information</h1>
                 <p>Privacy Policy</p>
                 <p>Terms & Conditions</p>
                 <p>Join Us</p>
            </div>
            <div className='flex flex-col gap-2'>
                 <h1 className='text-[20px] font-bold '>Social Links</h1>
                 <p className='flex gap-2 items-center'><span><img src={x} alt="" /></span>@CS — Ticket System</p>
                 <p className='flex gap-2 items-center'><span><img src={linkdin} alt="" /></span>@CS — Ticket System</p>
                 <p className='flex gap-2 items-center'><span><img src={fecbook} alt="" /></span>@CS — Ticket System</p>
                 <p className='flex gap-2 items-center'><span><img src={gmail} alt="" /></span>@CS — Ticket System</p>
                
                 
            </div>
        </div>
        <div className="bg-black text-white flex justify-center items-center mt-5">
           <p>© 2025 CS — Ticket System. All rights reserved.</p> 
        </div>
         </div>
      </>
    );
};

export default Fotter;