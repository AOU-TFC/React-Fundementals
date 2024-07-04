import React from "react";
import Callback1 from "../Hooks/useCallback/Callback1";
import Callback2 from "../Hooks/useCallback/Callback2";

function UseCallback() {
  return (
    <div>
      {/* Rendering the Callback1 component */}
      <Callback1 />
      {/* Rendering the Callback2 component */}
      <Callback2 />
    </div>
  );
}

export default UseCallback;
