import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
    {
      "name": "Phuket, Thailand",
      "price": "$190 Night",
      "images": ["https://a0.muscache.com/im/pictures/ab992527-0b42-44e3-92e3-580f7c216d4b.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-896782792245806166/original/3d3fd90e-837a-4536-b8e4-3e60183951ab.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-896782792245806166/original/cfa95ce5-f85f-46a8-b52a-0b6c00a393e5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/de6f6414-5319-4549-becc-980ec6ddff51.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Santorini, Greece",
      "price": "$310 Night",
      "images": ["https://a0.muscache.com/im/pictures/68399dc0-5d0e-4f26-889e-eca841ab0990.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/109493026/df0e5235_original.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/108716681/6e24b441_original.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/107241097/3e2e0be3_original.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Marrakech, Morocco",
      "price": "$220 Night",
      "images": ["https://a0.muscache.com/im/pictures/79973e9a-172f-4a6a-b353-7fde20ff473f.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/bc8857e7-5292-4a58-a8b8-9e7dfe4f22c9.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/a9094a24-1034-4ad8-94c3-f4fdef91b079.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/bea86b09-c734-4b66-b5be-7c77e33b4da5.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Zermatt, Switzerland",
      "price": "$450 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1009742158856964516/original/28bf93bb-e91d-41c9-aac9-49b58b70d31d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1009742158856964516/original/20b4d48d-b2cb-4bff-a523-2bbaac0916f7.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1009742158856964516/original/fa9f500a-48ac-4af9-b19d-de29d6809872.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1009742158856964516/original/1384c754-842e-42b5-9013-05bb01aff655.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Amsterdam, Netherlands",
      "price": "$275 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-831051131083321359/original/7eb6de58-15a4-472a-89f1-36d3994f7a07.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-831051131083321359/original/b109af0f-da9e-4172-8b4a-39dc4faf1335.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-831051131083321359/original/0461ac90-ea7a-4a6d-8e4e-4870d72b4f96.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-831051131083321359/original/1a5a9869-12c5-4b2e-8892-a8337fa8312b.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Rio de Janeiro, Brazil",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-953252330029708865/original/c318a063-786f-48e7-85d9-32277efb2eeb.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-953252330029708865/original/4775e9c8-54d6-48a8-b0d8-617c4f4f7c47.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-953252330029708865/original/70b8eac8-5765-478a-9989-94bbc9e89e26.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-953252330029708865/original/79008f0a-75f6-4447-b1dc-ea10a0b006c9.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Prague, Czech Republic",
      "price": "$210 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1015121616916443435/original/3a202d4a-04bf-4b9b-b545-006983d8435d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1015121616916443435/original/990a47be-aff0-4e69-84ea-913844513a03.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1015121616916443435/original/c6dfcb5b-b275-4990-9a58-b04162de778f.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1015121616916443435/original/65dffd90-16ce-4cda-aff8-c5f5fbd04aa3.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Istanbul, Turkey",
      "price": "$240 Night",
      "images": ["https://a0.muscache.com/im/pictures/ea2159c5-641e-4d6e-be83-1a6ca86115b5.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/3cd2a087-49a1-4fa4-abf2-04b9284a75d5.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/717b49a5-9acd-49d6-9ec1-ec4b2baa7427.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/2fef1f56-0709-4a29-8c0e-10052f17aa66.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Seoul, South Korea",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1345632577194923911/original/14c93074-edfe-498f-9334-f58a2068d8e3.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1345632577194923911/original/1a2c8f84-075a-4ba3-8bf2-ca0096769126.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1345632577194923911/original/4fefd4e5-2f1d-4dae-90fd-6abab9209c9d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1345632577194923911/original/634824c9-6a28-4e76-852d-e62e1f59c301.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Copenhagen, Denmark",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1333859460334355717/original/ea6d6a7b-9c06-4121-a941-3d02d65ff58b.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1333859460334355717/original/e15b1e80-2f45-4849-91ad-06e7ec0bfe11.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1333859460334355717/original/17ac5dcf-c489-4b0a-b183-924677f51853.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1333859460334355717/original/54986ba4-93c0-46bb-bf30-b8a6d9da8c61.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Banff, Canada",
      "price": "$300 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1NTM2ODMxMDMxNjUwMTIzMg%3D%3D/original/537284d8-9bfa-4e63-b0e4-57f9fc38a675.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1NTM2ODMxMDMxNjUwMTIzMg%3D%3D/original/1d0ab398-87b2-410e-98e8-077081619008.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1NTM2ODMxMDMxNjUwMTIzMg%3D%3D/original/55d91352-4c39-40bf-b0e8-f4c3c8310cef.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI1NTM2ODMxMDMxNjUwMTIzMg%3D%3D/original/cef75a83-9779-45c0-a341-4a9d03865b98.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Lisbon, Portugal",
      "price": "$250 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1138189078478339747/original/5e96306b-5a5f-42eb-bb48-bfb0c2d49309.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1138189078478339747/original/78d2742d-0e52-4a2d-b5dc-d0cf7d5409ae.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1138189078478339747/original/27c7ca1d-eaa8-42ca-bc21-13b494156fad.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1138189078478339747/original/27c7ca1d-eaa8-42ca-bc21-13b494156fad.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Edinburgh, Scotland",
      "price": "$290 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1344135345504567178/original/63365efc-5681-467e-aa05-c2d92d4c05ca.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1344135345504567178/original/97ff5bb4-f615-4528-8169-bdb28e147b63.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1344135345504567178/original/68dae2db-91a5-4c5e-a47f-72008c867192.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1344135345504567178/original/8c0dde73-c296-4996-a4b9-293c1e780cff.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Havana, Cuba",
      "price": "$180 Night",
      "images": ["https://a0.muscache.com/im/pictures/cf0b1fd0-4432-43a2-af5a-ea23fc7baef7.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/c0cff93a-31b8-4690-ac69-c8c16f3db65d.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/04b00843-ce5a-4d60-91a5-7d69a8e81df9.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/3c112abe-ce56-4380-a5d1-9b54bf66215d.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Dubrovnik, Croatia",
      "price": "$320 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1079212420372016883/original/212329bc-c644-4240-a007-d212cc47ebac.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1079212420372016883/original/6ccfca50-0565-4db1-a8e0-ef6e74bdf314.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1079212420372016883/original/3298d5bc-a340-435c-82c5-a64e9a40f192.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1079212420372016883/original/eb7a9b64-6866-4e4b-9c2f-2505abc1e3a5.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Tahiti, French Polynesia",
      "price": "$500 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1183614326097208717/original/9800eba2-c6ea-460e-bd04-108b6392ea1a.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1183614326097208717/original/5b9cf251-8d5e-4c63-bc8f-ec2a175a8904.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1183614326097208717/original/e040d893-a671-4bd9-93ae-32543741bdaf.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1183614326097208717/original/55d5ccd4-83d0-488c-9167-0b0dc2353e87.jpeg?im_w=720&im_format=avif"]
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