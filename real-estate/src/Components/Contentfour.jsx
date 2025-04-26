import React from 'react';

const Contentfour = () => {
  return (
    <>
      
      <div id='listings'
        className="relative flex flex-col justify-center items-center mt-[px] bg-cover bg-center py-[240px] z-0"
        style={{
          backgroundImage:
            "url('https://img1.wsimg.com/isteam/stock/143/:/rs=w:1535,m')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

        
        <div className="relative z-10 flex flex-col items-center w-full px-4">
          <div id="slabtext" className="text-[80px] max-500:text-[50px] text-white font-bold mt-[-150px] mb-[150px] max-500:mb-[50px] text-center">
            FIND YOUR DREAM HOME
          </div>

          <div className="max-w-6xl w-full bg-white p-8 shadow-md rounded-md">
            <h2 className="text-2xl tracking-wide font-bold mb-6 uppercase">
              Search Listings
            </h2>

            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Location</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>Select Location</option>
                  <option>New York</option>
                  <option>California</option>
                  <option>Florida</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Type</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>Select Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Condo</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Sort By</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>Newest</option>
                  <option>Price (Low to High)</option>
                  <option>Price (High to Low)</option>
                </select>
              </div>
            </div>

            {/* Second row */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="block text-sm text-gray-600 mb-1">Bedrooms</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>Any Number</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Baths</label>
                <select className="w-full border border-gray-300 p-2 rounded-md">
                  <option>Any Number</option>
                  <option>1+</option>
                  <option>2+</option>
                  <option>3+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Min Price</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="$0"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-600 mb-1">Max Price</label>
                <input
                  type="number"
                  className="w-full border border-gray-300 p-2 rounded-md"
                  placeholder="$1,000,000"
                />
              </div>
            </div>

            <div className="flex justify-center">
              <button
                className="bg-[#85c33a] cursor-pointer font-semibold px-6 py-3 rounded-full hover:scale-95 hover:brightness-[90%] transition duration-200"
                disabled
              >
                SEARCH NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contentfour;
