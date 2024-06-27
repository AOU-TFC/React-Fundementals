import React, { useContext, useState } from "react";
import AuthContext from "./AuthContext"; // Importing AuthContext

const Profile = () => {
  // Consuming AuthContext using useContext hook
  const { user, login, logout } = useContext(AuthContext);

  // Local state to manage username and password inputs
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Function to handle login button click
  const handleLogin = () => {
    login(username, password); // Call login function from AuthContext
    setUsername(""); // Clear username input after login
    setPassword(""); // Clear password input after login
  };

  return (
    <div>
      {/* Conditional rendering based on user authentication */}
      {user ? (
        // If user is authenticated
        <div>
          <h2>Welcome, {user.username}!</h2>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        // If user is not authenticated
        <div>
          <p>Please log in.</p>
          {/* Username input */}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)} // Update username state on change
          />
          {/* Password input */}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Update password state on change
          />
          {/* Login button */}
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
