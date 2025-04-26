import React from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { useState } from 'react'




const Navbar = () => {

  const [defaultRotate, setRotate] = useState(false);

  const handleRotate = () => setRotate(!defaultRotate);
  
  const rotate = defaultRotate ? "rotate(45deg)" : "rotate(0)";




  const [nav,setNav] = useState(false)
    const handleNav = () => {
        setNav (!nav)
    };



  return (
    <>
    <div id='container' className='mt-[20px] mb-[60px] max-md:hidden'>
    <div className='flex justify-between items-center max-w-[1500px] mx-auto overflow-clip flex-wrap'>
        <div>
            <img data-aos="zoom-in" className='cursor-pointer max-w-[100%] h-[100px]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/02f9b29f-f7b4-4453-81f4-607902920e38/Logo.jpg?format=1500w'/>
        </div>
        <div data-aos="zoom-in" className='flex items-center text-[22.4px] gap-[30px]'>
            <div className='cursor-pointer' >Home</div>
            <div className='cursor-pointer'>Our Story</div>
            <div className='cursor-pointer'>Business Partner</div>
            <div className='cursor-pointer'>FAQs</div>
            <div className='cursor-pointer'>Contact</div>
            <div className='cursor-pointer bg-[#ff0000] px-[56px] py-[16px] rounded-[300px] text-white text-[16.5px] leading-[20px]'>BOOK AN APPOINTMENT</div>
        </div>
    </div>
    </div>

    
      
      <div id='navbar' className='flex justify-between items-center mx-[5vw] py-[5vw] pb-[10vw] md:hidden'>
        <div>
          <img className='relative z-20 w-[150px]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/02f9b29f-f7b4-4453-81f4-607902920e38/Logo.jpg?format=1500w' />
        </div>
        <div className=' relative z-20' style={{ transform: rotate, transition: "all 0.3s", width: "40px" }}
      onClick={() => {
        handleNav();
        handleRotate();
        
      }}>
          <AiOutlinePlus size={45} className='cursor-pointer'  />
        </div>
      </div> 

      {
      nav ? (
        <div className=' flex flex-col items-center fixed text-[7vw] pt-[50%] gap-[2vw] top-0 left-[0] bg-[#F3E543] w-full h-full z-10 overflow-y-hidden md:hidden'>
              <div>
                Home
              </div>
              <div>
                Our Story
              </div>
              <div>
                Business partner
              </div>
              <div>
                FAQs
              </div>
              <div>
                Contact
              </div>
              <div className='py-[5vw] px-[15vw]  bg-[#FF0000] rounded-full text-white  text-center text-[5vw] mt-[30vw]'>
                 BOOK AN APPOINTMENT
              </div>
        </div>
             
       ):
       (
        <div>
          
      </div>
       )
      }

  </>
  )
}

export default Navbar

