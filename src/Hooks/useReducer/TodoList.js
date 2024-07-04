import React, { useReducer, useState } from "react";

// Reducer function to manage the state of the todo list
const todoReducer = (state, action) => {
  switch (action.type) {
    // When the action type is "ADD_TODO", a new todo item is added to the state
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.payload }];
    // When the action type is "REMOVE_TODO", the specified todo item is removed from the state
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.payload);
    // Default case returns the current state if the action type is not recognized
    default:
      return state;
  }
};

function TodoList() {
  // useReducer to manage the list of tasks
  const [task, dispatch] = useReducer(todoReducer, []);
  // useState to manage the current input text for a new todo
  const [todoText, setTodoText] = useState("");

  // Function to handle adding a new todo item
  const handleAddTodo = () => {
    // Ensure the input text is not empty
    if (todoText.trim() !== "") {
      // Dispatch an action to add the new todo item
      dispatch({ type: "ADD_TODO", payload: todoText });
      // Clear the input field
      setTodoText("");
    }
  };

  // Function to handle removing a todo item
  const handleRemoveTodo = (id) => {
    // Dispatch an action to remove the todo item with the specified id
    dispatch({ type: "REMOVE_TODO", payload: id });
  };

  return (
    <div>
      {/* Input field for entering a new task */}
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        placeholder="Enter a task..."
      />
      {/* Button to add the new task */}
      <button onClick={handleAddTodo}>Add Task</button>
      <ul>
        {/* Render the list of tasks */}
        {task.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            {/* Button to remove the task */}
            <button onClick={() => handleRemoveTodo(todo.id)}>
              Remove Task
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
