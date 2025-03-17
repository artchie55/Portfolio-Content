import React from 'react'
import {BsFacebook} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {SiViber} from 'react-icons/si'

const Footer = () => {
  return (
    <>
    <div className='flex justify-center items-center mt-[50px] gap-x-[200px] border-b-[3px] border-[#FFA400] pb-[60px] max-md:hidden'>
        <div className='flex flex-col items-center justify-center'>
            <div className='relative mb-[50px]'>
                <img src='https://queen.jollibee.com.ph/2022/05/what_we_stand_for.webp' className='relative z-10'/> 
                <div className='absolute rounded-[20px]  bg-[#FFA400] w-full h-full top-[25px] left-[35px] z-0'></div>
            </div>
            <div className='text-[30px] font-bold border-b-[5px] border-[#FFA400] pb-[17px] w-[200px] text-center'>What We Do</div>
            <div className='max-w-[360px] text-[18px] text-center mt-[15px] text-[#212529]'>Jollibee's Mission is to serve great-tasting food, bringing the joy of eating to everyone.</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='relative mb-[50px]'>
                <img src='https://queen.jollibee.com.ph/2021/12/what_we_do.png' className='relative z-10'/>
                <div className='absolute rounded-[20px]  bg-[#D6001C] w-full h-full top-[25px] right-[35px] z-0'></div>
            </div>
            <div className='text-[30px] font-bold border-b-[5px] border-[#D6001C] pb-[17px] w-[290px] text-center'>What We Stand For</div>
            <div className='max-w-[360px] text-[18px] text-center mt-[15px] text-[#212529]'>Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.</div>
        </div>
    </div>

    <div className='flex flex-col justify-center items-center mt-[50px] gap-y-[40px] border-b-[3px] border-[#FFA400] pb-[40px] md:hidden'>
        <div className='flex flex-col items-center justify-center'>
            <div className='relative mb-[50px]'>
                <img src='https://queen.jollibee.com.ph/2022/05/what_we_stand_for.webp' className='relative z-10'/> 
                <div className='absolute rounded-[20px]  bg-[#FFA400] w-full h-full top-[25px] left-[35px] z-0'></div>
            </div>
            <div className='text-[30px] font-bold border-b-[5px] border-[#FFA400] pb-[17px] w-[200px] text-center'>What We Do</div>
            <div className='max-w-[360px] text-[18px] text-center mt-[15px] text-[#212529]'>Jollibee's Mission is to serve great-tasting food, bringing the joy of eating to everyone.</div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <div className='relative mb-[50px]'>
                <img src='https://queen.jollibee.com.ph/2021/12/what_we_do.png' className='relative z-10'/>
                <div className='absolute rounded-[20px]  bg-[#D6001C] w-full h-full top-[25px] right-[35px] z-0'></div>
            </div>
            <div className='text-[30px] font-bold border-b-[5px] border-[#D6001C] pb-[17px] w-[290px] text-center'>What We Stand For</div>
            <div className='max-w-[360px] text-[18px] text-center mt-[15px] text-[#212529]'>Jollibee is a family-centric brand that promotes family values and togetherness and espouses Filipino pride.</div>
        </div>
    </div>







<div className=' max-md:hidden'>
    <div className='flex justify-between max-w-[1200px] ml-auto mr-auto my-[20px] '>
        <div className=''>
            <img src='https://queen.jollibee.com.ph/2022/02/jollibee-logo-footer-2x.png' className=' w-[273px] h-auto'/>
        </div>
        <div className=''>
            <div className='my-[20px] px-[28px] py-[13px] text-[18px] bg-[#FA8003] rounded-full font-semibold text-white leading-[25px] shadow-Jshadow'>
                Order Now
            </div>
        </div>
    </div>

    <div className='flex justify-between max-w-[1200px] mx-auto mb-[70px]'>
        <div className='flex flex-col'>
            <div className='text-[16px] font-bold'>Follow Us</div>
            <div className='flex gap-[10px]'>
                <BsFacebook color='#D6001C' size={35}/>
                <AiFillInstagram color='#D6001C' size={35}/>
                <AiFillTwitterCircle color='#D6001C' size={35}/>
                <SiViber color='#D6001C' size={35}/>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>How To Order</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>View Menu</div>
                <div>Delivery</div>
                <div>Multi-Delivery</div>
                <div>Locations</div>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>Promotions</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>Promos</div>
                <div>Gift Cards</div>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>About Us</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>About Jollibee</div>
                <div>Safety</div>
                <div>Investors</div>
                <div>Franchising</div>
                <div>Careers</div>
                <div>Jollibee Group Foundation</div>
                <div>Contact Us</div>
                <div>Rate Our Stores</div>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>About Our Website</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
                <div>Accessibility</div>
                <div>Sitemap</div>
            </div>
        </div>

        <div>
            <div>
                <img src='https://queen.jollibee.com.ph/2022/01/Google-Play-Badge.png' className='w-[160px] h-auto'/>
            </div>
            <div>
                <img src='https://queen.jollibee.com.ph/2022/01/Apple-Store-Badge.png' className='w-[160px] h-auto'/>
            </div>
        </div>

    </div>
</div>


<div className='md:hidden'>
    <div className='flex justify-between max-w-[500px] ml-auto mr-auto my-[20px] '>
        <div className=''>
            <img src='https://queen.jollibee.com.ph/2022/02/jollibee-logo-footer-2x.png' className=' w-[230px] h-auto'/>
        </div>
        <div className=''>
            <div className='my-[20px] px-[23px] py-[13px] text-[16px] bg-[#FA8003] rounded-full font-semibold text-white leading-[17px] shadow-Jshadow'>
                Order Now
            </div>
        </div>
    </div>

    <div className='grid grid-cols-3 flex-wrap max-w-[500px] mx-auto mb-[70px]'>
        <div className='flex flex-col'>
            <div className='text-[16px] font-bold'>Follow Us</div>
            <div className='flex gap-[10px]'>
                <BsFacebook color='#D6001C' size={35}/>
                <AiFillInstagram color='#D6001C' size={35}/>
                <AiFillTwitterCircle color='#D6001C' size={35}/>
                <SiViber color='#D6001C' size={35}/>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>How To Order</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>View Menu</div>
                <div>Delivery</div>
                <div>Multi-Delivery</div>
                <div>Locations</div>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>Promotions</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>Promos</div>
                <div>Gift Cards</div>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>About Us</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>About Jollibee</div>
                <div>Safety</div>
                <div>Investors</div>
                <div>Franchising</div>
                <div>Careers</div>
                <div>Jollibee Group Foundation</div>
                <div>Contact Us</div>
                <div>Rate Our Stores</div>
            </div>
        </div>

        <div>
            <div className='text-[16px] font-bold mb-[5px]'>About Our Website</div>
            <div className='text-[14px] flex flex-col gap-y-[4px]'>
                <div>Privacy Policy</div>
                <div>Terms & Conditions</div>
                <div>Accessibility</div>
                <div>Sitemap</div>
            </div>
        </div>

        <div>
            <div>
                <img src='https://queen.jollibee.com.ph/2022/01/Google-Play-Badge.png' className='w-[160px] h-auto'/>
            </div>
            <div>
                <img src='https://queen.jollibee.com.ph/2022/01/Apple-Store-Badge.png' className='w-[160px] h-auto'/>
            </div>
        </div>

    </div>
</div>
    </>
  )
}

export default Footer