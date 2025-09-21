import React, { useState } from 'react';
import { ArrowLeft, Star, Trophy, Award, Users, BookOpen, ShoppingCart } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from '../components/AuthModal';

const services = [
  {
    id: 'cs2-rank',
    icon: Trophy,
    title: 'Boost Rang CS2',
    description: 'Od Silver do Global Elite',
    basePrice: 50,
    priceUnit: 'za rang',
    features: ['Wszystkie rangi', 'Ręczna gra', 'VPN ochrona', 'Gwarancja'],
    popular: true
  },
  {
    id: 'win-boost',
    icon: Star,
    title: 'Win Boost',
    description: '3, 5, 10 wygranych gier',
    basePrice: 30,
    priceUnit: 'za 3 winy',
    features: ['Szybka realizacja', 'High K/D ratio', 'Żadnych porażek', '24h support']
  },
  {
    id: 'faceit-elo',
    icon: Award,
    title: 'Faceit Elo Boost',
    description: '100-1000 Elo (skala 1000-3000)',
    basePrice: 80,
    priceUnit: 'za 100 Elo',
    features: ['Profesjonalni gracze', 'Level 10 boosterzy', 'Premium account', 'Stream na życzenie']
  },
  {
    id: 'premier-elo',
    icon: Users,
    title: 'CS2 Premier Elo',
    description: '5000-30000 Elo boost',
    basePrice: 120,
    priceUnit: 'za 1000 Elo',
    features: ['Najwyższy poziom', 'Eksperci CS2', 'Najszybsza realizacja', 'VIP support']
  },
  {
    id: 'coaching',
    icon: BookOpen,
    title: 'Coaching 1v1',
    description: 'Personalne treningi',
    basePrice: 100,
    priceUnit: 'za godzinę',
    features: ['Indywidualne podejście', 'Pro player coach', 'VOD review', 'Materiały dodatkowe']
  }
];

const PricingPage = () => {
  const { user } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState<'login' | 'register'>('login');

  const handleServiceSelect = (serviceId: string) => {
    if (!user) {
      setShowAuthModal(true);
      return;
    }
    
    // Redirect to order page with selected service
    window.location.href = `/order?service=${serviceId}`;
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-roboto">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={handleBackClick}
          className="flex items-center text-[#FFD700] hover:text-[#FF9D00] transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Powrót do strony głównej
        </button>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Cennik <span className="text-[#FFD700]">usług</span> boostingu
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wybierz pakiet idealny dla siebie i zacznij swoją drogę do wyższego rangu
          </p>
          {!user && (
            <div className="mt-6 p-4 bg-[#121212] rounded-lg border border-[#2b2b2b] inline-block">
              <p className="text-gray-300 mb-2">
                🔒 Aby kupować usługi, musisz się zalogować
              </p>
              <button
                onClick={() => setShowAuthModal(true)}
                className="text-[#FFD700] hover:text-[#FF9D00] font-semibold"
              >
                Zaloguj się lub załóż konto
              </button>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`bg-[#121212] p-8 rounded-xl border transition-all duration-300 hover:scale-105 group relative overflow-hidden card-hover-effect ${
                service.popular 
                  ? 'border-[#FFD700] ring-2 ring-[#FFD700] ring-opacity-20' 
                  : 'border-[#2b2b2b] hover:border-[#FFD700]'
              }`}
            >
              {service.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-4 py-1 text-sm font-semibold rounded-bl-lg">
                  POPULARNE
                </div>
              )}
              
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
                
                <div className="mb-6">
                  <div className="text-3xl font-poppins font-bold text-[#FF9D00] mb-1">
                    od {service.basePrice} PLN
                  </div>
                  <div className="text-sm text-gray-400">
                    {service.priceUnit}
                  </div>
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
                  onClick={() => handleServiceSelect(service.id)}
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-6 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={20} />
                  {user ? 'Wybierz pakiet' : 'Zaloguj się aby kupić'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {user && (
          <div className="text-center mt-12">
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] inline-block">
              <p className="text-gray-300 mb-2">
                Witaj, <span className="text-[#FFD700] font-semibold">{user.email}</span>!
              </p>
              <p className="text-sm text-gray-400">
                Możesz teraz kupować nasze usługi boostingu
              </p>
            </div>
          </div>
        )}
      </div>

      <AuthModal
        isOpen={showAuthModal}
        onClose={() => setShowAuthModal(false)}
        mode={authMode}
        onModeChange={setAuthMode}
      />
    </div>
  );
};

export default PricingPage;