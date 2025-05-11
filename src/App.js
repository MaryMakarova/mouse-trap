import './styles/global-ui.css';
import React, { useState, useEffect } from 'react';
import Loader from './components/Loader';
import IntroScreen from './components/IntroScreen';
import HeroSelect from './components/HeroSelect';
import LevelScene from './components/LevelScene';
import FinalScreen from './components/FinalScreen';
import ResultForm from './components/ResultForm';
import RatingBoard from './components/RatingBoard';
import ResultsScreen from './components/ResultsScreen';
import ChoiceScreen from './components/ChoiceScreen';
import MemoryRoomScreen from './components/MemoryRoomScreen';
import ScreenTooSmall from './components/ScreenTooSmall';
import rawLevels from './data/levels.json';

function App() {
  const [loading, setLoading] = useState(true);
  const [introDone, setIntroDone] = useState(false);
  const [selectedHero, setSelectedHero] = useState(null);
  const [currentLevel, setCurrentLevel] = useState(0);
  const [remainingTime, setRemainingTime] = useState(100);
  const [levelResults, setLevelResults] = useState([]);
  const [endingChoice, setEndingChoice] = useState(null);
  const [showResultForm, setShowResultForm] = useState(false);
  const [showRating, setShowRating] = useState(false);
  const [memoryRoomUsed, setMemoryRoomUsed] = useState(false);
  const [isTooSmall, setIsTooSmall] = useState(window.innerWidth < 750);

  function shuffleOptions(levels) {
    return levels.map(level => {
      const entries = Object.entries(level.options);
      const shuffled = Object.fromEntries(entries.sort(() => Math.random() - 0.5));
      return { ...level, options: shuffled };
    });
  }

  const levels = shuffleOptions(rawLevels);

  useEffect(() => {
    const handleResize = () => {
      setIsTooSmall(window.innerWidth < 750);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (isTooSmall) return <ScreenTooSmall />;

  const resetGame = () => {
    setSelectedHero(null);
    setCurrentLevel(0);
    setRemainingTime(100);
    setIntroDone(false);
    setShowResultForm(false);
    setShowRating(false);
    setEndingChoice(null);
    setLevelResults([]);
    setMemoryRoomUsed(false);
  };

  const endingKey = remainingTime >= 70
    ? 'brilliant'
    : remainingTime >= 30
      ? 'tactician'
      : 'barely';

  const perfectRun = levelResults.length === levels.length &&
    levelResults.every((r) => r.success === true);

  if (loading) return <Loader onFinish={() => setLoading(false)} />;
  if (!introDone) return <IntroScreen onContinue={() => setIntroDone(true)} />;
  if (!selectedHero) return <HeroSelect onSelect={(hero) => setSelectedHero(hero)} />;

  if (showRating) {
    return (
      <ResultsScreen>
        <RatingBoard onRestart={resetGame} />
      </ResultsScreen>
    );
  }

  if (showResultForm) {
    return (
      <ResultsScreen>
        <ResultForm
          hero={selectedHero}
          remainingTime={remainingTime}
          endingKey={endingKey}
          memoryRoom={memoryRoomUsed}
          onSave={() => setShowRating(true)}
        />
      </ResultsScreen>
    );
  }

  if (currentLevel >= levels.length && perfectRun && !endingChoice) {
    return <ChoiceScreen onChoose={(choice) => setEndingChoice(choice)} />;
  }

  if (currentLevel >= levels.length && !endingChoice) {
    return (
      <FinalScreen
        hero={selectedHero}
        remainingTime={remainingTime}
        endingKey={endingKey}
        onSave={() => setShowResultForm(true)}
      />
    );
  }

  if (endingChoice === 'memory-room') {
    return (
      <MemoryRoomScreen
        hero={selectedHero}
        onFinish={() => {
          setMemoryRoomUsed(true);
          setEndingChoice('memory-room-finished');
        }}
      />
    );
  }

  if (endingChoice) {
    return (
      <FinalScreen
        hero={selectedHero}
        remainingTime={remainingTime}
        endingKey={endingKey}
        onSave={() => setShowResultForm(true)}
      />
    );
  }

  return (
    <LevelScene
      key={currentLevel}
      hero={selectedHero}
      levelIndex={currentLevel}
      levels={levels}
      onNext={() => setCurrentLevel((prev) => prev + 1)}
      onUpdateTime={(spent) => setRemainingTime((prev) => prev - spent)}
      remainingTime={remainingTime}
      onRecordLevel={(success) => {
        setLevelResults((prev) => [...prev, { level: currentLevel, success }]);
      }}
    />
  );
}

export default App;
