import React from 'react';

export default function HeroSection() {
  return (
    <section className="relative">
      <div className="relative h-[600px] bg-gradient-to-br from-amber-50 via-orange-50 to-amber-100 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-100/20 to-transparent"></div>
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className="space-y-8">
                <h1 className="text-6xl lg:text-8xl font-bold text-amber-900 leading-tight">
                  CL
                  <span className="block">OTH</span>
                  <span className="block">ING</span>
                </h1>
                <div className="space-y-4">
                  <h2 className="text-xl text-amber-700 font-light">Discover our collection</h2>
                  <p className="text-amber-600 leading-relaxed max-w-md">
                    Find the perfect outfit that matches your style and personality. 
                    From casual wear to formal attire.
                  </p>
                </div>
                <button className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-4 rounded-full font-medium hover:from-amber-700 hover:to-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Shop Now
                </button>
              </div>

              {/* Hero Image */}
              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                  <img
                    src=""
                    alt=""
                    className="w-full h-[500px] object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-gradient-to-b from-amber-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-amber-900 mb-6 leading-tight">
                Reveal A World Of Fashion Pieces
              </h2>
              <p className="text-amber-700 text-lg leading-relaxed">
                Explore our curated collection of premium fashion pieces designed for the modern individual. 
                From timeless classics to contemporary trends.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src=""
                  alt=""
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="relative overflow-hidden rounded-2xl shadow-lg">
                <img
                  src=""
                  alt=""
                  className="w-full h-48 object-cover transform hover:scale-110 transition-transform duration-500 mt-8"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
