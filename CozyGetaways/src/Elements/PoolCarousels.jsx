import React, { useState, useEffect, useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const productData = [
  {
    name: "Ceby City, Philippines",
    price: "$405 Night",
    images: [
      "https://a0.muscache.com/im/pictures/a9e1cad1-43c2-4201-8eab-1c1708c4c97d.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1124631053524438531/original/9acd5e57-6e97-40fe-b99d-e8bb4d1a3d9d.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1124631053524438531/original/2d86fefc-9088-4f49-b94f-682b739c692c.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1124631053524438531/original/afa0917a-dd3d-4853-8d02-5b0dc88b9f59.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Co Dong, Vietnam",
    price: "$358 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-933760191061965654/original/cdd6bb88-1af8-4bb0-9bed-2263c8e33df6.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-933760191061965654/original/41057b77-73f1-4966-881a-c3d6c710d5e3.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-933760191061965654/original/9b5693ad-00bc-42d3-9a30-185ec3c9d160.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-933760191061965654/original/29e32e58-e6d5-441d-92d3-d3bd55b58909.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Meuing Kai, Thailand",
    price: "$1,200 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1099287487124002502/original/68d71c46-3ba3-4c39-b36a-e09dd0415780.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1099287487124002502/original/68d71c46-3ba3-4c39-b36a-e09dd0415780.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1099287487124002502/original/68d71c46-3ba3-4c39-b36a-e09dd0415780.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1099287487124002502/original/de986d85-1fe5-45bf-bd1e-2b7d1ea1b8b3.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Vedic Village, India",
    price: "$305 Night",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTkyMjc1NTk4MDgwNDQ3ODc3/original/a3789270-c086-4ee2-a3a3-4e7ed915f1c8.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTkyMjc1NTk4MDgwNDQ3ODc3/original/02a8f2f8-8e13-46ca-b476-6b6fa1ae2558.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTkyMjc1NTk4MDgwNDQ3ODc3/original/9e327c5a-c833-47fa-af18-f6e6ef10f7f6.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6OTkyMjc1NTk4MDgwNDQ3ODc3/original/9961718c-b810-4bfc-a049-2f1f7f368322.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Al Wafrah, Kuwait",
    price: "$506 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1108076908435532349/original/f6f2ab24-5d42-4b42-a35a-9f853f61d1fd.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1108076908435532349/original/9115b8bd-56d8-48ff-993d-b3cf248d914f.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1108076908435532349/original/7b03b0a8-13da-4568-aec3-119fa50f3f77.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1108076908435532349/original/332a6fe1-ffce-4d2a-8ab7-d86c594827e4.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Stewton, UK",
    price: "$305 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-645409233379646179/original/18e5fcbf-e10a-4a40-a63d-4fc6775956ad.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-645409233379646179/original/dc6f7a36-0670-4219-9337-f3bdac7c28a9.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-645409233379646179/original/cfd40857-6633-4841-bc78-7530c2eb69bf.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-645409233379646179/original/0fa24e55-5f92-4bd0-8c5b-b297b75617f4.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Saint Fillans, UK",
    price: "$505 Night",
    images: [
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1300696101728355421/original/dd8d6643-552a-450c-af91-bc7ecb52df3b.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1300696101728355421/original/7c613356-e449-4f21-b682-5f8eaa96ce1b.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1300696101728355421/original/36a4f16e-bf3f-4815-9178-fba1fe6718cd.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/prohost-api/Hosting-1300696101728355421/original/159a385d-e093-457e-97fc-bb0cd72193d3.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Nasu District, Japan",
    price: "$345 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1060565736181005513/original/4bb837fc-69af-4eb9-9e66-cd3bfb035879.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MTMyMDQ1MDU2OTMwNzE2Nw%3D%3D/original/ffd43b2c-6404-41d1-be7f-66868631e2bd.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MTMyMDQ1MDU2OTMwNzE2Nw%3D%3D/original/af2f348c-a260-4cad-a144-6834b8d99566.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA2MTMyMDQ1MDU2OTMwNzE2Nw%3D%3D/original/42308a5b-557a-4929-bf0c-1dbcec03c296.jpeg?im_w=720&im_format=avif",
    ],
  },
  {
    name: "Tahara, Japan",
    price: "$234 Night",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA4MDIyNzEyOTUzMzkxMzM0OA%3D%3D/original/cef65d3f-2b3f-4873-8e37-87203e568017.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA4MDIyNzEyOTUzMzkxMzM0OA%3D%3D/original/07cf708e-991c-409e-b369-a54e4b337c37.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA4MDIyNzEyOTUzMzkxMzM0OA%3D%3D/original/d93f5d0b-f5f0-49cb-b07a-ad377ddf4b81.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTA4MDIyNzEyOTUzMzkxMzM0OA%3D%3D/original/d93f5d0b-f5f0-49cb-b07a-ad377ddf4b81.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Iwakuni, Japan",
    price: "$435 Night",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1308359873847795126/original/6379aa67-324f-493c-89f6-31478c6f117e.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwODM1OTg3Mzg0Nzc5NTEyNg%3D%3D/original/2e095c4a-1beb-4412-a318-959d8c528bfb.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwODM1OTg3Mzg0Nzc5NTEyNg%3D%3D/original/eb72aa86-9f4d-429e-813e-7d133f48014b.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTMwODM1OTg3Mzg0Nzc5NTEyNg%3D%3D/original/abc5044c-9711-4eb8-99e3-e9241fc0e939.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Nonsan, South Korea",
    price: "$562 Night",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNjIyNjM5NjM3MzMzNjY0Mw%3D%3D/original/66d136dd-a838-49fe-a870-cc2e37dff79b.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTIwNjIyNjM5NjM3MzMzNjY0Mw%3D%3D/original/66d136dd-a838-49fe-a870-cc2e37dff79b.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1206226396373336643/original/780743b5-7128-4027-909c-f4ee86152156.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1206226396373336643/original/d1644d8b-5d27-472f-ba20-3abb2d02e28e.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Ga Deok, South Korea",
    price: "$420 Night",
    images: [
      "https://a0.muscache.com/im/pictures/984d934a-d7c4-4666-bae7-0398a156a439.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/d485912d-a4a1-40f9-8046-af092fe1910d.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/653fee2c-6ea1-4530-917c-ce2157753cb3.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/c3051be6-20fb-4aa7-9089-0e55236f9dd9.jpg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Yeonggun, South Korea",
    price: "$679 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-962166410706461229/original/97ac86c6-2d7f-4c8a-b05e-6d8547e11c5a.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-962166410706461229/original/dad8ef03-f3da-49d2-81ae-41ea4eadf465.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-962166410706461229/original/34b2574f-3e27-4230-bf86-b10e6f0aa168.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-962166410706461229/original/58d3bb7b-da1d-49f9-9071-4419cd02978b.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "San Roque, Brazil",
    price: "$799 Night",
    images: [
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1214441366145473129/original/fcf56a8b-1339-494e-86a6-5505c1183900.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/airflow/Hosting-1214441366145473129/original/0ec4bdec-0e95-4429-8823-b588ec171c20.jpg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/hosting/Hosting-1214441366145473129/original/378598d3-8a35-4ef2-b1c9-b2bec70c4a42.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/airflow/Hosting-1214441366145473129/original/2e3dc748-d9b0-4508-8e7d-bb0b029d6cf9.jpg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Hartford, US",
    price: "$499 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-660806273986036455/original/66ff2245-d32a-43f3-a019-e13d59a629b6.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-660806273986036455/original/8a780923-6b86-442d-b3ec-0e56960add56.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-660806273986036455/original/821a053f-7c6f-4f4e-b064-639b4f1ac4be.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-660806273986036455/original/1bbc4126-5768-4283-a7bc-8c93e35b03d1.jpeg?im_w=720&im_format=avif"
    ],
  },
  {
    name: "Herjava, Estonia",
    price: "$234 Night",
    images: [
      "https://a0.muscache.com/im/pictures/miso/Hosting-1226689522372847215/original/3ffe734a-2289-481e-acc6-a7df4339bc19.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1226689522372847215/original/dfe76de3-2455-4c1b-83eb-b444fe7db7a8.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1226689522372847215/original/317412af-9913-49c1-ac22-839ddbd44143.jpeg?im_w=720&im_format=avif",
      "https://a0.muscache.com/im/pictures/miso/Hosting-1226689522372847215/original/174e5ccb-349d-48da-ad7d-ca3048868bca.jpeg?im_w=720&im_format=avif"
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