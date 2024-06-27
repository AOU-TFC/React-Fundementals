import React, { createContext, useState } from "react";

// Create a new context instance using createContext() from React
const AuthContext = createContext();

// Export a named export 'AuthProvider' which is a functional component
export const AuthProvider = ({ children }) => {
  // Declare state variable 'user' with initial value 'null'
  const [user, setUser] = useState(null);

  // Function to simulate login authentication
  const login = (username, password) => {
    // Simulate authentication logic
    if (username === "user" && password === "password") {
      setUser({ username }); // Set user state to an object with username if credentials are correct
    } else {
      setUser(null); // Set user state to null if credentials are incorrect
    }
  };

  // Function to simulate logout action
  const logout = () => {
    setUser(null); // Clear user state (logout)
  };

  // Render the AuthContext.Provider component
  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export the AuthContext created earlier
export default AuthContext;
