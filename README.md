
# 🐭 Mouse Trap! A Steampunk Adventure

**Mouse Trap! A Steampunk Adventure** is a browser-based interactive quest game built with React. Styled in a whimsical steampunk aesthetic, the game blends narrative storytelling with strategic choices and time-based challenges.

This project was developed as part of a diploma thesis in web development and game design.


## Project Goals

The project aims to:

- Demonstrate practical use of **React components** and **state management** (`useState`, `useEffect`).
- Implement a **non-linear narrative** with a flexible choice-based system.
- Introduce a **virtual time mechanic** as an alternative to conventional scoring.
- Encourage **exploration and replayability** through hidden paths and character-specific abilities.

## Gameplay Overview

### Choose Your Mouse

At the beginning of the game, the player selects one of four unique mouse adventurers:

| Hero    | Description              | Special Ability                                       |
|---------|--------------------------|--------------------------------------------------------|
| Twitch  | Agile and quick          | Can acrobatically evade traps and jump over obstacles |
| Bristle | Strong warrior           | Smashes through barriers using brute force            |
| Gizmo   | Engineer and tinkerer    | Fixes and activates mechanical devices                |
| Whisper | Silent scout             | Discovers hidden passages and secret chambers         |

Each hero alters the outcomes of player choices.


### Navigating the Labyrinth

The game consists of a sequence of scenes, each representing a challenge or situation. In each scene:

- The player chooses from multiple actions.
- Choosing an action that fits the mouse's skill results in **minimal time loss** (e.g., -5 min).
- Poorly matched actions **cost more time** (e.g., -15 min).

There is **no game over** for wrong choices — but consequences shape the final result.


### Virtual Time

Players start with **100 virtual minutes**. The goal is to escape the mechanical labyrinth using as little time as possible.

| Remaining Time | Final Outcome                     |
|----------------|------------------------------------|
| 70–100 min     | Brilliant Escape                   |
| 30–69 min      | Veteran Tinkerer-Explorer          |
| 0–29 min       | Escape at the Last Moment          |


### Hidden Paths & Secrets

Perfect runs unlock **bonus scene**.

Progress is stored locally via **localStorage** for future reference.


## Technologies Used

- **React** (functional components, hooks)
- **CSS Modules** and variables
- **Virtual time mechanic** (custom logic)
- Optional progressive enhancement for desktop screens


## Installation & Launch

```bash
npm install
npm start
```

Open your browser at [http://localhost:3000](http://localhost:3000)

The game is optimized for **desktop resolutions (≥ 750px)**.



