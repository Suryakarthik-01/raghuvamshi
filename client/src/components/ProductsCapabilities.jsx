import React, { useState } from 'react';
import { 
  Rocket, 
  Shield, 
  Bot, 
  Satellite, 
  Plane, 
  Droplet,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const ProductsCapabilities = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedBackground, setSelectedBackground] = useState(0);

  const products = [
    {
      title: 'Aerospace',
      description: 'Advanced aerospace components and systems engineered for the most demanding flight conditions. From structural components to precision instruments.',
      icon: Rocket,
      gradient: 'from-blue-600 to-cyan-500',
      image: '/aerospace.jpg',
      features: ['Aircraft Components', 'Avionics Systems', 'Flight Controls']
    },
    {
      title: 'Defence',
      description: 'Mission-critical defense solutions built to the highest standards of reliability, security, and performance for military applications.',
      icon: Shield,
      gradient: 'from-red-600 to-orange-500',
      image: '/defence.jpg',
      features: ['Tactical Systems', 'Armor Components', 'Communication Gear']
    },
    {
      title: 'Robotics',
      description: 'Cutting-edge robotic systems and automation solutions designed for industrial, medical, and research applications.',
      icon: Bot,
      gradient: 'from-purple-600 to-pink-500',
      image: '/robotics.jpg',
      features: ['Industrial Automation', 'AI Integration', 'Precision Actuators']
    },
    {
      title: 'Space',
      description: 'Space-grade components and systems engineered to withstand the extreme conditions of orbital and deep space missions.',
      icon: Satellite,
      gradient: 'from-indigo-600 to-blue-500',
      image: '/satellite.jpg',
      features: ['Satellite Systems', 'Launch Components', 'Space Instruments']
    },
    {
      title: 'UAVs',
      description: 'Unmanned aerial vehicle systems for surveillance, reconnaissance, delivery, and specialized mission requirements.',
      icon: Plane,
      gradient: 'from-green-600 to-teal-500',
      image: '/UAV.jpg',
      features: ['Drone Platforms', 'Payload Systems', 'Flight Controllers']
    },
    {
      title: 'Oil & Gas',
      description: 'Robust equipment and components designed for harsh environments in oil and gas exploration, extraction, and processing.',
      icon: Droplet,
      gradient: 'from-yellow-600 to-orange-500',
      image: '/oil%20and%20gas.jpeg',
      features: ['Drilling Equipment', 'Pipeline Systems', 'Pressure Vessels']
    }
  ];

  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? products.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSelectedBackground(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === products.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSelectedBackground(newIndex);
  };

  const getCardPosition = (index) => {
    const diff = index - currentIndex;
    const total = products.length;
    
    // Normalize the difference to handle circular array
    let normalizedDiff = diff;
    if (diff > total / 2) normalizedDiff = diff - total;
    if (diff < -total / 2) normalizedDiff = diff + total;
    
    return normalizedDiff;
  };

  return (
    <section className="relative pt-8 pb-20 sm:pt-12 sm:pb-24 lg:pt-16 lg:pb-32 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 transition-all duration-700">
        {selectedBackground !== null ? (
          <>
            <div 
              className="absolute inset-0 bg-cover bg-center transition-all duration-700"
              style={{ 
                backgroundImage: `url(${products[selectedBackground].image})`,
                filter: 'blur(10px)',
                transform: 'scale(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-black/75"></div>
          </>
        ) : (
          <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50"></div>
        )}
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 sm:mb-20 lg:mb-24 relative z-50">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 drop-shadow-lg ${selectedBackground !== null ? 'text-white' : 'text-[rgb(3,46,114)]'}`}>
            Products & Capabilities
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-5 sm:mb-6">
            <div className={`h-1 w-20 sm:w-24 rounded-full ${selectedBackground !== null ? 'bg-gradient-to-r from-transparent to-blue-400' : 'bg-gradient-to-r from-transparent to-blue-500'}`}></div>
            <div className={`h-2.5 w-2.5 rounded-full ${selectedBackground !== null ? 'bg-blue-400 shadow-lg shadow-blue-400/50' : 'bg-blue-500'}`}></div>
            <div className={`h-1 w-20 sm:w-24 rounded-full ${selectedBackground !== null ? 'bg-gradient-to-l from-transparent to-blue-400' : 'bg-gradient-to-l from-transparent to-blue-500'}`}></div>
          </div>
          <p className={`text-base sm:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed drop-shadow-md ${selectedBackground !== null ? 'text-gray-200' : 'text-gray-600'}`}>
            Pioneering innovation across multiple industries with cutting-edge technology and unmatched expertise.
          </p>
        </div>

        {/* Swiper Container */}
        <div className="relative h-[400px] sm:h-[440px] lg:h-[480px] flex items-center justify-center">
          {/* Cards */}
          <div className="relative w-full h-full flex items-center justify-center">
            {products.map((product, index) => {
              const position = getCardPosition(index);
              const IconComponent = product.icon;
              
              // Determine card styling based on position
              const isCenter = position === 0;
              const isLeft = position === -1;
              const isRight = position === 1;
              const isVisible = Math.abs(position) <= 1;

              let cardStyle = {
                position: 'absolute',
                transition: 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                opacity: isVisible ? 1 : 0,
                pointerEvents: isCenter ? 'auto' : 'none',
              };

              if (isCenter) {
                // Center card - foreground, elevated, fully visible
                cardStyle = {
                  ...cardStyle,
                  transform: 'translateX(0%) scale(1)',
                  zIndex: 30,
                  opacity: 1,
                };
              } else if (isLeft) {
                // Left card - partially behind, slightly transparent
                cardStyle = {
                  ...cardStyle,
                  transform: 'translateX(-80%) scale(0.85)',
                  zIndex: 10,
                  opacity: 0.4,
                };
              } else if (isRight) {
                // Right card - partially behind, slightly transparent
                cardStyle = {
                  ...cardStyle,
                  transform: 'translateX(80%) scale(0.85)',
                  zIndex: 10,
                  opacity: 0.4,
                };
              } else {
                // Hidden cards
                cardStyle = {
                  ...cardStyle,
                  transform: position < 0 ? 'translateX(-150%) scale(0.7)' : 'translateX(150%) scale(0.7)',
                  zIndex: 0,
                  opacity: 0,
                };
              }

              return (
                <div
                  key={index}
                  style={cardStyle}
                  className={`w-full ${isCenter ? 'max-w-md sm:max-w-lg lg:max-w-xl' : 'max-w-sm sm:max-w-md lg:max-w-lg'}`}
                >
                  <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 ${isCenter ? 'hover:shadow-3xl' : ''}`}>
                    {/* Background overlay for non-center cards */}
                    {!isCenter && (
                      <div className="absolute inset-0 bg-black/30 z-10"></div>
                    )}

                    {/* Image Section */}
                    <div className="relative h-44 sm:h-48 lg:h-56 overflow-hidden">
                      {/* Product Image */}
                      <img 
                        src={product.image} 
                        alt={product.title}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                      {/* Subtle Dark Overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 sm:p-7 lg:p-8 relative z-20">
                      <h3 className="text-xl sm:text-2xl font-bold mb-3 text-gray-800">
                        {product.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                        {product.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2 mb-5">
                        {product.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2.5">
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${product.gradient}`}></div>
                            <span className="text-sm sm:text-base text-gray-700 font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button - only visible on center card */}
                      {isCenter && (
                        <button className={`w-full py-3 px-6 bg-gradient-to-r ${product.gradient} text-white text-sm sm:text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}>
                          Learn More
                        </button>
                      )}
                    </div>

                    {/* Corner decoration */}
                    <div className={`absolute top-6 right-6 w-16 h-16 bg-gradient-to-br ${product.gradient} opacity-20 rounded-2xl transform rotate-12`}></div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-6 lg:-left-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
            aria-label="Previous product"
          >
            <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 group-hover:text-blue-600 transition-colors" strokeWidth={2.5} />
          </button>
          
          <button
            onClick={handleNext}
            className="absolute -right-4 sm:-right-6 lg:-right-8 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white p-3 sm:p-4 rounded-full shadow-xl hover:shadow-2xl transform hover:scale-110 transition-all duration-300 group"
            aria-label="Next product"
          >
            <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7 text-gray-800 group-hover:text-blue-600 transition-colors" strokeWidth={2.5} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center items-center space-x-3 mt-12 sm:mt-14 lg:mt-16 relative z-50">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? 'w-12 h-3 bg-blue-600'
                  : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to product ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsCapabilities;
