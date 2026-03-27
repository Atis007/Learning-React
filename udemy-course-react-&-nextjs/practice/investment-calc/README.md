# Investment Calculator 💰

A React-based investment calculator that helps users visualize the growth of their investments over time with compound interest calculations.

## 📋 Overview

This is an interactive investment calculator built with React and Vite that allows users to input their investment parameters and see projected returns over time. The application demonstrates React fundamentals including state management, form handling, and dynamic calculations.

## 🚀 Features

- **Investment Input Form**: Enter initial investment, annual contributions, expected return rate, and investment duration
- **Real-time Calculations**: See instant updates as you modify input values
- **Detailed Results Table**: View year-by-year breakdown of investment growth
- **Input Validation**: Ensures valid input parameters (duration must be greater than 0)
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Professional UI**: Clean and intuitive interface with investment-focused styling

## 🛠️ Technologies Used

- **Frontend**: React 19, JSX
- **Build Tool**: Vite 7.1.5
- **Styling**: CSS
- **Development**: ESLint for code quality

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "vite": "^7.1.5"
}
```

## 🎓 React Concepts You Can Learn

This project is perfect for learning practical React development with real-world applications:

### 🔥 React State Management
- **useState Hook**: Managing form inputs and application state
- **Object State**: Handling complex state objects with multiple properties
- **State Updates**: Functional updates with spread operator
- **Computed Values**: Deriving calculations from state

### 📝 Form Handling & User Input
- **Controlled Components**: Managing form inputs with React state
- **Input Validation**: Client-side validation and error handling
- **Real-time Updates**: Instant feedback as users type
- **Number Input Handling**: Converting strings to numbers properly
- **Form State Management**: Coordinating multiple input fields

### 🧮 Dynamic Calculations & Data Processing
- **Mathematical Operations**: Compound interest calculations
- **Data Transformation**: Converting input data to display format
- **Array Operations**: Generating tables of calculated results
- **Conditional Logic**: Handling edge cases and validation
- **Number Formatting**: Displaying currency and percentages

### 🎯 Component Architecture
- **Component Composition**: Breaking app into focused components
- **Props Passing**: Sending data and functions between components
- **Separation of Concerns**: Logic separation between UI and calculations
- **Reusable Components**: Building flexible, configurable components

### 💡 Advanced React Patterns
- **Conditional Rendering**: Showing/hiding content based on validation
- **Event Handling**: onChange events for form inputs
- **Utility Functions**: Extracting business logic into separate modules
- **Performance Considerations**: Efficient re-rendering patterns

### 🏗️ JavaScript Concepts
- **Object Destructuring**: Clean syntax for accessing state properties
- **Spread Operator**: Immutable state updates
- **Array Methods**: map, forEach for data processing
- **Template Literals**: Dynamic string generation
- **Arrow Functions**: Modern JavaScript function syntax

## 🗂️ Project Structure

```
src/
├── components/
│   ├── UserInput.jsx      # Input form for investment parameters
│   └── Results.jsx        # Results table displaying calculations
├── util/
│   └── investment.js      # Investment calculation functions and utilities
├── assets/
│   └── investment-calculator-logo.png  # App logo
├── App.jsx               # Main application component
├── index.jsx             # App entry point
└── index.css             # Global styles and component styling
public/
└── investment-calculator-logo.png  # Public assets
```

## ⚙️ Setup & Installation

1. **Clone the repository**
   ```bash
   git clone [repository-url]
   cd investment-calc
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
   Navigate to `http://localhost:5173` (Vite's default port)

## 🔧 Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the app for production
- `npm run lint` - Run ESLint for code quality checks
- `npm run preview` - Preview the production build locally

## � How to Use

1. **Enter Investment Details**:
   - Initial Investment: Your starting investment amount
   - Annual Investment: Additional yearly contributions
   - Expected Return: Annual return rate percentage
   - Duration: Investment period in years

2. **View Results**: The results table updates automatically showing:
   - Year-by-year investment growth
   - Interest earned each year
   - Total investment value
   - Cumulative interest earned

3. **Experiment**: Adjust values to see how different scenarios affect your returns

## 💡 Learning Path

This project is ideal for developers who want to:

1. **Practice React Fundamentals**: State management and component communication
2. **Learn Form Handling**: Controlled components and user input validation
3. **Apply Math in Programming**: Implement financial calculations in code
4. **Build Practical Applications**: Create tools that solve real-world problems
5. **Master React Patterns**: Component architecture and data flow

## 🎯 Key Learning Outcomes

After studying this project, you'll understand:
- How to handle complex form state in React
- Implementing real-time calculations and updates
- Component communication and data flow
- Input validation and error handling
- Building user-friendly interfaces for data input

## �📊 Calculation Features

The calculator computes:
- **Annual Interest**: Earned interest for each year
- **Investment Value**: Total value at the end of each year
- **Total Interest**: Cumulative interest earned
- **Invested Capital**: Total amount invested over time

### Investment Formula
The app uses compound interest calculations:
```
Year Value = (Previous Value + Annual Investment) × (1 + Return Rate)
```

## 📱 Usage

1. **Initial Investment**: Enter your starting investment amount
2. **Annual Investment**: Set how much you plan to invest each year
3. **Expected Return**: Input your expected annual return percentage
4. **Duration**: Specify the investment time frame in years
5. **View Results**: The table automatically updates showing year-by-year projections

## 🔧 Key Features

- **Component-Based Architecture**: Modular React components for maintainability
- **State Management**: Uses React useState hook for form and calculation state
- **Input Validation**: Prevents invalid calculations with user-friendly error messages
- **Internationalization**: Uses browser's Intl API for proper number formatting
- **Performance**: Optimized calculations with efficient re-rendering

## 💡 Learning Objectives

This project demonstrates:
- React functional components and hooks
- State management with useState
- Component communication via props
- Form handling and controlled inputs
- Conditional rendering
- JavaScript array methods and calculations
- CSS styling and responsive design

## 🤝 Contributing

Feel free to submit issues and pull requests to improve the calculator's functionality or add new features.

## 📄 License

This project is open source and available under the [MIT License].