# Forms and User Input in React 📋

A comprehensive demonstration of three distinct form handling approaches in React: keystroke validation, form submission validation, and built-in validation props.

## 📋 Overview

This project implements multiple form handling patterns through login and signup forms, showcasing different validation strategies and state management approaches. It features a custom `useInput` hook, validation utilities, and reusable form components.

## 🚀 Features

- **Three Validation Approaches**:
  ```javascript
  // 1. Keystroke Validation (StateLogin)
  const { value, handleInputChange, handleInputBlur, hasError } = useInput("");
  
  // 2. Form Submission Validation (Login)
  const [emailIsInvalid, setEmailIsInvalid] = useState(false);
  
  // 3. Built-in Validation Props (Signup)
  <input required minLength={8} type="password" />
  ```
  
- **Custom Input Hook**: Reusable form state management
- **Validation Utilities**: Email, length, and emptiness checks
- **Error Feedback**: Real-time validation messages
- **Form Components**: Reusable input components
- **Dynamic UI**: Conditional error rendering
- **State Management**: Multiple form handling patterns

## 🛠️ Technologies Used

- **Framework**: React 18 with Vite
- **Build Tool**: Vite 4.4.x
- **Custom Hooks**: useInput
- **Validation**: Custom utility functions
- **State Management**: useState, useReducer
- **Development**: ESLint configuration

## 🎓 Implementation Details

### Validation Functions
```javascript
export function isEmail(value) {
  return value.includes('@');
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}
```

### Custom useInput Hook
```javascript
export function useInput(defaultValue, validationFn) {
  const [value, setValue] = useState(defaultValue);
  const [didEdit, setDidEdit] = useState(false);
  
  const valueIsValid = validationFn(value);
  const hasError = didEdit && !valueIsValid;
  
  return {
    value,
    handleInputChange,
    handleInputBlur,
    hasError
  };
}
```

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^4.4.9"
}
```

## 🔍 Key Form Patterns

- **Real-time Validation**: Keystroke-based checks
- **Submit Validation**: Form-level validation
- **Native Validation**: HTML5 form validation
- **Custom Hooks**: Form state abstraction
- **Error States**: Comprehensive error handling
- **Component Design**: Reusable form elements

This project demonstrates professional-grade form handling with multiple validation strategies in React.