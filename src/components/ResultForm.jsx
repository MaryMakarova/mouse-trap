import React, { useState } from 'react';
import '../styles/ResultForm.css';

const ResultForm = ({ hero, remainingTime, endingKey, memoryRoom, onSave }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    if (!name.trim()) return;

    const newResult = {
      name,
      date: new Date().toISOString().split('T')[0],
      hero,
      remainingTime,
      endingKey,
      memoryRoom
    };

    const saved = JSON.parse(localStorage.getItem('results') || '[]');
    saved.push(newResult);
    localStorage.setItem('results', JSON.stringify(saved));

    onSave();
  };

  return (
    <div className="result-form-screen">
      <div className="result-form-card">
        <h2>Enter your name</h2>
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button className="button-steampunk" onClick={handleSubmit}>
          Save & View Rating
        </button>
      </div>
    </div>
  );
};

export default ResultForm;
