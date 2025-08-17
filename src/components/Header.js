import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import banner1 from '../assets/1.webp';
import banner2 from '../assets/2.webp';

const Header = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const banners = [banner1, banner2];
  
  useEffect(() => {
    // Auto-rotate between banners every 5 seconds
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [banners.length]);
  
  return (
    <header id='home' className="relative w-full">
      <Navbar />
      
      {/* Banner container with aspect ratio for 1280 x 520 */}
      <div className="relative w-full h-[130px] sm:h-[260px] md:h-[390px] lg:h-[520px] max-w-[1280px] mx-auto overflow-hidden">
        {banners.map((banner, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={banner} 
              alt={`Sacred Karungali Banner ${index + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dark overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>
          </div>
        ))}

        {/* Banner indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {banners.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentBanner(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentBanner 
                  ? 'bg-amber-400 scale-110 shadow-lg shadow-amber-400/50' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Switch to banner ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
