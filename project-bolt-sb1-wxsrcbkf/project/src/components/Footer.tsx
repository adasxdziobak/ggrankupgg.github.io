import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleTermsClick = () => {
    window.location.href = '/terms';
  };

  const handlePrivacyClick = () => {
    window.location.href = '/privacy';
  };

  return (
    <footer className="bg-[#0e0e0e] border-t border-[#2b2b2b] py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="text-2xl font-poppins font-bold text-[#FFD700] mb-4">
              RankUP.gg
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Profesjonalne usługi boostingu CS2 i Faceit. Bezpieczne, szybkie i skuteczne 
              podnoszenie rankingu przez doświadczonych graczy.
            </p>
            <div className="flex space-x-4">
              <div className="bg-[#121212] p-2 rounded-lg">
                <MessageCircle size={20} className="text-[#FFD700]" />
              </div>
              <div className="bg-[#121212] p-2 rounded-lg">
                <Mail size={20} className="text-[#FFD700]" />
              </div>
              <div className="bg-[#121212] p-2 rounded-lg">
                <MessageCircle size={20} className="text-[#FFD700]" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Szybkie linki
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#FFD700] transition-colors duration-300">Usługi</button></li>
              <li><button onClick={() => scrollToSection('calculator')} className="hover:text-[#FFD700] transition-colors duration-300">Kalkulator</button></li>
              <li><button onClick={() => scrollToSection('reviews')} className="hover:text-[#FFD700] transition-colors duration-300">Opinie</button></li>
              <li><button onClick={() => scrollToSection('faq')} className="hover:text-[#FFD700] transition-colors duration-300">FAQ</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-[#FFD700] transition-colors duration-300">Kontakt</button></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-poppins font-semibold text-white mb-4">
              Usługi
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#FFD700] transition-colors duration-300">CS2 Rank Boost</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#FFD700] transition-colors duration-300">Win Boost</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#FFD700] transition-colors duration-300">Faceit Elo Boost</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#FFD700] transition-colors duration-300">Premier Elo</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-[#FFD700] transition-colors duration-300">Coaching 1v1</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#2b2b2b] mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <div className="mb-4 md:mb-0">
              © 2024 RankUP.gg. Wszystkie prawa zastrzeżone.
            </div>
            <div className="flex space-x-6">
              <button onClick={handleTermsClick} className="hover:text-[#FFD700] transition-colors duration-300">Regulamin</button>
              <button onClick={handlePrivacyClick} className="hover:text-[#FFD700] transition-colors duration-300">Polityka prywatności</button>
            </div>
          </div>
          
          <div className="mt-4 text-center text-xs text-gray-500">
            <p>
              RankUP.gg nie jest powiązane z Valve Corporation ani Faceit. 
              Counter-Strike jest znakiem towarowym Valve Corporation.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;