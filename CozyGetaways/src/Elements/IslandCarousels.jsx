import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
  {
    name: "El Nido, Philippines",
    price: "$400 Night",
    images: [
      "https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTE1MzgxOQ%3D%3D/original/9ce164ae-ec8c-4edd-ba3a-2f1ce524aa0d.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTE1MzgxOQ%3D%3D/original/a3d73c20-439a-4e85-9ad2-5a6eaae8a121.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Meos Mansar, Indonesia",
    price: "$350 Night",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1143303475276213029/original/958324e7-2a3d-470f-893e-784ad0d008ec.jpeg?im_w=1440&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1143303475276213029/original/8bba34d2-5d50-49cf-a46e-42187d519065.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1143303475276213029/original/12f4296b-08c1-46a5-be83-9597a49ab73a.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE0MzMwMzQ3NTI3NjIxMzAyOQ%3D%3D/original/e4861a35-17a0-434f-a728-4c10890f81e9.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Koh Samui, Thailand",
    price: "$1,299 Night",
    images: [
      "https://a0.muscache.com/im/pictures/e4d3b6f1-4a43-421e-b399-5e486f7b66cd.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/514b655a-ce9c-4133-904f-6ba8d12fe507.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/deaae73a-06f4-463c-b895-0adebb3945a0.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/facfc417-2c9e-4b4a-9c40-9c469a220bc2.jpg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Taytay, Philippines",
    price: "$289 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1186093861669569347/original/d5dae441-cd4a-4fa3-8d58-1485e1c1105a.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1186093861669569347/original/fa16b510-03f3-4d8c-8d94-ade209c5a3f5.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1186093861669569347/original/d74d92d7-a50c-4a84-986e-692eb70cb3a7.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1186093861669569347/original/d1f5fe5b-47b5-4620-9239-7fec0519d5d5.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Kollam, India",
    price: "$99 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-15306837/original/b88a7df6-a452-4860-be53-7dacc125d220.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-15306837/original/a236464a-1320-4d98-af6c-6d0702bd3184.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-15306837/original/7b6dbefc-874b-4bd2-bb9a-5811d6a04466.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/7b42658b-ea81-4dc0-af21-d3ee7b1bca06.jpg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Munroe Island, India",
    price: "$179 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-19712496/original/6e648ff8-9fbc-4a15-bb25-df2b525af4df.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/500c5c9a-de21-4eb9-a667-5042730c4812.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/bedbd6a3-7718-4854-af92-fd6a68e9c38c.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/66aa8a27-a8f3-4253-9713-aff4a6bf1b02.jpg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Pathiu, Thailand",
    price: "$143 Night",
    images: [
      "https://a0.muscache.com/im/pictures/b535206b-2e7d-4b8c-a9fd-59e05fe24e69.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/0720727c-2ace-4086-94be-1ea4080e6334.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/5df6fbf3-23e1-4e0e-bb1d-0464fdd7ff4f.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/1f1f5743-65b6-495f-a685-26dd5a14dfef.jpg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Mambajao, Philippines",
    price: "$345 Night",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NjQ0Njc3Nw%3D%3D/original/fb21bc68-24d6-409d-a57f-ac9105a612f7.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/83189040/f7cb2171_original.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/84447996/a6ddab3f_original.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/80893635/79e11544_original.jpg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Siargao, Philippines",
    price: "$234 Night",
    images: [
      "https://a0.muscache.com/im/pictures/1d835cc5-40be-4353-b19a-0141440fabdc.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/987f19cf-757b-40a8-bcc7-86dc7e2d2503.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/81819378/18865966_original.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/b5106fbc-6583-446b-bf5d-04ed89f820b3.jpg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Semporna, Malaysia",
    price: "$435 Night",
    images: [
      "https://a0.muscache.com/im/pictures/4defe212-4250-41dd-8db7-919a258bfaec.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/118df027-6834-49f0-b6db-299b6c3039aa.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/d72b72c1-02a3-4f70-aee6-6101e6b85513.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/d1f5c97b-ee77-4935-a1d7-625857718c90.jpg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Tambon, Thailand",
    price: "$562 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-835357450945203235/original/77e94190-fd3f-42be-96e2-41602bf4cce4.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-835357450945203235/original/e9372c6b-d697-433f-a80d-5233c8855a24.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-835357450945203235/original/c2988234-9ba8-46c7-b9a9-2166c2fd1cb1.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-835357450945203235/original/83966d28-3102-41b5-b9b0-a479ad7ef5d4.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Ko Tao, Thailand",
    price: "$420 Night",
    images: [
      "https://a0.muscache.com/im/pictures/c99e2a7e-5264-4888-9893-b390660aab3f.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/a70e5b84-14b6-456e-bc9e-9620e81051ec.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/fe38ce39-4713-4267-bef5-7d2658f95695.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/926bc0dd-7b54-4d33-a6aa-4e5c69588b63.jpg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Kuna Vashi, Maldives",
    price: "$679 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-933851552625654797/original/9cb51cfc-0f19-47ac-a449-16ee76a77abf.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-933851552625654797/original/6ee1a05e-5411-40a6-8760-f8607e59f4d3.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-933851552625654797/original/d68e1d60-fd74-47cf-9e25-2df316cb0c88.png?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-933851552625654797/original/dea42293-4976-47a0-b834-253efaa7a648.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Meeru Island, Maldives",
    price: "$799 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/d1f074a9-ed6c-4ffe-a3a6-b6c3578d205b.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/0c02812e-6673-4058-9e30-6e0b5495f997.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/fc841f2d-013a-4c22-84c0-2f69e63e22e4.png?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-738879331663769852/original/1aeb2bde-934b-4878-9757-de8d9f18f134.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "SaiKai, Japan",
    price: "$499 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-694339780411780866/original/f6ae9d25-e9f7-4a73-a9ca-ad9561e9c9b1.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-694339780411780866/original/7bc266c3-9ef7-4e6f-bfa0-f349302b7f34.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-694339780411780866/original/1e8a98c9-fb0f-437e-ad23-fc9416f8e199.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6Njk0MzM5NzgwNDExNzgwODY2/original/2f9a1e6e-ec99-4afb-87da-ed70841529d1.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Lembongan, Indonesia",
    price: "$234 Night",
    images: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-21916033/original/bcfcc345-e151-42bd-a506-32d3cff8d11f.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-21916033/original/25c887bd-1452-4a3f-b3ce-2985db832722.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-21916033/original/ea0ee51c-ae07-4938-8a9d-3376f525f2b9.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-21916033/original/043d387e-48fc-427f-b7b6-75e8aac73b8b.jpeg?im_w=720&im_format=avif"
    ],
  },
];

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