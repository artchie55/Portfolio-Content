import React from 'react'
import TransparentLogo from '../assets/TransparentLogo.png';

const Footer = () => {
  return (
    <div className='flex justify-center mt-[250px] bg-[#b86e0070] text-[1.3rem] font-bold py-[30px]'>


          <div className='flex items-center text-center' >
                  <img className='w-[7rem]' src={TransparentLogo} alt='Logo' />
                  <div id='CozyText' className='text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.5rem]'>
                    Cozy Getaways
                  </div>
                
          </div>
    </div>
  )
}

export default Footer