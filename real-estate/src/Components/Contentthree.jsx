import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Contentthree = () => {
  const slides = [
    {
      image: "https://img1.wsimg.com/isteam/stock/3395/:/cr=t:11.02%25,l:0%25,w:100%25,h:77.95%25/rs=w:600,h:300,cg:true",
      heading: "Top Residential Sales Last 5 Years",
      subtext: "We helped nearly 90 clients in 2021, and closed 28.5 million in sales! Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.",
    },
    {
      image: "https://img1.wsimg.com/isteam/stock/107927/:/rs=w:600,h:300,cg:true,m/cr=w:600,h:300",
      heading: "Don't Just List it...",
      subtext: "Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.",
    },
    {
      image: "https://img1.wsimg.com/isteam/stock/771/:/cr=t:5.36%25,l:1.76%25,w:96.47%25,h:89.29%25/rs=w:600,h:300,cg:true,m",
      heading: "Guide to Buyers",
      subtext: "Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!",
    }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 1500);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  return (
<div className="pt-[50px] pb-[220px] max-500:pb-[150px] bg-[#85c33a]">

<div id="slabtext" className="flex justify-center text-[80px] max-500:text-[50px] font-bold mb-[60px] text-center">GET IT SOLD</div>
    
    <div
      className="relative max-w-[1500px] h-[300px] mx-auto overflow-hidden shadow-lg"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex transition-transform duration-[1200ms] ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex flex-row flex-shrink-0">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              className="w-1/2 h-[300px] object-cover"
            />
            <div className="w-1/2 flex items-center max-500:items-start justify-center p-6 bg-white  text-black">
              <div>
                <h2 className="text-2xl font-bold mb-2">{slide.heading}</h2>
                <p className="text-base">{slide.subtext}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black opacity-70 hover:opacity-80 py-[230px] px-[15px] max-500:px-[5px] rounded-full text-white hover:bg-opacity-80 transition cursor-pointer"
      >
        <FaChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black opacity-70 hover:opacity-80 py-[230px] px-[15px] max-500:px-[5px] rounded-full text-white hover:bg-opacity-80 transition cursor-pointer"
      >
        <FaChevronRight />
      </button>
    </div>

    </div>
  );
};

export default Contentthree;
