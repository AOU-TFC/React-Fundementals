import React, { useState } from "react";

// Counter1 Component
function Counter() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <h3>Counter1</h3>
      <p>You clicked {count} times</p>
      {/* Update the count state when button is clicked */}
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default Counter;

// Counter2 Component
function Counter2() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle button click event and increment the count state
  const handleAddition = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h3>Counter2</h3>
      <p>You clicked {count} times</p>
      {/* Update the count state when button is clicked */}
      <button onClick={handleAddition}>Click me</button>
    </div>
  );
}

// Counter3 Component
function Counter3() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to handle button click event and increment the count state multiple times
  const handleAddition = () => {
    // Use the functional form of setState to update the count multiple times in a single event
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <h3>Counter3</h3>
      <p>You clicked {count} times</p>
      {/* Update the count state multiple times when button is clicked */}
      <button onClick={handleAddition}>Click me</button>
    </div>
  );
}

export { Counter2, Counter3 };
