import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/productone.png';
import fassi from '../assets/fssai-color.png';
import gmp from '../assets/gmp.webp';
import banner2 from '../assets/banner2.png';

const Product = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  
  // Refs for synchronized scrolling
  const imageContainerRef = useRef(null);
  const productSectionRef = useRef(null);

  // Product images
  const productImages = [product1, product2, product3];

  // Sacred features with spiritual benefits
  const sacredFeatures = [
    {
      title: "Divine Protection",
      description: "Shields against negative energies and provides spiritual defense",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
          <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
        </div>
      )
    },
    {
      title: "Spiritual Growth", 
      description: "Enhances meditation depth and spiritual consciousness",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      title: "Mental Peace",
      description: "Promotes emotional stability and inner tranquility",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
          <div className="w-4 h-1 bg-white rounded-full"></div>
        </div>
      )
    },
    {
      title: "Prosperity Attraction",
      description: "Draws abundance and positive energy vibrations",
      icon: (
        <div className="w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center">
          <div className="w-2 h-2 bg-white rounded-full mx-auto"></div>
        </div>
      )
    }
  ];

  // Simplified and fixed synchronized scrolling
  useEffect(() => {
    const handleScroll = () => {
      const imageContainer = imageContainerRef.current;
      const productSection = productSectionRef.current;
      
      if (!imageContainer || !productSection) return;

      // Get the section's position relative to viewport
      const sectionRect = productSection.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      // Only apply scroll effect when section is in view
      if (sectionRect.top <= viewportHeight && sectionRect.bottom >= 0) {
        // Calculate how much of the section has been scrolled
        const sectionTop = sectionRect.top;
        const sectionHeight = sectionRect.height;
        
        // Calculate scroll progress (0 to 1)
        let scrollProgress = 0;
        if (sectionTop <= 0) {
          scrollProgress = Math.min(Math.abs(sectionTop) / (sectionHeight - viewportHeight), 1);
        }
        
        // Apply smooth transform
        const maxTranslate = 200; // Maximum pixels to translate
        const translateY = scrollProgress * maxTranslate;
        
        imageContainer.style.transform = `translateY(-${translateY}px)`;
      }
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledScroll);
    };
  }, []);

  return (
    <section ref={productSectionRef} id="product" className="py-24 bg-gradient-to-b from-zinc-950 via-black to-zinc-900">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Professional Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 mb-8 px-8 py-4 bg-gradient-to-r from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-amber-500/30 rounded-full backdrop-blur-sm">
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <span className="text-amber-200 text-sm font-medium tracking-[0.2em] uppercase">Sacred Heritage Collection</span>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold text-white mb-8 font-serif leading-tight tracking-tight">
            Karungali Sacred
            <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-400">
              Mala Collection
            </span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-amber-100/80 leading-relaxed mb-6">
              Embrace the ancient power of sacred ebony wood, meticulously crafted for divine protection and spiritual transformation
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          
          {/* Left - Image Gallery with Fixed Scroll */}
          <div className="lg:sticky lg:top-8">
            <motion.div
              ref={imageContainerRef}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative transition-transform duration-100 ease-out will-change-transform"
            >
              {/* Main Display Container */}
              <div className="relative bg-gradient-to-br from-zinc-900/60 via-zinc-800/40 to-zinc-900/60 rounded-3xl p-8 border border-amber-500/20 backdrop-blur-sm overflow-hidden">
                
                {/* Professional corner accents */}
                <div className="absolute top-6 left-6 w-8 h-8 border-t-2 border-l-2 border-amber-400/60"></div>
                <div className="absolute top-6 right-6 w-8 h-8 border-t-2 border-r-2 border-amber-400/60"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 border-b-2 border-l-2 border-amber-400/60"></div>
                <div className="absolute bottom-6 right-6 w-8 h-8 border-b-2 border-r-2 border-amber-400/60"></div>

                {/* Main Product Display */}
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-amber-50 to-white shadow-2xl">
                  <img 
                    src={productImages[selectedImageIndex]}
                    alt={`Karungali Sacred Collection - View ${selectedImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-black/5 pointer-events-none"></div>
                </div>

                {/* Professional Navigation */}
                <div className="flex justify-center gap-4 mt-8">
                  {productImages.map((_, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`w-12 h-12 rounded-xl border-2 transition-all duration-300 overflow-hidden relative ${
                        selectedImageIndex === index 
                          ? 'border-amber-400 shadow-lg shadow-amber-400/30' 
                          : 'border-amber-500/30 hover:border-amber-400/60'
                      }`}
                    >
                      <img 
                        src={productImages[index]} 
                        alt={`Gallery ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                      {selectedImageIndex === index && (
                        <div className="absolute inset-0 bg-amber-400/20"></div>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Professional Certifications */}
              <div className="flex justify-center items-center gap-8 mt-8 p-6 bg-gradient-to-r from-zinc-900/40 via-zinc-800/30 to-zinc-900/40 rounded-2xl border border-amber-500/20 backdrop-blur-sm">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <img src={fassi} alt="Authentic Certification" className="w-8 h-8 opacity-80" />
                  </div>
                  <span className="text-amber-200 text-xs font-medium tracking-wide">AUTHENTIC</span>
                </div>
                
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <img src={gmp} alt="Quality Assured" className="w-8 h-8 opacity-80" />
                  </div>
                  <span className="text-amber-200 text-xs font-medium tracking-wide">CERTIFIED</span>
                </div>
                
                <div className="w-px h-12 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center mb-3 mx-auto">
                    <div className="w-6 h-6 border border-amber-400/60 rounded-full flex items-center justify-center">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                    </div>
                  </div>
                  <span className="text-amber-200 text-xs font-medium tracking-wide">BLESSED</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Scrollable Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            
            {/* Professional Product Title */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white font-serif leading-tight tracking-tight">
                  Sacred Karungali
                  <span className="block text-2xl md:text-3xl text-amber-300 font-light mt-2 tracking-wide">
                    Divine Protection Mala
                  </span>
                </h1>
                
                <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-transparent"></div>
                
                <p className="text-amber-100/80 text-lg leading-relaxed">
                  Handcrafted from authentic ebony wood, each sacred piece carries centuries of spiritual wisdom and divine protection energy.
                </p>
              </div>

              {/* Professional Rating Display */}
              <div className="flex items-center justify-between py-6 px-8 bg-gradient-to-r from-zinc-900/50 via-zinc-800/30 to-zinc-900/50 rounded-xl border border-amber-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="flex text-amber-400 text-lg">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <span className="text-amber-200 font-semibold text-lg">5.0</span>
                </div>
                <div className="w-px h-8 bg-gradient-to-b from-transparent via-amber-500/30 to-transparent"></div>
                <span className="text-amber-100/70 font-medium">1000+ Devotees</span>
              </div>
            </div>

            {/* Professional Features */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-300 font-serif">Sacred Benefits</h3>
              
              <div className="grid gap-4">
                {sacredFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setActiveFeature(index)}
                    className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeFeature === index
                        ? 'bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border-amber-400/50 shadow-lg'
                        : 'bg-gradient-to-r from-zinc-900/30 via-zinc-800/20 to-zinc-900/30 border-amber-500/20 hover:border-amber-400/40'
                    }`}
                  >
                    <div className="flex items-center gap-5">
                      {feature.icon}
                      <div className="flex-1">
                        <h4 className="text-amber-200 font-semibold text-lg mb-2">{feature.title}</h4>
                        <p className="text-amber-100/70 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Extended Content for Scrolling */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-300 font-serif">Sacred Heritage</h3>
              <div className="space-y-4 text-amber-100/80 leading-relaxed">
                <p>
                  Karungali, known as sacred ebony wood, has been revered in ancient Indian traditions for millennia. 
                  This divine material naturally absorbs and transforms negative energies while enhancing spiritual consciousness.
                </p>
                <p>
                  Each bead is carefully selected from naturally fallen branches, ensuring ethical sourcing while maintaining 
                  the wood's inherent sacred properties. The deep black color represents the absorption of negativity and 
                  the protection of divine light.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-300 font-serif">Spiritual Significance</h3>
              <div className="space-y-4 text-amber-100/80 leading-relaxed">
                <p>
                  In Vedic traditions, Karungali is considered one of the most powerful protective materials. 
                  It is believed to shield the wearer from evil eye, negative influences, and spiritual disturbances.
                </p>
                <p>
                  Regular use of Karungali malas during meditation and prayer enhances focus, promotes inner peace, 
                  and accelerates spiritual growth. The wood's natural vibrations align with higher consciousness frequencies.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-300 font-serif">How to Use</h3>
              <div className="space-y-4 text-amber-100/80 leading-relaxed">
                <p>
                  Wear your Karungali mala during meditation, prayer, or daily activities for continuous protection. 
                  The sacred wood works best when in direct contact with your skin, allowing its energy to merge with yours.
                </p>
                <p>
                  For maximum benefit, hold the mala while chanting mantras or during spiritual practices. 
                  The beads will gradually absorb your positive intentions and amplify their power.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-amber-300 font-serif">Care Instructions</h3>
              <div className="space-y-4 text-amber-100/80 leading-relaxed">
                <p>
                  Keep your Karungali mala in a clean, sacred space when not in use. Avoid exposure to harsh chemicals 
                  or excessive moisture. The natural wood may develop a beautiful patina over time, enhancing its spiritual potency.
                </p>
                <p>
                  Periodically cleanse your mala by placing it in sunlight or moonlight for a few hours. 
                  This helps maintain its energy and removes any accumulated negative vibrations.
                </p>
              </div>
            </div>

            {/* Professional Pricing */}
            <div className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-amber-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <div className="space-y-8">
                
                <div className="text-center space-y-4">
                  <div className="space-y-2">
                    <div className="text-5xl font-bold text-amber-400 tracking-tight">₹1,290</div>
                    <div className="text-xl text-amber-100/60 line-through">₹2,999</div>
                    <div className="inline-block px-6 py-2 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full text-sm font-bold tracking-wide">
                      SAVE ₹1,709 (57% OFF)
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-amber-500/20">
                    <span className="text-amber-100/80">Authentic Karungali Mala</span>
                    <span className="font-semibold text-amber-200">₹1,290</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-amber-500/20">
                    <span className="text-amber-100/80">Premium Packaging</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="text-amber-100/80">Sacred Shipping</span>
                    <span className="text-green-400 font-semibold">FREE</span>
                  </div>
                </div>

                {/* Professional Contact Section */}
                <div className="bg-gradient-to-r from-zinc-800/50 via-zinc-700/30 to-zinc-800/50 rounded-xl p-6 space-y-3">
                  <p className="text-amber-200 font-medium text-center">For Spiritual Guidance & Orders</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-3 text-amber-400 font-bold text-lg">
                    <span className="tracking-wide">9030648333</span>
                    <span className="hidden sm:inline text-amber-500/50 text-sm self-center">•</span>
                    <span className="tracking-wide">9030732444</span>
                  </div>
                </div>

                {/* Professional Action Buttons */}
                <div className="space-y-4">
                  <motion.a
                    href="/checkout?price=1290"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-gradient-to-r from-amber-600 via-amber-500 to-amber-400 text-black font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl transition-all text-lg text-center tracking-wide"
                  >
                    Order Sacred Protection
                  </motion.a>
                  
                  <motion.a
                    href="tel:+919030648333"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="block w-full bg-transparent border-2 border-amber-400/60 text-amber-300 font-bold py-4 px-8 rounded-full hover:bg-amber-400/10 hover:border-amber-400 transition-all text-center tracking-wide"
                  >
                    Call for Consultation
                  </motion.a>
                </div>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Professional Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden"
        >
          <img 
            src={banner2} 
            alt="Sacred Karungali Heritage Collection" 
            className="w-full h-48 md:h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-black/70 flex items-center justify-center">
            <div className="text-center space-y-4">
              <h3 className="text-3xl md:text-5xl font-bold text-white font-serif tracking-tight">
                Begin Your Sacred Journey
              </h3>
              <div className="w-16 h-px bg-amber-400 mx-auto"></div>
              <p className="text-amber-200 text-lg tracking-wide">Blessed by Ancient Wisdom</p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Product;
