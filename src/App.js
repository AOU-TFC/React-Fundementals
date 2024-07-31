// Importing necessary CSS and components
import "./App.css"; // Importing the main CSS file for styling
// Importing necessary modules from 'react-router-dom' for routing
import { BrowserRouter, Route, Routes } from "react-router-dom";
//Importing pages component
import Home from "./Pages/Home"; // Importing the Home component
import Navbar from "./Components/Navbar"; // Importing the Navbar component
import UseState from "./Pages/UseState"; // Importing the UseState component
import UseEffect from "./Pages/UseEffect"; // Importing the UseEffect component
import UseContext from "./Pages/UseContext"; // Importing the UseContext component
import UseRef from "./Pages/UseRef"; // Importing the UseRef component
import UseReducer from "./Pages/UseReducer"; // Importing the UseReducer component
import UseCallback from "./Pages/UseCallback"; // Importing the UseCallback component
import UseMemo from "./Pages/UseMemo"; // Importing the UseMemo component
import CustomHook from "./Pages/CustomHook"; // Importing the CustomHook component

// Main App component
function App() {
  return (
    <div className="App">
      {" "}
      {/* Main container div */}
      <BrowserRouter>
        {" "}
        {/* Wrapping the application with BrowserRouter to enable routing */}
        <Navbar /> {/* Rendering the Navbar component */}
        <Routes>
          {/* Defining routes for the application */}
          {/* Each Route component maps a path to a specific component */}
          <Route path="/" element={<Home />} />
          {/* Route for the Home page component, accessible at '/' */}
          <Route path="/use-state" element={<UseState />} />
          {/* Route for the UseState page component, accessible at '/use-state' */}
          <Route path="/use-effect" element={<UseEffect />} />
          {/* Route for the UseEffect page component, accessible at '/use-effect' */}
          <Route path="/use-context" element={<UseContext />} />
          {/* Route for the UseContext page component, accessible at '/use-context' */}
          <Route path="/use-ref" element={<UseRef />} />
          {/* Route for the UseRef page component, accessible at '/use-ref' */}
          <Route path="/use-reducer" element={<UseReducer />} />
          {/* Route for the UseReducer page component, accessible at '/use-reducer' */}
          <Route path="/use-callback" element={<UseCallback />} />
          {/* Route for the UseCallback page component, accessible at '/use-callback' */}
          <Route path="/use-memo" element={<UseMemo />} />
          {/* Route for the UseMemo page component, accessible at '/use-memo' */}
          <Route path="/custom-hook" element={<CustomHook />} />
          {/* Route for the CustomHook page component, accessible at '/custom-hook' */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
