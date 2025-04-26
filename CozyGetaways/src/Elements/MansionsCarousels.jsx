import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
    {
      "name": "Santorini, Greece",
      "price": "$320 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1803579/original/0543ce77-0396-4fde-85a5-0d395bee2764.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1803579/original/e4f3554c-f3ef-4059-9333-64d31c5662bf.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1803579/original/16f45655-159c-41c9-b30c-4047c24c9de4.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/31570177/c076184d_original.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Hanoi, Vietnam",
      "price": "$190 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/616c1c73-e91b-496f-8ffc-66cf6e32e045.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/0396128f-91ea-482e-81f4-d44ffe460b56.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/a1b61398-16ee-483f-8a3e-b170c57a8724.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-53983980/original/e083e498-3d61-4f10-8ea2-e03f854aefa7.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Prague, Czech Republic",
      "price": "$250 Night",
      "images": ["https://a0.muscache.com/im/pictures/0b85cd58-5625-48d5-b7d5-f3a27912f75f.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-609885961334466858/original/059ba879-cba4-4dc8-bd26-fedbdbdcf209.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-609885961334466858/original/e7378648-ced1-4540-97ab-4e21f6ab87f5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-609885961334466858/original/cf3acccc-7941-459e-b262-ed01ff05fbbb.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Marrakech, Morocco",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-824838689901420325/original/76eea009-e39e-4e33-a795-2328bfc478cc.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/9cc03c88-5170-4205-b9e4-3c3073ed1f2d.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-824838689901420325/original/61b83ad4-c77a-4f15-a29c-97aca74bf6f4.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/072f995b-6cc3-4220-b6f9-e027ba1a8104.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Dubrovnik, Croatia",
      "price": "$270 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-39343377/original/dbd70bec-e24b-4d0b-aa71-fae36fbccf82.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-39343377/original/7a88aea9-274a-41f7-89bf-07ea8789a9d4.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-39343377/original/03ff61dd-52df-485c-a692-9db5ffc60448.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-39343377/original/45f931a5-61b5-4377-884c-8d56f598a4df.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Sydney, Australia",
      "price": "$350 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1325680189055358578/original/d5f12b6a-bfc7-49cc-ac40-a2c99b629c90.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1325680189055358578/original/a73aa83b-fc13-4995-93ad-03503fd1862a.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1325680189055358578/original/ddd6fe6a-448d-4f2d-841f-da5b0b9360bf.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1325680189055358578/original/ad5ced7b-4a8f-4393-b6ac-1819e3b1eaed.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Lima, Peru",
      "price": "$200 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-848230975220633541/original/23f910e6-4691-4604-8fd9-acb74d147042.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-848230975220633541/original/dfec4147-8e05-482c-a67b-8d3570fd48ae.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-848230975220633541/original/d5ef6f09-1634-42d5-8f9a-e9aa0ac64134.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-848230975220633541/original/ee90ce2b-9edb-42e0-a15f-99aff018c752.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Copenhagen, Denmark",
      "price": "$290 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-801126536406711553/original/d9439b68-353b-4a63-b13e-0f84c0d4b6cb.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-801126536406711553/original/8e85c555-1da8-4cf2-88d3-6061fc3ff5d5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-801126536406711553/original/7d0ad971-5410-49dc-acec-afb000147ae4.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-801126536406711553/original/7f1c0551-d0e0-4e62-a457-fedfea7ffcd7.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Edinburgh, Scotland",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-47428671/original/1e66cce2-99eb-432c-960d-1bc7ead460c5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-47428671/original/803d818f-02c8-4155-acde-645f3d737e2f.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-47428671/original/169176bb-2f20-4433-b236-302ced07a4b1.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/99593691-4c54-4541-8f11-3544ae8528af.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Seoul, South Korea",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-964765717553727403/original/a0b885c7-33f1-4783-97a0-b8395fb39045.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-918518770826256786/original/369607a8-b678-4ae5-8efc-6a8c0a9a6c09.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-964765717553727403/original/7d46c05e-551e-4059-803b-214212a71d1c.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-918518770826256786/original/978233c8-3c64-43dc-a606-37852ff45200.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Québec City, Canada",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/2783d071-2a00-49d5-8ae1-021904b0ab5d.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/9f297928-0ca7-43c5-b63a-a2e26d09e9d3.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/e7d0ef75-0ead-4309-afc4-8897fabd7e58.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/612f3adf-745e-45ab-a743-bb8e28f81150.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Antigua, Guatemala",
      "price": "$210 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1323490582006626565/original/36eed56c-31e3-42c5-9011-bde3a55715d2.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1323490582006626565/original/cf5e6e32-3fa6-47f7-a4ab-7aa552acfa86.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1323490582006626565/original/29e478d1-dc35-4453-8276-f8a5f705156d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1323490582006626565/original/21594c2f-f5cf-450f-a8b2-4c38e27a026a.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Montevideo, Uruguay",
      "price": "$220 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-605694888631211199/original/091e5bdc-c7d7-491e-aa6e-ddd2676d6f6d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-605694888631211199/original/6abd512b-5bfd-40c9-8e42-581ac1adbd50.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/3eea1168-0810-466a-8eae-c7e64087e6cf.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-605694888631211199/original/698e4944-b37d-4b3e-b575-15930cd39ea5.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Istanbul, Turkey",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/80a18487-7742-4e7a-9a75-40345571f0a6.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/ae8ae338-858c-4fde-a943-4955aea65440.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/b075800d-bd6b-4f44-855a-0e878e35e372.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/44125ced-8cec-4c5a-bbcf-97b501d061d1.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Siem Reap, Cambodia",
      "price": "$180 Night",
      "images": ["https://a0.muscache.com/im/pictures/5471003c-8ace-4489-b68e-45c65fe11d47.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/74c7a78f-a5eb-4358-835f-8fda20612f6c.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/87d7137b-b8f7-4799-9974-4362a50b28ab.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/8b39bbfb-ec85-42dc-b692-da1f0cfa70fc.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Zanzibar, Tanzania",
      "price": "$300 Night",
      "images": ["https://a0.muscache.com/im/pictures/9fd1caf8-fccc-42c6-8cc2-a5c46ee1d29a.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/2002b9b6-e4d8-48b2-af01-a058e400ef02.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/113bd9ea-b92c-4ab1-81cd-13825260e442.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/610236d1-a9e3-40cf-86a6-65616e8e6b80.jpg?im_w=720&im_format=avif"]
    }
  ]
  
  
  ;

const Carousel = ({ images, name, price }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hover, setHover] = useState(false);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div
      className="relative w-full max-w-sm mx-auto mt-8 bg-[#e293001e] shadow-lg rounded-xl overflow-hidden"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      
      {/* Image Display */}
      <div className="relative w-full h-[300px] overflow-hidden"> 
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Left Arrow */}
      {hover && (
        <button
          onClick={prevSlide}
          className="absolute cursor-pointer left-4 top-[150px] transform -translate-y-1/2 bg-[#964b00c2] bg-opacity-50 text-white p-2 rounded-full shadow-md hover:bg-opacity-80 transition"
        >
          <FaChevronLeft size={20} />
        </button>
      )}

      {/* Right Arrow */}
      {hover && (
        <button
          onClick={nextSlide}
          className="absolute cursor-pointer right-4 top-[150px] transform -translate-y-1/2 bg-[#964b00c2] bg-opacity-50 text-white p-2 rounded-full shadow-md hover:bg-opacity-80 transition"
        >
          <FaChevronRight size={20} />
        </button>
      )}

      {/* Navigation Circles */}
      <div className="absolute bottom-[90px] left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentIndex ? "bg-blue-500 scale-125" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      {/* Product Info */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{price}</p>
      </div>
    </div>
  );
};

const CarouselContainer = () => {
  const carouselRefs = useRef([]);

  useEffect(() => {
    // Intersection Observer for staggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    // Observe each carousel item
    carouselRefs.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    // Cleanup observer on unmount
    return () => {
      carouselRefs.current.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-8">

      {productData.map((product, index) => (
        <div
          key={index}
          ref={(el) => (carouselRefs.current[index] = el)}
          className="grid-item opacity-0 transform translate-y-20 transition-all duration-500 ease-out"
        >
          <Carousel images={product.images} name={product.name} price={product.price} />
        </div>
      ))}
    </div>
  );
};

export default CarouselContainer;