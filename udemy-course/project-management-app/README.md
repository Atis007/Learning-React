# Project Management App

This is a React application for managing simple projects and their associated tasks. Users can create new projects, add tasks to them, and view the details of a selected project.

## What You Can Learn From This Project

This project is an excellent case study in structuring a React application, managing complex state, and building reusable components.

### Application Structure and State Management
- **Centralized State**: Demonstrates "lifting state up" where the main `App` component manages the core application state (projects, tasks) and passes it down to child components via props.
- **Complex State Objects**: Managing state that is an object containing nested arrays (e.g., a list of projects, where each project has a list of tasks). This involves learning patterns for safely updating nested, immutable state.
- **Conditional Rendering**: A key feature of the app is rendering different components based on the current state. For example, it shows a "No Project Selected" view, a "New Project" creation form, or the "Selected Project" details.

### Component Design and Reusability
- **Component Composition**: The UI is built from many small, reusable components like `Button`, `Input`, and `Modal`. This promotes a clean and maintainable codebase.
- **`forwardRef` for Input Components**: The custom `Input` component likely uses `forwardRef` to allow parent components to get a reference to the native `<input>` element, which is useful for reading its value.
- **`useImperativeHandle` for Modals**: The `Modal` component uses `useImperativeHandle` to expose a controlled API (`open`, `close`) to parent components, hiding its internal implementation details.

### Form Handling
- **Controlled vs. Uncontrolled Components**: This project provides a practical example of handling user input from forms to create new projects and tasks. It highlights the use of `useRef` to gather input from multiple fields on form submission.

### Styling with Utility-First CSS
- **Tailwind CSS**: The project is styled using Tailwind CSS, demonstrating how to set up and use a utility-first CSS framework in a modern React project with Vite. This includes configuration via `tailwind.config.js` and `postcss.config.js`.
