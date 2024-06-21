import React, { useState, useEffect } from "react";

function CounterComponent() {
  // Declare a state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // useEffect hook to perform side effects in function components
  useEffect(() => {
    // Update the document title with the current count value
    document.title = `Count: ${count}`;

    // Log a message to the console whenever 'count' changes
    console.log(`Count has been updated to: ${count}`);

    // The effect depends on 'count', so it will run every time 'count' changes
  }, [count]); // Dependency array, only re-run the effect if 'count' changes

  return (
    <div>
      {/* Display the current value of 'count' */}
      <h3>Count: {count}</h3>

      {/* Button to increment the 'count' state when clicked */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default CounterComponent;
