import React, { useState, useEffect } from "react";

function DataFetchingComponent() {
  // Declare state variables using useState
  const [data, setData] = useState([]); // Initialize 'data' state as an empty array
  const [loading, setLoading] = useState(true); // Initialize 'loading' state as true

  // useEffect to fetch data from an API when the component mounts
  useEffect(() => {
    // Function to fetch data from an API asynchronously
    const fetchData = async () => {
      // Fetch data from the specified API endpoint
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      // Convert the response to JSON format
      const result = await response.json();
      // Update the 'data' state with the fetched data
      setData(result);
      // Set 'loading' state to false after data fetching is complete
      setLoading(false);
    };

    // Call fetchData function when the component mounts (empty dependency array)
    fetchData();
  }, []); // Empty dependency array means this effect runs only once when the component mounts

  // Render loading message while data is being fetched
  if (loading) {
    return <div>Loading...</div>;
  }

  // Render fetched data once loading is complete
  return (
    <div>
      <h3>Fetched Data:</h3>
      <ul>
        {/* Map through 'data' array and render each item's title as a list item */}
        {data.map((item) => (
          <li key={item.id}>
            {item.name}; {item.username}; {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DataFetchingComponent;
