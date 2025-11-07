import React, { useState } from 'react';
import { 
  Cog, 
  Wrench, 
  Cpu, 
  Layers, 
  FileText, 
  Settings, 
  Droplet, 
  Zap, 
  Link2, 
  Radio, 
  Plane 
} from 'lucide-react';

const WhatWeDo = () => {
  const [isPaused, setIsPaused] = useState(false);

  const services = [
    {
      title: 'Manufacturing and Infrastructure',
      description: 'State-of-the-art facilities equipped with cutting-edge technology for large-scale production.',
      icon: Cog,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Engineering',
      description: 'Innovative engineering solutions designed to meet the most demanding specifications.',
      icon: Settings,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Precision Machining',
      description: 'High-precision CNC machining services delivering exceptional accuracy and quality.',
      icon: Wrench,
      gradient: 'from-orange-500 to-red-500'
    },
    {
      title: 'Electro-Mechanical Assembly',
      description: 'Expert assembly services combining electrical and mechanical components seamlessly.',
      icon: Cpu,
      gradient: 'from-green-500 to-teal-500'
    },
    {
      title: 'Composites',
      description: 'Advanced composite materials manufacturing for lightweight, high-strength applications.',
      icon: Layers,
      gradient: 'from-indigo-500 to-blue-500'
    },
    {
      title: 'Sheet Metal Fabrication',
      description: 'Custom sheet metal fabrication with precision cutting, bending, and forming capabilities.',
      icon: FileText,
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'High Precision Gears',
      description: 'Manufacturing of high-precision gears for critical mechanical applications.',
      icon: Settings,
      gradient: 'from-red-500 to-pink-500'
    },
    {
      title: 'Surface Treatment',
      description: 'Comprehensive surface treatment solutions for enhanced durability and performance.',
      icon: Droplet,
      gradient: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Fasteners',
      description: 'High-quality fasteners manufactured to exact specifications for reliable connections.',
      icon: Zap,
      gradient: 'from-pink-500 to-rose-500'
    },
    {
      title: 'Assembly and Weld',
      description: 'Professional welding and assembly services ensuring structural integrity.',
      icon: Link2,
      gradient: 'from-teal-500 to-green-500'
    },
    {
      title: 'Electronic and Wire Harnesses',
      description: 'Custom wire harness design and manufacturing for complex electrical systems.',
      icon: Radio,
      gradient: 'from-violet-500 to-purple-500'
    },
    {
      title: 'UAV/Drones',
      description: 'Specialized manufacturing for unmanned aerial vehicle components and systems.',
      icon: Plane,
      gradient: 'from-blue-500 to-indigo-500'
    }
  ];

  // Duplicate services for infinite scroll effect
  const duplicatedServices = [...services, ...services, ...services];


  return (
    <section 
      className="relative py-20 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 px-6">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
            What We Do
          </h2>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-cyan-500 rounded-full"></div>
            <div className="h-2 w-2 rounded-full bg-cyan-500"></div>
            <div className="h-1 w-20 bg-gradient-to-l from-transparent to-cyan-500 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Delivering comprehensive manufacturing solutions with precision, innovation, and excellence across multiple verticals.
          </p>
        </div>

        {/* Infinite Scrolling Cards Container */}
        <div className="relative">
          <div 
            className="flex gap-6 py-8"
            style={{
              animation: 'scroll-right 10s linear infinite',
              animationPlayState: isPaused ? 'paused' : 'running'
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {duplicatedServices.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div
                  key={index}
                  className="group relative flex-shrink-0 w-80 h-96 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:scale-105"
                >
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                  
                  {/* Content */}
                  <div className="relative h-full p-8 flex flex-col justify-between">
                    {/* Icon */}
                    <div className="mb-6">
                      <div className={`inline-flex p-5 rounded-2xl bg-gradient-to-br ${service.gradient} shadow-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <IconComponent className="w-10 h-10 text-white" strokeWidth={2} />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-400 transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed flex-grow">
                      {service.description}
                    </p>

                    {/* Learn More Link */}
                    <div className="mt-6 flex items-center text-cyan-500 group-hover:text-cyan-400 transition-colors duration-300">
                      <span className="text-sm font-semibold mr-2">Learn More</span>
                      <svg 
                        className="w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Decorative corner element */}
                  <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${service.gradient} opacity-10 group-hover:opacity-30 rounded-bl-3xl transition-opacity duration-500`}></div>
                  
                  {/* Bottom accent line */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                </div>
              );
            })}
          </div>

          {/* Gradient Fade Edges */}
          <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-gray-900 to-transparent pointer-events-none z-10"></div>
          <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-gray-900 to-transparent pointer-events-none z-10"></div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center px-6">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300">
              Explore Our Capabilities
            </button>
            <button className="px-8 py-4 bg-transparent text-cyan-400 font-semibold rounded-full shadow-lg hover:shadow-2xl border-2 border-cyan-500 hover:bg-cyan-500 hover:text-white transform hover:-translate-y-1 transition-all duration-300">
              Request a Quote
            </button>
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes scroll-right {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        @keyframes scroll-left {
          0% {
            transform: translateX(-33.333%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </section>
  );
};

export default WhatWeDo;
