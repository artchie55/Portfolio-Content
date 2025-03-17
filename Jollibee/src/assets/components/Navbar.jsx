import React, { useState } from 'react'
import jollibeelogo from '../pictures/jollibeelogo.png'
import {IoIosArrowDown} from 'react-icons/io'
import {FaBars} from 'react-icons/fa'


const Navbar = () => {

    const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav (!nav)
    };
  return (
<>
    {
    nav ? (
        <>
        <div className='lg:hidden max-md:hidden'>
        <nav className='fixed flex justify-between bg-[#d6001c] items-center w-full border-b-4 border-[#ffa400] z-50'>
            <left className='py-[25px] pl-[2px] ml-[20px]'>
                <img className='max-h-[60px] max-w-[250px]' src={jollibeelogo}/>
            </left>
            <right className='mr-[0%] flex items-center text-white text-[20px] font-bold'>
                <FaBars onClick={handleNav} size={30} width={31} height={19}/>
                <div className='px-[25px] py-[13px] text-[16px] bg-[#ff620f] rounded-full font-semibold text-white leading-[17px] shadow-Jshadow mx-[25px] cursor-pointer'>Order Now</div>
            </right>
        </nav>

        <div className='flex flex-col justify-center items-center text-[24px] font-bold text-center h-screen w-screen fixed bg-white z-40'>
                <div className='pt-[30px] cursor-pointer'>Delivery</div>
                <div className='pt-[30px] cursor-pointer'>Locations</div>
                <div className='pt-[30px] flex items-center cursor-pointer'>Menu<IoIosArrowDown className='ml-[7px] scale-90 text-[#FA8003]'/></div>
                <div className='pt-[30px] flex items-center cursor-pointer'>Promotions<IoIosArrowDown className='ml-[7px] scale-90 text-[#FA8003] '/></div>
                <div className='mt-[40px] px-[28px] py-[13px] text-[20px] bg-[#FA8003] rounded-full font-semibold text-white leading-[25px] shadow-Jshadow cursor-pointer'>Order Now</div>
        </div>
        </div>

        <div className='md:hidden '>
        <nav className='fixed flex justify-between bg-[#d6001c] items-center w-full border-b-4 border-[#ffa400] z-50'>
            <left className='py-[25px] pl-[2px] ml-[20px]'>
                <img className='max-h-[40px] max-w-[152px]' src={jollibeelogo}/>
            </left>
            <right className='mr-[0%] flex items-center text-white text-[20px] font-bold cursor-pointer'>
                <FaBars onClick={handleNav} size={30} width={31} height={19}/>
                <div className='px-[25px] py-[13px] text-[16px] bg-[#ff620f] rounded-full font-semibold text-white leading-[17px] shadow-Jshadow mr-[25px] ml-[18px] cursor-pointer'>Order Now</div>
            </right>
        </nav>

        <div className='flex flex-col justify-center items-center text-[24px] font-bold text-center h-screen w-screen fixed bg-white z-40'>
                <div className='pt-[30px] cursor-pointer'>Delivery</div>
                <div className='pt-[30px] cursor-pointer'>Locations</div>
                <div className='pt-[30px] flex items-center cursor-pointer'>Menu<IoIosArrowDown className='ml-[7px] scale-90 text-[#FA8003]'/></div>
                <div className='pt-[30px] flex items-center cursor-pointer'>Promotions<IoIosArrowDown className='ml-[7px] scale-90 text-[#FA8003] '/></div>
                <div className='mt-[40px] px-[28px] py-[13px] text-[20px] bg-[#FA8003] rounded-full font-semibold text-white leading-[25px] shadow-Jshadow cursor-pointer'>Order Now</div>
        </div>
        </div>

        </>
        )
        :(
        <>
        <nav className='fixed flex justify-between bg-[#d6001c] items-center w-full border-b-4 border-[#ffa400] max-md:hidden lg:hidden z-30'>
            <left className='py-[25px] pl-[2px] ml-[20px]'>
                <img className='max-h-[60px] max-w-[250px]' src={jollibeelogo}/>
            </left>
            <right className='mr-[0%] flex items-center text-white text-[20px] font-bold cursor-pointer'>
                <FaBars onClick={handleNav} size={30} width={31} height={19}/>
                <div className='px-[25px] py-[13px] text-[16px] bg-[#ff620f] rounded-full font-semibold text-white leading-[17px] shadow-Jshadow mx-[25px] cursor-pointer'>Order Now</div>
            </right>
        </nav>

        <nav className='fixed flex justify-around  bg-[#d6001c] items-center w-full border-b-4 border-[#ffa400] max-lg:hidden z-30'>
            <left className='py-[18px] pl-[2px] left-[20px]'>
                <img className='max-h-[60px] max-w-[250px]' src={jollibeelogo}/>
            </left>
            <right className='mr-[0%] flex items-center text-white text-[20px] font-bold'>
                <div className='px-[20px] cursor-pointer'>Delivery</div>
                <div className='px-[20px] cursor-pointer'>Locations</div>
                <div className='px-[20px] flex items-center cursor-pointer'>Menu<IoIosArrowDown className='ml-[7px] scale-90'/></div>
                <div className='px-[20px] flex items-center cursor-pointer'>Promotions<IoIosArrowDown className='ml-[7px] scale-90'/></div>
                <div className='px-[28px] py-[13px] text-[20px] bg-[#FA8003] rounded-full font-semibold text-white leading-[25px] shadow-Jshadow cursor-pointer'>Order Now</div>
            </right>
        </nav>

        <div className='md:hidden'>
        <nav className='fixed flex justify-between bg-[#d6001c] items-center w-full border-b-4 border-[#ffa400] z-30'>
            <left className='py-[25px] pl-[2px] ml-[20px]'>
                <img className='max-h-[40px] max-w-[152px]' src={jollibeelogo}/>
            </left>
            <right className='mr-[0%] flex items-center text-white text-[20px] font-bold cursor-pointer'>
                <FaBars onClick={handleNav} size={30} width={31} height={19}/>
                <div className='px-[25px] py-[13px] text-[16px] bg-[#ff620f] rounded-full font-semibold text-white leading-[17px] shadow-Jshadow mr-[25px] ml-[18px] cursor-pointer'>Order Now</div>
            </right>
        </nav>
        </div>
        </>
        )
    }
</>
  )
}



export default Navbar