import React from 'react';
import { Shield, Zap, Target, UserCheck } from 'lucide-react';
import FlipCard from './FlipCard';

const features = [
  {
    icon: Shield,
    title: 'Bezpieczeństwo',
    description: 'VPN, bez cheatów, pełna dyskrecja'
  },
  {
    icon: Zap,
    title: 'Szybkość',
    description: '24-48h na rank up, błyskawiczna realizacja'
  },
  {
    icon: Target,
    title: 'Skuteczność',
    description: 'Faceit 3k Elo, Global Elite poziom'
  },
  {
    icon: UserCheck,
    title: 'Dyskrecja',
    description: 'Pełna anonimowość i profesjonalizm'
  }
];

const WhyUs = () => {
  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Dlaczego <span className="text-[#FFD700]">wybierają</span> nas?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Jesteśmy liderami w branży boostingu CS2 dzięki naszemu profesjonalizmowi i doświadczeniu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FlipCard
              key={index}
              front={
                <div className="bg-[#0e0e0e] p-8 rounded-xl border border-[#2b2b2b] h-full flex flex-col items-center justify-center text-center">
                  <feature.icon size={48} className="text-[#FFD700] mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-white">
                    {feature.title}
                  </h3>
                </div>
              }
              back={
                <div className="bg-[#121212] p-8 rounded-xl border border-[#FFD700] h-full flex flex-col items-center justify-center text-center">
                  <feature.icon size={48} className="text-[#FF9D00] mb-4" />
                  <h3 className="text-xl font-poppins font-semibold text-[#FFD700] mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;