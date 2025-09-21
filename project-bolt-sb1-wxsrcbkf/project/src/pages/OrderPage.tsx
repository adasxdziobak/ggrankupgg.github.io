import React, { useState } from 'react';
import { ArrowLeft, Calculator as CalcIcon } from 'lucide-react';

const ranks = [
  'Silver I', 'Silver II', 'Silver III', 'Silver IV', 'Silver Elite', 'Silver Elite Master',
  'Gold Nova I', 'Gold Nova II', 'Gold Nova III', 'Gold Nova Master',
  'Master Guardian I', 'Master Guardian II', 'Master Guardian Elite', 'Distinguished Master Guardian',
  'Legendary Eagle', 'Legendary Eagle Master', 'Supreme Master First Class', 'Global Elite'
];

const OrderPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    discord: '',
    serviceType: 'rank',
    currentRank: 0,
    targetRank: 5,
    faceitElo: 500,
    premierElo: 5000,
    paymentMethod: 'paypal'
  });

  const calculatePrice = () => {
    if (formData.serviceType === 'rank') {
      const rankDiff = formData.targetRank - formData.currentRank;
      return Math.max(rankDiff * 25, 50);
    } else if (formData.serviceType === 'faceit') {
      return Math.ceil(formData.faceitElo / 10);
    } else {
      return Math.ceil(formData.premierElo / 100);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Zamówienie zostało złożone! Skontaktujemy się z Tobą wkrótce.');
  };

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-white font-roboto">
      <div className="container mx-auto px-4 py-8">
        <button 
          onClick={() => window.history.back()}
          className="flex items-center text-[#FFD700] hover:text-[#FF9D00] transition-colors duration-300 mb-8"
        >
          <ArrowLeft size={20} className="mr-2" />
          Powrót do strony głównej
        </button>

        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-poppins font-bold text-center mb-8">
            Złóż <span className="text-[#FFD700]">zamówienie</span>
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Order Form */}
            <div className="bg-[#121212] p-8 rounded-xl border border-[#2b2b2b]">
              <h2 className="text-2xl font-poppins font-semibold mb-6">Dane zamówienia</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Imię *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Nazwisko *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Discord *
                  </label>
                  <input
                    type="text"
                    name="discord"
                    value={formData.discord}
                    onChange={handleInputChange}
                    placeholder="np. username#1234"
                    className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Typ usługi *
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                  >
                    <option value="rank">CS2 Rank Boost</option>
                    <option value="faceit">Faceit Elo Boost</option>
                    <option value="premier">Premier Elo Boost</option>
                  </select>
                </div>

                {formData.serviceType === 'rank' && (
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Obecny rang: {ranks[formData.currentRank]}
                      </label>
                      <input
                        type="range"
                        name="currentRank"
                        min="0"
                        max={ranks.length - 1}
                        value={formData.currentRank}
                        onChange={handleInputChange}
                        className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Docelowy rang: {ranks[formData.targetRank]}
                      </label>
                      <input
                        type="range"
                        name="targetRank"
                        min={formData.currentRank + 1}
                        max={ranks.length - 1}
                        value={formData.targetRank}
                        onChange={handleInputChange}
                        className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                      />
                    </div>
                  </div>
                )}

                {formData.serviceType === 'faceit' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ilość Elo do zdobycia: {formData.faceitElo} Elo
                    </label>
                    <input
                      type="range"
                      name="faceitElo"
                      min="100"
                      max="2000"
                      step="100"
                      value={formData.faceitElo}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                )}

                {formData.serviceType === 'premier' && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Ilość Premier Elo: {formData.premierElo} Elo
                    </label>
                    <input
                      type="range"
                      name="premierElo"
                      min="1000"
                      max="25000"
                      step="1000"
                      value={formData.premierElo}
                      onChange={handleInputChange}
                      className="w-full h-2 bg-[#2b2b2b] rounded-lg appearance-none cursor-pointer slider"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Metoda płatności *
                  </label>
                  <select
                    name="paymentMethod"
                    value={formData.paymentMethod}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                  >
                    <option value="paypal">PayPal</option>
                    <option value="blik">BLIK</option>
                    <option value="transfer">Przelew bankowy</option>
                    <option value="crypto">Kryptowaluty</option>
                    <option value="skins">Skiny CS2</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-6 py-4 rounded-lg font-poppins font-semibold text-lg hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
                >
                  Złóż zamówienie - {calculatePrice()} PLN
                </button>
              </form>
            </div>

            {/* Order Summary */}
            <div className="bg-[#121212] p-8 rounded-xl border border-[#2b2b2b] h-fit">
              <h2 className="text-2xl font-poppins font-semibold mb-6">Podsumowanie zamówienia</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-[#2b2b2b]">
                  <span className="text-gray-400">Usługa:</span>
                  <span className="text-white">
                    {formData.serviceType === 'rank' && 'CS2 Rank Boost'}
                    {formData.serviceType === 'faceit' && 'Faceit Elo Boost'}
                    {formData.serviceType === 'premier' && 'Premier Elo Boost'}
                  </span>
                </div>

                {formData.serviceType === 'rank' && (
                  <>
                    <div className="flex justify-between items-center py-2 border-b border-[#2b2b2b]">
                      <span className="text-gray-400">Od:</span>
                      <span className="text-white">{ranks[formData.currentRank]}</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-[#2b2b2b]">
                      <span className="text-gray-400">Do:</span>
                      <span className="text-white">{ranks[formData.targetRank]}</span>
                    </div>
                  </>
                )}

                {formData.serviceType === 'faceit' && (
                  <div className="flex justify-between items-center py-2 border-b border-[#2b2b2b]">
                    <span className="text-gray-400">Elo do zdobycia:</span>
                    <span className="text-white">{formData.faceitElo} Elo</span>
                  </div>
                )}

                {formData.serviceType === 'premier' && (
                  <div className="flex justify-between items-center py-2 border-b border-[#2b2b2b]">
                    <span className="text-gray-400">Premier Elo:</span>
                    <span className="text-white">{formData.premierElo} Elo</span>
                  </div>
                )}

                <div className="flex justify-between items-center py-2 border-b border-[#2b2b2b]">
                  <span className="text-gray-400">Metoda płatności:</span>
                  <span className="text-white">
                    {formData.paymentMethod === 'paypal' && 'PayPal'}
                    {formData.paymentMethod === 'blik' && 'BLIK'}
                    {formData.paymentMethod === 'transfer' && 'Przelew'}
                    {formData.paymentMethod === 'crypto' && 'Kryptowaluty'}
                    {formData.paymentMethod === 'skins' && 'Skiny CS2'}
                  </span>
                </div>

                <div className="flex justify-between items-center py-4 text-xl font-poppins font-bold">
                  <span className="text-white">Łączna cena:</span>
                  <span className="text-[#FFD700]">{calculatePrice()} PLN</span>
                </div>
              </div>

              <div className="mt-6 p-4 bg-[#0e0e0e] rounded-lg border border-[#2b2b2b]">
                <div className="flex items-center mb-2">
                  <CalcIcon className="text-[#FFD700] mr-2" size={20} />
                  <span className="font-semibold">Informacje o realizacji:</span>
                </div>
                <ul className="text-sm text-gray-400 space-y-1">
                  <li>• Czas realizacji: 24-48 godzin</li>
                  <li>• Bezpieczny boosting z VPN</li>
                  <li>• Bez cheatów - tylko ręczna gra</li>
                  <li>• Kontakt przez Discord</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderPage;