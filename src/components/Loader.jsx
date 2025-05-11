import React, { useEffect } from 'react';
import '../styles/Loader.css';
import heartImage from '../assets/heart.png';

const imageSources = [
  '/assets/assets/rating_board.png',
  '/assets/assets/heart.png',
  '/assets/assets/intro_background.png',
  '/assets/assets/heroes/whisper_frightened.png',
  '/assets/assets/heroes/gizmo_happy.png',
  '/assets/assets/heroes/gizmo_neutral.png',
  '/assets/assets/heroes/twitch_happy.png',
  '/assets/assets/heroes/twitch_neutral.png',
  '/assets/assets/heroes/bristle_tired.png',
  '/assets/assets/heroes/bristle_neutral.png',
  '/assets/assets/heroes/whisper_thoughtful.png',
  '/assets/assets/heroes/whisper_tired.png',
  '/assets/assets/heroes/bristle_happy.png',
  '/assets/assets/heroes/twitch_thoughtful.png',
  '/assets/assets/heroes/twitch_tired.png',
  '/assets/assets/heroes/whisper_neutral.png',
  '/assets/assets/heroes/bristle_thoughtful.png',
  '/assets/assets/heroes/gizmo_frightened.png',
  '/assets/assets/heroes/gizmo_tired.png',
  '/assets/assets/heroes/gizmo_thoughtful.png',
  '/assets/assets/heroes/whisper_happy.png',
  '/assets/assets/heroes/twitch_frightened.png',
  '/assets/assets/heroes/bristle_frightened.png',
  '/assets/assets/endings/ending_barely.png',
  '/assets/assets/endings/hologram.png',
  '/assets/assets/endings/choice_background.png',
  '/assets/assets/endings/ending_brilliant.png',
  '/assets/assets/endings/ending_tactician.png',
  '/assets/assets/levels/level1_chamber.png',
  '/assets/assets/levels/level4_archive.png',
  '/assets/assets/levels/level3_gallery.png',
  '/assets/assets/levels/level2_boiler.png',
  '/assets/assets/levels/level5_core.png'
];

const preloadImages = (srcArray) => {
  return Promise.all(
    srcArray.map((src) =>
      new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = resolve;
      })
    )
  );
};

const Loader = ({ onFinish }) => {
  useEffect(() => {
    console.log('Loader стартует');
    const minTime = new Promise((resolve) => setTimeout(resolve, 2000));
    const preload = preloadImages(imageSources);

    Promise.all([minTime, preload])
      .then(() => onFinish())
      .catch(() => onFinish());
  }, [onFinish]);

  return (
    <div className="loader-container">
      <img src={heartImage} alt="heartbeat" className="heartbeat" />
      <h1 className="loader-title">Mouse Trap!</h1>
    </div>
  );
};

export default Loader;
