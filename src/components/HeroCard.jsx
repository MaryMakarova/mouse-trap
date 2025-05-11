import React from 'react';
import '../styles/HeroCard.css';

const HeroCard = ({ hero, onSelect }) => {
    return (
        <div className="hero-card" onClick={() => onSelect(hero.name)}>
            <img src={hero.image} alt={hero.name} className="hero-image" />
            <h3>
                {hero.name} – <span className="hero-title">{hero.title}</span>
            </h3>
            <p className="hero-description">"{hero.description}"</p>
            <p className="hero-specialty">
                <strong>Specialty:</strong> {hero.specialty}
            </p>
        </div>
    );
};

export default HeroCard;
