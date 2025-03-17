import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { IoPerson } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import ContainerComponent from "../Elements/ContainerCarousels";
import Footer from "../Elements/Footer"

import Islands from '../assets/Islands.jpg';
import Pools from '../assets/Pools.jpg';
import BeachFront from '../assets/BeachFront.jpg';
import CountrySide from '../assets/CountrySide.jpg';
import Mansions from '../assets/Mansions.jpg';
import TopCities from '../assets/TopCities.jpg';
import Tropical from '../assets/Tropical.jpg';
import Castles from '../assets/Castles.jpg';
import Containers from '../assets/Containers.jpg';
import TransparentLogo from '../assets/TransparentLogo.png';

const PoolsComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  const filters = [
    { src: Islands, text: 'Islands', href: '/Islands' },
    { src: Pools, text: 'Pools', href: '/Pools' },
    { src: BeachFront, text: 'BeachFront', href: '/BeachFront' },
    { src: CountrySide, text: 'CountrySide', href: '/CountrySide' },
    { src: TopCities, text: 'TopCities', href: '/TopCities' },
    { src: Mansions, text: 'Mansions', href: '/Mansions' },
    { src: Tropical, text: 'Tropical', href: '/Tropical' },
    { src: Castles, text: 'Castles', href: '/Castles' },
    { src: Containers, text: 'Containers', href: '/Containers' },
  ];

  // Number of slides to show at a time
  const slidesToShow = 3;

  // Handle "Next" button click
  const handleNext = () => {
    if (currentSlide < filters.length - slidesToShow) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  // Handle "Previous" button click
  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Intersection Observer for Cozy Getaways text and image
  const cozyTextRef = useRef(null);
  const buttonRef = useRef(null); // Ref for the button at line 98
  const filtersRef = useRef(null); // Ref for the filters div at line 132
  const staysRef = useRef(null); // Ref for the "Stays" div

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (cozyTextRef.current) observer.observe(cozyTextRef.current);
    if (buttonRef.current) observer.observe(buttonRef.current);
    if (filtersRef.current) observer.observe(filtersRef.current);
    if (staysRef.current) observer.observe(staysRef.current);

    return () => {
      if (cozyTextRef.current) observer.unobserve(cozyTextRef.current);
      if (buttonRef.current) observer.unobserve(buttonRef.current);
      if (filtersRef.current) observer.unobserve(filtersRef.current);
      if (staysRef.current) observer.unobserve(staysRef.current);
    };
  }, []);

  return (
    <>
      {/* Header Part / Nav Part Code */}
      <nav className='flex flex-col justify-center items-center'>
        <div className='flex justify-center items-center mb-[2rem] pb-[0.6rem] border-b-[0.1rem] border-[#0000004d] w-full'>
          <div
            ref={cozyTextRef} // Add ref for Intersection Observer
            className='flex items-center relative slide-in-left'
          >
            <img className='w-[7rem]' src={TransparentLogo} alt='Logo' />
            <div id='CozyText' className='text-[2.5rem] max-md:text-[2rem] max-sm:text-[1.5rem]'>
              Cozy Getaways
            </div>
            <div className='absolute bottom-0 border-b-4'></div>
          </div>
          <div className='relative z-10 ml-[20vw]'>
            {/* Login/SignUp Element */}
            <button
              ref={buttonRef} // Add ref for Intersection Observer
              onClick={() => setIsOpen(!isOpen)}
              className='px-[1.5rem] max-sm:px-[1rem] py-[0.5rem] cursor-pointer text-white rounded-[2rem] shadow-lg bg-[#b86e0070] hover:bg-[#b86e0088] border-[0.2rem] border-[#16161662] transition flex items-center slide-in-right'
            >
              <GiHamburgerMenu className='w-[2rem] max-md:w-[1.5rem] h-[2rem] text-[#000000]' />
              <IoPerson className='w-[2rem] max-md:w-[1.5rem] h-[2rem] text-[#000000]' />
            </button>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: '-0.5rem' }}
                animate={{ opacity: 1, y: '0rem' }}
                exit={{ opacity: 0, y: '-0.5rem' }}
                transition={{ duration: 0.3 }}
                className='absolute mt-[1rem] max-sm:ml-[-5rem] w-[10rem] z-10 bg-white shadow-[0rem_0.5rem_1rem_rgba(0,0,0,0.1)] rounded-[1rem] overflow-hidden'
              >
                {["Sign up", "Login", "Host an Experience", "Help Center"].map((item, index) => (
                  <motion.button
                    key={index}
                    initial={{ opacity: 0, x: '-0.5rem' }}
                    animate={{ opacity: 1, x: '0rem' }}
                    transition={{ duration: 0.2, delay: index * 0.1 }}
                    className='block w-full px-[1rem] py-[0.5rem] text-left text-[1rem] text-gray-700 hover:bg-gray-200 cursor-pointer transition'
                  >
                    {item}
                  </motion.button>
                ))}
              </motion.div>
            )}
          </div>
        </div>

        {/* Rentals List Filters Element */}
        <div
          ref={filtersRef} // Add ref for Intersection Observer
          className='flex bg-[#b86e0070] py-[0.5rem] rounded-[0.5rem] slide-in-bottom'
        >
          {/* Desktop View (Original Design) */}
          <div className='hidden md:flex'>
            {filters.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`flex flex-col items-center transition-opacity duration-300 group ${item.text === 'Containers' ? 'opacity-100' : 'opacity-55 active:opacity-100'}`}
              >
                <img className='h-[3.5rem] mx-[2rem]' src={item.src} alt={item.text} />
                <div className='text-[1rem] relative'>
                  {item.text}
                  <span className={`absolute bottom-0 left-0 h-[0.1rem] bg-black transition-all duration-300 ease-in-out ${item.text === 'Containers' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                </div>
              </a>
            ))}
          </div>

          {/* Mobile View (Custom Carousel) */}
          <div className='md:hidden relative overflow-hidden w-[90.139vw]'>
            {/* Carousel Slides */}
            <div
              className='flex transition-transform duration-300'
              style={{
                transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
              }}
            >
              {filters.map((item, index) => (
                <div
                  key={index}
                  className='flex-shrink-0 w-1/3 p-2' // Show 3 slides at a time
                >
                  <a
                    href={item.href}
                    className={`flex flex-col items-center transition-opacity duration-300 group ${item.text === 'Islands' ? 'opacity-100' : 'opacity-55 active:opacity-100'}`}
                  >
                    <img className='h-[3.5rem] mx-[2rem]' src={item.src} alt={item.text} />
                    <div className='text-[1rem] relative'>
                      {item.text}
                      <span className={`absolute bottom-0 left-0 h-[0.1rem] bg-black transition-all duration-300 ease-in-out ${item.text === 'Islands' ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                    </div>
                  </a>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className='absolute left-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#69666660] bg-opacity-50 text-white p-3 rounded-full  hover:bg-opacity-70 transition'
              disabled={currentSlide === 0}
            >
              &lt;
            </button>
            <button
              onClick={handleNext}
              className='absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#69666660] bg-opacity-50 text-white p-3 rounded-full  hover:bg-opacity-70 transition'
              disabled={currentSlide >= filters.length - slidesToShow}
            >
              &gt;
            </button>
          </div>
        </div>
      </nav>

      {/* "Stays" Div with Animation */}
      <div
        ref={staysRef} // Add ref for Intersection Observer
        className="flex justify-center text-[1.3rem] font-bold mt-[35px] slide-in-bottom"
      >
        <div className="absolute mt-[50px] border-b-[2px] border-[#b86e004d] w-full max-w-[800px] px-4 text-center">
          Stays
        </div>
      </div>

      {/* Imported the Island.jsx from Element folder. */}
      <ContainerComponent />
      <Footer />
    </>
  );
};

export default PoolsComponent;