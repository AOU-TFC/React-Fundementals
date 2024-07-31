import React from "react"; // Importing the React library
import "../Styles/Navbar.css"; // Importing the CSS file for Navbar styling
import { Link } from "react-router-dom"; // Importing the Link component from 'react-router-dom' for navigation

// Defining the Navbar component
function Navbar() {
  return (
    <div className="Navbar-Container">
      {/* Main container div for the Navbar */}
      <ul>
        {/* Unordered list for the navigation links */}
        <li>
          {/* List item containing a link to the useState page */}
          <Link to="/use-state">useState</Link>
        </li>
        <li>
          {/* List item containing a link to the useEffect page */}
          <Link to="/use-effect">useEffect</Link>
        </li>
        <li>
          {/* List item containing a link to the useContext page */}
          <Link to="/use-context">useContext</Link>
        </li>
        <li>
          {/* List item containing a link to the useRef page */}
          <Link to="/use-ref">useRef</Link>
        </li>
        <li>
          {/* List item containing a link to the useReducer page */}
          <Link to="/use-reducer">useReducer</Link>
        </li>
        {/* List item containing a link to the useCallback page */}
        <li>
          <Link to="/use-callback">useCallback</Link>
        </li>
        <li>
          <Link to="/use-memo">useMemo</Link>
        </li>
        <li>
          <Link to="/custom-hook">Custom Hook</Link>
        </li>
      </ul>
    </div>
  );
}

// Exporting the Navbar component as the default export
export default Navbar;
