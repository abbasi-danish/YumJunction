import React, { useState } from 'react';
import baconPancakes from '../../images/bacon-pancakes.jpg';
import NewPage from '../../components/NewPage/NewPage';
import Carousel from '../../components/Carousel/Carousel';

function Recipe5() {
    const ingredients = ["285g all-purpose flour", "35g sugar", "1 ½ tsp baking powder", "1 ½ tsp baking soda", "Kosher salt", "2 ½ cups buttermilk", "2 eggs", "3 Tbsp melted butter", "Bacon", "Maple Syrup"];
    const directions = [
        "In a bowl, combine 285 grams of all-purpose flour, 35 grams of sugar, 1 ½ tsp each of baking powder and baking soda, and some kosher salt. Whisk to combine.",
        "In the middle of the mixture create a little well and add 2 ½ cups of buttermilk along with 2 eggs and 3 Tbsp of melted butter. Whisk to combine. Be sure not to over whisk. Lumps are okay.",
        "In a cast iron skillet, melt 1 Tbsp of butter over medium-high heat before adding your pancake batter.",
        "Before flipping, add some strips of bacon and then flip.",
        "Make 2-3 pancakes before topping with butter and maple syrup."
    ];

    const [cookingMode, setCookingMode] = useState(false);

    const toggleCookingMode = () => {
        setCookingMode(!cookingMode);
    };

    const exitCookingMode = () => {
        setCookingMode(false);
    };

    return (
        <div>
            <div className='cookingMode'>
                {cookingMode ? (
                    <div>
                        <Carousel
                            slides={directions.map((direction, index) => ({
                                type: 'text',
                                content: direction,
                                id: index,
                            }))}
                            title='Cooking Mode'
                        />
                        <button onClick={exitCookingMode}>Exit Cooking Mode</button>
                    </div>
                ) : (
                    <button onClick={toggleCookingMode}>Cooking Mode</button>
                )}
            </div>
            {!cookingMode && (
                <div className='recipe'>
                    <NewPage
                        title='Bacon Pancakes'
                        pageImage={baconPancakes}
                        ingredients={ingredients}
                        directions={directions}
                    />
                </div>
            )}
        </div>
    );
}

export default Recipe5;