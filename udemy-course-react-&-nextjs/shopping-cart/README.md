# Shopping Cart Application 🛒

A React e-commerce application demonstrating Context API implementation, cart state management, and modular component architecture.

## 📋 Overview

This project implements a complete shopping cart system with product listing, cart management, and checkout flow. It showcases global state management using Context API and demonstrates proper component architecture in React.

## 🚀 Features

### Context Implementation
```javascript
// Shopping Cart Context Setup
const ShoppingCartContext = createContext({
  items: [],
  addItem: () => {},
  removeItem: () => {}
});

export function ShoppingCartProvider({ children }) {
  const [shoppingCart, setShoppingCart] = useState({
    items: []
  });

  function handleAddItemToCart(id) {
    setShoppingCart(prevCart => ({
      items: [...prevCart.items, { id, quantity: 1 }]
    }));
  }

  const ctxValue = {
    items: shoppingCart.items,
    addItem: handleAddItemToCart
  };

  return (
    <ShoppingCartContext.Provider value={ctxValue}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
```

### Cart Management
```javascript
// Cart Item Component
function CartItem({ id, quantity }) {
  const { removeItem } = useContext(ShoppingCartContext);
  
  return (
    <li>
      <span>{quantity}x</span>
      <button onClick={() => removeItem(id)}>
        Remove
      </button>
    </li>
  );
}
```

## 🛠️ Technologies Used

- **Framework**: React 18
- **Build Tool**: Vite 4.4.x
- **State Management**: Context API
- **UI Components**: Custom modular components
- **Development**: ESLint + React config

## 🎓 Implementation Details

### State Management
- Context API for global cart state
- useState for local component state
- Event handlers for cart operations
- Price calculations and totals

### Component Architecture
- Product listing components
- Cart management components
- Modal implementation
- Header with cart preview

### Shopping Cart Features
- Add/remove items
- Quantity management
- Price calculations
- Cart persistence
- Checkout process

## 📦 Dependencies

```json
{
  "react": "^18.2.0",
  "react-dom": "^18.2.0",
  "vite": "^4.4.9"
}
```

## 🔍 Key Concepts

- Context API Usage
- State Management Patterns
- Component Composition
- Event Handling
- Modal Implementation
- Cart Logic
- Price Calculations
- Product Management

This project demonstrates professional implementation of e-commerce functionality in React.
