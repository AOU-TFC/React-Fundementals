import React, { useState, useCallback } from "react";

// ChildComponent receives a function prop `onButtonClick`
const ChildComponent = ({ onButtonClick }) => {
  // Local handler that calls the `onButtonClick` prop with a random number
  const handleClick = () => {
    onButtonClick(Math.random());
  };
  return (
    <div>
      <h3>Child Component</h3>
      {/* Button to generate a random number */}
      <button onClick={handleClick}>Generate Random Number</button>
    </div>
  );
};

function Callback2() {
  // useState to manage the random number state
  const [randomNumber, setRandomNumber] = useState(null);

  // useCallback to memoize the handleButtonClick function
  const handleButtonClick = useCallback((number) => {
    // Set the random number state to the generated number
    setRandomNumber(number);
  }, []); // Dependency array: handleButtonClick will not be recreated because the array is empty

  return (
    <div>
      <h2>Parent Component</h2>
      {/* Display the current random number */}
      <p>Random Number: {randomNumber}</p>
      {/* Pass the memoized handleButtonClick function to the ChildComponent */}
      <ChildComponent onButtonClick={handleButtonClick} />
    </div>
  );
}

export default Callback2;
