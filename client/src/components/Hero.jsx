import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[calc(100vh-72px)] w-full overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1565688534245-05d6b5be184a?q=80&w=2070&auto=format&fit=crop')`,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-start h-full max-w-7xl mx-auto px-6">
        <div className="text-white">
          <h1 className="text-5xl md:text-6xl font-light tracking-wide">
            Creating value with precision.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
