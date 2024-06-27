import React, { useContext } from "react";
import ThemeContext from "./ThemeContext"; // Import the ThemeContext created earlier

const Button = () => {
  // Use useContext hook to consume the ThemeContext
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button
      // Inline styles based on the current theme
      style={{
        backgroundColor: theme === "light" ? "#fff" : "#333", // Light or dark background color
        color: theme === "light" ? "#333" : "#fff", // Text color contrasting with the background
      }}
      onClick={toggleTheme} // Clicking toggles the theme
    >
      Toggle Theme
    </button>
  );
};

export default Button;
