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
    <footer className="relative bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-gray-300">
      {/* Top Red Accent Line */}
      <div className="h-1 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600"></div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info Section */}
          <div className="space-y-6">
            {/* Logo and Company Name */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-7 h-7 text-white" strokeWidth={2.5} />
                </div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Raghuvamshi</h3>
                <p className="text-xs text-cyan-400 font-semibold">Engineering Excellence</p>
              </div>
            </div>

            {/* About Description */}
            <p className="text-sm text-gray-400 leading-relaxed">
              Leading provider of advanced manufacturing solutions across aerospace, defense, robotics, and industrial sectors. 
              Committed to innovation, precision, and excellence.
            </p>

            {/* Social Media Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect With Us</h4>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`p-2.5 bg-gray-800 rounded-lg ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg group`}
                    >
                      <IconComponent className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" strokeWidth={2} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider flex items-center">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                    <span className="text-sm font-medium">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Section */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider flex items-center">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"></div>
              Products
            </h4>
            <ul className="space-y-3">
              {products.map((product, index) => (
                <li key={index}>
                  <a
                    href={product.href}
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group"
                  >
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                    <span className="text-sm font-medium">{product.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Location Section */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg uppercase tracking-wider flex items-center">
              <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full mr-3"></div>
              Contact
            </h4>
            
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300 mt-0.5">
                  <MapPin className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    123 Industrial Park,<br />
                    Tech City, State 560001<br />
                    India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Phone className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <a href="tel:+911234567890" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  +91 123 456 7890
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3 group">
                <div className="p-2 bg-gray-800 rounded-lg group-hover:bg-blue-600 transition-colors duration-300">
                  <Mail className="w-5 h-5 text-cyan-400 group-hover:text-white transition-colors" strokeWidth={2} />
                </div>
                <a href="mailto:info@raghuvamshi.com" className="text-sm text-gray-400 hover:text-cyan-400 transition-colors">
                  info@raghuvamshi.com
                </a>
              </div>

              {/* Map Preview */}
              <div className="mt-6 rounded-xl overflow-hidden border-2 border-gray-800 hover:border-cyan-500 transition-colors duration-300 group">
                <div className="relative h-40 bg-gray-800">
                  {/* Placeholder for map - replace with actual map embed */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                    <div className="text-center">
                      <MapPin className="w-12 h-12 text-cyan-500 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                      <p className="text-xs text-gray-500 font-medium">View on Map</p>
                    </div>
                  </div>
                  {/* You can replace this with an actual Google Maps embed or similar */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar - Copyright & Legal */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-20 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-sm text-gray-500">
              <p>© {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Raghuvamshi</span>. All rights reserved.</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6">
              <a href="#privacy" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <span className="text-gray-700">•</span>
              <a href="#terms" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                Terms of Use
              </a>
              <span className="text-gray-700">•</span>
              <a href="#cookies" className="text-sm text-gray-500 hover:text-cyan-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-600 rounded-full blur-3xl"></div>
      </div>
    </footer>
  );
};

export default Footer;
