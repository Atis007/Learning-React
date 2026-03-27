# Tic-Tac-Toe Game 🎮

A feature-rich, interactive Tic-Tac-Toe game built with React that demonstrates advanced React concepts and state management patterns.

## 📋 Overview

This is a comprehensive Tic-Tac-Toe implementation that goes beyond the basic game mechanics. It features editable player names, move history tracking, game state management, and a clean, professional interface. The project serves as an excellent demonstration of React best practices and advanced component patterns.

## 🚀 Features

- **Interactive Gameplay**: Classic 3x3 Tic-Tac-Toe with X and O players
- **Editable Player Names**: Click to edit and customize player names
- **Move History**: Track and display the complete game history
- **Win Detection**: Automatic detection of winning combinations
- **Draw Detection**: Recognizes when games end in a tie
- **Game Reset**: Start a new game at any time
- **Active Player Highlighting**: Visual indication of whose turn it is
- **Responsive Design**: Works seamlessly on all device sizes

## 🛠️ Technologies Used

- **Frontend**: React 19, JSX
- **Build Tool**: Vite 4.4.5
- **Styling**: CSS with modern design patterns
- **State Management**: React useState Hook
- **Code Quality**: ESLint with React-specific rules

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "vite": "^4.4.5"
}
```

## 🎓 React Concepts You Can Learn

This project is an excellent resource for mastering intermediate to advanced React concepts:

### 🔥 Core React Mastery
- **Component Architecture**: Building modular, reusable components
- **Props & State Flow**: Managing data flow between parent and child components
- **Event Handling**: onClick events, form submissions, and user interactions
- **Conditional Rendering**: Dynamic UI based on game state
- **JSX Patterns**: Advanced JSX techniques and expressions

### 🪝 Advanced React Hooks
- **useState Hook**: Complex state management with objects and arrays
- **State Updates**: Functional updates and avoiding direct mutations
- **State Derivation**: Computing derived state from primary state
- **Multiple State Variables**: Managing related state efficiently

### 🧠 Advanced State Management Patterns
- **Immutable Updates**: Properly updating complex state objects
- **State Lifting**: Moving state up to share between components
- **Derived State**: Computing values from existing state
- **State Structure**: Designing optimal state architecture

### 🎯 Game Development Concepts
- **Game Logic**: Implementing complex business rules
- **Turn-Based Systems**: Managing player turns and game flow
- **Win Condition Detection**: Algorithm for checking winning patterns
- **Game State Management**: Tracking game progress and history

### 🏗️ Component Design Patterns
- **Controlled Components**: Managing form inputs with React state
- **Component Composition**: Building complex UIs from simple components
- **Prop Drilling**: Understanding data flow challenges and solutions
- **Event Bubbling**: Managing events in nested component structures

### 💡 Advanced JavaScript Concepts
- **Array Methods**: map, filter, find for data manipulation
- **Object Destructuring**: Clean code patterns for accessing data
- **Spread Operator**: Immutable state updates
- **Logical Operators**: Conditional rendering patterns

## 🗂️ Project Structure

```
src/
├── components/
│   ├── Player.jsx           # Player info with editable names
│   ├── GameBoard.jsx        # 3x3 game grid component
│   ├── Log.jsx             # Move history display
│   └── GameOver.jsx        # Game end screen with winner/draw
├── assets/
│   └── react.svg           # React logo
├── winning-combinations.js  # All possible winning patterns
├── App.jsx                 # Main game logic and state management
├── index.jsx               # Application entry point
└── index.css               # Game styling and animations
public/
├── game-logo.png           # Game branding
├── bg-pattern.png          # Background pattern (light)
└── bg-pattern-dark.png     # Background pattern (dark)
```

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd tic-tac-toe
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## 🎯 Game Rules

1. **Objective**: Be the first player to get three of your marks in a row
2. **Winning Conditions**: 
   - Three in a horizontal row
   - Three in a vertical column  
   - Three in a diagonal line
3. **Players**: Alternating turns between X and O
4. **Draw**: Game ends in a tie if all squares are filled without a winner

## 🧩 Component Architecture

### Main Components

- **App**: Central game controller managing all state
- **Player**: Handles player information and name editing
- **GameBoard**: Renders the 3x3 grid and handles square clicks
- **Log**: Displays chronological move history
- **GameOver**: Shows game results and restart option

### Key Features Implemented

- **Derived State**: Game board derived from move history
- **State Lifting**: Shared state managed in App component
- **Immutable Updates**: Proper state updates without mutations
- **Event Handling**: Click handlers for squares and buttons
- **Conditional Rendering**: Different UI states based on game status

## 💡 Advanced React Concepts Demonstrated

1. **State Management**
   - Complex state structures
   - State derivation patterns
   - Immutable update patterns

2. **Component Communication**
   - Props passing
   - Event callback functions
   - State lifting strategies

3. **Performance Optimization**
   - Efficient re-rendering
   - Minimal state updates
   - Smart component structure

4. **Code Organization**
   - Component separation
   - Utility function extraction
   - Clean code principles

## 🔧 Key Algorithms

### Win Detection
```javascript
// Checks all possible winning combinations
for (const combination of WINNING_COMBINATIONS) {
  const [first, second, third] = combination;
  if (gameBoard[first.row][first.column] === 
      gameBoard[second.row][second.column] === 
      gameBoard[third.row][third.column] && 
      gameBoard[first.row][first.column] !== null) {
    return gameBoard[first.row][first.column];
  }
}
```

### Move History Tracking
- Each move stored with position and player
- Game board reconstructed from move history
- Enables features like undo (potential enhancement)

## 🎨 Design Features

- **Modern UI**: Clean, professional game interface
- **Visual Feedback**: Hover effects and active states
- **Responsive Layout**: Adapts to different screen sizes
- **Smooth Animations**: Subtle transitions for better UX
- **Accessible Design**: Keyboard navigation support

## � Learning Path

This project is ideal for developers who want to:

1. **Master React State**: Learn complex state management patterns
2. **Build Interactive UIs**: Create engaging user interfaces
3. **Practice Algorithms**: Implement game logic and win detection
4. **Component Design**: Build reusable, well-structured components
5. **Modern React**: Use the latest React 19 features and patterns

## 🎯 Key Learning Outcomes

After studying this project, you'll understand:
- How to structure complex React applications
- Advanced state management techniques
- Component communication patterns
- Game development with React
- Clean code and React best practices

## �🔮 Potential Enhancements

- **Undo Functionality**: Step back through moves
- **AI Opponent**: Computer player with difficulty levels
- **Score Tracking**: Keep track of wins/losses across games
- **Theme Options**: Multiple visual themes
- **Sound Effects**: Audio feedback for moves and wins
- **Online Multiplayer**: Real-time multiplayer support

## 🤝 Contributing

Contributions are welcome! Areas for improvement:
- Enhanced AI for single-player mode
- Additional game modes (4x4, 5x5 grids)
- Tournament bracket system
- Improved animations and effects

## 📄 License

This project is open source and available under the [MIT License].

---

*This project demonstrates advanced React patterns and serves as an excellent learning resource for React state management, component architecture, and game development concepts.*