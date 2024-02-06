import React from 'react';
import baconPancakes from '../../images/bacon-pancakes.jpg';
import NewPage from '../../components/NewPage/NewPage';

function Recipe2() {
    const ingredients = ["285g all-purpose flour", "35g sugar", "1 ½ tsp baking powder", "1 ½ tsp baking soda", "Kosher salt", "2 ½ cups buttermilk", "2 eggs", "3 Tbsp melted butter", "Bacon", "Maple Syrup"];
    const directions = [
        "In a bowl, combine 285 grams of all-purpose flour, 35 grams of sugar, 1 ½ tsp each of baking powder and baking soda, and some kosher salt. Whisk to combine.",
        "In the middle of the mixture create a little well and add 2 ½ cups of buttermilk along with 2 eggs and 3 Tbsp of melted butter. Whisk to combine. Be sure not to over whisk. Lumps are okay.",
        "In a cast iron skillet, melt 1 Tbsp of butter over medium-high heat before adding your pancake batter.",
        "Before flipping, add some strips of bacon and then flip.",
        "Make 2-3 pancakes before topping with butter and maple syrup."
    ];
    return (
       <div className = "recipe">
            <NewPage
            title = "Jake's Bacon Pancakes"
            pageImage = {baconPancakes}
            ingredients = {ingredients}
            directions = {directions}
            />
       </div>

    );
}
export default Recipe2;