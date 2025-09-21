import React from 'react';
import { ArrowRight } from 'lucide-react';
import KnifeDropAnimation from './KnifeDropAnimation';

const Hero = () => {
  const handleOrderClick = () => {
    window.location.href = '/pricing';
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <KnifeDropAnimation />
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0e0e0e] via-[#121212] to-[#0e0e0e]">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/7915437/pexels-photo-7915437.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-15"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0e0e0e] via-transparent to-[#0e0e0e] opacity-80"></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 pt-20">
        <h1 className="text-5xl md:text-7xl font-poppins font-bold mb-6">
          Podnieś swój <span className="text-[#FFD700]">RANK</span> w CS2
          <br />
          <span className="text-[#FF9D00]">SZYBCIEJ</span> niż kiedykolwiek
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed">
          Profesjonalny boosting bez cheatów – gramy ręcznie, bezpiecznie i skutecznie
        </p>

        <div className="flex justify-center">
          <button 
            onClick={handleOrderClick}
            className="bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-8 py-4 rounded-lg font-poppins font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(255,215,0,0.3)] flex items-center gap-2"
          >
            onClick={handleOrderClick}
            Zamów boosting teraz
            <ArrowRight size={20} />
          </button>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-poppins font-bold text-[#FFD700]">500+</div>
            <div className="text-gray-400">Zadowolonych klientów</div>
          </div>
          <div>
            <div className="text-3xl font-poppins font-bold text-[#FFD700]">24-48h</div>
            <div className="text-gray-400">Czas realizacji</div>
          </div>
          <div>
            <div className="text-3xl font-poppins font-bold text-[#FFD700]">100%</div>
            <div className="text-gray-400">Bezpieczeństwo</div>
          </div>
          <div>
            <div className="text-3xl font-poppins font-bold text-[#FFD700]">24/7</div>
            <div className="text-gray-400">Wsparcie</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;