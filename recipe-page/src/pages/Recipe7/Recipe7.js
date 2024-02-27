import React, { useContext} from 'react';
import ratFood from '../../images/ratFood.jpg';
import NewPage from '../../components/NewPage/NewPage';

import { GroceryListContext } from '../../components/GroceryList/grocerylistcontext';
function Recipe7() {
    const { groceryList, setGroceryList } = useContext(GroceryListContext);
    const ingredients = ["1 (6 ounce) can tomato paste, 1/2 onion, chopped, 1/4 cup minced garlic, 3/4 cup water, 4 tablespoons olive oil, divided, salt and ground black pepper to taste, 1 small eggplant, trimmed and very thinly sliced, 1 zucchini, trimmed and very thinly sliced, 1 yellow squash, trimmed and very thinly sliced, 1 red bell pepper, cored and very thinly sliced, 1 yellow bell pepper, cored and very thinly sliced, 1 teaspoon fresh thyme leaves, 3 tablespoons mascarpone cheese"];
const directions = ["Preheat the oven to 375 degrees F (190 degrees C).",
"Spread tomato paste onto the bottom of a 10-inch square baking dish. Sprinkle with onion and garlic. Stir in water and 1 tablespoon olive oil until thoroughly combined. Season with salt and pepper.",
"Arrange alternating slices of eggplant, zucchini, yellow squash, red bell pepper, and yellow bell pepper, starting at the outer edge of the dish and working concentrically towards the center. Overlap slices a little to display colors.",
"Drizzle vegetables with remaining 3 tablespoons olive oil; season with salt and pepper. Sprinkle with thyme leaves. Cover vegetables with a piece of parchment paper cut to fit inside.",
"Bake in the preheated oven until vegetables are roasted and tender, about 45 minutes. Serve with dollops of mascarpone cheese."
];
    return (
       <div className = "recipe">
            <NewPage
            title = "Ratatouille"
            pageImage = {ratFood}
            ingredients = {ingredients}
            directions = {directions}
            />
       </div>

    );
}
export default Recipe7;