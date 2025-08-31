import React, { useState, useRef, useEffect } from 'react';
import { Search, Bell, ShoppingCart, Globe, User } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Header({ onSignupClick }) {
  const [isClothingDropdownOpen, setIsClothingDropdownOpen] = useState(false);
  const [isNotificationDropdownOpen, setIsNotificationDropdownOpen] = useState(false);
  const notificationDropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationDropdownRef.current && !notificationDropdownRef.current.contains(event.target)) {
        setIsNotificationDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const notifications = [
    { id: 1, message: "New arrival: Summer dresses are here!", time: "2 hours ago" },
    { id: 2, message: "Your order #1234 has been shipped.", time: "1 day ago" },
    { id: 3, message: "Flash sale: 50% off on all accessories!", time: "3 days ago" },
  ];

  const clothingCategories = [
    { name: "Tops", subcategories: ["T-Shirts", "Blouses", "Sweaters", "Tank Tops"] },
    { name: "Bottoms", subcategories: ["Pants", "Jeans", "Shorts", "Skirts"] },
    { name: "Dresses", subcategories: ["Casual Dresses", "Evening Dresses", "Summer Dresses"] },
    { name: "Outerwear", subcategories: ["Jackets", "Coats", "Blazers", "Vests"] },
    { name: "Activewear", subcategories: ["Leggings", "Sports Bras", "Workout Tops", "Athletic Shorts"] },
    { name: "Accessories", subcategories: ["Bags", "Jewelry", "Hats", "Scarves", "Belts"] },
    { name: "Footwear", subcategories: ["Sneakers", "Boots", "Sandals", "Heels"] },
    { name: "Swimwear", subcategories: ["Bikinis", "One-Pieces", "Swim Shorts"] },
    { name: "Unisex", subcategories: ["T-Shirts", "Hoodies", "Sneakers", "Accessories"] }
  ];

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-amber-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <button
              onClick={() => navigate('/')}
              className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent hover:from-amber-800 hover:to-orange-700 transition-all duration-200"
            >
              InanOutfits
            </button>
          </div>

          {/* SearchBar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-full focus:ring-2 focus:ring-amber-400 focus:border-transparent focus:bg-amber-100 transition-all duration-200 bg-amber-50/50 text-amber-900 placeholder-amber-400 hover:bg-amber-100/50"
              />
            </div>
          </div>

          {/* RightIcon */}
          <div className="flex items-center space-x-2">
            <div className="relative" ref={notificationDropdownRef}>
              <button
                onClick={() => setIsNotificationDropdownOpen(!isNotificationDropdownOpen)}
                className="relative p-2 text-amber-600 hover:text-amber-800 transition-all duration-200 hover:scale-110"
              >
                <Bell className="w-5 h-5" />
                <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
              </button>
              {isNotificationDropdownOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg border border-amber-100 z-50">
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-amber-900 mb-3">Notifications</h3>
                    <ul className="max-h-60 overflow-y-auto">
                      {notifications.map((notification) => (
                        <li key={notification.id} className="mb-2 last:mb-0">
                          <p className="text-sm text-amber-700">{notification.message}</p>
                          <span className="text-xs text-amber-400">{notification.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
            <button 
              onClick={() => navigate('/cart')}
              className="p-2 text-amber-600 hover:text-amber-800 transition-all duration-200 hover:scale-110"
            >
              <ShoppingCart className="w-5 h-5" />
            </button>
            <button 
              onClick={onSignupClick}
              className="p-2 text-amber-600 hover:text-amber-800 transition-all duration-200 hover:scale-110"
            >
              <User className="w-5 h-5" />
            </button>
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-amber-200">
              <Globe className="w-4 h-4 text-amber-500" />
              <span className="text-sm text-amber-700">English</span>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex items-center justify-between py-3 border-t border-amber-100">
          <div className="flex items-center space-x-8">
            <div className="relative group">
              <button 
                className="text-amber-700 hover:text-amber-900 transition-all duration-200 flex items-center font-medium"
                onMouseEnter={() => setIsClothingDropdownOpen(true)}
                onMouseLeave={() => setIsClothingDropdownOpen(false)}
              >
                Clothing
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {/* Clothing Dropdown Menu */}
              {isClothingDropdownOpen && (
                <div 
                  className="absolute top-full left-0 mt-1 w-80 bg-white rounded-md shadow-lg border border-amber-100 z-50"
                  onMouseEnter={() => setIsClothingDropdownOpen(true)}
                  onMouseLeave={() => setIsClothingDropdownOpen(false)}
                >
                  <div className="p-4">
                    <h3 className="text-base font-semibold text-amber-900 mb-3">Shop by Category</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {clothingCategories.map((category, index) => (
                        <div key={index} className="group/category">
                          <h4 className="font-medium text-amber-800 mb-1.5 text-sm group-hover/category:text-amber-600 transition-colors duration-200">
                            {category.name}
                          </h4>
                          <ul className="space-y-1">
                            {category.subcategories.map((subcategory, subIndex) => (
                              <li key={subIndex}>
                                <a 
                                  href="#" 
                                  className="text-sm text-amber-600 hover:text-amber-800 transition-colors duration-200 block py-1 px-2 rounded hover:bg-amber-50"
                                >
                                  {subcategory}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a 
              href="/new-arrivals" 
              className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium"
              onClick={(e) => {
                e.preventDefault();
                navigate('/new-arrivals');
              }}
            >
              New Arrivals
            </a>
            <a
              href="/sale"
              className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium"
              onClick={(e) => {
                e.preventDefault();
                navigate('/sale');
              }}
            >
              Sale
            </a>
            <a href="#" className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium">Brands</a>
            <a href="#" className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium">Customer Service</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
