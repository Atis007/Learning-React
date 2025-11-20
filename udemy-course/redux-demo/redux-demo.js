const redux = require("redux"); //default node js import syntax for importing a third party package

// a reducer function is a standard js function, but it will be called by the Redux library
// and it will then always reveice two pieces of input
// the old(existing) state and the action that was dispatched
// then this reducer function must always return a new state object.
const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1, //referring to the existing state accessing the old counter value, which was stores in the state, and adding 1 to it, for the new counter value
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state; // if no relevant action was dispatched, we simply return the existing state unchanged
};

const store = redux.createStore(counterReducer); // to create a store

const counterSubscriber = () => {
  const latestState = store.getState(); // it will give the latest state snapshot, after it was updated
  console.log(latestState);
};

store.subscribe(counterSubscriber); // we register a listener function, that should be executed whenever a state change occurs

// an action is a JS object.
store.dispatch({ type: "increment" }); // we dispatch an action to signal Redux that something happened, and that it should update the state accordingly
store.dispatch({ type: "decrement" });
