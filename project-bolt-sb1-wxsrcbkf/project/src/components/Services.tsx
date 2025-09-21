import React from 'react';
import { Star, Trophy, Award, Users, BookOpen } from 'lucide-react';

const services = [
  {
    icon: Trophy,
    title: 'Boost Rang CS2',
    description: 'Od Silver do Global Elite',
    price: 'od 50 PLN',
    features: ['Wszystkie rangi', 'Ręczna gra', 'VPN ochrona', 'Gwarancja']
  },
  {
    icon: Star,
    title: 'Win Boost',
    description: '3, 5, 10 wygranych gier',
    price: 'od 30 PLN',
    features: ['Szybka realizacja', 'High K/D ratio', 'Żadnych porażek', '24h support']
  },
  {
    icon: Award,
    title: 'Faceit Elo Boost',
    description: '100-1000 Elo (skala 1000-3000)',
    price: 'od 80 PLN',
    features: ['Profesjonalni gracze', 'Level 10 boosterzy', 'Premium account', 'Stream na życzenie']
  },
  {
    icon: Users,
    title: 'CS2 Premier Elo',
    description: '5000-30000 Elo boost',
    price: 'od 120 PLN',
    features: ['Najwyższy poziom', 'Eksperci CS2', 'Najszybsza realizacja', 'VIP support']
  },
  {
    icon: BookOpen,
    title: 'Coaching 1v1',
    description: 'Personalne treningi',
    price: 'od 100 PLN/h',
    features: ['Indywidualne podejście', 'Pro player coach', 'VOD review', 'Materiały dodatkowe']
  }
];

const Services = () => {
  const handleOrderClick = () => {
    window.location.href = '/order';
  };

  return (
    <section id="services" className="py-20 bg-[#0e0e0e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Nasza <span className="text-[#FFD700]">oferta</span> boostingu
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wybierz pakiet idealny dla siebie i ciesz się wyższym rangiem już dziś
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#121212] p-8 rounded-xl border border-[#2b2b2b] hover:border-[#FFD700] transition-all duration-300 hover:scale-105 group relative overflow-hidden card-hover-effect"
            >
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#FFD700] to-[#FF9D00] opacity-10 rounded-bl-full"></div>
              
              <div className="relative z-10">
                <div className="mb-6">
                  <service.icon 
                    size={48} 
                    className="text-[#FFD700] group-hover:text-[#FF9D00] transition-colors duration-300" 
                  />
                </div>
                
                <h3 className="text-2xl font-poppins font-semibold mb-2 text-white group-hover:text-[#FFD700] transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-400 mb-4">
                  {service.description}
                </p>
                
                <div className="text-2xl font-poppins font-bold text-[#FF9D00] mb-6">
                  {service.price}
                </div>

                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <Star size={16} className="text-[#FFD700] mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button 
                  onClick={handleOrderClick}
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-6 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]">
                  Kup teraz
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;