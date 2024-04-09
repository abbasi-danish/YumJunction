import React, { useEffect, useState } from "react";
import "./SearchBar.css";

 
function SearchBar() {
    const [query, setQuery] = useState(""); // holds the user's search query

    useEffect(() => {
        if (query !== "") {
            const API_KEY = "G9HgUhZS9lI3Uht1IuivfUBF5r2oUtPkpfyLRgLf";
            const url = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${API_KEY}&query=${query}`;
        fetch (url)
        .then(res => res.json())
        .then(data => {
            console.log(data);
        })
        .catch(err => console.error(err)); // Catch and log any errors
    }
}, [query]); // This effect depends on `query` and runs whenever `query` changes
    return (
        <div className="search">
            <input type ="text" 
            placeholder="Search here..."
            onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    );
}

export default SearchBar;