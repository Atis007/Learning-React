"use client";
import { createContext, useState, useContext, useEffect } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    // Load basket from localStorage on initial render
    const storedItems = localStorage.getItem("basket");
    if (storedItems) {
      setItems(JSON.parse(storedItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(items));
  }, [items]);

  const addToBag = (product, quantity) => {
    setItems((prevItems) => {
      if (prevItems.find((item) => item.id === product.id)) return prevItems; // Item already in basket, do not add again

      return [...prevItems, { ...product, quantity }]; // Add new item with quantity
    });
  };

  const removeFromBag = (productId) => {
    setItems((prevItems) => {
      return prevItems.filter((item) => item.id !== productId); // Remove item by filtering it out
    });
  };

  const updateQuantity = (productId, quantity) => {
    setItems((prevItems) => {
      return prevItems.map(
        (item) => (item.id === productId ? { ...item, quantity } : item) // Update quantity if item matches
      );
    });
  };

  const emptyBasket = () => {
    setItems([]);
  };

  return (
    <BasketContext.Provider
      value={{ items, addToBag, removeFromBag, updateQuantity, emptyBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}
