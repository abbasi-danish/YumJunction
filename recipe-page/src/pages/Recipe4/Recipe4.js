import React, { useState } from 'react';
import frogfood from '../../images/frogfood.jpg';
import NewPage from '../../components/NewPage/NewPage';
import Carousel from '../../components/Carousel/Carousel';

function Recipe4() {
    const ingredients = ["1 (6 ounce) can tomato paste, 1/2 onion, chopped, 1/4 cup minced garlic, 3/4 cup water, 4 tablespoons olive oil, divided, salt and ground black pepper to taste, 1 small eggplant, trimmed and very thinly sliced, 1 zucchini, trimmed and very thinly sliced, 1 yellow squash, trimmed and very thinly sliced, 1 red bell pepper, cored and very thinly sliced, 1 yellow bell pepper, cored and very thinly sliced, 1 teaspoon fresh thyme leaves, 3 tablespoons mascarpone cheese"];
    const directions = ["Preheat the oven to 375 degrees F (190 degrees C).",
        "Spread tomato paste onto the bottom of a 10-inch square baking dish. Sprinkle with onion and garlic. Stir in water and 1 tablespoon olive oil until thoroughly combined. Season with salt and pepper.",
        "Arrange alternating slices of eggplant, zucchini, yellow squash, red bell pepper, and yellow bell pepper, starting at the outer edge of the dish and working concentrically towards the center. Overlap slices a little to display colors.",
        "Drizzle vegetables with remaining 3 tablespoons olive oil; season with salt and pepper. Sprinkle with thyme leaves. Cover vegetables with a piece of parchment paper cut to fit inside.",
        "Bake in the preheated oven until vegetables are roasted and tender, about 45 minutes. Serve with dollops of mascarpone cheese."];

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
                        title='Beignets'
                        pageImage={frogfood}
                        ingredients={ingredients}
                        directions={directions}
                    />
                </div>
            )}
        </div>
    );
}

export default Recipe4;