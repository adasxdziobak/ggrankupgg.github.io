import React, { useState } from 'react';
import { Calculator as CalcIcon, ArrowRight } from 'lucide-react';

const ranks = [
  'Silver I', 'Silver II', 'Silver III', 'Silver IV', 'Silver Elite', 'Silver Elite Master',
  'Gold Nova I', 'Gold Nova II', 'Gold Nova III', 'Gold Nova Master',
  'Master Guardian I', 'Master Guardian II', 'Master Guardian Elite', 'Distinguished Master Guardian',
  'Legendary Eagle', 'Legendary Eagle Master', 'Supreme Master First Class', 'Global Elite'
];

const Calculator = () => {
  const [currentRank, setCurrentRank] = useState(0);
  const [targetRank, setTargetRank] = useState(5);
  const [faceitElo, setFaceitElo] = useState(500);
  const [premierElo, setPremierElo] = useState(5000);
  const [serviceType, setServiceType] = useState('rank');

  const handleOrderClick = () => {
    window.location.href = '/order';
  };

  const calculatePrice = () => {
    if (serviceType === 'rank') {
      const rankDiff = targetRank - currentRank;
      return Math.max(rankDiff * 25, 50);
    } else if (serviceType === 'faceit') {
      return Math.ceil(faceitElo / 10);
    } else {
      return Math.ceil(premierElo / 100);
    }
  };

  return (
    <section id="calculator" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Kalkulator <span className="text-[#FFD700]">cenowy</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Sprawdź cenę swojego boostingu w czasie rzeczywistym
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-[#0e0e0e] p-8 rounded-xl border border-[#2b2b2b]">
            <div className="mb-8">
              <label className="block text-lg font-poppins font-semibold mb-4">Wybierz typ usługi:</label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <button
                  onClick={() => setServiceType('rank')}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    serviceType === 'rank'
                      ? 'border-[#FFD700] bg-[#FFD700] bg-opacity-10 text-[#FFD700]'
                      : 'border-[#2b2b2b] hover:border-[#FFD700] hover:text-[#FFD700]'
                  }`}
                >
                  CS2 Rank Boost
                </button>
                <button
                  onClick={() => setServiceType('faceit')}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    serviceType === 'faceit'
                      ? 'border-[#FFD700] bg-[#FFD700] bg-opacity-10 text-[#FFD700]'
                      : 'border-[#2b2b2b] hover:border-[#FFD700] hover:text-[#FFD700]'
                  }`}
                >
                  Faceit Elo Boost
                </button>
                <button
                  onClick={() => setServiceType('premier')}
                  className={`p-4 rounded-lg border transition-all duration-300 ${
                    serviceType === 'premier'
                      ? 'border-[#FFD700] bg-[#FFD700] bg-opacity-10 text-[#FFD700]'
                      : 'border-[#2b2b2b] hover:border-[#FFD700] hover:text-[#FFD700]'
                  }`}
                >
                  Premier Elo Boost
                </button>
              </div>
            </div>

            {serviceType === 'rank' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div>
                  <label className="block text-lg font-poppins font-semibold mb-4">
                    Obecny rang: <span className="text-[#FFD700]">{ranks[currentRank]}</span>
                  </label>
                  <input
                    type="range"
                    min="0"
                    max={ranks.length - 1}
                    value={currentRank}
                    onChange={(e) => setCurrentRank(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
                <div>
                  <label className="block text-lg font-poppins font-semibold mb-4">
                    Docelowy rang: <span className="text-[#FFD700]">{ranks[targetRank]}</span>
                  </label>
                  <input
                    type="range"
                    min={currentRank + 1}
                    max={ranks.length - 1}
                    value={targetRank}
                    onChange={(e) => setTargetRank(parseInt(e.target.value))}
                    className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                  />
                </div>
              </div>
            )}

            {serviceType === 'faceit' && (
              <div className="mb-8">
                <label className="block text-lg font-poppins font-semibold mb-4">
                  Ilość Elo do zdobycia: <span className="text-[#FFD700]">{faceitElo} Elo</span>
                </label>
                <input
                  type="range"
                  min="100"
                  max="2000"
                  step="100"
                  value={faceitElo}
                  onChange={(e) => setFaceitElo(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>100 Elo</span>
                  <span>2000 Elo</span>
                </div>
              </div>
            )}

            {serviceType === 'premier' && (
              <div className="mb-8">
                <label className="block text-lg font-poppins font-semibold mb-4">
                  Ilość Premier Elo: <span className="text-[#FFD700]">{premierElo} Elo</span>
                </label>
                <input
                  type="range"
                  min="1000"
                  max="25000"
                  step="1000"
                  value={premierElo}
                  onChange={(e) => setPremierElo(parseInt(e.target.value))}
                  className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                  <span>1000 Elo</span>
                  <span>25000 Elo</span>
                </div>
              </div>
            )}

            <div className="bg-[#121212] p-6 rounded-lg border border-[#2b2b2b] text-center">
              <div className="flex items-center justify-center mb-4">
                <CalcIcon className="text-[#FFD700] mr-3" size={24} />
                <span className="text-xl font-poppins font-semibold">Szacunkowa cena:</span>
              </div>
              <div className="text-4xl font-poppins font-bold text-[#FFD700] mb-4">
                {calculatePrice()} PLN
              </div>
              <button 
                onClick={handleOrderClick}
                className="bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-8 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] flex items-center gap-2 mx-auto">
                Zamów teraz
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;