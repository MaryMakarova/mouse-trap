import React, { useState } from 'react';
import '../styles/MemoryRoomScreen.css';
import GlitchImage from './GlitchImage';
import portraits from '../data/portraitMap';
import hologramImg from '../assets/endings/hologram.png';


const MemoryRoomScreen = ({ hero, onFinish }) => {
  const [showHero, setShowHero] = useState(false);
  const heroKey = hero.toLowerCase();
  const portrait = portraits[`${heroKey}_neutral`];

  return (
    <div className="memory-room-screen">
      {!showHero ? (
        <div className="memory-phase">
          <GlitchImage src={hologramImg} alt="Hologram" />
          <div className="memory-text">
            <p>"Why didn’t I finish it?"</p>
            <p>"I built this place to train minds — not trap them. But even good ideas rust with time. You’ve done what I could not. Escape now... but remember, no machine is perfect. Only persistent."</p>
            <p>“Thank you... for listening. No one ever stayed long enough.”</p>
            <button className="button-steampunk" onClick={() => setShowHero(true)}>
              Continue
            </button>
          </div>
        </div>
      ) : (
        <div className="memory-phase fade-slide-in">
          <img src={portrait} alt={hero} className="memory-hero" />
          <div className="memory-text">
            <p>“This place... I could’ve outrun it. But now I understand it.”</p>
            <button className="button-steampunk" onClick={onFinish}>
              Didn’t need to fight this one. Just needed to listen.
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MemoryRoomScreen;
