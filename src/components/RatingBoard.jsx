import React, { useEffect, useState } from 'react';
import '../styles/RatingBoard.css';


const RatingBoard = ({ onRestart }) => {
    const [results, setResults] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('results') || '[]');
        setResults(saved.reverse());
    }, []);

    return (
        <div className="rating-board">
            <h1>Hall of Escapes</h1>
            <div className="rating-scroll">
                {results.length === 0 ? (
                    <p>No runs saved yet.</p>
                ) : (
                    <table>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Name</th>
                                <th>Hero</th>
                                <th>Time</th>
                                <th>Ending</th>
                            </tr>
                        </thead>
                        <tbody>
                            {results.map((r, idx) => (
                                <tr key={idx}>
                                    <td>{r.date}</td>
                                    <td>{r.name}</td>
                                    <td>{r.hero}</td>
                                    <td>{r.remainingTime}</td>
                                    <td>{r.endingKey}
                                        {r.memoryRoom ? ' ✦' : ''}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
            <button className="button-steampunk rating-restart" onClick={onRestart}>
                Start New Game
            </button>
        </div>


    );

};

export default RatingBoard;
