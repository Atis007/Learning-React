# Form Actions in React 19+ 🔄

A modern React project showcasing the new Form Actions API introduced in React 19, demonstrating advanced form handling through a comprehensive signup flow.

## 📋 Overview

This project implements forms using React's new Form Actions pattern, featuring a sophisticated signup process with validation, multi-field handling, and error management. It demonstrates the power of React 19's form handling capabilities.

## 🚀 Features

- **Form Actions Implementation**:
  ```javascript
  function signupAction(prevFormState, formData) {
    const email = formData.get("email");
    const password = formData.get("password");
    // Validation and error handling
    return { errors };
  }
  ```

- **Advanced Form Handling**:
  - Multiple field types (text, password, checkbox)
  - Multi-select handling with `formData.getAll()`
  - Comprehensive validation suite
  - Error state management
  - Terms and conditions checking

- **Validation Suite**:
  ```javascript
  isEmail(email)
  hasMinLength(password, 8)
  isEqualToOtherValue(password, confirmPassword)
  isNotEmpty(firstName)
  ```

- **Form State Management**: useActionState hook usage
- **Error Feedback**: Detailed validation messaging
- **Field Types**: Text, password, select, checkbox inputs

## 🛠️ Technologies Used

- **Framework**: React 19
- **Build Tool**: Vite 4.4.x
- **Form Handling**: New Form Actions API
- **Validation**: Custom utility functions
- **State Management**: useActionState hook
- **Development**: ESLint + React configuration

## 🎓 Implementation Details

### Form Action Pattern
```javascript
<form action={signupAction}>
  <input name="email" type="email" required />
  <input name="password" type="password" minLength={8} />
  <select name="role" required>
    <option value="user">User</option>
    <option value="admin">Admin</option>
  </select>
</form>
```

### Error Handling
```javascript
let errors = [];
if (!isEmail(email)) {
  errors.push("Invalid email address.");
}
if (!isNotEmpty(password) || !hasMinLength(password, 8)) {
  errors.push("Password must be at least 8 characters long.");
}
```

## 📦 Dependencies

```json
{
  "react": "^19.0.0",
  "react-dom": "^19.0.0",
  "vite": "^4.4.9"
}
```

## 🔍 Key Form Concepts

- **Form Data API**: Modern form data extraction
- **Action Functions**: Server action simulation
- **Validation Logic**: Comprehensive input checking
- **Error Management**: Structured error handling
- **Field Management**: Multiple input types
- **State Updates**: Form state lifecycle

This project demonstrates professional implementation of React 19's new Form Actions feature in a real-world application context.