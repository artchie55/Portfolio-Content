import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
    {
      "name": "Kyoto, Japan",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMjEyODgyNzk1Mjg4MzQ0NQ%3D%3D/original/bac72ea5-98ee-4e80-bae3-c63b61b2d9b4.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMjEyODgyNzk1Mjg4MzQ0NQ%3D%3D/original/355f4f14-72ea-4178-9d8c-e4bd6dc1dfb0.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAzMjEyODgyNzk1Mjg4MzQ0NQ%3D%3D/original/27540d7b-02cb-4a12-b8c2-9d66b82d87fb.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1028538769329762694/original/f5361a3a-c57f-408d-808a-efae8924fb88.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Buenos Aires, Argentina",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1091742510871173601/original/a53883b2-18b1-483a-ba9e-bc9eb6968679.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1091742510871173601/original/80a03110-efe1-4920-8414-e4484387f12d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1091742510871173601/original/48b45710-17f5-45dd-aa5d-3fae5a71f0b1.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1091742510871173601/original/fe73a801-0b0f-4075-8e64-1698759bd2b3.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Reykjavik, Iceland",
      "price": "$300 Night",
      "images": ["https://a0.muscache.com/im/pictures/217dd159-27af-4d68-9398-832605ffde5b.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/7df17cae-cdec-42af-9a09-8f514f6c4910.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/e36fc839-b383-43ee-a67e-c6a91b3f47b9.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/9c156ab2-6d91-4d13-8585-7f18a8537664.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Lisbon, Portugal",
      "price": "$250 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1156399753470863604/original/6dc71331-eed0-4b2c-a7af-88177d1ce4f5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTE1NjM5OTc1MzQ3MDg2MzYwNA%3D%3D/original/41449e65-391a-4194-902f-22daffe4a8ec.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1156399753470863604/original/6762b734-0886-4b05-bf40-b2cded93d8c0.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1156399753470863604/original/986ef948-731a-498e-bdae-fdb98669ee9a.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Cape Town, South Africa",
      "price": "$270 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-997808963193393698/original/e2e53b5d-b04d-49a2-8486-58fdc4a391d9.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTk3ODA4OTYzMTkzMzkzNjk4/original/db1b674a-3b07-4212-87d0-655fe2d83397.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTk3ODA4OTYzMTkzMzkzNjk4/original/545eaa69-9088-489a-896f-6aab4f695cc9.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTk3ODA4OTYzMTkzMzkzNjk4/original/51d4f9cc-9e36-40a9-8cac-5f6874b2540d.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Auckland, New Zealand",
      "price": "$290 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxMjkxMDgyMzAyNDQ5ODIyNw%3D%3D/original/3b3f21ac-0f29-43ec-a1c9-d2bf05631072.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxMjkxMDgyMzAyNDQ5ODIyNw%3D%3D/original/99343a2a-f78a-4559-a099-cdeb18727195.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxMjkxMDgyMzAyNDQ5ODIyNw%3D%3D/original/3da939d6-387e-4859-9ef3-b98c1e08df90.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTAxMjkxMDgyMzAyNDQ5ODIyNw%3D%3D/original/ab70fa1d-27e4-40ac-b705-1f944da5d4b3.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Krakow, Poland",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/131004fc-f538-4640-be95-e8b174539f75.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/217dd159-27af-4d68-9398-832605ffde5b.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/dd2ebe17-dbaa-4700-85b3-fe0446e58c14.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/1c432cb9-4c47-4ad5-943f-c3f7265b807c.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Mexico City, Mexico",
      "price": "$220 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIzMzcwODcwMTE5MTA4NjAzMw%3D%3D/original/d4695d78-a194-45e6-b8ef-35e3166e49c0.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1233708701191086033/original/095dec36-6d70-4881-8474-86c4a035178d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1233708701191086033/original/48b1b74b-5e11-47ab-ac64-c7cf02acdfee.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1233708701191086033/original/3aa4b016-823b-4f91-9b62-2d14588bafcb.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Cartagena, Colombia",
      "price": "$210 Night",
      "images": ["https://a0.muscache.com/im/pictures/425755cd-1724-4c1d-a3d7-e9c7f520ee91.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/e2c8e73e-d1c1-40f4-bf46-cf703cc17293.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/81360240-cf31-46c2-b4f1-3d9f62faa80b.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/a3174c55-270a-4f5a-8145-e388640bdb72.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Athens, Greece",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/4759a5e4-a96d-4b3e-8274-01f80eb9529f.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/367fcd37-05bf-438a-b8df-a92556643a7c.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/3f318509-bd89-4653-b0c7-65f2ed6e20e6.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/104e576c-27b1-47bf-bd50-b21cf06af34e.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Hanoi, Vietnam",
      "price": "$200 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTI0MjMwNDU4MzkyOTMxNDI4/original/2e9e2898-4de6-4ff0-9772-7bb99a22e163.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTI0MjMwNDU4MzkyOTMxNDI4/original/b147d81d-9cf8-4641-9732-54f658069237.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTI0MjMwNDU4MzkyOTMxNDI4/original/8d047820-a220-463b-ac3b-9d6fc02423f3.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTI0MjMwNDU4MzkyOTMxNDI4/original/942d70ec-a32d-4c6a-9bc8-738ce705b743.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "San Miguel de Allende, Mexico",
      "price": "$240 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-979989874483750552/original/681573fb-6fca-4c62-b183-5b6a69b2df60.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-979989874483750552/original/fcd5cbc0-36a2-450c-89e0-ec4054d2633c.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-979989874483750552/original/2c2ef162-e608-44cb-a37f-82b31a4889d7.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-979989874483750552/original/13822367-8db0-4bfe-81fc-3ad02f699f68.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Zanzibar, Tanzania",
      "price": "$270 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-11466557/original/49ca6399-c4fe-4c76-b05d-5dcb7d27d958.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-11466557/original/6b4f51ba-dd4a-40d6-95e2-bd9c8ee83f40.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/751b9762-234c-4fb3-acf4-5dc8af2e4fbb.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-11466557/original/70cd00c9-8b48-4034-b93e-53a09d643e3b.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Bali, Indonesia",
      "price": "$250 Night",
      "images": ["https://a0.muscache.com/im/pictures/141088f2-d73c-4ac0-b023-eb931fe0557e.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-806020913475964641/original/39230de0-4b45-4b1b-add9-90bb5757987a.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/4da94a0d-a3d0-4028-ac05-9c058af5c87a.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/7a549b3f-ce63-44b1-a723-981b7a8e16aa.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Bruges, Belgium",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/c44bd006-6fc9-4b2c-b878-178d02543863.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/3e1758a0-36e8-4946-92ad-1ddd7b7ff465.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-51806488/original/c08187a2-880e-4d36-960b-9dfdf8e2791c.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-51806488/original/08e77c8a-22aa-491f-9c23-e0843b59683b.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Jaipur, India",
      "price": "$190 Night",
      "images": ["https://a0.muscache.com/im/pictures/fbd4c340-79b3-49b6-a815-704d1fa72b31.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/4b75ed7e-e0c6-4e59-b47d-431b33399fcb.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/214cfdb8-c188-40bb-bb5a-9b8da66bb587.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/1fde629e-1ca3-4c53-9a29-84135bd89eb8.jpg?im_w=720&im_format=avif"]
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