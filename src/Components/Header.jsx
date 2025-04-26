import React, { useState } from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Desktop Header 1000px and above */}
      <div className="bg-[#ffffff] flex justify-evenly items-center max-1000:hidden">
        <div className="">
          <img
            className="w-[300px] cursor-pointer"
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
            alt="Logo"
          />
        </div>
        <div className="flex items-center font-bold ml-[100px]">
          <a href='#home' className="mx-[20px] cursor-pointer hover:text-[#86c33a] transition duration-150">HOME</a>
          <a href='#listings' className="mx-[20px] cursor-pointer hover:text-[#86c33a] transition duration-150">LISTINGS</a>
          <a href='#gallery' className="mx-[20px] cursor-pointer hover:text-[#86c33a] transition duration-150">LET'S MOVE</a>
          <a href='#footer' className="mx-[20px] cursor-pointer hover:text-[#86c33a] transition duration-150">ABOUT US</a>
          <a href='#home' className="px-[30px] py-[15px] bg-[#86c33a] text-white rounded-[200px] cursor-pointer hover:scale-90 hover:brightness-[90%] transition duration-200">
            GET STARTED
          </a>
        </div>
      </div>

      {/* Mobile Header Below 1000px */}
      <div className='fixed w-full z-10'>
      <div className="bg-[#ffffff] py-[15px] flex justify-between items-center px-[25px] 1000:hidden">
        <div className="">
          <img
            className="w-[250px]"
            src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
            alt="Logo"
          />
        </div>
        <div>
          <GiHamburgerMenu size={30} onClick={toggleMenu} className="cursor-pointer" />
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      <div className={`bg-[#ffffff] absolute w-full h-full top-0 left-0 right-0 z-[10] ${isOpen ? 'block' : 'hidden'} 1000:hidden fixed`}>
        
        <div className="bg-[#ffffff] py-[15px] flex justify-between items-center px-[25px] 1000:hidden">
          <div className="">
            <img
              className="w-[250px]"
              src="https://img1.wsimg.com/isteam/ip/067a4d42-19e8-46d9-9bed-578bf62dd44e/blob-6c0c2e0.png/:/rs=w:536,h:167,cg:true,m/cr=w:536,h:167/qt=q:95"
              alt="Logo"
            />
          </div>
          <div>
            <GiHamburgerMenu size={30} onClick={toggleMenu} className="cursor-pointer" />
          </div>
        </div>

        <div className="flex flex-col items-center py-4 mt-[200px]">
          <a href='#home' onClick={toggleMenu} className="mx-[20px] cursor-pointer hover:text-[#86c33a] text-[25px] transition duration-150 py-2">HOME</a>
          <a href='#listings' onClick={toggleMenu} className="mx-[20px] cursor-pointer hover:text-[#86c33a] text-[25px] transition duration-150 py-2">LISTINGS</a>
          <a href='#gallery' onClick={toggleMenu} className="mx-[20px] cursor-pointer hover:text-[#86c33a] text-[25px] transition duration-150 py-2">LET'S MOVE</a>
          <a href='#footer' onClick={toggleMenu} className="mx-[20px] cursor-pointer hover:text-[#86c33a] text-[25px] transition duration-150 py-2">ABOUT US</a>
          <a href='#home' onClick={toggleMenu} className="px-[30px] py-[15px] bg-[#86c33a] text-[25px] text-white rounded-[200px] cursor-pointer hover:scale-90 hover:brightness-[90%] transition duration-200">
            GET STARTED
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
