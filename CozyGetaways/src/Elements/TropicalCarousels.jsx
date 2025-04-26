import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
    {
      "name": "Kyoto, Japan",
      "price": "$280 Night",
      "images": ["https://a0.muscache.com/im/pictures/d57cb364-6b08-46ea-95fb-781b800f5cb3.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/01b8147d-0c1d-4bd3-9819-2ef764e461dd.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/72d86e9b-f579-43ab-a982-48137ae1dbb8.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/d2507736-bb18-41bf-ba54-7c2ad01a7eb4.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Lisbon, Portugal",
      "price": "$260 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-786965023676908939/original/ed0d5365-1ddb-4e54-9b00-e5e9a787b370.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-43731410/original/1064a807-f1ee-4849-a9c3-5d4694cd70fd.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-43731410/original/e71c6dce-d8d2-4502-ab15-d3b037a65d17.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-43731410/original/460f7810-67ab-4b03-be9c-24f37d912e84.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Cape Town, South Africa",
      "price": "$300 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-700285616193685058/original/16ffbe4f-f06a-4c4b-9fff-7c3d0f335842.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-700285616193685058/original/762be5a8-b137-4d00-b537-c0ba74cb2a81.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-700285616193685058/original/6396a7dc-1cf3-4ce9-b1e4-89bae37ef630.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-700285616193685058/original/12d69eb6-25f6-4dd9-9765-6a5e1a93f9cb.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Buenos Aires, Argentina",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/3f7f7bca-fc69-4ea4-b6fd-80e5f11edfbc.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/76498840-434d-47a1-b927-3abc2bc350e1.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/496111fd-4bb6-4ac3-9d62-54a5e28ff0ff.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/11dec279-3c90-4d6f-83f3-8fc8995ae28e.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Stockholm, Sweden",
      "price": "$270 Night",
      "images": ["https://a0.muscache.com/im/pictures/d7492273-6e61-4a5d-89f4-6651076ccc50.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/c392c7da-0ae1-4204-adc7-8eff2040d54a.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/0b60eb4d-cdc8-4545-929b-915a25568cc2.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/846b8095-fc39-4307-975b-020240d07f12.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Auckland, New Zealand",
      "price": "$320 Night",
      "images": ["https://a0.muscache.com/im/pictures/f82140bf-8915-4966-9f4d-b4e6add3dcd6.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/78fb8268-b999-4389-b072-e2a66910e41b.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6NTE1MzgxOQ%3D%3D/original/9ce164ae-ec8c-4edd-ba3a-2f1ce524aa0d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/444a8225-e657-4d62-97db-42f7423ae890.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Malé, Maldives",
      "price": "$400 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyODgxNTQ3OTE5NjI5NzczNQ%3D%3D/original/e500b68c-b231-4113-b545-2dd4fa51cb5b.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyODgxNTQ3OTE5NjI5NzczNQ%3D%3D/original/ce7746fb-1693-420c-905d-3be171b2064d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyODgxNTQ3OTE5NjI5NzczNQ%3D%3D/original/4fe2571a-9ca6-429b-a286-fb3dbab15965.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIyODgxNTQ3OTE5NjI5NzczNQ%3D%3D/original/149fd11c-c24c-4f12-bacf-d381fb2a2acd.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Reykjavik, Iceland",
      "price": "$350 Night",
      "images": ["https://a0.muscache.com/im/pictures/c6cd1389-673f-4425-85da-ae7c9d89cf21.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/e88193c4-403e-4276-a8a0-60cfab26ec08.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/0a779f77-7965-463d-ba94-2ce767e6b8a9.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/c13e65df-33fb-4811-8cff-cc084241abb7.jpg?im_w=720&im_format=avif"]
    },
    {
      "name": "Bali, Indonesia",
      "price": "$240 Night",
      "images": ["https://a0.muscache.com/im/pictures/b9820912-91eb-46f2-a0d5-231e2faaf9a7.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-43316780/original/e5f00c7b-ed64-4d88-b386-631ca1d42b92.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-43316780/original/fcd451ce-1c79-4784-8700-12ef2978525e.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-43316780/original/6fe3151e-1abe-4adb-bf55-c1bd7fc9b999.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Venice, Italy",
      "price": "$290 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-1135309651172926399/original/79b693c4-c22c-4966-a76e-b79c0b35c4b0.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/72183223-67ac-495e-b77a-212522be0501.jpg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1135309651172926399/original/6ef459af-a454-4d81-a256-b9f80dc74952.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-1135309651172926399/original/9f793f2a-1aa8-4354-8a56-5e655dc362bd.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Cartagena, Colombia",
      "price": "$220 Night",
      "images": ["https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwMTgwMDE0NjIxODg3NjUzOA%3D%3D/original/60453a3f-75f2-4628-90b9-f30e7aa3fab4.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwMTgwMDE0NjIxODg3NjUzOA%3D%3D/original/b697488a-8b38-44a5-aa95-be407cab57de.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1201800146218876538/original/4ed982c0-75f7-4949-a8e9-d9f233b729fa.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/hosting/Hosting-1201800146218876538/original/0f061b76-50be-4267-81a1-d5849ace704b.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Krakow, Poland",
      "price": "$200 Night",
      "images": ["https://a0.muscache.com/im/pictures/prohost-api/Hosting-857504887451419363/original/a3617c4c-3347-4e61-adc3-0d1b87811448.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-857504887451419363/original/a2accef9-97a7-4901-8be9-02a520ad6c6b.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-857504887451419363/original/3bd40d16-4071-47f6-956c-5f0e09707ff2.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/prohost-api/Hosting-857504887451419363/original/d027e29b-1d56-4860-82eb-9c1a94248396.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Salzburg, Austria",
      "price": "$250 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-575679799799664833/original/0ed2be61-6eff-4079-80b7-e91e4f95e6ce.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-575679799799664833/original/465f66ad-698a-4c64-ae06-8ac5f8e9bd2c.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-575679799799664833/original/952fe723-a6bc-481f-884f-4f02422d550e.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-575679799799664833/original/bfcd0bdb-77a8-49eb-9568-f8402d71ebc6.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Bruges, Belgium",
      "price": "$230 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-964577283039581384/original/7a80a62a-11f0-4dc6-a55e-5811e8dbb474.png?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-964577283039581384/original/6f8bd7f5-1ec6-4ab4-9458-a28be2070935.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-964577283039581384/original/89948277-b0d1-4d0c-a62f-1df8f06db1b5.png?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-964577283039581384/original/4b7d624d-7871-4301-b70a-0ee0668c0514.png?im_w=720&im_format=avif"]
    },
    {
      "name": "Havana, Cuba",
      "price": "$210 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-923429851971227198/original/0c18d0f8-ef54-4967-bde0-6b05b51cb43f.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-923429851971227198/original/b3d99b3c-50a0-4f72-9d00-a8a0fd2ff880.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-923429851971227198/original/1449148f-380c-46bc-bbcb-c02c3f23aa92.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-923429851971227198/original/de7d2a30-d76a-40a5-8995-c3413439ab77.jpeg?im_w=720&im_format=avif"]
    },
    {
      "name": "Tbilisi, Georgia",
      "price": "$190 Night",
      "images": ["https://a0.muscache.com/im/pictures/miso/Hosting-613417616911473686/original/733178b4-9052-4da7-a763-78c5ad5d2a03.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-613417616911473686/original/f005c11c-952a-4883-bc1c-b2dd9ac0ef6d.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-613417616911473686/original/081076a2-2c47-4b11-9e25-cfd5f4b093c2.jpeg?im_w=720&im_format=avif", "https://a0.muscache.com/im/pictures/miso/Hosting-613417616911473686/original/343ee327-41c9-42e6-9eea-d42768b5b58b.jpeg?im_w=720&im_format=avif"]
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