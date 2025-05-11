import React from 'react';
import '../styles/ResultsScreen.css';
import backgroundImage from '../assets/rating_board.png';

const ResultsScreen = ({ children }) => {
  return (
    <div
      className="results-screen"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {children}
    </div>
  );
};

export default ResultsScreen;
