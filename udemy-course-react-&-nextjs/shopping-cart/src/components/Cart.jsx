import { use, useContext } from "react";

import { CartContext } from "../store/shopping-cart-context";

export default function Cart() {
  //const { items } = useContext(CartContext); //one way to use context, with useContext, the other one is the use hook
  //const cartCtx = use(CartContext); //its just shorter but pretty much the same, but the use is a bit more flexible
  // the 'use' hook can be used inside if statements and loops, while useContext cannot
  // the useContext is the standard way for getting access to context in react components
  // but there is an alternative ( Consumer component -> inside older codebase)

  return (
    <CartContext.Consumer>
      {/* this component needs a special kind of child 
      if getting the context like this, than the code does not need the useContext hook
      and the data that comes from the context needs to be inside that object that is returned*/}
      {(cartCtx) => {
        const totalPrice = cartCtx.items.reduce(
          (acc, item) => acc + item.price * item.quantity,
          0
        );
        const formattedTotalPrice = `$${totalPrice.toFixed(2)}`;
        return (
          <div id="cart">
            {cartCtx.items.length === 0 && <p>No items in cart!</p>}
            {cartCtx.items.length > 0 && (
            <ul id="cart-items">
              {cartCtx.items.map((item) => {
                const formattedPrice = `$${item.price.toFixed(2)}`;

                return (
                  <li key={item.id}>
                    <div>
                      <span>{item.name}</span>
                      <span> ({formattedPrice})</span>
                    </div>
                    <div className="cart-item-actions">
                      <button onClick={() => cartCtx.updateItemQuantity(item.id, -1)}>
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => cartCtx.updateItemQuantity(item.id, 1)}>
                        +
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
            )}
            <p id="cart-total-price">
              Cart Total: <strong>{formattedTotalPrice}</strong>
            </p>
          </div>
        );
      }}
    </CartContext.Consumer>
  );
}
