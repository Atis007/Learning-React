# Place Picker Project

This project is a React application that allows users to select places they'd like to visit from a list of available locations. The selected places are saved to the browser's local storage. The list of available places is sorted based on the user's current location.

## What You Can Learn From This Project

This project serves as a practical example for understanding several intermediate and advanced React concepts.

### Core React Hooks
- **`useState`**: For managing component-level state, such as the list of picked places and the visibility of the modal.
- **`useRef`**: Used for two distinct purposes:
    1. To get a reference to a DOM element (the modal dialog).
    2. To store a value (`selectedPlace.current`) that can be changed without causing a re-render.
- **`useEffect`**: To handle side effects. Key examples include:
    - Fetching the user's geolocation when the application starts.
    - Setting timers (`setTimeout`, `setInterval`) for the auto-delete confirmation.
    - Understanding the importance of dependency arrays and effect cleanup functions.

### Advanced Component Interaction
- **`forwardRef` & `useImperativeHandle`**: Demonstrates how a parent component (`App`) can call methods on a child component (`Modal`) to open and close it. This is a powerful pattern for controlling components imperatively while keeping their internal logic encapsulated.
- **Portals (`createPortal`)**: Shows how to render a component (the `Modal`) in a different part of the DOM, which is essential for overlays, modals, and tooltips to avoid CSS stacking issues.

### State Management and Data Flow
- **Props for Communication**: Passing functions down as props to handle events, such as `onSelectPlace`, `onConfirm`, and `onCancel`.
- **Derived State**: Computing initial state from another source (`storedPlaces` is derived from `storedIds`).
- **Data Persistence**: Using the browser's `localStorage` to save user data between sessions, demonstrating how to `getItem`, `setItem`, and parse JSON data.

### Browser APIs
- **Geolocation API**: Interacting with browser-native APIs (`navigator.geolocation`) as a side effect within a `useEffect` hook.
- **Timers**: Using `setTimeout` and `setInterval` to create time-based interactions and understanding the need to clean them up to prevent memory leaks.
- **DOM Manipulation via Refs**: Directly calling DOM methods like `.showModal()` and `.close()` on a `<dialog>` element managed by a ref.
