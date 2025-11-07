import React from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  Facebook,
  Youtube,
  ChevronRight,
  Building2
} from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Products', href: '#products' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contact', href: '#contact' }
  ];

  const products = [
    { name: 'Aerospace Solutions', href: '#aerospace' },
    { name: 'Defense Systems', href: '#defense' },
    { name: 'Robotics & Automation', href: '#robotics' },
    { name: 'Space Technology', href: '#space' },
    { name: 'UAV Systems', href: '#uav' },
    { name: 'Oil & Gas Equipment', href: '#oilgas' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:bg-sky-500' },
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:bg-pink-600' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:bg-blue-700' },
    { icon: Youtube, href: '#', label: 'YouTube', color: 'hover:bg-red-600' }
  ];

  return (
    <footer className="relative text-white" style={{ backgroundColor: 'rgb(3, 46, 114)' }}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div className="space-y-4">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-lg flex items-center justify-center shadow-md">
                  <Building2 className="w-6 h-6 text-white" strokeWidth={2.5} />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Raghuvamshi</h3>
                <p className="text-xs text-cyan-400 font-semibold">Engineering Excellence</p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              {/* Location */}
              <div className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" strokeWidth={2} />
                <p className="text-sm text-gray-300 leading-relaxed">
                  123 Industrial Park,<br />
                  Tech City, State 560001<br />
                  India
                </p>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-cyan-400 flex-shrink-0" strokeWidth={2} />
                <a href="tel:+911234567890" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  +91 123 456 7890
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-cyan-400 flex-shrink-0" strokeWidth={2} />
                <a href="mailto:info@raghuvamshi.com" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors">
                  info@raghuvamshi.com
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                    <span className="text-sm">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="flex items-center space-x-2 text-gray-300 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                    <span className="text-sm">{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h4 className="text-white font-bold mb-4 text-base uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className={`p-2.5 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-cyan-400 transition-all duration-300 transform hover:scale-110 group shadow-sm border border-white/20`}
                  >
                    <IconComponent className="w-4 h-4 text-gray-300 group-hover:text-white transition-colors" strokeWidth={2} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright & Legal */}
      <div className="border-t border-white/20 mt-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-300">
              <p>© {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Raghuvamshi</span>. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-4">
              <a href="#privacy" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-400">•</span>
              <a href="#terms" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Terms of Use
              </a>
              <span className="text-gray-400">•</span>
              <a href="#cookies" className="text-sm text-gray-300 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
