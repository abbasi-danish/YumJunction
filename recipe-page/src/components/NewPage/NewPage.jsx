import React from "react"
export default function newPage({ title, ingredients, directions, pageImage }) {
    return (
        <div className="page">
            <div className="header" style={{ borderBottom: "3px solid black", width: "100%" }}>
                <h1>{title}</h1>
            </div>
            <div style={{ float: "right" }}>
                <img src={pageImage} alt="Dish" style={{ width: 700, height: "auto", border: "3px solid black" }} />
            </div>
            <h2>Ingredients</h2>
            <ul>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
            <h2>Instructions</h2>
            <ul>
                {directions.map((direction, index) => (
                    <li key={index}>{direction}</li>
                ))}
            </ul>
        </div>
    );
}