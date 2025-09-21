import React from 'react';
import { CreditCard, Smartphone, Bitcoin, Gamepad2 } from 'lucide-react';

const paymentMethods = [
  {
    icon: CreditCard,
    name: 'PayPal',
    description: 'Bezpieczne płatności online'
  },
  {
    icon: Smartphone,
    name: 'BLIK',
    description: 'Szybkie płatności mobilne'
  },
  {
    icon: CreditCard,
    name: 'Przelew',
    description: 'Tradycyjne przelewy bankowe'
  },
  {
    icon: Bitcoin,
    name: 'Bitcoin',
    description: 'BTC, ETH, USDT'
  },
  {
    icon: Gamepad2,
    name: 'Skiny CS2',
    description: 'AK-47, M4A4, AWP i inne'
  }
];

const PaymentMethods = () => {
  return (
    <section className="py-20 bg-[#0e0e0e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Metody <span className="text-[#FFD700]">płatności</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Wybierz najwygodniejszą dla siebie metodę płatności
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {paymentMethods.map((method, index) => (
              <div
                key={index}
                className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] hover:border-[#FFD700] transition-all duration-300 hover:scale-105 group text-center"
              >
                <div className="mb-4">
                  <method.icon 
                    size={48} 
                    className="text-[#FFD700] group-hover:text-[#FF9D00] transition-colors duration-300 mx-auto" 
                  />
                </div>
                <h3 className="text-lg font-poppins font-semibold mb-2 text-white group-hover:text-[#FFD700] transition-colors duration-300">
                  {method.name}
                </h3>
                <p className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                  {method.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] inline-block">
              <div className="flex items-center justify-center mb-4">
                <CreditCard className="text-[#FFD700] mr-3" size={24} />
                <span className="text-lg font-poppins font-semibold">Bezpieczne płatności</span>
              </div>
              <p className="text-gray-400 text-sm max-w-md">
                Wszystkie płatności są szyfrowane i zabezpieczone. Nie przechowujemy danych płatniczych.
              </p>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b]">
              <div className="text-2xl mb-2">🔒</div>
              <div className="font-poppins font-semibold text-[#FFD700]">SSL Encryption</div>
              <div className="text-sm text-gray-400">256-bit szyfrowanie</div>
            </div>
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b]">
              <div className="text-2xl mb-2">⚡</div>
              <div className="font-poppins font-semibold text-[#FFD700]">Instant Payment</div>
              <div className="text-sm text-gray-400">Natychmiastowe płatności</div>
            </div>
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b]">
              <div className="text-2xl mb-2">🛡️</div>
              <div className="font-poppins font-semibold text-[#FFD700]">Money Back</div>
              <div className="text-sm text-gray-400">Gwarancja zwrotu</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentMethods;