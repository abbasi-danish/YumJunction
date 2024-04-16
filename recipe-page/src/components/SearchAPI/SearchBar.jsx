import { useEffect, useState } from "react";
import { Modal, Button } from 'react-bootstrap';
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
}

export default SearchBar;