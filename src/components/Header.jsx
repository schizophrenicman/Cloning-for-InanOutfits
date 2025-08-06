import React from 'react';
import { Search, Bell, ShoppingCart, Globe, User } from 'lucide-react';

export default function Header({ onSignupClick }) {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-amber-100 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-amber-700 to-orange-600 bg-clip-text text-transparent">
              Inan outfits
            </h1>
          </div>

          {/* SearchBar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search"
                className="w-full pl-10 pr-4 py-2 border border-amber-200 rounded-full focus:ring-2 focus:ring-amber-400 focus:border-transparent transition-all duration-200 bg-amber-50/50 text-amber-900 placeholder-amber-400 hover:bg-amber-100/50"
              />
            </div>
          </div>

          {/* RightIcon */}
          <div className="flex items-center space-x-2">
            <button className="relative p-2 text-amber-600 hover:text-amber-800 transition-all duration-200 hover:scale-110">
              <Bell className="w-5 h-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
            </button>
            <button className="p-2 text-amber-600 hover:text-amber-800 transition-all duration-200 hover:scale-110">
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
              <button className="text-amber-700 hover:text-amber-900 transition-all duration-200 flex items-center font-medium">
                Clothing
                <svg className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <a href="#" className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium">New Arrivals</a>
            <a href="#" className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium">Sale</a>
            <a href="#" className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium">Brands</a>
            <a href="#" className="text-amber-700 hover:text-amber-900 transition-all duration-200 font-medium">Customer Service</a>
          </div>
        </nav>
      </div>
    </header>
  );
}
