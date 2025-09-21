import React, { useState } from 'react';
import { FileText, ChevronDown } from 'lucide-react';

const termsData = [
  {
    title: 'Płatność i realizacja',
    content: 'Płatność za usługi boostingu jest wymagana z góry, przed rozpoczęciem realizacji zamówienia. Akceptujemy różne metody płatności: PayPal, BLIK, przelewy bankowe, kryptowaluty oraz skiny CS2. Czas realizacji wynosi standardowo 24-48 godzin, ale może się różnić w zależności od wybranej usługi.'
  },
  {
    title: 'Bezpieczeństwo konta',
    content: 'Podczas trwania boostingu klient nie może logować się na swoje konto. Łamanie tego zasady może skutkować anulowaniem zamówienia bez zwrotu kosztów. Używamy profesjonalnych VPN-ów i bezpiecznych metod gry. Nie używamy cheatów ani żadnych szkodliwych programów.'
  },
  {
    title: 'Odpowiedzialność',
    content: 'Firma nie ponosi odpowiedzialności za bany nałożone przez Valve/Faceit podczas lub po zakończeniu boosta. Choć stosujemy najwyższe standardy bezpieczeństwa, ryzyko bana zawsze istnieje przy korzystaniu z usług boostingu. Klient przyjmuje to ryzyko na siebie.'
  },
  {
    title: 'Polityka zwrotów',
    content: 'Zwroty są możliwe tylko w przypadku niewykonania zamówienia z naszej strony lub udowodnienia nieprofesjonalnego prowadzenia boosta. Zwroty nie są możliwe po rozpoczęciu realizacji zamówienia. Oferujemy gwarancję na nasze usługi - jeśli rang spadnie w ciągu 7 dni, wykonamy dodatkowy boost bezpłatnie.'
  },
  {
    title: 'Komunikacja i support',
    content: 'Nasz zespół support dostępny jest 24/7 przez Discord, WhatsApp, Telegram i e-mail. Wszelkie problemy lub pytania będą rozwiązane w ciągu maksymalnie 24 godzin. Komunikacja odbywa się w języku polskim i angielskim.'
  },
  {
    title: 'Dane osobowe',
    content: 'Chronimy prywatność naszych klientów. Dane logowania do kont są bezpiecznie przechowywane i usuwane po zakończeniu usługi. Nie udostępniamy informacji o klientach osobom trzecim. Wszystkie dane są szyfrowane zgodnie ze standardami bezpieczeństwa.'
  }
];

const Terms = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            <span className="text-[#FFD700]">Regulamin</span> usług
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Zapoznaj się z warunkami świadczenia naszych usług boostingu
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {termsData.map((section, index) => (
            <div
              key={index}
              className="bg-[#0e0e0e] border border-[#2b2b2b] rounded-xl mb-4 overflow-hidden hover:border-[#FFD700] transition-all duration-300"
            >
              <button
                onClick={() => toggleSection(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#121212] transition-colors duration-300 group"
              >
                <div className="flex items-center">
                  <FileText size={20} className="text-[#FFD700] mr-4 flex-shrink-0" />
                  <span className="text-lg font-poppins font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    {section.title}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-[#FFD700] transform transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 ml-10">
                  <p className="text-gray-300 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-[#0e0e0e] p-6 rounded-xl border border-[#2b2b2b] max-w-2xl mx-auto">
            <p className="text-gray-300 mb-4">
              Korzystając z naszych usług, akceptujesz powyższy regulamin.
            </p>
            <p className="text-sm text-gray-400">
              Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Terms;