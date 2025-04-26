import React, {useEffect} from 'react';
import puzzle from '../assets/puzzle.png'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  
   useEffect(()=> {
      AOS.init({duration:2000});
    },[])
  return (
    <div className='flex flex-col justify-center items-center h-[100%] pt-[200px] bg-[#0d30f5]'>
        <div className='text-[60px] max-md:text-[50px] font-black'>
            <div id='shadowtext' className='max-w-[580px] text-center white leading-[60px] text-[#fffffff1]' data-aos='fade up' data-aos-duration='2000'>Pushing The Boundaries of NFT x AI Innovation</div>
        </div>

        <img id='imgpuzzle' className='w-[270px] rounded-[2vw]' data-aos='fade up' data-aos-duration='2000' src={puzzle} />

        <div className='hover:scale-110 duration-500'>
            <a id='Antifrag' href='https://www.youtube.com/watch?v=xvFZjo5PgG0 ' target='blank' 
             className='p-[20px] bg-[#ffffff33] rounded-[0.6vw] text-[70px] max-md:text-[10vw] max-md:text-nowrap text-[#fffffff3] cursor-pointer' data-aos='fade up' data-aos-duration='3000'>Become Anti-Fragile
            </a>
            
        </div>
    </div>

    
  )
}



export default Home