import React, { useState } from 'react';
import { Mail, MessageCircle, Phone, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Skontaktuj się <span className="text-[#FFD700]">z nami</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Masz pytania? Chcesz zamówić boost? Jesteśmy dostępni 24/7!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#0e0e0e] p-8 rounded-xl border border-[#2b2b2b]">
            <h3 className="text-2xl font-poppins font-semibold mb-6 text-white">
              Wyślij wiadomość
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Twoje imię
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Adres e-mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                  required
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                  Interesująca usługa
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                  required
                >
                  <option value="">Wybierz usługę</option>
                  <option value="cs2-rank">CS2 Rank Boost</option>
                  <option value="win-boost">Win Boost</option>
                  <option value="faceit-elo">Faceit Elo Boost</option>
                  <option value="premier-elo">Premier Elo Boost</option>
                  <option value="coaching">Coaching 1v1</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#121212] border border-[#2b2b2b] rounded-lg text-white focus:border-[#FFD700] focus:outline-none transition-colors duration-300"
                  placeholder="Opisz swoje potrzeby..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#FFD700] to-[#FF9D00] text-black px-6 py-3 rounded-lg font-poppins font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-[0_0_20px_rgba(255,215,0,0.3)] flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Wyślij wiadomość
              </button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="space-y-6">
            <div className="bg-[#0e0e0e] p-6 rounded-xl border border-[#2b2b2b] hover:border-[#FFD700] transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <MessageCircle size={32} className="text-[#FFD700] group-hover:text-[#FF9D00] transition-colors duration-300 mr-4" />
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    Discord
                  </h3>
                  <p className="text-gray-400">Najszybsza komunikacja</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Dołącz na nasz serwer Discord dla natychmiastowej pomocy i zamówień.
              </p>
              <a 
                href="https://discord.gg/sbCzTxDH" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#5865F2] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#4f5acb] transition-colors duration-300"
              >
                Dołącz na Discord
              </a>
            </div>

            <div className="bg-[#0e0e0e] p-6 rounded-xl border border-[#2b2b2b] hover:border-[#FFD700] transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <MessageCircle size={32} className="text-[#FFD700] group-hover:text-[#FF9D00] transition-colors duration-300 mr-4" />
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    Telegram
                  </h3>
                  <p className="text-gray-400">Szybki kontakt przez Telegram</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Napisz do nas na Telegram w każdej chwili - odpowiadamy błyskawicznie.
              </p>
              <a 
                href="https://t.me/rankupgg" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#0088cc] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#006699] transition-colors duration-300"
              >
                Czat Telegram
              </a>
            </div>

            <div className="bg-[#0e0e0e] p-6 rounded-xl border border-[#2b2b2b] hover:border-[#FFD700] transition-all duration-300 group">
              <div className="flex items-center mb-4">
                <Mail size={32} className="text-[#FFD700] group-hover:text-[#FF9D00] transition-colors duration-300 mr-4" />
                <div>
                  <h3 className="text-xl font-poppins font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                    E-mail
                  </h3>
                  <p className="text-gray-400">Oficjalna komunikacja</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Skontaktuj się z nami mailowo dla szczegółowych zapytań.
              </p>
              <div className="text-[#FFD700] font-semibold">
                ggrankupgg@gmail.com
              </div>
            </div>

            <div className="bg-[#0e0e0e] p-6 rounded-xl border border-[#2b2b2b] text-center">
              <div className="text-2xl font-poppins font-bold text-[#FFD700] mb-2">
                24/7 Support
              </div>
              <p className="text-gray-400">
                Jesteśmy dostępni przez całą dobę, 7 dni w tygodniu. 
                Średni czas odpowiedzi: <span className="text-[#FFD700]">2 minuty</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;