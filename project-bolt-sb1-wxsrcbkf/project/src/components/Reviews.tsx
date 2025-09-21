import React from 'react';
import { Star, MessageCircle } from 'lucide-react';

const reviews = [
  {
    name: 'PlayerPro2024',
    avatar: '👤',
    rating: 5,
    text: 'Niesamowita jakość! Z Silver Elite do Gold Nova III w 2 dni. Booster grał naprawdę dobrze, żadnych problemów.',
    service: 'CS2 Rank Boost',
    platform: 'Discord'
  },
  {
    name: 'CSGOFan',
    avatar: '🎮',
    rating: 5,
    text: 'Faceit boost z 1500 do 2200 Elo przebiegł bez zarzutu. Profesjonalne podejście, polecam każdemu!',
    service: 'Faceit Elo Boost',
    platform: 'Steam'
  },
  {
    name: 'GamerXYZ',
    avatar: '⚡',
    rating: 5,
    text: 'Premier boost na 15k Elo wykonany w 3 dni. Bardzo miły kontakt, wszystko zgodnie z ustaleniami.',
    service: 'Premier Elo Boost',
    platform: 'Discord'
  },
  {
    name: 'ProShooter',
    avatar: '🔥',
    rating: 5,
    text: 'Coaching 1v1 był fantastyczny! Nauczyłem się więcej w 2 godziny niż przez miesiące samodzielnej gry.',
    service: 'Coaching 1v1',
    platform: 'Steam'
  },
  {
    name: 'AWPer',
    avatar: '🎯',
    rating: 5,
    text: 'Win boost 10 gier - same wygrane z wysokim K/D. Dokładnie tego szukałem. Na pewno wrócę!',
    service: 'Win Boost',
    platform: 'Discord'
  },
  {
    name: 'RankUpKing',
    avatar: '👑',
    rating: 5,
    text: 'Od DMG do Global Elite w tydzień. Bezpieczny, szybki i skuteczny boost. Najlepsza ekipa!',
    service: 'CS2 Rank Boost',
    platform: 'Steam'
  }
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-20 bg-[#121212]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
            Co mówią nasi <span className="text-[#FFD700]">klienci</span>?
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Przekonaj się, dlaczego setki graczy wybiera nasze usługi
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#0e0e0e] p-6 rounded-xl border border-[#2b2b2b] hover:border-[#FFD700] transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{review.avatar}</div>
                  <div>
                    <h4 className="font-poppins font-semibold text-white group-hover:text-[#FFD700] transition-colors duration-300">
                      {review.name}
                    </h4>
                    <div className="flex items-center text-sm text-gray-400">
                      <MessageCircle size={12} className="mr-1" />
                      {review.platform}
                    </div>
                  </div>
                </div>
                <div className="flex">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[#FFD700] fill-current" />
                  ))}
                </div>
              </div>

              <p className="text-gray-300 mb-4 leading-relaxed">
                "{review.text}"
              </p>

              <div className="bg-[#121212] px-3 py-1 rounded-full text-xs text-[#FF9D00] font-semibold inline-block">
                {review.service}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="inline-flex items-center bg-[#0e0e0e] px-8 py-4 rounded-xl border border-[#2b2b2b]">
            <div className="flex items-center mr-6">
              <Star size={24} className="text-[#FFD700] fill-current mr-2" />
              <span className="text-2xl font-poppins font-bold text-[#FFD700]">4.9/5</span>
            </div>
            <div className="text-gray-400">
              <div className="font-semibold">Średnia ocena</div>
              <div className="text-sm">z ponad 500 opinii</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;