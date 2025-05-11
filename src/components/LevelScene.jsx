import React, { useEffect, useState } from 'react';
import '../styles/LevelScene.css';
import portraits from '../data/portraitMap';
import backgroundMap from '../data/backgroundMap';

const LevelScene = ({
  hero,
  levelIndex = 0,
  levels,
  onNext,
  onUpdateTime,
  remainingTime,
  onRecordLevel
}) => {
  const level = levels[levelIndex] || {};
  const heroKey = hero.toLowerCase();

  const [selectedOption, setSelectedOption] = useState(null);
  const [emotion, setEmotion] = useState(level.heroEmotion || 'neutral');
  const [reaction, setReaction] = useState('');
  const [showCard, setShowCard] = useState(false);
  const [timeSpent, setTimeSpent] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowCard(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!level.heroEmotion || !level.options) {
    return <div className="level-error"><p>Уровень не найден или повреждён.</p></div>;
  }

  const portraitKey = `${heroKey}_${emotion}`;
  const portraitSrc = portraits[portraitKey] || portraits[`${heroKey}_neutral`];
  const backgroundSrc = backgroundMap[level.backgroundImage];
  const options = Object.entries(level.options);

  const handleChoice = (choiceText) => {
    const optimalText = level.options[heroKey];
    const isSuccess = choiceText === optimalText;

    const newEmotion = isSuccess ? 'happy' : 'tired';
    const newReaction = isSuccess ? level.successReaction : level.failureReaction;
    const timeLost = isSuccess
      ? (level.timePenalty?.success || 2)
      : (level.timePenalty?.failure || 15);

    setSelectedOption(choiceText);
    setEmotion(newEmotion);
    setReaction(newReaction);
    setTimeSpent(timeLost);
    onUpdateTime(timeLost);
    onRecordLevel(isSuccess);
  };

  return (
    <div
      className="level-scene"
      style={{ backgroundImage: `url(${backgroundSrc})` }}
    >
      <div className="time-counter">
        <span>{remainingTime} minutes left</span>
      </div>

      <h2 className="level-title">{level.title}</h2>
      <p className="level-subtitle">{level.description}</p>

      {showCard && (
        <div className="level-card fade-in">
          <div className="level-left">
            <img src={portraitSrc} alt={`${hero} portrait`} className="level-portrait" />
          </div>

          <div className="level-right">
            {!selectedOption ? (
              <>
                <p className="level-replica">{level.heroReaction}</p>
                <div className="level-actions">
                  {options.map(([_, text], index) => (
                    <button
                      key={index}
                      className="button-steampunk auto-fit-text"
                      onClick={() => handleChoice(text)}
                    >
                      {text}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="level-reaction fade-reaction">
                <div className="level-reaction-left">
                  {timeSpent !== null && (
                    <div className="time-spent">
                      <p>Minutes lost</p>
                      <div className="time-digit">{timeSpent}</div>
                    </div>
                  )}
                </div>

                <div className="level-reaction-right">
                  <p>{reaction}</p>
                  <button className="button-steampunk" onClick={onNext}>
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LevelScene;
