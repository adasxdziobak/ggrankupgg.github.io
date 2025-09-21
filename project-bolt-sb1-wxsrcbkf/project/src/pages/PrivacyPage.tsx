import React from 'react';
import { ArrowLeft, Mail, CreditCard, Cookie, Shield, User, Eye, Settings, AlertCircle } from 'lucide-react';
import FlipCard from '../components/FlipCard';

const privacyData = [
  {
    icon: User,
    title: '1. Dane, które zbieramy',
    content: `Dane podane dobrowolnie przez Klienta:
• adres e-mail
• dane logowania do konta Steam (tylko na czas realizacji usługi)
• nick Discord/Steam w celu kontaktu

Dane zbierane automatycznie:
• podstawowe dane techniczne (IP, przeglądarka, czas wizyty)
• pliki cookies (służące do poprawnego działania strony)`
  },
  {
    icon: Settings,
    title: '2. Cel przetwarzania danych',
    content: `Dane przetwarzane są wyłącznie w celu:
• realizacji zamówionych usług (boosting, coaching)
• obsługi płatności
• komunikacji z Klientem (e-mail, Discord, formularz kontaktowy)
• poprawy jakości działania serwisu (analiza techniczna)`
  },
  {
    icon: Eye,
    title: '3. Udostępnianie danych',
    content: `Dane nie są sprzedawane ani przekazywane osobom trzecim.

Dostęp do danych mają wyłącznie osoby realizujące boosting.

Po zakończeniu usługi dane logowania do konta Steam są natychmiast usuwane.`
  },
  {
    icon: CreditCard,
    title: '4. Płatności',
    content: `Obsługujemy płatności poprzez: PayPal, BLIK, przelew, kryptowaluty oraz skiny CS2.

Dane płatnicze są przetwarzane wyłącznie przez operatorów płatności (np. PayPal, banki, giełdy krypto) – Serwis nie przechowuje danych kart płatniczych ani haseł.`
  },
  {
    icon: Cookie,
    title: '5. Pliki cookies',
    content: `Serwis wykorzystuje pliki cookies w celu:
• zapewnienia prawidłowego działania strony
• analityki ruchu (anonimowe statystyki)
• zapamiętania preferencji użytkownika

Użytkownik może samodzielnie wyłączyć cookies w ustawieniach przeglądarki.`
  },
  {
    icon: Shield,
    title: '6. Bezpieczeństwo',
    content: `Dane Klienta są przechowywane w sposób bezpieczny, z zastosowaniem środków technicznych i organizacyjnych.

Dostęp do danych mają tylko upoważnione osoby.

Po zakończeniu świadczenia usług dane logowania do kont są usuwane.`
  },
  {
    icon: AlertCircle,
    title: '7. Prawa użytkownika',
    content: `Każdy Klient ma prawo do:
• dostępu do swoich danych
• poprawienia danych
• żądania usunięcia danych
• ograniczenia przetwarzania danych
• sprzeciwu wobec przetwarzania danych

W tym celu wystarczy skontaktować się z nami przez formularz kontaktowy lub Discord.`
  },
  {
    icon: Mail,
    title: '8. Zmiany w Polityce Prywatności',
    content: `Serwis zastrzega sobie prawo do wprowadzania zmian. Aktualna wersja Polityki zawsze będzie dostępna na stronie.

Wszelkie istotne zmiany będą komunikowane użytkownikom za pośrednictwem e-mail lub powiadomień na stronie.`
  }
];

const PrivacyPage = () => {
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

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              🔒 <span className="text-[#FFD700]">Polityka</span> Prywatności
            </h1>
            <p className="text-xl text-gray-400">
              Data obowiązywania: 2025-09-18
            </p>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Dbamy o Twoją prywatność i bezpieczeństwo danych. Poniżej znajdziesz szczegółowe informacje 
              o tym, jak zbieramy, przetwarzamy i chronimy Twoje dane osobowe.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privacyData.map((privacy, index) => (
              <FlipCard
                key={index}
                front={
                  <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] h-full flex flex-col items-center justify-center text-center">
                    <privacy.icon size={48} className="text-[#FFD700] mb-4" />
                    <h3 className="text-lg font-poppins font-semibold text-white">
                      {privacy.title}
                    </h3>
                  </div>
                }
                back={
                  <div className="bg-[#0e0e0e] p-6 rounded-xl border border-[#FFD700] h-full flex flex-col">
                    <div className="flex items-center mb-3">
                      <privacy.icon size={24} className="text-[#FF9D00] mr-2" />
                      <h3 className="text-sm font-poppins font-semibold text-[#FFD700]">
                        {privacy.title}
                      </h3>
                    </div>
                    <div className="text-xs text-gray-300 leading-relaxed overflow-y-auto flex-1">
                      {privacy.content.split('\n').map((line, idx) => (
                        <p key={idx} className="mb-2">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                }
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <Shield className="text-[#FFD700] mr-3" size={24} />
                <span className="text-lg font-poppins font-semibold">Twoje dane są bezpieczne</span>
              </div>
              <p className="text-gray-300 mb-4">
                Stosujemy najwyższe standardy bezpieczeństwa i szyfrowania danych.
              </p>
              <p className="text-sm text-gray-400">
                W razie pytań dotyczących prywatności, skontaktuj się z nami przez Discord lub e-mail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPage;