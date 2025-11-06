# Practice: Food Order App 🍽️

A practice project implementing a complete food ordering system to demonstrate multiple React concepts and patterns.

## 📋 Overview

This practice implementation of a food ordering system demonstrates the practical application of React concepts including context management, component composition, and state management through a real-world scenario.

## 🚀 React Concepts Practiced

### Context Management
```javascript
// Multiple Context Implementation
<UserProgressProvider>
  <CartContextProvider>
    <App />
  </CartContextProvider>
</UserProgressProvider>
```

### Component Architecture
- **Header**: Navigation and cart status display
- **Meals**: Dynamic menu rendering
- **Cart**: Shopping cart management
- **Checkout**: Order processing flow

### State Patterns
- Context-based cart state
- User progress tracking
- Modal management
- Form handling

## 🎓 Learning Implementation

### Context Usage
- CartContext for shopping cart state
- UserProgressContext for checkout flow
- Provider pattern implementation
- Context consumption patterns

### Component Patterns
```jsx
// Component Composition
function App() {
  return (
    <UserProgressProvider>
      <CartContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout />
      </CartContextProvider>
    </UserProgressProvider>
  );
}
```

### State Management
- Cart item tracking
- Order processing
- User interface state
- Form validation

## 🛠️ Technologies Used

- **Framework**: React 18
- **Build Tool**: Vite 4.4.x
- **State Management**: Context API
- **Component Design**: Composition pattern
- **Development**: ESLint + React config

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^4.4.9"
}
```

## 🔍 Concepts Mastered

- Context API Implementation
- Component Composition
- State Management Patterns
- Props and State Usage
- Event Handling
- Form Processing
- Modal Management
- Shopping Cart Logic

This practice project demonstrates the practical application of core React concepts in a real-world food ordering system.
- Multiple Context Providers
- Component Communication
- State Lifting
- Conditional Rendering
- User Progress Tracking
- Shopping Cart Logic

## 🛠️ Technologies Used

- React
- Context API
- JavaScript/JSX
- State Management
- Component Architecture

## 🔍 Implementation Details

- Cart system with context
- User progress tracking
- Checkout process
- Meal listing and selection
- Header with cart status
- Modular component structure

This practice project demonstrates practical implementation of React concepts in a real-world scenario.