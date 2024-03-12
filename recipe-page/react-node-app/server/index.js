// server/index.js

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../build')))


let recipes = [
    {
        id: 1,
        title: "Perfect Sandwich",
        ingredients: ["1 boneless ribeye (the size of your bread)",
        "2 sprigs thyme",
        "2 sprigs rosemary",
        "Salt & freshly ground pepper",
        "1 lobster soul",
        "1 cup vegetable oil",
        "Juice of 1 lemon",
        "3 egg yolks",
        "1/2 pound bacon",
        "1 Cornish game hen, deboned",
        "3 thinly sliced rounds of Vidalia onion, plus more for tear-gathering",
        "1 large, long sourdough loaf",
        "3 Tbsp cream cheese",
        "3 Tbsp fresh dill, picked",
        "1 dill pickle, sliced thinly",
        "1 egg, hard-boiled, peeled, and sliced",
        "10 thin slices of cucumber",
        "8 thin slices of Roma tomato",
        "2 tsp tears",
        "1 bird from the counter"],
        instructions: ["Vacuum seal ribeye with thyme, rosemary, salt, and pepper, and place in a sous vide bath set at 135°F for 2 hours.",
        "Preheat oven to 350°F. Steam lobster tail for 8 minutes, remove meat and reserve for other applications. Break up the shell into pieces and place in a high-powered blender along with vegetable oil, and blend for 30-60 seconds, or until lobster is finely ground. Simmer mixture for 15 minutes, and strain through a fine mesh sieve. Set aside to cool completely.",
        "In an immersion blender cup, combine lemon and egg yolks. Blend briefly to combine, and with immersion blender running, slowly pour lobster oil down the side of the cup, until a thick aioli forms. Refrigerate until ready to use.",
        "Cook bacon as desired, reserve fat. Brush Cornish game hen with fat, and fry skin-side-down in a hot cast iron skillet, flipping once golden. After flipping, place in the oven and cook until meat registers 165°F, about 10 minutes.",
        "Assemble the sandwich - halve the loaf, and torch both sides of the interior with a culinary torch (only for accuracy - recommend toasting bread in the oven or throwing under the broiler). Spread with cream cheese, and shingle sliced pickles on one side of the sandwich, while sprinkling dill on the other side of the sandwich. On the pickle side of the sandwich, shingle the hard-boiled egg slices, followed by the Cornish game hen, followed by cucumber, then sweet yellow onion, Roma tomatoes, steak, tears, and bacon. Coat the other side of the bread with lobster aioli, top the sandwich, slice, and serve."]

    },

    {
        id: 2,
        title: "Muriel's Flan",
        ingredients: ["1 cup sugar",
        "1/4 cup water",
        "1 can (14 ounces) sweetened condensed milk",
        "1 can (12 ounces) evaporated milk",
        "1 package (8 ounces) cream cheese, softened",
        "5 large eggs, room temperature",
        "1 teaspoon vanilla extract",
        "1/2 teaspoon ground cinnamon",
        "1/4 teaspoon ground nutmeg",
        "1/4 teaspoon salt"],
        instructions: ["Preheat oven to 350°. In a small heavy saucepan, combine sugar and water. Cook, without stirring, over medium heat until a golden amber color. Quickly pour into an ungreased 2-qt. round baking or souffle dish, tilting to coat the bottom; let stand for 10 minutes.",
        "In a large bowl, beat the milks, cream cheese, eggs, vanilla, cinnamon, nutmeg and salt until smooth. Pour over caramelized sugar. Place dish in a larger baking pan. Add 1 in. of hot water to larger pan.",
        "Bake, uncovered, until center is just set (mixture will jiggle), 50-60 minutes. Remove dish from a larger pan to a wire rack; cool for 1 hour. Refrigerate, covered, at least 4 hours.",
        "To unmold, run a knife around sides and center of dish. Invert flan onto a large rimmed serving platter. Refrigerate leftovers."]

    },

    {
        id: 3,
        title: "Banagic Ice Cream",
        ingredients: ["3 ripe bananas",
        "1/4 cup sugar",
        "1/4 cup heavy cream",
        "1/4 cup milk",
        "1/2 teaspoon vanilla extract",
        "1/2 cup mini chocolate chips",
        "1/2 cup rainbow sprinkles",
        "1/2 cup whipped cream",
        "1/4 cup caramel sauce",
        "1/4 cup chocolate sauce",
        "1/4 cup chopped nuts",
        "1/4 cup maraschino cherries"],
        instructions: ["Peel bananas and slice into 1/2-inch rounds. Place banana slices in a single layer on a parchment-lined baking sheet. Freeze until solid, about 2 hours.",]

    },
    
        {
            id: 4,
            title: "Beignets",
            ingredients: ["1 1/2 cups warm water (100° to 110°)",
            "1/2 cup granulated sugar",
            "1 envelope active dry yeast",
            "2 large eggs",
            "1 cup evaporated milk",
            "2 teaspoons salt",
            "1/4 cup shortening",
            "7 cups bread flour",
            "1/4 cup powdered sugar",
            "Vegetable oil",
            "3 cups powdered sugar"],
            instructions: ["Combine warm water, sugar, and yeast in a large bowl; let stand for 5 minutes. Add eggs, and beat well. Stir in milk. Add salt and shortening. Gradually add 4 cups flour, and beat until smooth. Add enough remaining flour to form a soft dough. Place in a well-greased bowl, turning to grease top. Cover and chill 4 hours.",
            "Roll dough to 1/4-inch thickness; cut into 2 1/2-inch squares. Fry in 360° vegetable oil. Drain on paper towels. Dust with 3 cups powdered sugar."]
    
        },
    
        {
            id: 5,
            title: "Bacon Pancakes",
            ingredients: ["1 cup all-purpose flour",
            "1 tablespoon sugar",
            "2 teaspoons baking powder",
            "1/2 teaspoon baking soda",
            "1/4 teaspoon salt",
            "1 cup buttermilk",
            "1/4 cup milk",
            "1 large egg",
            "2 tablespoons unsalted butter, melted",
            "6 slices bacon, cooked and crumbled",
            "Maple syrup, for serving"],
            instructions: ["In a large bowl, combine flour, sugar, baking powder, baking soda, and salt. In another bowl, beat buttermilk, milk, egg, and melted butter. Stir into dry ingredients just until moistened. Fold in bacon.",
            "Pour batter by 1/4 cupfuls onto a greased hot griddle. Turn when bubbles form on top of pancakes. Cook until second side is golden brown. Serve with syrup."]
    
        },
    
        {
            id: 6,
            title: "Krabby Patty",
            ingredients: ["1/4 cup dried bread crumbs",
            "1/4 cup mayonnaise",
            "1/4 cup ketchup"]

        }
];

app.get("/api/recipes", (req, res) => {
    res.json(recipes);

});

app.get("/api", (req, res) => {
    res.json({ message: "Hello from Express!" });
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../build/index.html'));
  });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});