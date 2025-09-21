import React, { useState } from 'react';
import { ArrowLeft, FileText, Shield, CreditCard, Scale, Users, Lock, AlertTriangle, CheckCircle, XCircle } from 'lucide-react';
import FlipCard from '../components/FlipCard';

const termsData = [
  {
    icon: FileText,
    title: '1. Definicje',
    content: `Serwis – strona internetowa oferująca boosting CS2, Faceit Elo, Premier Elo oraz coaching.

Klient – osoba fizyczna korzystająca z usług Serwisu.

Booster – osoba realizująca boosting w imieniu Serwisu.

Usługa – boosting rang, winów, punktów Elo lub coaching.`
  },
  {
    icon: Users,
    title: '2. Zakres usług',
    content: `Serwis świadczy usługi boostingu online w grze Counter-Strike 2.

Boosting odbywa się ręcznie, bez użycia cheatów, botów czy skryptów.

Klient może wybrać usługę: boosting rang CS2, win boosting, Faceit Elo, Premier Elo lub coaching 1v1.`
  },
  {
    icon: Shield,
    title: '3. Bezpieczeństwo',
    content: `Boosting odbywa się z zachowaniem najwyższych środków bezpieczeństwa (VPN, tryb offline, brak cheatów).

Serwis nie ponosi odpowiedzialności za działania firmy Valve lub platform zewnętrznych (Faceit, Steam), w tym potencjalne bany lub blokady.

Klient przyjmuje do wiadomości ryzyko wynikające z korzystania z usług boostingu.`
  },
  {
    icon: CheckCircle,
    title: '4. Warunki korzystania',
    content: `Klient jest zobowiązany do niekorzystania z konta w czasie trwania boosta (chyba że wybrał usługę „duo-queue").

Klient dostarcza poprawne dane logowania, wymagane do realizacji usługi.

Po zakończeniu boostingu dane są natychmiast usuwane.`
  },
  {
    icon: CreditCard,
    title: '5. Płatności',
    content: `Wszystkie usługi wymagają płatności z góry.

Akceptowane metody płatności:
• PayPal
• BLIK
• Przelew bankowy
• Kryptowaluty (BTC, ETH, USDT)
• Skiny CS2 (poprzez Steam Trade)

Płatności są rozliczane w PLN lub USD (w zależności od metody).`
  },
  {
    icon: XCircle,
    title: '6. Zwroty',
    content: `Zwrot przysługuje, jeśli:
• Usługa nie została rozpoczęta
• Booster nie jest w stanie zrealizować usługi

Zwroty nie przysługują, jeśli boosting został już rozpoczęty lub zakończony.

W wyjątkowych przypadkach Serwis może zaproponować częściowy zwrot lub kontynuację boostingu bez dodatkowych kosztów.`
  },
  {
    icon: Scale,
    title: '7. Odpowiedzialność',
    content: `Serwis nie ponosi odpowiedzialności za szkody wynikłe z:
• Złamania regulaminu gry przez Klienta
• Działań firm trzecich (Valve, Faceit, Steam)
• Nieprzestrzegania zasad regulaminu przez Klienta

Serwis nie odpowiada za utratę przedmiotów w grze (skinów, dropów) podczas boostingu.`
  },
  {
    icon: Lock,
    title: '8. Poufność',
    content: `Wszystkie dane logowania i informacje dostarczone przez Klienta są traktowane jako poufne.

Serwis usuwa dane logowania natychmiast po zakończeniu usługi.

Serwis nie udostępnia danych Klienta osobom trzecim.`
  },
  {
    icon: AlertTriangle,
    title: '9. Postanowienia końcowe',
    content: `Korzystając z Serwisu, Klient potwierdza akceptację niniejszego regulaminu.

Regulamin może być aktualizowany – najnowsza wersja zawsze dostępna jest na stronie.

W sprawach nieuregulowanych zastosowanie mają przepisy prawa właściwego dla siedziby właściciela Serwisu.`
  }
];

const TermsPage = () => {
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
              📜 <span className="text-[#FFD700]">Regulamin</span> Serwisu Boostingu CS2
            </h1>
            <p className="text-xl text-gray-400">
              Data obowiązywania: 2025-09-18
            </p>
            <p className="text-lg text-gray-300 mt-4 max-w-3xl mx-auto">
              Witamy w naszym serwisie świadczącym usługi boostingu w grze Counter-Strike 2 oraz pokrewnych (Faceit, Premier). 
              Prosimy o zapoznanie się z poniższym regulaminem – korzystanie z usług oznacza jego pełną akceptację.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {termsData.map((term, index) => (
              <FlipCard
                key={index}
                front={
                  <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b] h-full flex flex-col items-center justify-center text-center">
                    <term.icon size={48} className="text-[#FFD700] mb-4" />
                    <h3 className="text-lg font-poppins font-semibold text-white">
                      {term.title}
                    </h3>
                  </div>
                }
                back={
                  <div className="bg-[#0e0e0e] p-6 rounded-xl border border-[#FFD700] h-full flex flex-col">
                    <div className="flex items-center mb-3">
                      <term.icon size={24} className="text-[#FF9D00] mr-2" />
                      <h3 className="text-sm font-poppins font-semibold text-[#FFD700]">
                        {term.title}
                      </h3>
                    </div>
                    <div className="text-xs text-gray-300 leading-relaxed overflow-y-auto flex-1">
                      {term.content.split('\n').map((line, idx) => (
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
              <p className="text-gray-300 mb-4">
                Korzystając z naszych usług, akceptujesz powyższy regulamin.
              </p>
              <p className="text-sm text-gray-400">
                Ostatnia aktualizacja: {new Date().toLocaleDateString('pl-PL')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsPage;