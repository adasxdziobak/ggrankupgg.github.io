import React, { useState } from 'react';

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
}

const FlipCard: React.FC<FlipCardProps> = ({ front, back }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="flip-card-container h-64 cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
        <div className="flip-card-front">
          {front}
        </div>
        <div className="flip-card-back">
          {back}
        </div>
      </div>
    </div>
  );
};

export default FlipCard;