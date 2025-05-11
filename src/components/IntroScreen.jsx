import React from 'react';
import '../styles/IntroScreen.css';
import backgroundImage from '../assets/intro_background.png';

const IntroScreen = ({ onContinue }) => {
    return (
        <div
            className="intro-container fade-in"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="intro-text">
                <h1 className="maze-welcome">Welcome to the Maze</h1>
                <p>In the heart of the Clockwork City lies <strong>The Labyrinth Mechanica</strong> — a sprawling, ever-shifting machine designed by the Founders.</p>
                <p>No mouse enters it by accident. Some come to prove their worth. Others seek the knowledge hidden within.</p>
                <p>But now the labyrinth is failing. Its gears grind against rust. Its steam leaks into madness.</p>
                <p><strong>You have 100 minutes</strong> before the system collapses — or before you’re locked inside forever.</p>
                <p>Escape is not just survival. It is legacy.</p>
                <p><em>Choose your path. Choose your mind. Escape, if you can.</em></p>
                <button onClick={onContinue} className="button-steampunk">Continue</button>
            </div>
        </div>
    );
};

export default IntroScreen;
