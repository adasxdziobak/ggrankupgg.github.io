import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqData = [
  {
    question: 'Czy boosting jest bezpieczny?',
    answer: 'Tak! Używamy profesjonalnych VPN-ów, gramy ręcznie bez żadnych cheatów czy programów. Nasze metody są w 100% bezpieczne i nie narażają Twojego konta na ban.'
  },
  {
    question: 'Jak długo trwa boost?',
    answer: 'Standardowy czas realizacji to 24-48 godzin dla większości usług. Czas może się różnić w zależności od wybranego pakietu i aktualnej rangi.'
  },
  {
    question: 'Jakie metody płatności akceptujecie?',
    answer: 'Przyjmujemy PayPal, BLIK, przelewy bankowe, kryptowaluty (BTC, ETH, USDT) oraz skiny CS2. Wszystkie płatności są bezpieczne i szyfrowane.'
  },
  {
    question: 'Czy mogę grać na swoim koncie podczas boosta?',
    answer: 'Nie, podczas trwania boostingu nie możesz logować się na swoje konto. To kluczowe dla bezpieczeństwa i skuteczności usługi.'
  },
  {
    question: 'Co jeśli mój rang spadnie po booście?',
    answer: 'Oferujemy gwarancję na nasze usługi. Jeśli rang spadnie w ciągu 7 dni od zakończenia boosta, wykonamy dodatkowy boost bez opłat.'
  },
  {
    question: 'Czy otrzymam materiały z gier?',
    answer: 'Na życzenie możemy nagrywać wybrane mecze lub streamować na żywo. Ta usługa jest dostępna za małą dopłatą.'
  },
  {
    question: 'Czy boosterzy to profesjonalni gracze?',
    answer: 'Tak! Wszyscy nasi boosterzy to gracze na poziomie Global Elite w CS2 i minimum Level 8 na Faceit. Mają wieloletnie doświadczenie.'
  },
  {
    question: 'Co w przypadku problemów technicznych?',
    answer: 'Nasz support działa 24/7. W razie jakichkolwiek problemów, skontaktuj się z nami przez Discord, WhatsApp lub e-mail.'
  }
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-[#0e0e0e]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Często zadawane <span className="text-[#FFD700]">pytania</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Znajdź odpowiedzi na najczęściej zadawane pytania dotyczące naszych usług
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-[#121212] border border-[#2b2b2b] rounded-xl mb-4 overflow-hidden hover:border-[#FFD700] transition-all duration-300"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-[#0e0e0e] transition-colors duration-300 group"
              >
                <div className="flex items-center">
                  <HelpCircle size={20} className="text-[#FFD700] mr-4 flex-shrink-0" />
                  <span className="text-lg font-poppins font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    {faq.question}
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
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] inline-block">
            <p className="text-gray-300 mb-4">Nie znalazłeś odpowiedzi na swoje pytanie?</p>
            <button 
              onClick={scrollToContact}
              className="bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-6 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]">
              Skontaktuj się z nami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;