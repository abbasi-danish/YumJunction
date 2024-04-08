import React, { useEffect } from "react";
import "./SearchBar.css";


function SearchBar() {
    useEffect(() => {
        fetch ('https://api.spoonacular.com/recipes/complexSearch?apiKey=4e0b1f3e2c7e4b5a8f7c3f6f9c8b3b5a&query=burger')
        .then(res => res.json())
        .then(data => console.log(data))
        .then(err => console.log(err))
    },[]);
    return (
        <div className="search">
            <input type ="text " placeholder="Search here..."/>
        </div>
    );
}

export default SearchBar;