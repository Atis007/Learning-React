# Shopping Cart

This project is a simple e-commerce front-end application built with React. It displays a list of products that users can add to a shopping cart. The cart's contents and total can be viewed in a modal.

## What You Can Learn From This Project

This project is primarily focused on demonstrating how to manage global state in a React application using the Context API, which is a crucial skill for building larger applications.

### Global State Management with Context API
- **`createContext`**: Learn how to create a new Context object to hold and transport global data across the application.
- **Provider Component**: Understand how to create a custom Provider component (`ShoppingCartContext.Provider`) that wraps the application (or a part of it) and holds the actual state logic. This component will contain the state (`useState` or `useReducer`) and the functions to modify that state.
- **`useContext` Hook**: See how any child component in the tree can easily access the global state and dispatch functions by using the `useContext` hook, without needing to receive props through every intermediate component.

### Avoiding "Prop Drilling"
- This project is the perfect example of why the Context API is so powerful. It solves the problem of "prop drilling," where you have to pass props through multiple layers of components that don't actually need the data themselves, just to get it to a deeply nested child that does.

### Advanced State Logic with `useReducer` (Potential)
- While not explicitly shown without the file content, shopping cart logic is a classic use case for the `useReducer` hook within a Context provider. It helps manage complex state transitions (adding items, updating quantities, removing items) in a more organized and predictable way than using multiple `useState` calls.

### Component Architecture
- **Separation of Concerns**: The project demonstrates a clean separation between presentational components (like `Product`, `Header`) and container components or hooks that manage logic (the `ShoppingCartContext`).
- **Component Composition**: The application is built by composing various components together, each with a specific responsibility, leading to a more modular and understandable codebase.
