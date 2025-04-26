import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';




const Content = () => {
  return (
    <>
    <div className='max-md:hidden'>
        <div className='px-[3.5vw] bg-[#FF0000] pb-[5vw]'>
          <div className='text-center text-white font-bold py-[3vw] text-[4vw]'>OUR FAVORITES</div>
          <Swiper className='cursor-pointer'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide>
            <img data-aos="zoom-in" className='h-[27vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/d3d474d5-8b01-4ab2-a090-be7424bfae9b/GAC_6371-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[2.3vw] max-w-[20vw]'>CRISPY FRIED CHICKEN</div>
            <div className='text-[#F3E543] text-[1.3vw]' >₱40.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='h-[27vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/94ce9975-416c-426f-a629-2e128bf01243/GAC_6358-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] text-[2.3vw] font-bold'>NGOHIONG</div>
            <div className='text-[#F3E543] text-[1.3vw]' >₱10.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='h-[27vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/fd10fce4-0419-4f27-ba27-d0f25c205ccf/GAC_6356-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[2.3vw]'>BOLA-BOLA</div>
            <div className='text-[#F3E543] text-[1.3vw]' >₱10.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='h-[27vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/0d6494e3-5090-4392-a1cc-54c51b44b81f/GAC_6355-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[2.3vw]'>LUMPIA SHANGHAI</div>
            <div className='text-[#F3E543] text-[1.3vw]' >₱8.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='h-[27vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/0254bc81-0e8a-48ce-9152-9d60d7f8afc6/GAC_6349-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[2.3vw]'>SIOMAI</div>
            <div className='text-[#F3E543] text-[1.3vw]' >₱30.00/4pc</div>
          </SwiperSlide>
          </Swiper>
        </div>






        <div className='w-full py-[20vw] bg-center bg-cover brightness-[0.9] bg-[url(https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/6344ccfd-49a4-4853-bc3d-6365a37f252d/Lamrag.jpg?format=1500w)]'></div>

        <div className='bg-[#F3E543] py-[5vw] pb-[8vw]'>
                  <div data-aos="zoom-in" className='text-center font-bold text-[4vw] mb-[3vw]'>WHY PARTNER CRISPY KING?</div>
          <div className='flex justify-center gap-[6vw]'>
            <div>
              <img data-aos="zoom-in" className='h-[27vw] w-[27vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/f410f07a-524e-432c-b422-2bbc25e69e95/286805452_321640700158927_2109276855729488520_n.jpg?format=750w'></img>
              <div data-aos="zoom-in" className='font-bold text-[2.35vw]'>QUICK ROI</div>
              <div data-aos="zoom-in" className='text-[1.3vw]'>(RETURN OF INVESTMENT)</div>
            </div>
            <div>
              <img data-aos="zoom-in" className='h-[27vw] w-[27vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/794a7967-e2d1-444a-a0e1-22cdfb562bea/Mothersday.jpg?format=500w'></img>
              <div data-aos="zoom-in" className='font-bold text-[2.35vw]'>PATOK NG MASA</div>
              <div data-aos="zoom-in" className='text-[1.3vw]'>AFFORDABLE AT JUICY</div>
            </div>
            <div>
              <img data-aos="zoom-in" className='h-[27vw] w-[27vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/dd6dccc5-455c-473e-a580-a55c3443033d/CRISPY+KING.png?format=500w'></img>
              <div data-aos="zoom-in" className='font-bold text-[2.35vw]'>NO FRANCHISE FEE</div>
              <div data-aos="zoom-in" className='text-[1.3vw]'>WITH END-TO-END MANAGEMENT SUPPORT</div>
            </div>
          </div>
                    <div className='flex justify-center pt-[3.6vw]'>
                      <div data-aos="zoom-in" className='cursor-pointer max-w-[50vw] py-[1.5vw] px-[5vw] mt-[0.7vw] border-white border-[0.1vw] bg-[#FF0000] rounded-full text-[1.5vw] text-white leading-[1.2vw]'>BECOME A BUSINESS PARTNER→</div>
                    </div>  
        </div>
              


      
      <div className='flex items-center justify-center py-[5vw] px-[2vw] bg-[#FF0000]'>
        <div className='mr-[4vw] leading-[6vw]'>
          <div data-aos="zoom-in" className='font-bold text-[4.5vw] text-[#F3E543]'>FEATURED</div>
          <div data-aos="zoom-in" className='font-bold text-[7vw] text-[#F3E543]'>VIDEOS</div>
        </div>
        <iframe className='mr-[1vw] w-[33vw] h-[17.5vw]'  src="https://www.youtube.com/embed/ZCtfBR5sMnc"></iframe>
        <iframe className='w-[32vw] h-[17.5vw]' src="https://www.youtube.com/embed/1W-zJDJviMs"></iframe>      
      </div>          
                
  
    </div>



















    <div className='md:hidden max-sm:hidden'>
        <div className='px-[3.5vw] bg-[#FF0000] pb-[5vw]'>
          <div className='text-center text-white font-bold py-[3vw] text-[9vw]'>OUR FAVORITES</div>
          <Swiper className='cursor-pointer'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={2}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide >
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/d3d474d5-8b01-4ab2-a090-be7424bfae9b/GAC_6371-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[4.5vw] max-w-[40vw]'>CRISPY FRIED CHICKEN</div>
            <div className='text-[#F3E543] text-[2vw]' >₱40.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/94ce9975-416c-426f-a629-2e128bf01243/GAC_6358-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] text-[4.5vw] font-bold'>NGOHIONG</div>
            <div className='text-[#F3E543] text-[2vw]' >₱10.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/fd10fce4-0419-4f27-ba27-d0f25c205ccf/GAC_6356-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[4.5vw]'>BOLA-BOLA</div>
            <div className='text-[#F3E543] text-[2vw]' >₱10.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/0d6494e3-5090-4392-a1cc-54c51b44b81f/GAC_6355-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[4.5vw]'>LUMPIA SHANGHAI</div>
            <div className='text-[#F3E543] text-[2vw]' >₱8.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/0254bc81-0e8a-48ce-9152-9d60d7f8afc6/GAC_6349-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[4.5vw]'>SIOMAI</div>
            <div className='text-[#F3E543] text-[2vw]' >₱30.00/4pc</div>
          </SwiperSlide>
          </Swiper>
        </div>






        <div className='w-full py-[65vw] bg-center bg-cover brightness-[0.9] bg-[url(https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/6344ccfd-49a4-4853-bc3d-6365a37f252d/Lamrag.jpg?format=1500w)]'></div>

        <div className='bg-[#F3E543] py-[5vw] pb-[8vw]'>
                  <div data-aos="zoom-in" className='text-center font-bold text-[4vw] mb-[3vw]'>WHY PARTNER CRISPY KING?</div>
          <div className='flex justify-center gap-[6vw]'>
            <div>
              <img data-aos="zoom-in" className='h-[27vw] w-[27vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/f410f07a-524e-432c-b422-2bbc25e69e95/286805452_321640700158927_2109276855729488520_n.jpg?format=750w'></img>
              <div data-aos="zoom-in" className='font-bold text-[2.35vw]'>QUICK ROI</div>
              <div data-aos="zoom-in" className='text-[1.3vw]'>(RETURN OF INVESTMENT)</div>
            </div>
            <div>
              <img data-aos="zoom-in" className='h-[27vw] w-[27vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/794a7967-e2d1-444a-a0e1-22cdfb562bea/Mothersday.jpg?format=500w'></img>
              <div data-aos="zoom-in" className='font-bold text-[2.35vw]'>PATOK NG MASA</div>
              <div data-aos="zoom-in" className='text-[1.3vw]'>AFFORDABLE AT JUICY</div>
            </div>
            <div>
              <img data-aos="zoom-in" className='h-[27vw] w-[27vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/dd6dccc5-455c-473e-a580-a55c3443033d/CRISPY+KING.png?format=500w'></img>
              <div data-aos="zoom-in" className='font-bold text-[2.35vw]'>NO FRANCHISE FEE</div>
              <div data-aos="zoom-in" className='text-[1.3vw]'>WITH END-TO-END MANAGEMENT SUPPORT</div>
            </div>
          </div>
                    <div className='flex justify-center pt-[3.6vw]'>
                      <div data-aos="zoom-in" className='cursor-pointer max-w-[50vw] py-[1.5vw] px-[5vw] mt-[0.7vw] border-white border-[0.1vw] bg-[#FF0000] rounded-full text-[1.5vw] text-white leading-[1.2vw]'>BECOME A BUSINESS PARTNER→</div>
                    </div>  
        </div>
              


      
      <div className='flex items-center justify-center py-[5vw] px-[2vw] bg-[#FF0000]'>
        <div className='mr-[4vw] leading-[6vw]'>
          <div data-aos="zoom-in" className='font-bold text-[4.5vw] text-[#F3E543]'>FEATURED</div>
          <div data-aos="zoom-in" className='font-bold text-[7vw] text-[#F3E543]'>VIDEOS</div>
        </div>
        <iframe className='mr-[1vw] w-[33vw] h-[17.5vw]'  src="https://www.youtube.com/embed/ZCtfBR5sMnc"></iframe>
        <iframe className='w-[32vw] h-[17.5vw]' src="https://www.youtube.com/embed/1W-zJDJviMs"></iframe>      
      </div>          
                
  
    </div>















    <div className='sm:hidden '>
        <div className='px-[3.5vw] bg-[#FF0000] pb-[12vw]'>
          <div className='text-center text-white font-bold py-[3vw] pb-[6vw] text-[9vw]'>OUR FAVORITES</div>
          <Swiper className='cursor-pointer'
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log('slide change')}
        >
          <SwiperSlide >
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/d3d474d5-8b01-4ab2-a090-be7424bfae9b/GAC_6371-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[7vw] '>CRISPY FRIED CHICKEN</div>
            <div className='text-[#F3E543] text-[4.4vw]' >₱40.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/94ce9975-416c-426f-a629-2e128bf01243/GAC_6358-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] text-[7vw] font-bold'>NGOHIONG</div>
            <div className='text-[#F3E543] text-[4.4vw]' >₱10.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/fd10fce4-0419-4f27-ba27-d0f25c205ccf/GAC_6356-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[7vw]'>BOLA-BOLA</div>
            <div className='text-[#F3E543] text-[4.4vw]' >₱10.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/0d6494e3-5090-4392-a1cc-54c51b44b81f/GAC_6355-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[7vw]'>LUMPIA SHANGHAI</div>
            <div className='text-[#F3E543] text-[4.4vw]' >₱8.00/pc</div>
          </SwiperSlide>
          <SwiperSlide>
            <img data-aos="zoom-in" className='w-[100vw]' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/0254bc81-0e8a-48ce-9152-9d60d7f8afc6/GAC_6349-2.jpg?format=750w'/>
            <div data-aos="zoom-in" className='text-[#F3E543] font-bold text-[7vw]'>SIOMAI</div>
            <div className='text-[#F3E543] text-[4.4vw]' >₱30.00/4pc</div>
          </SwiperSlide>
          </Swiper>
        </div>






        <div className='w-full py-[65vw] bg-center bg-cover brightness-[0.9] bg-[url(https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/6344ccfd-49a4-4853-bc3d-6365a37f252d/Lamrag.jpg?format=1500w)]'></div>

        <div className='bg-[#F3E543] py-[11vw] pb-[8vw]'>
                  <div data-aos="zoom-in" className='text-center font-bold text-[11vw] mb-[3vw]'>WHY PARTNER CRISPY KING?</div>
          <div className='flex flex-col items-center gap-[12vw]'>
            <div>
              <img data-aos="zoom-in" className='h-[90vw] w-[90vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/f410f07a-524e-432c-b422-2bbc25e69e95/286805452_321640700158927_2109276855729488520_n.jpg?format=750w'></img>
              <div data-aos="zoom-in" className='font-bold text-[8vw]'>QUICK ROI</div>
              <div data-aos="zoom-in" className='text-[5vw]'>(RETURN OF INVESTMENT)</div>
            </div>
            <div>
              <img data-aos="zoom-in" className='h-[90vw] w-[90vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/794a7967-e2d1-444a-a0e1-22cdfb562bea/Mothersday.jpg?format=500w'></img>
              <div data-aos="zoom-in" className='font-bold text-[8vw]'>PATOK NG MASA</div>
              <div data-aos="zoom-in" className='text-[5vw]'>AFFORDABLE AT JUICY</div>
            </div>
            <div className='flex flex-col items-center'>
              <img data-aos="zoom-in" className='h-[90vw] w-[90vw] rounded-full' src='https://images.squarespace-cdn.com/content/v1/638bfa4c67c1ae5384793f8c/dd6dccc5-455c-473e-a580-a55c3443033d/CRISPY+KING.png?format=500w'></img>
              <div data-aos="zoom-in" className='font-bold text-[8vw]'>NO FRANCHISE FEE</div>
              <div data-aos="zoom-in" className='text-[5vw] ml-[10vw]'>WITH END-TO-END MANAGEMENT SUPPORT</div>
            </div>
          </div>
                    <div className='flex justify-center pt-[3.6vw] my-[10vw]'>
                      <div data-aos="zoom-in" className='cursor-pointer  py-[3vw] px-[5vw] mt-[0.7vw] border-white border-[0.1vw] bg-[#FF0000] rounded-full text-[5vw] max-w-[80vw] text-white text-center'>BECOME A BUSINESS PARTNER→</div>
                    </div>  
        </div>
              


      
      <div className='flex flex-col items-center justify-center py-[5vw] pb-[20vw] px-[2vw] bg-[#FF0000] gap-y-[40px]'>
        <div className='mr-[4vw] leading-[13vw] text-center mb-[4vw]'>
          <div data-aos="zoom-in" className='font-bold text-[12vw] text-[#F3E543]'>FEATURED</div>
          <div data-aos="zoom-in" className='font-bold text-[15vw] text-[#F3E543]'>VIDEOS</div>
        </div>
        <iframe className='w-[350px] h-[190px]'  src="https://www.youtube.com/embed/ZCtfBR5sMnc"></iframe>
        <iframe className='w-[350px] h-[190px]' src="https://www.youtube.com/embed/1W-zJDJviMs"></iframe>      
      </div>          
                
  
    </div>
    </>
  )
}

export default Content
