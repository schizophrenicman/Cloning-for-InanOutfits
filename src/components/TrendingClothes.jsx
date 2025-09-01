import React, { useEffect, useRef, useState } from 'react';

const TrendingClothes = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const trendingItems = [
    {
      id: 1,
      name: "Bag",
      price: "Nrs",
      image: "https://plus.unsplash.com/premium_photo-1678739395192-bfdd13322d34?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmFnfGVufDB8fDB8fHww",
      category: ""
    },
    {
      id: 2,
      name: "",
      price: "Nrs",
      image: "",
      category: ""
    },
    {
      id: 3,
      name: "",
      price: "Nrs",
      image: "",
      category: "Tops"
    },
    {
      id: 4,
      name: "",
      price: "Nrs",
      image: "",
      category: ""
    },
    {
      id: 5,
      name: "",
      price: "Nrs",
      image: "",
      category: ""
    },
    {
      id: 6,
      name: "",
      price: "Nrs",
      image: "",
      category: ""
    },
    {
      id: 7,
      name: "",
      price: "Nrs",
      image: "",
      category: ""
    },
    {
      id: 8,
      name: "",
      price: "Nrs",
      image: "",
      category: ""
    }
  ];

  useEffect(() => {
    if (!isAutoScrolling) return;

    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollInterval = setInterval(() => {
      if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft += 1;
      }
    }, 30);

    return () => clearInterval(scrollInterval);
  }, [isAutoScrolling]);

  const handleMouseEnter = () => {
    setIsAutoScrolling(false);
  };

  const handleMouseLeave = () => {
    setIsAutoScrolling(true);
  };



  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-900 mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-gray-600">
            Discover what's hot in fashion right now
          </p>
        </div>


        <div 
          ref={scrollContainerRef}
          className="relative overflow-x-hidden scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-6 pb-4">
            {trendingItems.map((item) => (
              <div
                key={item.id}
                className="flex-none w-72 h-[480px] cursor-pointer transform transition-all duration-300 hover:scale-105"
              >
                <div className="bg-gradient-to-t from-white to-yellow-100 rounded-xl shadow-xl overflow-hidden h-full flex flex-col border border-yellow-100">
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      {/* <button className="bg-gradient-to-r from-yellow-400 via-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                         Trending
                      </button> */}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col flex-grow">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-1">
                      {item.name || 'Product Name'}
                    </h3>
                    <p className="text-sm text-yellow-700 mb-2">{item.category || 'Category'}</p>
                    <p className="text-xl font-bold text-yellow-900 mb-4">
                      {item.price || 'Nrs 0'}
                    </p>
                    <div className="mt-auto">
                      <button 
                        className="w-full bg-gradient-to-r from-orange-400 to-amber-500 text-white font-semibold py-2 px-4 rounded-full transition-all duration-300 shadow-md hover:shadow-lg hover:from-yellow-500 hover:to-amber-600 transform hover:-translate-y-0.5"
                        onClick={() => console.log(`Added ${item.name || 'Product'} to cart`)}
                      >
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingClothes;
