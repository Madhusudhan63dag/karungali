import React, { useState } from 'react';
import about from '../assets/product3.png';
import lab from '../assets/lab.png';
import careful from '../assets/careful.png';
import pre from '../assets/package.png';
import banner4 from '../assets/4.webp';
import product from '../assets/product4.png';
import banner3 from '../assets/banner3.jpg';

const About = () => {
  const [activeTab, setActiveTab] = useState('heritage');

  return (
    <section id="about" className="relative py-16 bg-black">
      {/* Floating Sacred Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-2 h-2 bg-amber-400 rounded-full opacity-60 animate-bounce" style={{animationDelay: '0s'}}></div>
        <div className="absolute top-40 right-1/3 w-1 h-1 bg-amber-300 rounded-full opacity-80 animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-32 left-1/2 w-1.5 h-1.5 bg-amber-500 rounded-full opacity-70 animate-bounce" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 right-1/4 w-2 h-2 bg-amber-200 rounded-full opacity-50 animate-bounce" style={{animationDelay: '3s'}}></div>
      </div>

      <div className="relative z-10 px-6">
        
        {/* Hexagonal Header Design */}
        <div className="text-center mb-16">
          <div className="relative inline-block mb-8">
            <div className="hexagon bg-gradient-to-br from-zinc-900 to-black border-2 border-amber-400/40 p-6">
              <span className="text-amber-300 text-sm font-bold tracking-[0.3em] uppercase">Sacred Heritage</span>
            </div>
          </div>
          
          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            KARUNGALI
          </h2>
          <div className="w-20 h-1 bg-amber-400 mx-auto mb-6"></div>
          <p className="text-xl text-amber-100/80 max-w-2xl mx-auto font-light">
            Ancient Ebony Wood • Divine Protection • Spiritual Power
          </p>
        </div>

        {/* Interactive Tab System */}
        <div className="mb-16">
          <div className="flex justify-center mb-8">
            <div className="flex bg-zinc-900/50 rounded-full p-2 border border-amber-500/30">
              {[
                { id: 'heritage', label: 'Sacred Heritage' },
                { id: 'power', label: 'Divine Power' },
                { id: 'craftsmanship', label: 'Craftsmanship' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full font-medium text-sm transition-all duration-300 ${
                    activeTab === tab.id
                      ? 'bg-amber-500 text-black shadow-lg'
                      : 'text-amber-200 hover:text-amber-100'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="min-h-[400px]">
            {activeTab === 'heritage' && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Ancient Sacred Wood</h3>
                  <div className="space-y-4 text-amber-100/90 text-lg leading-relaxed">
                    <p>
                      Karungali, the sacred black ebony wood, has been revered for centuries in Indian spiritual traditions. 
                      This divine material is believed to absorb negative energies and provide powerful protection.
                    </p>
                    <p>
                      Each piece carries the wisdom of ancient trees, naturally blackened through time, 
                      making it a perfect conduit for spiritual energy and divine blessings.
                    </p>
                  </div>
                </div>
                <div className="relative">
                  <div className="diamond-frame">
                    <img src={about} alt="Sacred Karungali" className="w-full h-full object-contain rounded-lg" />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'power' && (
              <div className="grid md:grid-cols-2 gap-12 items-center fade-in">
                <div className="order-2 md:order-1 relative">
                  <div className="">
                    <img src={product} alt="Karungali Power" className="w-full h-full object-contain rounded-lg" />
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <h3 className="text-3xl font-bold text-white mb-6">Spiritual Benefits</h3>
                  <div className="grid gap-4">
                    {[
                      'Shields against negative energies',
                      'Enhances meditation depth',
                      'Attracts prosperity and success',
                      'Promotes emotional balance',
                      'Strengthens spiritual connection'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 bg-zinc-900/30 rounded-lg border-l-4 border-amber-400">
                        <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                        <span className="text-amber-100/90">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'craftsmanship' && (
              <div className="fade-in">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-white mb-4">Sacred Creation Process</h3>
                  <div className="w-16 h-1 bg-amber-400 mx-auto"></div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    { icon: careful, title: 'Sacred Selection', desc: 'Hand-picked from naturally fallen sacred ebony trees' },
                    { icon: lab, title: 'Blessed Purification', desc: 'Cleansed with mantras and verified for authenticity' },
                    { icon: pre, title: 'Divine Crafting', desc: 'Shaped by master artisans with spiritual devotion' }
                  ].map((step, index) => (
                    <div key={index} className="text-center group">
                      <div className="relative mb-6 mx-auto w-24 h-24">
                        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-full group-hover:scale-110 transition-transform duration-300"></div>
                        <div className="relative w-full h-full bg-zinc-900 rounded-full border-2 border-amber-400/40 flex items-center justify-center group-hover:border-amber-400 transition-colors duration-300">
                          <img src={step.icon} alt={step.title} className="w-8 h-8 filter brightness-0 invert opacity-80" />
                        </div>
                      </div>
                      <h4 className="text-xl font-bold text-amber-300 mb-3">{step.title}</h4>
                      <p className="text-amber-100/80 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Geometric Banner Section */}
        <div className="mb-16">
          <div className="relative overflow-hidden">
            <div className="triangle-clip bg-gradient-to-r from-amber-600/20 to-amber-400/10 p-12">
              <img src={banner4} alt="Sacred Collection" className="w-full h-full object-cover rounded-lg opacity-90" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-2xl md:text-4xl font-bold text-white">Sacred Mastery</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .hexagon {
          width: 120px;
          height: 104px;
          position: relative;
          margin: 52px auto;
        }
        .hexagon:before,
        .hexagon:after {
          content: "";
          position: absolute;
          width: 0;
          border-left: 60px solid transparent;
          border-right: 60px solid transparent;
        }
        .hexagon:before {
          bottom: 100%;
          border-bottom: 30px solid rgba(245, 158, 11, 0.4);
        }
        .hexagon:after {
          top: 100%;
          border-top: 30px solid rgba(245, 158, 11, 0.4);
        }

        .diamond-frame {
          width: 400px;
          height: 400px;
          transform: rotate(45deg);
          overflow: hidden;
          border: 3px solid rgba(245, 158, 11, 0.4);
          margin: 40px auto;
        }
        .diamond-frame img {
          transform: rotate(-45deg) scale(1.4);
          transform-origin: center;
        }

        .triangle-clip {
          clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
          position: relative;
        }

        .fade-in {
          animation: fadeIn 0.5s ease-in-out;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default About;
