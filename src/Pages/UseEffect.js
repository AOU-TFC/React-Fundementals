import React from "react";
import CounterComponent from "../Hooks/useEffect/CounterComponent"; // Importing CounterComponent
import DataFetchingComponent from "../Hooks/useEffect/DataFetching"; // Importing DataFetchingComponent

function UseEffect() {
  return (
    <div>
      {/* Rendering useEffect example */}
      <CounterComponent />

      {/* Rendering useEffect with data fetching example */}
      <DataFetchingComponent />
    </div>
  );
}

export default UseEffect;
