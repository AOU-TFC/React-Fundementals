import React from "react";
import CounterReducer from "../Hooks/useReducer/CounterReducer";
import TodoList from "../Hooks/useReducer/TodoList";

function UseReducer() {
  return (
    <div>
      {/* Rendering the CounterReducer component */}
      <CounterReducer />
      {/* Rendering the TodoList component */}
      <TodoList />
    </div>
  );
}

export default UseReducer;
