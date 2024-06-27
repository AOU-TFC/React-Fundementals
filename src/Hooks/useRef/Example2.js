import React, { useRef, useState, useEffect } from "react";

const Example2 = () => {
  // Create a ref using useRef to reference the resizable box
  const boxRef = useRef(null);

  // State to hold the width of the box
  const [boxWidth, setBoxWidth] = useState(0);

  // useEffect hook to measure the width of the box when the component updates
  useEffect(() => {
    // Measure the width of the box using clientWidth property of boxRef.current
    const width = boxRef.current.clientWidth;
    // Update the boxWidth state with the measured width
    setBoxWidth(width);
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      <h2>Not Very Easy Example</h2>
      {/* Div element with ref={boxRef} to reference the resizable box */}
      <div
        ref={boxRef}
        style={{ width: "50%", backgroundColor: "lightblue", padding: "20px" }}
      >
        This is a resizable box.
      </div>
      {/* Display the width of the box */}
      <p>Box width: {boxWidth}px</p>
    </div>
  );
};

export default Example2;
