import React from 'react'

const Herosection = () => {
  return (
    <>
    <div  id='container' className='mb-[7vw] max-md:hidden'>
        <div data-aos="zoom-in"  data-aos-easing="ease-in" className='mb-[7vw] max-w-[1500px] mx-auto'>
            <img src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/3c23c76b-45aa-43b1-86c6-2e395662f962/Website.jpg?format=1500w' />
        </div>
        <div className='relative '>
            <img  data-aos="zoom-in"  id='img1' className='z-[-99] max-w-[30vw] absolute top-0 left-0 ' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/9d67a958-63a0-43a4-9909-972c58ae8241/302300874_377753901214273_536502686283685803_n.jpeg?format=1500w' />
            <img  data-aos="zoom-in"  id='img2' className='z-[-99] max-w-[30vw] absolute bottom-0 right-0' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/fe1bdaed-ad49-4dae-a5bc-784db18208cc/302544571_377753544547642_7109132243797343368_n.jpeg?format=1500w' />
            <img data-aos="zoom-in" className='w-[25vw] absolute left-[13vw] top-[13vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/f387ed9d-d4ef-4293-8536-ef77ab0a7139/1.png?format=750w'/>
            <img data-aos="zoom-in" className='w-[25vw] absolute right-[5vw] top-[8vw] rotate-[150deg] scale-[-1]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/f387ed9d-d4ef-4293-8536-ef77ab0a7139/1.png?format=750w'/>
            <div className='flex flex-col items-center justify-center h-[40vw]'>
                <div className='text-[3vw] font-bold'>NOW WITH OVER</div>
                <div data-aos="zoom-in" className='text-[5vw] font-bold text-[#FF0000] border-b-[0.6vw] border-[#FF0000] leading-[4vw]'>300 BRANCHES</div>
                <div className='text-[3vw] font-bold'>NATIONWIDE</div>
                <div className='text-[1.5vw] max-w-[30vw]'>BE A PART OF OUR FAST-GROWING FAMILY WITH OVER 300 BRANCHES NATIONWIDE!</div>
                <div className='cursor-pointer py-[1.5vw] px-[11vw] mt-[0.7vw] bg-[#FF0000] rounded-full text-[1.5vw] text-white leading-[1.2vw]'>LEARN MORE→</div>
            </div>
        </div>
    </div>

    
    
    <div  id='container' className='mb-[7vw] md:hidden'>
        <div data-aos="zoom-in"  data-aos-easing="ease-in" className='mb-[7vw] max-w-[1500px] mx-auto'>
            <img src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/3c23c76b-45aa-43b1-86c6-2e395662f962/Website.jpg?format=1500w' />
        </div>
        <div className=' flex flex-col items-center'>
            <img  data-aos="zoom-in"  id='img2' className='z-[-99] w-[90vw] mb-[20vw] ' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/fe1bdaed-ad49-4dae-a5bc-784db18208cc/302544571_377753544547642_7109132243797343368_n.jpeg?format=1500w' />
            <div className='flex flex-col items-center justify-center h-[40vw]'>
                <div className='text-[6.5vw] font-bold'>NOW WITH OVER</div>
                <div data-aos="zoom-in" className='text-[10vw] font-bold text-[#FF0000] border-b-[0.6vw] border-[#FF0000] leading-[8vw]'>300 BRANCHES</div>
                <div className='text-[6.5vw] font-bold mt-[1vw]'>NATIONWIDE</div>
                <div className='text-[4.9vw] max-w-[80vw] text-center'>BE A PART OF OUR FAST-GROWING FAMILY WITH OVER 300 BRANCHES</div>
                <div className='cursor-pointer py-[6vw] px-[23vw] mt-[0.7vw] bg-[#FF0000] rounded-full text-[5vw] text-white leading-[1.2vw]'>LEARN MORE→</div>
            </div>
            <img  data-aos="zoom-in"  id='img1' className='z-[-99]  w-[90vw] mt-[20vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/9d67a958-63a0-43a4-9909-972c58ae8241/302300874_377753901214273_536502686283685803_n.jpeg?format=1500w' />
        </div>
    </div>
    </>
  )
}



export default Herosection