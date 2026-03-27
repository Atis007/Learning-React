"use client";
import styles from "./addToBag.module.css";
import { useBasket } from "../../context/BasketContext";
import { useState } from "react";

/*
This is the separate client component for the Add to Bag button, which is interactive and needs to use client-side hooks like useState or useEffect if needed in future
 */

export default function AddToBag({ product }) {
  const { addToBag, removeFromBag, updateQuantity, items } = useBasket();
  const itemInBag = items.find((item) => item.id === product.id); // Check if the item is already in the bag
  const [quantity, setQuantity] = useState(itemInBag ? itemInBag.quantity : 1); // Initialize quantity based on whether item is in bag

  const handleQuantityChange = (newQuantity) => {
    if (newQuantity < 1) return; // Prevent quantity less than 1
    if (newQuantity > product.stock) return; // Prevent quantity more than stock
    setQuantity(newQuantity);
    if (itemInBag) {
      updateQuantity(product.id, newQuantity); // Update quantity in context if item is already in bag
    }
  }

  return (
    <div className={styles["add-to-bag"]}>
      <div className={styles.quantity}>
        <button
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= 1}
          className="minimal"
        >
          -
        </button>
        <input disabled value={quantity} />
        <button
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={quantity >= product.stock}
          className="minimal"
        >
          +
        </button>
      </div>

      {/* Conditional rendering based on item presence in basket:
         - If already in basket: Show confirmation and remove option
         - If not in basket: Show "Add to bag" button */}
      {itemInBag ? (
        <div className={styles.actions}>
          <p>Added to basket</p>
          <button onClick={() => removeFromBag(product.id)} className="outline">
            Remove
          </button>
        </div>
      ) : (
        <button onClick={() => addToBag(product, quantity)}>Add to bag</button>
      )}
    </div>
  );
}
