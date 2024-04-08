import React, { useState } from 'react';
import banana from '../../images/FoodofStar.png';
import NewPage from '../../components/NewPage/NewPage';
import Carousel from '../../components/Carousel/Carousel';
import SearchBar from '../../components/SearchAPI/SearchBar';

function Recipe3() {
    const ingredients = ["4 ripe bananas, Yellow food coloring"];
    const directions = [
        "Peel and thinly slice the bananas. Freeze the banana slices for at least two hours. Place the frozen banana slices in a food processor.",
        "Blend, occasionally scraping down the sides of the bowl, until the bananas are smooth and creamy. Add a few drops of yellow food coloring and blend until the color is evenly distributed.",
        "Serve immediately or freeze for later. Enjoy!"
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
            <SearchBar />
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
                        title='Banagic IceCream'
                        pageImage={banana}
                        ingredients={ingredients}
                        directions={directions}
                    />
                </div>
            )}
        </div>
    );
}

export default Recipe3;