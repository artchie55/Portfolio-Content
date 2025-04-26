import React from 'react'

const Content = () => {
  return (
    < >
    {/*Display 1000px above*/}
    <div id='home'></div>
     <div className='relative max-1000:hidden'>
        <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg"
            alt="Mountain Falls Pond"
            className="w-full max-w-full h-[900px] object-cover object-center brightness-75 "/>
             <div className='absolute top-0 w-full flex flex-col items-center justify-center text-white mt-[200px]'>
            <div id='slabtext' className='text-[100px]'> PAHRUMP REALTOR</div>
            <div id='slabtext' className='text-[30px]'> MARCI METZGER - THE RIDGE REALTY GROUP</div>
            <div className='px-[60px] py-[25px] bg-[#86c33a] text-[24px] font-bold rounded-full mt-[100px] cursor-pointer hover:scale-90 hover:brightness-[90%] transition duration-200'>CALL NOW</div>
        </div>
    </div>

    {/*Display 1000px below*/}
    <div className='relative 1000:hidden'>
        <img
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/mtn%20falls%20pond.jpg"
            alt="Mountain Falls Pond"
            className="w-full max-w-full h-[900px] max-500:h-[650px] object-cover object-center brightness-75 "/>
        <div className='absolute top-0 w-full flex flex-col items-center justify-center text-white mt-[300px]'>
            <div id='slabtext' className='text-[55px] text-nowrap max-500:text-[35px]'>PAHRUMP REALTOR</div>
            <div id='slabtext' className='text-[20px] max-500:text-[15px] text-center'> MARCI METZGER - THE RIDGE REALTY GROUP</div>
            <div className='px-[45px] py-[15px] bg-[#86c33a] text-[24px] max-500:text-[15px] font-bold rounded-full mt-[30px] cursor-pointer hover:scale-90 hover:brightness-[90%] transition duration-200'>CALL NOW</div>
        </div>
    </div>
   
    </>
  )
}

export default Content