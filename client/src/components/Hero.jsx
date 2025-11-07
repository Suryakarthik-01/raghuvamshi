import React, { useState, useEffect } from 'react';

const Hero = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [displayedSubtext, setDisplayedSubtext] = useState('');
  const fullText = 'Creating Value with Precision';
  const fullSubtext = 'Advanced manufacturing solutions for aerospace, defense, and industrial sectors.';

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        // Start subtext typing after main text is complete
        let subtextIndex = 0;
        const subtextInterval = setInterval(() => {
          if (subtextIndex <= fullSubtext.length) {
            setDisplayedSubtext(fullSubtext.slice(0, subtextIndex));
            subtextIndex++;
          } else {
            clearInterval(subtextInterval);
          }
        }, 30);
      }
    }, 80);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105"
        style={{
          backgroundImage: `url('/1_2b.jpg')`,
        }}
      >
        {/* Modern Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70"></div>
      </div>

      {/* Content - Centered */}
      <div className="relative z-10 flex items-center justify-center h-full max-w-7xl mx-auto px-6 sm:px-12 lg:px-20">
        <div className="text-center max-w-5xl">
          {/* Main Heading with Typing Animation */}
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-light text-white mb-8 leading-tight tracking-wide" style={{ fontFamily: "'Poppins', sans-serif" }}>
            {displayedText}
            <span className="inline-block w-1 h-16 sm:h-20 lg:h-24 bg-blue-500 ml-2 animate-pulse"></span>
          </h1>

          {/* Subheading with Typing Animation */}
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 leading-relaxed font-light tracking-wide" style={{ fontFamily: "'Inter', sans-serif" }}>
            {displayedSubtext}
            {displayedSubtext.length < fullSubtext.length && (
              <span className="inline-block w-0.5 h-6 bg-blue-400 ml-1 animate-pulse"></span>
            )}
          </p>

          {/* Decorative Line */}
          <div className="mt-12 flex justify-center">
            <div className="h-px w-64 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
          </div>
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      {/* Stylish Font Import */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&family=Inter:wght@300;400;500;600&display=swap');
      `}</style>
    </section>
  );
};

export default Hero;
