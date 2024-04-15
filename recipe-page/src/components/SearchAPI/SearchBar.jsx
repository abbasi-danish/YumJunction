import React, { useState } from "react";
import "./SearchBar.css";

 
function SearchBar() {
    const [userInput, setUserInput] = useState("");
    const [searchResults, setSearchResults] = useState([]);
  
    const handleChange = (event) => {
      setUserInput(event.target.value);
    };
  
    const handleSearch = async () => {
      const apiKey = "G9HgUhZS9lI3Uht1IuivfUBF5r2oUtPkpfyLRgLf"; // Replace with your actual API key
      const url = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${userInput}&api_key=${apiKey}`;
  
      const response = await fetch(url);
      const data = await response.json();
  
      setSearchResults(data.foods); // Assuming "foods" holds search results
    };

return (
    <div>
      <input type="text" value={userInput} onChange={handleChange} />
      <button onClick={handleSearch}>Search</button>
      {searchResults.length > 0 && (
        <ul>
          {searchResults.map((item) => (
            <li key={item.fdcId}>{item.description}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;