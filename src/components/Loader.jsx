import React, { useEffect } from 'react';
import '../styles/Loader.css';
import heartImage from '../assets/heart.png'; 

const Loader = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish(); 
    }, 3000);
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="loader-container">
      <img src={heartImage} alt="heartbeat" className="heartbeat" />
      <h1 className="loader-title">Mouse Trap!</h1>
    </div>
  );
};

export default Loader;
