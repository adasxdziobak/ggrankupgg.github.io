import React, { useState, useEffect } from 'react';

const knives = ['🔪', '⚔️', '🗡️', '🔫'];

interface Knife {
  id: number;
  x: number;
  y: number;
  rotation: number;
  speed: number;
  knife: string;
}

const KnifeDropAnimation = () => {
  const [knivesArray, setKnivesArray] = useState<Knife[]>([]);

  const createKnife = () => {
    const newKnife: Knife = {
      id: Date.now() + Math.random(),
      x: Math.random() * window.innerWidth,
      y: -50,
      rotation: Math.random() * 360,
      speed: 2 + Math.random() * 3,
      knife: knives[Math.floor(Math.random() * knives.length)]
    };
    return newKnife;
  };

  const triggerKnifeDrop = () => {
    const newKnives: Knife[] = [];
    for (let i = 0; i < 15; i++) {
      setTimeout(() => {
        newKnives.push(createKnife());
        setKnivesArray(prev => [...prev, createKnife()]);
      }, i * 100);
    }
  };

  useEffect(() => {
    const handleTrigger = () => {
      triggerKnifeDrop();
    };

    window.addEventListener('triggerKnifeDrop', handleTrigger);

    const animationInterval = setInterval(() => {
      setKnivesArray(prev => 
        prev.map(knife => ({
          ...knife,
          y: knife.y + knife.speed,
          rotation: knife.rotation + 2
        })).filter(knife => knife.y < window.innerHeight + 100)
      );
    }, 16);

    return () => {
      window.removeEventListener('triggerKnifeDrop', handleTrigger);
      clearInterval(animationInterval);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-40">
      {knivesArray.map(knife => (
        <div
          key={knife.id}
          className="absolute text-2xl opacity-80"
          style={{
            left: `${knife.x}px`,
            top: `${knife.y}px`,
            transform: `rotate(${knife.rotation}deg)`,
            transition: 'none'
          }}
        >
          {knife.knife}
        </div>
      ))}
    </div>
  );
};

export default KnifeDropAnimation;