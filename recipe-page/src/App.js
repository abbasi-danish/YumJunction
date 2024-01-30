import React from 'react';
import Accordion from './Accordion';
import perfectSandwich from './images/perfect-sandwich.jpg';
import adventureTime from './images/adventure-time.jpg';
import baconPancakes from './images/bacon-pancakes.jpg';
import couragelogo from './images/courage-logo.png';
import spongeboblogo from './images/spongebob-logo.png';
import krabbypatty from './images/krabbypatty.jpg';
import flan from './images/courage-flan.png';
import logo from './images/logo.png';
import ratlogo from './images/ratlogo.png';
import ratFood from './images/ratFood.jpg';
import frogfood from './images/frogfood.jpg';
import froglogo from './images/froglogo.png';


import banana from './images/FoodofStar.png';
import ForceofEvil from './images/ForceofEvil.jpg';


function App() {
  const ingredients = [" 1 boneless ribeye (the size of your bread)", " 2 sprigs thyme", " 2 sprigs rosemary", " Salt & freshly ground pepper", " 1 lobster soul", " 1 cup vegetable oil", " Juice of 1 lemon", " 3 egg yolks", " 1/2 pound bacon", " 1 Cornish game hen, deboned", " 3 thinly sliced rounds of Vidalia onion, plus more for tear-gathering", " 1 large, long sourdough loaf", " 3 Tbsp cream cheese", " 3 Tbsp fresh dill, picked", " 1 dill pickle, sliced thinly", " 1 egg, hard-boiled, peeled, and sliced", " 10 thin slices of cucumber", " 8 thin slices of Roma tomato", " 2 tsp tears", " 1 bird from the counter"];
  const directions = [
    "Vacuum seal ribeye with thyme, rosemary, salt, and pepper, and place in a sous vide bath set at 135°F for 2 hours.",
    "Preheat oven to 350°F.  Steam lobster tail for for 8 minutes, remove meat and reserve for other applications.  Break up the shell into pieces and place in a high-powered blender along with vegetable oil, and blend for 30-60 seconds, or until lobster is finely ground.  Simmer mixture for 15 minutes, and strain through a fine mesh sieve.  Set aside to cool completely.",
    "In an immersion blender cup, combine lemon and egg yolks.  Blend briefly to combine, and with immersion blender running, slowly pour lobster oil down the side of the cup, until a thick aioli forms.  Refrigerate until ready to use.",
    "Cook bacon as desired, reserve fat.  Brush Cornish game hen with fat, and fry skin-side-down in a hot cast iron skillet, flipping once golden.  After flipping, place in the oven and cook until meat registers 165°F, about 10 minutes.",
    "Assemble the sandwich - halve the loaf, and torch both sides of the interior with a culinary torch (only for accuracy - recommend toasting bread in the oven or throwing under the broiler).  Spread with cream cheese, and shingle sliced pickles on one side of the sandwich, while sprinkling dill on the other side of the sandwich.  On the pickle side of the sandwich, shingle the hard-boiled egg slices, followed by the Cornish game hen, followed by cucumber, then sweet yellow onion, Roma tomatoes, steak, tears, and bacon.  Coat the other side of the bread with lobster aioli, top the sandwich, slice, and serve."];
  const ingredients2 = ["285g all-purpose flour", "35g sugar", "1 ½ tsp baking powder", "1 ½ tsp baking soda", "Kosher salt", "2 ½ cups buttermilk", "2 eggs", "3 Tbsp melted butter", "Bacon", "Maple Syrup"];
  const directions2 = [
    "In a bowl, combine 285 grams of all-purpose flour, 35 grams of sugar, 1 ½ tsp each of baking powder and baking soda, and some kosher salt. Whisk to combine.",
    "In the middle of the mixture create a little well and add 2 ½ cups of buttermilk along with 2 eggs and 3 Tbsp of melted butter. Whisk to combine. Be sure not to over whisk. Lumps are okay.",
    "In a cast iron skillet, melt 1 Tbsp of butter over medium-high heat before adding your pancake batter.",
    "Before flipping, add some strips of bacon and then flip.",
    "Make 2-3 pancakes before topping with butter and maple syrup."
];
const ingredients3 = ["1 cup granulated sugar", "1/4 cup water", "4 large eggs", "2 cups whole milk", "1 teaspoon vanilla extract"];
const directions3 = [
  "Preheat oven to 350°F. Place a 9-inch round cake pan in a large roasting pan.",
  "In a small saucepan, combine sugar and water. Cook over medium heat, stirring occasionally, until sugar is dissolved and mixture is a light caramel color, about 10 minutes. Immediately pour into cake pan, swirling to coat bottom of pan.",
  "In a large bowl, whisk together eggs, milk, and vanilla. Pour into cake pan over caramel. Place roasting pan in oven and pour in enough boiling water to come halfway up sides of cake pan.",
  "Bake until flan is set but still jiggles slightly in center, about 1 hour. Remove cake pan from water bath and let cool completely on a wire rack. Cover and refrigerate until cold, at least 4 hours or overnight.",
  "To unmold, run a knife around edge of flan. Place a large plate over cake pan and invert. Remove cake pan and serve flan cold.",
  "Enjoy!"
];
const ingredients4 = ["2 cups ground beef", "1/4 cup breadcrumbs", "1/4 cup chopped onions", "1/4 cup chopped pickles", "1/4 cup ketchup", "1/4 cup mustard", "1/4 teaspoon salt", "1/4 teaspoon pepper", "4 hamburger buns"]
const directions4 = ["In a large bowl, add ground beef  and seasonings and shape into four patties", 
"Grill, covered, over medium heat or broil 4 in.", "Heat for 5-7 minutes on each side or until a thermometer reads 160° and juices run clear.", 
"Serve on buns.",
"Enjoy!"];

const ingredients7 =["4 ripe bananas, Yellow food coloring"];
const directions7 = [
  "Peel and thinly slice the bananas. Freeze the banana slices for at least two hours. Place the frozen banana slices in a food processor.",
  "Blend, occasionally scraping down the sides of the bowl, until the bananas are smooth and creamy. Add a few drops of yellow food coloring and blend until the color is evenly distributed.",
  "Serve immediately or freeze for later. Enjoy!"
];

const ingredients5 = ["3/4 cup lukewarm water, 3 1/2 teaspoons active dry yeast, 2 large eggs, 1/2 cup whole milk, 3 tablespoons unsalted butter, melted, 1/4 cup granulated sugar, plus 2 tablespoons, 4 ups bread flour, plus more for dusting, 1/2 teaspoon kosher salt, 8 cups canola oil, for frying, powdered sugar (for topping)"];
const directions5 = ["Pour the water into a medium bowl or large liquid measuring cup and sprinkle the yeast over the top. Let stand for about 5 minutes, until foamy.",
"Add the eggs, milk, melted butter, and sugar, and whisk to combine.",
"In a large bowl, whisk together the flour and salt.",
"Pour the wet ingredients into the dry ingredients, stirring with a flexible spatula to form a shaggy dough. Turn the dough out onto a clean surface and use your hands to knead until it comes together in a smooth ball, about 2 minutes.",
"Grease a clean large bowl with canola oil. Transfer the dough to the greased bowl and cover tightly with plastic wrap. Let the dough rise in a warm place until doubled in size, about 1 hour.",
"Punch the dough down with your fist, then turn it out onto a lightly floured surface.",
"Roll the dough into a large rectangle, about ¼ inch (6 mm) thick. With a sharp knife, cut the dough into 2-inch (5 cm) squares, then transfer the squares to a baking sheet lined with parchment paper.",
"Heat the canola oil in a large pot over medium-high heat until it reaches 350˚F (180˚C).",
"Lower the dough squares, 3-4 at a time, into the hot oil. As soon as the beignets puff up, use tongs or a kitchen spider to gently flip them over. Fry until golden brown on both sides, flipping as needed, 2-3 minutes more. Transfer the beignets to a wire rack to drain.",
"Dust the beignets with powdered sugar and serve warm. And enjoy!"];
    
const ingredients6 = ["1 (6 ounce) can tomato paste, 1/2 onion, chopped, 1/4 cup minced garlic, 3/4 cup water, 4 tablespoons olive oil, divided, salt and ground black pepper to taste, 1 small eggplant, trimmed and very thinly sliced, 1 zucchini, trimmed and very thinly sliced, 1 yellow squash, trimmed and very thinly sliced, 1 red bell pepper, cored and very thinly sliced, 1 yellow bell pepper, cored and very thinly sliced, 1 teaspoon fresh thyme leaves, 3 tablespoons mascarpone cheese"];
const directions6 = ["Preheat the oven to 375 degrees F (190 degrees C).",
"Spread tomato paste onto the bottom of a 10-inch square baking dish. Sprinkle with onion and garlic. Stir in water and 1 tablespoon olive oil until thoroughly combined. Season with salt and pepper.",
"Arrange alternating slices of eggplant, zucchini, yellow squash, red bell pepper, and yellow bell pepper, starting at the outer edge of the dish and working concentrically towards the center. Overlap slices a little to display colors.",
"Drizzle vegetables with remaining 3 tablespoons olive oil; season with salt and pepper. Sprinkle with thyme leaves. Cover vegetables with a piece of parchment paper cut to fit inside.",
"Bake in the preheated oven until vegetables are roasted and tender, about 45 minutes. Serve with dollops of mascarpone cheese."
];



  return (
    <div className="App">
      <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <h1 style={{ fontFamily: 'Impact' }}>YumJunction</h1>
            </div>
        <Accordion 
          header_Image={adventureTime}
          accordion_Image={perfectSandwich}
          title={"Adventure Time: Jake's Perfect Sandwich"}
          description={"In the whimsical world of Adventure Time, Jake the Dog crafts a sandwich beyond imagination in 'Time Sandwich.' With layers of savory bacon, crisp lettuce, zesty mustard, and a sprinkle of magic, each bite becomes a journey through flavor and fantasy, capturing the essence of Ooo in every delicious bite."}
          ingredients={ingredients}
          directions={directions}
        />
        <Accordion
          header_Image={adventureTime}
          accordion_Image={baconPancakes}
          title={"Adventure Time: Jake's Bacon Pancakes"}
          description={"Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time! This enchanting dish combines fluffy pancakes with crispy bacon, creating a magical blend of sweet and savory flavors. Whisk together a batter of flour, sugar, and spices, then cook to golden perfection in a cast iron skillet. Top with butter and maple syrup for a truly adventurous breakfast experience that's sure to delight fans of all ages!"}
          ingredients={ingredients2}
          directions={directions2}
          />
        <Accordion
        header_Image={couragelogo}
        accordion_Image={flan}
        title={"Courage the Cowardly Dog: Muriel's Flan"}
        description="In the classic episode 'The Great Fusilli,' Courage the Cowardly Dog must save Muriel from the clutches of the evil Fusilli, who plans to turn her into a flan! In this recipe, we'll be making a flan of our own, with a rich caramel sauce and a creamy custard filling."
        ingredients={ingredients3}
        directions={directions3}
        />
        <Accordion
        header_Image={ForceofEvil}
        accordion_Image={banana}
        title={"Star vs. Forces of Evil: Banagic IceCream"}
        description="The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil. This recipe is a delicious combination of bananas, magic, and ice cream. It's a perfect treat for a hot summer day or a magical adventure!"
        ingredients={ingredients7}
        directions={directions7}
        />
      <Accordion 
      header_Image={spongeboblogo}
      accordion_Image={krabbypatty}
      title={"Spongebob Squarepants: Krabby Patty"}
      description={"In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty. With a secret recipe known only to Mr. Krabs, the Krabby Patty is a mouthwatering blend of lettuce, cheese, tomatoes, tartar sauce, mayo, flour, tumeric, sea salt, land salt, barnacle shavings, the patty, mustard, ketchup, the secret formula, two buns, onions, and pickles. In this recipe, we'll be making our own Krabby Patty, with a few substitutions for the secret formula."}
      ingredients={ingredients4}
      directions={directions4}
      
      />

<Accordion 
      header_Image={froglogo}
      accordion_Image={frogfood}
      title={"Princess and the Frog: Beignets"}
      description={"Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen"}
      ingredients={ingredients5}
      directions={directions5}
      />

      <Accordion 
      header_Image={ratlogo}
      accordion_Image={ratFood}
      title={"Ratatouille: Remy's Ratatouille"}
      description={"Take part in the favor packed, adventure with Remy's Ratatouille. Inspired by Disney's delightful rat chef, expertly layered vegetables dancing in perfect harmony, creating a symphony of taste that will transport you back to your childhood!"}
      ingredients={ingredients6}
      directions={directions6}
      />
    </div>
  )
}


export default App;
