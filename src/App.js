import React from "react"; // Importing the React library
import "./App.css"; // Importing the main CSS file for styling
import { BrowserRouter, Routes, Route } from "react-router-dom"; // Importing necessary modules from 'react-router-dom' for routing
import Navbar from "./Components/Navbar"; // Importing the Navbar component
import Home from "./Pages/Home"; // Importing the Home component
import UseState from "./Pages/UseState"; // Importing the UseState page component
import UseEffect from "./Pages/UseEffect"; // Importing the UseEffect page component
import UseContext from "./Pages/UseContext"; // Importing the UseContext page component
import UseRef from "./Pages/UseRef"; // Importing the UseRef page component

// Defining the main App component
function App() {
  return (
    <div className="App">
      {/* Main container div */}
      <BrowserRouter>
        {" "}
        {/* Wrapping the application with BrowserRouter to enable routing */}
        <Navbar /> {/* Rendering the Navbar component */}
        <Routes>
          {" "}
          {/* Defining routes for the application */}
          <Route path="/" element={<Home />} />{" "}
          {/* Route for the Home component, accessible at the root path '/' */}
          <Route path="/use-state" element={<UseState />} />{" "}
          {/* Route for the UseState page component, accessible at '/use-state' */}
          <Route path="/use-effect" element={<UseEffect />} />{" "}
          {/* Route for the UseEffect page component, accessible at '/use-effect' */}
          <Route path="/use-context" element={<UseContext />} />{" "}
          {/* Route for the UseContext page component, accessible at '/use-context' */}
          <Route path="/use-ref" element={<UseRef />} />{" "}
          {/* Route for the UseRef page component, accessible at '/use-ref' */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
