import React from 'react';
import '../styles/ChoiceScreen.css';

const ChoiceScreen = ({ onChoose }) => {
  return (
    <div className="choice-screen">
      <div className="choice-container">
        <h1 className="choice-title">The maze offers you a choice</h1>
        <p className="choice-text">
          The core falls silent.<br />
          The pulses fade. The gears lock into stillness.<br /><br />
          In front of you, two lights flicker to life.<br />
          One leads to escape — clean, fast, final.<br />
          The other... hums with a strange warmth, like memory stored in metal.
        </p>
        <div className="choice-buttons">
          <button className="button-steampunk" onClick={() => onChoose('true-exit')}>Leave the maze</button>
          <button className="button-steampunk" onClick={() => onChoose('memory-room')}>Stay a moment longer</button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceScreen;
