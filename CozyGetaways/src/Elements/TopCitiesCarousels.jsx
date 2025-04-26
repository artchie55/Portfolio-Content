import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
    {
      "name": "Kyoto, Japan",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-25178105/original/12bc582a-d987-4ab1-9ac8-da16c5f4fc6e.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-25178105/original/0686f3f4-972f-4b52-9ba2-176524566d7e.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-25178105/original/15fe6c94-cea3-470e-9644-4fff84ac4b28.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-25178105/original/04b4aa01-7d99-46fb-9c2d-a105c212be76.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Cape Town, South Africa",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIxMTIxMDA0MTgxODkxMjg4MA%3D%3D/original/32159cf3-aea6-429d-94ad-a67fe3cf9d60.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIxMTIxMDA0MTgxODkxMjg4MA%3D%3D/original/6d07fec3-12d7-4fca-8672-01651bc263af.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIxMTIxMDA0MTgxODkxMjg4MA%3D%3D/original/ed5d0157-73a3-4e72-8689-24230496dfd1.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIxMTIxMDA0MTgxODkxMjg4MA%3D%3D/original/d18b84f4-4599-4be8-aca1-0db0b2606284.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Barcelona, Spain",
      "price": "$290 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-801308742153367091/original/13b7ebcd-ebf5-4b40-84bc-d8a31861a969.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-754907399713834456/original/2e42976a-4714-4d22-8b96-acc7cd06f5d6.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-801308742153367091/original/e6422c71-3355-41d9-a020-a96645216b19.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-801308742153367091/original/8f1d8351-f51e-4cf6-aa99-14d3a19406ac.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Vienna, Austria",
      "price": "$270 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/c58794de-d965-41f3-ae3b-2a16de8d2a0a.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/ece278fc-28d9-425c-b467-99b701a59eae.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/8e66f4a8-5ee4-4602-8715-7505bfbcaab6.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-755496015657627431/original/59d47bb9-3c7e-4dd6-9384-a8583a140a69.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Bali, Indonesia",
      "price": "$200 Night",
      "images": ["https://a0.muscache.com/im/pictures/45959e76-2868-4d43-96d1-792a3718d0a4.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/1075f4d3-f40c-4f1d-8e77-358d86259e7d.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/f883924f-6aea-40bb-9817-819fa9b078a3.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/bd4c1859-64ba-44e1-94aa-accbb7c4fbad.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Venice, Italy",
      "price": "$330 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-625256929923327394/original/e48ac6f3-16b0-4cef-be29-e4f5c80b9b7e.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-625256929923327394/original/4e37731d-9907-475c-855d-da32461d7ae9.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-625256929923327394/original/9813f367-2506-4fac-826b-d110574d7cdc.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-625256929923327394/original/00861951-3a0d-42b0-b30f-d1f47e7616c2.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Reykjavik, Iceland",
      "price": "$350 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1136645147068368693/original/55253783-72fc-4185-aaee-237c98f1d444.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1136645147068368693/original/c7ea9c0d-a33d-4b31-a8fd-2a20ab53da13.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1136645147068368693/original/5d118954-36e5-4294-a2ee-c895748dfd73.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1136645147068368693/original/1f92f63f-df8a-49ba-9d4e-f50c751c9ea0.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Petra, Jordan",
      "price": "$240 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1156089796873317596/original/13549ff4-651c-4f56-acb8-aa85087ee3a8.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1156089796873317596/original/7f61529e-372c-4d8d-abcd-f455863c2850.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1156089796873317596/original/5f900de8-26b8-41c7-b08e-7f29e88c04d3.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1156089796873317596/original/8e4ed7ee-32cf-421d-b057-8eb8201738aa.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Buenos Aires, Argentina",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-1220207180153066477/original/8f82fd52-b22a-489c-b19d-a1762b785f24.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1220207180153066477/original/69d56e00-ccdc-4f4a-a6a3-9aaea9c1a699.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1220207180153066477/original/16ba0375-7131-44f9-abc7-7b0717bddd53.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1220207180153066477/original/8920e5db-e8cf-415a-bf33-d21e5cf4f172.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Malé, Maldives",
      "price": "$550 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NzgxMTIxMjQ1ODgzMDEyMw%3D%3D/original/7b4939df-19e2-420f-a10c-cbec731a0d8e.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NzgxMTIxMjQ1ODgzMDEyMw%3D%3D/original/4670a9a4-d2d6-4eaf-b05d-e1834d9fd90a.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NzgxMTIxMjQ1ODgzMDEyMw%3D%3D/original/080fc648-a76e-45e7-890f-022b9cc74453.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA1NzgxMTIxMjQ1ODgzMDEyMw%3D%3D/original/3a728894-22eb-4eb4-9526-b320572db2c0.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Queenstown, New Zealand",
      "price": "$310 Night",
      "images": ["https://a0.muscache.com/im/pictures/7b2f7108-1e91-4228-8c7d-eedcdee88782.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-49676256/original/346eb304-91c7-4d9b-b78a-1ee1f445507e.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/aa0c4e2d-bfb1-43ed-af02-036507246dcf.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/24a040ca-91ea-437d-87b1-e5a9c613e345.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Helsinki, Finland",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/f166f42f-5005-4a40-b299-c7e58da2cb8e.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/122f29a7-b99e-4dba-ac5c-66ff16043449.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/0706d30a-1ded-420f-9fc9-9325f0fb6029.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/aae5bbc4-875c-4fd6-b5d6-780602ab3199.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Kraków, Poland",
      "price": "$220 Night",
      "images": ["https://a0.muscache.com/im/pictures/469c910f-d954-4ac6-8e8c-2605cdb075e8.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/d0144e4b-b8cd-4233-aa57-6f64c033d3a3.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/dae5c666-7822-4bb1-b248-c6c72d7ce15f.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/0cfaaf33-1380-4e8e-86c5-7cd22c8a4e1e.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Muscat, Oman",
      "price": "$250 Night",
      "images": ["https://a0.muscache.com/im/pictures/edcb7f2f-b049-4081-b175-b73017d35c88.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1234988075375482980/original/d4e32117-29af-41d8-8700-da97b82d08ad.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1234988075375482980/original/67630aab-9032-45b3-b559-f05801d98c40.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1234988075375482980/original/686fbe3f-9c22-4652-8cc2-24be4d036677.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Cartagena, Colombia",
      "price": "$200 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1226427612278140752/original/5a13c34e-1607-4a20-8839-8ef0ea727fd5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1226427612278140752/original/a53d1c99-f4a9-4d62-8e8e-c503ba7b9f40.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1226427612278140752/original/a1a7fe48-1774-4600-8f77-4ae0fc7fe1ef.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyNjQyNzYxMjI3ODE0MDc1Mg%3D%3D/original/bc65aee4-8979-4b7b-bd2b-f35091353b28.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "San Francisco, USA",
      "price": "$400 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyNjQyNzYxMjI3ODE0MDc1Mg%3D%3D/original/bc65aee4-8979-4b7b-bd2b-f35091353b28.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1226427612278140752/original/9b98850c-2b17-4815-86c9-64befb5a7fd5.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1226427612278140752/original/c9a5ba00-8f5a-4e63-a1b1-9dde9518465b.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1226427612278140752/original/765f3c0f-7ea2-4614-b04e-b4137df151aa.jpeg?im_w=720&im_format=avif"]
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