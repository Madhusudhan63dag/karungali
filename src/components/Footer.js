import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Sacred Home', href: '#home', message: 'Begin your spiritual journey' },
    { name: 'Divine Heritage', href: '#about', message: 'Discover ancient wisdom' },
    { name: 'Sacred Collection', href: '#product', message: 'Find your divine protection' },
    { name: 'Blessed Souls', href: '#reviews', message: 'Read transformation stories' },
    { name: 'Order Divine Mala', href: '/checkout', isRoute: true, message: 'Embrace sacred protection now', isCTA: true },
    { name: 'Call for Blessing', href: 'tel:+919030648333', message: 'Speak with spiritual guide', isCTA: true }
  ];

  const sacredServices = [
    { 
      name: 'Divine Protection Mala', 
      description: 'Sacred Karungali mala for spiritual shield',
      action: 'Order Now',
      href: '/checkout'
    },
    { 
      name: 'Blessed Consultation', 
      description: 'Personal spiritual guidance and mala selection',
      action: 'Call +91 9030648333',
      href: 'tel:+919030648333'
    },
    { 
      name: 'Authentic Blessing', 
      description: 'Each mala blessed with sacred mantras',
      action: 'Get Blessed Mala',
      href: '/checkout'
    },
    { 
      name: 'Spiritual Journey', 
      description: 'Transform your life with divine energy',
      action: 'Start Journey',
      href: '/checkout'
    }
  ];

  const spiritualCTAs = [
    {
      title: 'Divine Protection Awaits',
      description: 'Shield yourself from negative energies',
      action: 'Order Sacred Mala',
      href: '/checkout',
      price: '₹1,290'
    },
    {
      title: 'Spiritual Guidance',
      description: 'Speak with our sacred advisors',
      action: 'Call Now',
      href: 'tel:+919030648333',
      price: 'FREE'
    },
    {
      title: 'Blessed Prosperity',
      description: 'Attract abundance and positive energy',
      action: 'Get Blessed',
      href: '/checkout',
      price: '₹1,290'
    }
  ];

  const socialLinks = [
    { 
      name: 'Facebook', 
      href: 'https://www.facebook.com/profile.php?id=61576906157013',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    { 
      name: 'Instagram', 
      href: 'https://www.instagram.com/shilajit_offical/',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      )
    },
    { 
      name: 'YouTube', 
      href: 'https://www.youtube.com/@shilajit_official',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="relative bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Sacred Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-radial from-amber-500/20 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-radial from-yellow-400/15 to-transparent rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
      </div>

      {/* Sacred Pattern Overlay */}
      <div className="absolute inset-0 opacity-3">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="footer-sacred-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="0.5" fill="currentColor" className="text-amber-400"/>
              <circle cx="5" cy="5" r="0.3" fill="currentColor" className="text-amber-500"/>
              <circle cx="15" cy="15" r="0.3" fill="currentColor" className="text-amber-500"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-sacred-pattern)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Sacred Header Section */}
        <div className="pt-20 pb-12">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            {/* Sacred Logo Container */}
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 rounded-full blur-2xl"></div>
              <div className="relative bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-3xl p-8 border border-amber-500/30 backdrop-blur-sm">
                <img 
                  src={logo} 
                  alt="Sacred Karungali Collection" 
                  className="h-20 mx-auto mb-4 filter drop-shadow-lg"
                />
                <div className="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-amber-400/50"></div>
                <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-amber-400/50"></div>
              </div>
            </div>

            <h3 className="text-4xl md:text-5xl font-bold font-serif mb-4 tracking-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400">
                Sacred Karungali
              </span>
            </h3>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6"></div>
            
            <p className="text-amber-100/80 text-lg leading-relaxed max-w-2xl mx-auto font-light mb-8">
              Transform your life with divine protection. Each sacred piece blessed with ancient mantras for your spiritual journey.
            </p>

            {/* Main CTA */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="/checkout"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-3 text-lg tracking-wide overflow-hidden relative"
              >
                <span className="relative z-10">Order Sacred Protection - ₹1,290</span>
                <svg className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>

              <motion.a
                href="tel:+919030648333"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-transparent border-2 border-amber-400/60 text-amber-300 font-bold py-4 px-8 rounded-full hover:bg-amber-400/10 hover:border-amber-400 transition-all inline-flex items-center justify-center gap-3 text-lg tracking-wide"
              >
                <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span>Call for Divine Guidance</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-3 gap-12 pb-12 border-b border-amber-500/20">
          
          {/* Sacred Navigation with Spiritual Messages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <h4 className="text-xl font-bold text-amber-300 font-serif">Sacred Navigation</h4>
            </div>
            
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <div key={index} className="group">
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className={`block p-4 rounded-xl border transition-all duration-300 ${
                        link.isCTA 
                          ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-amber-400/30 hover:border-amber-400/60 hover:bg-amber-500/30' 
                          : 'bg-gradient-to-r from-zinc-900/30 via-zinc-800/20 to-zinc-900/30 border-amber-500/10 hover:border-amber-400/30 group-hover:bg-amber-500/5'
                      }`}
                    >
                      <span className={`font-medium ${link.isCTA ? 'text-amber-200' : 'text-amber-100/80'} group-hover:text-amber-200 block mb-1`}>
                        {link.name}
                      </span>
                      <span className="text-amber-100/50 text-xs">
                        {link.message}
                      </span>
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      className={`block p-4 rounded-xl border transition-all duration-300 ${
                        link.isCTA 
                          ? 'bg-gradient-to-r from-amber-500/20 to-amber-600/10 border-amber-400/30 hover:border-amber-400/60 hover:bg-amber-500/30' 
                          : 'bg-gradient-to-r from-zinc-900/30 via-zinc-800/20 to-zinc-900/30 border-amber-500/10 hover:border-amber-400/30 group-hover:bg-amber-500/5'
                      }`}
                    >
                      <span className={`font-medium ${link.isCTA ? 'text-amber-200' : 'text-amber-100/80'} group-hover:text-amber-200 block mb-1`}>
                        {link.name}
                      </span>
                      <span className="text-amber-100/50 text-xs">
                        {link.message}
                      </span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Sacred Services with Purchase CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <h4 className="text-xl font-bold text-amber-300 font-serif">Sacred Offerings</h4>
            </div>
            
            <div className="space-y-4">
              {sacredServices.map((service, index) => (
                <a 
                  key={index} 
                  href={service.href}
                  className="block p-4 rounded-xl bg-gradient-to-r from-zinc-900/30 via-zinc-800/20 to-zinc-900/30 border border-amber-500/10 hover:border-amber-400/30 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h5 className="text-amber-200 font-semibold group-hover:text-amber-300 transition-colors duration-300">
                      {service.name}
                    </h5>
                    <span className="text-amber-400 text-xs font-bold bg-amber-500/20 px-2 py-1 rounded-full">
                      {service.action}
                    </span>
                  </div>
                  <p className="text-amber-100/60 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Spiritual CTAs Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
              <h4 className="text-xl font-bold text-amber-300 font-serif">Divine Opportunities</h4>
            </div>

            <div className="space-y-4">
              {spiritualCTAs.map((cta, index) => (
                <a
                  key={index}
                  href={cta.href}
                  className="block p-5 rounded-xl bg-gradient-to-br from-amber-500/15 via-amber-600/5 to-amber-500/15 border border-amber-400/30 hover:border-amber-400/60 transition-all duration-300 group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h5 className="text-amber-200 font-bold text-lg group-hover:text-amber-100 transition-colors duration-300">
                      {cta.title}
                    </h5>
                    <span className="text-amber-400 font-bold text-lg">
                      {cta.price}
                    </span>
                  </div>
                  <p className="text-amber-100/70 text-sm mb-3 leading-relaxed">
                    {cta.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-amber-300 font-semibold group-hover:text-amber-200 transition-colors duration-300">
                      {cta.action}
                    </span>
                    <svg className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-8 pt-6 border-t border-amber-500/20">
              <h5 className="text-amber-200 font-semibold mb-4">Follow Our Sacred Journey</h5>
              <div className="flex space-x-4 mb-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group w-12 h-12 bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-xl border border-amber-500/20 flex items-center justify-center hover:border-amber-400/50 transition-all duration-300 text-amber-100/70 hover:text-amber-300"
                    title={social.name}
                  >
                    {social.icon}
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 via-transparent to-amber-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </a>
                ))}
              </div>

              {/* Emergency Spiritual Hotline */}
              <div className="bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/30 rounded-xl p-4">
                <h6 className="text-amber-200 font-bold mb-2">24/7 Spiritual Emergency</h6>
                <p className="text-amber-100/70 text-sm mb-3">Need immediate divine protection?</p>
                <a 
                  href="tel:+919030648333"
                  className="inline-flex items-center gap-2 text-amber-300 font-bold hover:text-amber-200 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                  </svg>
                  Call +91 9030648333
                </a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sacred Copyright Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="py-8 text-center"
        >
          <div className="bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 rounded-2xl border border-amber-500/20 p-6 backdrop-blur-sm">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 border border-amber-400/60 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                </div>
                <p className="text-amber-100/70 text-sm font-medium">
                  © {currentYear} Sacred Karungali Collection. All Rights Reserved.
                </p>
              </div>
              
              <div className="flex items-center gap-6 text-xs text-amber-100/50">
                <span>Blessed with Ancient Wisdom</span>
                <div className="w-px h-4 bg-amber-500/30"></div>
                <span>Crafted with Divine Love</span>
                <div className="w-px h-4 bg-amber-500/30"></div>
                <span>Protected by Sacred Energy</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;