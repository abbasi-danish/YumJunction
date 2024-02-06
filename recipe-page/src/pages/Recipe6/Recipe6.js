import React from 'react';
import frogfood from '../../images/frogfood.jpg';
import NewPage from '../../components/NewPage/NewPage';

function Recipe6() {
    const ingredients = ["3/4 cup lukewarm water, 3 1/2 teaspoons active dry yeast, 2 large eggs, 1/2 cup whole milk, 3 tablespoons unsalted butter, melted, 1/4 cup granulated sugar, plus 2 tablespoons, 4 ups bread flour, plus more for dusting, 1/2 teaspoon kosher salt, 8 cups canola oil, for frying, powdered sugar (for topping)"];
    const directions = ["Pour the water into a medium bowl or large liquid measuring cup and sprinkle the yeast over the top. Let stand for about 5 minutes, until foamy.",
    "Add the eggs, milk, melted butter, and sugar, and whisk to combine.",
    "In a large bowl, whisk together the flour and salt.",
    "Pour the wet ingredients into the dry ingredients, stirring with a flexible spatula to form a shaggy dough. Turn the dough out onto a clean surface and use your hands to knead until it comes together in a smooth ball, about 2 minutes.",
    "Grease a clean large bowl with canola oil. Transfer the dough to the greased bowl and cover tightly with plastic wrap. Let the dough rise in a warm place until doubled in size, about 1 hour.",
    "Punch the dough down with your fist, then turn it out onto a lightly floured surface.",
    "Roll the dough into a large rectangle, about ¼ inch (6 mm) thick. With a sharp knife, cut the dough into 2-inch (5 cm) squares, then transfer the squares to a baking sheet lined with parchment paper.",
    "Heat the canola oil in a large pot over medium-high heat until it reaches 350˚F (180˚C).",
    "Lower the dough squares, 3-4 at a time, into the hot oil. As soon as the beignets puff up, use tongs or a kitchen spider to gently flip them over. Fry until golden brown on both sides, flipping as needed, 2-3 minutes more. Transfer the beignets to a wire rack to drain.",
    "Dust the beignets with powdered sugar and serve warm. And enjoy!"];
    return (
       <div className = "recipe">
            <NewPage
            title = "Princess and the Frog: Beignets"
            pageImage = {frogfood}
            ingredients = {ingredients}
            directions = {directions}
            />
       </div>

    );
}
export default Recipe6;