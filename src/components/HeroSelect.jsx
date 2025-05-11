import React from 'react';
import Slider from 'react-slick';
import '../styles/HeroSelect.css';
import HeroCard from './HeroCard';
import backgroundImage from '../assets/intro_background.png';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const heroes = [
    {
        name: 'Twitch',
        title: 'The Swift Shadow',
        description: 'A blur in the dark, faster than a gear can turn. Twitch never looks back — only forward, and fast.',
        specialty: 'Acrobatics, dodging traps, speed-based navigation.',
        image: require('../assets/heroes/twitch_neutral.png')
    },
    {
        name: 'Bristle',
        title: 'The Ironpaw',
        description: 'If there’s no way forward, Bristle makes one. Solid as steel, loud as thunder.',
        specialty: 'Brute force, breaking obstacles, enduring danger.',
        image: require('../assets/heroes/bristle_neutral.png')
    },
    {
        name: 'Gizmo',
        title: 'The Tinkerer',
        description: 'To others it’s a trap. To Gizmo, it’s a broken idea begging to be fixed.',
        specialty: 'Engineering, activating and repairing steampunk mechanisms.',
        image: require('../assets/heroes/gizmo_neutral.png')
    },
    {
        name: 'Whisper',
        title: 'The Silent Step',
        description: 'No one hears her coming. No one sees her leave. But doors open where she walks.',
        specialty: 'Stealth, discovering hidden paths, decoding secrets.',
        image: require('../assets/heroes/whisper_neutral.png')
    }
];

const PrevArrow = ({ onClick }) => (
    <button className="button-steampunk round custom-arrow prev" onClick={onClick}>
        <span className="arrow-symbol flipped">➾</span>
    </button>
);

const NextArrow = ({ onClick }) => (
    <button className="button-steampunk round custom-arrow next" onClick={onClick}>
        <span className="arrow-symbol">➾</span>
    </button>
);

const HeroSelect = ({ onSelect }) => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />
    };

    return (
        <div
            className="hero-select-background"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="hero-select-content">
                <h2 className="hero-select-title">Choose Your Hero</h2>
                <div className="hero-slider-wrapper">
                    <Slider {...settings}>
                        {heroes.map(hero => (
                            <div key={hero.name} className="slide-container">
                                <HeroCard hero={hero} onSelect={onSelect} />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
};


export default HeroSelect;
