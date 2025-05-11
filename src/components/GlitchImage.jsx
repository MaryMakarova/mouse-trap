import React from 'react';
import '../styles/MemoryRoomScreen.css';

function GlitchImage({ src, alt }) {
  return (
    <div className="glitch-container">
      <img src={src} alt={alt} className="glitch-image" />
      <img src={src} alt={alt} className="glitch-image glitch-layer r" />
      <img src={src} alt={alt} className="glitch-image glitch-layer b" />
    </div>
  );
}

export default GlitchImage;
