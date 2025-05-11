import React from 'react';
import endings from '../data/endings';
import portraits from '../data/portraitMap';
import '../styles/FinalScreen.css';

const FinalScreen = ({ hero, remainingTime, endingKey, onSave }) => {
  const heroKey = hero.toLowerCase();

  const ending = Object.values(endings).find(
    (e) => remainingTime >= e.minTime && remainingTime <= e.maxTime
  );

  const portraitKey = `${heroKey}_${ending.emotion}`;
  const portraitSrc = portraits[portraitKey];

  return (
    <div
      className="final-screen"
      style={{ backgroundImage: `url(${ending.background})` }}
    >
      <div className="final-header">
        <h1 className="final-title">{ending.title}</h1>
        <p className="final-rating">{ending.rating}</p>
      </div>

      <div className="final-card" onClick={onSave}>
        <img src={portraitSrc} alt={hero} className="final-portrait" />
        <div className="final-text">
          {ending.text.split('\n').map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>
        <div className="final-timer">
          {remainingTime} minutes remaining
        </div>
      </div>
    </div>
  );
};

export default FinalScreen;
