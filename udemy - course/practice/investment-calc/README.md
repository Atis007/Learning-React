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

## 📊 Calculation Features

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