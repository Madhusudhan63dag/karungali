import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 lg:px-16 py-5 bg-gradient-to-r from-zinc-950 via-gray-950 to-zinc-950 backdrop-blur-md border-b border-amber-400/10 shadow-2xl">
      
      {/* Logo Section */}
      <div className="flex items-center space-x-4">
        <div className="relative group">
          <img 
            src={logo} 
            alt="Karungali Sacred Collection" 
            className="w-20 h-20 lg:w-24 lg:h-24 object-contain transition-all duration-500 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-radial from-amber-500/20 via-transparent to-transparent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-md"></div>
        </div>
        
        <div className="hidden md:flex flex-col">
          <h1 className="text-amber-50 font-serif text-xl lg:text-2xl font-semibold tracking-wide leading-tight">
            Sacred Karungali
          </h1>
          <span className="text-amber-300/60 text-xs font-light tracking-[0.2em] uppercase mt-1 border-l-2 border-amber-500/30 pl-2">
            Authentic Spiritual Malas
          </span>
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center">
        <div className="flex items-center bg-zinc-900/60 backdrop-blur-sm rounded-full px-1 py-1 border border-amber-400/15 shadow-inner">
          {[
            { href: "#home", label: "Home" },
            { href: "#about", label: "Heritage" },
            { href: "#product", label: "Sacred Collection" },
            { href: "#reviews", label: "Testimonials" },
            { href: "#contact", label: "Contact" }
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="group relative px-6 py-3 mx-1 rounded-full transition-all duration-400 hover:bg-amber-500/8 hover:shadow-inner"
            >
              <span className="text-amber-50 font-medium text-sm tracking-wide group-hover:text-amber-200 transition-colors duration-300 relative z-10">
                {item.label}
              </span>
              
              {/* Sophisticated underline effect */}
              <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent transition-all duration-500 group-hover:w-4/5"></div>
              
              {/* Subtle glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
              
              {/* Sacred dot accent */}
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-600 shadow-sm shadow-amber-400/50 scale-0 group-hover:scale-100"></div>
            </a>
          ))}
        </div>
      </div>
      
      {/* CTA and Mobile Menu */}
      <div className="flex items-center space-x-4">
        
        {/* Professional CTA Button */}
        <a 
          href="/checkout"
          className="group relative overflow-hidden bg-gradient-to-r from-amber-600 via-amber-500 to-yellow-500 text-zinc-900 font-semibold px-6 lg:px-8 py-3 lg:py-3.5 rounded-full transition-all duration-500 shadow-[0_8px_30px_rgba(245,158,11,0.25)] hover:shadow-[0_15px_40px_rgba(245,158,11,0.4)] hover:-translate-y-0.5 border border-amber-300/20"
        >
          <span className="relative z-10 flex items-center space-x-2 text-sm lg:text-base font-medium">
            <svg className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"/>
            </svg>
            <span>Order Sacred Mala</span>
          </span>
          
          {/* Subtle overlay effects */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
          <div className="absolute inset-0 bg-white/5 rounded-full scale-0 group-hover:scale-105 transition-transform duration-500"></div>
        </a>

        {/* Professional Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative p-3 rounded-xl bg-zinc-800/50 border border-amber-400/20 text-amber-100 hover:text-amber-300 hover:bg-zinc-700/50 transition-all duration-300 group"
          aria-label="Toggle navigation menu"
        >
          <div className="w-5 h-5 flex flex-col justify-center items-center">
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-0.5' : 'mb-1'}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'mb-1'}`}></span>
            <span className={`w-5 h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`}></span>
          </div>
        </button>
      </div>

      {/* Professional Mobile Menu */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          ></div>
          
          {/* Mobile Menu Panel */}
          <div className="absolute top-full right-0 w-80 bg-gradient-to-b from-zinc-900 via-gray-900 to-zinc-950 border border-amber-400/20 shadow-2xl lg:hidden z-50 rounded-bl-2xl overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col space-y-3">
                {[
                  { href: "#home", label: "Home", desc: "Welcome to sacred journey" },
                  { href: "#about", label: "Sacred Heritage", desc: "Our spiritual legacy" },
                  { href: "#product", label: "Divine Collection", desc: "Authentic karungali malas" },
                  { href: "#reviews", label: "Devotee Stories", desc: "Testimonials & experiences" },
                  { href: "#contact", label: "Connect With Us", desc: "Get in touch" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="group flex flex-col py-4 px-4 rounded-xl bg-zinc-800/30 border border-amber-400/10 text-amber-100 hover:text-amber-200 hover:bg-amber-500/10 hover:border-amber-400/30 transition-all duration-400"
                  >
                    <span className="font-medium text-base mb-1 group-hover:text-amber-300 transition-colors duration-300">
                      {item.label}
                    </span>
                    <span className="text-amber-300/60 text-xs tracking-wide">
                      {item.desc}
                    </span>
                    <div className="mt-2 w-0 h-px bg-gradient-to-r from-amber-400 to-transparent group-hover:w-full transition-all duration-500"></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
