import React, { useState } from "react";

// ToggleText Component
function ToggleText() {
  // Declare a state variable 'isHello' with an initial value of true
  const [isHello, setIsHello] = useState(true);

  return (
    <div>
      <h3>Toggle text 1</h3>
      {/* Display "Hello, World!" if 'isHello' is true, otherwise display "Goodbye, World!" */}
      <p>{isHello ? "Hello, World!" : "Goodbye, World!"}</p>
      {/* Toggle the value of 'isHello' state when button is clicked */}
      <button onClick={() => setIsHello(!isHello)}>Toggle Text</button>
    </div>
  );
}

export default ToggleText;

// ToggleText2 Component
function ToggleText2() {
  // Declare a state variable 'text' with an initial value of an empty string
  const [text, setText] = useState("");

  // Function to handle input change event and update the 'text' state
  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h3>Toggle text 2</h3>
      {/* Display the current value of 'text' state */}
      <p>{text}</p>
      {/* Update the 'text' state when the input value changes */}
      <input
        type="text"
        value={text}
        onChange={handleInputChange}
        placeholder="Enter some text"
      />
    </div>
  );
}

// ToggleText3 Component
function ToggleText3() {
  // Declare a state variable 'inputValue' to manage form input with an initial value of an empty string
  const [inputValue, setInputValue] = useState({
    textInput: "",
  });
  // Declare a state variable 'text' to manage the displayed text with an initial value of an empty string
  const [text, setText] = useState("");

  // Function to handle input change event and update the 'inputValue' state
  const handleTextChange = (e) => {
    e.preventDefault();
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  // Function to handle form submission event and update the 'text' state with the input value
  const handleFormSubmission = (event) => {
    event.preventDefault();
    setText(inputValue.textInput);
  };

  return (
    <div>
      <h3>Toggle text 3</h3>
      {/* Display the current value of 'text' state */}
      <p>{text}</p>
      {/* Handle form submission to update the displayed text */}
      <form onSubmit={handleFormSubmission}>
        <input name="textInput" type="text" onChange={handleTextChange} />
        <button type="submit">change text</button>
      </form>
    </div>
  );
}

export { ToggleText2, ToggleText3 };
