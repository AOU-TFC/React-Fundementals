import React, { useRef, useEffect } from "react";

const Example1 = () => {
  // Create a ref using useRef
  const inputRef = useRef(null);

  // useEffect hook to focus the input field when the component mounts
  useEffect(() => {
    // Focus the input field using inputRef.current
    inputRef.current.focus();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>Example 1</h2>
      {/* Input field without using useRef */}
      <input type="text" placeholder="without useRef" />
      <br />
      {/* Input field with useRef, ref is assigned to inputRef */}
      <input ref={inputRef} type="text" placeholder="with useRef" />
      <p>Start typing!</p>
    </div>
  );
};

export default Example1;
