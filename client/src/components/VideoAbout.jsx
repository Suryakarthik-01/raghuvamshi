import React from 'react';

const VideoAbout = () => {
  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-industrial-factory-with-robotic-arms-4371-large.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center justify-center px-6 sm:px-12 lg:px-20">
        <div className="max-w-5xl mx-auto text-center">
          {/* Animated content container */}
          <div className="space-y-8 animate-fadeIn">
            {/* Main Heading */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Our Legacy of Excellence
            </h2>

            {/* Decorative line */}
            <div className="flex items-center justify-center space-x-4">
              <div className="h-px w-16 bg-gradient-to-r from-transparent to-blue-400"></div>
              <div className="h-1 w-1 rounded-full bg-blue-400"></div>
              <div className="h-px w-16 bg-gradient-to-l from-transparent to-blue-400"></div>
            </div>

            {/* Company Description */}
            <div className="space-y-6 text-gray-200">
              <p className="text-lg sm:text-xl lg:text-2xl font-light leading-relaxed">
                Since our inception, <span className="font-semibold text-white">Raghuvamsi</span> has been at the forefront of 
                manufacturing innovation, delivering world-class solutions that transform industries.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                With decades of experience and a commitment to excellence, we've built a reputation 
                for quality, precision, and reliability. Our state-of-the-art facilities and dedicated 
                team work tirelessly to exceed expectations and drive progress in every project we undertake.
              </p>

              <p className="text-base sm:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto">
                From humble beginnings to becoming an industry leader, our journey is defined by 
                innovation, integrity, and an unwavering dedication to our clients' success.
              </p>
            </div>

            {/* Stats or Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 max-w-4xl mx-auto">
              <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">25+</div>
                <div className="text-sm uppercase tracking-wider text-gray-300">Years of Excellence</div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-sm uppercase tracking-wider text-gray-300">Projects Delivered</div>
              </div>
              
              <div className="backdrop-blur-sm bg-white/10 rounded-lg p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
                <div className="text-4xl font-bold text-blue-400 mb-2">100%</div>
                <div className="text-sm uppercase tracking-wider text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <span className="text-white text-sm uppercase tracking-wider">Scroll</span>
          <svg 
            className="w-6 h-6 text-white" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3" 
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default VideoAbout;
