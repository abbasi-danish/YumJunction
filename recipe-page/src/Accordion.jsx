import React, { useState } from 'react';
import perfectSandwich from './images/perfect-sandwich.png';
import logo from './images/logo.png';

export default function Accordion() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="App">
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <h1>YumJunction</h1>
            </div>
            <div className="accordion">
                <div onClick={() => setIsOpen(!isOpen)} className="accordion-header">
                    <h2>Adventure Time: Jake's Perfect Sandwich</h2>
                </div>
                {isOpen && (
                    <div className="accordion-body">
                        <div className="accordion-body-content">
                            <div className="accordion-body-content-left">
                                <img className="perfect-sandwich" src={perfectSandwich} alt="perfect-sandwich" />
                            </div>
                            <div className="accordion-body-content-right">
                                <h3>Ingredients</h3>
                                <ul>
                                    <li>1/2 cup of milk</li>
                                    <li>1/2 cup of water</li>
                                    <li>1/2 cup of sugar</li>
                                    <li>1/2 cup of flour</li>
                                    <li>1/2 cup of butter</li>
                                    <li>1/2 cup of eggs</li>
                                    <li>1/2 cup of vanilla</li>
                                    <li>1/2 cup of salt</li>
                                    <li>1/2 cup of baking soda</li>
                                </ul>
                                <h3>Directions</h3>
                                <ol>
                                    <li>Preheat oven to 350 degrees F (175 degrees C). Grease and flour a 9x9 inch pan or line a muffin pan with paper liners.</li>
                                    <li>In a medium bowl, cream together the sugar and butter. Beat in the eggs, one at a time, then stir in the vanilla. Combine flour and baking powder, add to the creamed mixture and mix well. Finally stir in the milk until batter is smooth. Pour or spoon batter into the prepared pan.</li>
                                    <li>Bake for 30 to 40 minutes in the preheated oven. For cupcakes, bake 20 to 25 minutes. Cake is done when it springs back to the touch.</li>
                                </ol>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}