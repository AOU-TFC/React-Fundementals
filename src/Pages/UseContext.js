import React from "react";
import { ThemeProvider } from "../Hooks/useContext/ThemeContext"; // Importing ThemeProvider from ThemeContext
import Button from "../Hooks/useContext/Button"; // Importing Button from ThemeContext

import { AuthProvider } from "../Hooks/useContext/AuthContext"; // Importing AuthProvider from AuthContext
import Profile from "../Hooks/useContext/Profile"; // Importing Profile component

function UseContext() {
  return (
    <div>
      {/* Rendering useContext example */}
      <ThemeProvider>
        <Button />
      </ThemeProvider>

      {/* Rendering useContext with AuthContext example */}
      <AuthProvider>
        <Profile />
      </AuthProvider>
    </div>
  );
}

export default UseContext;
