import React, { useState } from 'react';
import './Accordion.css';

export default function Accordion({header, food, title, description, ingredients, directions}) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="App">
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <h2>{title}</h2>
                    <img className="accordion-image" src={header} alt='Cartoon Image'/>
                    <div className = "accordion-indicator">
                        {isOpen ? '-' : '+'}
                    </div>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <div className="accordion-body-content">
                            <div className="accordion-body-content-left">
                                <img className="perfect-sandwich" src={food} alt="Food Image" />
                            </div>
                            <div className="accordion-body-content-right">
                                <h3>Description</h3>
                                <p>{description}</p>
                                <h3>Ingredients</h3>
                                <ul>
                                    {ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </ul>
                                <h3>Directions</h3>
                                <ol>
                                    {directions.map((direction, index) => (
                                        <li key={index}>{direction}</li>
                                    ))}
                                </ol>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}