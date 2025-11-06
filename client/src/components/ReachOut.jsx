import React, { useState } from 'react';
import { Sparkles, Send, Mail, User, MessageSquare } from 'lucide-react';

const ReachOut = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });

  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <section className="relative py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-gray-50 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-200/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center space-x-4">
            <Sparkles className="w-8 h-8 text-blue-600" strokeWidth={2} />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: 'rgb(3, 46, 114)' }}>
              Reach Out
            </h2>
          </div>
        </div>

        {/* Main Content Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <div className="space-y-8">
            <div className="relative">
              <h3 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Have a<br />
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  Query?
                </span>
              </h3>
              
              {/* Decorative underline */}
              <div className="mt-6 flex items-center space-x-3">
                <div className="h-1 w-24 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full"></div>
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
              </div>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md">
              We'd love to hear from you! Whether you have a question about our services, 
              need a quote, or want to discuss a potential partnership, our team is ready to help.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-4 pt-4">
              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-gray-800 font-semibold">contact@company.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4 p-4 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 group">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare className="w-6 h-6 text-white" strokeWidth={2} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Response Time</p>
                  <p className="text-gray-800 font-semibold">Within 24 hours</p>
                </div>
              </div>
            </div>

            {/* Decorative Wave Line */}
            <div className="hidden lg:block pt-8">
              <svg viewBox="0 0 500 100" className="w-full h-auto opacity-30">
                <path
                  d="M0,50 Q125,20 250,50 T500,50"
                  fill="none"
                  stroke="url(#gradient)"
                  strokeWidth="2"
                  strokeDasharray="8,8"
                />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#3B82F6" />
                    <stop offset="100%" stopColor="#06B6D4" />
                  </linearGradient>
                </defs>
                <circle cx="500" cy="50" r="4" fill="#3B82F6">
                  <animate attributeName="cx" from="0" to="500" dur="3s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative">
            <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-8 sm:p-10 border border-gray-100">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* First Name */}
                  <div className="relative">
                    <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                      First Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('firstName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="John"
                        className={`w-full px-4 py-3 pl-12 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          focusedField === 'firstName'
                            ? 'border-blue-500 bg-white shadow-lg'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        required
                      />
                      <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'firstName' ? 'text-blue-500' : 'text-gray-400'
                      }`} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Last Name */}
                  <div className="relative">
                    <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                      Last Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('lastName')}
                        onBlur={() => setFocusedField(null)}
                        placeholder="Doe"
                        className={`w-full px-4 py-3 pl-12 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                          focusedField === 'lastName'
                            ? 'border-blue-500 bg-white shadow-lg'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                        required
                      />
                      <User className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                        focusedField === 'lastName' ? 'text-blue-500' : 'text-gray-400'
                      }`} strokeWidth={2} />
                    </div>
                  </div>
                </div>

                {/* Email Field */}
                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="john.doe@example.com"
                      className={`w-full px-4 py-3 pl-12 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 ${
                        focusedField === 'email'
                          ? 'border-blue-500 bg-white shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    />
                    <Mail className={`absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'email' ? 'text-blue-500' : 'text-gray-400'
                    }`} strokeWidth={2} />
                  </div>
                </div>

                {/* Message Field */}
                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Tell us about your project or inquiry..."
                      rows="5"
                      className={`w-full px-4 py-3 pl-12 bg-gray-50 border-2 rounded-xl focus:outline-none transition-all duration-300 resize-none ${
                        focusedField === 'message'
                          ? 'border-blue-500 bg-white shadow-lg'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      required
                    ></textarea>
                    <MessageSquare className={`absolute left-4 top-4 w-5 h-5 transition-colors duration-300 ${
                      focusedField === 'message' ? 'text-blue-500' : 'text-gray-400'
                    }`} strokeWidth={2} />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold py-4 px-8 rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-3 group"
                >
                  <span className="text-lg">SUBMIT</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" strokeWidth={2.5} />
                </button>
              </form>

              {/* Decorative corner elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full opacity-20 blur-2xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full opacity-20 blur-2xl"></div>
            </div>

            {/* Floating decorative elements */}
            <div className="absolute -z-10 top-8 -right-8 w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl opacity-20 transform rotate-12"></div>
            <div className="absolute -z-10 bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl opacity-20 transform -rotate-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReachOut;
