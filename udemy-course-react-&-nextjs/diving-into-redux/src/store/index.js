//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter.js";
import authReducer from "./auth.js";

const store = configureStore({
  // behind the scenes, configureStore will merge all reducers into one big reducer
  // or if having only one reducer, can directly assign that reducer from counterSlice
  //reducer: counterSlice.reducer,
  reducer: { counter: counterReducer, auth: authReducer },
});

export default store;

// Keep this commented code, for reference purposes
/*const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    // NEVER MUTATE STATE LIKE THIS:
    //state.counter ++;
    //return {
      //counter: state.counter + 1,
      //showCounter: state.showCounter,
    //};
    //objects are reference types, so if we mutate the existing state object, redux will think that nothing has changed because the reference is still the same.

    //ALWAYS return a brand new object
    return {
      // the objects which is returned in the reducer will not be merged with the existing state, they will overwrite the existing state
      // so MUST ALWAYS set all the other states when updating a piece of state.
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }

  if (action.type === "toogle") {
    return {
      showCounter: !state.showCounter, //inverting the boolean value
      counter: state.counter,
    };
  }

  return state;
};*/
