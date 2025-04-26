import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYelp } from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <div id='footer' className='flex flex-col justify-between items-center mt-[180px]'>
        <div id='slabtext' className='text-[50px] max-500:text-[30px] py-[10px] px-[35px] bg-[#85c33a] text-white text-center'>OUR SERVICES</div>

        <div className='flex max-1000:flex-col mt-[160px] max-1000:mt-[50px]'>
            <div className='flex flex-col justify-between items-center'>
                <img src='https://img1.wsimg.com/isteam/stock/12792/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' />
                <div className='font-bold text-[23px] mt-[27px]'>Real Estate Done Right</div>
                <div className='max-w-[350px] text-center max-1000:mb-[40px]'>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</div>
            </div>
            <div className='flex flex-col justify-between items-center mx-[40px]'>
                <img src='https://img1.wsimg.com/isteam/stock/43920/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' />
                <div className='font-bold text-[23px] mt-[27px]'>Commercial & Residential</div>
                <div className='max-w-[350px] text-center max-1000:mb-[40px]'>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</div>
            </div>
            <div className='flex flex-col justify-between items-center'>
                <img src='https://img1.wsimg.com/isteam/stock/kayaJdA/:/rs=w:365,h:365,cg:true,m/cr=w:365,h:365' />
                <div className='font-bold text-[23px] mt-[27px]'>Rely on Expertise</div>
                <div className='max-w-[350px] text-center max-1000:mb-[40px]'>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</div>
            </div>
        </div>
    </div>
    
    <div className="w-full overflow-hidden leading-[0]">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-[100px]"
        >
          <path
            d="M0.00,49.98 C150.00,150.00 349.62,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            style={{ stroke: 'none', fill: '#85c33a' }}
          ></path>
        </svg>
      </div>

      <div className='flex justify-center items-center bg-[#1d1d1d] py-[120px]'>
        <FaFacebook className='mx-[20px] cursor-pointer'  size={40} color='white' />
        <FaInstagram className='mx-[20px] cursor-pointer' size={40} color='white'/>
        <FaLinkedin className='mx-[20px] cursor-pointer' size={40} color='white'/>
        <FaYelp className='mx-[20px] cursor-pointer' size={40} color='white'/>
      </div>
    
    
    </>
  )
}

export default Footer