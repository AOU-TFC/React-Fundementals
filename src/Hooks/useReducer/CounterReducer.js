import React, { useReducer } from "react";

const CounterReducer = () => {
  // Initial state and reducer
  const initialState = { count: 0 }; // Initial state object with count initialized to 0
  const [state, dispatch] = useReducer(counterReducer, initialState); // useReducer hook to manage state with counterReducer

  return (
    <div>
      <h2>Counter Example</h2>
      <p>Count: {state.count}</p> {/* Display the current count from state */}
      {/* Buttons to dispatch actions to the reducer */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>Decrement</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
};

export default CounterReducer;

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 }; // Increment the count by 1
    case "DECREMENT":
      return { count: state.count - 1 }; // Decrement the count by 1
    case "RESET":
      return { count: 0 }; // Reset the count to 0
    default:
      return state; // Return the current state if action type doesn't match
  }
};
