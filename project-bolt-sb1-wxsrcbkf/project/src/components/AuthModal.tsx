import React, { useState } from 'react';
import { X, Mail, Lock, User, MessageCircle } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'login' | 'register';
  onModeChange: (mode: 'login' | 'register') => void;
}

const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose, mode, onModeChange }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signInWithEmail, signUpWithEmail, signInWithProvider } = useAuth();

  if (!isOpen) return null;

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (mode === 'register' && password !== confirmPassword) {
      setError('Hasła nie są identyczne');
      setLoading(false);
      return;
    }

    try {
      const { error } = mode === 'login' 
        ? await signInWithEmail(email, password)
        : await signUpWithEmail(email, password);

      if (error) {
        setError(error.message);
      } else {
        onClose();
        if (mode === 'register') {
          alert('Sprawdź swoją skrzynkę e-mail w celu potwierdzenia konta!');
        }
      }
    } catch (err) {
      setError('Wystąpił błąd. Spróbuj ponownie.');
    }

    setLoading(false);
  };

  const handleProviderAuth = async (provider: 'google' | 'discord') => {
    setLoading(true);
    try {
      const { error } = await signInWithProvider(provider);
      if (error) {
        setError(error.message);
      }
    } catch (err) {
      setError('Wystąpił błąd. Spróbuj ponownie.');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#121212] rounded-xl border border-[#2b2b2b] p-8 w-full max-w-md relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X size={24} />
        </button>

        <div className="text-center mb-8">
          <h2 className="text-2xl font-poppins font-bold text-white mb-2">
            {mode === 'login' ? 'Zaloguj się' : 'Załóż konto'}
          </h2>
          <p className="text-gray-400">
            {mode === 'login' 
              ? 'Zaloguj się, aby kupować usługi boostingu' 
              : 'Stwórz konto, aby rozpocząć boosting'
            }
          </p>
        </div>

        {error && (
          <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-400 p-3 rounded-lg mb-6">
            {error}
          </div>
        )}

        {/* Social Login Buttons */}
        <div className="space-y-3 mb-6">
          <button
            onClick={() => handleProviderAuth('google')}
            disabled={loading}
            className="w-full bg-white text-black p-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <Mail size={20} />
            {mode === 'login' ? 'Zaloguj przez Gmail' : 'Zarejestruj przez Gmail'}
          </button>

          <button
            onClick={() => handleProviderAuth('discord')}
            disabled={loading}
            className="w-full bg-[#5865F2] text-white p-3 rounded-lg font-semibold hover:bg-[#4f5acb] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <MessageCircle size={20} />
            {mode === 'login' ? 'Zaloguj przez Discord' : 'Zarejestruj przez Discord'}
          </button>

          <button
            onClick={() => alert('Steam login będzie dostępny wkrótce')}
            disabled={loading}
            className="w-full bg-[#1b2838] text-white p-3 rounded-lg font-semibold hover:bg-[#2a475e] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <User size={20} />
            {mode === 'login' ? 'Zaloguj przez Steam' : 'Zarejestruj przez Steam'}
          </button>

          <button
            onClick={() => alert('Telegram login będzie dostępny wkrótce')}
            disabled={loading}
            className="w-full bg-[#0088cc] text-white p-3 rounded-lg font-semibold hover:bg-[#006699] transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            <MessageCircle size={20} />
            {mode === 'login' ? 'Zaloguj przez Telegram' : 'Zarejestruj przez Telegram'}
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-[#2b2b2b]"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-[#121212] text-gray-400">lub</span>
          </div>
        </div>

        {/* Email Form */}
        <form onSubmit={handleEmailAuth} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Adres e-mail
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Hasło
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
              required
              minLength={6}
            />
          </div>

          {mode === 'register' && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Potwierdź hasło
              </label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors"
                required
                minLength={6}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-6 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:transform-none"
          >
            {loading ? 'Ładowanie...' : (mode === 'login' ? 'Zaloguj się' : 'Załóż konto')}
          </button>
        </form>

        <div className="text-center mt-6">
          <button
            onClick={() => onModeChange(mode === 'login' ? 'register' : 'login')}
            className="text-[#FFD700] hover:text-[#FF9D00] transition-colors"
          >
            {mode === 'login' 
              ? 'Nie masz konta? Zarejestruj się' 
              : 'Masz już konto? Zaloguj się'
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;