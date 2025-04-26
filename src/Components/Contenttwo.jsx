import React from 'react'
import { FaRegLightbulb } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { BsPersonCheckFill } from "react-icons/bs";
import { LuBrain } from "react-icons/lu";





const Contenttwo = () => {
  return (
    <>
        <div className='bg-[#85c33a1e] flex flex-col justify-center items-center pt-[505px] pb-[270px] text-center relative max-1000:pt-[230px] max-1000:pb-[230px]'>
            
            <img src='https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/photo-5db79f9.jpg/:/cr=t:14.65%25,l:0%25,w:100%25,h:66.64%25/rs=w:365,h:365,cg:true'
              className='rounded-full'/>
             <div id='slabtext' className='text-[50px]'>MARCI METZGER</div>
             <div className='text-[20px]'>REALTOR FOR NEARLY 3 DECADES!</div>
             <div className='text-[20px]'>206-919-6886</div>

            <div className='absolute top-[-60px] w-full flex justify-center max-1000:hidden'>
                <div className='flex flex-col  justify-center items-center bg-[#85c33a] py-[120px] mr-[15px] hover:scale-110 transition duration-200'>
                    <FaRegLightbulb size={40} />
                    <div className=' font-bold text-[25px] text-center'>Real Estate Strategy</div>
                    <div className='text-[20px] max-w-[350px] text-center'>Tailored buying & selling plans that align with your goals.</div>
                </div>
                <div className='flex flex-col  justify-center items-center bg-[#85c33a] py-[120px] mx-[15px] hover:scale-110 transition duration-200'>
                    <BsGraphUpArrow size={40} />
                    <div className=' font-bold text-[25px] text-center'>Market Insight</div>
                    <div className='text-[20px] max-w-[350px] text-center'>Stay ahead with data-driven guidance on property trends.</div>
                </div>
                <div className='flex flex-col  justify-center items-center bg-[#85c33a] py-[120px] mx-[15px] hover:scale-110 transition duration-200'>
                    <BsPersonCheckFill size={40} />
                    <div className=' font-bold text-[25px] text-center'>Client-Focused Approach</div>
                    <div className='text-[20px] max-w-[350px] text-center'>Your needs come first — every decision, every step.</div>
                </div>
                <div className='flex flex-col  justify-center items-center bg-[#85c33a] py-[120px] ml-[15px] hover:scale-110 transition duration-200'>
                    <LuBrain size={40}/>
                    <div className=' font-bold text-[25px] text-center'>Smart Investment Planning</div>
                    <div className='text-[20px] max-w-[350px] text-center'>Helping you build long-term value through real estate.</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Contenttwo