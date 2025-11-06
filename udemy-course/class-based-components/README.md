# Class-Based Components in React 🎓

A comprehensive demonstration of class-based component patterns in React, featuring an interactive user management system with search functionality and error boundaries.

## 📋 Overview

This project provides a practical implementation of class-based components in React, showcasing lifecycle methods, error boundaries, and context usage through a user management interface. It serves as a bridge between modern functional components and traditional class-based React development.

## 🚀 Features

- **Dynamic User Search**: Real-time user filtering with class component state
- **Error Boundary System**: Robust error handling with custom error UI
- **Context Integration**: UsersContext implementation with class consumers
- **Lifecycle Exploration**: Practical examples of all major lifecycle methods
- **User Management**: CRUD operations with class-based state
- **Interactive UI**: Real-time feedback and error states
- **Component Hierarchy**: Proper component composition patterns

## 🛠️ Technologies Used

- **Framework**: React 18 with class components
- **Build Tool**: Create React App
- **State Management**: Local state & Context API
- **Error Handling**: Custom Error Boundary classes
- **Development**: ESLint with React configuration

## 🎓 Implementation Details

### Class Components
- `UserFinder`: Class component with search functionality
- `Users`: Class-based list management
- `ErrorBoundary`: Custom error handling class
- `UsersContext`: Context implementation

### Lifecycle Methods
```jsx
componentDidMount() {
  // Initial data fetching
}
componentDidUpdate(prevProps, prevState) {
  // Search handling & updates
}
componentWillUnmount() {
  // Cleanup operations
}
```

### Error Boundary Pattern
```jsx
static getDerivedStateFromError(error) {
  return { hasError: true };
}
componentDidCatch(error, errorInfo) {
  // Error logging
}
```

## 📦 Dependencies

```json
{
  "react": "^18.0.0",
  "react-dom": "^18.0.0"
}
```

This project demonstrates the power and flexibility of class-based components in React, essential for maintaining legacy applications and understanding React's evolution.