import { useState, useContext, useEffect } from 'react';
import TopMarketCap from '../Elements/TopMarketCap';
import TopGainersCard from '../Elements/TopGainersCard';
import TrendingCoinsCard from '../Elements/TrendingCoinsCard';
import { GiHamburgerMenu } from "react-icons/gi";
import { AuthContext } from './AuthContext'; 

import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();

const Home = () => {
  const { user, setUser } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    setUser(null);
    // Optionally clear user from storage
    // localStorage.removeItem('user');
  };

  return (
    <>
      {/* Navbar/Header */}
      <div className='flex justify-evenly items-center py-[15px] max-1070:justify-between max-1070:mx-[20px] relative'>
        <div data-aos="fade-right" data-aos-duration="1000"data-aos-easing="ease-in-out"
         id='anton' className='text-[30px] text-[#f6339b] cursor-pointer'>PRICETRACKER</div>
        <GiHamburgerMenu 
          size={30} 
          className='1070:hidden cursor-pointer' 
          onClick={() => setMenuOpen(!menuOpen)} 
        />

        {/* Desktop Nav */}
        <ul data-aos="fade-left" data-aos-duration="1000"data-aos-easing="ease-in-out"
        className='flex items-center max-1070:hidden'>
          {["Cryptocurrencies", "Exchanges", "Developers", "Company", "Business"].map((item) => (
            <li key={item} className="relative mx-[20px] font-bold cursor-pointer group">
              <span className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[3px] after:w-0 after:bg-[#f6339b] after:transition-all after:duration-300 group-hover:after:w-full">
                {item}
              </span>
            </li>
          ))}

          {/* User Auth Section (Desktop) */}
          <div className='flex items-center ml-[30px] gap-4'>
            {user ? (
              <>
                <span className="text-lg font-semibold text-gray-700">Welcome, {user.username}</span>
                <button 
                  onClick={handleLogout} 
                  className='px-4 py-1 bg-[#f6339b] text-white font-bold rounded-full hover:brightness-95 cursor-pointer transition duration-200'
                >
                  Sign out
                </button>
              </>
            ) : (
              <>
                <a href='/Login' className='px-[17px] py-[7px] text-[19px] bg-[#f6339b] font-bold rounded-full cursor-pointer hover:scale-110 transition duration-200'>Sign in</a>
                <a href='/Signup' className='px-[17px] py-[7px] text-[19px] border-[#f6339b] font-bold border-[2px] rounded-full cursor-pointer ml-[13px] hover:scale-110 transition duration-200'>Sign up</a>
              </>
            )}
          </div>
        </ul>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className='absolute top-[60px] right-0 bg-white border border-gray-200 shadow-lg p-4 w-[200px] flex flex-col z-50 1070:hidden'>
            {["Cryptocurrencies", "Exchanges", "Developers", "Company", "Business"].map((item) => (
              <li key={item} className='py-2 px-3 font-semibold text-gray-700 hover:text-[#f6339b] cursor-pointer'>
                {item}
              </li>
            ))}
            <div className='mt-3 flex flex-col gap-2'>
              {user ? (
                <>
                  <span className="text-center px-4 py-2 text-gray-700 font-bold">Welcome, {user.username}</span>
                  <button 
                    onClick={handleLogout} 
                    className='mt-2 text-center px-4 py-2 bg-[#f6339b] text-white font-bold rounded-full cursor-pointer'
                  >
                    Sign out
                  </button>
                </>
              ) : (
                <>
                  <a href='/Login' className='text-center px-4 py-2 bg-[#f6339b] text-white font-bold rounded-full cursor-pointer'>Sign in</a>
                  <a href='/Signup' className='text-center px-4 py-2 border-[2px] border-[#f6339b] font-bold rounded-full cursor-pointer'>Sign up</a>
                </>
              )}
            </div>
          </ul>
        )}
      </div>

      {/* Content */}
      <div  data-aos="fade-up" data-aos-duration="1000"data-aos-easing="ease-in-out"
      className='flex justify-center items-center text-center border-b-2 border-gray-300 py-[50px] max-770:flex-col'>
        <div id='raleway' className='text-[50px] tracking-[5px] max-770:text-[37px] 1400:mr-[50px]'>Explore Crypto</div>
        <input placeholder='  🔎 Search for a Coin' className='w-[300px] h-[50px] text-[20px] rounded-full border-[5px] mt-[9px] border-gray-300 focus:outline-none focus:border-pink-500 transition duration-200 text-center 1400:ml-[50px]'></input>
      </div>

      <div data-aos="zoom-in" data-aos-duration="1500"data-aos-easing="ease-in-out"
      className='flex justify-evenly items-center max-1070:flex-col max-1070:mt-[80px]'>
        <div className=''>
          <TopMarketCap />
        </div>
        <div className='py-[200px] relative'>
          <TopGainersCard />
          <TrendingCoinsCard />
          <div className='absolute border-l-[2px] max-1400:border-0  border-gray-300 top-[0px] left-[-80px] h-[1011px] pt-[100px] z-10'></div>
        </div>
      </div>

      {/* Footer */}
      <div className='flex h-[200px] border-t-2 border-gray-300 mt-[100px] brightness-95 justify-evenly items-center'>
        <div id='anton' className='text-[#f6339b] text-[40px] max-770:hidden'>PRICETRACKER</div>
        <div className='flex w-[700px] justify-evenly max-647:scale-90'>
          <div className='flex flex-col text-start'>
            <div className='font-bold text-[17px]'>Products</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Portfolio</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Whitelist</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Advertise</div>
          </div>
          <div className='flex flex-col text-start'>
            <div className='font-bold text-[17px]'>Company</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>About</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Careers</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Affiliates</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Investors</div>
          </div>
          <div className='flex flex-col text-start'>
            <div className='font-bold text-[17px]'>Socials</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Community</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Telegram</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Instagram</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Facebook</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Reddit</div>
          </div>
          <div className='flex flex-col text-start'>
            <div className='font-bold text-[17px]'>Support</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Contact Support</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>FAQ</div>
            <div className='cursor-pointer mt-[7px] text-gray-700'>Request Form</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
