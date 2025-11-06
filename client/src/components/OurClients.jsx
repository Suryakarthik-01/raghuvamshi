import React from 'react';
import { Sparkles } from 'lucide-react';

const OurClients = () => {
  const clientCategories = [
    {
      title: 'AEROSPACE',
      clients: [
        { name: 'Boeing', logo: 'https://logo.clearbit.com/boeing.com' },
        { name: 'Rolls-Royce', logo: 'https://logo.clearbit.com/rolls-royce.com' },
        { name: 'GE Aviation', logo: 'https://logo.clearbit.com/ge.com' },
        { name: 'Collins Aerospace', logo: 'https://logo.clearbit.com/collinsaerospace.com' },
        { name: 'Safran', logo: 'https://logo.clearbit.com/safrangroup.com' },
        { name: 'Honeywell', logo: 'https://logo.clearbit.com/honeywell.com' }
      ],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'DEFENSE',
      clients: [
        { name: 'Indian Navy', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/Indian_Navy_Crest.svg/200px-Indian_Navy_Crest.svg.png' },
        { name: 'BDL', logo: 'https://www.bdl-india.in/images/logo.png' },
        { name: 'Ministry of Defence', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Emblem_of_India.svg/200px-Emblem_of_India.svg.png' },
        { name: 'DRDO', logo: 'https://www.drdo.gov.in/drdo/sites/default/files/inline-images/drdo-logo.png' },
        { name: 'Indian Air Force', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Emblem_of_Indian_Air_Force.svg/200px-Emblem_of_Indian_Air_Force.svg.png' },
        { name: 'Indian Coast Guard', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Indian_Coast_Guard_Logo.svg/200px-Indian_Coast_Guard_Logo.svg.png' }
      ],
      gradient: 'from-red-500 to-orange-500'
    },
    {
      title: 'OIL AND GAS',
      clients: [
        { name: 'Halliburton', logo: 'https://logo.clearbit.com/halliburton.com' },
        { name: 'Schlumberger', logo: 'https://logo.clearbit.com/slb.com' }
      ],
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'MEDICAL',
      clients: [
        { name: 'GE HealthCare', logo: 'https://logo.clearbit.com/gehealthcare.com' },
        { name: 'Cytiva', logo: 'https://logo.clearbit.com/cytiva.com' }
      ],
      gradient: 'from-green-500 to-teal-500'
    }
  ];

  return (
    <section className="py-20 px-6 sm:px-12 lg:px-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-center mb-16">
          <div className="flex items-center space-x-4">
            <Sparkles className="w-8 h-8 text-blue-600" strokeWidth={2} />
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold" style={{ color: 'rgb(3, 46, 114)' }}>
              Our Clients
            </h2>
          </div>
        </div>

        {/* Client Categories Grid */}
        <div className="space-y-16">
          {clientCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="relative">
              {/* Category Title */}
              <div className="mb-8">
                <div className="inline-flex items-center space-x-3">
                  <div className={`h-1 w-12 bg-gradient-to-r ${category.gradient} rounded-full`}></div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 tracking-wide">
                    {category.title}
                  </h3>
                  <div className={`h-1 w-12 bg-gradient-to-l ${category.gradient} rounded-full`}></div>
                </div>
              </div>

              {/* Client Logos Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.clients.map((client, clientIndex) => (
                  <div
                    key={clientIndex}
                    className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-transparent overflow-hidden"
                  >
                    {/* Gradient background on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Logo Container */}
                    <div className="relative flex items-center justify-center h-24">
                      <div className="relative w-full h-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                        {/* Placeholder for logo - replace with actual logos */}
                        <div className="flex items-center justify-center w-full h-full">
                          <span className="text-lg font-bold text-gray-700 group-hover:text-gray-900 transition-colors duration-300 text-center">
                            {client.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Decorative corner element */}
                    <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 rounded-bl-3xl transition-opacity duration-500`}></div>
                    
                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${category.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
                  </div>
                ))}
              </div>

              {/* Decorative divider (except for last category) */}
              {categoryIndex < clientCategories.length - 1 && (
                <div className="mt-16 flex items-center justify-center">
                  <div className="h-px w-full max-w-md bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Trust Badge Section */}
        <div className="mt-20 text-center">
          <div className="inline-flex flex-col items-center space-y-4 p-8 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl border border-blue-100">
            <div className="flex items-center space-x-2">
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
              <p className="text-lg font-semibold text-gray-800">
                Trusted by Industry Leaders Worldwide
              </p>
              <div className="h-2 w-2 rounded-full bg-blue-500 animate-pulse"></div>
            </div>
            <p className="text-gray-600 max-w-2xl">
              Partnering with the world's most prestigious organizations across aerospace, defense, oil & gas, and medical industries.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
