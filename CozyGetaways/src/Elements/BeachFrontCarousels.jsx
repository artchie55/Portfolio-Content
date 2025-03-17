import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
    {
      "name": "Santorini, Greece",
      "price": "$320 Night",
      "images": [
  "https://a0.muscache.com/im/pictures/hosting/Hosting-734482305005930720/original/b536f779-702a-4036-9ad5-e2266d038b0b.jpeg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/99ceb038-2ec5-4507-9858-1fa8d5707679.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/83cc133b-bae9-458d-b66f-c7e20d8b0210.jpg?im_w=720&im_format=avif",
  "https://a0.muscache.com/im/pictures/1f8e4946-5f07-4df3-94af-e7b6182bf577.jpg?im_w=720&im_format=avif",] 
    },
    {
      "name": "Kyoto, Japan",
      "price": "$250 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-780863384768708824/original/3bdd6419-1555-4504-889a-93aa64ae8d0c.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-780863384768708824/original/7b2e613d-4d3b-453e-a1d2-849bbec21fcc.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-780863384768708824/original/7ca85193-5c7d-49af-bbef-ba3265ebb0e6.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NzgwODYzMzg0NzY4NzA4ODI0/original/fdd34630-8f43-40c5-8afc-a2d2f8b7b5ef.jpeg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Reykjavik, Iceland",
      "price": "$410 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTc4NzU2ODc5OTExMTU3NTA4/original/6a3a98e5-e39c-445d-a28b-e3b66e0ed57a.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTc4NzU2ODc5OTExMTU3NTA4/original/2ee43fd9-638c-47c0-9d6a-f137437482f8.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTc4NzU2ODc5OTExMTU3NTA4/original/53b31373-cbaf-40f6-b8b1-f6ae44e90ff2.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-578756879911157508/original/8ce27b10-2e36-46a9-91ae-a1e48d342f92.jpeg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Cape Town, South Africa",
      "price": "$180 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/7a9fa2c0-189b-414c-8c3c-795d9c9c8f43.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/11a2aa74-c7f5-4310-9f49-a69008509d5e.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-562407047225012311/original/7c27a0da-8857-471f-89f0-6b4dc44cedbb.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-562407047225012311/original/c79c6c97-584a-4e29-9bbc-cd354d8dd637.jpeg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Queenstown, New Zealand",
      "price": "$275 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/0783cede-8469-4b79-a4cf-b48813a9cf7b.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/f04c490c-5579-4062-af3a-b1de5ed0b0d4.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/7dbe23f6-5195-4fbf-a162-1c2c21dbd551.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/69125ce8-2740-40ce-86a2-4b1fb728c2c6.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Maui, Hawaii",
      "price": "$330 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/9749e448-7d12-4d4b-88b2-2423cdf7661f.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-33509330/original/1c812922-5f35-4c76-91d3-60094831d231.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/24d9b18e-46b8-4e9e-8bc8-4b3e7aa324ed.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-33509330/original/2056759d-abff-4cd0-afc9-2f69c40a277a.jpeg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Venice, Italy",
      "price": "$290 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/ab5fb4c6-d07f-46df-8382-dc285718c19c.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/b66dffb7-c440-42d3-bf00-9cdb4f6ab07e.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/c3f7a799-ddbf-4ef7-a37a-518e0d938829.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/41908a53-b087-475c-b7ed-96abb1fae1d1.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Bali, Indonesia",
      "price": "$220 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-15859258/original/9de84a5b-0365-4b34-8e15-cc177b8293b5.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-15859258/original/2a3cda28-61d8-4538-bfe1-93478f64138a.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-15859258/original/640fd9d9-3205-4d42-98b5-ea6ea7c00211.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-15859258/original/4de76fcd-41ba-437f-8608-7fe487bf6a51.jpeg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Paris, France",
      "price": "$450 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/a4017a5d-a8b8-4aac-a0f1-dc9470e1d349.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/ba00e7cc-8f6a-4e24-9e53-2a367395a485.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/ca7fa299-0463-4254-ac5c-49460dd74b80.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/5c00345c-7622-4ffb-86b8-bb39efb458d7.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Barcelona, Spain",
      "price": "$280 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/hosting/Hosting-865851722130742362/original/a71c2312-0d23-4f42-bb68-a207cb65f051.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/fa914af8-8869-4385-b978-ed61b3324ab6.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/hosting/Hosting-865851722130742362/original/747e9903-520e-4da0-82f4-32581983698d.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/a1dc6502-ceab-44bd-b1a7-621d65f74ab6.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Maldives",
      "price": "$500 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/91efe7eb-cc3e-4137-a740-9cb5c6e5872e.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/01b6ca1c-9214-4bb5-9a8f-2b021d93370e.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/8570cd83-a37c-41f7-b326-37610fd78582.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/0b002bf8-6584-439b-9450-633d71caef12.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Aspen, Colorado",
      "price": "$350 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/ccf2d5c8-5147-404a-aa60-b936c16cf451.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/7bae9bf8-e0bb-4345-add1-69a223b8f2f5.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/3c8a556b-7af9-47e3-a4aa-4317e5072052.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/40b85d35-9e4e-4d05-b66a-a76a24a5393e.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Dubai, UAE",
      "price": "$400 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/1530f94e-8078-46d2-8740-d0d69fd91875.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/6d652555-2494-4be3-849e-b926563afd68.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/7a8ce3e5-c104-46cb-ad43-40eb1fd5ae2c.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/23d43e26-f571-452b-b84c-6c1fa99fc6f7.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Zurich, Switzerland",
      "price": "$380 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/29d4f8ef-a3ad-4635-875c-d4f30b9dc2dd.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/26025f8f-13ec-43ba-b7dc-d956057a26ac.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/2b6f5cd9-5b52-43a0-a044-dfd0385e3317.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/761c313b-1805-481d-b3da-dc77c52ff2c4.jpg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Sydney, Australia",
      "price": "$290 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/miso/Hosting-829588847614325452/original/be0a8515-bde4-461d-9b8a-0ac2e9a0c390.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-829588847614325452/original/178a4cbb-d87c-4dfd-931a-37eb215807fb.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-829588847614325452/original/4edab026-323d-4cd8-81fc-a85f58206fdb.jpeg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/miso/Hosting-829588847614325452/original/dd2c5641-26c8-4f32-86a3-f0df499aa726.jpeg?im_w=720&im_format=avif",
      ]
    },
    {
      "name": "Buenos Aires, Argentina",
      "price": "$200 Night",
      "images": [
        "https://a0.muscache.com/im/pictures/46132386-ad38-4573-b0aa-420294cd9ec2.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/810b9f2d-b281-489f-b8d7-82370cef4fe8.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/c0d8d295-d9de-4aa3-b5b8-bf9751b4e791.jpg?im_w=720&im_format=avif",
        "https://a0.muscache.com/im/pictures/05ea5167-4d0b-4e7f-8740-3de936e5a1e5.jpg?im_w=720&im_format=avif",
      ]
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