const endings = {
    brilliant: {
        minTime: 70,
        maxTime: 100,
        title: "A Brilliant Escape",
        rating: "Escape Rating: 70–100 minutes remaining",
        text: `You didn’t just escape — you outsmarted the Machine.
  
  The gears slowed for you. The traps gave way. The Labyrinth will remember your name — not as a prisoner, but as a master.
  
  A flawless run. An engineer’s envy. You are legend.`,
        background: require('../assets/endings/ending_brilliant.png'),
        emotion: 'happy'
    },
    tactician: {
        minTime: 30,
        maxTime: 69,
        title: "The Tactician’s Route",
        rating: "Escape Rating: 30–69 minutes remaining",
        text: `The labyrinth fought back, but you adapted.
  
  Every challenge met with thought. Every detour — a calculated risk. You escaped with time to spare, and stories to tell.
  
  You are a survivor, a strategist, and a name worth remembering.`,
        background: require('../assets/endings/ending_tactician.png'),
        emotion: 'neutral'
    },
    barely: {
        minTime: 0,
        maxTime: 29,
        title: "Escape... Just in Time",
        rating: "Escape Rating: 0–29 minutes remaining",
        text: `The core was shaking. Steam filled the halls. You ran on instinct, not planning.
  
  And yet — you made it. Barely. But here you are.
  
  No glory. Just grit. And the will to make it out.`,
        background: require('../assets/endings/ending_barely.png'),
        emotion: 'tired'
    }
};

export default endings;
