
import React, { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';

import React, { useState } from "react";

import "./SearchBar.css";

function SearchBar() {

    const [query, setQuery] = useState(""); // holds the user's search query
    const [data, setData] = useState(null); // holds the fetched data
    const [showPopup, setShowPopup] = useState(false); // controls the display of the popup
    const [searchClicked, setSearchClicked] = useState(false); // controls when to fetch data

    useEffect(() => {
        if (query !== "" && searchClicked) {
            const API_KEY = process.env.REACT_APP_API_KEY; // Get the API key from the environment
            const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${query}`;
            fetch (url)
            .then(res => res.json())
            .then(data => {
                console.log('Fetched data:', data); // Log the fetched data
                setData(data); // store the fetched data
                setShowPopup(true); // show the popup
            })
            .catch(err => console.error(err)); // Catch and log any errors
            setSearchClicked(false); // reset searchClicked to false after fetching data
        }
    }, [query, searchClicked]); // This effect depends on `query` and `searchClicked` and runs whenever either changes

    return (
        <div className="search">
            <input type ="text" 
            placeholder="Search here..."
            onChange={(e) => setQuery(e.target.value)}
            />
            <button onClick={() => setSearchClicked(true)}>Search</button>
            <Modal show={showPopup} onHide={() => setShowPopup(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Nutrient Information</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {data && data.foods[0].foodNutrients.map((nutrient, index) => (
                        <div key={index}>
                            <p>Nutrient Name: {nutrient.nutrientName} {nutrient.nutrientNumber + nutrient.unitName}</p>
                        </div>
                    ))}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowPopup(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
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