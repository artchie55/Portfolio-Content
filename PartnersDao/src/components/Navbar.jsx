import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
  useEffect(()=> {
    AOS.init({duration:2000});
  },[])
  return (
    <a href='#' id='shadowtext' className='fixed w-screen flex justify-between text-[#ffffff]   py-[0.7vw] font-black items-center'>
        <div className='ml-[4vw] text-[2vw] cursor-pointer max-lg:text-[4vw]' data-aos="fade-right" data-aos-duration="1000">Partners.Dao</div>
        <div className='flex justify-between text-[1.5vw] max-lg:text-[2.5vw]'>
            <a href='https://x.com/partnersDAO' target='_blank'  className='cursor-pointer relative hover:scale-125 duration-500' data-aos="fade-left" data-aos-duration="1000">Twitter </a>
            <a href='https://www.daos.fun/' target='_blank' className='cursor-pointer mx-[5vw] hover:scale-125 duration-500' data-aos="fade-left" data-aos-duration="1000">Daos.fun</a>
        </div>
    </a>
  )
}

export default Navbar