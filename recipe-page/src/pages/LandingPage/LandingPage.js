import React from 'react';
import Accordion from '../../components/Accordion/Accordion';
import perfectSandwich from '../../images/perfect-sandwich.jpg';
import adventureTime from '../../images/adventure-time.jpg';
import baconPancakes from '../../images/bacon-pancakes.jpg';
import couragelogo from '../../images/courage-logo.png';
import spongeboblogo from '../../images/spongebob-logo.png';
import krabbypatty from '../../images/krabbypatty.jpg';
import logo from '../../images/logo.png';
import ratlogo from '../../images/ratlogo.png';
import ratFood from '../../images/ratFood.jpg';
import frogfood from '../../images/frogfood.jpg';
import froglogo from '../../images/froglogo.png';
import banana from '../../images/FoodofStar.png';
import ForceofEvil from '../../images/ForceofEvil.jpg';
import { Link } from 'react-router-dom';
import './LandingPage.css';


function LandingPage() {

//   const ingredients2 = ["285g all-purpose flour", "35g sugar", "1 ½ tsp baking powder", "1 ½ tsp baking soda", "Kosher salt", "2 ½ cups buttermilk", "2 eggs", "3 Tbsp melted butter", "Bacon", "Maple Syrup"];
//   const directions2 = [
//     "In a bowl, combine 285 grams of all-purpose flour, 35 grams of sugar, 1 ½ tsp each of baking powder and baking soda, and some kosher salt. Whisk to combine.",
//     "In the middle of the mixture create a little well and add 2 ½ cups of buttermilk along with 2 eggs and 3 Tbsp of melted butter. Whisk to combine. Be sure not to over whisk. Lumps are okay.",
//     "In a cast iron skillet, melt 1 Tbsp of butter over medium-high heat before adding your pancake batter.",
//     "Before flipping, add some strips of bacon and then flip.",
//     "Make 2-3 pancakes before topping with butter and maple syrup."
// ];

// const ingredients4 = ["2 cups ground beef", "1/4 cup breadcrumbs", "1/4 cup chopped onions", "1/4 cup chopped pickles", "1/4 cup ketchup", "1/4 cup mustard", "1/4 teaspoon salt", "1/4 teaspoon pepper", "4 hamburger buns"]
// const directions4 = ["In a large bowl, add ground beef  and seasonings and shape into four patties", 
// "Grill, covered, over medium heat or broil 4 in.", "Heat for 5-7 minutes on each side or until a thermometer reads 160° and juices run clear.", 
// "Serve on buns.",
// "Enjoy!"];

// const ingredients7 =["4 ripe bananas, Yellow food coloring"];
// const directions7 = [
//   "Peel and thinly slice the bananas. Freeze the banana slices for at least two hours. Place the frozen banana slices in a food processor.",
//   "Blend, occasionally scraping down the sides of the bowl, until the bananas are smooth and creamy. Add a few drops of yellow food coloring and blend until the color is evenly distributed.",
//   "Serve immediately or freeze for later. Enjoy!"
// ];

// const ingredients5 = ["3/4 cup lukewarm water, 3 1/2 teaspoons active dry yeast, 2 large eggs, 1/2 cup whole milk, 3 tablespoons unsalted butter, melted, 1/4 cup granulated sugar, plus 2 tablespoons, 4 ups bread flour, plus more for dusting, 1/2 teaspoon kosher salt, 8 cups canola oil, for frying, powdered sugar (for topping)"];
// const directions5 = ["Pour the water into a medium bowl or large liquid measuring cup and sprinkle the yeast over the top. Let stand for about 5 minutes, until foamy.",
// "Add the eggs, milk, melted butter, and sugar, and whisk to combine.",
// "In a large bowl, whisk together the flour and salt.",
// "Pour the wet ingredients into the dry ingredients, stirring with a flexible spatula to form a shaggy dough. Turn the dough out onto a clean surface and use your hands to knead until it comes together in a smooth ball, about 2 minutes.",
// "Grease a clean large bowl with canola oil. Transfer the dough to the greased bowl and cover tightly with plastic wrap. Let the dough rise in a warm place until doubled in size, about 1 hour.",
// "Punch the dough down with your fist, then turn it out onto a lightly floured surface.",
// "Roll the dough into a large rectangle, about ¼ inch (6 mm) thick. With a sharp knife, cut the dough into 2-inch (5 cm) squares, then transfer the squares to a baking sheet lined with parchment paper.",
// "Heat the canola oil in a large pot over medium-high heat until it reaches 350˚F (180˚C).",
// "Lower the dough squares, 3-4 at a time, into the hot oil. As soon as the beignets puff up, use tongs or a kitchen spider to gently flip them over. Fry until golden brown on both sides, flipping as needed, 2-3 minutes more. Transfer the beignets to a wire rack to drain.",
// "Dust the beignets with powdered sugar and serve warm. And enjoy!"];
    
// const ingredients6 = ["1 (6 ounce) can tomato paste, 1/2 onion, chopped, 1/4 cup minced garlic, 3/4 cup water, 4 tablespoons olive oil, divided, salt and ground black pepper to taste, 1 small eggplant, trimmed and very thinly sliced, 1 zucchini, trimmed and very thinly sliced, 1 yellow squash, trimmed and very thinly sliced, 1 red bell pepper, cored and very thinly sliced, 1 yellow bell pepper, cored and very thinly sliced, 1 teaspoon fresh thyme leaves, 3 tablespoons mascarpone cheese"];
// const directions6 = ["Preheat the oven to 375 degrees F (190 degrees C).",
// "Spread tomato paste onto the bottom of a 10-inch square baking dish. Sprinkle with onion and garlic. Stir in water and 1 tablespoon olive oil until thoroughly combined. Season with salt and pepper.",
// "Arrange alternating slices of eggplant, zucchini, yellow squash, red bell pepper, and yellow bell pepper, starting at the outer edge of the dish and working concentrically towards the center. Overlap slices a little to display colors.",
// "Drizzle vegetables with remaining 3 tablespoons olive oil; season with salt and pepper. Sprinkle with thyme leaves. Cover vegetables with a piece of parchment paper cut to fit inside.",
// "Bake in the preheated oven until vegetables are roasted and tender, about 45 minutes. Serve with dollops of mascarpone cheese."
// ];



  return (
    <div className="LandingPage">
      <div className="header" style={{ borderBottom: "3px solid black", width: "100%"}}>
                <div className="logo-container">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <h1 style={{ fontFamily: 'Impact' }}>YumJunction</h1>
            </div>
            <div className = "website-description">
                <h2 style={{ textAlign: "left" }}>Welcome!</h2>
                <p style={{ textAlign: "left" }}>YumJunction is a website that provides recipes for food from your favorite TV shows and movies. We hope you enjoy!</p>
            </div>
        <Accordion 
          header_Image={adventureTime}
          accordion_Image={perfectSandwich}
          title={ <Link to="/recipe1">Adventure Time</Link>} 
          description={"In the whimsical world of Adventure Time, Jake the Dog crafts a sandwich beyond imagination in 'Time Sandwich.' With layers of savory bacon, crisp lettuce, zesty mustard, and a sprinkle of magic, each bite becomes a journey through flavor and fantasy, capturing the essence of Ooo in every delicious bite."}
        />
        <Accordion
          header_Image={adventureTime}
          accordion_Image={baconPancakes}
          title={"Adventure Time: Jake's Bacon Pancakes"}
          description={"Discover the whimsical delight of Jake's Bacon Pancakes from Adventure Time! This enchanting dish combines fluffy pancakes with crispy bacon, creating a magical blend of sweet and savory flavors. Whisk together a batter of flour, sugar, and spices, then cook to golden perfection in a cast iron skillet. Top with butter and maple syrup for a truly adventurous breakfast experience that's sure to delight fans of all ages!"}
          />
        <Accordion
        header_Image={couragelogo}
        title= { <Link to="/recipe2">Courage the Cowardly Dog</Link>} 
        description="In the classic episode 'The Great Fusilli,' Courage the Cowardly Dog must save Muriel from the clutches of the evil Fusilli, who plans to turn her into a flan! In this recipe, we'll be making a flan of our own, with a rich caramel sauce and a creamy custard filling."
    
        />
        <Accordion
        header_Image={ForceofEvil}
        accordion_Image={banana}
        title={"Star vs. Forces of Evil: Banagic IceCream"}
        description="The Banagic Ice Cream is a magical treat from the show Star vs. Forces of Evil. This recipe is a delicious combination of bananas, magic, and ice cream. It's a perfect treat for a hot summer day or a magical adventure!"
        />
      <Accordion 
      header_Image={spongeboblogo}
      accordion_Image={krabbypatty}
      title={"Spongebob Squarepants: Krabby Patty"}
      description={"In the underwater city of Bikini Bottom, Spongebob Squarepants works as a fry cook at the Krusty Krab, where he crafts the world-famous Krabby Patty. With a secret recipe known only to Mr. Krabs, the Krabby Patty is a mouthwatering blend of lettuce, cheese, tomatoes, tartar sauce, mayo, flour, tumeric, sea salt, land salt, barnacle shavings, the patty, mustard, ketchup, the secret formula, two buns, onions, and pickles. In this recipe, we'll be making our own Krabby Patty, with a few substitutions for the secret formula."}
      />

<Accordion 
      header_Image={froglogo}
      accordion_Image={frogfood}
      title={"Princess and the Frog: Beignets"}
      description={"Indulge in the enchanting joy of Princess and the Frog Beignets—irresistibly fluffy, golden pillows of delight that bring a touch of Disney magic to your kitchen"}
      />

      <Accordion 
      header_Image={ratlogo}
      accordion_Image={ratFood}
      title={"Ratatouille: Remy's Ratatouille"}
      description={"Take part in the favor packed, adventure with Remy's Ratatouille. Inspired by Disney's delightful rat chef, expertly layered vegetables dancing in perfect harmony, creating a symphony of taste that will transport you back to your childhood!"}
      />
    </div>
  )
}


export default LandingPage;
