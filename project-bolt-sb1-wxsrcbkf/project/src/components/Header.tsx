import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import AuthModal from './AuthModal';
import KnifeDropAnimation from './KnifeDropAnimation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showKnives, setShowKnives] = useState(false);
  const { user, signOut } = useAuth();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setShowKnives(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTimeout(() => setShowKnives(false), 3000);
  };

  const handleAuthClick = () => {
    if (user) {
      signOut();
    } else {
      setShowAuthModal(true);
    }
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0e0e0e]/95 backdrop-blur-sm border-b border-[#2b2b2b]">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={handleLogoClick}
            className="text-2xl md:text-3xl font-bold text-[#FFD700] hover:text-[#FF9D00] transition-colors cursor-pointer"
          >
            RankUP.gg
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('services')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Usługi
            </button>
            <button
              onClick={() => scrollToSection('calculator')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Kalkulator
            </button>
            <button
              onClick={() => scrollToSection('reviews')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Opinie
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              Kontakt
            </button>
            
            {/* Auth Button */}
            <button
              onClick={() => window.location.href = '/auth'}
              className="px-4 py-2 border-2 border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-black hover:scale-110 transition-all duration-300 font-medium"
            >
              <span className="hidden sm:inline">
                {user ? `Witaj, ${user.email?.split('@')[0]}` : 'Zaloguj się'}
              </span>
              <span className="sm:hidden">
                {user ? 'Logout' : 'Login'}
              </span>
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button
              onClick={() => window.location.href = '/auth'}
              className="px-3 py-2 border-2 border-[#FFD700] text-[#FFD700] rounded-lg hover:bg-[#FFD700] hover:text-black hover:scale-110 transition-all duration-300 font-medium text-sm"
            >
              {user ? 'Logout' : 'Login'}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white hover:text-[#FFD700] transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#121212] border-t border-[#2b2b2b]">
            <nav className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('services')}
                className="text-white hover:text-[#FFD700] transition-colors text-left"
              >
                Usługi
              </button>
              <button
                onClick={() => scrollToSection('calculator')}
                className="text-white hover:text-[#FFD700] transition-colors text-left"
              >
                Kalkulator
              </button>
              <button
                onClick={() => scrollToSection('reviews')}
                className="text-white hover:text-[#FFD700] transition-colors text-left"
              >
                Opinie
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="text-white hover:text-[#FFD700] transition-colors text-left"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-[#FFD700] transition-colors text-left"
              >
                Kontakt
              </button>
            </nav>
          </div>
        )}
      </header>

      {/* Auth Modal */}
      {showAuthModal && (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      )}

      {/* Knife Drop Animation */}
      {showKnives && <KnifeDropAnimation />}
    </>
  );
};

export default Header;