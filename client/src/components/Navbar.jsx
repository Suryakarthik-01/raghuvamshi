import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Manufacturing Verticals & Infrastructure', href: '#manufacturing' },
    { name: 'Products', href: '#products' },
    { name: 'Contact Us', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        transition-all duration-500 ease-in-out
        ${isScrolled ? 'bg-[rgb(3,46,114)] shadow-lg' : 'bg-transparent'}
      `}
    >
      <div className="max-w-7xl mr-auto pr-8 lg:pr-12 pl-20">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <div className="cursor-pointer">
            <img 
              src="/logo 1.png" 
              alt="Raghuvamsi Logo" 
              className="h-11 w-auto object-contain"
            />
          </div>

          {/* Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setActiveLink(item.name)}
                className={`
                  relative px-3 py-2 text-base font-medium
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
                    absolute bottom-0.5 left-1/2 h-0.5 bg-white rounded-full
                    transition-all duration-400 ease-out
                    ${activeLink === item.name 
                      ? 'w-[calc(100%-2.5rem)] -translate-x-1/2' 
                      : 'w-0 -translate-x-1/2 group-hover:w-[calc(100%-2.5rem)]'
                    }
                  `}
                ></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-white p-2.5 rounded-md hover:text-gray-300 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" strokeWidth={2} />
            ) : (
              <Menu className="w-6 h-6" strokeWidth={2} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-[rgb(3,46,114)] shadow-xl border-t border-white/10">
            <div className="px-6 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  onClick={() => {
                    setActiveLink(item.name);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`
                    block px-4 py-3 text-base font-medium rounded-lg
                    transition-all duration-300
                    ${activeLink === item.name 
                      ? 'bg-white/10 text-white' 
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                    }
                  `}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
