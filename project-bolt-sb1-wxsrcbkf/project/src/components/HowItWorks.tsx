import React from 'react';
import { ShoppingCart, CreditCard, Trophy } from 'lucide-react';

const steps = [
  {
    icon: ShoppingCart,
    title: 'Wybierz pakiet',
    description: 'Wybierz usługę boostingu która Ci odpowiada z naszej szerokiej oferty'
  },
  {
    icon: CreditCard,
    title: 'Opłać zamówienie',
    description: 'Dokonaj bezpiecznej płatności jedną z dostępnych metod płatności'
  },
  {
    icon: Trophy,
    title: 'Odbierz nowy poziom',
    description: 'Nasz booster wbija Twój rang - Ty odbierasz wyższy poziom gry'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#0e0e0e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Jak to <span className="text-[#FFD700]">działa</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Prosty proces w trzech krokach - od zamówienia do wyższego rangu
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-24 left-1/3 right-1/3 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF9D00]"></div>
            <div className="hidden md:block absolute top-24 left-2/3 right-0 h-0.5 bg-gradient-to-r from-[#FFD700] to-[#FF9D00]"></div>

            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-[#121212] p-8 rounded-xl border border-[#2b2b2b] hover:border-[#FFD700] transition-all duration-300 text-center group">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-r from-[#FFD700] to-[#FF9D00] rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {index + 1}
                  </div>
                  
                  <div className="mb-6 mt-4">
                    <step.icon 
                      size={48} 
                      className="text-[#FFD700] group-hover:text-[#FF9D00] transition-colors duration-300 mx-auto" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-poppins font-semibold mb-4 text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    {step.title}
                  </h3>
                  
                  <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] inline-block">
              <div className="text-lg font-poppins font-semibold mb-2">⏱️ Średni czas realizacji</div>
              <div className="text-2xl font-bold text-[#FFD700]">24-48 godzin</div>
              <div className="text-sm text-gray-400 mt-2">W zależności od wybranej usługi</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;