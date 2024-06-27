import React from "react";
import Counter, { Counter2, Counter3 } from "../Hooks/useState/Counter"; // Importing Counter components
import ToggleText, { ToggleText2, ToggleText3 } from "../Hooks/useState/Toggle"; // Importing ToggleText components

function UseState() {
  return (
    <div>
      {/* Rendering useState examples */}
      <Counter />
      <Counter2 />
      <Counter3 />
      <ToggleText />
      <ToggleText2 />
      <ToggleText3 />
    </div>
  );
}

export default UseState;
