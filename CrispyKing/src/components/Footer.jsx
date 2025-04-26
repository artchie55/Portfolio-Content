import React from 'react'
import { BsFacebook,BsYoutube } from 'react-icons/bs'

const Footer = () => {
  return (
    <>
    
    <div className=' max-sm:hidden flex justify-center gap-[11vw] py-[8vw] pb-[6vw] border-b-[0.1vw] border-[#FF0000]'>
        <ul data-aos="zoom-in">
            <li className='font-bold text-[#FF0000] text-[1.6vw]'>GET IN TOUCH</li>
            <li className='flex items-center'>
                <p className='text-[1.3vw]'>MAIN OFFICE:</p>
                <p className='text-[1.2vw] ml-[0.4vw]'> Cogon Combado, Ormoc City, Leyte 6541</p>
            </li>
            <li className='flex items-center'>
                 <p className='text-[1.25vw]'>MARKETING & BUSINESS PARTNER OFFICE:</p>
                <p className='text-[1.2vw] ml-[0.4vw]'>Anubing Street, Ormoc City, Leyte 6541</p>
            </li>
            <li className='flex items-center'>
                 <p className='text-[1.25vw]'>MOBILE NUMBER:</p>
                <p className='text-[1.2vw] ml-[0.4vw]'>0975-814-7492 | 0970-695-3403</p>
            </li>
            <li className='flex items-center'>
                 <p className='text-[1.25vw]'>LANDLINE:</p>
                <p className='text-[1.2vw] ml-[0.4vw]'>053-552-1687</p>
            </li>
            <li className='flex items-center'>
                 <p className='text-[1.25vw]'>EMAIL:</p>
                <p className='text-[1.2vw] ml-[0.4vw]'>crispykingph@gmail.com</p>
            </li>
        </ul>
        <div data-aos="zoom-in">
            <img className='w-[20vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/e42f032e-4883-42e3-95e5-f8ab3a1f4cfe/WEBSITE+2.png?format=500w' />
            <div className='flex items-center gap-[1vw]'>
                <div className='text-[1.25vw] mr-[2vw]'>FOLLOW US ON:</div>
                <BsFacebook size={60} />
                <BsYoutube size={60} />
            </div>
        </div>
    </div>


    <div data-aos="zoom-in" className=' max-sm:hidden flex flex-col items-center py-[2vw] pb-[3.5vw] text-[1.2vw]'>
        <div>© 2022 Crispy King Ventures. All Rights Reserved.</div>
        <div>Disclamer: This website is a clone for educational purposes.  all materials used belong to their rightful owner.</div>
    </div>









    
    
    <div className='sm:hidden flex flex-col justify-center gap-[11vw] py-[8vw] pb-[6vw] border-b-[0.1vw] ml-[20px] border-[#FF0000]'>
        <ul data-aos="zoom-in">
            <li className=' text-[#FF0000] text-[6vw]'>GET IN TOUCH</li>
            <li className='items-center'>
                <p className='text-[16px]'>MAIN OFFICE:</p>
                <p className='text-[12px] ml-[0.4vw]'> Cogon Combado, Ormoc City, Leyte 6541</p>
            </li>
            <li className='items-center'>
                 <p className='text-[16px]'>MARKETING & BUSINESS PARTNER OFFICE:</p>
                <p className='text-[12px] ml-[0.4vw]'>Anubing Street, Ormoc City, Leyte 6541</p>
            </li>
            <li className='flex items-center'>
                 <p className='text-[16px]'>MOBILE NUMBER:</p>
                <p className='text-[12px] ml-[0.4vw]'>0975-814-7492 | 0970-695-3403</p>
            </li>
            <li className='flex items-center'>
                 <p className='text-[16px]'>LANDLINE:</p>
                <p className='text-[12px] ml-[0.4vw]'>053-552-1687</p>
            </li>
            <li className='flex items-center'>
                 <p className='text-[16px]'>EMAIL:</p>
                <p className='text-[12px] ml-[0.4vw]'>crispykingph@gmail.com</p>
            </li>
        </ul>
        <div data-aos="zoom-in">
            <div className='gap-[1vw]'>
                <div className='text-[16px] mr-[2vw]'>FOLLOW US ON:</div>
                <div className='flex'>
                    <BsFacebook size={60} />
                <   BsYoutube size={60} />
                </div>
            </div>
            <img className='w-[330px] mx-auto' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/e42f032e-4883-42e3-95e5-f8ab3a1f4cfe/WEBSITE+2.png?format=500w' />
        </div>
    </div>


    <div data-aos="zoom-in" className='sm:hidden flex flex-col items-center py-[2vw] pb-[3.5vw] text-[12px] gap-y-[10px] text-center'>
        <div>© 2022 Crispy King Ventures. All Rights Reserved.</div>
        <div>Disclamer: This website is a clone for educational purposes.  all materials used belong to their rightful owner.</div>
    </div>
    </>
  )
}

export default Footer