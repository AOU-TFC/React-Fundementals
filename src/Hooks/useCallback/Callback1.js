import React, { useState, useCallback } from "react";

function Callback1() {
  // useState to manage the count state
  const [count, setCount] = useState(0);

  // useCallback to memoize the handleClick function
  const handleClick = useCallback(() => {
    // Increment the count state by 1
    setCount(count + 1);
  }, [count]); // Dependency array: handleClick will be recreated if count changes

  return (
    <div>
      <h2>Callback Example</h2>
      {/* Display the current count */}
      <p>Count: {count}</p>
      {/* Button to increment the count */}
      <button onClick={handleClick}>Increment Count</button>
    </div>
  );
}

export default Callback1;
