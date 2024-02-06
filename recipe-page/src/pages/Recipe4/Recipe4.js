import React from 'react';
import banana from '../../images/FoodofStar.png';
import NewPage from '../../components/NewPage/NewPage';

function Recipe4() {
    const ingredients = ["4 ripe bananas, Yellow food coloring"];
    const directions = [
        "Peel and thinly slice the bananas. Freeze the banana slices for at least two hours. Place the frozen banana slices in a food processor.",
        "Blend, occasionally scraping down the sides of the bowl, until the bananas are smooth and creamy. Add a few drops of yellow food coloring and blend until the color is evenly distributed.",
        "Serve immediately or freeze for later. Enjoy!"
      ];
    return (
       <div className = "recipe">
            <NewPage
            title = "Star vs. Forces of Evil: Banagic IceCream"
            pageImage = {banana}
            ingredients = {ingredients}
            directions = {directions}
            />
       </div>

    );
}
export default Recipe4;