# Place Picker Project 🗺️

A sophisticated React application demonstrating advanced hooks, browser APIs, and component patterns through a location-based place selection interface.

## 📋 Overview

This project implements a place selection system with geolocation sorting, local storage persistence, and modal interactions. It serves as a comprehensive example of combining React's advanced features with browser APIs.

## 🚀 Features

### Hook Implementation
```javascript
// useRef for Modal Control
const modal = useRef();
const selectedPlace = useRef();

// useEffect with Cleanup
useEffect(() => {
  navigator.geolocation.getCurrentPosition((position) => {
    const sortedPlaces = sortPlacesByDistance(
      AVAILABLE_PLACES,
      position.coords.latitude,
      position.coords.longitude
    );
    setAvailablePlaces(sortedPlaces);
  });
}, []);
```

### Advanced Component Patterns
```javascript
// Modal with forwardRef & useImperativeHandle
const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();
  useImperativeHandle(ref, () => ({
    open() {
      dialog.current.showModal();
    }
  }));
  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById('modal')
  );
});
```

### Local Storage Integration
```javascript
// Persistent Storage Pattern
useEffect(() => {
  const storedIds = JSON.parse(localStorage.getItem('selectedPlaces')) || [];
  const storedPlaces = storedIds.map(id =>
    AVAILABLE_PLACES.find(place => place.id === id)
  );
  setPickedPlaces(storedPlaces);
}, []);
```

## 🛠️ Technologies Used

- **Framework**: React 18
- **Build Tool**: Vite 4.4.x
- **Browser APIs**: Geolocation, LocalStorage
- **React Features**: Portals, Refs, Hooks
- **Development**: ESLint + React config

## 🎓 Implementation Details

### Core React Hooks
- **useState**: State management for places and UI
- **useRef**: DOM access and value persistence
- **useEffect**: Side effects and cleanup
- **useImperativeHandle**: Modal control API

### Component Patterns
- **forwardRef**: Modal implementation
- **Portals**: Modal rendering
- **Refs**: DOM manipulation
- **Cleanup Functions**: Timer and event management

### Browser Integration
- Geolocation for place sorting
- LocalStorage for data persistence
- Timer management
- Modal dialog control

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^4.4.9"
}
```

## 🔍 Key Concepts

- Advanced Hook Usage
- Component Communication
- Browser API Integration
- State Persistence
- Modal Management
- Geolocation Handling
- Effect Cleanup
- Ref Manipulation

This project demonstrates professional-grade implementation of React's advanced features with real-world browser APIs.
