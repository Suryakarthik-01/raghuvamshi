import React from 'react';

const VideoAbout = () => {
  return (
    <section className="relative w-full min-h-screen overflow-hidden">
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
            src="/281546.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Subtle gradient overlay - lighter to show more video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      </div>

      {/* Content Overlay - Left Side */}
      <div className="relative z-10 h-full flex items-center px-6 sm:px-12 lg:px-20 py-20">
        <div className="max-w-2xl">
          {/* Main Heading */}
          <div className="mb-12">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-3 drop-shadow-2xl">
              Our Legacy of Excellence
            </h2>
            {/* Decorative line - left aligned */}
            <div className="flex items-center space-x-3 mt-6">
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              <div className="h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-500/50"></div>
            </div>
          </div>

          {/* Content Cards - Compact */}
          <div className="space-y-6">
            {/* Raghuvamsi Card */}
            <div className="backdrop-blur-md bg-black/40 rounded-xl p-6 border border-white/20 hover:bg-black/50 transition-all duration-300 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="w-1 h-6 bg-blue-500 mr-3 rounded-full"></span>
                Raghuvamsi
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed drop-shadow-md">
                Raghu Vamsi Group has carved a space for itself in the Aerospace & Defense industry worldwide over the past two decades since its inception in 2004. The Company and its subsidiaries have gained trust and built lasting relationships by delivering High Precision Engineering Components and Sub-Assemblies to some of the largest global corporations.
              </p>
            </div>

            {/* History Card */}
            <div className="backdrop-blur-md bg-black/40 rounded-xl p-6 border border-white/20 hover:bg-black/50 transition-all duration-300 shadow-xl">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 flex items-center drop-shadow-lg">
                <span className="w-1 h-6 bg-cyan-500 mr-3 rounded-full"></span>
                History
              </h3>
              <p className="text-sm sm:text-base text-gray-200 leading-relaxed drop-shadow-md">
                The early foundations of the business were started by Mr. G. Thrimurthulu in 1992 in the area of Power Transmission, initiating cast iron castings and machining in 1998, which led the group to gain expertise and develop capabilities in precision engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoAbout;
