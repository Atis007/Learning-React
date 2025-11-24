import { createSlice } from "@reduxjs/toolkit";
const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  // a 'map' of all the reducers this slice needs
  reducers: {
    increment(state) {
      // here it *seems* to be allowed to mutate the state
      // still must not manipulate the existing state
      // but when using redux toolkit (and its functions like createSlice), then cant accidentally manipulate the existing state
      // because the redux toolkit internally uses another package, immer,
      // which will detect code like this, and automatically clone the existing state, create a new state object,
      // keep all the state which was not edited, and overwrite the state which are edited in an immutable way
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload; // payload is the default property name for the data sent with the action, so need to access that
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
