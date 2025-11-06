import React, { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Manufacturing Verticals & Infrastructure', href: '#manufacturing' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="sticky top-0 z-50 shadow-lg" style={{ backgroundColor: 'rgb(3, 46, 114)' }}>
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Brand Text */}
          <div className="text-white text-2xl font-semibold tracking-wide cursor-pointer">
            raghuvamsi
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`
                  relative px-3 py-2 text-sm font-medium
                  transition-all duration-300 ease-in-out
                  ${activeLink === item.name 
                    ? 'text-white' 
                    : 'text-gray-300 hover:text-white'
                  }
                  group overflow-hidden
                `}
              >
                <span className="relative z-10 inline-block">{item.name}</span>
                {/* Underline animation from center */}
                <span 
                  className={`
                    absolute bottom-1 left-1/2 h-0.5 bg-white rounded-full
                    transition-all duration-400 ease-out
                    ${activeLink === item.name 
                      ? 'w-[calc(100%-1.5rem)] -translate-x-1/2' 
                      : 'w-0 -translate-x-1/2 group-hover:w-[calc(100%-1.5rem)]'
                    }
                  `}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white p-2.5 rounded-md hover:text-gray-300 transition-colors duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
