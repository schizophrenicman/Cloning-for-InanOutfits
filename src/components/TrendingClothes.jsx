import React, { useEffect, useRef, useState } from 'react';

const TrendingClothes = () => {
  const scrollContainerRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const trendingItems = [
    {
      id: 1,
      name: "",
      price: "Nrs",
      image: "",
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

  // Removed handleItemClick as popup will be removed
  // const handleItemClick = (item) => {
  //   setSelectedItem(item);
  //   setIsAutoScrolling(false);
  // };

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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Trending Now
          </h2>
          <p className="text-lg text-gray-600">
            Discover what's hot in fashion right now
          </p>
        </div>

        <div 
          ref={scrollContainerRef}
          className="relative overflow-x-auto scrollbar-hide"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{ scrollBehavior: 'smooth' }}
        >
          <div className="flex space-x-6 pb-4">
            {trendingItems.map((item) => (
              <div
                key={item.id}
                className="flex-none w-72 cursor-pointer transform transition-all duration-300 hover:scale-105"
                // Removed onClick to disable popup
                // onClick={() => handleItemClick(item)}
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Trending
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-2">{item.category}</p>
                    <p className="text-xl font-bold text-gray-900">
                      {item.price}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Removed popup modal */}
        {/* {selectedItem && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="bg-white rounded-lg p-8 max-w-md mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedItem.image}
                alt={selectedItem.name}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {selectedItem.name}
              </h3>
              <p className="text-gray-600 mb-4">{selectedItem.category}</p>
              <p className="text-3xl font-bold text-gray-900 mb-4">
                {selectedItem.price}
              </p>
              <div className="flex justify-center">
                <button 
                  className="border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                  onClick={() => setSelectedItem(null)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )} */}

        {/* Removed scroll control button */}
        {/* <div className="flex justify-center mt-6 space-x-2">
          <button
            onClick={() => setIsAutoScrolling(!isAutoScrolling)}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full hover:bg-gray-300 transition-colors"
          >
            {isAutoScrolling ? 'Pause' : 'Play'} Auto-scroll
          </button>
        </div> */}
      </div>

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default TrendingClothes;
