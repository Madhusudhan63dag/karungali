import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const Review = () => {
  const scrollRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const reviews = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Chennai, Tamil Nadu",
      rating: 5,
      review: "The Karungali mala has transformed my spiritual practice. I feel protected from negative energies and my meditation has deepened significantly. Truly blessed experience!",
      verified: true,
      date: "2 weeks ago",
      benefit: "Spiritual Protection"
    },
    {
      id: 2,
      name: "Priya Nair",
      location: "Kochi, Kerala",
      rating: 5,
      review: "Amazing sacred energy! I wear my Karungali bracelet daily and notice immediate peace of mind. The negative thoughts have reduced remarkably.",
      verified: true,
      date: "1 month ago",
      benefit: "Mental Peace"
    },
    {
      id: 3,
      name: "Venkatesh Reddy",
      location: "Hyderabad, Telangana",
      rating: 5,
      review: "This authentic Karungali mala is powerful! My business has improved, family harmony increased, and I feel divinely protected every day.",
      verified: true,
      date: "3 weeks ago",
      benefit: "Divine Blessings"
    },
    {
      id: 4,
      name: "Dr. Lakshmi Rao",
      location: "Bangalore, Karnataka",
      rating: 5,
      review: "As someone who studies sacred geometry, I can confirm this Karungali is genuine. The energy vibrations are exceptional and spiritually uplifting.",
      verified: true,
      date: "1 week ago",
      benefit: "Authentic Quality"
    },
    {
      id: 5,
      name: "Arun Krishnan",
      location: "Coimbatore, Tamil Nadu",
      rating: 5,
      review: "Incredible protection from evil eye! Since wearing this sacred Karungali, negative people avoid me and positive opportunities flow naturally.",
      verified: true,
      date: "2 months ago",
      benefit: "Evil Eye Protection"
    },
    {
      id: 6,
      name: "Meera Menon",
      location: "Thiruvananthapuram, Kerala",
      rating: 5,
      review: "Best spiritual investment! Mental clarity improved, obstacles removed, and divine grace flows. This sacred wood truly works miracles.",
      verified: true,
      date: "3 weeks ago",
      benefit: "Obstacle Removal"
    },
    {
      id: 7,
      name: "Suresh Iyer",
      location: "Madurai, Tamil Nadu",
      rating: 5,
      review: "This Karungali mala strengthened my connection to divine energy. Prayers are answered faster and spiritual growth accelerated significantly.",
      verified: true,
      date: "1 month ago",
      benefit: "Spiritual Growth"
    },
    {
      id: 8,
      name: "Kavitha Pillai",
      location: "Mangalore, Karnataka",
      rating: 5,
      review: "Powerful protection and prosperity! My husband's career improved, children's studies enhanced, and home filled with positive vibrations.",
      verified: true,
      date: "2 weeks ago",
      benefit: "Family Prosperity"
    }
  ];

  // Enhanced auto-scroll functionality
  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationFrame;
    let isHovered = false;
    let isUserScrolling = false;
    let userScrollTimeout;

    const smoothScroll = () => {
      if (!isHovered && !isUserScrolling && scrollContainer) {
        const scrollSpeed = isMobile ? 0.5 : 1; // Slower on mobile
        const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        // Smooth continuous scroll
        scrollContainer.scrollLeft += scrollSpeed;
        
        // Reset to beginning when reaching near the end (seamless loop)
        if (scrollContainer.scrollLeft >= maxScrollLeft * 0.66) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationFrame = requestAnimationFrame(smoothScroll);
    };

    const handleMouseEnter = () => {
      isHovered = true;
    };

    const handleMouseLeave = () => {
      isHovered = false;
    };

    const handleUserScroll = () => {
      isUserScrolling = true;
      clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 2000); // Resume auto-scroll after 2 seconds of inactivity
    };

    const handleTouchStart = () => {
      isUserScrolling = true;
    };

    const handleTouchEnd = () => {
      clearTimeout(userScrollTimeout);
      userScrollTimeout = setTimeout(() => {
        isUserScrolling = false;
      }, 3000); // Longer delay on mobile
    };

    // Start smooth scrolling
    animationFrame = requestAnimationFrame(smoothScroll);

    // Event listeners
    scrollContainer.addEventListener('mouseenter', handleMouseEnter);
    scrollContainer.addEventListener('mouseleave', handleMouseLeave);
    scrollContainer.addEventListener('scroll', handleUserScroll, { passive: true });
    scrollContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    scrollContainer.addEventListener('touchend', handleTouchEnd, { passive: true });

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
      clearTimeout(userScrollTimeout);
      if (scrollContainer) {
        scrollContainer.removeEventListener('mouseenter', handleMouseEnter);
        scrollContainer.removeEventListener('mouseleave', handleMouseLeave);
        scrollContainer.removeEventListener('scroll', handleUserScroll);
        scrollContainer.removeEventListener('touchstart', handleTouchStart);
        scrollContainer.removeEventListener('touchend', handleTouchEnd);
      }
    };
  }, [isMobile]);

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-sm sm:text-lg ${
          index < rating ? 'text-amber-400' : 'text-zinc-600'
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gradient-to-b from-black via-zinc-950 to-zinc-900 relative overflow-hidden">
      {/* Sacred Background Elements - Responsive */}
      <div className="absolute inset-0 opacity-5 sm:opacity-10">
        <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-radial from-amber-500/20 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-16 sm:bottom-32 right-10 sm:right-20 w-56 sm:w-80 h-56 sm:h-80 bg-gradient-radial from-yellow-400/15 to-transparent rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* Sacred Pattern Overlay */}
      <div className="absolute inset-0 opacity-3 sm:opacity-5">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="sacred-dots-mobile" x="0" y="0" width={isMobile ? "20" : "15"} height={isMobile ? "20" : "15"} patternUnits="userSpaceOnUse">
              <circle cx={isMobile ? "10" : "7.5"} cy={isMobile ? "10" : "7.5"} r={isMobile ? "0.8" : "1"} fill="currentColor" className="text-amber-400"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#sacred-dots-mobile)"/>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Sacred Header - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 sm:mb-20"
        >
          <div className="inline-flex items-center gap-2 sm:gap-4 mb-6 sm:mb-8 px-4 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-amber-500/30 rounded-full backdrop-blur-sm">
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full animate-pulse"></div>
            <span className="text-amber-200 text-xs sm:text-sm font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase">Sacred Testimonials</span>
            <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full animate-pulse"></div>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-8 font-serif leading-tight tracking-tight">
            Blessed Souls
            <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400">
              Share Their Journey
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-base sm:text-xl text-amber-100/80 leading-relaxed mb-4 sm:mb-6 px-4">
              Real experiences from devoted souls who have embraced the divine protection and spiritual power of Sacred Karungali
            </p>
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          </div>
        </motion.div>

        {/* Sacred Reviews Container - Mobile Optimized */}
        <div className="relative mb-12 sm:mb-20">
          {/* Mobile-friendly Gradient Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-r from-black via-zinc-950/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-32 bg-gradient-to-l from-zinc-900 via-zinc-950/80 to-transparent z-10 pointer-events-none"></div>
          
          {/* Scrolling Sacred Reviews - Mobile Responsive */}
          <div
            ref={scrollRef}
            className="flex space-x-4 sm:space-x-8 overflow-x-auto py-4 sm:py-6 will-change-scroll scrollbar-hide"
            style={{ 
              scrollbarWidth: 'none', 
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch'
            }}
          >
            {[...reviews, ...reviews, ...reviews].map((review, index) => (              
              <motion.div
                key={`${review.id}-${index}`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="flex-shrink-0 w-72 sm:w-80 md:w-96 bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-amber-500/20 backdrop-blur-sm hover:border-amber-400/40 transition-all duration-500 transform-gpu hover:scale-105 shadow-xl sm:shadow-2xl hover:shadow-amber-500/10"
              >
                {/* Sacred Corner Decorations - Smaller on Mobile */}
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-t-2 border-r-2 border-amber-400/50"></div>
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-l-2 border-amber-400/50"></div>
                <div className="absolute bottom-3 sm:bottom-4 right-3 sm:right-4 w-4 sm:w-6 h-4 sm:h-6 border-b-2 border-r-2 border-amber-400/50"></div>

                {/* Benefit Badge - Mobile Responsive */}
                <div className="mb-4 sm:mb-6">
                  <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-amber-500/20 to-amber-600/10 border border-amber-400/30 rounded-full text-amber-300 text-xs sm:text-sm font-medium tracking-wide">
                    {review.benefit}
                  </span>
                </div>

                {/* Sacred Rating - Mobile Friendly */}
                <div className="flex items-center justify-center mb-4 sm:mb-6 p-3 sm:p-4 bg-gradient-to-r from-zinc-800/50 to-zinc-700/30 rounded-xl border border-amber-500/20">
                  <div className="flex items-center gap-1 sm:gap-2">
                    {renderStars(review.rating)}
                    <span className="ml-2 sm:ml-3 text-amber-200 font-semibold text-sm sm:text-lg">({review.rating}/5)</span>
                  </div>
                </div>

                {/* Sacred Review Text - Mobile Optimized */}
                <div className="mb-6 sm:mb-8 relative">
                  <div className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 text-2xl sm:text-4xl text-amber-400/30 font-serif">"</div>
                  <p className="text-amber-100/90 text-sm sm:text-base leading-relaxed pl-4 sm:pl-6 font-light">
                    {isMobile ? (review.review.length > 120 ? review.review.substring(0, 120) + '...' : review.review) : review.review}
                  </p>
                  <div className="absolute -bottom-2 sm:-bottom-4 -right-1 sm:-right-2 text-2xl sm:text-4xl text-amber-400/30 font-serif rotate-180">"</div>
                </div>

                {/* Sacred Customer Info - Mobile Layout */}
                <div className="border-t border-amber-500/20 pt-4 sm:pt-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-amber-200 text-sm sm:text-lg">{review.name}</h4>
                        {review.verified && (
                          <div className="w-4 sm:w-6 h-4 sm:h-6 bg-amber-500 rounded-full flex items-center justify-center">
                            <span className="text-black text-xs font-bold">✓</span>
                          </div>
                        )}
                      </div>
                      <p className="text-amber-100/60 text-xs sm:text-sm mb-1">{review.location}</p>
                      <p className="text-amber-100/40 text-xs">{review.date}</p>
                    </div>
                    
                    {/* Sacred Verification - Smaller on Mobile */}
                    <div className="text-center">
                      <div className="w-8 sm:w-12 h-8 sm:h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg sm:rounded-xl flex items-center justify-center mb-1 sm:mb-2 border border-amber-400/30">
                        <div className="w-4 sm:w-6 h-4 sm:h-6 border border-amber-400/60 rounded-full flex items-center justify-center">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-amber-400 rounded-full"></div>
                        </div>
                      </div>
                      <span className="text-xs text-amber-300 font-medium tracking-wide">BLESSED</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Sacred Statistics - Mobile Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-20 bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-12 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12 text-center">
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-5xl font-bold text-amber-400 tracking-tight">5.0/5</div>
              <div className="text-amber-100/70 font-medium tracking-wide text-xs sm:text-base">Sacred Rating</div>
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-5xl font-bold text-amber-400 tracking-tight">1,000+</div>
              <div className="text-amber-100/70 font-medium tracking-wide text-xs sm:text-base">Blessed Souls</div>
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-5xl font-bold text-amber-400 tracking-tight">100%</div>
              <div className="text-amber-100/70 font-medium tracking-wide text-xs sm:text-base">Divine Protection</div>
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            </div>
            <div className="space-y-2 sm:space-y-3">
              <div className="text-3xl sm:text-5xl font-bold text-amber-400 tracking-tight">Sacred</div>
              <div className="text-amber-100/70 font-medium tracking-wide text-xs sm:text-base">Guarantee</div>
              <div className="w-8 sm:w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
            </div>
          </div>
        </motion.div>

        {/* Sacred CTA Section - Mobile Optimized */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 border border-amber-500/30 rounded-2xl sm:rounded-3xl p-6 sm:p-12 backdrop-blur-sm relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 via-transparent to-amber-500/5"></div>
          
          <div className="relative space-y-6 sm:space-y-8">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-amber-400 rounded-full animate-pulse"></div>
              <span className="text-amber-300 text-xs sm:text-sm font-medium tracking-widest uppercase">Join the Sacred Circle</span>
              <div className="w-2 sm:w-3 h-2 sm:h-3 bg-amber-400 rounded-full animate-pulse"></div>
            </div>
            
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white font-serif mb-4 sm:mb-6 tracking-tight">
              Begin Your Sacred Journey
            </h3>
            
            <div className="w-16 sm:w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mb-6 sm:mb-8"></div>
            
            <p className="text-amber-100/80 text-sm sm:text-lg leading-relaxed max-w-3xl mx-auto mb-8 sm:mb-10 px-4">
              Experience the same divine protection and spiritual transformation that thousands of blessed souls celebrate daily
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center px-4">
              <motion.a
                href="tel:+919030648333"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-black font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg tracking-wide overflow-hidden relative"
              >
                <span className="relative z-10">Call for Divine Guidance</span>
                <svg className="w-4 sm:w-6 h-4 sm:h-6 relative z-10 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
              
              <motion.a
                href="/checkout"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group bg-transparent border-2 border-amber-400/60 text-amber-300 font-bold py-3 sm:py-4 px-6 sm:px-10 rounded-full hover:bg-amber-400/10 hover:border-amber-400 transition-all inline-flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-lg tracking-wide"
              >
                <span>Order Sacred Protection</span>
                <svg className="w-4 sm:w-6 h-4 sm:h-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Hide scrollbar globally */}
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

export default Review;
