import React, { createContext, useState } from "react";

// Create a new context instance using createContext() from React
const ThemeContext = createContext();

// Export a named export 'ThemeProvider' which is a functional component
export const ThemeProvider = ({ children }) => {
  // Declare state variable 'theme' with initial value 'light'
  const [theme, setTheme] = useState("light");

  // Function to toggle the theme between 'light' and 'dark'
  const toggleTheme = () => {
    // Update 'theme' state based on previous state (prevTheme)
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Render the ThemeContext.Provider component
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Render all child components passed as 'children' */}
      {children}
    </ThemeContext.Provider>
  );
};

// Export the ThemeContext created earlier
export default ThemeContext;
