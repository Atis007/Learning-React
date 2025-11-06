# Quiz App

A small React quiz application built with Vite. This repository is a compact learning project that demonstrates core React concepts, component composition, basic state management, timers, and simple UI/UX for a quiz flow.

## Live demo
No public deployment included in this repository. You can run the app locally (instructions below).

## Features
- Multiple-choice quiz questions loaded from a local module (`src/questions.js`).
- Question component with answers, selection handling and scoring.
- Timer per question (visualized by `QuestionTimer.jsx`).
- Simple progress flow and summary screen at the end.
- Static assets served from `public/` and `src/assets/`.

## Tech stack
- React (JSX)
- Vite (dev server + bundling)
- Plain CSS for styles

## How to run (Windows, cmd.exe)
Open a terminal in the project root and run:

```cmd
npm install
npm run dev
```

The Vite dev server will start and print a local URL (usually http://localhost:5173). Open it in your browser to try the quiz.

## Project structure

Key files and folders:

- `index.html` — app entry HTML used by Vite.
- `src/main.jsx` — React entry; mounts the app.
- `src/App.jsx` — High-level app container and router-like logic.
- `src/questions.js` — Quiz data (questions, answers, correct answers).
- `src/components/Quiz.jsx` — Orchestrates the quiz flow.
- `src/components/Question.jsx` — Displays a single question and answers.
- `src/components/Answers.jsx` — Answer list + click handling.
- `src/components/QuestionTimer.jsx` — Timer UI and logic for each question.
- `src/components/Header.jsx` — Top header and branding.
- `src/components/Summary.jsx` — End-of-quiz summary and restart actions.
- `src/assets/` — Local images used by the UI.

## What you can learn from this project

This repo is a concise, hands-on example to practice many essential front-end concepts:

- React fundamentals: components, JSX, props and composition.
- State management with hooks: `useState` for selections, `useEffect` for side effects like timers.
- Component communication: lifting state up (parent controls score/time, children emit events).
- Timers and lifecycle: implementing countdowns with `setInterval`/`setTimeout` and cleaning them up.
- Conditional rendering: showing questions vs. summary, handling correct/incorrect feedback.
- Static data handling: importing question data from a module; discuss how to swap to a remote API.
- Asset management: importing and referencing images from `src/assets` and `public/`.
- Build tooling: using Vite for a fast dev server and production builds.
- UX basics: clear progression, feedback, and a summary screen with a restart flow.

Edge cases and practical concerns to think about:

- What should happen when there are no questions or malformed data?
- Handling slow/blocked timers (tab background throttling) and ensuring consistent scoring.
- Accessibility: keyboard navigation for answers and appropriate ARIA attributes.
- Persisting state between reloads (localStorage) or implementing resume functionality.
- Internationalization: moving static labels into a locale file.

## Suggested exercises / extensions

- Replace `src/questions.js` with a simple backend or local JSON fetch to practice asynchronous data loading.
- Add answer shuffling and per-question difficulty scoring.
- Add unit tests for components (React Testing Library + Jest/Vitest).
- Add keyboard controls and ARIA attributes to improve accessibility.
- Add animated transitions between questions and when showing the summary.
- Implement persistence (save progress to `localStorage`) and a resume feature.

## Quality gates you can apply

- Linting (ESLint) and formatting (Prettier).
- Type-checking by migrating to TypeScript or adding PropTypes.
- Component tests for rendering and timer behavior.

## Contributing
Feel free to fork and open pull requests. Small improvements (accessibility, tests, types) are welcome.
