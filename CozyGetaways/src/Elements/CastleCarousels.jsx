import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
    {
      "name": "Santorini, Greece",
      "price": "$310 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/f0f0a291-65a9-442b-9036-45b7e5e25676.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTM1MTk0MTk%3D/original/77ba298c-56d2-4e16-a6d1-7bd3d1af0be6.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/ad0a54d5-65ac-4cc3-b202-07cc99d2f081.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-53519419/original/1feaf4a1-e316-431e-b1d6-eb21321333de.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Marrakech, Morocco",
      "price": "$270 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/ccda7793-d09d-40f6-aa13-40f1ebc19759.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/31f16670-9196-4416-bd5f-c0a9462f8fc7.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/a9396cc5-dd0d-4fb3-adf5-85f0944462a2.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1196451576617675144/original/6f8d6337-2166-48d1-b77f-01c791ced8cf.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Seoul, South Korea",
      "price": "$290 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-44265625/original/f3a34292-ea0d-4614-9089-3b2ed382e7f5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-659390674575353513/original/dcedd4fc-daf6-4427-b109-bcd2557d0770.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-659390674575353513/original/2e6ad188-91f5-45d5-a515-1cc3d15daf14.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-659390674575353513/original/c29e6925-8b0c-48fe-b28a-d581fb0a6e97.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Dubrovnik, Croatia",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/47a239d9-3739-4f32-ae97-3c706ec23d7e.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/airflow/Hosting-31426569/original/de9d61c5-feed-4859-be0b-f75bb514f8aa.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/airflow/Hosting-31426569/original/1c273a53-2309-4740-9958-31623a5b08d0.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/airflow/Hosting-31426569/original/d0b62f0b-25fc-459c-8473-c6629fd74ff7.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Prague, Czech Republic",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1041398366372889590/original/37eec4e5-40fe-4167-a296-7db08ac68d9f.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MTM5ODM2NjM3Mjg4OTU5MA%3D%3D/original/3d111ac3-7cd9-4026-a6b6-3d6d08ffd032.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1041398366372889590/original/578877d0-6d18-4661-919d-e7c1e033a14b.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA0MTM5ODM2NjM3Mjg4OTU5MA%3D%3D/original/8720a43f-d7a2-4cbb-8e93-597c23893173.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Cusco, Peru",
      "price": "$250 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-47086741/original/89035847-1f96-4269-af1e-120a19e1cfd7.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/751624de-45d1-4917-ab1b-8124fd32fb1a.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/933a307e-8b76-448e-8433-24a12fb28841.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/15d8d6d1-dbd7-4eb8-b5b5-5148ffb7cb63.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Sydney, Australia",
      "price": "$320 Night",
      "images": ["https://a0.muscache.com/im/pictures/b87046c6-c860-4469-87b5-62b5201f2310.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/430a0e9e-c125-4640-9138-bed56ebf3910.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/2802c21b-14c2-4d0d-9f68-30342f8cd1d1.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/b345dad5-fbba-4c53-8f0f-af1b6b9fe395.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Edinburgh, Scotland",
      "price": "$270 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-681506574120137388/original/b2a2d280-e39d-42d3-8499-e32bc96729a0.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-681506574120137388/original/c408431a-d99c-4790-9d77-632b2b12e034.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-681506574120137388/original/a6a603d5-e145-46e9-bf76-40395d13e4a0.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-681506574120137388/original/778df30f-0aac-409f-88d1-0a3dcb4e931a.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Bangkok, Thailand",
      "price": "$240 Night",
      "images": ["https://a0.muscache.com/im/pictures/82cd1004-b805-47a4-ba3f-673dd394d38d.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/ae06385e-e7eb-43f5-913f-3540373046a4.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/ffd92672-3d36-42f1-bf0e-733fa3521107.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/7e1c1c78-0ab4-4c89-aaf9-3463a03ce86a.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Vienna, Austria",
      "price": "$290 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-680047698365743252/original/509a4a27-0932-4dbe-97eb-5102f9ef4aab.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-680047698365743252/original/fce411e5-997d-434f-b1b4-3394e16d2973.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/9088c58b-1bad-4486-a57d-e312e95cd576.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/bf7e246e-f2b8-4822-8810-4dd786495ada.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Quebec City, Canada",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1145340085630897135/original/a909dcea-04ec-4df4-b8f3-60cddb39f9de.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1145340085630897135/original/29b2bb34-907f-4e5d-91a2-b37072338c2f.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1145340085630897135/original/fb0e239b-7947-4ffb-a5df-268150902bac.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1145340085630897135/original/83df5fc6-cacc-464d-8bc2-2dad077755b4.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Budapest, Hungary",
      "price": "$210 Night",
      "images": ["https://a0.muscache.com/im/pictures/a187513d-fc2d-43ce-9dac-32811514a8fb.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/262dbc80-42d1-44cf-b26e-fa0655a7736d.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/dcdced84-100d-4132-bf46-f884e14aa28d.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/b220b5f6-2168-4bec-bd91-6aa6c9c029e2.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Helsinki, Finland",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/b4e3a7c9-0766-49fd-ad9a-16a20c8761e3.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/5ffdea3c-2fa6-4bb6-abfb-22cbccf44609.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/74893326-9958-4fdd-ae5e-df8eda7416ba.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/6ac2904e-4090-4caa-8ce8-c0ff0723ff47.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Lima, Peru",
      "price": "$200 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1289214342167782300/original/0ce695fb-2b97-4f7f-af88-a472c12682e7.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1289214342167782300/original/5ddcb966-317e-4a77-8262-f0baa3444680.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1289214342167782300/original/6928b7be-0c5e-434e-8263-8fa14c98ec1c.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1289214342167782300/original/b14aa60a-f621-4f34-96ae-a360818214ec.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Tallinn, Estonia",
      "price": "$220 Night",
      "images": ["https://a0.muscache.com/im/pictures/acaaa1e1-6dee-4ee5-9bfb-a3088a46d75a.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NDc4NTYyMTI%3D/original/ee94d8ad-33fb-4a8d-9b16-901782c6df4b.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-47856212/original/9cef814a-ae31-4301-8f58-b5039dfbdfb5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-47856212/original/16a4c8e6-206b-4d6f-a176-711cadc52711.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Ho Chi Minh City, Vietnam",
      "price": "$190 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1323190364702833360/original/a1b1e782-ed86-4394-8a80-dbaf28ec41e4.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1323190364702833360/original/666ecace-a25a-425a-b3d4-84111a7eaa8f.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/859c936d-ccc5-44dc-b4f3-1d763c19149f.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1323190364702833360/original/41992920-bba5-4e09-bf5a-ed3108da93b6.jpeg?im_w=720&im_format=avif"]
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