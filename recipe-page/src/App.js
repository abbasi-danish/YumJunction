import React from 'react';
import Accordion from './Accordion';
import perfectSandwich from './images/perfect-sandwich.jpg';
import adventureTime from './images/adventure-time.jpg';
import baconPancakes from './images/bacon-pancakes.jpg';
import logo from './images/logo.png';


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
  return (
    <div className="App">
      <div className="header">
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <h1>YumJunction</h1>
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
    </div>
  )
}


export default App;
