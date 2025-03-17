import React, { useRef,useEffect } from 'react';
import pdaovideo from '../assets/partnersdaovid.mp4';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Video = () => {
  const videoRef = useRef(null);

  const playPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    }
  };

  useEffect(()=> {
        AOS.init({duration:2000});
      },[])

  return (
    <>
      <div className="flex flex-col items-center bg-[#0d30f5] h-100%  pt-[300px]">
        <button
          onClick={playPause}
          id="shadowtext"
          className="text-[50px] cursor-pointer text-white px-[35px] rounded-[1vw] bg-[#ffffff33] hover:scale-110 duration-300 text-nowrap"
        data-aos="fade-right" data-aos-duration="1000" >
          Play / Pause
        </button>

        <div className="flex items-center max-w-[2000px]">
          <div className="flex flex-col items-center right-[10vw] mx-[80px] max-lg:hidden" data-aos="fade-down" data-aos-duration="1000">
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">M</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">U</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">S</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">I</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">C</div>
          </div>
          <video
            ref={videoRef}
            src={pdaovideo}
            id="video1"
            className="border-[#ffffff93] border-[10px] mt-[2vw] overflow-auto w-[1000px] "
            data-aos="fade-up" data-aos-duration="1000"/>
          <div className="flex flex-col items-center right-[10vw] mx-[80px] max-lg:hidden" data-aos="fade-down" data-aos-duration="1000">
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">M</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">U</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">S</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">I</div>
            <div id="shadowtext" className="text-[#ffffff] text-[50px]">C</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Video;