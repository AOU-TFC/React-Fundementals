import React from "react";
import "./App.css";
import Counter, { Counter2, Counter3 } from "./Hooks/useState/Counter"; // Importing Counter components
import ToggleText, { ToggleText2, ToggleText3 } from "./Hooks/useState/Toggle"; // Importing ToggleText components
import CounterComponent from "./Hooks/useEffect/CounterComponent"; // Importing CounterComponent
import DataFetchingComponent from "./Hooks/useEffect/DataFetching";
function App() {
  return (
    <div className="App">
      <h1>React Fundamentals</h1>
      {/* Rendering useState examples */}
      <h2>useState</h2>
      <Counter />
      <Counter2 />
      <Counter3 />
      <ToggleText />
      <ToggleText2 />
      <ToggleText3 />

      {/* Rendering useEffect example */}
      <h2>useEffect</h2>
      <CounterComponent />

      {/* Rendering useEffect with data fetching example */}
      <DataFetchingComponent />
    </div>
  );
}

export default App;
