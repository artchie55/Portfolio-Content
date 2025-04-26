import React from 'react'
import jollibeelogo from '../pictures/jollibeelogo.png'
import {IoIosArrowDown} from 'react-icons/io'

const Home = () => {
  return (
<>

<div className='max-lg:hidden max-md:hidden transition-all duration-1000'>
        <nav className='fixed flex justify-around  bg-[#d6001c] items-center w-full border-b-4 border-[#ffa400] z-30'>
            <left className='py-[18px] pl-[2px] left-[20px]'>
                <img className='max-h-[60px] max-w-[250px]' src={jollibeelogo}/>
            </left>
            <right className='mr-[0%] flex items-center text-white text-[20px] font-bold '>
                <div className='px-[20px] cursor-pointer'>Delivery</div>
                <div className='px-[20px] cursor-pointer'>Locations</div>
                <div className='px-[20px] flex items-center cursor-pointer'>Menu<IoIosArrowDown className='ml-[7px] scale-90'/></div>
                <div className='px-[20px] flex items-center cursor-pointer'>Promotions<IoIosArrowDown className='ml-[7px] scale-90'/></div>
                <div className='px-[28px] py-[13px] text-[20px] bg-[#FA8003] rounded-full font-semibold text-white leading-[25px] shadow-Jshadow cursor-pointer'>Order Now</div>
            </right>
        </nav>
    <div className='pt-[101px] flex flex-col items-center justify-center'>
        <div className='bg-[url(https://queen.jollibee.com.ph/2021/12/home_banner_1.png)] bg-cover w-full bg-center'>
            <div className='flex flex-col items-center justify-center font-bold py-[105px] mr-[550px] text-center transition-all ease-linear duration-1000'>
                <div className='text-[54px] text-white  whitespace-nowrap'>
                    Bringing joy to you
                </div>
                <div className='text-[30px]  text-center text-white max-w-[475px]'>
                    Have your Jollibee favorites delivered right to your doorstep!
                </div>
                <div className='mt-[40px] px-[28px] py-[13px] text-[30px] bg-[#FA8003] rounded-full font-semibold text-white leading-[40px] shadow-Jshadow cursor-pointer'>
                    Order Now
                </div>
            </div>
        </div> 
    </div>  
</div>


<div className='lg:hidden max-md:hidden  max-sm:hidden'>
    <div className='pt-[115px] flex flex-col items-center justify-center'>
        <div className='bg-[url(https://queen.jollibee.com.ph/2021/12/home_banner_1.png)] bg-cover bg-center w-full'>
            <div className='flex flex-col items-center justify-center font-bold py-[50px] mr-[300px] text-center'>
                <div className='text-[54px] text-white'>
                    Bringing joy to you
                </div>
                <div className='text-[30px]  text-center text-white max-w-[475px]'>
                    Have your Jollibee favorites delivered right to your doorstep!
                </div>
                <div className='mt-[40px] px-[28px] py-[13px] text-[30px] bg-[#FA8003] rounded-full font-semibold text-white leading-[40px] shadow-Jshadow cursor-pointer'>
                    Order Now
                </div>
            </div>
        </div> 
    </div>  
</div>


<div className='md:hidden'>
    <div className='pt-[95px] flex flex-col items-center justify-center'>
        <div className='bg-[url(https://queen.jollibee.com.ph/2022/05/home_banner_2_mobile.png)] bg-cover bg-center w-full'>
            <div className='flex flex-col items-center justify-center font-bold pt-[20px] pb-[200px]'>
                <div className='text-[42px] text-white text-center'>
                    Bringing joy to you
                </div>
                <div className='text-[25px]  text-center text-white'>
                    Have your Jollibee favorites delivered right to your doorstep!
                </div>
                <div className='mt-[10px] px-[28px] py-[13px] text-[23px] bg-[#FA8003] rounded-full font-semibold text-white leading-[40px] shadow-Jshadow cursor-pointer'>
                    Order Now
                </div>
            </div>
        </div> 
    </div>  
</div>


  
    <div className='flex justify-center gap-x-[130px] text-[#212529] mx-[5px] mt-[40px] px-[5px] mr-[50px] mb-[5px] max-md:hidden border-b-2 border-[#e3e3e3] text-center'>
            <div className='flex flex-col items-center text-[35px] font-bold pb-[50px] cursor-pointer'>
                <img src='https://queen.jollibee.com.ph/2021/12/order_pickup-150x150.png' />
                <div className='mt-[10px]'>Order & Pick Up</div>
            </div>
            <div className='flex flex-col items-center text-[35px] font-bold cursor-pointer'>
                <img src='https://queen.jollibee.com.ph/2021/12/download_app-150x150.png' />
                <div className='mt-[10px]'>Download the App</div>
            </div>
            <div className='flex flex-col items-center text-[35px] font-bold cursor-pointer'>
                <img src='https://queen.jollibee.com.ph/2021/12/8700-150x150.png' />
                <div className='mt-[10px]'>#87000</div>
            </div>
    </div>

    
    <div className='flex justify-center gap-x-[10px] text-[#212529] text-[20px] font-bold mt-[40px] mb-[5px] md:hidden text-center border-b-2 border-[#e3e3e3]'>
            <div className='flex flex-col items-center mx-[5px] pb-[50px] cursor-pointer'>
                <img src='https://queen.jollibee.com.ph/2021/12/order_pickup-150x150.png' />
                <div className='mt-[10px]'>Order & Pick Up</div>
            </div>
            <div className='flex flex-col items-center mx-[5px] cursor-pointer'>
                <img src='https://queen.jollibee.com.ph/2021/12/download_app-150x150.png' />
                <div className='mt-[10px]'>Download the App</div>
            </div>
            <div className='flex flex-col items-center mx-[5px] cursor-pointer'>
                <img src='https://queen.jollibee.com.ph/2021/12/8700-150x150.png' />
                <div className='mt-[10px]'>#87000</div>
            </div>
    </div>

</>  
  )
}

export default Home