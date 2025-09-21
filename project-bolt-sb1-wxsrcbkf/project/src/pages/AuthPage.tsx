import React, { useState } from 'react';
import { ArrowLeft, Mail, Lock, User, MessageCircle, Send } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AuthPage = () => {
  const [authMode, setAuthMode] = useState<'select' | 'email'>('select');
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    captcha: ''
  });
  const [captchaCode, setCaptchaCode] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signInWithEmail, signUpWithEmail, signInWithProvider } = useAuth();

  // Generate random captcha
  const generateCaptcha = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < 6; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setCaptchaCode(result);
  };

  React.useEffect(() => {
    generateCaptcha();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleEmailAuth = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Validate captcha
    if (formData.captcha !== captchaCode) {
      setError('Nieprawidłowy kod captcha');
      setLoading(false);
      generateCaptcha();
      return;
    }

    // Validate password confirmation for registration
    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Hasła nie są identyczne');
      setLoading(false);
      return;
    }

    try {
      const { error } = isLogin 
        ? await signInWithEmail(formData.email, formData.password)
        : await signUpWithEmail(formData.email, formData.password);

      if (error) {
        setError(error.message);
        generateCaptcha();
      } else {
        // Redirect to pricing page on success
        window.location.href = '/pricing';
      }
    } catch (err) {
      setError('Wystąpił błąd. Spróbuj ponownie.');
      generateCaptcha();
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
      // OAuth will redirect automatically
    } catch (err) {
      setError('Wystąpił błąd. Spróbuj ponownie.');
    }
    setLoading(false);
  };

  const handleTelegramAuth = () => {
    // Redirect to Telegram OAuth (placeholder)
    window.open('https://oauth.telegram.org/auth?bot_id=YOUR_BOT_ID&origin=YOUR_DOMAIN&request_access=write', '_blank');
  };

  if (authMode === 'email') {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-white font-roboto">
        <div className="container mx-auto px-4 py-8">
          <button 
            onClick={() => setAuthMode('select')}
            className="flex items-center text-[#FFD700] hover:text-[#FF9D00] transition-colors duration-300 mb-8"
          >
            <ArrowLeft size={20} className="mr-2" />
            Powrót do wyboru metody
          </button>

          <div className="max-w-md mx-auto">
            <div className="bg-[#121212] rounded-xl border border-[#2b2b2b] p-8">
              <div className="text-center mb-8">
                <h1 className="text-3xl font-poppins font-bold text-white mb-2">
                  {isLogin ? 'Zaloguj się' : 'Załóż konto'}
                </h1>
                <p className="text-gray-400">
                  {isLogin ? 'Zaloguj się przez e-mail' : 'Stwórz nowe konto'}
                </p>
              </div>

              {error && (
                <div className="bg-red-500 bg-opacity-20 border border-red-500 text-red-400 p-3 rounded-lg mb-6">
                  {error}
                </div>
              )}

              <form onSubmit={handleEmailAuth} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Adres e-mail *
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
                    Hasło *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                    required
                    minLength={6}
                  />
                </div>

                {!isLogin && (
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Potwierdź hasło *
                    </label>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                      required
                      minLength={6}
                    />
                  </div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Kod captcha *
                  </label>
                  <div className="flex items-center space-x-4 mb-2">
                    <div className="bg-[#2b2b2b] px-4 py-2 rounded-lg font-mono text-[#FFD700] text-lg tracking-wider">
                      {captchaCode}
                    </div>
                    <button
                      type="button"
                      onClick={generateCaptcha}
                      className="text-[#FFD700] hover:text-[#FF9D00] text-sm"
                    >
                      Odśwież
                    </button>
                  </div>
                  <input
                    type="text"
                    name="captcha"
                    value={formData.captcha}
                    onChange={handleInputChange}
                    placeholder="Wpisz kod z obrazka"
                    className="w-full px-4 py-3 bg-[#0e0e0e] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                    required
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-6 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transform transition-all duration-300 disabled:opacity-50 disabled:transform-none flex items-center justify-center gap-2"
                >
                  <Send size={20} />
                  {loading ? 'Ładowanie...' : (isLogin ? 'Zaloguj się' : 'Załóż konto')}
                </button>
              </form>

              <div className="text-center mt-6">
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-[#FFD700] hover:text-[#FF9D00] transition-colors"
                >
                  {isLogin 
                    ? 'Nie masz konta? Zarejestruj się' 
                    : 'Masz już konto? Zaloguj się'
                  }
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

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

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              Zaloguj się lub <span className="text-[#FFD700]">załóż konto</span>
            </h1>
            <p className="text-xl text-gray-400">
              Wybierz metodę logowania, aby uzyskać dostęp do naszych usług boostingu
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Google Login */}
            <button
              onClick={() => handleProviderAuth('google')}
              disabled={loading}
              className="bg-white text-black p-6 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              <Mail size={24} />
              <div className="text-left">
                <div className="font-bold">Google / Gmail</div>
                <div className="text-sm opacity-70">Zaloguj przez konto Google</div>
              </div>
            </button>

            {/* Discord Login */}
            <button
              onClick={() => handleProviderAuth('discord')}
              disabled={loading}
              className="bg-[#5865F2] text-white p-6 rounded-xl font-semibold hover:bg-[#4f5acb] transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(88,101,242,0.3)]"
            >
              <MessageCircle size={24} />
              <div className="text-left">
                <div className="font-bold">Discord</div>
                <div className="text-sm opacity-70">Zaloguj przez Discord</div>
              </div>
            </button>

            {/* Telegram Login */}
            <button
              onClick={handleTelegramAuth}
              disabled={loading}
              className="bg-[#0088cc] text-white p-6 rounded-xl font-semibold hover:bg-[#006699] transition-all duration-300 hover:scale-105 disabled:opacity-50 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(0,136,204,0.3)]"
            >
              <Send size={24} />
              <div className="text-left">
                <div className="font-bold">Telegram</div>
                <div className="text-sm opacity-70">Zaloguj przez Telegram</div>
              </div>
            </button>

            {/* Email Login */}
            <button
              onClick={() => setAuthMode('email')}
              className="bg-[#121212] border-2 border-[#FFD700] text-[#FFD700] p-6 rounded-xl font-semibold hover:bg-[#FFD700] hover:text-black transition-all duration-300 hover:scale-105 flex items-center justify-center gap-3 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)]"
            >
              <User size={24} />
              <div className="text-left">
                <div className="font-bold">E-mail</div>
                <div className="text-sm opacity-70">Zaloguj przez e-mail</div>
              </div>
            </button>
          </div>

          {error && (
            <div className="mt-6 bg-red-500 bg-opacity-20 border border-red-500 text-red-400 p-4 rounded-lg text-center">
              {error}
            </div>
          )}

          <div className="text-center mt-8">
            <div className="bg-[#121212] p-6 rounded-xl border border-[#2b2b2b]">
              <h3 className="text-lg font-poppins font-semibold mb-2">🔒 Bezpieczne logowanie</h3>
              <p className="text-gray-400 text-sm">
                Wszystkie metody logowania są zabezpieczone i szyfrowane. 
                Twoje dane są w pełni chronione.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;