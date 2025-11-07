import React from 'react';
import { Sparkles } from 'lucide-react';

const OurClients = () => {
  const clientCategories = [
    {
      title: 'AEROSPACE',
      clients: [
        { name: 'Boeing', logo: '/boieng logo.png' },
        { name: 'Rolls-Royce', logo: '/rolls royce.webp' },
        { name: 'GE Aviation', logo: '/logo.png' },
        { name: 'Collins Aerospace', logo: '/logo 1.png' },
        { name: 'Safran', logo: '/safran.svg' },
        { name: 'Honeywell', logo: '/honeywell-logo.svg' }
      ]
    },
    {
      title: 'DEFENSE',
      clients: [
        { name: 'Indian Navy', logo: '/logo.png' },
        { name: 'BDL', logo: '/logo 1.png' },
        { name: 'Ministry of Defence', logo: '/boieng logo.png' },
        { name: 'DRDO', logo: '/logo.png' },
        { name: 'Indian Air Force', logo: '/logo 1.png' },
        { name: 'Indian Coast Guard', logo: '/logo.png' }
      ]
    },
    {
      title: 'OIL AND GAS',
      clients: [
        { name: 'Halliburton', logo: '/logo 1.png' },
        { name: 'Schlumberger', logo: '/logo.png' }
      ]
    },
    {
      title: 'MEDICAL',
      clients: [
        { name: 'GE HealthCare', logo: '/health.svg' },
        { name: 'Cytiva', logo: '/health.svg' }
      ]
    }
  ];

  return (
    <section className="py-16 px-8 sm:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center mb-12">
          <Sparkles className="w-10 h-10 mr-4 text-gray-800" strokeWidth={2.5} />
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Our Clients
          </h2>
        </div>

        {/* Custom Layout Grid - Exact replica of image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* AEROSPACE - Left section (3 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5">
              AEROSPACE
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {clientCategories[0].clients.map((client, clientIndex) => (
                <div
                  key={clientIndex}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                >
                  <div className="flex items-center justify-center h-16">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center w-full h-full">
                      <span className="text-xs font-semibold text-gray-700 text-center">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* DEFENSE - Middle section (4 columns) */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5">
              DEFENSE
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {clientCategories[1].clients.map((client, clientIndex) => (
                <div
                  key={clientIndex}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                >
                  <div className="flex items-center justify-center h-16">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center w-full h-full">
                      <span className="text-xs font-semibold text-gray-700 text-center">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* OIL AND GAS - Right top section (2.5 columns) */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5">
              OIL AND GAS
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {clientCategories[2].clients.map((client, clientIndex) => (
                <div
                  key={clientIndex}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                >
                  <div className="flex items-center justify-center h-16">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center w-full h-full">
                      <span className="text-xs font-semibold text-gray-700 text-center">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MEDICAL - Right bottom section (2.5 columns) */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-bold text-gray-900 tracking-wider uppercase mb-5">
              MEDICAL
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {clientCategories[3].clients.map((client, clientIndex) => (
                <div
                  key={clientIndex}
                  className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }}
                >
                  <div className="flex items-center justify-center h-16">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden items-center justify-center w-full h-full">
                      <span className="text-xs font-semibold text-gray-700 text-center">
                        {client.name}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
